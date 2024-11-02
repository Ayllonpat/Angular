import { Component } from '@angular/core';
import { StudentDto } from '../../model/student.dto';

@Component({
  selector: 'app-form-add-alumno',
  templateUrl: './form-add-alumno.component.html',
  styleUrl: './form-add-alumno.component.css'
})
export class FormAddAlumnoComponent {

  genderList = ['Female', 'Male', 'Other'];
  referralSources = [
    'Buscando en Google',
    'A través de un amigo',
    'Por mi profesor'
  ];
  student = new StudentDto('', '', '', 18, '', '', '', '', '');
  submitted = false;
  nifLetter='';
  confirmPassword = ''; 
  passwordMismatch = false;

  constructor() {}

  checkPasswordMatch() {
    this.passwordMismatch = this.student.password !== this.confirmPassword;
  }
  
  calculateNifLetter() {
    const nifDigits = this.student.nif; 
    if (nifDigits.length === 8) { 
      const number = parseInt(nifDigits, 10); 
      const letters = 'TRWAGMYFPDXBNJZSQVHLCKE'; 
      this.nifLetter = letters[number % 23]; 
    } else {
      this.nifLetter = ''; 
    }
  }

  

  addStudent() {
    console.log(this.student);
    this.submitted = true;
  }

}
