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
