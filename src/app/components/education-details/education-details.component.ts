import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {Education} from '../../models/education.model';
import {EducationService} from '../../services/education.service';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent implements OnInit {
  form: Education = {
    institutionName: '',
    tittle: '',
    typeEducation: '',
    startDate: '',
    endDate: '',
    educationDescription: ''
  };
  list = [
    { id: 'EDUCATION_UNIVERSITY', name: "Universidad" },
    { id: 'EDUCATION_CERTIFICATIONS', name: "Certificación" }
  ];
  message = '';
  isSuccessful = false;

  constructor(private educationService: EducationService, private token: TokenStorageService, private router: Router,
              private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = '';
    this.getEducation(this.activeRouter.snapshot.params.id);
  }

  getEducation(id: string): void {
    this.educationService.get(id)
      .subscribe(
        data => {
          this.form = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateEducation(): void {
    this.message = '';

    this.educationService.update(this.form.id, this.form)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'Actualización exitosa ';
        },
        error => {
          console.log(error);
        });
  }

  deleteEducation(): void {
    this.educationService.delete(this.form.id)
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
