var Pioneer = function (){

var name, field, subfield, imagelink, description;

exports.setName = function(nm){
  name = nm;
};
exports.setField = function(ff){
  field = ;
};
exports.setSubField = function(sf){
  subfield = sf;
};
exports.setIamgeLink  = function(image){
  imagelink = image;
};
exports.setDescription = function(descr){
  description = descr;
};

exports.getInfo = function () {
  return{
    number:number,
    origin:origin,
    destination:destination
  };

};

module.exports = function(){
  var instance = new Pioneer();
  return instance;
}

};
