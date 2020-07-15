import services from '@/http'
import * as types from './mutation-types'

export const ActionFindSerieslist = ({ commit }) => (
  services.serieslist.findSerieslist().then(res => {
    commit(types.SET_SERIESLIST, res.data.data)
  })
)
