<template>
  <v-sheet width="600" class="mx-auto">
    <v-form fast-fail ref="formRef" @submit.prevent="onSubmit">
      <v-text-field
        v-model="formData.name"
        label="Name"
        :rules="[value => !!value || 'Name is required']"
      ></v-text-field>

      <v-text-field
        v-model="formData.phone"
        label="Phone"
        :rules="[value => !!value || 'Phone is required']"
      ></v-text-field>

      <v-text-field
        v-model="formData.year_of_birth"
        label="Year of birth"
        type="number"
        :rules="[value => !!value || 'Year of birth is required']"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2 bg-primary">{{btnLabel}}</v-btn>
    </v-form>

    <NuxtLink href="/users" class="text-center mt-4 d-block">Back to list</NuxtLink>
  </v-sheet>
</template>

<script setup lang="ts">
import {Ref, toRef, ref} from 'vue';
import {UserInterface} from "~/interfaces/modules/User.interface";

const props = defineProps({
  modelValue: {
    type: Object as PropType<UserInterface>,
    default: {
      name: '',
      phone: '',
      year_of_birth: null
    },
  },
  btnLabel: {
    type: String,
    default: 'Create'
  }
})

const formRef = ref(null)

const emits = defineEmits(['onSubmit'])

const formData: Ref<UserInterface> = toRef(props, 'modelValue')

const onSubmit = () => {
  const valid = formRef.value.isValid;
  if (!valid) {
    return;
  }

  emits('onSubmit');
}
</script>
