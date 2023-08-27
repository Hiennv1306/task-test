<template>
  <v-container>
    <h1>Create user</h1>

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

        <v-btn type="submit" block class="mt-2 bg-primary">Create</v-btn>
      </v-form>

      <NuxtLink href="/users" class="text-center mt-4 d-block">Back to list</NuxtLink>
    </v-sheet>
  </v-container>
</template>

<script setup>
import {ref} from 'vue'
import {useStore} from "~/stores";
import {UserEnum} from "~/stores/enums/user.enum";

const router = useRouter();
const store = useStore();

const formRef = ref(null);

useHead({
  title: "Create user",
})

const formData = ref({
  name: '',
  phone: '',
  year_of_birth: null,
})

const onSubmit = () => {
  const valid = formRef.value.isValid;
  if (!valid) {
    return;
  }

  store.dispatch(UserEnum.ADD_USER, formData.value);
  router.push('/users');
}
</script>
