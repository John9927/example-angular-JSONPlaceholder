import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JSONPlaceholderService } from '../services/jsonplaceholder.service';
import { Data } from './../data';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

 data: Data;

  constructor(
    private route: ActivatedRoute,
    private JSONPlaceholder: JSONPlaceholderService,
  ) {

   }

  ngOnInit(): void {
    // this.getDataFromApi();
    this.getData();
  }

  // getDataFromApi(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.JSONPlaceholder.getData()
  //     .subscribe(data => this.data = data);
  // }

  getData(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.JSONPlaceholder.getDetail()
      .subscribe(id => this.data = id);
  }

}
