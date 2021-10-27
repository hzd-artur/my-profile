<template>
  <div class="d-flex">
    <v-card
      :color="
        $vuetify.theme.dark ? 'rgba(10,10,20,0.8)' : 'rgba(150,150,150,0.9)'
      "
      shaped
      width="300"
      class="d-md-block d-none"
    >
      <ListAction v-model="selected" rounded color="primary" :data="data" />
    </v-card>
    <transition name="bounce" mode="out-in">
      <v-card
        v-if="!selected.key"
        key="card1"
        :color="
          $vuetify.theme.dark ? 'rgba(10,10,20,0.8)' : 'rgba(150,150,150,0.9)'
        "
        shaped
        class="grow ml-md-2"
      >
        <div
          class="d-flex h-100 colapse-on-animation justify-center align-center"
        >
          <v-card-title>
            <span class="d-md-none d-block">
              <v-icon left>mdi-gesture-swipe-right </v-icon> Swipe right to view
              skills <br />
              list
            </span>

            <span class="d-none d-md-block">
              <v-icon class="mr-2"> mdi-cursor-default-click </v-icon>
              Select an item to view its information
            </span>
          </v-card-title>
        </div>
      </v-card>
      <v-card
        v-else-if="selected.key"
        key="card2"
        :color="
          $vuetify.theme.dark ? 'rgba(10,10,20,0.8)' : 'rgba(150,150,150,0.9)'
        "
        :style="
          $vuetify.breakpoint.mdAndUp
            ? 'max-width: calc(100% - 300px);'
            : 'max-width: 100%'
        "
        class="grow ml-md-2"
      >
        <v-card-title>
          <v-icon class="mr-2 primary--text text--lighten-2">
            mdi-{{ selected.icon }} </v-icon
          >{{ selected.name }}
        </v-card-title>
        <v-card-subtitle v-if="selected.exp">
          <div class="d-flex align-center cyan--text">
            <v-tooltip dark color="cyan" right>
              <template #activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">
                  <v-icon color="cyan"> mdi-head-flash </v-icon>
                  Experience</span
                >
              </template>
              <span
                >My experience rating (rated by me). <br />
                <span class="cyan--text text--darken-4">
                  {{ selected.exp }}% = {{ ratingMessage(selected.exp) }}
                </span>
              </span>
            </v-tooltip>
            <div class="ml-3 grow">
              <v-progress-linear color="cyan" rounded :value="selected.exp" />
            </div>
          </div>
        </v-card-subtitle>
        <v-card-text>
          <skill-info :skill="selected" />
        </v-card-text>
      </v-card>
    </transition>
  </div>
</template>

<script>
import SkillInfo from '@/components/SkillInfo'
import data from '@/mixins/data'

export default {
  name: 'Skills',

  components: {
    SkillInfo,
  },
  mixins: [data],
  props: {
    // other: {
    //   type: Object,
    //   required: true
    // },
  },
  data() {
    return {
      selected: {},
    }
  },
  mounted() {
    this.$nuxt.$on('setSkill', (val) => {
      this.selected = val
    })
  },
  methods: {
    ratingMessage(rating) {
      if (rating <= 5) {
        return 'Knows Nothing'
      } else if (rating <= 20) {
        return 'Knows very little'
      } else if (rating <= 40) {
        return 'Knows a few things'
      } else if (rating <= 60) {
        return 'Knows the basics'
      } else if (rating <= 70) {
        return 'Knows a descent amount of things'
      } else if (rating <= 80) {
        return 'Knows a lot'
      } else if (rating <= 100) {
        return 'Knows a whole lot'
      }
    },
    setOpened(item) {
      this.selected = item
    },
  },
}
</script>
<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translate(20%);
    opacity: 0;
  }
  100% {
    transform: translate(0%);
    opacity: 1;
  }
}
</style>
