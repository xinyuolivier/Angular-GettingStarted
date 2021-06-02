import { Injectable } from "@angular/core";
import {IProduct} from "./product";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import { Observable, throwError } from "rxjs";

@Injectable({
    providedIn: 'root' // the service is available to the entire application
})

export class ProductService {
//URL to send the request
    private productUrl = 'api/products/products.json';
//constructor to inject the HttpClient dependency to variable http
    constructor(private http: HttpClient) {

    }
    getProducts(): Observable <IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log ('All', JSON.stringify(data))), //pass in a second operator with a comma
            catchError(this.handleError)
        );
    }
    private handleError(err: HttpErrorResponse) {
        //in a real world app, we may send the server to some remote logging infrastructure
        //instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side of network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
    
}