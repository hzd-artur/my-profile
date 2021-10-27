<template>
  <div class="mih-100 d-flex flex-column justify-space-between">
    <div class="d-flex flex-column align-center align-md-start">
      <div class="ma-md-12 pl-md-12">
        <span class="profile-head primary--text">Hi, <br /> </span>
        <span class="profile-sub">
          I'm Arthur. <br />
          Welcome to my profile.
        </span>
      </div>
    </div>
    <div>
      <v-btn
        class="start"
        x-large
        fab
        outlined
        color="primary "
        :to="{ name: 'profile' }"
      >
        <small> Start </small>
      </v-btn>
    </div>
    <div class="d-flex justify-md-center justify-center">
      <v-expand-transition>
        <v-alert
          v-if="vueYears.length"
          :class="'pa-6  primary--text mb-1 mb-sm-6'"
          prominent
          icon="mdi-timer-sand"
          outlined
          elevation="5"
          colored-border
          show
          shaped
          text
          color="primary"
        >
          <div class="ml-2 d-flex flex-column">
            <p
              :class="$vuetify.breakpoint.mdAndUp ? 'text-h3' : 'text-h5 mb-2'"
            >
              <span class="float-right">
                <v-slide-y-transition leave-absolute group>
                  <span
                    v-for="(digit, i) in vueYears"
                    :key="'vue_' + digit + i"
                    >{{ digit }}</span
                  >
                </v-slide-y-transition>
                years of <span class="green--text"> VueJs</span></span
              >
            </p>

            <p
              :class="$vuetify.breakpoint.mdAndUp ? 'text-h4' : 'text-h6 mb-2'"
            >
              <span class="font-weight-light float-right">
                <v-slide-y-transition leave-absolute group>
                  <span
                    class="text--lighten-3"
                    v-for="(digit, i) in jsYears"
                    :key="'js_' + digit + i"
                    >{{ digit }}</span
                  >
                </v-slide-y-transition>
                years of <span class="yellow--text"> Javascript</span></span
              >
            </p>
            <p
              :class="$vuetify.breakpoint.mdAndUp ? 'text-h4' : 'text-h6 mb-2'"
            >
              <span class="font-weight-light float-right">
                <v-slide-y-transition leave-absolute group>
                  <span
                    class="text--lighten-3"
                    v-for="(digit, i) in lifeYears"
                    :key="'life_' + digit + i"
                    >{{ digit }}</span
                  >
                </v-slide-y-transition>
                years of <span class="error--text"> Life</span></span
              >
            </p>
          </div></v-alert
        >
      </v-expand-transition>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Index',

  data() {
    return {
      drawer: false,
      snackbar: false,
      show: '',
      selected: {},
      jsYears: [],
      vueYears: [],
      lifeYears: [],
    }
  },
  mounted() {
    setInterval(() => {
      this.jsYears = moment()
        .diff('2014-02-02', 'years', true)
        .toFixed(7)
        .split('')
      this.vueYears = moment()
        .diff('2020-01-14', 'years', true)
        .toFixed(7)
        .split('')
      this.lifeYears = moment()
        .diff('1998-11-14', 'years', true)
        .toFixed(7)
        .split('')
    }, 1000)
  },

  methods: {
    copy(val) {
      this.snackbar = true
      navigator.clipboard.writeText(val)
    },
    changeDrawer() {
      this.drawer = !this.drawer
      this.$nuxt.$emit('changeDrawerState')
    },
  },
}
</script>

<style scoped>
.experience-card {
  display: flex;
  width: 100%;
  position: absolute;
  bottom: 0;
}

.introduction {
  position: relative;
  height: 100%;
}
.logo-wrapper {
  height: 200px;
  width: 200px;
}
.profile-head {
  font-size: 3.5rem;
  font-weight: 800;
}
.profile-sub {
  font-size: 2.7rem;
  color: #cccccc;
  font-weight: 300;
}
@media (max-width: 1264px) {
  .profile-sub {
    font-size: 1.5rem;
    color: #cccccc;
    font-weight: 300;
  }
}

.flex-logo {
  position: absolute;
  transform: translate(0%, -50%);
  top: 8rem;
  left: 4rem;
  flex-wrap: wrap;
}

.start {
  color: #ef4136;
  font-weight: 300;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 10;
  flex-wrap: wrap;
}
</style>
