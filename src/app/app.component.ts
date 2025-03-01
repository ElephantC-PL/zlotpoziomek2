import { Component } from '@angular/core';
import { HeaderComponent } from "./layout/header/header.component";
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { MenuComponent } from './layout/menu/menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'zp-root',
  standalone: true,
  imports: [ HeaderComponent, SideNavComponent, MenuComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'zlotpoziomek'; 
}
