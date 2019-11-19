<template>
  <ul mb2>
    <li mb2 v-for="(item, i) in items" :key="i" class="icon-list" flex align-center>
      <img mr1 v-if="item.src" :src="item.src" :alt="item.title" />
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
li {
  min-height: 50px;
  img {
    height: 50px;
    width: 50px;
    vertical-align: middle;
  }
}
.icon-list {
  padding-left: calc(var(--margin) * 4);
}
</style>
