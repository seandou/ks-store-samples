'use strict';

async function main(cb) {
  let im = await Avenger.findByName('Iron Man');
  if (im) {
    console.log('Iron Man is in');
    return cb();
  }

  im = Avenger.newOne({
    name: 'Iron Man',
    realName: 'Tony Stark',
    skills: ['mathematics', 'physics', 'chemistry']
  });

  await im.save();
  console.log(im);
  
  cb();
};

module.exports = function(config) {
  const Client = require('./ks-store').Client;
  let client = new Client(config);

  main(function() {
    client.close();
  });
};