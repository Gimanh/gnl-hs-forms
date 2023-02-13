import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import GkForm from './framework'

// //@ts-ignore
// import GkForm from '../dist/gk-forms.mjs';

const app = createApp( App )

app.use( router );
app.use( vuetify )
app.use( GkForm );
app.mount( '#app' )
