import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { FieldType } from '@/components/Base/FieldProps';

export default defineComponent( {
    props: {
        value: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        fieldName: {
            type: String,
            required: true,
        },
        fieldType: {
            type: String as PropType<FieldType>,
            required: true,
        },
    },
    setup( props ) {
    },
    components:{

    }
} );
