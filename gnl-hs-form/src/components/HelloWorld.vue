<!-- CustomInput.vue -->
<script>
import { defineComponent } from 'vue';

export default defineComponent( {
    props: {
        modelValue: {
            type: String
        }
    },
    // emits: [ 'update:modelValue' ],
    async setup( props, ctx ) {

        const myEmit = ( value ) => {
            debugger;
            ctx.emit( 'update:modelValue', value )
        }
        return {
            myEmit
        }
        // defineProps( [ 'modelValue' ] )
        // defineEmits( [ 'update:modelValue' ] )
    }
} )

</script>

<template>
    <div>
        <h1>HW</h1>
        <input
            :value="modelValue"
            @input="myEmit($event.target.value)"
        />
    </div>

</template>
