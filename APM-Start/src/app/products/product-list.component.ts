import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls: ['./product-list.component.css']

})
export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    // replace this line by getter and setter listFilter: string = 'cart';
    private _listFilter: string = ''; //initialize _listFilter as an empty string
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In setter:', this._listFilter);
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] = [];//define a properties

    products: IProduct[] = [
        
    ];
    //injecting the service
    constructor(private productService: ProductService) {

    }
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().includes(filterBy)

        );
    }

    //set the initial value of setter
    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
        this.listFilter = 'cart'
    }

    onRatingClicked(message:string):void {
        this.pageTitle = 'Product List: ' + message;
    }
}