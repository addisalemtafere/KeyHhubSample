import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  private submitted = false;


  unamePattern = '^[a-zA-Z ]*';
  pwdPattern = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$';
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    this.employeeForm = this.fb.group({
      FirstName: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(this.unamePattern)]),
      MiddleName: new FormControl('', [Validators.required, Validators.minLength(6)]),
      FatherName: new FormControl('', [Validators.required, Validators.minLength(6)]),
      DepartmentId: new FormControl('', [Validators.required])
    });
  }

  get f() {
    return this.employeeForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    this.employeeService.saveEmployee(this.employeeForm.value)
      .subscribe(data => {
        alert(data);
      });
  }

  close() {
    history.back();
  }
}
