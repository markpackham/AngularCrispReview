import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavourCreateComponent } from './flavour-create.component';

describe('FlavourCreateComponent', () => {
  let component: FlavourCreateComponent;
  let fixture: ComponentFixture<FlavourCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlavourCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavourCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
