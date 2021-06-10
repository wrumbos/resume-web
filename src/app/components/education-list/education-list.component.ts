import { Component, OnInit } from '@angular/core';

import {Education} from '../../models/education.model';
import {EducationService} from '../../services/education.service';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {

  educations?: Education[];
  currentEducation: Education = {};
  currentIndex = -1;
  title = '';

  constructor(private educationService: EducationService, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.retrieveEducations();
  }

  retrieveEducations(): void {
    this.educationService.getAll(this.token.getUser().id)
      .subscribe(
        data => {
          this.educations = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActiveEducations(education: Education, index: number): void {
    this.currentEducation = education;
    this.currentIndex = index;
  }

  getTypeEducation(typeEducation: string): string{
    return typeEducation === 'EDUCATION_UNIVERSITY' ? "Universitario" : "Certificación";
  }

}
