import { Mesa } from '../mesa';

export interface Pedido {
    pedidoId: number;
    mesaId: number;
    inicio: Date;
    termino?: Date;
    abertaPor: number;
    fechadaPor?: number;
    clientes: number;
    mesa: Mesa;
}
