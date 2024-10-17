import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  allColumns: string[] = ['studentNumber', 'firstName', 'lastName', 'nif', 'age', 'course'];
  
  displayedColumns: string[] = [...this.allColumns];

  columnsVisibility: { [key: string]: boolean } = {

    studentNumber: true,
    firstName: true,
    lastName: true,
    nif: true,
    age: true,
    course: true
    
  };

  students = [

    { studentNumber: 1, firstName: 'Juan', lastName: 'Pérez', nif: '12345678A', age: 20, course: 'Matemáticas' },
    { studentNumber: 2, firstName: 'María', lastName: 'López', nif: '87654321B', age: 22, course: 'Física' },
    { studentNumber: 3, firstName: 'Carlos', lastName: 'García', nif: '45678912C', age: 21, course: 'Química' }
  ];

  toggleColumn(column: string) {
    if (this.columnsVisibility[column]) {

      if (!this.displayedColumns.includes(column)) {
        this.displayedColumns.push(column);
      }

    } else {

      this.displayedColumns = this.displayedColumns.filter(col => col !== column);

    }
  }
}
