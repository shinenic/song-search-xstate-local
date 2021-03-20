import React from 'react'
import useDoubleClick from 'hooks/common/useDoubleClick'
import { showConnectToYoutube } from 'utils/base'
import { normalizeSearchResultText } from 'utils/result'

const ResultRow = React.memo(
  ({ searchArtist, title, artist, volume, page }) => {
    const titleRef = useDoubleClick(() => {
      showConnectToYoutube(title, `${title}+${artist.replace(/[/+]/gi, '+')}`)
    })
    const artistRef = useDoubleClick(() => searchArtist(artist))

    const formattedResult = normalizeSearchResultText({
      title,
      volume,
      page,
      artist,
    })

    return (
      <div className="row">
        <div className="row__title" ref={titleRef}>
          {formattedResult.title}
        </div>
        <div className="row__artist" ref={artistRef}>
          {formattedResult.artist}
        </div>
        <div className="row__position">{formattedResult.position}</div>
      </div>
    )
  }
)

export default ResultRow
