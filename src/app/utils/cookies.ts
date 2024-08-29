import Cookies from 'universal-cookie'

export const LS_KEYS = {
  auth: '___als___',
}

export const cookies = new Cookies(null, { path: '/' })
