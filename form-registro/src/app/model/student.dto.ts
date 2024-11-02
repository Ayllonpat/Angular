import { EmailValidator } from "@angular/forms";

export class StudentDto {
    constructor(
      public name: string,
      public lastName: string,
      public gender: string,
      public age: number,
      public phone: string,
      public email: string,
      public nif: string,
      public nifLetter: string,
      public password: string,
      public referralSource: string = ''
    ) {}
  }