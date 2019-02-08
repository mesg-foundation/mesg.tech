export const state = () => ({
  showcases: [{
    id: 'stripe-erc20',
    title: 'An app for buying crypto with fiat',
    picture: 'https://cdn-images-1.medium.com/max/2000/1*_lYOgjsGw7BDJh58YUdQtw.jpeg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus suscipit ullamcorper.',
    component: 'StripeERC20'
  },
  {
    id: 'monetize-api',
    title: 'The death of the subscription plan',
    picture: 'https://cdn-images-1.medium.com/max/2000/1*6-MtpPSDCw7eezvHa-NaMw.jpeg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus suscipit ullamcorper.',
    component: 'MonetizeAPI'
  },
  {
    id: 'erc20-monitoring',
    title: 'How to monitor ERC20 transactions',
    picture: 'https://cdn-images-1.medium.com/max/2000/1*vwF6o7PeSsRQlKRd6u-TzA.jpeg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus suscipit ullamcorper.',
    component: 'ERC20Monitoring'
  },
  {
    id: 'storage-syncronisation',
    title: 'How to monitor ERC20 transactions',
    picture: '',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus suscipit ullamcorper.',
    component: 'ERC20Monitoring'
  }]
})

export const getters = {
  showcases: state => state.showcases
}
