import { Component, OnInit } from '@angular/core';

import { EmploymentService } from 'src/app/services/employment.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Employment } from 'src/app/models/employment.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employment-details',
  templateUrl: './employment-details.component.html',
  styleUrls: ['./employment-details.component.css']
})
export class EmploymentDetailsComponent implements OnInit {
  form: Employment = {
    companyName: '',
    jobTitle: '',
    startDate: '',
    endDate: '',
    jobDescription: ''
  };
  message = '';
  isSuccessful = false;

  constructor(private employmentService: EmploymentService, private token: TokenStorageService, private router: Router,
              private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.activeRouter.snapshot.params.id);
  }

  getTutorial(id: string): void {
    this.employmentService.get(id)
      .subscribe(
        data => {
          this.form = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateEmployment(): void {
    this.message = '';

    this.employmentService.update(this.form.id, this.form)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'Actualización exitosa ';
        },
        error => {
          console.log(error);
        });
  }

  deleteEmployment(): void {
    this.employmentService.delete(this.form.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        });
  }


}
