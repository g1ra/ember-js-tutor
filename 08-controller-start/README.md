ember-js-tutor
==============

08 Controller.

Ember tutorial project.
Lets learn some ember js!
-------------------------

What is application? 
* Behaviour is stored in controllers. 
* Router is manage state. 
* Views and templates manage visualization. 
* Store and models handle data. 

Note: Front-end is using Zerb http://foundation.zurb.com/ front-end framework .
We have to erase 
```javascript
   <script>
     $(document).foundation();
   </script>
```
from the Foundation sample html.
And add
```python
App = Ember.Application.create({
    ready: function() {
        Ember.run.next(this, function(){ 
            $(document).foundation(); 
        });
    }       
});
at app.js
```
