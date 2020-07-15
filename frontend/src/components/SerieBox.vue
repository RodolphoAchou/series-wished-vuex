<template>
  <router-link
    class="card mb-4"
    :to="{ name: 'show-serie', params: { id: serie.id } } "
    >
    <img
      :src=serie.image
      alt=""
      height="400px"
      class="card-image-top"
    >
    <div class="card-body">
      <h3 class="text-center mb-0">{{ serie.title }}</h3>
      <div class="row text-center mt-3">
        <div class="col">
          <button class="btn btn-sm btn-outline-primary" @click.prevent="toggleWatchList">
            {{ serie.watchlist ? 'Remover da' : 'Adicionar na'}} watchlist
          </button>
        </div>
        <div class="col">
          <button class="btn btn-sm btn-outline-warning" @click.prevent="toggleWatchedList">
            {{ serie.watched ? 'Remover da' : 'Adicionar na'}} watchedlist
          </button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    serie: { type: Object, required: true }
  },
  methods: {
    ...mapActions('serieslist', ['ActionFindSerieslist']),
    ...mapActions('watchedlist', [
      'ActionFindWatchedlist',
      'ActionAddOnWatchedlist',
      'ActionDeleteFromWatchedlist'
    ]),
    ...mapActions('watchlist', [
      'ActionFindWatchlist',
      'ActionAddOnWatchlist',
      'ActionDeleteFromWatchlist'
    ]),
    async toggleWatchList () {
      try {
        if (this.serie.watchlist) {
          await this.ActionDeleteFromWatchlist(this.serie.id)
          window.alert('Deletada com sucesso!')
        } else {
          await this.ActionAddOnWatchlist({ serieId: this.serie.id })
          window.alert('Adicionada com sucesso!')
        }
        this.refresh()
      } catch (error) {
        window.alert('Não foi possivel adicionar!')
        console.error(error)
      }
    },
    async toggleWatchedList () {
      try {
        if (this.serie.watched) {
          await this.ActionDeleteFromWatchedlist(this.serie.id)
          window.alert('Deletada com sucesso!')
        } else {
          await this.ActionAddOnWatchedlist({ serieId: this.serie.id })
          window.alert('Adicionada com sucesso!')
        }
        this.refresh()
      } catch (error) {
        window.alert('Não foi possivel adicionar!')
        console.error(error)
      }
    },
    refresh () {
      const { name } = this.$route

      if (name === 'series') {
        return this.ActionFindSerieslist()
      }
      if (name === 'watchedlist') {
        return this.ActionFindWatchedlist()
      }
      if (name === 'watchlist') {
        return this.ActionFindWatchlist()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  color: var(--dark);
  cursor: pointer;
  transition: .4s;
  &:hover {
    text-decoration: none;
    box-shadow: 1px 1px 20px rgba(0,0,0,0.5);
  }
}

</style>
