const BUFFER_TIME = 300

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min
}

const menuState = {
  menu: {
    initial: 'closed',
    on: {
      CLOSE_MENU: '.closed',
      OPEN_MENU: '.opened',
    },
    states: {
      closed: {
        on: {
          TOGGLE_MENU: 'opened',
        },
      },
      opened: {
        on: {
          TOGGLE_MENU: 'closed',
        },
      },
    },
  },
}

const searchPage = {
  searchPage: {
    on: {
      SET_KEYWORD: [
        {
          cond: 'isEmptyKeyword',
          actions: ['setKeyword', 'resetResult'],
          target: '.idle.idle',
        },
        {
          cond: 'isInvalidKeyword',
          actions: ['setKeyword'],
        },
        {
          cond: 'skipDebounceSearch',
          actions: ['setKeyword'],
          target: '.searching',
        },
        {
          actions: ['setKeyword'],
          target: '.buffering',
          internal: false,
        },
      ],
      TOGGLE_CLEAR: [
        {
          cond: 'hasNoResult',
          actions: 'clearKeyword',
          target: '.idle.idle',
        },
        { cond: 'withKeyword', actions: 'clearKeyword' },
        { actions: 'resetResult', target: '.idle.idle' },
      ],
    },
    initial: 'idle',
    states: {
      idle: {
        initial: 'idle',
        states: {
          idle: {},
          withData: {
            on: {
              READ_MORE: { actions: 'readMore' },
            },
          },
          noData: {},
        },
      },
      buffering: {
        after: {
          [BUFFER_TIME]: 'searching',
        },
      },
      searching: {
        entry: ['searchSongList', 'scrollToTop'],
        exit: ['updateKeywordParam', 'sendDimension', 'setPageview'],
        always: [
          {
            cond: 'hasNoResult',
            target: 'idle.noData',
          },
          { target: 'idle.withData' },
        ],
      },
    },
  },
}

const rootState = {
  root: {
    initial: 'startup',
    states: {
      startup: {
        entry: ['initialGA', 'sendDimension', 'setPageview'],
        always: [
          {
            cond: 'withSettingInLocalStorage',
            target: 'idle',
            actions: ['restoreSetting', 'filterSongList'],
          },
          { target: 'fetchRawData' },
        ],
      },
      fetchRawData: {
        invoke: {
          id: 'fetch-initial-data',
          src: 'fetchInitialData',
          onDone: {
            target: 'idle',
            actions: ['initializeData', 'storeSetting', 'filterSongList'],
          },
          onError: 'error',
        },
      },
      /* These three states are dummy aim to demo loading animation. */
      processData: {
        after: {
          [getRandomArbitrary(2000, 4000)]: 'arrangeRawData',
        },
      },
      arrangeRawData: {
        after: {
          [getRandomArbitrary(2000, 4000)]: 'optimizeSearchSpeed',
        },
      },
      optimizeSearchSpeed: {
        after: {
          [getRandomArbitrary(1000, 3000)]: 'idle',
        },
      },
      /* Dummy states end. */
      idle: {
        type: 'parallel',
        states: {
          ...menuState,
          ...searchPage,
        },
      },
      error: {
        on: {
          RETRY: 'fetchRawData',
        },
      },
    },
  },
}

export default rootState
