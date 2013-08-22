App = Ember.Application.create({
    ready: function() {
        Ember.run.next(this, function(){ 
            $(document).foundation(); 
        });
    }       
});

App.Router.map(function() {
    this.resource("about", function () {
        this.route("team");
    });
    this.route("contact");
});

App.IndexRoute = Ember.Route.extend({
    model: function() {
        return ['red', 'yellow', 'blue'];
    }
});
