import axios from 'axios'
import { INITIAL_DATA_PATH } from 'config/index'

export default {
  fetchInitialData: () => {
    return new Promise((resolve, reject) => {
      axios
        .get(INITIAL_DATA_PATH)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          console.error(error)
          reject(error)
        })
    })
  },
}
