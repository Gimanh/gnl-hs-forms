<!-- CustomInput.vue -->
<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
    <div>
        <h1>HW</h1>
        <input
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>

</template>
