App.AlertView = Ember.View.extend({
    templateName: "_alert"
    ,classNameBindings: ['defaultClass', 'content.kind']
    ,defaultClass: 'alert-box'
    ,kind: null
    ,controllerBinding: "content"

    ,click: function () {
        var ths = this;
        this.$().fadeOut(600, function () {
            ths.remove(); // this is a view DOM object! ths is an AlerView instance! 
            ths.removeFromParent(); // this is a view DOM object! ths is an AlerView instance! 
        });
    }
    ,didInsertElement: function () {
        this.$().hide().fadeIn(400);
    }
});
