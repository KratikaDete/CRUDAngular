using System;
using System.Collections.Generic;
using System.Linq;
using InventoryApi.Data;
using InventoryApi.Models;
using Microsoft.Extensions.Configuration;

namespace InventoryApi.Repository
{
    public class InventoryRepository : IInventoryRepository
    {
        public InventoryRepository(IConfiguration configuration, AppDbContext context)
        {
            Configuration = configuration;
            Context = context;
        }

        public IConfiguration Configuration { get; }
        public AppDbContext Context { get; }

        public Inventory CreateInventory(Inventory inventory)
        {
            if (inventory == null)
            {
                throw new ArgumentNullException(nameof(inventory));
            }
            Context.Inventories.Add(inventory);
            Context.SaveChanges();
            return inventory;
        }

        public bool DeleteInventory(int id)
        {
            var inventory = Context.Inventories.Where(x => x.Id == id).FirstOrDefault();
            Context.Inventories.Remove(inventory);
            Context.SaveChanges();
            return true;
        }

        public List<Inventory> GetAllInventories()
        {
            return Context.Inventories.ToList();
        }

        public Inventory GetInventoryById(int id)
        {
            return Context.Inventories.Where(x => x.Id == id).FirstOrDefault();
        }

        public bool InventoryExists(int id)
        {
            return Context.Inventories.Any(x => x.Id == id);
        }

        public bool UpdateInventory(Inventory inventory)
        {
            if (inventory == null)
            {
                throw new ArgumentNullException(nameof(inventory));
            }
            var _inv = Context.Inventories.Where(x => x.Id == inventory.Id).FirstOrDefault();
            _inv.Name = inventory.Name;
            _inv.Description = inventory.Description;
            _inv.Price = inventory.Price;
            Context.SaveChanges();
            return true;
        }
    }
}