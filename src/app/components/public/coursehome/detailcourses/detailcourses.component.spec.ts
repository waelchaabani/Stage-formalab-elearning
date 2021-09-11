import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcoursesComponent } from './detailcourses.component';

describe('DetailcoursesComponent', () => {
  let component: DetailcoursesComponent;
  let fixture: ComponentFixture<DetailcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
