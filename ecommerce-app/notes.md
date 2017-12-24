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
