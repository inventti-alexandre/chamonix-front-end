using Microsoft.EntityFrameworkCore;

namespace chamonix.Models
{
    public class ChamonixDbContext : DbContext
    {
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Cargo> Cargo { get; set; }
        public DbSet<Categoria> Categoria { get; set; }
        public DbSet<Produto> Produto { get; set; }
        public DbSet<Mesa> Mesa { get; set; }
        public DbSet<Pedido> Pedido { get; set; }
        public DbSet<MesaPosicao> MesaPosicao { get; set; }

        public ChamonixDbContext()
        {

        }

        public ChamonixDbContext(DbContextOptions options) : base(options)
        {

        }
    }
}