<template>
  <div>
    <Header id="introduction" class="dark token-header"
      :title="title"
      :description="description" />
    <div class="white">
      <ATDStats />
    </div>
    <CTATokenUpdated id="token updated" class="dark"/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import ATDStats from '~/components/ATDStats'
import CTATokenUpdated from '~/components/cta/TokenUpdated'
import page from './page'
export default {
  components: {
    Header,
    ATDStats,
    CTATokenUpdated,
  },
  mixins: [
    page({
      title: 'Algorithmic Token Distribution',
      description: 'Statistics related to the Algorithmic Token Distribution'
    })
  ]
}
</script>
