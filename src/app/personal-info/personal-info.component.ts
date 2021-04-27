import { Component, OnInit, Input} from '@angular/core';
import { Student } from '../myClasses/student';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  @Input() headerInfo: Student;

  constructor() { }

  ngOnInit(): void {
  }

}
