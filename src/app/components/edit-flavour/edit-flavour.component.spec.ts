import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFlavourComponent } from './edit-flavour.component';

describe('EditFlavourComponent', () => {
  let component: EditFlavourComponent;
  let fixture: ComponentFixture<EditFlavourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFlavourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFlavourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
