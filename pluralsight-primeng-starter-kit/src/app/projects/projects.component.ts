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
      projectId: ['', [Validators.required, Validators.minLength(5)]],
      description:['My cool project', [Validators.required, Validators.maxLength(140)]]
    });
  }

  hasFormErrors(){
    return !this.projectForm.valid;
  }

  onSubmit(){
    alert(JSON.stringify(this.projectForm.value));
  }


}
