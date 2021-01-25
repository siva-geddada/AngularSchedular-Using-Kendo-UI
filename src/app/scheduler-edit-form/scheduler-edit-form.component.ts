import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { EditMode } from '@progress/kendo-angular-scheduler';

@Component({
  selector: 'app-scheduler-edit-form',
  templateUrl: './scheduler-edit-form.component.html',
  styleUrls: ['./scheduler-edit-form.component.scss'],
})
export class SchedulerEditFormComponent implements OnInit {
  ngOnInit(): void {}
  @Input() isNew = false;

  @Input() editMode: EditMode | undefined;

  @Input()
  set event(ev: any) {
    if (ev !== undefined) {
      this.editForm.reset(ev);
      this.active = true;
    }
  }

  @Output() cancel: EventEmitter<any> = new EventEmitter();

  @Output() save: EventEmitter<any> = new EventEmitter();

  active = false;

  editForm = new FormGroup({
    Title: new FormControl('', Validators.required),
    Start: new FormControl('', Validators.required),
    End: new FormControl('', Validators.required),
    IsAllDay: new FormControl(false),
    RecurrenceRule: new FormControl(),
    RecurrenceID: new FormControl(),
  });

   get isEditingSeries(): boolean {
    return this.editMode === EditMode.Series;
  }

  constructor(public formBuilder: FormBuilder) {}

   onSave(e: MouseEvent): void {
    e.preventDefault();
    this.active = false;

    this.save.emit(this.editForm.value);
  }

   onCancel(e: MouseEvent): void {
    e.preventDefault();
    this.active = false;

    this.cancel.emit();
  }
}
