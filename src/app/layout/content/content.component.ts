import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { DataService } from '../../shared/services/data/data.service';
import { EditionEnum } from '../../data/global';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'zp-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  private _data = inject(DataService);
  private route = inject(ActivatedRoute);

  constructor() {   
    this.route.params.subscribe(params => {      
      const year = params['year'];
      this._data.setDataByYear(year);    
    });   
  }

  $data: Signal<any> = computed(()=> this._data.$data());
}
