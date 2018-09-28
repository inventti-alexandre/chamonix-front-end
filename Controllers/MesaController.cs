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
    public class MesaController : Controller
    {
        private readonly ChamonixDbContext _db;

        public MesaController(ChamonixDbContext db)
        {
            this._db = db;
        }

        [HttpGet]
        [Route("GetPosicaoMesas")]
        public IEnumerable<MesaPosicao> GetPosicaoMesas()
        {
            return _db.MesaPosicao.FromSql("GetPosicaoMesas").ToList();
        }

    }
}