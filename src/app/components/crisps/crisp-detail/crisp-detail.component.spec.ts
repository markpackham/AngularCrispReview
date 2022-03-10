import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrispDetailComponent } from './crisp-detail.component';

describe('CrispDetailComponent', () => {
  let component: CrispDetailComponent;
  let fixture: ComponentFixture<CrispDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrispDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrispDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
