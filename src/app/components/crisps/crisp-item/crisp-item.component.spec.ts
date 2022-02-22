import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrispItemComponent } from './crisp-item.component';

describe('CrispItemComponent', () => {
  let component: CrispItemComponent;
  let fixture: ComponentFixture<CrispItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrispItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrispItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
