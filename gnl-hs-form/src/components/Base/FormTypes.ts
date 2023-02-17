export type FormMode = 'add' | 'edit';

export type GkVuetifyProperties = {
    'v-checkbox': true
    'v-text-field': true
    'v-text-area': true
    'v-combobox': true
    'v-select': true
    'v-radio-group': true
    'v-slider': true
    'v-range-slider': true
    'v-switch': true
    'v-textarea': true
    'v-file-input': true
};

export type VuetifyForm = {
    validate(): void;
}

type ValidationResult = string | boolean;
type ValidationRule =
    ValidationResult
    | PromiseLike<ValidationResult>
    | ( ( value: any ) => ValidationResult )
    | ( ( value: any ) => PromiseLike<ValidationResult> );

export type FieldValidationRules = ValidationRule[];

type TypeRules = {
    rules?: FieldValidationRules
}

type TypeLabelEx = {
    label?: string
};

type VRadioGroupItems = ( { value: string } & TypeLabelEx )[]

type VCheckbox = BaseTypesEx<'v-checkbox'> & { modelValue: boolean }
type VTextField = BaseTypesEx<'v-text-field'> & { modelValue: string }
type VTextArea = BaseTypesEx<'v-text-area'> & {
    modelValue: string
}
type VCombobox = BaseTypesEx<'v-combobox'> & {
    modelValue: any
    items: string[]
    multiple?: boolean
    chips?: boolean
    itemTitle?: 'title' | string
    itemValue?: 'value' | string
}
type VSelect = BaseTypesEx<'v-select'> & {
    modelValue: any
    items: string[] | Record<string, string>[]
    multiple?: boolean
    chips?: boolean
    returnObject?: boolean
    itemTitle?: 'title' | string
    itemValue?: 'value' | string
    clearable?: boolean
}
type VRadioGroup = BaseTypesEx<'v-radio-group'> & {
    modelValue: string,
    items: VRadioGroupItems
}
type VSlider = BaseTypesEx<'v-slider'> & { modelValue: number }
type VRangeSlider = BaseTypesEx<'v-range-slider'> & { modelValue: [ number, number ] }
type VSwitch = BaseTypesEx<'v-switch'> & { modelValue: number }
type VTextarea = BaseTypesEx<'v-textarea'> & { modelValue: string }
type VFileInput = BaseTypesEx<'v-file-input'> & { modelValue: File[], }

type GkVuetifyPropertiesEx =
    VCheckbox
    | VTextField
    | VTextArea
    | VCombobox
    | VSelect
    | VRadioGroup
    | VSlider
    | VRangeSlider
    | VSwitch
    | VTextarea
    | VFileInput;

export type ComponentName = keyof GkVuetifyProperties;

type BaseTypesEx<T extends ComponentName> = TypeLabelEx & TypeRules;

type GkVuetifyPropertyEx<T extends ComponentName, U = GkVuetifyPropertiesEx> = U extends BaseTypesEx<T> ? U : never;

export type FormFieldEx<T extends ComponentName = any> = {
    isIdentifier?: true
    name: string
    componentName: T
    componentProps: GkVuetifyPropertyEx<T>
};

export type GkFormProps = {
    mode: FormMode,
    fields: FormFieldEx[]
}
