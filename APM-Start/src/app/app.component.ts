import { Component } from "@angular/core";

@Component ({
  selector: 'pm-root', /*the name of the component when we used as html directive */
  template: ` 
  <div><h1>{{pageTitle}}</h1>
    <div>My First Component</div>
  </div>` /* definition of the html file that we want to display */
})
export class AppComponent{
  pageTitle: string = 'Acme Product Management';
}