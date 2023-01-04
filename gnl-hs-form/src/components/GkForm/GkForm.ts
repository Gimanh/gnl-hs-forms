import { defineComponent, reactive } from 'vue';
import type { PropType } from 'vue';
import type { GkFormProps } from '@/components/Base/FormTypes';

export default defineComponent( {
    props: {
        form: {
            type: Object as PropType<GkFormProps>,
            required: true
        }
    },
    setup( props ) {
        const fields = reactive( props.form.fields )
        let formModel: { [ key: string ]: any } = reactive( {} );
        for ( const field of props.form.fields ) {
            formModel[ field.name ] = field.componentProps.modelValue;
        }
        return {
            fields,
            formModel
        }
    }
} );
