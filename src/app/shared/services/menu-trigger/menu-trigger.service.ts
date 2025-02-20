import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuTriggerService {
  menuVisible: WritableSignal<boolean> = signal(false);

  toggleMenu(): void {
    this.menuVisible.update((value) => !value);
  }
}
