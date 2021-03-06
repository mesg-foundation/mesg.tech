<template>
  <div>
    <Header :image="require('~/assets/home.svg')" :title="title" :description="description"></Header>

    <section id="features" mb3>
      <Container flex row space-between wrap>
        <TextWithIcon
          v-for="(feature, i) in home.features.primary"
          :key="i"
          :src="feature.src"
          :title="feature.title"
          :text="feature.description"
          third
        />
      </Container>
    </section>

    <section id="presentation">
      <Container flex column class="intro text-center">
        <h2 mb1>Technology</h2>
        <p>Together, the MESG Engine, Services, Processes form an ultra-efficient, open network of application development and hosting.</p>
      </Container>
    </section>

    <section id="technology" class="outer-background" mb3>
      <Container>
        <div flex row space-between wrap>
          <Card flex row mobile-column>
            <nuxt-link
              v-for="product in products"
              :key="product.id"
              :id="product.id"
              :to="links[product.id]"
              class="technology-card"
              flex
              column
              align-center
              p2
            >
              <div>
                <img mb2 :src="product.img" :alt="product.title" />
              </div>
              <span class="label text-center">{{ product.label }}</span>
              <h3 mb1>{{ product.title }}</h3>
              <i class="fal fa-long-arrow-alt-right"></i>
            </nuxt-link>
          </Card>
        </div>
      </Container>
    </section>

    <section id="liteflow" mb3>
      <Container>
        <div flex row mobile-column-reverse align-center>
          <div>
            <span flex class="label">Partner</span>
            <h2 mb1>Liteflow</h2>
            <p
              mb2
            >MESG partner Liteflow helps developers build and ship faster by removing what's unnecessary. Build applications with just a few lines of code, then deploy and forget with a single command.</p>
            <Button :href="externalLinks.liteflowHome" target="_blank" primary>Discover Liteflow</Button>
          </div>
          <div class="img-bg" flex row half align-center>
            <img src="~/assets/liteflow-x2.png" alt="Liteflow Website" />
          </div>
        </div>
      </Container>
    </section>

    <section>
      <Container flex column align-center>
        <hr mb3 />
      </Container>
    </section>

    <section id="showcase" mb3>
      <Container>
        <div flex column align-center>
          <h2 class="text-center" mb2>Built with MESG</h2>
          <div flex row mobile-column mb2>
            <UseCase v-for="usecase in usecases" :key="usecase.id" :usecase="usecase" />
          </div>
          <Button secondary :to="links.showcase">See the showcase</Button>
        </div>
      </Container>
    </section>

    <section>
      <Container flex column align-center>
        <hr mb3 />
      </Container>
    </section>

    <section id="blog" mb3>
      <Container>
        <div flex column align-center>
          <h2 mb2>Blog</h2>
          <div flex row mobile-column mb2>
            <Article v-for="article in articles" :key="article.id" :article="article" />
          </div>
          <Button secondary :href="externalLinks.blogHome" target="_blank">Read our blog</Button>
        </div>
      </Container>
    </section>

    <section>
      <Container flex column align-center>
        <hr mb3 />
      </Container>
    </section>

    <section id="more-infos" mb3>
      <Container>
        <div flex row mobile-column align-center>
          <CardNewsletter
            title="Newsletter"
            description="Sign up for our monthly newsletter to receive updates about MESG, our roadmap, products, new releases and more."
            half
          />
          <div half class="community">
            <h3 mb1>Community</h3>
            <p
              mb2
            >MESG is open-source and is community-driven. Join us in building the bridges between legacy and emerging technologies.</p>
            <ListSN
              :list="[icons.twitter,icons.github,icons.telegram,icons.forum,icons.discord,icons.reddit]"
            />
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
import UseCase from "~/components/UseCase";
import TextWithIcon from "~/components/TextWithIcon";
import Card from "@mesg-components/card";
import List from "~/components/List";
import CardNewsletter from "~/components/CardNewsletter";
import ListSN from "~/components/ListSN";
import CTA from "~/components/CTA";
import Article from "~/components/Article";
import page from "./page";

export default {
  components: {
    Header,
    Container,
    UseCase,
    Button,
    TextWithIcon,
    Card,
    List,
    CardNewsletter,
    ListSN,
    CTA,
    Article
  },
  fetch: ({ store }) => store.dispatch("articles/fetchAll"),
  mixins: [
    page({
      title: "The builders’ open economy",
      description:
        "A decentralized event-driven task-orchestration system based on a decentralized registry of services."
    })
  ],
  computed: {
    ...mapGetters({
      products: "products",
      home: "home",
      links: "links",
      externalLinks: "externalLinks",
      allusecases: "usecases",
      icons: "icons",
      articles: "articles/all"
    }),
    usecases() {
      return this.allusecases.slice(0, 3);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables";
#alert {
  .alert-card {
    background-color: $primary;
    box-shadow: none;
    .alert-icon {
      max-width: 50px;
      margin-right: $margin;
      span {
        min-width: 50px;
        width: 50px;
        max-width: 50px;
        min-height: 50px;
        height: 50px;
        max-height: 50px;
        background-color: $purple;
        border-radius: 100%;
        i {
          color: $white;
          font-size: 24px;
          text-align: center;
        }
      }
    }
    p {
      color: $white;
    }
  }
}

#technology {
  .card {
    padding: 0;
  }
  .technology-card {
    transition: 0.1s ease-in;
    margin-right: 0;
    border-right: dotted 1px $lavender-light;
    &:hover {
      transform: scale(1.01);
      background-color: transparentize($primary-light, 0.85);
    }
    &:last-child {
      border-right: none;
    }
    img {
      height: 140px;
      width: 140px;
      max-width: 100%;
    }
  }
}

#liteflow {
  .img-bg {
    position: relative;
    height: 490px;
    background-color: #ffeee6;
    border-radius: 6px;
  }
  img {
    position: relative;
    left: calc(#{$margin} * 2);
    width: 100%;
    height: auto;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  }
}

@media only screen and (max-width: $mobile-breakpoint) {
  #alert {
    .alert-icon {
      margin-bottom: $margin;
      margin-right: 0 !important;
    }
    p {
      text-align: center;
      margin-bottom: calc(#{$margin} * 2);
    }
  }
  .intro {
    padding-bottom: 0;
  }
  .technology-card {
    border-right: none;
    border-bottom: dotted 1px $lavender-light;
    &:last-child {
      border-bottom: none;
    }
  }
  #liteflow {
    .img-bg {
      margin-top: $margin;
      margin-bottom: calc(#{$margin} * 3) !important;
      padding: $margin;
      height: 300px;
    }
    img {
      left: 0;
    }
  }
  #more-infos {
    .community {
      margin-top: calc(#{$margin} * 3);
    }
  }
}
</style>
