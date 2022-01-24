using InventoryApi.Models;
using Microsoft.EntityFrameworkCore;

namespace InventoryApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> opt) : base(opt)
        {

        }
        public DbSet<Inventory> Inventories { get; set; }
    }
}