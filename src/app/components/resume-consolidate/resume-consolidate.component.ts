import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {TokenStorageService} from '../../services/token-storage.service';

import { base64StringToBlob } from 'blob-util';
import {DomSanitizer} from '@angular/platform-browser';

const resume = '/resume';

import { ResumeService } from 'src/app/services/resume.service';
import { Resume } from 'src/app/models/resume.model';
import {Education} from '../../models/education.model';
import {Employment} from '../../models/employment.model';
import {Skill} from '../../models/skill.model';

@Component({
  selector: 'app-resume-consolidate',
  templateUrl: './resume-consolidate.component.html',
  styleUrls: ['./resume-consolidate.component.css']
})
export class ResumeConsolidateComponent implements OnInit {

  resume: Resume = {};
  hasBoolean?: boolean;
  imageBlobUrl?: any;
  educations?: Education[];
  employments?: Employment[];
  skills?: Skill[];
  userName = '';

  constructor(private router: Router, private token: TokenStorageService, private activeRouter: ActivatedRoute,
              private resumeService: ResumeService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.userName = this.router.url === resume ? this.token.getUser().username : this.activeRouter.snapshot.params.userName;
    this.getResumeConsolidate(this.userName);
  }

  getResumeConsolidate(userName: string): void {
    this.resumeService.consolidate(userName)
      .subscribe(
        data => {
          this.resume = data.resume;
          this.educations = data.education;
          this.employments = data.employment;
          this.skills = data.skill;
          this.photo(data.photo.data, data.photo.type);
          this.hasBoolean = true;
        },
        error => {
          console.log(error);
        });
  }

  photo(data: any, type: any): void{
    const blob = base64StringToBlob(data, type);
    this.imageBlobUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
    this.hasBoolean = blob.size > 1;
  }

  getTypeEducation(typeEducation: string): string{
    return typeEducation === 'EDUCATION_UNIVERSITY' ? "Universitario" : "Certificación";
  }

}
