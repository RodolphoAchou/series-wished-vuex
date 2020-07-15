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
          <button class="btn btn-sm btn-outline-primary" @click="toggleWatchList">
            {{ serie.watchlist ? 'Remover da' : 'Adicionar na'}} watchlist
          </button>
        </div>
        <div class="col">
          <button class="btn btn-sm btn-outline-warning" @click="toggleWatchedList">
            {{ serie.watched ? 'Remover da' : 'Adicionar na'}} watchedlist
          </button>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    serie: { type: Object, required: true }
  },
  methods: {
    toggleWatchList () {
      if (this.serie.watchlist) {
        console.log('Remover da watchlist')
      } else {
        console.log('Adicionar na watchlist')
      }
    },
    toggleWatchedList () {
      if (this.serie.watched) {
        console.log('Remover da watchedlist')
      } else {
        console.log('Adicionar na watchedlist')
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
