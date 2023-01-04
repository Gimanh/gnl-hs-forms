import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import { loadFonts } from './plugins/webfontloader'
import GkForm from './framework'

loadFonts()

createApp( App )
    .use( router )
    .use( vuetify )
    .use( GkForm )
    .mount( '#app' )
