import { Component, OnInit } from '@angular/core';

import { EmploymentService } from 'src/app/services/employment.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-add-employment',
  templateUrl: './add-employment.component.html',
  styleUrls: ['./add-employment.component.css']
})

export class AddEmploymentComponent implements OnInit {
  form: any = {
    companyName: null,
    jobTitle: null,
    startDate: null,
    endDate: null,
    jobDescription: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private employmentService: EmploymentService, private token: TokenStorageService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.employmentService.create(this.form, this.token.getUser().id).subscribe(
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
