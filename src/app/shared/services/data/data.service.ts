import { Injectable, signal, WritableSignal } from '@angular/core';
import { EditionEnum } from '../../../data/global';
import { editionsMap } from '../../../data/all-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  $data: WritableSignal<any> = signal(null);

  setDataByYear(edition: EditionEnum): void {
    const data = editionsMap[edition];
    if(data) this.$data.set(data);
  }
}
