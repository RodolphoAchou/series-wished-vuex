export default [
  {
    name: 'watchedlist',
    path: '/watchedlist',
    component: () => import(/* webpackChunkName: "watchedlist" */ './Watchedlist'),
    meta: {
      showNavbar: true,
      title: 'WatchedList',
      icon: 'playlist_add_check',
      label: 'Já Assisti'
    }
  }
]
