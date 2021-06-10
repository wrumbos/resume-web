import { Component, OnInit } from '@angular/core';

import {Skill} from '../../models/skill.model';
import {SkillService} from 'src/app/services/skill.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  skills?: Skill[];
  currentSkill: Skill = {};
  currentIndex = -1;
  title = '';

  constructor(private skillService: SkillService, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.retrieveSkill();
  }

  retrieveSkill(): void {
    this.skillService.getAll(this.token.getUser().id)
      .subscribe(
        data => {
          this.skills = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActiveSkill(skill: Skill, index: number): void {
    this.currentSkill = skill;
    this.currentIndex = index;
  }

}
