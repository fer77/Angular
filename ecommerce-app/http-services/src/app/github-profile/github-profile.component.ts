import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent {

  constructor(private router: Router) { }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: {
        page:1, 
        order: 'newest'
      }
    })
  }
}
