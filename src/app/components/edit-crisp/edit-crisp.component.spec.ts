import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCrispComponent } from './edit-crisp.component';

describe('EditCrispComponent', () => {
  let component: EditCrispComponent;
  let fixture: ComponentFixture<EditCrispComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCrispComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCrispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
