import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavourReadComponent } from './flavour-read.component';

describe('FlavourReadComponent', () => {
  let component: FlavourReadComponent;
  let fixture: ComponentFixture<FlavourReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlavourReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavourReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
