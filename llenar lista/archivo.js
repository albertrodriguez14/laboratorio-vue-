
const app = Vue.createApp({

    data (){
            
            

        return {
                              
                          newnombres:"",
                          newapellido:"",
                          newsexo:"",     
                            lista :  [
                      
                             { nombre: "carlos", apellido:" franco" , sexo:"m" },
                             { nombre: "Maria", apellido:" fernanda ", sexo:"f"},
                             { nombre: "camila", apellido:" alejandra", sexo:"f"},
                             { nombre: "alber", apellido:" manuek", sexo:"f"},
                
                ]  



                  }

        },

        methods: {

          enviar  ()
          { 
             this.lista.push({

               nombre:this.newnombres,
               apellido:this.newapellido,
               sexo:this.newsexo,
             }) ;
              
            this.newnombres = ""; 
            this.newapellido = "";
            
          }


                     },
   computed : {

        masculino (){
            
          return this.lista.filter(function(list){
                   return list.sexo == "m"}).length;          

          },

          femenino (){

                return this.lista.filter(function(list){
                  return list.sexo == "f"
                }).length;
          }

   },

})