import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinstructorComponent } from './listinstructor.component';

describe('ListinstructorComponent', () => {
  let component: ListinstructorComponent;
  let fixture: ComponentFixture<ListinstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListinstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListinstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
