import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {EmployeeService} from '../../services/employee.service';
import {DepartmentModel} from '../../model/department.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeForm: FormGroup;

  departments: DepartmentModel[] = [
    {DepartmentId: 1, DepartmentName: 'IT'},
    {DepartmentId: 2, DepartmentName: 'Computer Engineering'},
    {DepartmentId: 3, DepartmentName: 'Software Engineering'},
  ];

  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    this.employeeForm = this.fb.group({
      FirstName: new FormControl(),
      MiddleName: new FormControl(),
      FatherName: new FormControl(),
      DepartmentId: new FormControl()
    });
  }

  onSubmit() {
    this.employeeService.saveEmployee(this.employeeForm.value)
      .subscribe(data => {
        alert(data);
      });
  }

  close() {
    history.back();
  }
}
