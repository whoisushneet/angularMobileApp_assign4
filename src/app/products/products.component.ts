import { Component, OnInit, Input } from '@angular/core';
import{Company, Products, Categories} from '../interfaceFile';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products : Products[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
