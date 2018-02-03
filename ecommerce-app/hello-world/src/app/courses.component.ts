import { Component } from '@angular/core';
import { CoursesService } from 'app/courses.service';

@Component({
    selector: 'courses',
    template: `
        <div (click)="onDivClicked()">
            <button (click)="welcome($event)" class="btn btn-primary" [class.active]="isActive"> Get started</button>
        </div>
        <h2 [style.color]="isActive ? 'blue' : 'black'">{{ title }}</h2>
        <input #email (keyup.enter)="onKeyUp(email.value)" />
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <img [src]="imageUrl"/>
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
        `
})

export class CoursesComponent {
    title = 'List of courses';
    imageUrl = 'http://lorempixel.com/400/200';
    colSpan = 2;
    courses;
    isActive = true;

    onKeyUp(email) {
        alert(email);
    }
    onDivClicked() {
        console.log('div was clicked!');
    }
    welcome($event) {
        // console.log($event);
        $event.stopPropagation();

        console.log('button was clicked!');
    }

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}