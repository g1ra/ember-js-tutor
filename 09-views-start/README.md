ember-js-tutor
==============
09 Views.

Lets learn some ember js!
-------------------------

### Create a new view

Create folder,files: app/views/alert.js  
Open alert.js 
Create a new view Class. http://emberjs.com/api/classes/Ember.View.html
```python
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
view.set("message", "Section 9!!!"); // Automatically updated ! This is ember data binding !
```

### Fancy up view

#### ClassNames
Add this to the view class:
```python
App.AlertView = Ember.View.extend({
    templateName: "_alert"
    ,classNames: ['alert-box']
});
```
This will set a class attribute on a view's html tag. 
alert-box is a Zerb Foundation CSS Class.

#### Binding Classnames
Bind a className so we can update CSS className programatically.
```python
App.AlertView = Ember.View.extend({
    templateName: "_alert"
    ,classNameBindings: ['defaultClass', 'kind']
    ,defaultClass: 'alert-box'
    ,kind: null
});
```
We can change other things...  for example: tagName

#### View events
Create a new click event. 
$() is refer to JQuery. 
```javascript
    ,click: function () {
        var ths = this; // save reference to AlertView into ths
        this.$().fadeOut(500, function () {
            ths.remove(); // this is a view DOM object! ths is an AlerView instance! 
        });
    }
    ,didInsertElement: function () {
        this.$().hide().fadeIn(400);
    }
```
didInsertElement : http://emberjs.com/api/classes/Ember.View.html#event_didInsertElement
