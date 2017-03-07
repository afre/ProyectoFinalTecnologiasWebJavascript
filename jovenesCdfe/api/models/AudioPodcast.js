/**
 * AudioPodcast.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    archivoMp3:{type:'string'},
    idReunionJovenes:{model:'reunionJovenes'}
  }
};

