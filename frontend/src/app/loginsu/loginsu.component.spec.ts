import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsuComponent } from './loginsu.component';

describe('LoginsuComponent', () => {
  let component: LoginsuComponent;
  let fixture: ComponentFixture<LoginsuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginsuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
