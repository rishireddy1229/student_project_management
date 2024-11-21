import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdashbComponent } from './studentdashb.component';

describe('StudentdashbComponent', () => {
  let component: StudentdashbComponent;
  let fixture: ComponentFixture<StudentdashbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentdashbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentdashbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
