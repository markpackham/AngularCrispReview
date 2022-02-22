import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavourItemComponent } from './flavour-item.component';

describe('FlavourItemComponent', () => {
  let component: FlavourItemComponent;
  let fixture: ComponentFixture<FlavourItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlavourItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavourItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
