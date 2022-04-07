<template>
    <div>
        <h1>Todos List</h1>
        <table align="center" id="table">
            <tr>
                <th>SNo</th>
                <!-- <th>Id</th> -->
                <th>UserId</th>
                <th>Descriptoin</th>
                <th>IsCompleted</th>
            </tr>
            <tr v-for="(todo,i) in $store.state.todos" :key="todo.id">
                <td>{{ i+1 }}</td>
                <!-- <td>{{ todo.id }}</td> -->
                <td>{{ todo.user_id }}</td>
                <td>{{ todo.description }}</td>
                <td align-text="center">{{ todo.is_completed }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'TodoList',
        created () {
            this.getTodos()
        },
        data () {
            return {
                todos: [],
                errorMessage: '',
            }
        },
        methods: {
         async getTodos () {
            await this.$store.dispatch('getTodos');
            //     axios.get('http://localhost:5248/api/todo/alltodos',
            //     {
            //         headers: {
            //             'Authorization': 'Bearer ' + this.token,
            //         }
            //     }
            //     )
            //         .then(response => {
            //             this.todos = response.data
            //         })
            //         .catch(error => {
            //             console.log(error)
            //             this.errorMessage = error
            //         })
             }
        }

    }
</script>

<style scoped>
div{
    margin: 10px;
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