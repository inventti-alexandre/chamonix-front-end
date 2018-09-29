import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MesaService } from '../../services/mesa/mesa.service';
import { Pedido } from '../../models/mesa/pedido';
import { PedidoService } from '../../services/mesa/pedido/pedido.service';
import { MesasService } from '../../services/mesas/mesas.service';
import { Mesa } from '../../models/mesa';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  providers: [MesaService, MesasService, PedidoService]
})
export class MesaComponent implements OnInit {

  mesaId: number;
  pedidoId: number;
  pedido = {} as Pedido;
  mesa = {} as Mesa;
  modalClientes = false;
  modalPedidos = false;

  constructor(private service: MesaService,
    private mesasService: MesasService,
    private pedidoService: PedidoService,
    private router: Router) { }

  ngOnInit() {
    const id = window.sessionStorage.getItem('mesaId');
    if (id !== undefined) {
      this.mesaId = Number(id);
      this.getMesa();
      this.getInfoMesa();
    }
  }

  getMesa() {
    this.mesasService.get(this.mesaId).subscribe(
      data => this.mesa = data,
      error => alert('Erro ao obter mesa')
    );
  }

  getInfoMesa() {
    this.pedidoService.getPedido(this.mesaId).subscribe(
      data => {
        if (data !== null) {
          this.pedido = data;
          this.mesaId = this.pedido.mesaId;
          this.pedidoId = this.pedido.pedidoId;
          this.getItensPedido();
        } else {
          this.pedidoId = 0;
        }
      }
    );
  }

  getItensPedido() {

  }

  clientes() {
    this.fecharModais();
    this.modalClientes = true;
  }

  fecharClientes(pedido: Pedido) {
    this.modalClientes = false;
    this.getInfoMesa();
  }

  pedidos() {
    this.fecharModais();
    this.modalPedidos = true;
  }

  fecharModais() {
    this.modalClientes = false;
    this.modalPedidos = false;
  }

  inicio() {
    this.fecharModais();
  }

  voltar() {
    this.router.navigate(['']);
  }
}
