import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NavigationScrollService } from '../../shared/services/navigation-scroll/navigation-scroll.service';

@Component({
  selector: 'zp-header',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, RouterModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private navigation = inject(NavigationScrollService);

  navigateTo(id: string): void {
    this.navigation.scrollTo(id);
  }
}