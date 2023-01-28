import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidationErrorsComponent implements OnInit {

  @Input() errorPrefix: string='';
  @Input() errors!: ValidationErrors;

  constructor() { }

  ngOnInit(): void {
  }

}
