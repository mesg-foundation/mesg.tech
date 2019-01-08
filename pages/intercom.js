const loadScript = id => new Promise(resolve => {
  const script = document.createElement('script')
  script.async = true
  script.src = `https://widget.intercom.io/widget/${id}`
  const firstScript = document.getElementsByTagName('script')[0]
  firstScript.parentNode.insertBefore(script, firstScript)
  script.onload = resolve
})
const exists = () => typeof window.Intercom === 'function'
const init = app_id => {
  window.Intercom('boot', { app_id })
}
const update = app_id => {
  window.Intercom('reattach_activator')
  window.Intercom('update', { app_id })
}

export default {
  async mounted() {
    if (process.server) {
      return
    }
    const id = 'mhvi2ntp'
    if (exists()) {
      update(id)
    } else {
      await loadScript(id)
      init(id)
      update(id)
    }
  }
}
