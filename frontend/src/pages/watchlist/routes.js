export default [
  {
    name: 'watchlist',
    path: '/watchlist',
    component: () => import(/* webpackChunkName: "watchlist" */ './Watchlist'),
    meta: {
      showNavbar: true,
      title: 'WatchList',
      icon: 'playlist_play',
      label: 'Quero assistir'
    }
  }
]
