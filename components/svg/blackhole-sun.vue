<template>
  <svg
    id="Layer_1"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 246.2 246.2"
    style="enable-background: new 0 0 246.2 246.2"
    xml:space="preserve"
  >
    <g id="Sun">
      <radialGradient
        id="SVGID_1_"
        class="sun-gradient"
        cx="123.1"
        cy="123.0999"
        :r="radius"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style="stop-color: #f37321" />
        <stop offset="1" style="stop-color: #fbab2d; stop-opacity: 0" />
      </radialGradient>
      <path
        class="st0"
        d="M123.1,246.2c67.73,0,123.1-55.17,123.1-123.1S191.03,0,123.1,0C55.37,0,0,55.37,0,123.1
  S55.37,246.2,123.1,246.2L123.1,246.2z"
      />
      <path
        class="st1"
        d="M123.1,179.1c30.8,0,56-25.1,56-56c0-30.8-25.1-56-56-56c-30.8,0-56,25.2-56,56S92.3,179.1,123.1,179.1
  L123.1,179.1z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    radius: {
      type: [String, Number],
      required: false,
      default: 123.1
    }
  },
  data() {
    return {}
  }
}
</script>
<style scoped>
.st0 {
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: url(#SVGID_1_);
}
.st1 {
  fill-rule: evenodd;
  clip-rule: evenodd;
  fill: #010101;
}
</style>
<!-- Generator: Adobe Illustrator 25.3.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
