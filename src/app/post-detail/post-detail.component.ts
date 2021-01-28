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

 public data: Data | undefined;

  constructor(
    private route: ActivatedRoute,
    private JSONPlaceholder: JSONPlaceholderService,
  ) {

   }

  ngOnInit(): void {
    this.getData();
  }


  getData(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.JSONPlaceholder.getDetail(id)
      .subscribe(post => this.data = post);
  }

}
