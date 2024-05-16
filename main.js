const { createApp } = Vue

createApp({
  data() {
    return {
      listaEmail: [],
      myInput: null,
      isLoading: false
    }
  },
  methods: {
    getEmail() {
      this.isLoading = true
      this.listaEmail = []
      for( let i = 0; i < this.myInput; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
          const element = result.data
          this.listaEmail.push(element.response)
          if( this.listaEmail.length == this.myInput ) {
            this.isLoading = false
            console.log("richieste completate")
          } else {
            console.log("richieste ma non ultima")
          }      
        })
      }
      console.log("ciclo completato")
    },

  },
  mounted() {
    // this.getEmail();
    // console.log(this.listaEmail)
  },

}).mount('#app')