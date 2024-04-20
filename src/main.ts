import 'virtual:uno.css'
import App from './App.vue'
import { createApp } from 'vue'
import { setupStore } from '@/stores'
import { setupNaiveDiscreteApi } from '@/plugins'

async function bootstrap() {
  const app = createApp(App)
  // 挂载状态管理
  setupStore(app)
  // 挂载 naive-ui 脱离上下文的 Api
  setTimeout(() => {
    setupNaiveDiscreteApi()
  })

  app.mount('#app', true)
}

void bootstrap()
