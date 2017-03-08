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
      collection: 'FotoReunion',
      via: 'idReunionJovenes'
    },
    audios_Podcasts:{
      collection: 'AudioPodcast',
      via: 'idReunionJovenes'
    },
    predicas_En_Texto:{
      collection: 'PredicaTexto',
      via: 'idReunionJovenes'
    },
    creyentes:{

      collection: 'Creyente',
      via: 'reuniones_de_jovenes'

    }

  }
};

