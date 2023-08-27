<template>
  <v-container>
    <h1>Edit user</h1>

    <UserForm btn-label="Edit" v-model="formData" @onSubmit="onSubmit" />
  </v-container>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import {useStore} from "~/stores";
import UserForm from "~/components/Form/UserForm.vue";
import {UserInterface} from "~/interfaces/modules/User.interface";
import {UserEnum} from "~/stores/enums/user.enum";

const router = useRouter();
const store = useStore();

useHead({
  title: "Edit user",
})

const $route = useRoute()

const id: number = parseInt(<string>$route.params.id)

const userList = store.getters['userList'];

const user = Object.assign({}, userList.find((item: UserInterface) => item.id === id));

const formData = reactive(user)

const onSubmit = () => {
  store.dispatch(UserEnum.EDIT_USER, {id, data: formData});
  router.push('/users');
}
</script>
