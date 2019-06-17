import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySearchPageComponent } from './gallery-search-page.component';

describe('GallerySearchPageComponent', () => {
  let component: GallerySearchPageComponent;
  let fixture: ComponentFixture<GallerySearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerySearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
