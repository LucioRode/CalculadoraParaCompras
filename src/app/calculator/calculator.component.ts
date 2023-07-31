import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  visor = "";
  ingreso = "";
  total: number = 0;
  memoriaParaBorrar: string[] = [];
  auxiliar: number = 0;  // se usa para convertir los string a number
  memoriaSumadora: number[] = [];
  precio: number = 0;
  multiplicador: number = 1;
  booleanaMultiplicador : boolean = false;



  constructor() {
  }

  ngOnInit(): void {
  }

  teclear(valor: string): void {
    

    /*
    if(this.booleanaMultiplicador !== true) {
      this.ingreso = this.ingreso + valor; // Cargo valor para formar precio
      this.visor = this.visor + valor;  // Cargo valor para mostrar por visor
      this.auxiliar = parseFloat(this.ingreso); // Hago la conversion String a Number
      this.precio = this.auxiliar;  // Guardo el Precio Ingresado
      this.memoriaParaBorrar.push(this.ingreso); // Paso valor al Array por si hay que borrar algun valor
      } else{
    }*/
  }

  onSumar(): void {
    if (this.visor !== "") {
      this.total = this.total + this.precio;
      this.visor = "";
      this.precio = 0;
      this.ingreso = "";
      this.memoriaParaBorrar = [];
    }


  }

  onMultip(): void {
  }

  onDelLastItem(): void {
    this.memoriaParaBorrar.pop();
    this.auxiliar = this.memoriaParaBorrar.length - 1;
    if (this.memoriaParaBorrar.length == 0) {
      this.visor = "";
      this.ingreso = "";
    } else {
      this.visor = this.memoriaParaBorrar[this.auxiliar];
      this.ingreso = this.memoriaParaBorrar[this.auxiliar];
    }
    this.auxiliar = 0;
    this.ingreso = "";
  }

  onReset(): void {
    this.visor = "";
    this.memoriaSumadora = [];
    this.memoriaParaBorrar = [];
    this.precio = 0;
    this.multiplicador = 1;
    this.total = 0;
  }

  resetVariables(): void{
    this.auxiliar = 0;
    this.visor = "";
    this.precio = 0;
    this.multiplicador = 1;
  }

}
