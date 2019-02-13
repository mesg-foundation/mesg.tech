<template>
  <div>
    <Header id="introduction" class="dark token-header" />
    <div class="white">
      <ATOListing />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
import ATOListing from '~/components/ATOListing'

export default {
  components: {
    Header,
    ATOListing
  }
}
</script>
