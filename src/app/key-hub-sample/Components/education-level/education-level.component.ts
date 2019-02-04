import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatTableDataSource} from '@angular/material';
import {EducationLevelFormComponent} from '../education-level-form/education-level-form.component';
import {EducationLevelModel} from '../../model/education-level.model';

@Component({
  selector: 'app-education-level',
  templateUrl: './education-level.component.html',
  styleUrls: ['./education-level.component.css']
})
export class EducationLevelComponent implements OnInit {
  displayedColumns: string[] = ['position', 'EducationLevel', 'EndingYear'];
  dataSource = new MatTableDataSource<EducationLevelModel>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }


  addEducationLevel() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      anyData: 111,
    };
    this.dialog.open(EducationLevelFormComponent, dialogConfig);
  }

}

const ELEMENT_DATA: EducationLevelModel[] = [
  {EducationLevelId: 1, Name: 'Master', EndingYear: '12/2/2019'},
  {EducationLevelId: 2, Name: 'Master', EndingYear: '12/2/2019'},
  {EducationLevelId: 3, Name: 'Master', EndingYear: '12/2/2019'},

];
