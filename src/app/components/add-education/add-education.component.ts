import { Component, OnInit } from '@angular/core';

import {EducationService} from 'src/app/services/education.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {
  form: any = {
    institutionName: null,
    tittle: null,
    typeEducation: null,
    startDate: null,
    endDate: null,
    educationDescription: null
  };
  list = [
    { id: 'EDUCATION_UNIVERSITY', name: "Universidad" },
    { id: 'EDUCATION_CERTIFICATIONS', name: "Certificación" }
  ];
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private educationService: EducationService, private token: TokenStorageService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.educationService.create(this.form, this.token.getUser().id).subscribe(
      response => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
