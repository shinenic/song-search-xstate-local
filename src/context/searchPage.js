import React, { createContext, useContext } from 'react'
import { useMachine } from '@xstate/react'
import { ZhuoZhuSearchMachine } from 'machine/index'
import { isDevMode } from 'utils/base'
import ReactGA from 'react-ga'

const SearchPageContext = createContext()

export const useSearchPageContext = () => useContext(SearchPageContext)

/* 
  @TODO:
    1. History: save search history into local storage
    2. Implement menu for other pages
*/
const SearchPageProvider = ({ children }) => {
  const [state, send] = useMachine(ZhuoZhuSearchMachine, {
    devTools: isDevMode,
    context: { ReactGA },
  })

  // For Debug
  if (isDevMode) {
    console.table(state.value)
    console.log(state)
    console.log(state.context)
  }

  const getSendActions = () => ({
    openMenu: () => send('OPEN_MENU'),
    closeMenu: () => send('CLOSE_MENU'),
    toggleMenu: () => send('TOGGLE_MENU'),
    setKeyword: (keyword = '', skipDebounce = false) =>
      send({ type: 'SET_KEYWORD', keyword, skipDebounce }),
    toggleClear: () => send('TOGGLE_CLEAR'),
    readMore: () => send('READ_MORE'),
    retry: () => send('RETRY'),
  })

  const getSearchPageContext = () => {
    const { context } = state
    return {
      state,
      send,
      context,
      actions: {
        ...getSendActions(),
      },
    }
  }

  return (
    <SearchPageContext.Provider value={getSearchPageContext()}>
      {children}
    </SearchPageContext.Provider>
  )
}

export default SearchPageProvider
