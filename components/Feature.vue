<template>
  <div flex row space-between align-center wrap class="feature">
    <div half p1>
      <img v-if="src" :src="src" />
      <slot name="left"></slot>
    </div>
    <div half>
      <h3 mb1>{{ title }}</h3>
      <p v-if="description" v-html="description"></p>
      <slot name="right"></slot>
      <Button secondary v-if="to" :to="to" mt1>{{ action }}</Button>
      <Button secondary v-if="href" :href="href" target="_blank" mt1>{{ action }}</Button>
    </div>
  </div>
</template>

<script>
import Button from "@mesg-components/button";
export default {
  components: {
    Button
  },
  props: {
    src: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    to: {
      type: [String, Object]
    },
    href: {
      type: String
    },
    action: {
      type: String
    }
  }
};
</script>

<style scoped>
.feature:last-child {
  margin-bottom: 0 !important;
}
</style>
