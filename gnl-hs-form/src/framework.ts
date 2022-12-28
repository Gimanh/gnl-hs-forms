import HelloWorld from '@/components/HelloWorld.vue';

export { HelloWorld }

export default {
    install( app: any, args: any ) {
        console.log( 'install-gnl' );
        app.component( 'HelloWorld', HelloWorld );
        console.log( app, args );
    }
}
