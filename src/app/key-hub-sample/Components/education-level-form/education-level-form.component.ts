import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {LookupModel} from '../../model/Lookup.model';
import {EducationLevel} from '../../../shared/const';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {EducationLevelService} from '../../services/education-level.service';

@Component({
  selector: 'app-education-level-form',
  templateUrl: './education-level-form.component.html',
  styleUrls: ['./education-level-form.component.css']
})
export class EducationLevelFormComponent implements OnInit {
  private eduLevels: LookupModel[] = [];
  public educationLevelForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<EducationLevelFormComponent>,
              private fb: FormBuilder,
              private educationLevelService: EducationLevelService) {
  }

  ngOnInit() {
    this.initForm();

    this.initStaticData();
  }


  initForm() {
    this.educationLevelForm = this.fb.group({
      EducationLevelId: new FormControl(),
      EndingDate: new FormControl(),
      EmployeeId: new FormControl()
    });
  }

  onSubmit() {
    this.educationLevelService.saveLevel(this.educationLevelForm.value)
      .subscribe(data => {
        alert(data);
        this.dialogRef.close();
      });
  }

  close() {
    this.dialogRef.close();

  }

  initStaticData() {

    let level: LookupModel = new LookupModel();
    EducationLevel.forEach(pair => {
      level = {
        'Id': pair.Id.toString(),
        'Name': pair.Name,
      };
      this.eduLevels.push(level);
    });


  }
}
