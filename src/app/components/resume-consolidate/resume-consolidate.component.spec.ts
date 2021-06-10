import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeConsolidateComponent } from './resume-consolidate.component';

describe('ResumeConsolidateComponent', () => {
  let component: ResumeConsolidateComponent;
  let fixture: ComponentFixture<ResumeConsolidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeConsolidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeConsolidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
