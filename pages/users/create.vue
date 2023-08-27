<template>
  <v-container>
    <h1>Create user</h1>

    <UserForm btn-label="Create" v-model="formData" @onSubmit="onSubmit" />
  </v-container>
</template>

<script setup>
import {reactive, ref} from 'vue'
import {useStore} from "~/stores";
import {UserEnum} from "~/stores/enums/user.enum";
import UserForm from "~/components/Form/UserForm.vue";

const router = useRouter();
const store = useStore();

useHead({
  title: "Create user",
})

const formData = reactive({
  name: '',
  phone: '',
  year_of_birth: null,
})

const onSubmit = () => {
  store.dispatch(UserEnum.ADD_USER, formData);
  router.push('/users');
}
</script>
