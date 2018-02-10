import { Component } from '@angular/core';
import { CoursesService } from 'app/courses.service';

@Component({
    selector: 'courses',
    template: `
        <div (click)="onDivClicked()">
            <button (click)="welcome($event)" class="btn btn-primary" [class.active]="isActive"> Get started</button>
        </div>
        <h2 [style.color]="isActive ? 'blue' : 'black'">{{ title }}</h2>
        <h2>Featured Course</h2>
        <ul>
            <li>{{course.title | uppercase | lowercase}}</li>
            <li>{{course.students | number}}</li>
            <li>{{course.rating | number:'1.2-2'}}</li>
            <li>{{course.price | currency}}</li>
            <li>{{course.releaseDate | date:'shortDate'}}</li>
        </ul>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
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
    title = "List of courses";
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;
    courses;
    course = {
        title: "Some title",
        rating: 4.2356,
        students: 3059,
        price: 19,
        releaseDate: new Date(2018, 3, 1)
    };
    isActive = true;
    email = "fernando@email.com";

    onKeyUp() {
        alert(this.email);
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