import React from 'react'
import Main from 'components/main'
import SearchPageProvider from './context/searchPage'

const SearchPage = () => (
  <SearchPageProvider>
    <Main />
  </SearchPageProvider>
)

export default SearchPage
