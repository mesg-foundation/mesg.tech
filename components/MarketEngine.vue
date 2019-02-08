<template>
  <section>
  <div class="container-parent">
    <div class="container-child" flex column>
      <div class="content" flex column justify-center align-center>
        <h2>Our Products</h2>
        <div class="separator-orange" mb2></div>
      </div>
      <div flex row space-around justify-center>
        <Card half>
          <div class="schema" flex column justify-center>
            <img src="~/assets/icons/Engine.svg" alt="MESG Engine" class="icon" mb2>
          </div>
          <h2>MESG Engine</h2>
          <p>
            The MESG Engine powers connectivity between Modules and other devices and applications. Control the flow of data and level of security between your whole stack of connected technologies.
          </p>
          <nav flex mt2>
            <Button to="/engine" outline>See how it works</Button>
          </nav>
        </Card>
        <Card half class="market">
          <div class="schema" flex column justify-center>
            <img src="~/assets/icons/Marketplace.svg" alt="MESG Marketplace" class="icon" mb2>
          </div>
          <h2>MESG Marketplace</h2>
          <p>
            Save time by building applications using existing Modules in the MESG Marketplace. Or earn MESG Tokens by building Modules and offering them to the community.
          </p>
          <nav flex mt2>
            <Button to="/marketplace" outline>Learn more</Button>
          </nav>
        </Card>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import IconMarketplace from '~/components/icon/Marketplace'
import Button from '~/components/Button'
import Card from '~/components/Card'
import IconEngine from '~/components/icon/Engine'
export default {
  components: {
    IconMarketplace,
    IconEngine,
    Button,
    Card
  }
}
</script>

<style scoped>

.container-parent {
  padding-bottom:0;
}
.container-child {
  padding-bottom:0;
}

.icon {
  max-width: 100px;
}

svg {
  margin-top:0;
}

@media only screen and (max-width: 768px) {
  .market {
    margin-top:2.4em;
  }
}
@media only screen and (max-width: 414px) {
  .icon {
    max-width: 80px;
  }
  .market {
    margin-top:1.8em;
  }
}

</style>
