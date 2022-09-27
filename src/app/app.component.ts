import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { GoodModel } from './good.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService],
})
export class AppComponent implements OnInit {
  goods: GoodModel[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService
      .getGoods()
      .subscribe((data: any) => (this.goods = data['goodsList']));
  }
}
