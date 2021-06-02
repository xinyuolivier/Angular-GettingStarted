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
    errorMessage: string = '';
    // replace this line by getter and setter listFilter: string = 'cart';
    private _listFilter: string = ''; //initialize _listFilter as an empty string
    sub: any;
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
        this.sub = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });
        this.filteredProducts = this.products
     }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    onRatingClicked(message:string):void {
        this.pageTitle = 'Product List: ' + message;
    }
}