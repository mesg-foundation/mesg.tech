<template>
  <div flex column class="card" mb2>
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 0.3em;
  padding:2.4em;
  background-color: #ffffff;
  background-color: var(--white-content);
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.07);
  overflow: hidden;
}

</style>
