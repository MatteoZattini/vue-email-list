const { createApp } = Vue

createApp({
  data() {
    return {
      listaEmail: [],
      myInput: null

    }
  },
  methods: {
    getEmail() {
      for( let i = 0; i < this.myInput; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
          const element = result.data
          this.listaEmail.push(element.response)      
        })
      };
    },

  },
  mounted() {
    this.getEmail();
    console.log(this.listaEmail)
  },

}).mount('#app')