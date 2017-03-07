/**
 * ReunionJovenes.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      tema_Reunion:{
        type:'string'
      } ,
      fotos_Reuniones:{
        collection: 'Foto_reunion',
        via: 'idReunionJovenes'
      },
      audios_Podcasts:{
        collection: 'Audio_podcast',
        via: 'idReunionJovenes'
      },
      predicas_En_Texto:{
        collection: 'Predica_en_texto',
        via: 'idReunionJovenes'
      },
      creyentes:{
        collection: 'Reunion_de_jovenes',
        via: 'reuniones_de_jovenes'
      }

  }
};

