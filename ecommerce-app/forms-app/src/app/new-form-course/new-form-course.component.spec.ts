import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormCourseComponent } from './new-form-course.component';

describe('NewFormCourseComponent', () => {
  let component: NewFormCourseComponent;
  let fixture: ComponentFixture<NewFormCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFormCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
