import { Component, OnInit } from '@angular/core';

import { ResumeService } from 'src/app/services/resume.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Resume } from 'src/app/models/resume.model';
import { ActivatedRoute, Router } from '@angular/router';
import {Employment} from '../../models/employment.model';

@Component({
  selector: 'app-resume-details',
  templateUrl: './resume-details.component.html',
  styleUrls: ['./resume-details.component.css']
})
export class ResumeDetailsComponent implements OnInit {
  form: Resume = {
    fullname: '',
    address: '',
    zip: '',
    phone: '',
    aboutMe: ''
  };
  message = '';
  isSuccessful = false;

  constructor(private resumeService: ResumeService, private token: TokenStorageService, private router: Router,
              private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = '';
    this.getResume(this.token.getUser().id);
  }

  getResume(id: string): void {
    this.resumeService.get(id)
      .subscribe(
        data => {
          this.form = data;
        },
        error => {
          console.log(error);
        });
  }

  updateResume(): void {
    this.message = '';

    this.resumeService.update(this.form.id, this.form)
      .subscribe(
        response => {
          this.message = response.message ? response.message : 'Actualización exitosa ';
        },
        error => {
          console.log(error);
        });
  }

}
