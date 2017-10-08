## 1

## 2

## 3

## 4

## 5

_MVC_
_MVVC_
_MV*_

_M_ (model) represents the data, i.e. a variable.
_V_ (view) what the user interacts with, i.e. the HTML.
_*_ (whatever) this binds the model and the view, i.e. controllers, view models...

## 6

_HTML_
**attributes**


```html
<h1 style="font-size: 18px;">Hello World</h1>
```

_HTML5_ introduced the `data-` to add whatever attribute we wanted on the page.

**custom attributes**
_angular_ uses `ng-` to add custom attrubutes to a page. _angular_ does allow the use of `data-ng-`.

## 7

**global name space** a structural goal of _Angular_ is to not pollute the global namespace.

## 8 

`ng-app="myApp"` custom attribute (module name) that connects everything inside the html tag with this attribute's module name.

1. Declare a module name:

```javascript
var myApp = angular.module('myApp', []);
```

2. Create a controller: connects the view to the model.

```javascript
myApp.controller('mainController', function() {
    //...
});
```

```html
<div ng-controller="mainController">
        
</div>
```

## 9

**dependency injection** giving a function an object.  Rather than creating an object inside a function, you pass it to the function.

```javascript
var person = function(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

// This function is not dependent on how bob(Person) is created.
function logPerson(person) {
    console.log(person);
}

var bob = new Person('Bob', 'belcher');
logPerson(bob);
```

Angular uses dependency injection to force strong/stable app architecture.

## 10

**Scope** object from the scope service. This becomes the piece between the view and the controller.

## 11

```javascript
// Angular injected $scope into the function.
myApp.controller('mainController', function($scope) {
    console.log($scope);
});
// Scope defines the data that goes back and forth between the view and the controller.
```

## 12



## 13

`$scope` us a service that is part of the core angular modules. Other services can be passed (injected) and they will become part of the list of depencencies anngular will include in our app.

## 14

