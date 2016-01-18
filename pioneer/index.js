// var allPioneers = require('../data/index.js');
// var Pioneer = require('../routes/index.js');
//
// var pioneer = new Pioneer();
//
// pioneer.setName('Marina A');
// pioneer.setField('Art');
// pioneer.setSubField('Performance Art');
// pioneer.setImageLink('https://upload.wikimedia.org/wikipedia/commons/9/9b/Marina_Abramovi%C4%87_-_The_Artist_Is_Present_-_Viennale_2012.jpg');
// pioneer.setDescription('She is a bad ass.');
//
// exports.pioneer = function(req, res){
//   res.json(pioneer.getInfo());
// };
//
// this.fill = function(info){
//   for (var prop in this.data){
//     if (this.data[prop] !== "undefined"){
//       this.data[prop] = info[prop];
//     }
//   }
// };
//
// module.exports = function(info){
//   var instance = new Pioneer();
//   instance.fill(info)
//   return instance;
// }
//
//
// //pioneer, field, image url, description

var Pioneer = function (){

  var name, field, subfield, imagelink, description;


};

module.exports = function(){
  var instance = new Pioneer();
  return instance;
}

Pioneer.prototype.setName = function(nm){
  this.name = nm;
};
Pioneer.prototype.setField = function(ff){
  this.field = ff;
};
Pioneer.prototype.setSubField = function(sf){
  this.subfield = sf;
};
Pioneer.prototype.setImageLink  = function(image){
  this.imagelink = image;
};
Pioneer.prototype.setDescription = function(descr){
  this.description = descr;
};

Pioneer.prototype.getInfo = function () {
  return{
    name:name,
    field:field,
    subField:subField,
    imageLink:imageLink,
    description:description
  };
};
