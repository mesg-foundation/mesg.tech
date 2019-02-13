<template>
  <section>
    <div class="container-parent">
      <div class="container-child-title" flex column justify-center align-center>
          <h2>ATO Listing</h2>
          <div class="separator-orange"></div>
      </div>
      <div class="container-child">
        <div class="limiter">
          <div class="container-table100">
            <div class="wrap-table100">
                <div class="table">
                  <div class="row header">
                    <div class="cell">Day</div>
                    <div class="cell">MESG Available</div>
                    <div class="cell">ETH</div>
                    <div class="cell">BTC</div>
                  </div>
                  <div v-for="(item, index) in ato" :key="index" class="row">
                    <div class="cell" data-title="Day">{{ item.date }}</div>
                    <div class="cell" data-title="MESG Available">{{ item.mesg }} </div>
                    <div class="cell" data-title="ETH">{{ item.eth }}</div>
                    <div class="cell" data-title="BTC">{{ item.btc }}</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ato: []
    }
  },
  methods: {
    fetchATOListing() {
      fetch('https://application-ato.mesg.com/atoListing')
        .then((resp) => { return resp.json() })
        .then((ato) => {
          this.ato = ato.map((item) => {
            const s = item.date.split('/')
            item.date = [s[1], s[0], s[2]].join('/')
            return item
          })
        })
    }
  },

  beforeMount() {
    this.fetchATOListing()
  }
}
</script>

<style scoped>
.limiter {
  width: 100%;
  margin: 0 auto;
}

.container-table100 {
  width: 100%;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 0;
}

.wrap-table100 {
  width: 960px;
  border-radius: 10px;
  overflow: hidden;
}

.table {
  width: 100%;
  display: table;
  margin: 0;
}

@media screen and (max-width: 768px) {
  .table {
    display: block;
  }
}

.row {
  display: table-row;
  background: #fff;
}

.row.header {
  color: #ffffff;
  background: var(--lighter-purple);
}

@media screen and (max-width: 768px) {
  .row {
    display: block;
  }

  .row.header {
    padding: 0;
    height: 0px;
  }

  .row.header .cell {
    display: none;
  }

  .row .cell:before {
    font-family: 'Quicksand', sans-serif;
    font-size: 12px;
    color: #808080;
    line-height: 1.2;
    text-transform: uppercase;
    font-weight: unset !important;

    margin-bottom: 13px;
    content: attr(data-title);
    min-width: 98px;
    display: block;
  }
}

.cell {
  display: table-cell;
}

@media screen and (max-width: 768px) {
  .cell {
    display: block;
  }
}

.row .cell {
  font-family: 'Quicksand', sans-serif;
  font-size: 15px;
  color: #666666;
  line-height: 1.2;
  font-weight: unset !important;

  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f2f2f2;
}

.row.header .cell {
  font-family:'Quicksand', sans-serif;
  font-size: 18px;
  color: #fff;
  line-height: 1.2;
  font-weight: unset !important;

  padding-top: 19px;
  padding-bottom: 19px;
}

.row .cell:nth-child(1) {
  width: 260px;
  padding-left: 40px;
}

.table, .row {
  width: 100% !important;
}

.row:hover {
  background-color: #ececff;
  cursor: pointer;
}

@media (max-width: 768px) {
  .row {
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 18px;
    padding-top: 30px;
    padding-right: 15px;
    margin: 0;
  }
  
  .row .cell {
    border: none;
    padding-left: 30px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .row .cell:nth-child(1) {
    padding-left: 30px;
  }
  
  .row .cell {
    font-family: 'Quicksand', sans-serif;
    font-size: 18px;
    color: #555555;
    line-height: 1.2;
    font-weight: unset !important;
  }

  .table, .row, .cell {
    width: 100% !important;
  }
}
</style>