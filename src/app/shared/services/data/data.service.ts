import { Injectable, signal, WritableSignal } from '@angular/core';
import { EditionEnum, IncomingEdition } from '../../../data/global';
import { editionsMap } from '../../../data/all-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  $data: WritableSignal<any> = signal(null);

  setDataByYear(edition?: EditionEnum): void {
    if(!edition) edition = IncomingEdition;
    const data = editionsMap[edition];
    if(data) this.$data.set(data);
  }
}
