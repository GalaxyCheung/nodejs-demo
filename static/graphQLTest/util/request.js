import axios from 'axios'
//
const baseURL = "http://localhost:3009/"
// create an axios instance
const service = axios.create({
  baseURL,
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.baseURL = "http://localhost:3009/"
    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json; charset=UTF-8'
    }
    config.headers['FPE_TIME_ZONE'] = new Intl.DateTimeFormat().resolvedOptions().timeZone
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data

    return res
  },
  error => {
    return Promise.reject(error).catch(() => { })
  }
)

export default service
