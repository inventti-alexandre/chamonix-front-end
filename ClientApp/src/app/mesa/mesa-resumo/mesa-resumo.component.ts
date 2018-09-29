import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from '../../../models/mesa/pedido';

@Component({
  selector: 'app-mesa-resumo',
  templateUrl: './mesa-resumo.component.html'
})
export class MesaResumoComponent implements OnInit {

  @Input() pedido: Pedido;
  consumo = 0;

  constructor() { }

  ngOnInit() {
  }

}
