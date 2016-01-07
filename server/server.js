Meteor.startup(function() {
    return Meteor.methods({
	  removeLink: function(id){
	  	return Links.remove(id);
	  },
	  addLink: function (info) {
	  	return Links.insert({
	  	    info: info
	  	})
	  }

	});
});

Meteor.publish('links', function(currentLink){
  return Links.find({ _id: currentLink })
});