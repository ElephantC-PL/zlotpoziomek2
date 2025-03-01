import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { NavigationScrollService } from '../../shared/services/navigation-scroll/navigation-scroll.service';
import { SideNavTriggerService } from '../../shared/services/side-nav-trigger/side-nav-trigger.service';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { EditionEnum, SectionEnum } from '../../data/global';
import { DataService } from '../../shared/services/data/data.service';

@Component({
  selector: 'zp-menu',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  private _navigation = inject(NavigationScrollService);
  private _sideNavTrigger = inject(SideNavTriggerService);
  private _router = inject(Router);
  private _data = inject(DataService);

  $sections: WritableSignal<string[]> = signal(Object.values(SectionEnum));
  $editions: WritableSignal<string[]> = signal(Object.values(EditionEnum));
  $selectedEdition: Signal<EditionEnum> = computed(()=>this._data.$edition());

  navigateTo(id: string): void {
    this._navigation.scrollTo(id);
    this._sideNavTrigger.close();
  } 

  onEditionChange(edition: string): void {
    this._router.navigate([edition]);
    this._sideNavTrigger.close();
  }
}
