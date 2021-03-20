import React from 'react'

const LoadingBar = React.memo(({ isLoading }) => (
  <div className="loading-container">
    <div className={isLoading ? 'loading-bar' : ''} />
  </div>
))

export default LoadingBar
