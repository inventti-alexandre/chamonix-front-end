import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../../../models/produto';

@Component({
  selector: 'app-mesa-pedido-produto',
  templateUrl: './mesa-pedido-produto.component.html'
})
export class MesaPedidoProdutoComponent implements OnInit {

  @Input() produto: Produto;

  constructor() { }

  ngOnInit() {
  }

}
