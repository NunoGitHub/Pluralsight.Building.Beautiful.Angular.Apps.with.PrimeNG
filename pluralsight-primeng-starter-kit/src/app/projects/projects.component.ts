import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'at-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent  {

  projectForm: FormGroup;

  minProjectDate= new Date();

  allDevs=[
    {label: 'Jill', value: 'Jill Cool'},
    {label: 'Joe', value: 'Joe Cool'},
    {label: 'Mary', value: 'Mary Cool'},
    {label: 'Susan', value: 'Susan Cool'},
    {label: 'Phil', value: 'Phil Cool'},
    {label: 'Karen', value: 'Karen Cool'},
    {label: 'Chris', value: 'Chris Cool'},
    {label: 'Si', value: 'Si Cool'},
    {label: 'Terri', value: 'Terri Cool'},

  ]

  constructor(private fb: FormBuilder) {

   }

  ngOnInit(){
    this.projectForm = this.fb.group({
      projectId: ['', [Validators.required, Validators.minLength(5)]],
      description:['My cool project', [Validators.required, Validators.maxLength(140)]],
      startDate: [new Date(), [Validators.required]],
      projectType: ['B'],
      selectedDevs: ['']
    });
  }

  hasFormErrors(){
    return !this.projectForm.valid;
  }

  onSubmit(){
    alert(JSON.stringify(this.projectForm.value));
  }


}
