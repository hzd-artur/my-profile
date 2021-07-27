<template>
  <v-app dark>
    <v-app-bar
      app
      flat
      :color="$vuetify.theme.dark ? 'rgba(0,0,0,0.2)' : 'rgba(100,100,100,0.4)'"
    >
      <div class="center-fix m-3">
&nbsp;
      </div>
      <v-tabs centered>
        <v-tab :to="{ path: '/' }">
          Profile
        </v-tab>
        <v-tab :to="{ path: '/portfolio' }">
          Portfolio
        </v-tab>
        <v-tab :to="{ path: '/current-work' }">
          Current Work
        </v-tab>
      </v-tabs>
      <v-scale-transition leave-absolute group>
        <v-btn
          v-if="$vuetify.theme.dark"
          key="lightmode"
          color="yellow darken-2"
          class="m-3"
          fab
          small
          @click="changeDark(false)"
        >
          <v-icon color="grey darken-3">
            mdi-white-balance-sunny
          </v-icon>
        </v-btn>
        <v-btn
          v-else
          key="darkmode"
          color="grey"
          class="m-3"
          fab
          small
          @click="changeDark(true)"
        >
          <v-icon>mdi-weather-night</v-icon>
        </v-btn>
      </v-scale-transition>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      floating
      color="dark"
      class="h-100"
      fixed
      width="360"
    >
      <v-subheader>Skills</v-subheader>

      <ListAction v-model="selected" shaped color="primary" :data="data" />
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <Nuxt @changeDrawerState="changeDrawer" />
      </v-container>
    </v-main>

    <v-footer
      class="d-flex d-md-none justify-content-end"
      color="rgba(0,0,0,0)"
      app
    >
      <v-scale-transition leave-absolute group>
        <v-btn
          v-if="$vuetify.theme.dark"
          key="lightmodemobile"
          color="yellow darken-2"
          class="m-3"
          fab
          small
          @click="changeDark(false)"
        >
          <v-icon color="grey darken-3">
            mdi-white-balance-sunny
          </v-icon>
        </v-btn>
        <v-btn
          v-else
          key="darkmodemobile"
          color="grey"
          class="m-3"
          fab
          small
          @click="changeDark(true)"
        >
          <v-icon>mdi-weather-night</v-icon>
        </v-btn>
      </v-scale-transition>
    </v-footer>
  </v-app>
</template>

<script>
import data from '@/mixins/data'

export default {
  mixins: [data],

  data() {
    return {
      drawer: false,
      selected: {}
    }
  },
  mounted() {
    this.$nuxt.$on('changeDrawerState', (val) => {
      this.drawer = val
    })

    // watchs for the Windows (OS) theme to change and sets vuetify theme and localStorage

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        this.$vuetify.theme.dark = e.matches
        localStorage.setItem('dark', e.matches)
      })

    const dark = JSON.parse(localStorage.getItem('dark'))
    if (dark != null) {
      this.$vuetify.theme.dark = dark
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      this.changeDark(true)
    } else {
      this.changeDark(false)
    }
  },
  methods: {
    changeDrawer(val) {
      this.drawer = val
    },
    changeDark(val) {
      this.$vuetify.theme.dark = val
      localStorage.setItem('dark', val)
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap%27');
body {
  //  font-family: 'Oswald' !important;
  overflow-x: hidden !important;
}
.center-fix {
  height: 40px;
  width: 40px;
}
.v-navigation-drawer__border {
  display: none !important;
}
.theme--dark.v-application {
  background-color: #000 !important;
  background-image: url('~assets/Background.png') !important;
  background-attachment: fixed !important;
  background-position: 0% !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  min-height: 500px;
}
.theme--light.v-application {
  background-color: #fff !important;
  background-image: url('~assets/BackgroundLight.png') !important;
  background-attachment: fixed !important;
  background-position: 0% !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  min-height: 500px;

  background-color: transparent !important;
}
.v-application {
  //font-family: 'Oswald' ;
  line-height: 1.5;
}
.v-card__text {
  font-size: 1rem !important;
  line-height: 1.5 !important;
  font-weight: 300 !important;
}
::-webkit-scrollbar {
  width: 10px;
}
h2 {
  font-size: 2.5rem !important;
}
.justify-self-center {
  justify-self: center;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
