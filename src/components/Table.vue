<template>
  <v-card class="card">
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      disable-filtering
      :headers="headers"
      :items="data"
      :search="search"
      @click:row="showFullInfo"
    >
    </v-data-table>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      search: "",
      headers: [
        { text: "Hits", value: "hits" },
        { text: "Name", value: "name" },
        { text: "Type", value: "type" }
      ],
    }
  },
  watch: {
    search () {
      this.searchPackages(this.createRequestPayload())
    }
  },
  methods: {
    ...mapActions({
      fetchList: 'GET_PACKAGES',
      searchPackages:'SEARCH_PACKAGES',
      getCurrPackage: 'GET_CURRENT_PACKAGE'
    }),
    createRequestPayload () {
      const data = new FormData()
      data.append('query', this.search)
      data.append('page', '0')
      data.append('hitsPerPage', '10')
      return data
    },
    showFullInfo (data) {
      this.getCurrPackage(data.name)
      this.$emit('showFullInfo')
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
}
</style>

