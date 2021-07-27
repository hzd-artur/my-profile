<template>
  <div class="row justify-content-center">
    <div class="col-lg-9 col-xl-8 col-xxl-6 col-sm-10 col-xs">
      <v-card class="mx-1" elevation="6" shaped>
        <v-card-title class="primary--text text--lighten-2">
          My profile
        </v-card-title>

        <v-card-text>
          <div class="d-flex flex-profile justify-content-center">
            <v-avatar
              class="justify-self-center elevation-5"
              color="primary"
              size="200"
            >
              <v-img src="myself.png" />
            </v-avatar>
            <div class="ml-5 flex-grow-1">
              <h2 class="primary--text">
                Arthur Wegner Wippel
              </h2>
              <div class="d-flex align-items-center">
                <v-icon small class="mr-2">
                  mdi-at
                </v-icon>
                arthurwwippel@gmail.com

                <v-tooltip color="primary" top>
                  <template #activator="{ on, attrs }">
                    <v-icon
                      v-bind="attrs"
                      small
                      class="ml-2 primary--text"
                      v-on="on"
                      @click="copy('arthurwwippel@gmail.com')"
                    >
                      mdi-content-copy
                    </v-icon>
                  </template>
                  <span>Copy to clipboard</span>
                </v-tooltip>
              </div>
              <div class="d-flex align-items-center">
                <v-icon small class="mr-2">
                  mdi-xml
                </v-icon> Front-end
                Mid-level Senior developer
              </div>
              <div class="d-flex align-items-center">
                <v-icon small class="mr-2">
                  mdi-cake
                </v-icon> 14/11/1998
              </div>
              <div class="d-flex align-items-center">
                <v-icon small class="mr-2">
                  mdi-map-marker
                </v-icon> Brazil
              </div>
              <div class="d-flex align-items-center">
                <v-icon small class="mr-2">
                  mdi-account-voice
                </v-icon>
                Portuguese, English
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>

      <v-card class="mx-1 mt-4" elevation="6" shaped>
        <v-card-title class="primary--text text--lighten-2">
          Overview
        </v-card-title>
        <v-card-subtitle>What can i to say about me?</v-card-subtitle>
        <v-card-text>
          It's hard to say something about yourself without being self-centered,
          but i'm going to try my best.
          <br>
          Since I was little, I always liked to build things. Legos, toys, sand
          castles, whatever. And over the years, I grew up and found a way to
          build things as a profession:
          <b> Programming</b>.
          <br>
          I can say that I have a love-hate relationship with programming, but
          love always prevails.
          <br>
          Now about my principles. I like exploring new things, building new
          tools (keeping them simple) and creating art (music, images and
          systems).
        </v-card-text>
      </v-card>
      <v-card class="mx-1 mt-4" elevation="6" shaped>
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
          <Skills />
        </v-card-text>
      </v-card>
      <v-snackbar v-model="snackbar" color="primary" shaped :timeout="1000">
        <div class="d-flex justify-content-center">
          Copied to clipboard
        </div>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import Skills from '@/components/Skills'
export default {
  name: 'Profile',
  components: {
    Skills
  },
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
      console.log('teste')
      this.drawer = !this.drawer
      this.$nuxt.$emit('changeDrawerState', this.drawer)
    }
  }
}
</script>

<style scoped>
.flex-profile {
  flex-wrap: wrap;
}
</style>
