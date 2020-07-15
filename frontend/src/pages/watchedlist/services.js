export default {
  findWatchedlist: { method: 'get', url: 'user/watchedlist' },
  addOnWatchedlist: { method: 'post', url: 'user/series/watched' },
  deleteFromWatchedlist: { method: 'delete', url: 'user/serie/watched{/id}' }
}
