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

export type GkVuetifyProperties = {
    'v-checkbox': TypeLabel & TypeRules & {
        modelValue: boolean
    }
    'v-text-field': TypeLabel & TypeRules & {
        modelValue: string
    }
    'v-text-area': TypeLabel & TypeRules & {
        modelValue: string
    },
    'v-combobox': TypeLabel & TypeRules & {
        modelValue: any
        items: string[]
        multiple?: boolean
        chips?: boolean,
        itemTitle?: 'title' | string
        itemValue?: 'value' | string
    },
    'v-select': TypeLabel & TypeRules & {
        modelValue: any
        items: string[] | Record<string, string>[]
        multiple?: boolean
        chips?: boolean
        returnObject?: boolean
        itemTitle?: 'title' | string
        itemValue?: 'value' | string
    },
};

export type FormField = {
    isIdentifier?: true
    name: string
    componentName: keyof GkVuetifyProperties
    componentProps: GkVuetifyProperties[keyof GkVuetifyProperties]
};

export type FormFields = FormField[];

export type GkFormProps = {
    mode: FormMode,
    fields: FormFields
    // actions: ''
}
