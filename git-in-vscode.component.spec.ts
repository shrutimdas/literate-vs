import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitInVscodeComponent } from './git-in-vscode.component';

describe('GitInVscodeComponent', () => {
  let component: GitInVscodeComponent;
  let fixture: ComponentFixture<GitInVscodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitInVscodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitInVscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
