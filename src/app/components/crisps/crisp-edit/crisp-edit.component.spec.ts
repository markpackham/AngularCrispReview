import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrispEditComponent } from './crisp-edit.component';

describe('CrispEditComponent', () => {
  let component: CrispEditComponent;
  let fixture: ComponentFixture<CrispEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrispEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrispEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
