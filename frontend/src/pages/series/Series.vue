<template>
    <div class="container-fluid">
      <h1 class="mt-3">Todas as Séries</h1>
      <hr>
      <div class="row">
        <div
          class="col-3"
          :key="item.id"
          v-for="item in serieslist"
        >
          <serie-box :serie="item" />
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import SerieBox from '@/components/SerieBox'

export default {
  name: 'Serieslist',
  components: {
    SerieBox
  },
  mounted () {
    this.ActionFindSerieslist()
  },
  computed: {
    ...mapState('serieslist', ['serieslist'])
  },
  methods: {
    ...mapActions('serieslist', ['ActionFindSerieslist'])
  }

}
</script>

<style>
</style>
