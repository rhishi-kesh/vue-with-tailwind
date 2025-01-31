import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: () => import('./About.vue') },
    { path: '/contact', component: () => import('./Contact.vue') }
  ]
})

// Create the app instance, use the router, and mount it
const app = createApp(App) // Use App.vue as your root component
app.use(router)            // Use the router instance
app.mount('#app')          // Mount the app to the #app element
