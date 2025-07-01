import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormErrorMessage } from '../ddform/form-errors';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  @Input()
  control!: AbstractControl

  get errorkeys():string[]{
    return this.control && this.control.errors ? Object.keys(this.control.errors) :[]
  }
  getErrorMessage(errorKey:string):string{
    return FormErrorMessage[errorKey] || 'Invalid Field'
  }

}
