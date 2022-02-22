import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrispAddComponent } from './crisp-add.component';

describe('CrispAddComponent', () => {
  let component: CrispAddComponent;
  let fixture: ComponentFixture<CrispAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrispAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrispAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
