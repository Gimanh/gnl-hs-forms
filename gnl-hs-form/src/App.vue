<script setup lang="ts">
import { RouterView } from 'vue-router';
import { Form1 } from '@/test-data/FormTestData';
import { ref } from 'vue';

let myModel = ref( null );
</script>

<template>
    <v-app>
        <v-main>
            <div style="width: 500px;height: 500px; overflow: auto;">
                <gk-form
                    v-model="myModel"
                    :form="Form1"
                />
            </div>
            <h6 style="width: 500px; height:20px; background-color: red;">
                {{ myModel }}
            </h6>
            <RouterView />
        </v-main>
    </v-app>
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
