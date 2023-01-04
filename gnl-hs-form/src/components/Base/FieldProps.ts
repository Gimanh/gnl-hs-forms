export type FieldType = 'text' | 'number' | 'list';

export type FormField = {
    type: FieldType
    label: string,
    value: string
};

export type FormFields = FormField[];
