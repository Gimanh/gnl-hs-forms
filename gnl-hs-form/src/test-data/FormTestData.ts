import type { GkFormProps } from '@/components/Base/FormTypes';

export const Form1: GkFormProps = {
    mode: 'add',
    fields: [
        {
            name: 'fname',
            componentName: 'VTextField',
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
            }
        }
    ],
};
