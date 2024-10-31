import { Component } from '@angular/core';
import { StudentDto } from '../../model/student.dto';

@Component({
  selector: 'app-form-add-alumno',
  templateUrl: './form-add-alumno.component.html',
  styleUrl: './form-add-alumno.component.css'
})
export class FormAddAlumnoComponent {

  genderList = ['Female', 'Male', 'Other'];
  student = new StudentDto('', '', '', 18, '');
  submitted = false;

  constructor() {}

  addStudent() {
    console.log(this.student);
    this.submitted = true;
  }

}
