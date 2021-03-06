<template>
  <div>
    <Header :image="require('~/assets/orchestrator.svg')" :title="title" :description="description">
      <template v-slot:top>
        <span flex class="label">{{ orchestrator.label }}</span>
      </template>
    </Header>

    <section id="features" mb3>
      <Container flex row space-between wrap>
        <TextWithIcon
          v-for="(feature, i) in orchestrator.features.secondary"
          :key="i"
          :src="feature.src"
          :title="feature.title"
          :text="feature.description"
          third
        />
      </Container>
    </section>

    <section id="config" mb3>
      <Container class="text-center">
        <h2 mb1>Feature-based applications</h2>
        <p>Orchestrate services to create features for your applications. After all, what is an application but a collection of features?</p>
      </Container>
      <div class="outer-background" pt3 pb3>
        <Container>
          <div flex row space-between align-center wrap>
            <div half>
              <Code class="code" />
            </div>
            <div half>
              <Titletext3
                title="Describe your feature"
                text="Orchestrate your applications by connecting the events and tasks from any service with a process.</br></br>Implement complex technologies like blockchains and AI without managing the complexities.</br></br>Any existing services can be used to create features, or users can write new services using any language.</br></br>Currently, services can be orchestrated by writing a process file."
              />
            </div>
          </div>
        </Container>
      </div>
    </section>

    <section id="more-infos" mb3>
      <Container>
        <div flex row mobile-column align-center>
          <div half>
            <h3 mb1>Help & Guidance</h3>
            <p
              mb2
            >The MESG Forum and Github are built to support the community. Browse existing issues and solutions, or create a new one.</p>
          </div>
          <div half>
            <ListSN :list="[icons.github, icons.forum]" />
          </div>
        </div>
      </Container>
    </section>

    <CTA
      title="The Liteflow Framework"
      description="Take a lighter approach with the Liteflow Framework. Build & ship secure, feature-rich applications with just a few lines of code."
      :links="[{ title: 'Build for free' , href: externalLinks.liteflowCTABottom }]"
      mb1
    />
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import Header from "@mesg-components/header";
import Button from "@mesg-components/button";
import Container from "~/components/Container";
import CTA from "~/components/CTA";
import ListSN from "~/components/ListSN";
import TextWithIcon from "~/components/TextWithIcon";
import Titletext3 from "~/components/Titletext3";
import Code from "~/components/Code";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    Button,
    CTA,
    ListSN,
    TextWithIcon,
    Titletext3,
    Code
  },
  mixins: [
    page({
      title: "Process",
      description:
        "Orchestrate decentralized services with a process to build highly scalable, interoperable and maintainable applications."
    })
  ],
  computed: {
    ...mapGetters({
      products: "products",
      links: "links",
      externalLinks: "externalLinks",
      icons: "icons"
    }),
    orchestrator() {
      return this.products.find(x => x.id === "orchestrator");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";

@media only screen and (max-width: $mobile-breakpoint) {
  .code {
    margin-bottom: calc(#{$margin} * 2);
  }
}
</style>







