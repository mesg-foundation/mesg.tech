<template>
  <div>
    <Header id="introduction" class="dark token-header"
      :title="title"
      :description="description" />
    <div class="white">
      <ATOListing />
    </div>
    <CTATokenUpdated id="token updated" class="dark"/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import ATOListing from '~/components/ATOListing'
import CTATokenUpdated from '~/components/cta/TokenUpdated'
import page from './page'
export default {
  components: {
    Header,
    ATOListing,
    CTATokenUpdated,
  },
  mixins: [
    page({
      title: 'Algorithmic Token Offering',
      description: 'Statistics related to the Algorithmic Token Offering'
    })
  ]
}
</script>
