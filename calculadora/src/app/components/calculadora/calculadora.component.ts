import { Component, getNgModuleById } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  valor1 = '';
  valor2 = '';
  resultado = '';
  operacion = '';

  cero = '0';
  uno = '1';
  dos = '2';
  tres = '3';
  cuatro = '4';
  cinco = '5';
  seis = '6';
  siete = '7';
  ocho = '8';
  nueve = '9';
  menos = '-';
  mas = '+';
  igual = '=';

  presionarNumero(numero: string) {
    if (this.operacion === '') {
      this.valor1 += numero; 
    } else {
      this.valor2 += numero; 
    }
  }

  presionarOperacion(op: string) {
    
    if (this.valor1) {
      this.operacion = op; 
    }
    
    if (this.resultado) {
      this.valor1 = this.resultado; 
      this.resultado = ''; 
      this.valor2 = ''; 
    }
  }

  calcular() {
    if (this.valor1 && this.valor2) {
      const num1 = parseFloat(this.valor1);
      const num2 = parseFloat(this.valor2);
      switch (this.operacion) {
        case '+':
          this.resultado = (num1 + num2).toString();
          break;
        case '-':
          this.resultado = (num1 - num2).toString();
          break;
      }
      
      this.valor1 = this.resultado; 
      this.valor2 = ''; 
      this.operacion = ''; 
    } else if (this.valor1) {
      
      this.resultado = this.valor1; 
    }
  }

  borrar() {
    this.valor1 = '';
    this.valor2 = '';
    this.resultado = '';
    this.operacion = '';
  }
  
}
