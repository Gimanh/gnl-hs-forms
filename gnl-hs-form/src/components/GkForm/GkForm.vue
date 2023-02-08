<template>
    <div>
        <button>Show</button>
        <slot name="header">
            Form header
        </slot>
        {{ formModel }}
        <v-form
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

    </div>
</template>

<script src="./GkForm.ts" lang="ts" />
