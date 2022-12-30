import { defineComponent, ref } from 'vue';

export default defineComponent( {
    setup() {
        const count = ref( 111 )

        // expose to template and other options API hooks
        return {
            count
        }
    },

    mounted() {
        console.log( this.count ) // 0
    }
} );
