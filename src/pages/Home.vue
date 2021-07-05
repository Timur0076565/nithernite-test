<template>
  <v-app>
    <Table 
      :data="packages"
      @showFullInfo="showInfoModal"
    />
    <InfoModal 
      :showInfo="showInfo"
      @closeModal="closeInfoModal"
    />
    <Footer />
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import InfoModal from '../components/InfoModal.vue'
import Table from '../components/Table.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'App',
  components: {
    InfoModal,
    Table,
    Footer
  },
  computed: {
    ...mapGetters({
      packages: 'packages'
    })
  },
  created () {
    this.fetchList()
  },
  data() {
    return {
      showInfo: false
    }
  },
  methods: {
    ...mapActions({
      fetchList: 'GET_PACKAGES',
      searchPackages:'SEARCH_PACKAGES'
    }),
    closeInfoModal () {
      this.showInfo = false
    },
    showInfoModal () {
      this.showInfo = true
    }
  }
}
</script>
