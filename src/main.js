import 'bootstrap/dist/css/bootstrap.css'
import './main.css'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store.js'

import VBox from './components/UI/VBox.vue'
import VButton from './components/UI/VButton.vue'

const app = createApp(App)
app.component('VBox', VBox)
app.component('VButton', VButton)
app.use(store)
app.mount('#app')
