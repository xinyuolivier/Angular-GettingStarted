import { Component, OnInit } from '@angular/core';

@Component({
  //selector is only needed when the component will be nested in another component
  //this page will be a part of routing to display
  
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  constructor() { }

  ngOnInit(): void {
  }

}
