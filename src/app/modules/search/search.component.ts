import {Component,
        EventEmitter,
        ViewChild,
        AfterViewInit,
        ElementRef,
        Output, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ElementDef} from '@angular/core/src/view';
import {FormControl} from '@angular/forms';
import {GenreType} from '../../enums/genre-type.enum';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit, OnInit {

  constructor(private _router: Router) { }

    @ViewChild('searchContainer') searchContainer: ElementRef;

  public isHidden: boolean;


  public ShowSearchBar(isTrue: boolean, event){

      this.searchContainer.nativeElement.style.visibility  =
          (!isTrue && event.srcElement.className !== 'search-input')  ? 'hidden' : 'visible';
          if (isTrue) {
            this.searchContainer.nativeElement.style.visibility  = 'visible';
            this.isHidden = (event.srcElement.id === 'filter_list');
          }
          else if(event.srcElement.className == 'search-container'){
            this.searchContainer.nativeElement.style.visibility  = 'hidden';
          }
          else {
            this.searchContainer.nativeElement.style.visibility  = 'visible';
          }



      const element: any = document.getElementsByClassName('search-input')[0];
      //ocument.body.style.filter = 'blur(8px)';
      element.focus();



  }


  public SearchMovies(event: any){
    //navigate to gallery in other to search movies
    this._router.navigate(['find-movies', event.target.value]);

  }

  public FilterByGenre() {
      if(this.dropdownList !== undefined && this.dropdownList.length > 0){

        let listOfGenres = [];

        this.selectedItems.forEach(function(element){
          listOfGenres.push(element.itemName);
        });
  
          this._router.navigate(['filter-movies', listOfGenres.join(',')]);
      }
  }


    ngAfterViewInit(){
        document.body.appendChild(this.searchContainer.nativeElement);

    }



    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};


    onItemSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    OnItemDeSelect(item:any){
        console.log(item);
        console.log(this.selectedItems);
    }
    onSelectAll(items: any){
        console.log(items);
    }
    onDeSelectAll(items: any){
        console.log(items);
    }




    ngOnInit() {

        Object.keys(GenreType).map(key => {
            this.dropdownList.push({"id": key,"itemName": GenreType[key]});
        });




        this.dropdownSettings = {
            singleSelection: false,
            text:"Select Countries",
            selectAllText:'Select All',
            unSelectAllText:'UnSelect All',
            enableSearchFilter: true,
            classes:""
        };




    }


}
