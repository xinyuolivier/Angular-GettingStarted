import { Component } from "@angular/core";

@Component ({
  selector: 'pm-root', /*the name of the component when we used as html directive */
  template: ` 
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class = 'navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
      <li><a class='nav-link' routerLink='/products'>Product List</a></li>
    </ul>
  </nav>
  <div class= 'container'>
    <router-outlet></router-outlet>
  </div>
    ` /* definition of the html file that we want to display */
})
export class AppComponent{
  pageTitle: string = 'Acme Product Management';
} 