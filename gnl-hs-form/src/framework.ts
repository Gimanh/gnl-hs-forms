import HelloWorld from '@/components/HelloWorld.vue';

export default {
    install(app: any, args: any) {
        console.log('install-gnl');
        app.component('HelloWorld', HelloWorld);
        console.log(app, args);
    },
};
