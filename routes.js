Router.route('/', {
  template: 'home',
  name:     'home'
});
        
Router.route('/new');

Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/show/:_id',{
	template: "show",
	name: "show",
	data: function(){
	  return Links.findOne({_id: this.params._id});
	},    
	waitOn: function(){
      return Meteor.subscribe('links', this.params._id);
    }
});