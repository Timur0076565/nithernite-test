<template>
  <v-footer padless>
    <v-col
      class="text-center"
      cols="12"
    >
      <v-avatar>
        <img
          :src="image"
          alt="John"
        >
      </v-avatar>
      <div>Timur Osipov</div>
      <a target="_blank" href="https://github.com/Timur0076565">Github</a>
    </v-col>
  </v-footer>
</template>

<script>
import image from '../assets/images/avatar.jpg';
export default {
  data() {
    return {
      image
    };
  }
}
</script>