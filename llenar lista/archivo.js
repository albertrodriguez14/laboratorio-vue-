
const app = Vue.createApp({

    data (){
            
            

        return {
                              
                          newnombres:"",
                          newapellido:"",
                               
                            lista :  [
                      
                             { nombre: "carlos", apellido:" franco"  },
                             { nombre: "alberto", apellido:" franco2"},
                             { nombre: "flaco", apellido:" franco3"},
                
                ]  



                  }

        },

        methods: {

          enviar  ()
          { 
             this.lista.push({

               nombre:this.newnombres,
               apellido:this.newapellido,

             }) ;
              
            this.newnombres = ""; 
            this.newapellido = "";

          }


   }

})