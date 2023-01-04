import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import { loadFonts } from './plugins/webfontloader'
import GkForm from './framework'

loadFonts()

const app = createApp( App )

app.use( router );
app.use( vuetify )
app.use( GkForm );
app.mount( '#app' )
