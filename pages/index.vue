<template>
  <div class="introduction">
    <div class="d-flex flex-logo justify-content-center align-center">
      <v-avatar class="justify-self-center" color="dark" size="200">
        <div class="logo-wrapper">
          <svg-logo />
        </div>
      </v-avatar>
      <div class="ml-5 flex-grow-1">
        <span class="profile-head">Hi, <br> </span>
        <span class="profile-sub">
          I'm Arthur. <br>
          Welcome to my profile.
        </span>
        <div class="d-flex d-sm-none justify-center mt-5">
          <v-btn
            x-large
            fab
            outlined
            color="primary lighten-2"
            :to="{ name: 'profile' }"
          >
            Start
          </v-btn>
        </div>
      </div>
    </div>

    <div>
      <v-btn
        class="start d-sm-inline-flex d-none"
        x-large
        plain
        fab
        outlined
        color="primary lighten-2"
        :to="{ name: 'profile' }"
      >
        Start
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',

  data() {
    return {
      drawer: false,
      snackbar: false,
      show: '',
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
.logo-wrapper {
  height: 200px;
  width: 200px;
}
.profile-head {
  font-size: 3.5rem;
  font-weight: 800;
  color: #ef4136;
}
.profile-sub {
  font-size: 2.7rem;
  color: #cccccc;
  font-weight: 300;
}
.flex-logo {
  position: absolute;
  transform: translate(0%, -50%);
  top: 25%;
  left: 10%;
  flex-wrap: wrap;
}
@media (max-width: 600px) {
  .flex-logo {
    position: absolute;
    width: 90%;
    transform: translate(-50%, 0%);
    top: 54px;
    left: 50%;
    flex-wrap: wrap;
    padding-bottom: 2rem;
    background: rgba(10, 10, 20, 0.8);
  }
}
.start {
  color: #ef4136;
  font-weight: 300;
  font-family: 'Oswald' !important;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  flex-wrap: wrap;
}
</style>
