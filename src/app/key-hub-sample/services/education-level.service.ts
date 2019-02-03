import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from '../config/config.service';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {EducationLevelModel} from '../model/education-level.model';

@Injectable({
  providedIn: 'root'
})
export class EducationLevelService {
  private educationLevelList: EducationLevelModel[];


  constructor(private httpClient: HttpClient,
              private config: ConfigService) {
  }

  private readonly _EducationLevelUrl: string = 'api/EducationLevel';


  get EducationLevelUrl() {
    return this.config.baseUrl + this._EducationLevelUrl;
  }

  getAll(): Observable<EducationLevelModel[]> {
    return this.httpClient.get<EducationLevelModel[]>(this.EducationLevelUrl)
      .pipe(map(data => this.educationLevelList = data),
        catchError(this.config.handleError));
  }


  saveLevel(emp: EducationLevelModel): Observable<any> {
    console.log(emp);
    return this.httpClient.post<EducationLevelModel>(this.EducationLevelUrl, emp)
      .pipe(map(data => {
        return data;
      }), catchError(this.config.handleError));

  }

  deleteEducationLevel(id): Observable<any> {
    const endpointUrl = `${this.EducationLevelUrl}/${id}`;
    return this.httpClient.delete<boolean>(this.EducationLevelUrl).pipe(
      map(result => {
        return result;
      }), catchError(this.config.handleError));

  }


  getEducationLevel(id): Observable<any> {
    const endpointUrl = `${this.EducationLevelUrl}/${id}`;
    return this.httpClient.get<EducationLevelModel>(endpointUrl).pipe(
      map(EducationLevel => {
        return EducationLevel;
      }), catchError(this.config.handleError));
  }

}
