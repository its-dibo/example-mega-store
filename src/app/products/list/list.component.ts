import { Component, OnInit } from '@angular/core';
import { Product } from '../details/details.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../details/details.component.scss'],
})
export class ListComponent implements OnInit {
  products!: Product[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://fakestoreapi.com/products?limit=10')
      .subscribe({
        next: (payload) => {
          this.products = payload;
        },
        error: (error) => {
          console.error(error);
        },
      });
  }
}
