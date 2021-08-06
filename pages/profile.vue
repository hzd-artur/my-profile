<template>
  <v-row class="h-100" align="center">
    <v-col lg="9" xl="5" xxl="3" md="10" sm="12">
      <v-card
        class="mx-4"
        elevation="6"
        :color="
          $vuetify.theme.dark ? 'rgba(10,10,20,0.9)' : 'rgba(150,150,150,0.9)'
        "
        shaped
      >
        <v-card-text>
          <div class="d-flex flex-wrap justify-content-center">
            <v-avatar
              class="justify-self-center elevation-5"
              color="primary"
              size="200"
            >
              <v-img src="myself.png">
                <template #placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular indeterminate color="grey lighten-5" />
                  </v-row>
                </template>
              </v-img>
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
      <v-card
        :color="
          $vuetify.theme.dark ? 'rgba(10,10,20,0.9)' : 'rgba(150,150,150,0.9)'
        "
        class="mx-4 mt-4"
        elevation="6"
        shaped
      >
        <v-card-text>
          <div class="overview">
            <p>
              Since I was little, I always liked to build things. Legos, toys,
              sand castles, whatever.
            </p>
            <p>
              I grew up and found a way to build things as a profession:
              <br>
              <b> Programming</b>.
            </p>

            <p>
              Coding for me is a hobby and job, and although it's challenging, I
              love doing it.
            </p>
            <p>
              I like exploring new things, building new tools (keeping them
              simple) and creating art (music, images and systems).
            </p>
          </div>
        </v-card-text>
        <v-card-actions class="justify-space-between align-center">
          <span
            class="primary--text"
          >Take a look at my skills if you're interested.</span>
          <v-btn :to="{ name: 'skills' }" rounded outlined color="primary ">
            skills
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-snackbar v-model="snackbar" color="primary" shaped :timeout="1000">
        <div class="d-flex justify-content-center">
          Copied to clipboard
        </div>
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Profile',

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
  top: calc(50% + 64px);
  left: 10%;
}
@media (max-width: 600px) {
  .flex-profile {
    position: absolute;
    transform: translate(-50%, 0%);
    top: 54px;
    left: 50%;
    width: 95%;
  }
}
.flex-wrap {
  flex-wrap: wrap;
}
.overview {
  font-size: 1.1rem;
  font-weight: 100;
  width: 95%;
}
</style>
