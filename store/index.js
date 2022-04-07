export const state = () => ({
  todos: [],
  mytodos: [],
  token: null,
})

const getters = {};


export const mutations = {
  // getTasks(state, todos) {
  //   state.todos = []
  // },
  // createTaks(state, todos) {
  //   state.todos.push(todos)
  // },
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
      console.log(response.data);
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
      console.log(response.data);
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
      console.log(response.data);
      // this.getMyTodos();
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
      // this.getMyTodos();
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




// const state = () => ({
//    list: null,
//    listTotalCount: null,
//    token: null,

// });

// const getters = {};

// const mutations = {
//    setList(state, res) {
//       state.list = res.data;
//    },
// };

// const actions = {
//    async getList({ commit, rootState, rootGetters }, data) {
//       let branchIds =
//          data.branch_ids.length == 0 ? null : data.branch_ids.join(",");
//       try {
//          let url = "/adoption_call";
//          if (data.export && !data.negative) url += "/export";
//          const res = await this.$axios.get();
//          if (!data.export) commit("setList", res);
//          else download(res.data, "adoption-call.csv");
//       } catch (error) {
//          console.log(error.response?.data ?? error.message);
//          console.log(error);
//          throw error;
//       }
//    },
// };

export default {
   state,
   getters,
   mutations,
   actions,
};