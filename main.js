const { createApp } = Vue

createApp({
  data() {
    return {
      listaEmail: [],
      myInput: document.getElementById("numberInput"),
      isLoading: true
    }
  },
  methods: {
    getEmail() {
      for( let i = 0; i < numberInput.value; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
          const element = result.data
          this.listaEmail.push(element.response)      
        })
      };

      this.isLoading = false
    },

  },
  mounted() {
    this.getEmail();
    console.log(this.listaEmail)
  },

}).mount('#app')