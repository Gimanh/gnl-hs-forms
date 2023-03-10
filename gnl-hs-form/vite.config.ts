import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
// import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig( {
    plugins: [
        vue(),
        vueJsx(),
        // vuetify({ autoImport: true }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath( new URL( './src', import.meta.url ) ),
        },
    },
    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve( __dirname, 'src/framework.ts' ),
            name: 'GKForms',
            // the proper extensions will be added
            fileName: 'gk-forms',
            formats: [ 'es', 'cjs', 'umd' ]
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: [ 'vue', 'vueRouter', 'vuetify' ],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
} );
