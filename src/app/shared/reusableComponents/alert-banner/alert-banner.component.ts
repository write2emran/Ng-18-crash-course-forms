import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-alert-banner',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './alert-banner.component.html',
  styleUrl: './alert-banner.component.scss'
})
export class AlertBannerComponent {
  @Input() alertMessage!: string;
  @Input() alertType!: string;

  onClose(data: any) {
    alert('clicked');
    
  }
}
