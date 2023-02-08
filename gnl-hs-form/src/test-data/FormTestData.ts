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
                    modelValue: [ 'Georgia', ],
                    multiple: true,
                    returnObject: true,
                    items: [ 'California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming' ],
                    rules: [
                        ( v: string ) => {
                            debugger
                            console.log( v.length );
                            return !!v || 'Choose on from items'
                        }
                    ]
                }
            },
            {
                name: 'select',
                componentName: 'v-select',
                componentProps: {
                    label: 'Agree conditions',
                    returnObject: true,
                    modelValue: [ 'California' ],
                    items: [
                        'California', 'Colorado', 'Florida',
                    ],

                    // modelValue: { title: 't2', value: 'v2' },
                    // items: [
                    //     { title: 't1', value: 'v1' },
                    //     { title: 't2', value: 'v2' },
                    //     { title: 't3', value: 'v3' }
                    // ],
                    rules: [
                        ( v: string ) => {
                            debugger;
                            return !!v || 'Agree'
                        }
                    ],
                }
            },
            {
                name: 'radio',
                componentName: 'v-radio-group',
                componentProps: {
                    modelValue: '1',
                    label: 'VRadio',
                    items: [
                        { value: '1', label: 'One' },
                        { value: '2', label: 'Two' }
                    ]
                }
            },
            {
                name: 'slider',
                componentName: 'v-slider',
                componentProps: {
                    modelValue: 90,
                }
            },
            {
                name: 'slider-range',
                componentName: 'v-range-slider',
                componentProps: {
                    modelValue: [30, 90],
                }
            },
            {
                name: 'switch',
                componentName: 'v-switch',
                componentProps: {
                    modelValue: true,
                }
            },
            {
                name: 'v-textarea',
                componentName: 'v-textarea',
                componentProps: {
                    modelValue: 'Lorem',
                }
            },
            {
                name: 'v-file-input',
                componentName: 'v-file-input',
                componentProps: {
                    modelValue: [],
                }
            }

        ],
    }
;
