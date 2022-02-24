import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerReadComponent } from './owner-read.component';

describe('OwnerReadComponent', () => {
  let component: OwnerReadComponent;
  let fixture: ComponentFixture<OwnerReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
