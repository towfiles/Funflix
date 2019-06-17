import {Component,
        EventEmitter,
        ViewChild,
        AfterViewInit,
        ElementRef,
        Output, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {ElementDef} from '@angular/core/src/view';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit, OnInit {

  constructor(private _router: Router) { }

    @ViewChild('searchContainer') searchContainer: ElementRef;

  public isHidden: boolean;


  public ShowSearchBar(isTrue: boolean, event){

      this.searchContainer.nativeElement.style.visibility  =
          (!isTrue && event.srcElement.className !== 'search-input')  ? 'hidden' : 'visible';

      console.log(event.srcElement);


      this.isHidden = (event.srcElement.id === 'filter_list');


      const element: any = document.getElementsByClassName('search-input')[0];
      //ocument.body.style.filter = 'blur(8px)';
      element.focus();



  }


  public SearchMovies(event: any){
    //navigate to gallery in other to search movies
    this._router.navigate(['find-movies', event.target.value]);

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


        this.dropdownList = [
            {"id":1,"itemName":"India"},
            {"id":2,"itemName":"Singapore"},
            {"id":3,"itemName":"Australia"},
            {"id":4,"itemName":"Canada"},
            {"id":5,"itemName":"South Korea"},
            {"id":6,"itemName":"Germany"},
            {"id":7,"itemName":"France"},
            {"id":8,"itemName":"Russia"},
            {"id":9,"itemName":"Italy"},
            {"id":10,"itemName":"Sweden"}
        ];



        this.dropdownSettings = {
            singleSelection: false,
            text:"Select Countries",
            selectAllText:'Select All',
            unSelectAllText:'UnSelect All',
            enableSearchFilter: true,
            classes:"search-input"
        };




    }


}
