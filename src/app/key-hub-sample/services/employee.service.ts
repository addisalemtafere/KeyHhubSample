import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeeModel} from '../model/employee.model';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ConfigService} from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList: EmployeeModel[];


  constructor(private httpClient: HttpClient,
              private config: ConfigService) {
  }

  private readonly _employeeUrl: string = 'api/employee';


  get employeeUrl() {
    return this.config.baseUrl + this._employeeUrl;
  }

  getAll(): Observable<EmployeeModel[]> {
    return this.httpClient.get<EmployeeModel[]>(this.employeeUrl)
      .pipe(map(emloyeeList => this.employeeList = emloyeeList),
        catchError(this.config.handleError));
  }


  saveEmployee(emp: EmployeeModel): Observable<any> {
    console.log(emp);
    return this.httpClient.post<EmployeeModel>(this.employeeUrl, emp)
      .pipe(map(data => {
        return data;
      }), catchError(this.config.handleError));

  }

  deleteEmployee(id): Observable<any> {
    const endpointUrl = `${this.employeeUrl}/${id}`;
    return this.httpClient.delete<boolean>(this.employeeUrl).pipe(
      map(result => {
        return result;
      }), catchError(this.config.handleError));

  }


  getEmployee(id): Observable<any> {
    const endpointUrl = `${this.employeeUrl}/${id}`;
    return this.httpClient.get<EmployeeModel>(endpointUrl).pipe(
      map(employee => {
        return employee;
      }), catchError(this.config.handleError));
  }

}
