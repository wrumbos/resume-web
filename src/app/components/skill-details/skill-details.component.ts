import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import {Skill} from '../../models/skill.model';
import {SkillService} from 'src/app/services/skill.service';
import {TokenStorageService} from '../../services/token-storage.service';


@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit {
  form: Skill = {
    name: '',
    selfAppraisal: ''
  };
  message = '';
  isSuccessful = false;

  constructor(private skillService: SkillService, private token: TokenStorageService, private router: Router,
              private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = '';
    this.getSkill(this.activeRouter.snapshot.params.id);
  }

  getSkill(id: string): void {
    this.skillService.get(id)
      .subscribe(
        data => {
          this.form = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateSkill(): void {
    this.message = '';

    this.skillService.update(this.form.id, this.form)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'Actualización exitosa ';
        },
        error => {
          console.log(error);
        });
  }

  deleteSkill(): void {
    this.skillService.delete(this.form.id)
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
