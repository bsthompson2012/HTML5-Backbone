window.HomeView = Backbone.View.extend({
    initialize:function () {
        console.log('Initializing Home View');
    },

    events:{
        // Place future events here.
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    }
});