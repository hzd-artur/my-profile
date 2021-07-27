<template>
  <div class="row justify-content-center">
    <div class="col-lg-9 col-xl-8 col-xxl-6 col-sm-10 col-xs">
      <v-card class="mx-1" elevation="6" shaped>
        <v-card-title class="primary--text text--lighten-2">
          My current job
        </v-card-title>
        <v-card-subtitle> What i'm working on nowadays </v-card-subtitle>

        <v-card-text>
          <p>
            I'm currently working in a company called
            <a target="_blank" href="https://useimobia.com.br/"> Imobia </a>
            where I develop the Front-end of the system. I really like to work
            there, but I feel like remote work is my area.
          </p>
          In this company we sell a real estate management system with automatic
          billing to tenants and automatic payment for owners.
          <div class="d-flex justify-content-center mt-3">
            <a target="_blank" href="https://useimobia.com.br/">
              <v-img
                :class="$vuetify.theme.dark ? '' : 'grey rounded-lg'"
                elevation="5"
                src="https://useimobia.com.br/img/logo-white.png"
                max-width="250"
                alt="Imobia - Sistema Imobiliário"
              />
            </a>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrentWork'
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
