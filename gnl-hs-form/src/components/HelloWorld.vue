<!-- CustomInput.vue -->
<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])

</script>

<template>
  <v-app>
    <v-main>
      <div>
        <h1>HW</h1>

        <input
            :value="modelValue"
            @input="myEmit($event.target.value)"
        />

        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  md="4"
              >
                <v-text-field
                    :value="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)"
                    label="Fill me"
                    required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-btn @click="$emit('update:modelValue', $event.target.value)" elevation="2">Push me</v-btn>
          </v-container>
        </v-form>

      </div>
    </v-main>
  </v-app>
</template>
