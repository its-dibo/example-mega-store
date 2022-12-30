import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: { rate: number; count: number };
  link: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  product!: Product;
  loading = true;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let productId = params.get('id');
      this.http
        .get<Product>(`https://fakestoreapi.com/products/${productId}`)
        .subscribe({
          next: (payload) => {
            this.product = payload;
          },
          error: (error) => console.error(error),
          complete: () => (this.loading = false),
        });
    });
  }
}
