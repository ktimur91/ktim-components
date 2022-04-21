// import { version } from '../package.json'
import * as components from './components'

// const install = (app, opts = {}) => {
//   // app.use(setupGlobalOptions(opts))

//   components.forEach((component) => {
//     app.use(component)
//   })

//   // applyOptions(app)
// }

// function applyOptions(app) {
//   app.config.globalProperties.$loading = ElLoading.service
//   app.config.globalProperties.$msgbox = Msgbox
//   app.config.globalProperties.$alert = Msgbox.alert
//   app.config.globalProperties.$confirm = Msgbox.confirm
//   app.config.globalProperties.$prompt = Msgbox.prompt
//   app.config.globalProperties.$notify = Notification
//   app.config.globalProperties.$message = Message
// }

// const allComponents = {
//   version,
//   install
// }

// export default allComponents
export * from './components'
