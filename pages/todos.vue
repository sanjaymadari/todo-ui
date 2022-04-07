<template>
  <div>
    <UserNavbar v-if="$store.state.token != null"/>
    <Navbar v-else/>
    <MyTodos v-if="$store.state.token != null"/>
    <TodoList v-if="$store.state.token != null"/>
    <div v-else>
      <h1>Please Login</h1>
    </div>
  </div>

</template>

<script>
import UserNavbar from '~/components/UserNavbar';
import MyTodos from '~/components/MyTodos';
import TodoList from '~/components/TodoList';
import Navbar from '../components/Navbar.vue';
export default {
  name: 'todos',
  components: {
    MyTodos,
    TodoList,
    UserNavbar,
    Navbar,
  },
}
</script>

<style scoped>
div{
  text-align: center;
  justify-content: center;
  align-items: center;
}
</style>
