'use strict';

class Avenger {

  /////////////////////////////////// schema ///////////////////////////////////
  static schema() {
    return {
      name: 'avengers',

      fields: {
        name:     { name: 'Name', type: String, required: true, unique: true, index: true, minlength: 3, maxlength: 20 },
        realName: { name: 'Real name', type: String, required: true, unique: true },
        skills:   { name: 'Skills', type: String, required: true },
      },

      options: {},
      index: []
    };
  }

  static newOne(data = {}) {
    let obj = {
      name: data.name || '',
      realName: data.realName || '',
      skills: data.skills || [],
    };

    return this(obj);
  }

  static async findByName(name) {
    return this.findOne({name: name});
  }

}

module.exports = Avenger;