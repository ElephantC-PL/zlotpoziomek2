import { Component, computed, inject, Signal } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavTriggerService } from '../../shared/services/side-nav-trigger/side-nav-trigger.service';

@Component({
  selector: 'zp-side-nav',
  standalone: true,
  imports: [MatSidenavModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  private _sideNavTrigger = inject(SideNavTriggerService);

  visible: Signal<boolean> = computed(()=> this._sideNavTrigger.$visible());

  close(): void {
    this._sideNavTrigger.close();
  }
}
