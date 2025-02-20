import { Component } from '@angular/core';
import { HeaderComponent } from "./layout/header/header.component";
import { ContentComponent } from "./layout/content/content.component";
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { MenuComponent } from './layout/menu/menu.component';

@Component({
  selector: 'zp-root',
  standalone: true,
  imports: [ HeaderComponent, ContentComponent, SideNavComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'zlotpoziomek'; 
}
