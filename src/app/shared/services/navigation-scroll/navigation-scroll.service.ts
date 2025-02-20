import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationScrollService {
  
  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
