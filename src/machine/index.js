import { Machine } from 'xstate'
import states from './fsm'
import guards from './guards'
import actions from './actions'
import services from './services'

/**
 * From static JSON file:
 *   booksWithVolumeFilter - Array
 *   availableBooks - Array
 *   books - Array
 *   songs - Array
 *
 * Custom options
 *   selectedBooksVolumeRange
 *   selectedBooks
 */
const initialContext = {
  ReactGA: null,
  keyword: '',
  pageNumber: 1,
  error: null,

  // from raw data
  initialData: {},
  allSongList: [],
  availableBooks: [],
  booksVolumeRange: {},

  // custom options
  selectedBooksVolumeRange: {},
  selectedBooks: [],
  // list after filtered (volume & book)
  songList: [],
  // search result
  result: [],
}

export const ZhuoZhuSearchMachine = Machine(
  {
    id: 'ZhuoZhuSearch',
    context: initialContext,
    type: 'parallel',
    states,
  },
  {
    actions,
    guards,
    services,
  }
)
