import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { AddEmploymentComponent } from './components/add-employment/add-employment.component';
import { EmploymentDetailsComponent } from './components/employment-details/employment-details.component';
import { EmploymentListComponent } from './components/employment-list/employment-list.component';
import { PhotoComponent } from './components/photo/photo.component';
import { ResumeDetailsComponent } from './components/resume-details/resume-details.component';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { EducationDetailsComponent } from './components/education-details/education-details.component';
import { EducationListComponent } from './components/education-list/education-list.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { SkillDetailsComponent } from './components/skill-details/skill-details.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { ResumeConsolidateComponent } from './components/resume-consolidate/resume-consolidate.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'createEmployment', component: AddEmploymentComponent, canActivate: [AuthGuard] },
  { path: 'employment', component: EmploymentListComponent, canActivate: [AuthGuard] },
  { path: 'employment/:id', component: EmploymentDetailsComponent, canActivate: [AuthGuard] },
  { path: 'createEducation', component: AddEducationComponent, canActivate: [AuthGuard] },
  { path: 'education', component: EducationListComponent, canActivate: [AuthGuard] },
  { path: 'education/:id', component: EducationDetailsComponent, canActivate: [AuthGuard] },
  { path: 'createSkill', component: AddSkillComponent, canActivate: [AuthGuard] },
  { path: 'skill', component: SkillListComponent, canActivate: [AuthGuard] },
  { path: 'skill/:id', component: SkillDetailsComponent, canActivate: [AuthGuard] },
  { path: 'resume', component: ResumeConsolidateComponent},
  { path: 'photo', component: PhotoComponent, canActivate: [AuthGuard] },
  { path: 'personal', component: ResumeDetailsComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'resume/:userName', component: ResumeConsolidateComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
