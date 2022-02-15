import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCrispComponent } from './add-crisp.component';

describe('AddCrispComponent', () => {
  let component: AddCrispComponent;
  let fixture: ComponentFixture<AddCrispComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCrispComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCrispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
