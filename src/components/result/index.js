import React from 'react'
import { useSearchPageContext } from 'context/searchPage'

import Idle from './idle'
import NoResult from './noResult'
import ShowResult from './showResult'
import LoadingSpinner from 'components/common/loadingSpinner'

const Result = () => {
  const { state } = useSearchPageContext()

  switch (true) {
    case state.matches('root.idle.searchPage.idle.idle'):
      return <Idle />
    case state.matches('root.idle.searchPage.idle.withData'):
      return <ShowResult />
    case state.matches('root.idle.searchPage.idle.noData'):
      return <NoResult />
    case !state.matches('root.idle'):
      return <LoadingSpinner isLoading />
    default:
      return null
  }
}

export default Result
