import axios from 'axios'

const baseURL = 'https://selpdevapi.ivyarc.com/v1/'
//const baseURL = "http://localhost:4000/v1/"

export default axios.create({
  baseURL,
})
