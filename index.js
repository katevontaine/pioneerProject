var Pioneer = function (){

  var name, field, subfield, imagelink, description;



};

module.exports = function(){
  var instance = new Pioneer();
  return instance;
}

exports.setName = function(nm){
  name = nm;
};
exports.setField = function(ff){
  field = ff;
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
    name:name,
    field:field,
    subField:subField,
    imageLink:imageLink,
    description:description
  };

};
