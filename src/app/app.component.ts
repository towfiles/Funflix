import { Component } from '@angular/core';
import {GalleryComponent} from './modules/gallery/gallery.component';
import {MatToolbar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FunFlix';
}
