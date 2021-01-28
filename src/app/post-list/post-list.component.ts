import { Component } from '@angular/core';

import { JSONPlaceholderService } from '../services/jsonplaceholder.service';
import { Data } from './../data';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent  {

 public data: Data[] | undefined;

  constructor(private JSONPlaceholder: JSONPlaceholderService) {}

  getDataFromApi() {
    this.JSONPlaceholder.getData().subscribe(data => this.data = data);
  }

}
