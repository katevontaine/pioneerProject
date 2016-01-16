var allPioneers = require(../data);
var Pioneer = require(../pioneer);

var pioneer = new Pioneer();

pioneer.setName('Marina A');
pioneer.setField('Art');
pioneer.setSubField('Performance Art');
pioneer.setImageLink('https://upload.wikimedia.org/wikipedia/commons/9/9b/Marina_Abramovi%C4%87_-_The_Artist_Is_Present_-_Viennale_2012.jpg');
pioneer.setDescription('She is a bad ass.');

exports.flight = function(req, res){
  res.json(pioneer.getInfo());
};

this.fill = function(info){
  for (var prop in this.data){
    if (this.data[prop] !== "undefined"){
      this.data[prop] = info[prop];
    }
  }
};

module.exports = function(info){
  var instance = ner Pioneer();
  instance.fill(info)
  return instance;
}
exports.pioneer = function(req, res){
  var number = req.param('name');
  res.json(allPioneers[name].getInfo());
}
