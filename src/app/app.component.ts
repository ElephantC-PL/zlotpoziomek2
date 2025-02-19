import { Component } from '@angular/core';
import { HeaderComponent } from "./layout/header/header.component";
import { ContentComponent } from "./layout/content/content.component";

@Component({
  selector: 'zp-root',
  standalone: true,
  imports: [ HeaderComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'zlotpoziomek'; 
}
