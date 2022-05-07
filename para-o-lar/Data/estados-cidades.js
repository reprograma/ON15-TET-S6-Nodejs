const estados = [
      {
        "sigla": "DF",
        "nome": "Distrito Federal",
        "cidades": [
          "Águas Claras",
          "Brasília",
          "Ceilândia",
          "Gama",
          "Guará",
          "Planaltina",
          "Plano Piloto",
          "Recanto das Emas",
          "Samambaia",
          "Santa Maria",
          "Taguatinga"
        ]
      }

     function buscar(entrada) { 

       for(i=0; i<estados.length; i++) {

         let sigla = estados[i].sigla
         let cidade = estados[i].cidades

         return estados.filter((cidade) => cidade.sigla == entrada)
       }  

    }
        console.log(buscar("DF"))