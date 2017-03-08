/**
 * Creyente.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idCelula:{
      model:'Celula'
    },
    Celulas:{
      collection:'Celula',
      via:'idLider'
    },
    nombres_Creyente:{
      type:'string'
    },
    telefono_Celular:{
      type:'string'
    },
    telefono_fijo:{
      type:'string'
    },
    sector_Vivienda:{
      type:'string'
    },
    fecha_Nacimiento:{
      type:'date'
    },
    lidera_Celula:{
      type:'boolean'
    },
    reuniones_de_jovenes:{
      collection:'ReunionJovenes',
      via:'creyentes'
    }



  }
};

