import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilinstructorComponent } from './profilinstructor.component';

describe('ProfilinstructorComponent', () => {
  let component: ProfilinstructorComponent;
  let fixture: ComponentFixture<ProfilinstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilinstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilinstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
