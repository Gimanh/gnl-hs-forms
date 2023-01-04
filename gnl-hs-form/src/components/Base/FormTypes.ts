export type FormMode = 'add' | 'edit';

type ValidationResult = string | boolean;
type ValidationRule =
    ValidationResult
    | PromiseLike<ValidationResult>
    | ( ( value: any ) => ValidationResult )
    | ( ( value: any ) => PromiseLike<ValidationResult> );

export type FieldValidationRules = ValidationRule[];

export type FormField = {
    isIdentifier?: true
    name: string
    componentName: string
    componentProps: {
        label: string
        modelValue: string
        rules?: FieldValidationRules[]
    }
};

export type FormFields = FormField[];

export type GkFormProps = {
    mode: FormMode,
    fields: FormFields
    // actions: ''
}
