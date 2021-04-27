import { Component, OnInit, Input } from '@angular/core';
import{Company, Products, Categories} from '../interfaceFile';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {

  @Input() companyInfo : Company;

  constructor() { }

  ngOnInit(): void {
  }

}
