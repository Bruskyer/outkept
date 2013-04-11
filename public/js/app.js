var Router = Backbone.Router.extend({
  routes: {
    "login": "login",
    "": "index"
  },

  initialize: function() {
    this.outkept = new Outkept();
  },

  index: function() {
    if(window.logged === true) {
      templateLoader.load(["DashboardView"], function() {
        $('#app_container').html(new DashboardView().render().el);
      });
    } else {
      app.navigate("/login", {
        trigger: true
      });
    }
  },

  login: function() {
    var self = this;

    templateLoader.load(["LoginView"], function() {
      $('#app_container').html(new LoginView().render().el);
    });
  }
});

app = new Router();
Backbone.history.start();