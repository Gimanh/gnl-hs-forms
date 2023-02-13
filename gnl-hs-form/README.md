# gk-form

Vuetify form from data! Just pass object and get ready form.

```js
export const formData: GkFormProps = {
    mode: 'add',
    fields: [
        {
            name: 'fname',
            componentName: 'v-text-field',
            componentProps: {
                label: 'Fname label',
                modelValue: 'Nikolay',
            }
        },
        {
            name: 'lname',
            componentName: 'v-text-field',
            componentProps: {
                label: 'Lname label',
                modelValue: 'Giman',
            }
        },
        {
            name: 'thirdname',
            componentName: 'v-text-field',
            componentProps: {
                label: 'Third name label',
                modelValue: '',
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
                    { value: '1', label: 'I love Vue' },
                    { value: '2', label: 'I love Vuetify' }
                ]
            }
        },
        {
            name: 'slider',
            componentName: 'v-slider',
            componentProps: {
                label: 'Slider label',
                modelValue: 90,
            }
        },
        {
            name: 'slider-range',
            componentName: 'v-range-slider',
            componentProps: {
                label: 'Slider range label',
                modelValue: [ 30, 90 ],
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
};
```

```vue
<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import { formData } from '@/test-data/FormTestData';
    import { ref } from 'vue';

    let myModel = ref( null );
</script>

<template>
    <v-app>
        <v-main>
            <div style="width: 500px;height: 500px; overflow: auto;">
                <gk-form
                    v-model="myModel"
                    :form="formData"
                />
            </div>
            <h6>
                { { myModel } }
            </h6>
            <RouterView/>
        </v-main>
    </v-app>
</template>
```

## TODO
[] - Generate `d.ts` files
