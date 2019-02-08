<template>
  <section>
    <div class="container-parent">
      <div class="container-child" flex row space-around justify-center>
        <Card
          v-for="showcase in showcases"
          :key="showcase.id"
          class="showcase p0"
          third flex column space-between
        >
          <div>
            <img mb1 :src="showcase.picture" class="picture">
            <h3 mb1>{{showcase.title}}</h3>
            <p mb1>{{showcase.resume}}</p>
          </div>
          <div flex row space-between>
            <span flex></span>
            <nuxt-link flex :to="`/showcases/${showcase.id}`">
              Read the case
              <i class="fas fa-arrow-right" ml05></i>
            </nuxt-link>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
export default {
  components: {
    Card
  },
  props: {
    showcases: {
      type: Array,
      required: true
    }
  }
};
</script>
