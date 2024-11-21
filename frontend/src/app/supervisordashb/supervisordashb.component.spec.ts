import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisordashbComponent } from './supervisordashb.component';

describe('SupervisordashbComponent', () => {
  let component: SupervisordashbComponent;
  let fixture: ComponentFixture<SupervisordashbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisordashbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisordashbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
