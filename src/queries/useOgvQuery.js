import { useQuery } from 'react-query'

import { QUERY_KEYS } from 'constants/queryKeys'

import { ogvService } from '../services/ogv.service'

const useOgvQuery = (options) => {
  return useQuery(QUERY_KEYS.Ogv(), () => ogvService.fetchOgv(), options)
}

export default useOgvQuery
