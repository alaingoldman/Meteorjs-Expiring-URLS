Template.new.events({
    'submit form': function(event){
      event.preventDefault();
      var info = $('[name=info]').val();

      Meteor.call("addLink", info, function(error, id){
        if(error){}
        else{
          $('[name=info]').val("");
          $('#result').html("http://localhost:3000/show/"  + id + "<br>" + "<a href='http://localhost:3000/show/" + id + "'>visit link?</a>");
        }
      });
    }
});

Template.show.rendered = function() {
    if (Template.currentData() == null){
        Router.go('home');
    }
    $('#private').html(Template.currentData().info);
    Meteor.call('removeLink', Template.currentData()._id);
    var counter = 10;
    var interval = setInterval(function() {
        counter--;
        $("#time").html(counter);
        if (counter == 0) {
            clearInterval(interval);
            $('#wrap').fadeOut(1000, function(){
              Router.go('home');
            });
        }
    }, 1000);
}