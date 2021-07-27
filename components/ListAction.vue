<template>
  <v-list :dense="dense" :shaped="shaped" :rounded="rounded">
    <v-list-group
      v-for="item in data"
      :key="'parent-' + item.name"
      :color="color"
    >
      <template #activator>
        <v-list-item-icon>
          <v-icon :color="iconColor">
            mdi-{{ item.icon }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </template>

      <v-list-item
        v-for="child in item.children"
        :key="'child-' + child.name"
        class="ml-2"
        @click="setOpened(child)"
      >
        <v-list-item-icon>
          <v-icon
            :class="
              child.key === value.key ? 'primary--text text--lighten-2' : ''
            "
          >
            mdi-{{ child.icon }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ child.name }}</v-list-item-title>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    },
    data: {
      type: [Object, Array],
      required: true
    },
    action: {
      type: String,
      required: false,
      default: ''
    },
    shaped: {
      type: [String, Number, Boolean],
      required: false,
      default: false
    },
    rounded: {
      type: [String, Number, Boolean],
      required: false,
      default: false
    },
    color: {
      type: [String, Number, Boolean],
      required: false,
      default: ''
    },
    dense: {
      type: [String, Number, Boolean],
      required: false,
      default: false
    },
    iconColor: {
      type: [String, Number, Boolean],
      required: false,
      default: ''
    }
  },
  methods: {
    setOpened(item, action = '') {
      if (!action) {
        this.$emit('input', item)
      } else {
        this.$emit(action, item)
      }
    }
  }
}
</script>

<style></style>
