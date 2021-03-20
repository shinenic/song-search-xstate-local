import { toInteger, min, max } from 'lodash'

export const normalizeSearchResultText = (data) => {
  /*
   * If no artist data                       => Replace artist text with "-"
   * If there are multi artists in one field => Replace "/" and "+" with "line break"
   *                                           (based on "white-space: pre-wrap;")
   */
  const artistText =
    data.artist === '' || data.artist === 'XXX'
      ? '-'
      : data.artist.replace(/[/+]/gi, '\n')
  const positionText =
    data.volume === ''
      ? toInteger(data.page)
      : `${toInteger(data.volume)}/${toInteger(data.page)}`

  return {
    artist: artistText,
    position: positionText,
    title: data.title,
  }
}

const getVolumeRange = (list, targetBook) => {
  const allVolume = list
    .filter(({ book }) => book === targetBook)
    .map(({ volume }) => toInteger(volume))
  return [min(allVolume), max(allVolume)]
}

export const generateBookVolumeRange = (initialData = {}) => {
  return (initialData?.booksWithVolumeFilter || []).reduce(
    (acc, book) => ({
      ...acc,
      [book]: getVolumeRange(initialData?.songs ?? [], book),
    }),
    {}
  )
}
