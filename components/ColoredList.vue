<template>
  <ul mb2>
    <li mb1 v-for="(item, i) in items" :key="i" class="icon-list">
      <span :style="`background-color: ${item.color}`"></span>
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.icon-list {
  padding-left: calc(var(--margin) * 2);
  span {
    width: 23px;
    height: 23px;
    left: 0;
    top: 0;
  }
}
</style>
