import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { DataService } from '../../shared/services/data/data.service';
import { EditionEnum } from '../../data/global';

@Component({
  selector: 'zp-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  private _data = inject(DataService);

  constructor() {
    this._data.setDataByYear(EditionEnum.E2017);
  }

  $data: Signal<any> = computed(()=> this._data.$data());
}
