ember-js-tutor
==============
08 Controller.

Lets learn some ember js!
-------------------------

What is application? 
* Behaviour is stored in controllers. 
* Router is manage state. 
* Views and templates manage visualization. 
* Store and models handle data. 

### Download Foundation
Boost our fronted a littlebit.
Front-end is using Zerb http://foundation.zurb.com/ front-end framework .

### Fix foundation with ember
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
```
at app.js

---

### Overview

Lets make a list of our team member.  
Its an array of data.  
We will use ember ArrayController. Similar as backbone collection class. 

### Create folders, files

create folder: app/controllers/  
create file: app/controllers/team_members_controller.js

### Edit our team_members_controller file

ArrayController: http://emberjs.com/api/classes/Ember.ArrayController.html 
Proxy content to View.  
```python
App.TeamMembers = Ember.ArrayController.extend({
    content: ['Motoko', 'Batou', 'Ishikawa', 'Saito', 'Boma', 'Togusha']
});
```
But normally we should not define content. Because router is responsible setting 
content of controller with data, provided by store.

### Edit html

Create a new item in navigation.  
Add a new handlebar template.
Include our controller:
```
  <script src="js/app/controllers/team_members_controller.js"></script>
```
