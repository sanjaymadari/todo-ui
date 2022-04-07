export const state = () => ({
  todos: [],
  mytodos: [],
  token: null,
})

const getters = {};


export const mutations = {
  setToken(state, token) {
      state.token = token;
  },
  setMyTodos(state, mytodos) {
    state.mytodos = mytodos;
    console.log(state.mytodos);
  },
  setTodos(state, todos) {
    state.todos = todos;
    console.log(state.todos);
  }
};

const actions = {

  async login({ commit }, data) {
    try {
      await this.$axios.post('http://localhost:5248/api/user/login', {
          email: data.email,
          password: data.password,
      }).then(response => {
        commit('setToken', response.data);
        console.log("Login successful");
      })
      this.$router.push('/todos/');
    } catch (e) {
      this.error = e.response.data.message;
    }
  },

  async getMyTodos({commit,state}) {
    await this.$axios.get('http://localhost:5248/api/todo/mytodos',
    {
        headers: {
            'Authorization': 'Bearer ' + state.token,
        }
    })
    .then(response => {
      commit('setMyTodos', response.data);
      console.log("My Todos fetched successfully");
    })
    .catch(error => {
      console.log(error)
      this.errorMessage = error
    })
  },

  async getTodos({commit,state}) {
    await this.$axios.get('http://localhost:5248/api/todo/alltodos',
    {
        headers: {
            'Authorization': 'Bearer ' + state.token,
        }
    })
    .then(response => {
      commit('setTodos', response.data);
      console.log("Todos fetched successfully");
    })
    .catch(error => {
      console.log(error)
      this.errorMessage = error
    })
  },

  async addTodo({commit,state}, data) {
    await this.$axios.post('http://localhost:5248/api/todo', { description: data },
    {
        headers: {
          'Authorization': 'Bearer ' + state.token,
        }
    })
    .then(response => {
      console.log("Todo added successfully");
    })
    .catch(error => {
      console.log(error)
      this.errorMessage = error
    })
  },

  async deleteTodo({commit,state}, id) {
    await this.$axios.delete('http://localhost:5248/api/todo/' + id,
    {
        headers: {
          'Authorization': 'Bearer ' + state.token,
        }
    })
    .then(response => {
      console.log(response.data);
    })
  },

  async updateTodo({commit,state}, data) {
    await this.$axios.put('http://localhost:5248/api/todo/' + data, { is_completed: true },
    {
        headers: {
          'Authorization': 'Bearer ' + state.token,
        }
    })
    .then(response => {
      console.log(response.data);
    })
  }
};

export default {
   state,
   getters,
   mutations,
   actions,
};
