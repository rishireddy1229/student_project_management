import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginstComponent } from './loginst.component';

describe('LoginstComponent', () => {
  let component: LoginstComponent;
  let fixture: ComponentFixture<LoginstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
