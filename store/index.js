export const state = () => ({
  showcases: [{
    id: 'stripe-erc20',
    title: 'An app for buying crypto with fiat',
    picture: 'https://cdn-images-1.medium.com/max/2000/1*_lYOgjsGw7BDJh58YUdQtw.jpeg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus suscipit ullamcorper.',
    schema: 'https://cdn-images-1.medium.com/max/2000/1*_lYOgjsGw7BDJh58YUdQtw.jpeg',
    challenges: 'Buying crypto either for investment or to actually use a product is something complicated with a lot of friction for users reducing massivly adoption.',
    goals: [
      'Create an application that can accept payment from a fiat payment gateway such as bank or payment providers like Stripe and deliver tokens to the buyers'
    ],
    benefits: [
      'Every project could be now able to use the benefits of blockchain and tokenize everything without having the barrier to entry that blockchains has now.',
      'New way of doing ICO',
      'Gaming industry could have their token in the game that is actual token based on ERC20 or the different objects to craft or whatever based on the ERC721.',
      'Shop could do their inventory on blockchain and still selling this with a simple credit cart system'
    ],
    opportunities: [
      'Extension to other tokens such as ERC721',
      'Support of many different native blockchain token'
    ],
    companies: [
      { href: 'https://www.ethereum.org/', logo: 'https://www.ethereum.org/images/logos/ETHEREUM-ICON_Black_small.png', name: 'Ethereum' }
    ],
    ressources: [
      { type: 'blog', href: 'https://medium.com/mesg/an-app-to-buy-crypto-with-fiat-95c658ad74b7' },
      { type: 'forum', href: 'https://forum.mesg.com/t/stripe-to-erc20/206' },
      { type: 'video', href: 'https://drive.google.com/file/d/1WfZZ9tcNJAEdKms9LKynR1rlle4rS_Ix/view?usp=sharing ' },
      { type: 'demo', href: 'http://stripe-erc20.demo.mesg.com:8080/' },
      { type: 'source', href: 'https://github.com/mesg-foundation/application-stripe-to-erc20' }
    ]
  },
  {
    id: 'monetize-api',
    title: 'The death of the subscription plan',
    picture: 'https://cdn-images-1.medium.com/max/2000/1*6-MtpPSDCw7eezvHa-NaMw.jpeg',
    schema: 'https://cdn-images-1.medium.com/max/2000/1*6-MtpPSDCw7eezvHa-NaMw.jpeg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus suscipit ullamcorper.',
    challenges: '',
    goals: [

    ],
    benefits: [

    ],
    opportunities: [

    ],
    companies: [
      { href: '', logo: '', name: '' }
    ],
    ressources: [
      { type: '', href: '' }
    ]
  },
  {
    id: 'erc20-monitoring',
    title: 'How to monitor ERC20 transactions',
    picture: 'https://cdn-images-1.medium.com/max/2000/1*vwF6o7PeSsRQlKRd6u-TzA.jpeg',
    schema: 'https://cdn-images-1.medium.com/max/2000/1*vwF6o7PeSsRQlKRd6u-TzA.jpeg',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus suscipit ullamcorper.',
    challenges: '',
    goals: [

    ],
    benefits: [

    ],
    opportunities: [

    ],
    companies: [
      { href: '', logo: '', name: '' }
    ],
    ressources: [
      { type: '', href: '' }
    ]
  },
  {
    id: 'storage-syncronisation',
    title: 'How to monitor ERC20 transactions',
    picture: '',
    schema: '',
    resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus suscipit ullamcorper.',
    challenges: '',
    goals: [

    ],
    benefits: [

    ],
    opportunities: [

    ],
    companies: [
      { href: '', logo: '', name: '' }
    ],
    ressources: [
      { type: '', href: '' }
    ]
  }]
})

export const getters = {
  showcases: state => state.showcases
}
