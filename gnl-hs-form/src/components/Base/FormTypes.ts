export type FormMode = 'add' | 'edit';

type ValidationResult = string | boolean;
type ValidationRule =
    ValidationResult
    | PromiseLike<ValidationResult>
    | ( ( value: any ) => ValidationResult )
    | ( ( value: any ) => PromiseLike<ValidationResult> );

export type FieldValidationRules = ValidationRule[];

type TypeLabel = {
    label: string
};
type TypeRules = {
    rules?: FieldValidationRules
}

type BaseTypes = TypeLabel & TypeRules;

type VRadioGroupItems = ( { value: string } & TypeLabel )[]

export type GkVuetifyProperties = {
    'v-checkbox': BaseTypes & {
        modelValue: boolean
    }
    'v-text-field': BaseTypes & {
        modelValue: string
    }
    'v-text-area': BaseTypes & {
        modelValue: string
    },
    'v-combobox': BaseTypes & {
        modelValue: any
        items: string[]
        multiple?: boolean
        chips?: boolean
        itemTitle?: 'title' | string
        itemValue?: 'value' | string
    },
    'v-select': BaseTypes & {
        modelValue: any
        items: string[] | Record<string, string>[]
        multiple?: boolean
        chips?: boolean
        returnObject?: boolean
        itemTitle?: 'title' | string
        itemValue?: 'value' | string
        clearable?: boolean
    },
    'v-radio-group': BaseTypes & {
        modelValue: string
        items: VRadioGroupItems
    },
    'v-slider': BaseTypes & {
        modelValue: number
    },
    'v-range-slider': BaseTypes & {
        modelValue: [ number, number ]
    },
    'v-switch': BaseTypes & {
        modelValue: number
    },
    'v-textarea': BaseTypes & {
        modelValue: string
    },
    'v-file-input': BaseTypes & {
        modelValue: File[]
    }
};

export type ComponentName = keyof GkVuetifyProperties;

export type FormField<T extends ComponentName = any> = {
    isIdentifier?: true
    name: string
    componentName: keyof GkVuetifyProperties
    componentProps: GkVuetifyProperties[T] //FIXME must GkVuetifyProperties[componentName]
};

export type FormFields = FormField[];

export type GkFormProps = {
    mode: FormMode,
    fields: FormFields
}
