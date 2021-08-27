import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-composto',
  templateUrl: './juros-composto.component.html',
  styleUrls: ['./juros-composto.component.css']
})
export class JurosCompostoComponent implements OnInit {
  VP: number;
  j: number;
  n: number;

  constructor() {
    this.VP = 100;
    this.j = 0.1;
    this.n = 5;
  }

  getValorFuturoParcial(n: number) {
    return this.VP * Math.pow(1 + this.j, n);
  }

  getValorFuturo() {
    return this.getValorFuturoParcial(this.n);
  }

  getJuros() {
    return this.getValorFuturo() - this.VP;
  }

  getValoresFuturos() {
    let list: number[] = [];
    for (let i = 1; i <= this.n; i++) {
      list.push(this.getValorFuturoParcial(i));
    }
    return list;
  }

  ngOnInit() {}
}
