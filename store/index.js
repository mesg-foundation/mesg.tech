export const state = () => ({
  showcases: [
    {
      id: 'stripe-erc20',
      title: 'Directly buy crypto with fiat',
      picture: 'https://cdn-images-1.medium.com/max/2000/1*_lYOgjsGw7BDJh58YUdQtw.jpeg',
      resume: 'Connect a payment processor to any blockchain with MESG and finally accept fiat for your tokens, improving your user experience',
      schema: 'https://cdn-images-1.medium.com/max/2000/1*_lYOgjsGw7BDJh58YUdQtw.jpeg',
      challenges: 'Buying crypto either for investment or in order to actually use a product, is a complicated process with lots of friction for users, resulting in a massive hurdle for adoption.',
      goals: [
        'Create an application that can accept payments from a fiat payment gateway such as bank, or payment providers like Stripe and deliver tokens directly to buyers'
      ],
      benefits: [
        'Any project is now able to use the benefits of blockchain and tokenize anything without first having to deal with the steep barrier to entry that blockchains currently require.',
        'New way of doing ICOs',
        'Those within the gaming industry could have their token featured as currency within their game be an actual token based on ERC20, or can generate and sell unique objects like digital collectables based on an ERC721 smart contracts.',
        'Shops can manage their inventory on the blockchain and continue selling collectables or currencies with a simple credit cart system'
      ],
      opportunities: [
        'Extension to other tokens such as ERC721',
        'Support of many different native blockchain tokens'
      ],
      companies: [
        { href: 'https://www.coinbase.com', logo: 'https://coinlist.me/wp-content/uploads/2017/11/Coinbase-GDAX-ETC-Withdrawals-Bitcoin.png', name: 'Coinbase' },
        { href: 'https://www.kraken.com/', logo: 'http://gettoknowbitcoin.com/wp-content/uploads/2014/03/kraken.png', name: 'Kraken' },
        { href: 'https://www.bitstamp.net/', logo: 'https://www.forexbrokerz.com/files/1501155659bitstamp%20logo.jpg', name: 'Bitstamp' },
        { href: 'https://www.binance.com', logo: 'https://cryptobijbel.be/wp-content/uploads/2018/02/binance-logo.png', name: 'Binance' }
      ],
      resources: [
        { type: 'blog', href: 'https://medium.com/mesg/an-app-to-buy-crypto-with-fiat-95c658ad74b7' },
        { type: 'forum', href: 'https://forum.mesg.com/t/stripe-to-erc20/206' },
        { type: 'video', href: 'https://drive.google.com/file/d/1WfZZ9tcNJAEdKms9LKynR1rlle4rS_Ix/view?usp=sharing ' },
        { type: 'demo', href: 'http://stripe-erc20.demo.mesg.com:8080/' },
        { type: 'source', href: 'https://github.com/mesg-foundation/application-stripe-to-erc20' }
      ]
    },
    {
      id: 'monetize-api',
      title: 'Replace subscription models with on-demand payments',
      picture: 'https://cdn-images-1.medium.com/max/2000/1*6-MtpPSDCw7eezvHa-NaMw.jpeg',
      schema: 'https://forum.mesg.com/uploads/default/original/1X/b1c56391ac876b910262718c070822f6aeefd25b.jpeg',
      resume: 'New innovations featuring superior monetization avenues which benefit both sellers and consumers could be the start of the transition away from one-size-fits-all subscription plans.',
      challenges: 'Today, most businesses like SaaS products use complex recurrent billing systems to accept payments for the features they deliver. Instead of needing to manage complex subscription systems, cryptocurrencies could be used to let users pay only for the features they want to expose.',
      goals: [
        'Accept payments with blockchain technology',
        'Trigger a certain task when a payment has been made',
        'Submit a proof of the execution to the user with the actual results of the executions'
      ],
      benefits: [
        'A new model of monetization that can open up the competition',
        'Focusing on the actual key value proposition of a business without needing to manage its monetization',
        'Reducing the complexity of products while increasing the potential reusability of them'
      ],
      opportunities: [
        'Creation of new innovative business models',
        'Human resources reductions (no need to manage a payment-system development team)',
        'Reducing friction for users (pay-as-you-go instead of only offering big packages)'
      ],
      companies: [
        { href: 'https://sendgrid.com', logo: 'https://500.co/wp-content/uploads/2015/02/sendgrod-vert.png', name: 'Sendgrid' },
        { href: 'https://heroku.com', logo: 'http://f22labs.com/images/tech-logo/heroku.95d56eba.png', name: 'Heroku' },
        { href: 'https://firebase.com', logo: 'https://gregorykelleher.com/user/pages/01.blog/angularjs_project_2/firebase_logo.png', name: 'Firebase' },
        { href: 'https://www.twilio.com/', logo: 'http://www.zdnet.de/wp-content/uploads/2014/12/twilio-logo.jpg', name: 'Twilio' }
      ],
      resources: [
        { type: 'blog', href: 'https://medium.com/mesg/the-death-of-the-subscription-plan-2ffbcbf521b4' },
        { type: 'forum', href: 'https://forum.mesg.com/t/monetizing-api-through-blockchain/223' },
        { type: 'source', href: 'https://github.com/antho1404/pegasys-hackathon' }
      ]
    },
    {
      id: 'erc20-monitoring',
      title: 'Monitor ERC20 transactions',
      picture: 'https://cdn-images-1.medium.com/max/2000/1*vwF6o7PeSsRQlKRd6u-TzA.jpeg',
      schema: 'https://forum.mesg.com/uploads/default/original/1X/dd3e09715411d90152680d614d77abd9bce19a37.png',
      resume: 'There’s immense power in data. With analytics tools, anyone can use data to create of massive efficiencies, forge new avenues of income or even generate new businesses altogether.',
      challenges: 'With the rise of ICOs, development with tokens, and businesses willing to accept cryptocurrencies, the fast-evolving ecosystem needs tools to actually provide metrics about what is happening on the blockchain.',
      goals: [
        'Connect to all token transfers',
        'Collect and manage token transfer information',
        'Visualize transaction data'
      ],
      benefits: [
        'Having all necessary metrics related to your token available',
        'You can extract patterns by looking at the graphs, like when there is a high transfer volume (potentially indicating that there is a bot)'
      ],
      opportunities: [
        'ICOs could be able to monitor the volume their token is experiencing during their ICO',
        'Connecting AI systems to be able to predict future transfers and token prices',
        'Expand to ERC721 and have a tool which monitors how your ERC721 is performing'
      ],
      companies: [
        { href: 'https://www.coinbase.com', logo: 'https://coinlist.me/wp-content/uploads/2017/11/Coinbase-GDAX-ETC-Withdrawals-Bitcoin.png', name: 'Coinbase' },
        { href: 'https://www.kraken.com/', logo: 'http://gettoknowbitcoin.com/wp-content/uploads/2014/03/kraken.png', name: 'Kraken' },
        { href: 'https://www.bitstamp.net/', logo: 'https://www.forexbrokerz.com/files/1501155659bitstamp%20logo.jpg', name: 'Bitstamp' },
        { href: 'https://www.binance.com', logo: 'https://cryptobijbel.be/wp-content/uploads/2018/02/binance-logo.png', name: 'Binance' }
      ],
      resources: [
        { type: 'blog', href: 'https://medium.com/mesg/how-to-monitor-important-erc20-transactions-ead35309ba9c' },
        { type: 'forum', href: 'https://forum.mesg.com/t/analytics-tool-for-erc20-transfers/209' },
        { type: 'demo', href: 'http://erc20-analytics.demo.mesg.com:3000', text: 'login "test", password: "test"' },
        { type: 'source', href: 'https://github.com/antho1404/application-erc20-analytics' }
      ]
    }
  ]
})

export const getters = {
  showcases: state => state.showcases
}
