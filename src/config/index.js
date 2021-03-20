import { isDevMode } from 'utils/base'

export const DATA_COUNT_PER_PAGE = 15

export const GA_ID = 'UA-192564086-1'

export const INITIAL_DATA_PATH = isDevMode
  ? '/zhuo-zhu-data.json'
  : '/song-search-xstate-local/zhuo-zhu-data.json'

export const LOCAL_STORAGE_KEY = {
  INITIAL_DATA: 'initial-data',
  SELECTED_BOOKS_VOLUME_RANGE: 'selected-books-volume-range',
  SELECTED_BOOKS: 'selected-books',
}

export const DEFAULT_BOOKS_VOLUME_RANGE = {
  '最新排行(簡譜)': [1, 104],
}

export const SONG_FIELDS = {
  BOOK: 'book',
  TITLE: 'title',
  ARTIST: 'artist',
  VOLUME: 'volume',
  PAGE: 'page',
  TOTAL_PAGE: 'totalPage',
  NOTE: 'note',
}

export const SONG_SEARCH_KEY_FIELDS = [
  SONG_FIELDS.BOOK,
  SONG_FIELDS.TITLE,
  SONG_FIELDS.ARTIST,
  SONG_FIELDS.VOLUME,
]
