<template>
    <v-form
        ref="vuetifyForm"
        v-model="validForm"
    >
        <template
            v-for="field in form.fields"
            :key="field.name"
        >
            <component
                v-if="canUseDynamicComponents(field.componentName)"
                :is="field.componentName"
                v-bind="field.componentProps"
                v-model="formModel[field.name]"
            />
            <v-radio-group
                v-else
                v-model="formModel[field.name]"
            >
                <v-radio
                    v-for="radio in getVRadioItems(field)"
                    :key="radio.value"
                    :label="radio.label"
                    :value="radio.value"
                />
            </v-radio-group>
        </template>
    </v-form>
</template>

<script src="./GkForm.ts" lang="ts" />
