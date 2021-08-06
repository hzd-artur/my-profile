<template>
  <div class="row justify-content-center">
    <div class="col-lg-9 col-xl-8 col-xxl-6 col-sm-10 col-xs">
      <v-card
        :color="
          $vuetify.theme.dark ? 'rgba(10,10,20,0.8)' : 'rgba(150,150,150,0.9)'
        "
        class="mx-1 mt-3"
        elevation="6"
        shaped
      >
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
          <p>
            In this company, we sell a real estate management system with
            automatic billing to tenants and automatic payment for owners.
          </p>
          <p>
            Here i was responsible for the front-end development where I made:
            <br>
            - Part of the financial system (creating bills). <br>
            - Property registration.<br>
            - Lease registration.<br>
            - Client management.<br>
            - Dynamic Website creation (letting the user customize his
            website).<br>
          </p>
          <p>
            Nowadays I'm working in a new project for Imobia, for updating the
            view and design of the system (also organizing code).
          </p>

          <p>All this using Vue.</p>

          <div class="d-flex justify-content-center mt-3">
            <a
              :class="$vuetify.theme.dark ? '' : 'grey darken-3 rounded-lg p-3'"
              target="_blank"
              href="https://useimobia.com.br/"
            >
              <v-img
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
