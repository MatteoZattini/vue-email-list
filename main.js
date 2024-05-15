const { createApp } = Vue

createApp({
  data() {
    return {
      listaEmail: []

    }
  },
  methods: {
    

  },
  mounted() {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
    let email = result.data;
    console.log(email.response)
    });
  },

}).mount('#app')