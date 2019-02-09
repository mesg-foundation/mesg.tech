<template>
  <div>
    <Header
      id="introduction"
      class="dark"
      :title="title"
      :description="description"
      :schema="schema"
    />
    <CategoriesCase :showcases="showcases" id="case" class="white"/>
    <CTANext id="next" class="dark"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "~/components/Header";
import CategoriesCase from "~/components/CategoriesCase";
import CTANext from "~/components/cta/Next";
import SchemaNutshell from "~/components/schema/Nutshell";
import page from "../page";
export default {
  components: {
    Header,
    CategoriesCase,
    CTANext
  },
  mixins: [
    page({
      title: "MESG Showcase",
      description: "Not sure about what can be build with MESG, this section will help you understand the potential of MESG and the wide range of possibilities offered.",
      schema: SchemaNutshell
    })
  ],
  computed: mapGetters(["showcases"])
};
</script>
