<template>
  <div class="space">
    <div class="svg-blackhole-sun svg-container">
      <svg-blackhole-sun ref="sun" :radius="radius" />
    </div>
    <div class="svg-comet svg-container">
      <svg-comet />
    </div>
    <div class="svg-earth svg-container">
      <div class="rotate">
        <svg-earth />
      </div>
    </div>
    <div class="svg-moon svg-container">
      <svg-moon />
    </div>
    <div class="svg-planet-bottom svg-container">
      <svg-planet-bottom />
    </div>
    <div class="svg-planet-pink svg-container">
      <svg-planet-pink />
    </div>
    <div class="svg-planet-red svg-container">
      <svg-planet-red />
    </div>
    <div class="svg-star-left svg-container">
      <svg-star-left />
    </div>
    <div class="svg-star svg-container">
      <svg-stars />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      starsTranslation: 0,
      yLimit: 1,
      radius: 90,
      ticking: false
    }
  },
  mounted() {
    // window.addEventListener('scroll', (evt) => {
    //   this.starsTranslation = this.getScrollPercent()
    //   console.log(this.getScrollPercent())
    //   this.radius = 123 * this.getScrollPercent()
    // })
    window.addEventListener('mousemove', this.updateSunGradient)
  },
  destroyed() {
    window.removeEventListener('mousemove', null)
  },
  methods: {
    updateSunGradient(evt) {
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          const mX = evt.pageX
          const mY = evt.pageY
          const component = this.$refs.sun
          // the distance is calculated as a percentage (0 ~ 1), the max distance from the component is the corners of the page
          const distance = this.calculateDistance(component, mX, mY)
          this.radius = 70 + 20 * (1 - distance)

          this.ticking = false
        })

        this.ticking = true
      }
    },
    getScrollPercent() {
      const h = document.documentElement
      const b = document.body
      const st = 'scrollTop'
      const sh = 'scrollHeight'
      return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)
    },
    calculateDistance(elem, mouseX, mouseY) {
      if (elem) {
        return (
          Math.sqrt(
            Math.pow(
              mouseX -
                (elem.$el.getBoundingClientRect().x + elem.$el.clientWidth / 2),
              2
            ) +
              Math.pow(
                mouseY -
                  (elem.$el.getBoundingClientRect().y +
                    elem.$el.clientHeight / 2),
                2
              )
          ) /
          Math.sqrt(
            Math.pow(
              window.innerWidth -
                (elem.$el.getBoundingClientRect().x + elem.$el.clientWidth / 2),
              2
            ) +
              Math.pow(
                window.innerHeight -
                  (elem.$el.getBoundingClientRect().y +
                    elem.$el.clientHeight / 2),
                2
              )
          )
        )
      }
    }
  }
}
</script>
<style type="scss">
.space {
  background-color: rgb(20, 4, 26) !important;
  position: fixed;
  width: 150vw;
  height: 150vh;
  z-index: -2;
}
.rotate {
  height: 100%;
  width: 100%;
  animation: rotate 60s linear 0s infinite;
}
.svg-container {
  position: fixed;
  z-index: -1;
}
.sun-gradient {
  animation: pulse 4s ease-in-out 0s infinite alternate;
}
.svg-blackhole-sun {
  transform: translate(-50%, -50%);

  top: 50%;
  left: 50%;
  width: 20rem;
}
.svg-comet {
  position: fixed;
  z-index: -2;
  top: -20%;
  right: -20%;
  animation: comet 20s linear 5s infinite;
  width: 10em;
}
.svg-earth {
  transform: translate(-50%, -50%);
  top: 85%;
  left: 25%;
  position: fixed;
  z-index: 1;
  width: 7em;
}
.svg-moon {
  transform: translate(-50%, -50%);
  animation: orbit 4s ease-in-out 0s infinite alternate,
    switchIndex 8s ease-in-out 0s infinite;
  top: 85%;
  left: 25%;
  position: fixed;
  z-index: -1;
  width: 3em;
}
.svg-planet-bottom {
  position: fixed;
  z-index: -1;
  width: 25%;
  bottom: 0;
  right: 0;
  animation: slowMove 8s ease-in-out 0s infinite alternate;
}
.svg-planet-pink {
  top: 25%;
  left: 75%;
  position: fixed;
  z-index: 1;
  width: 5em;
  animation: slowTilt 6s ease-in-out 0s infinite;
}
.svg-planet-red {
  top: 55%;
  left: 90%;
  position: fixed;
  z-index: 1;
  width: 9em;
  animation: slowMove 8s ease-in-out 0s infinite alternate;
}
.svg-star-left {
  position: fixed;

  top: 20%;
  animation: slowMove 16s ease-in-out 0s infinite alternate;

  z-index: -1;
  width: 100px;
}
.svg-star {
  position: fixed;
  animation: slowTilt 100s ease-in-out 0s infinite;
  z-index: -2;
  min-width: 100%;
  height: 100%;
}
#stars {
  min-width: 100%;
  height: 100%;
}
.st0 {
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #150c21;
}

.st-white {
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #ffffff;
}
</style>
