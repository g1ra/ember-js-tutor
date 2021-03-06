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

#### Binding Classname
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
AlertView Class :
```javascript
    ,click: function () {
        var ths = this; // save reference to AlertView into ths
        this.$().fadeOut(500, function () {
            ths.remove(); // "this" is a view DOM object! "ths" is an AlerView instance! 
        });
    }
    ,didInsertElement: function () {
        this.$().hide().fadeIn(400);
    }
```
didInsertElement : http://emberjs.com/api/classes/Ember.View.html#event_didInsertElement

### Controller
Manage multiple alerts in application.

Create new file : js/app/controllers/alert\_controller.js  
With content:
```javascript
App.AlertController = Ember.ArrayController.extend();
App.alertController = App.AlertController.create({ content: Ember.A() });
```
We create alertController for CollectionView contentBinding for next section.
Ember.A is an Ember Array implementation http://emberjs.com/api/classes/Ember.html#method_A  
Ember.ArrayController -> http://emberjs.com/api/classes/Ember.ArrayController.html

### View: alert collection
Create new view file : js/app/views/alert_list.js
```javascript
App.AlertListView = Ember.CollectionView.extend({
    itemViewClass: "App.AlertView" // View Class for each item in CollectionView
    ,contentBinding: "App.alertController" // Bind same content as in alertController object ! 
});
```
CollectionView is maintain DOM representation and view objects of  
an array items. http://emberjs.com/api/classes/Ember.CollectionView.html

### Fix html
Include script tags.
```javascript
  <script src="js/app/views/alert_list.js"></script>
  <script src="js/app/controllers/alert_controller.js"></script>
```
Put somewhere the place of AlertView. For example in application template.
```html
<div class="container">
    {{ view App.AlertListView }}
    <div class="row">
```

\_alert view is worked so far, because AlertView is contained message. But now its content.
```javascript
  <script type="text/x-handlebars" data-template-name="_alert">
     {{view.content.message}}
  </script>
```
### Test out in browser console

> App.alertController.pushObject(Ember.Object.create({message: 'olleH!Ja!'}));
> Click to remove, then add another one.
> App.alertController.pushObject(Ember.Object.create({message: 'dlroW olleH!'}));
> Notice. The first is not removed.
> We have to use removeFromParent in AlertView Class instead of remove.
http://emberjs.com/api/classes/Ember.View.html#method_removeFromParent
```python
            ths.removeFromParent(); // this is a view DOM object! ths is an AlerView instance! 
```
> App.alertController.pushObject(Ember.Object.create({message: 'Access denied', kind: 'alert'}));






