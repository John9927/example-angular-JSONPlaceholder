import { Component } from '@angular/core';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent  {

  data:Array<any>

  constructor(private JSONPlaceholder: JSONPlaceholderService) {
    this.data = new Array<any>()
  }

  getDataFromApi() {
    this.JSONPlaceholder.getData().subscribe(data => this.data = data);
  }

}
