import { assign } from 'xstate'
import { clearBlanks, isDevMode } from 'utils/base'
import { setLocalStorage, getLocalStorage } from 'utils/localStorage'
import { generateBookVolumeRange } from 'utils/result'
import history from 'config/history'
import {
  LOCAL_STORAGE_KEY,
  DEFAULT_BOOKS_VOLUME_RANGE,
  SONG_SEARCH_KEY_FIELDS,
  GA_ID,
} from 'config/index'
import { isEmpty, keys, toPairs } from 'lodash'
import matchSorter from 'match-sorter'

const gaActions = {
  initialGA: ({ ReactGA }) => {
    ReactGA.initialize(GA_ID, { debug: isDevMode })
  },
  setPageview: ({ ReactGA }) => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  },
  sendDimension: ({ ReactGA, keyword = '' }) => {
    ReactGA.set({ ua: navigator.userAgent })
    ReactGA.set({ k: keyword })
  },
}

const routeActions = {
  updateKeywordParam: ({ keyword }) => {
    history.push({ search: `?k=${keyword}` })
  },
}

const assignActions = {
  setKeyword: assign({ keyword: (_, { keyword = '' }) => keyword }),
  clearKeyword: assign({ keyword: '' }),
  resetResult: assign({ result: [], pageNumber: 1 }),
  readMore: assign({ pageNumber: ({ pageNumber }) => pageNumber + 1 }),

  searchSongList: assign({
    result: ({ songList, keyword }) =>
      matchSorter(songList, clearBlanks(keyword), {
        keys: SONG_SEARCH_KEY_FIELDS,
      }),
  }),

  initializeData: assign((_, { data: { data: initialData } }) => {
    const { songs = [], availableBooks = [] } = initialData

    const booksVolumeRange = generateBookVolumeRange(initialData)

    const selectedBooksVolumeRange = toPairs(booksVolumeRange).reduce(
      (acc, [book, range]) => {
        const hasDefaultRange = keys(DEFAULT_BOOKS_VOLUME_RANGE).includes(book)
        return {
          ...acc,
          [book]: hasDefaultRange ? DEFAULT_BOOKS_VOLUME_RANGE[book] : range,
        }
      },
      {}
    )

    return {
      initialData,
      allSongList: songs,
      selectedBooks: availableBooks,
      availableBooks,
      booksVolumeRange,
      selectedBooksVolumeRange,
    }
  }),

  filterSongList: assign(
    ({ allSongList, selectedBooksVolumeRange, selectedBooks }) => {
      const songList = allSongList.filter(({ book, volume }) => {
        // Not available
        if (!selectedBooks.includes(book)) return false

        // Has no volume limitations
        if (!keys(selectedBooksVolumeRange).includes(book)) return true

        // Has no volume range
        if (isEmpty(selectedBooksVolumeRange[book])) return true

        const [min, max] = selectedBooksVolumeRange[book]
        return volume >= min && volume <= max
      })

      return { songList }
    }
  ),
}

const effectActions = {
  scrollToTop: () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },

  restoreSetting: assign(() => {
    const initialData = getLocalStorage(LOCAL_STORAGE_KEY.INITIAL_DATA)
    const selectedBooksVolumeRange = getLocalStorage(
      LOCAL_STORAGE_KEY.SELECTED_BOOKS_VOLUME_RANGE
    )
    const selectedBooks = getLocalStorage(LOCAL_STORAGE_KEY.SELECTED_BOOKS)
    const booksVolumeRange = generateBookVolumeRange(initialData)

    return {
      initialData,
      selectedBooksVolumeRange,
      selectedBooks,
      booksVolumeRange: booksVolumeRange,
      allSongList: initialData?.songs ?? [],
      availableBooks: initialData?.availableBooks ?? [],
    }
  }),

  storeSetting: ({ initialData, selectedBooksVolumeRange, selectedBooks }) => {
    setLocalStorage(LOCAL_STORAGE_KEY.INITIAL_DATA, initialData)
    setLocalStorage(LOCAL_STORAGE_KEY.SELECTED_BOOKS, selectedBooks)
    setLocalStorage(
      LOCAL_STORAGE_KEY.SELECTED_BOOKS_VOLUME_RANGE,
      selectedBooksVolumeRange
    )
  },
}

export default {
  ...effectActions,
  ...assignActions,
  ...gaActions,
  ...routeActions,
}
