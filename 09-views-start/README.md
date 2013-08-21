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
});
```
### New template
We have to create a new handlebar template.
```
  <script type="text/x-handlebars" data-template-name="_alert">
     {{view.message}}
  </script>
```

Include our view.
```
<script src="js/app/views/alert.js"></script>
```

Test out in Browser console.
```
view = App.AlertView.create({message: "Hello!"}); //Create
view.append(); //Append to the DOM
```
