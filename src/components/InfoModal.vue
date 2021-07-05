<template>
  <v-dialog
      :retain-focus="false"
      v-model="showInfo"
      max-width="290"
      @click:outside="closeModal"
    >
    <v-card>
      <!-- <v-card-title class="headline">{{ item.name }}</v-card-title> -->
      <v-card-title class="headline">{{ currentPackage.tags.latest }}</v-card-title>
      <!-- <v-card-text>
        <p class="mb-1">
          {{ item.type }}
        </p>
      </v-card-text>
      <v-card-text>
        <p class="mb-1">
          {{ item.hits }}
        </p>
      </v-card-text> -->
      <v-list>
        <v-list-item
          v-for="(version, index) in currentPackage.versions"
          :key="index"
        >
          <v-list-item-content>
            <v-list-item-title v-text="version"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          @click="closeModal"
          color="darken-1">
          close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    showInfo: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      currentPackage: 'currentPackage'
    })
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
    }
  }
}
</script>