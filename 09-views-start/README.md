ember-js-tutor
==============
09 Views.

Lets learn some ember js!
-------------------------

### Create a new view

Create folder,files: app/views/alert.js  
Open alert.js 
Create a new view Class. http://emberjs.com/api/classes/Ember.View.html
```
App.AlertView = Ember.View.extend({
    templateName: "_alert"
    #template: Ember.Handlebars.compile('template')
});
```
Note: We can create a template inside View, but we don't go that way.

### New template
Create a new handlebar template in main html, with same name as in "templateName" in view. (\_alert)
```
  <script type="text/x-handlebars" data-template-name="_alert">
     {{view.message}}
  </script>
```

### Include our view js
```
<script src="js/app/views/alert.js"></script>
```

### Test out in Browser console.
```
view = App.AlertView.create({message: "Hello!"}); //Create
view.append(); //Append to the DOM
view.set("message", "Section 9!!!"); // Automatically updated !
```

### Fancy up view

#### ClassNames
Add this to the view class:
```
, classNames: ['alert-box']
```
alert-box is a Zerb Foundation CSS Class.

