<template>
  <div class="row justify-content-center">
    <div class="col-lg-9 col-xl-8 col-xxl-6 col-sm-10 col-xs">
      <v-card
        :color="
          $vuetify.theme.dark ? 'rgba(10,10,20,0.7)' : 'rgba(150,150,150,0.9)'
        "
        class="mx-1 mt-4"
        elevation="6"
        shaped
      >
        <v-card-title class="primary--text text--lighten-2">
          <v-btn
            elevation="2"
            fab
            color="primary"
            class="mr-2 d-md-none d-block"
            small
            @click="changeDrawer()"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          Skills
        </v-card-title>
        <v-card-subtitle>What i'm good at!</v-card-subtitle>
        <v-card-text>
          <skills-card />
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',

  data() {
    return {
      drawer: false,
      snackbar: false,

      selected: {}
    }
  },

  methods: {
    copy(val) {
      this.snackbar = true
      navigator.clipboard.writeText(val)
    },
    changeDrawer() {
      this.drawer = !this.drawer
      this.$nuxt.$emit('changeDrawerState')
    }
  }
}
</script>

<style scoped>
.flex-profile {
  position: absolute;
  transform: translate(0%, -50%);
  top: 25%;
  left: 10%;
  flex-wrap: wrap;
}
</style>
