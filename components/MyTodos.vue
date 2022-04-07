<template>
    <div>
        <h4>My Todos</h4>
        <table align="center" id="table">
            <tr>
                <th>SNo</th>
                <th>Descriptoin</th>
                <th style="text-align:center:">IsCompleted</th>
                <th></th>
                <th></th>
            </tr>
            <tr v-for="(todo,i) in $store.state.mytodos" :key="todo.id">
                <td>{{ i+1 }}</td>
                <td>{{ todo.description }}</td>
                <td>{{ todo.is_completed }}</td>
                <td><button @click="deleteTodo(todo.id)" >Delete</button></td>
                <td><button @click="updateTodo(todo.id)">Done</button></td>
            </tr>
        </table>
        <div>
        <input type="text" v-model="task" placeholder="Enter Todo" required @keypress.enter="addTodo(task)">
        <button style="color:white;background-color:#04AA6D;margin-top: 10px:padding: 10px;" @click="addTodo(task)">Add</button>
        </div>

    </div>
</template>

<script>
export default {
    name: 'MyTodos',
    created () {
       this.getTodos()
    },
    data () {
        return {
            todos: [],
            task: '',
            errorMessage: '',
        }
    },
    methods: {
        async getTodos () {
            await this.$store.dispatch('getMyTodos');
        },

        async deleteTodo (id) {
            await this.$store.dispatch('deleteTodo', id);
            await this.$store.dispatch('getMyTodos');
            await this.$store.dispatch('getTodos');
        },

        async addTodo (task) {
            await this.$store.dispatch('addTodo', task);
            await this.$store.dispatch('getMyTodos');
            await this.$store.dispatch('getTodos');
        },
        async updateTodo (id) {
            await this.$store.dispatch('updateTodo', id);
            await this.$store.dispatch('getMyTodos');
            await this.$store.dispatch('getTodos');
        }
    }

}
</script>

<style scoped>
div{
    margin: 20px;
}
#table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 70%;
}

#table td, #table th {
  border: 1px solid #ddd;
  padding: 8px;
}

#table tr:nth-child(even){background-color: #f2f2f2;}

#table tr:hover {background-color: #ddd;}

#table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #04AA6D;
  color: white;
}


</style>