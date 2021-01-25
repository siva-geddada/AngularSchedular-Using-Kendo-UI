import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerEditFormComponent } from './scheduler-edit-form.component';

describe('SchedulerEditFormComponent', () => {
  let component: SchedulerEditFormComponent;
  let fixture: ComponentFixture<SchedulerEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
