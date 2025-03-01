import { Component, inject } from '@angular/core';
import { NavigationScrollService } from '../../shared/services/navigation-scroll/navigation-scroll.service';
import { SideNavTriggerService } from '../../shared/services/side-nav-trigger/side-nav-trigger.service';
import { EditionSelectorComponent } from '../edition-selector/edition-selector.component';

@Component({
  selector: 'zp-menu',
  standalone: true,
  imports: [EditionSelectorComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  private _navigation = inject(NavigationScrollService);
  private _sideNavTrigger = inject(SideNavTriggerService);

  navigateTo(id: string): void {
    this._navigation.scrollTo(id);
    this._sideNavTrigger.close();
  }
}
