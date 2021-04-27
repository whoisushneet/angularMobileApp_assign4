import { Component } from '@angular/core';
import{Student} from './myClasses/student';
import{Company, Products, Categories} from './interfaceFile';

import PR from '../assets/data/A4.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assign4';
  bio:Student= {
    sid:991000000, fname: "Ushneet",lname: "Kaur", username: "kaurus", imgName: "me"};

    companyMain : Company = PR.company;
    categoryMain : Categories[] = PR.categories;
    productsMain : Products[] = PR.products;
    
}
