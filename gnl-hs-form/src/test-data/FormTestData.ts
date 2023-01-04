import type { GkFormProps } from '@/components/Base/FormTypes';

export const Form1: GkFormProps = {
        mode: 'add',
        fields: [
            {
                name: 'fname',
                componentName: 'v-text-field',
                componentProps: {
                    label: 'Field1 label',
                    modelValue: 'default value 1',
                }
            },
            {
                name: 'lname',
                componentName: 'v-text-field',
                componentProps: {
                    label: 'Field2 label',
                    modelValue: '',
                }
            },
            {
                name: 'thirdname',
                componentName: 'v-text-field',
                componentProps: {
                    label: 'Field3 label',
                    modelValue: 'default value 3',
                    rules: [ ( v: string ) => !!v || 'Required field' ]
                }
            },
            {
                name: 'agree',
                componentName: 'v-checkbox',
                componentProps: {
                    label: 'Agree conditions',
                    modelValue: false,
                    rules: [ ( v: boolean ) => v || 'Agree' ]
                }
            },
            {
                name: 'combobox',
                componentName: 'v-combobox',
                componentProps: {
                    label: 'Agree conditions',
                    modelValue: [  ],
                    multiple: true,
                    items: [ 'California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming' ],
                    rules: [
                        ( v: string ) => {
                            console.log( v.length );
                            return !!v || 'Choose on from items'
                        }
                    ]
                }
            },
            // {
            //     name: 'select',
            //     componentName: 'v-select',
            //     componentProps: {
            //         label: 'Agree conditions',
            //         modelValue: ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'],
            //         rules: [ ( v: boolean ) => v || 'Agree' ]
            //     }
            // }
        ],
    }
;
