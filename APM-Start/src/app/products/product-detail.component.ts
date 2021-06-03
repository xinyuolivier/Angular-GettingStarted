import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  //selector is only needed when the component will be nested in another component
  //this page will be a part of routing to display
  
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  //declare a property of a product
  product: IProduct | undefined; //define this type using interface
  constructor(private route: ActivatedRoute,
              private router: Router) { } //add parameter in the constructor

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // type of id: number
    this.pageTitle += ` ${id}`; //es2015 to define a template string to display id
    
  }
  //add return method to navigate back
  onBack(): void {
    this.router.navigate(['/products']);
  }

}
