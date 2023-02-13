import { defineComponent, reactive, ref } from 'vue';
import type { PropType } from 'vue';
import type { ComponentName, FormField, GkFormProps } from '@/components/Base/FormTypes';

export default defineComponent( {
    components: {},
    props: {
        modelValue: {
            type: Object as PropType<any>
        },
        form: {
            type: Object as PropType<GkFormProps>,
            required: true
        }
    },
    setup( props, context ) {
        const validForm = ref( false );
        const fields = reactive( props.form.fields )
        let formModel: { [ key: string ]: any } = reactive( {} );
        for ( const field of props.form.fields ) {
            formModel[ field.name ] = field.componentProps.modelValue;
        }
        return {
            validForm,
            fields,
            formModel
        }
    },

    watch: {
        formModel: {
            handler( value: any ) {
                this.$emit( 'update:modelValue', value )
            },
            immediate: true
        }
    },


    methods: {
        canUseDynamicComponents( componentName: ComponentName ): boolean {
            return componentName !== 'v-radio-group';
        },
        getVRadioItems( field: FormField<'v-radio-group'> ) {
            return field.componentProps.items
        }
    }
} );
