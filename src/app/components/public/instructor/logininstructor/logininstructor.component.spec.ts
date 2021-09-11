import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogininstructorComponent } from './logininstructor.component';

describe('LogininstructorComponent', () => {
  let component: LogininstructorComponent;
  let fixture: ComponentFixture<LogininstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogininstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogininstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
