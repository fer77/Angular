import { Component } from '@angular/core';
import { CoursesService } from 'app/courses.service';

@Component({
    selector: 'courses',
    template: `
        <button class="btn btn-primary" [class.active]="isActive"> Get started</button>
        <h2 [style.color]="isActive ? 'blue' : 'black'">{{ title }}</h2>
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

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}