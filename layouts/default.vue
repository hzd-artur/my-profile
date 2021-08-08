<template>
  <v-app dark>
    <background />

    <v-app-bar
      app
      flat
      :color="$vuetify.theme.dark ? 'rgba(0,0,0,0.5)' : 'rgba(100,100,100,0.7)'"
    >
      <v-btn fab plain color="black" :to="{ name: 'index' }">
        <svg-logo />
      </v-btn>
      <v-tabs centered>
        <v-tab :to="{ name: 'profile' }">
          Profile
        </v-tab>
        <v-tab :to="{ name: 'skills' }">
          Skills
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
          class="m-3 d-md-flex d-none"
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
          class="m-3 d-md-flex d-none"
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

      <ListAction
        v-model="selected"
        shaped
        color="primary"
        :data="data"
        @input="setOpened()"
      />
    </v-navigation-drawer>

    <v-main class="overflow-hidden">
      <v-expand-transition>
        <Nuxt @changeDrawerState="changeDrawer" />
      </v-expand-transition>
    </v-main>
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
    this.$nuxt.$on('changeDrawerState', () => {
      this.drawer = !this.drawer
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
    } else {
      this.changeDark(true)
    }
  },
  methods: {
    changeDrawer(val) {
      this.drawer = val
    },
    setOpened() {
      this.$nuxt.$emit('setSkill', this.selected)
      this.drawer = false
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
  font-family: 'Georama' !important;
  overflow-x: hidden !important;
}
.overflow-hidden {
  overflow: hidden;
}

.theme--dark.v-application {
  background-color: transparent !important;
  // background-image: url('~assets/Background.png') !important;
  background-attachment: fixed !important;
  background-position: 0% !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  min-height: 500px;
}
.theme--light.v-application {
  background-color: transparent !important;
  //  background-image: url('~assets/BackgroundLight.png') !important;
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
  background: #000;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
