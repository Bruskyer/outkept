window.DashboardView = Backbone.View.extend({

  events: {
    'click .filters a': 'filter'
  },

  initialize: function () {
  },

  filter: function () {
    $('.filters a').removeClass('btn-primary');
    $(this).addClass('btn-primary');
    var selector = $(this).attr('data-filter');
    $('#servers_dashboard').isotope({ filter: selector });
    window.connection.emit('filter', selector);
    return false;
  },

  render:function () {
    $(this.el).html(this.template());

    $('#servers_dashboard', this.el).isotope({
      itemSelector: '.server',
      filter: '.alarmed, .warned',
      masonry: {
        columnWidth: 10,
        isAnimated: true
      }
    });

    window.connection.emit('rendered');

    return this;
  }

});