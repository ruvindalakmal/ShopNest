import {Component} from '@angular/core';
import {TopHeaderComponent} from '../top-header/top-header.component';
import {TopMenuComponent} from './top-menu/top-menu.component';
import {MainMenuComponent} from './main-menu/main-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    TopMenuComponent,
    MainMenuComponent
  ],
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}
