<template>
  <div class="row justify-content-center">
    <div class="col-lg-9 col-xl-8 col-xxl-6 col-sm-10 col-xs">
      <v-card class="mx-1" elevation="6" shaped>
        <v-card-title class="primary--text text--lighten-2">
          Portfolio
        </v-card-title>
        <v-card-subtitle>
          Click on an image to view its description.
        </v-card-subtitle>

        <v-card-text>
          <v-row>
            <v-col
              v-for="(project, i) in portfolio"
              :key="i"
              class="d-flex child-flex"
              cols="12"
              sm="6"
              lg="4"
              @click="openModal"
            >
              <v-img
                :key="project.src + '1'"
                v-ripple
                :src="project.src"
                aspect-ratio="1"
                class="grey darken-4"
                elevation="5"
                @click="project.showInfo = true"
              >
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
              <v-expand-transition>
                <v-card
                  v-if="project.showInfo"
                  aspect-ratio="1"
                  class="transition-fast-in-fast-out v-card--reveal"
                  style="height: 100%"
                >
                  <v-card-text class="pb-0">
                    <p class="text-h4 text--primary">
                      {{ project.title }}
                    </p>
                    <p v-html="project.text" />
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      text
                      color="primary "
                      @click="project.showInfo = false"
                    >
                      Close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-expand-transition>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import data from '@/mixins/data'

export default {
  name: 'Profile',
  components: {},
  mixins: [data],

  data() {
    return {
      drawer: false,
      snackbar: false,

      selected: {}
    }
  },

  methods: {
    openModal(item) {
      return true
    },
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

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
