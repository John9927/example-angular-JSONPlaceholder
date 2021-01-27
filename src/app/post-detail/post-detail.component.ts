import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  data:Array<any>

  constructor(
    private route: ActivatedRoute,
    private JSONPlaceholder: JSONPlaceholderService,
  ) {
    this.data = new Array<any>()
   }

  ngOnInit(): void {
  }

  getDataFromApi(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.JSONPlaceholder.getData(id)
      .subscribe(data => this.data = data);
  }

}
