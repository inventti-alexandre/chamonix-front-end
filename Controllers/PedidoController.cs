using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using chamonix.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace chamonix.Controllers
{
    [Route("api/[controller]")]
    public class PedidoController : Controller
    {
        private readonly ChamonixDbContext _db;

        public PedidoController(ChamonixDbContext db)
        {
            this._db = db;
        }

        [HttpGet("{pedidoId}")]
        public Pedido Get(int pedidoId)
        {
            return _db.Pedido.Include(x => x.Mesa).Where(x => x.PedidoId == pedidoId).FirstOrDefault();
        }

        [HttpGet]
        [Route("GetPedido/{idMesa}")]
        public Pedido GetPedido(int idMesa)
        {
            return _db.Pedido.Include(x => x.Mesa).Where(x => x.MesaId == idMesa && x.FechadaPor == null).FirstOrDefault();
        }

        [HttpPost]
        public IActionResult Post([FromBody]Pedido pedido)
        {
            pedido.AbertaPor = 1; // TODO: usuario
            pedido.Inicio = DateTime.Now;
            _db.Pedido.Add(pedido);
            _db.SaveChanges();
            return Ok(pedido);
        }

        [HttpPut]
        public IActionResult Put([FromBody]Pedido pedido)
        {
            _db.Entry(pedido).State = EntityState.Modified;
            _db.SaveChanges();
            return Ok(pedido);
        }
    }
}