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

```javascript
myApp.controller('mainController', function($log) {
    $log.log('log info');
    $log.info('info info');
    $log.warn('warn info');
    $log.debug('debug info');
    $log.error('error info');
});
// Things the $log service provides to our app.
```

```javascript
myApp.controller('mainController', function($scope, $log, $filter) {
    $scope.name = 'Bob';
    $scope.formattedname = $filter('uppercase')($scope.name);

    $log.info($scope.name);
    $log.info($scope.formattedname);
});
// Dependency injection gives us axcess to a whole ecosystem of features and utilities.
```

Angular's structure enforces good code.

[Other modules could be uploded to our app].(https://code.angularjs.org/1.3.0-rc.1/)

Add dependencies in a script tag.

```html
<!--    Messages module-->
<!--   adds form validation-->
    <script src="https://code.angularjs.org/1.3.0-rc.1/angular-messages.min.js"></script>
```

And add them to our app array:

```javascript
var myApp = angular.module('myApp', ['ngMessages']);
```

Make use of the module:

```html
//...
    <div ng-messages="myForm.myField.$error">
//...
```

## 15

## 16

**minification** shrinking the size of files for faster download.

```javascript
var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $log) {

    $log.info($scope);

});
```

minified:

```javascript
var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$log'function($scope, $log) {

    $log.info($scope);

}]);
```

minified file must be in the same order as nonminified file. when writing controllers write them as the minified version, to avoid errors when code is minified.

## 17

**interpolation** creating a string by combining strings and placeholders.

```javascript
'my name is ' + name;
```

_interpolation_ in angularjs:

```html
<h1>Hello {{ name }}!</h1>
```

## 18

**Directive**: an instruction to angular to manipulate a part of the DOM, i.e. _add a class_, _hide_/_show_, _create_. A good example is **ng-app** and **ng-controller** (custom attributes) needed to initialize the app.

**ng-model** lets angular know that we want an element to be bound to a specific variable in the scope.

**two way data-binding**:

```html
<input type="text" ng-model="handle" />

<h1>twitter.com/{{ handle }}</h1>
```

**MODEL**

```javascript
$scope.handle

$scope.toLowerCase = function() { //... }

```
**??**

MV* what binds the model and the view?
_Watchers_ and the _digest loop_

**VIEW**

```html
<input type="text" ng-model="handle" />
<h1>twitter.com/{{ toLowerCase() }}</h1>
```

## 19

**Event loop** is native to the browser.

Elements in the html throw events, the _event loop_ waits for these events to be thrown. We just have to listen for those events:

```javascript
var tb = document.getElementById('name');

tb.addEventListener('keypress', function(event) {
    console.log('Pressed!');
});
```

Angular takes care of keeping track of those events.

## 20

Events the _event loop_ will be looking for may include:

- keypress
- click
- mouseover
- change
- ...

Angular adds the **angular context** to the event loop, virtually extending the event loop.

**digest loop** checks if something has changed and keeps checking until all of the old values and the new values match.
_digest cycle_ one revolution of the digest loop.
    **watch list** a list of things angular will watch and check:
        **watchers** keeps track of the original value and the new value, everytime something happens that may have changed the value.

This is the * in the MV* automatically keeping track of the variables and values in the views and the models.

variable and functions that will get added to the watch list:

```javascript
$scope.handle = '';

    $scope.toLowerCase = function() {

        return $filter('lowercase')($scope.handle);
    };
```

Watching the _watch list_:

```javascript
//...
    $scope.$watch('handle', function(newValue, oldValue) {

        console.log('***********digest cycle***********');
        console.log('Old value: ' + oldValue);
        console.log('New value: ' + newValue);

    });
//...
```

Setting things outside of the context of angular can cause unexpected errors:

```javascript
setTimeout(function() {
    $scope.handle = 'new handle';
    console.log('scope changed');
}, 3000);
```

The above will notice the change, but angular digest cycle will not, because angular doesn't know to check for it. To avoid this kind of error we can put that piece of code inside the angular context:

```javascript
//...
    $scope.$apply(function() {
        $scope.handle = 'new handle';
        console.log('scope changed');
    });
//...
```

This will tell angular to check for changes on that piece of code outside the angular context.

## 21

Other common directives:

- `ng-if` allows for DOM elements to exist or be removed, depending on its true or false value.

- `ng-show` is not removed from the DOM, but gets a new attribute `ng-hide` that hides the element.

- `ng-hide` 'hides' the element until a true value is returned.

- `ng-class="{ 'first': true, 'second': true, 'third': false }"`

- `ng-repeat`

## 22

Other common directives:

`ng-click`

`ng-cloak` hides an element until angular has downloaded on the browser window.

## 23

**XMLHTTP** Request Object
---

Used by most frameworks, because it is difficult to use most frameworks wrap _XMLHTTP_ with things like AJAX(jQuery).

Angular uses `$HTTP` as a wrapper to take away some of the complexity.

## 24

## 25

Angular's dependency injection makes it possible to have multiple views and controllers in our `index.html`.  The `$scope` object is unique to its controller.

Each view is connected individually by `ng-controller` to that views controller and `$scope`.

## 26

SPA (single page apps).
---

**URL** is a string that specifies a location.

Using the URL identifier is the key to single page applications.

## 27

`$routeProvider` lets us specify routes.
