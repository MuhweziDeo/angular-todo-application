import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Output() valueChange = new EventEmitter<string>();
  @Input() value = '';
  @Output() deleteDeo =  new EventEmitter();

  handleChange(event:any) {
    this.valueChange.emit(event.target.value);
  }

  handleDeleteDeo() {
    this.deleteDeo.emit();
  }
}
