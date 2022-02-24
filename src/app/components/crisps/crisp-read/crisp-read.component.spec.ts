import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrispReadComponent } from './crisp-read.component';

describe('CrispReadComponent', () => {
  let component: CrispReadComponent;
  let fixture: ComponentFixture<CrispReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrispReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrispReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
