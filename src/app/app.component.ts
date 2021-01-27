import { Component } from '@angular/core';
import { JSONPlaceholderService } from './services/jsonplaceholder.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example-angular-JSONPlaceholder';

  data:Array<any>

  constructor(private JSONPlaceholder: JSONPlaceholderService) {
    this.data = new Array<any>()
  }

  getDataFromApi() {
    this.JSONPlaceholder.getData().subscribe((data) => {
      this.data = data;
    })
  }


}
