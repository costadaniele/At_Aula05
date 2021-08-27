import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.css']
})
export class JurosSimplesComponent implements OnInit {
  VP: number;
  j: number;
  n: number;

  constructor() {
    this.VP = 100;
    this.j = 0.1;
    this.n = 5;
  }

  getValorFuturo() {
    return this.VP * (1 + this.j * this.n);
  }

  getJuros() {
    return this.getValorFuturo() - this.VP;
  }

  ngOnInit() {}
}
