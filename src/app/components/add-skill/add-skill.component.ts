import { Component, OnInit } from '@angular/core';

import {SkillService} from 'src/app/services/skill.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  form: any = {
    name: null,
    selfAppraisal: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private skillService: SkillService, private token: TokenStorageService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.skillService.create(this.form, this.token.getUser().id).subscribe(
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
