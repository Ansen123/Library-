import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private myapi:ApiService) {}

    book=""
   readvalue=()=>{
    let data={
      "book":this.book
    }
    console.log(data)
    this.myapi.searchBook(data).subscribe(
      (res)=>{

      }
    )
   }
   data:any=[{
    "id": 8,
    "bookName": "ab",
    "authorName": "ad",
    "publishYear": 2000
}]
    

  ngOnInit(): void {
  }

}
