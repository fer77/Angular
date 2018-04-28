## 1

Angular has a class called "FormControl" and "FormGroup", which is an instance of the control class. It allows us to:

FormControl:

- value
- touched
- untouched
- dirty
- pristine
- valid
- errors

FormGroup:

- same values as "FormControl":

To validate a form in angular there has to be a _FormGroup_ for the form and a _FormControl_ for each of the input fields. This way the state of each field can be tracked.

Creating Controls:

1. apply directives(template driven forms)
- good for simple forms
- simple validation
-easier to create
- Less code
or
2. reactive forms 
- more control over validation logic
- good for complex forms
- unit etable

## 2

**ngModel** can be used like this
```javascript
// By binding the ngModel.
//..[(ngModel)]="firstName...
// or
//...by itself ngModel and assingning an attribute name to the element being used.
```

_form control class_ tracks state changes and the validity of input fields.

## 3

**output** properties are used to raise custom events.

## 4

To check if an etire group is valid or not:

```html
<!-- ... -->
<div ngModelGroup="contact" #contact="ngModelGroup">
    <div *ngIf="!contact.valid">...</div>
</div>
```