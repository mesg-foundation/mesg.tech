<template>
  <div>
    <Header
      :showcase="showcase"
      id="introduction"
      class="dark"
      :title="title"
      :description="description"
      :schema="schema"
      backTitle="Back to showcase"
      backLink="/showcases"
    />
    <div class="container-parent">
      <div class="container-child" flex column align-center>
        <Showcase :showcase="showcase" />
      </div>
    </div>
    <CTANext id="next" class="dark"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CTANext from "~/components/cta/Next";
import Header from "~/components/Header";
import SchemaNutshell from "~/components/schema/Nutshell";
import Showcase from "~/components/Showcase";
import page from "../page";
export default {
  components: {
    Header,
    CTANext,
    Showcase
  },
  mixins: [
    page(self => ({
      title: self.showcase.title,
      description: self.showcase.resume,
      schema: self.showcase.picture
    }))
  ],
  computed: {
    ...mapGetters(["showcases"]),
    showcase() {
      return this.showcases.filter(x => x.id === this.$route.params.id)[0];
    }
  }
};
</script>
