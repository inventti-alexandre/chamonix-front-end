import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { MesaPosicao } from '../../models/mesa-posicao';
import { Pedido } from '../../models/mesa/pedido';

@Injectable()
export class MesaService {

  private readonly URL = '/api/Mesa';

  constructor(private http: HttpClient) { }

  getPosicaoMesas(): Observable<Array<MesaPosicao>> {
    return this.http.get<Array<MesaPosicao>>(`${this.URL}/GetPosicaoMesas`);
  }
}
