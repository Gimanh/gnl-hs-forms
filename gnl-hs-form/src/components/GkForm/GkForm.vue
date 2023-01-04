<template>
    <div>
        <slot name="header">
            Form header
        </slot>
        {{ formModel }}
        <v-form
            v-model="validForm"
        >
            <component
                :is="field.componentName"
                v-for="field in form.fields"
                :key="field.name"
                v-bind="field.componentProps"
                v-model="formModel[field.name]"
            />
        </v-form>

    </div>
</template>

<script src="./GkForm.ts" />
