import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  step = 0;
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  close() {
    history.back();
  }
}
