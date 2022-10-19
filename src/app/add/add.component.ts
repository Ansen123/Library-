import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  bookName=""
  authorName=""
  publishYear=""

  readvalues=()=>{
    let data={
      "bookName":this.bookName,
      "authorName":this.authorName,
      "publishYear":this.publishYear,
     
    }
    console.log(data)
    this.myapi.addBook(data).subscribe(
      (response)=>{
        alert("Data Added")
      }
    )


  }
  ngOnInit(): void {
  }

}
