import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'at-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent  {

  projectForm: FormGroup;

  constructor(private fb: FormBuilder) {

   }

  ngOnInit(){
    this.projectForm = this.fb.group({
      projectId: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  hasErrors(){
    return !this.projectForm.valid;
  }

  fieldErrors(field: string){
    let controlState = this.projectForm.controls[field];
    return (controlState.dirty && controlState.errors) ? controlState.errors : null;
  }


}
