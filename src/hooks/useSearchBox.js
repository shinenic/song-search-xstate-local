import { useRef } from 'react'
import { isEmpty } from 'lodash'
import { useSearchPageContext } from 'context/searchPage'
import useClickTouchOutside from 'hooks/common/useClickTouchOutside'

const useSearchBox = () => {
  const {
    context: { keyword, result },
    actions: { setKeyword, toggleClear },
  } = useSearchPageContext()

  const handleOnChange = (e) => {
    setKeyword(e.target.value)
  }

  const inputRef = useRef(null)
  const searchBoxRef = useRef(null)

  const setInputFocus = () => {
    inputRef.current.focus()
  }
  const setInputBlur = () => {
    inputRef.current.blur()
  }

  const handleClearBtnClick = () => {
    toggleClear()
  }

  // Blur input whenever user `touchstart outside` instead of `touchend outside`
  useClickTouchOutside(searchBoxRef, setInputBlur)

  return {
    inputText: keyword,
    inputRef,
    searchBoxRef,
    handleOnChange,
    handleClearBtnClick,
    showSearchIcon: isEmpty(result) && isEmpty(keyword),
    handleSearchBtnClick: setInputFocus,
  }
}

export default useSearchBox
