import React from 'react'
import loadingIcon from 'img/loading.svg'

const LoadingSpinner = React.memo(({ isLoading }) => (
  <div className="fetch-more-loading">
    <img
      src={loadingIcon}
      alt="icon"
      className={'fetch-more-loading__icon' + (isLoading ? '' : ' hide')}
    />
  </div>
))

export default LoadingSpinner
