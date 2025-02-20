import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavTriggerService {
  $visible: WritableSignal<boolean> = signal(false);

  toggle(): void {
    this.$visible.update((value) => !value);
  }

  close(): void {
    this.$visible.update(() => false);
  }

  open(): void {
    this.$visible.update(() => true);
  }
}
