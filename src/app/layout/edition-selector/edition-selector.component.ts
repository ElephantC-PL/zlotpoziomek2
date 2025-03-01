import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { MatMenuModule} from '@angular/material/menu';
import { DataService } from '../../shared/services/data/data.service';
import { EditionEnum } from '../../data/global';
import { Router } from '@angular/router';
import { SideNavTriggerService } from '../../shared/services/side-nav-trigger/side-nav-trigger.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'zp-edition-selector',
  standalone: true,
  imports: [ MatButtonModule, MatMenuModule],
  templateUrl: './edition-selector.component.html',
  styleUrl: './edition-selector.component.scss'
})
export class EditionSelectorComponent {  
  private _data = inject(DataService);
  private _router = inject(Router);
  private _sideNavTrigger = inject(SideNavTriggerService);

  $editions: WritableSignal<string[]> = signal(Object.values(EditionEnum));
  $selectedEdition: Signal<EditionEnum> = computed(()=>this._data.$edition());

  onEditionChange(edition: string): void {
    this._router.navigate([edition]);
    this._sideNavTrigger.close();
  }
}
