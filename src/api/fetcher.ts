import axios from 'axios'
import { Fetcher } from 'swr'

const edgeJobsURL = 'https://edgeapi.ivyarc.com/v1'

export const fetcher = async (url: string) => {
  const res = await axios.get(`${edgeJobsURL}/${url}`)
  return res?.data.data
}

export const options = {
  revalidateOnFocus: false,
  refreshInterval: 120000,
  revalidateOnMount: false,
}
