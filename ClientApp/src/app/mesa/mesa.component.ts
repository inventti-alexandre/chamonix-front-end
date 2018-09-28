import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MesaService } from '../../services/mesa/mesa.service';
import { Pedido } from '../../models/mesa/pedido';
import { PedidoService } from '../../services/mesa/pedido/pedido.service';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  providers: [MesaService, PedidoService]
})
export class MesaComponent implements OnInit {

  mesaId: number;
  pedidoId: number;
  pedido = {} as Pedido;
  modalClientes = false;

  constructor(private service: MesaService, private pedidoService: PedidoService, private router: Router) { }

  ngOnInit() {
    const id = window.sessionStorage.getItem('mesaId');
    if (id !== undefined) {
      this.mesaId = Number(id);
      this.getInfoMesa(this.mesaId);
    }
  }

  getInfoMesa(idMesa: number) {
    this.pedidoService.getPedido(idMesa).subscribe(
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
    this.modalClientes = true;
  }

  fecharClientes(pedido: Pedido) {
    this.modalClientes = false;
    this.getInfoMesa(pedido.mesaId);
  }

  voltar() {
    this.router.navigate(['']);
  }
}
