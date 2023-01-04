import type { FormFields } from '@/components/Base/FieldProps';

export type FormMode = 'add' | 'edit';

export type FormProps = {
    mode: FormMode,
    fields: FormFields
}
