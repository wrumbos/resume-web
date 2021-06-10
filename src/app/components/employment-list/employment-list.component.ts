import { Component, OnInit } from '@angular/core';

import { EmploymentService } from 'src/app/services/employment.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Employment } from 'src/app/models/employment.model';

@Component({
  selector: 'app-employment-list',
  templateUrl: './employment-list.component.html',
  styleUrls: ['./employment-list.component.css']
})
export class EmploymentListComponent implements OnInit {

  employments?: Employment[];
  currentEmployment: Employment = {};
  currentIndex = -1;
  title = '';

  constructor(private employmentService: EmploymentService, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.retrieveEmployments();
  }

  retrieveEmployments(): void {
    this.employmentService.getAll(this.token.getUser().id)
      .subscribe(
        data => {
          this.employments = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveEmployments();
    this.currentEmployment = {};
    this.currentIndex = -1;
  }
  setActiveEmployments(tutorial: Employment, index: number): void {
    this.currentEmployment = tutorial;
    this.currentIndex = index;
  }

}
