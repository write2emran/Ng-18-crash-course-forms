import { Component } from '@angular/core';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { AlertBannerComponent } from '../../../shared/reusableComponents/alert-banner/alert-banner.component';
import { ButtonComponent } from '../../../shared/reusableComponents/button/button.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [DashboardComponent, AlertBannerComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  fromLayout: string = 'New Alert notificed in Layout';

}
