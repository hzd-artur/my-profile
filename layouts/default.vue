<template>
  <v-app dark v-touch="{ right: () => touchHandler() }">
    <background />

    <v-app-bar
      app
      flat
      :color="$vuetify.theme.dark ? 'rgba(0,0,0,0.5)' : 'rgba(100,100,100,0.7)'"
    >
      <v-btn fab plain color="black" :to="{ name: 'index' }">
        <v-avatar>
          <svg-logo />
        </v-avatar>
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
      selected: {},
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
    touchHandler() {
      console.log('a')
      this.drawer = true
    },
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
    },
  },
}
</script>
