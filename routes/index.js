var allPioneers = require('/Users/KateWilson/kate-website/pioneerProject/data/index.js');
//var Pioneer = require('/Users/KateWilson/kate-website/pioneerProject/routes/index.js');
var Pioneer = require('../pioneer');

//var pioneer = new Pioneer();

// pioneer.setName('Marina A');
// pioneer.setField('Art');
// pioneer.setSubField('Performance Art');
// pioneer.setImageLink('https://upload.wikimedia.org/wikipedia/commons/9/9b/Marina_Abramovi%C4%87_-_The_Artist_Is_Present_-_Viennale_2012.jpg');
// pioneer.setDescription('She is a bad ass.');

exports.pioneers = function(req, res){
  res.json(allPioneer.getInfo());
};

exports.pioneer = function(req, res){
  var name = req.param('name');
  res.json(allPioneer[name].getInfo());
};

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
// exports.pioneer = function(req, res){
//   var number = req.param('name');
//   res.json(allPioneers[name].getInfo());
// }

 var Pioneer = function(){
  this.data = {
      name: null,
      field: null,
      subField: null,
      imageLink: null,
      description: null
   };

this.setName = function(n){
  this.data['name'] = name;
};

this.setField = function(fie){
  this.data['field'] = fie;
};
this.setSubField = function(sub){
  this.data['subField'] = sub;
};
this.setImagelink = function(img){
  this.data['imageLink'] = img;
};
this.setDescription = function(des){
  this.data['description'] = des;
};

}

// module.exports = function(){
//   var instance = new Pioneer();
//   return instance;
// }
