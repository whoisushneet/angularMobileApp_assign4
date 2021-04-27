import { Component, OnInit, Input} from '@angular/core';
import{Company, Products, Categories} from '../interfaceFile';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css']
})
export class ProductsByCategoryComponent implements OnInit {

  @Input() categories : Categories[];
  @Input() products : Products[];

  outArea: string;
  imgArea: string;

  displayJSON(id) {
      for(let c of this.categories) {
        if(c.catid===id) {
          this.imgArea = `
          <img src="assets/img/${c.catimg}" width="150px">
          `;
        }
      }
  
      this.outArea = `<h2> Product List for category ${id}:</h2>`;
      this.outArea += 
      `<table>
        <tr>
          <th>ProdutID</th> <th>Name</th> <th>Price</th> <th>Brand</th> <th>RatingAvg</th>
        </tr>
      `;
  
      for(let cls of this.products) {
        if(cls.Category===id) {
          this.outArea += 
          `
            <tr>
              <td>${cls.ProductID}</td>
              <td>${cls.Name}</td>
              <td>${cls.Price}</td>
              <td>${cls.Brand}</td>
              <td>${cls.RatingAvg}</td>
            </tr>
          `;
        }
      }
      this.outArea += `
      </table>`;
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
