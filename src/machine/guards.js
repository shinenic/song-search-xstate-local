import { isZhuyin } from 'utils/base'
import { last, isEmpty, values } from 'lodash'
import { getLocalStorage } from 'utils/localStorage'
import { LOCAL_STORAGE_KEY } from 'config/index'

export default {
  withSettingInLocalStorage: () =>
    values(LOCAL_STORAGE_KEY).every(
      (value) => !isEmpty(getLocalStorage(value))
    ),

  isEmptyKeyword: (_, { keyword }) => isEmpty(keyword),

  isInvalidKeyword: (_, { keyword }) =>
    isZhuyin(last(keyword)) || last(keyword) === ' ',

  withKeyword: ({ keyword }) => !isEmpty(keyword),

  hasNoResult: ({ result }) => isEmpty(result),

  skipDebounceSearch: (_, { skipDebounce }) => skipDebounce,
}
