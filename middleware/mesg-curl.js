const message = `
███╗   ███╗███████╗███████╗ ██████╗ 
████╗ ████║██╔════╝██╔════╝██╔════╝ 
██╔████╔██║█████╗  ███████╗██║  ███╗
██║╚██╔╝██║██╔══╝  ╚════██║██║   ██║
██║ ╚═╝ ██║███████╗███████║╚██████╔╝
╚═╝     ╚═╝╚══════╝╚══════╝ ╚═════╝ 

Website: https://mesg.com
Documentation: https://docs.mesg.com
Github: https://github.com/mesg-foundation

Install the core: https://mesg.com/install

HAPPY CODING :)
`

export default function ({ req, res }) {
  if (!process.server) { return }
  if (req.headers['user-agent'].startsWith('curl/')) {
    return res.end(message)
  }
}