var allPioneers = require('/Users/KateWilson/kate-website/pioneerProject/data/index.js');
var Pioneer = require('/Users/KateWilson/kate-website/pioneerProject/routes/index.js');

//var pioneer = new Pioneer();

// pioneer.setName('Marina A');
// pioneer.setField('Art');
// pioneer.setSubField('Performance Art');
// pioneer.setImageLink('https://upload.wikimedia.org/wikipedia/commons/9/9b/Marina_Abramovi%C4%87_-_The_Artist_Is_Present_-_Viennale_2012.jpg');
// pioneer.setDescription('She is a bad ass.');


for ( var name in allPioneers){
  allPioneers[name] = Pioneer(allPioneers[name]);
}

exports.pioneer = function(req, res){
  res.json(pioneer.getInfo());
  console.log(pioneer.getInfo());
  console.log("im here");
};

module.exports = function(info){
  var instance = new Pioneer();
  instance.fill(info)
  return instance;
}

//pioneer, field, image url, description
