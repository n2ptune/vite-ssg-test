import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

// createApp(App).mount('#app')

export const createApp = ViteSSG(
  App,
  {
    routes: [
      {
        path: '/',
        name: 'main',
        component: () => import('./components/HelloWorld.vue')
      }
    ]
  },
  ({ app, router, routes, isClient, initialState }) => {
    console.log(app)
  }
)
