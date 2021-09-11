import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcoursesComponent } from './aboutcourses.component';

describe('AboutcoursesComponent', () => {
  let component: AboutcoursesComponent;
  let fixture: ComponentFixture<AboutcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutcoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
