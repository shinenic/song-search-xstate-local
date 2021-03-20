import React, { useCallback } from 'react'
import { DATA_COUNT_PER_PAGE } from 'config/index'
import { useSearchPageContext } from 'context/searchPage'

import useScrollBottom from 'hooks/common/useScrollBottom'

import ResultRow from './resultRow'

const Result = () => {
  const {
    context: { pageNumber = 1, result = [] },
    actions: { readMore, setKeyword },
  } = useSearchPageContext()

  useScrollBottom(readMore)

  const searchArtist = useCallback(
    (artist) => {
      setKeyword(artist, true)
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  )

  const chunkedResult = result.slice(0, DATA_COUNT_PER_PAGE * pageNumber)

  return (
    <div className="with-result">
      {chunkedResult.map(({title, volume, page, artist}) => (
        <ResultRow
          key={`${title}${volume}${page}`}
          title={title}
          artist={artist}
          volume={volume}
          page={page}
          searchArtist={searchArtist}
        />
      ))}
    </div>
  )
}

export default Result
