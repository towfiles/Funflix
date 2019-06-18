import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MatIconModule, MatToolbarModule, MatCardModule} from '@angular/material';
import {SearchModule} from './modules/search/search.module';
import {RouterModule} from '@angular/router';
import {AppRouteModule} from './app-route.module';
import {GalleryComponent} from './modules/gallery/gallery.component';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, GalleryComponent
      ],
        imports : [
            MatIconModule, MatToolbarModule,
            SearchModule, RouterModule, AppRouteModule, MatCardModule
        ],
        providers: [
            { provide: APP_BASE_HREF, useValue: '/' }

        ]
    }).compileComponents();
  }));

  it('should create the app and create all other components', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FunFlix'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('FunFlix');
  });



});
