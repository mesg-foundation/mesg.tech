<template>
  <section>
    <div flex row space-between>
      <div flex column half ma2>
        <h2>Challenges</h2>
        <p>{{ showcase.challenges }}</p>
      </div>
      <div flex column half ma2>
        <h2>Goals</h2>
        <ul>
          <li v-for="g in showcase.goals" :key="g">{{ g }}</li>
        </ul>
      </div>
    </div>
  
    <div flex row>
      <div flex column half ma2>
        <img :src="showcase.schema">
      </div>
      <div flex column half ma2>
        <h2>Benefits</h2>
        <ul mb2>
          <li v-for="b in showcase.benefits" :key="b">{{ b }}</li>
        </ul>

        <h2>Opportunities</h2>
        <ul>
          <li v-for="o in showcase.opportunities" :key="o">{{ o }}</li>
        </ul>
      </div>
    </div>
    
    <h2>Who could benefit from that ?</h2>

    <nav>
      <a v-for="(c, i) in showcase.companies" :key="i" :href="c.href" target="_blank">
        <img :src="c.logo" :alt="c.name"/>
      </a>
    </nav>

    <h2>Ressources</h2>

    <nav>
      <Button 
        v-for="(r, i) in showcase.ressources" :key="i" 
        :href="r.href"
        outline
        target="_blank" mr1>
        {{ ressourceText(r.type) }}
      </Button>
    </nav>
    
  </section>
</template>

<script>
import Button from '~/components/Button'
export default {
  components: {
    Button
  },
  props: {
    showcase: {
      type: Object,
      required: true
    }
  },
  methods: {
    ressourceText(type) {
      return {
        video: 'Video',
        blog: 'Blog',
        forum: 'Forum post',
        demo: 'Demo',
        source: 'Source code'
      }[type]
    }
  }
}
</script>

<style scopped>
nav img {
  height: 100px;
}

nav a {

}
</style>