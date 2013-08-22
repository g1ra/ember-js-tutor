App.AlertListView = Ember.CollectionView.extend({
    itemViewClass: "App.AlertView" // View Class for each item in CollectionView
    ,contentBinding: "App.alertController" // Bind same content as in alertController object ! 
});
