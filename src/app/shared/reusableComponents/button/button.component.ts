import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() buttonLabel!: string;
  @Input() buttonClass!: string;

  @Output() onBtnClick = new EventEmitter();

  onClickBtn() {
    this.onBtnClick.emit();
  }

}
