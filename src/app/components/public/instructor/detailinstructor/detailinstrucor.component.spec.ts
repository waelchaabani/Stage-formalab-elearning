import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailinstrucorComponent } from './detailinstrucor.component';

describe('DetailinstrucorComponent', () => {
  let component: DetailinstrucorComponent;
  let fixture: ComponentFixture<DetailinstrucorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailinstrucorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailinstrucorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
