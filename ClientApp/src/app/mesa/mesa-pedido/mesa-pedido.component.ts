import { Component, OnInit, Input } from '@angular/core';
import { CategoriaService } from '../../../services/categoria/categoria.service';
import { Categoria } from '../../../models/categoria';
import { Pedido } from '../../../models/mesa/pedido';
import { Produto } from '../../../models/produto';

@Component({
  selector: 'app-mesa-pedido',
  templateUrl: './mesa-pedido.component.html'
})
export class MesaPedidoComponent implements OnInit {

  @Input() pedido: Pedido;
  categoria = {} as Categoria;
  produto = {} as Produto;
  modalCategoria = true;
  modalProduto = false;

  constructor() { }

  ngOnInit() {
    this.categoria = null;
    this.produto = null;
  }

  selCategoria(categoria: Categoria) {
    this.categoria = categoria;
    this.modalCategoria = false;
    this.modalProduto = true;
  }

  selProduto(produto: Produto) {
    this.produto = produto;
    this.modalProduto = false;
    if (!this.produto) {
      this.modalCategoria = true;
    }
  }
}
