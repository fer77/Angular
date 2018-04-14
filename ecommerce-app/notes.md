## 1

**Angular** framework for building client side applications in _html_, _css_, _javascript_ or _typescript_.

Benegits of Angular:

- Offers a clean structure for our application
- Code can be re-used
- Makes applications stable

Architecture
---

_front-end_ User Interface (UI), runs in the browser.
    - html
    - css
    - javascript
    - angular


_back-end_ stores and processes data, sits on a web server or multiple web servers.
    - data and APIs
    - business logic

_HTTP services_ or _API_ available endpoints accessible via the _HTTP protocol_

## 2

**node** runtime environment to execute javascript code outside the browser.
**NPM** (Node Package Manager) installs third party libraries:
    - Angular CLI

## 3

`e2e` _end to end_ where automated tests for the application are written.

`src/main.ts` starting point of the application. Bootstraps the main module of the application:

```javascript
// main.ts
//...
platformBrowserDynamic().bootstrapModule(AppModule);
```

## 4

angular cli uses _webpack_ to compile(bundel) application code and minifies it for optimization:

`polyfills` scripts to fill the gap between the javascript that angular needs and the versions of javascript used by diffrent web-browsers.

`vendor.bundle.js` all third party libraries.

**Hot Module Replacement** (_HMR_) browser is reloaded everytime a change is saved and compiled.

## 5

**typescript** a superset of javascript, any valid js code is valid typescript code.

- _strong typing_
- object-oriented features
- compile-time errors
- intellicense

## 6

_typescript_ compilations step happens 'under the hood' when working in an Angular app.


## 7

_variable declarations_

There are two ways to declare variables in typescript:

1. `var`

```javascript
function doSomething() {
  for(var i = 0; i < 5; i++) {// 'i' is available inside the 'for' block...
    console.log(i);
  }
  console.log('Finally: ' + i);// 'i' is also available outside the 'for' block.
}

doSomething();
```

2. `let`

```javascript
function doSomething() {
  for(let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('Finally: ' + i);// throws an error when compiling
}

doSomething();
```

## 8

```javascript
let count = 5;

count = 'a';// error: number.

let a;// type: any
// typescript throws no errors
a = 1;
a = true;
a = 'a';
```

**type annotation**

```javascript
let a: number;
a = 1;
a = true;// error: number
a = 'a';// error: number
```

typescript has diffrent types:

- number `let a: number;`
- booleans `let b: boolean`
- strings `let c: string`
- any `let d: any;`
- arrays `let e: number[]`
- enum:

```javascript
// TypeScript
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color { Red = 0, Green = 2, Blue = 2 };
let backgroundColor = Color.Red;

// Same code in Javascript:
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;

```

## 9

**type assertions** a way of telling the ts what type a variable is. Does not change the type of the variable at run time. it is just a way of telling the ts compiler about the variable.

```javascript
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alsoEndsWithC = (message as string).endsWith('c');
```

## 10

_Arrow_ functions: similar to [lambda expression](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/lambda-expressions)

```javascript
let log = function(message) {
  console.log(message);
}
// Arrow function
//
letdoLog = (message) => console.log(message);
```

## 11

**inline anotation**

```javascript
let drawPoint = (point: { x: number, y: number }) => {
  //...
}

drawPoint({
  x: 1,
  y: 2
  })
```

**interfaces** defines the shape of an object.

```javascript
interface Point {
  x: number,
  y: number
}

let drawPoint = (point: Point) => {
  //...
}

drawPoint({
  x: 1,
  y: 2
  })
```

## 12

**cohesion** things that are related should be part of one 'unit' (class).

**class** groups variables (properties) and functions (methods) that are highly related.

```javascript
class Point {
  x: number;
  y: number;

  draw() {
    //...
  }

  getDistance( point: Point) {
    //...
  }
}
```

## 13

When defining an object of custom type memory needs to be explicitly allocated to it (`new`):

```javascript
class Point {
  x: number;
  y: number;

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }

  getDistance( point: Point) {
    //...
  }
}

let point = new Point();
point.x = 1;
point.y = 2;
point.draw();
```

`class Point` this is a class.
`let point = new Point()` this is an object. An Object is an instance of a class.

## 14

**constructor** method called when an instance of a class is created.

```javascript
class Point {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}

// supply constructor values for 'x' and 'y'
let point = new Point(1, 2);
point.draw();
```

adding an `?` makes a parameter optional

```javascript
class Point {
  //...
  constructor(x?: number, y?: number) {
  //...
  }
//...
// constructor values for 'x' and 'y' are now optional
let point = new Point();
point.draw();
```

## 15

To prevent changing the value of an object's properties after being initialized:

```javascript
let point = new Point(1, 2);
point.draw();
```

**access modifiers** can be applied to _fields_, _properties_, and _methods_.

three types:
- public
- private
- protected

## 16

**Access modifiers** control the accessibility of class properties.
TypeScript has two access modifiers - _public_ and _private_.

## 17
 **properties** a variable that is attached to an object.
 **getter** a method that gets the value of a specific property
 **setter** a method that sets the value of a specific property

 getter methods must not expect a parameter, while setter methods expect exactly one parameter (the new value to set):

 ```javascript
 var o = {
  a: 7,
  get b() { return this.a + 1; },
  set c(x) { this.a = x / 2; }
};
 ```

## 18

**module** in typescript we divide our code into files(modules) and export/import one or more types.

## 19

## 20

**components** encampsulated the _data_, _HTML template_, and _logic_ of a view.

every application has at least one _app_ or _root_ component. Apps are a tree of components starting from the _app_ or _root_ component.

**module** a container for a group of related components.

every application has at least one module called _appModule_. Breaks the application into managable sections.

`App` => `M2` => `M3`

## 21

Steps to using _components_:

1. _Create_ a component
```javascript
// courses.components.ts
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: '<h2>Courses Component</h2>'
})// Decorator function

export class CoursesComponent {

}
```
2. _register_ new component in a module
```javascript
//app.modules.ts
//...
import { CoursesComponent } from 'app/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent
  ],
//...
```
3. add an element in an _HTML markup_
```html
// app.component.html
<courses></courses>
```

With components we can extend HTML vocabulary.

## 22

Creating components manually can be a little tedious and prone to mistakes.

CLI:

`ng g c course`

will create the following files for the application:

```bash
create src/app/course/course.component.css
create src/app/course/course.component.html
create src/app/course/course.component.spec.ts
create src/app/course/course.component.ts
update src/app/app.module.ts
```

## 23

`{{}}` _string interpolation_

## 24

**directives** 

add an `*` to a any directive that modifies the DOM.

## 25

**services** 

A _component_ should not contain any logic other than the 'presentation' logic of the app. This allows to use a service in other parts of the application. And _unit test_ that _component_ with out the dependency for logic of the app (i.e. an HTTP service);

There is no _decorator_ for services like there is for _components_.

## 26 

_constructor_ is where an objec is initialized.

**dependency injection** providing or 'injecting' the dependencies of a class into its constructor.

**singleton** a single instance of an object exists in the memory.

## 27 

Creating a service with Angular's CLI:

`ng g s email`

Creates two files:

- one file is the service file.
- the other contains boilerplate for writing unit test.

`@Injectable` (decorator) needed if the service had dependencies.

## Assignment: display a list of authors

1. register a component:
  `ng g c authors`
2. add the class `authors` to the author's component.
3. create a service:
  `ng g s authors`
4. add the service as a provider to `app.module`
5. add a list of authors to the `authors.service.ts` file
6. inject the service in to the cunstroctor of the `authors.component.ts`
7. render list of authors in the template.

## 28

interpolation `{{}}` is syntactic sugar. When Angular compiles our code Angular performs _property binding_.

**property binding** binding a property in the DOM to a field or property in the component. 

_interpolation_ vs _property binding_

use _interpolation_ works well for adding dynamic values between headings, paragraphs, lists...

```html
<img src="{{ imageUrl }}"/>
```

_property binding_ works one way, from the component to the DOM.

```html
<img [src]="title"/>
```

## 29

_DOM (Document Object Model)_ a model of object that represents the structure of a document, a tree of objects in memory.

90% of the time HTML attributes have a one to one mapping to propeties of DOM objects.

When using _property binding_ we are binding to a property of a DOM object and not an HTML attribute.

if we want to bind an HTML attribute pre-fix `attr.` to the property:

```html
<table>
    <tr>
        <td [attr.colspan]="colSpan"></td>
    </tr>
</table>
```

## 30

Install _bootstrap_

1. `npm install bootstrap --save`
2. import style sheet to `styles.css`
```css
/* in styles.css */
@import"~bootstrap/dist/css/bootstrap.css"
```

## 31

**class binding** `[class.active]="isActive"` added dynamically based on some condition.

**style binding**  `[style.color]="isActive ? 'blue' : 'black'"`

**event binding** events raised from the DOM. To get access to the event object, it needs to be passed as a parameter. `$event` will reperesent a DOM event.

**event bubbling** when an event bubbles up the event tree. To stop an event from bubbling up: `$event.stopPropagation()`

**event filtering** `(keyup.enter)="onKeyUp()"`

**template variable** `#email` and pass `(keyup.enter)="onKeyUp(email.value)"` to the event filter and its method `onKeyUp(email){}`

## 32

In OOP parameters shouldn't be passed around. An obj. should have all the data it needs.

```javascript
// bad
//...
onKeyUp(email) {
    alert(email);
}
//...

// good
//...
email;
onKeyUp() {
    alert(this.email);
}
//...
```

**property binding** binding is from the component -> to the view (one way).

**[(ngModel)]** two way binding syntax.

## 33

**pipes**

Built-in [Pipes](https://alligator.io/angular/built-in-pipes-angular/):
- Uppercase
- Lowercase
- Decimial
- Currency
- Percent

## 34

creating a custom pipe:

1. 
```javascript
import {Pipe, PipeTransform}
```

**Pipe** decorator function

**PipeTransform** _interface_ that defines the shape of all pipes in angular.

2. 
```javascript
export class TrunkatePipe implements PipeTransform {}
```
_"implements"_ tells the TS compiler that this class should have the same shape as the _PipeTransform_ interface.

```javascript
// PipeTransform interface implementation.
interface PipeTransform { 
  transform(value: any, ...args: any[]): any
}
// Our class should have this same "signature"
```

3. register component in `app.module`

```javascritp
// app.module.ts
import { TrunkatePipe } from './trunkate.pipe';
//...
```

## 35

To make a _component_ more re-usable add _input_ and _output_ properties.  **Input** properties are used to pass _state_ to a component. **Output** properties are used to raise _events_ from the component. Togther they make the **component API**

## 36

`@input()` a decorator for marking fields and properties as input properties.

```javascript
// favorite.component.ts
import { Input } from '@angular/core';
//...
export class FavoriteComponent implements OnInit {

  @Input() isFavorite: boolean;
  //...
```

## 37

**Alias** keeps the "contract" of a component intact. Minimizes impact of changes to app components.

```javascript
// favorite.component.ts
//...
  @Input('is-favorite') isFavorite: boolean;
//...
```

## 38

**Output**

```javascript
// favorite.component.ts
import { Input, EventEmitter } from '@angular/core';
//...
export class FavoriteComponent implements OnInit {

  @Input() isFavorite: boolean;
  @Output() change = new EventEmitter(); // declares change as our EventEmitter

  //...
  onClick() {
    //...

    this.change.emit(); // will emmit an event.
  }
```

## 39

1. 
```javascript
// favorite.component.ts
  //...
  onClick() {
    //...

    this.change.emit(this.isSelected); // can pass data through here.
  }
```

2. subscriber of cnages to the `favorite.component`
```javascritp
// app.component.ts
//...

  onFavoriteChanged(isFavorite) {
    console.log("Favorite changed:", isFavorite);
  }
//...
```

3. 
```html
// app.component.html
<favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChanged($event)"></favorite>
```
`$event` anything that is passed when raising an event.

## 40

Aliasing output properties assures that in the future when an event is renamed nothing that depends on that component will be afflected.

## 41

Two ways for using templates:

`templateUrl: //...` better for larger components.
or
`tempalete: //...` useful when building a small component.

templates are bundled with the rest of the app code.

## 42

Three ways for applying styles to components:

1. using `styleUrls: ['./favorite.component.css']` in the component method data.

2. 
```html
  styles: [
    .container {
      color: green;
    }]
``` 
and write styles here, similar to the `<style>` tag.

3. or inline int the compnent html template with `<style>` tag.

hierarchy is whichever style is applied last in the component method data.

styles will not affected to other glyphicons on the page.

## 43

**shadow DOM** specification that enables DOM tree and style encapsulation.  It allows for _scoped styles_ to elements.

```javascript
var el = document.querySelector('favorite');
var root = el.createShadowRoot(); // gives access to the shadow root for the element. Without it this style would affect other h1 elements on the page.

// this element is now scoped.
root.el.innerHTML = `
  <style>h1 { color: red }</style>
  <h1>Hello</h1>
`;
```

**view encapsulation** _enum_ member defined in angular core.
```javascript
@Component({
  //...
  encapsulation: ViewEncapsulation
})
```
has three members:
1. Emulated (default): angular will emulate the concept of shadow DOM. Friendly to browsers that do not support shadow DOM.
2. Native: uses the provided shadow DOM
3. None

```html
<!-- angular attaches an attribute to elements like this: -->
<style>
  .glyphicon[_ngcontent-c1] {
    color: red;
  }
</style>
```

## 44

ngContent

anything placed here will replace `ng-content`:
(note there is no need for a selector if there's only one `ng-content` tag)

```html
<ng-content select=".heading"></ng-content>
```

## 45

**ng-container** when you need content needs to be rendered on a page without putting it on an html element.

## Assignment

`ng g c like`

## 46
 **directives** are used to modify the DOM. There are two types of _directives_:

 1. structural
 2. attribute

 ## 47

 **ng-if vs hidden** _ng-if_ removes elements. _hidden_ just hides the element (display:none/block).

 if the element tree is small and not costly to build, it really doesn't matter which is used. however, if the element tree is large and costly to build then _hidden_ may be the better option.

 ## 48

 **ngSwitch** to compare the value of a field or property against multiple values.

 ## 49

 **ngFor** 

 ## 50

 **ngFor** and _change events_

 ## 51

 **ngFor** and _trackby_

 Angular by default tracks objects by their identity.
 _trackby_ tells angular how to track objects (by their id).

 ## 52

 The leading asterisk.
 ---

 *ngIf the leading asterisk tells angular to render a block using and ng template element:

 ```html
 <div *ngIf="...">Some content</div>

 <!-- angular will rewrite this block and bind ngIf and create an else block for the template -->

<ng-template [ngIf]="...">
  <div>
    Some content
  </div>
</ng-template>
<ng-template [ngIf]="!(...)">
  <div>
    Some content
  </div>
</ng-template>
 ```

 ## 53

 **ngClass**
 1. bind it to an expression
 2. add as many vlaue pairs as needed for the element
 3. each key will represent a css class and the value will determine    which class to apply to the element.

 ```html
 <!-- ... -->
 [ngClass]="{
            
      }"
<!-- ... -->
 ```

 ## 54

 **ngStyle** cleans up code when dealing with multiple style directives.

 ## 55

 **traversal operator** (_?_) if an assignment is _null_ or _undefined_ angular ignores the property, otherwise angular will render