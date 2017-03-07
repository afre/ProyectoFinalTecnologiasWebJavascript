/**
 * Celula.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    sector_Celula:{
      type:'string'
    },
    edad_Minima:{
      type:'int'
    },
    edad_Maxima:{
      type:'int'
    },
    id_Lider:{
      model:'Creyente'
    },
    Creyentes:{
      collection: 'Creyente',
      via: 'idCelula'
    }

  }
};

