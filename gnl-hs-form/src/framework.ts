import * as allComponents from '@/components'
import type { App, Component } from "vue";

export default {
    install( app: App, args: any ) {
        let components: { [ key: string ]: Component } = allComponents;
        for ( const componentName in components ) {
            app.component( componentName, components[ componentName ] );
        }
    },
};
