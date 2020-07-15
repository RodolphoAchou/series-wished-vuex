import { routes as auth } from '../modules/auth'
import { routes as home } from '../pages/home'
import { routes as watchlist } from '../pages/watchlist'
import { routes as watchedlist } from '../pages/watchedlist'
import { routes as serieslist } from '../pages/series'
import { routes as showSerie } from '../pages/show-serie'

export default [
  ...auth,
  ...home,
  ...watchlist,
  ...watchedlist,
  ...serieslist,
  ...showSerie
]
