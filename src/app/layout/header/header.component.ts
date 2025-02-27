import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SideNavTriggerService } from '../../shared/services/side-nav-trigger/side-nav-trigger.service';

@Component({
  selector: 'zp-header',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {  
  private _sideNavTrigger = inject(SideNavTriggerService);

  navToggle(): void {
    this._sideNavTrigger.toggle();    
  }
}