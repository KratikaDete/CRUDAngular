using System.Collections.Generic;
using InventoryApi.Models;

namespace InventoryApi.Repository
{
    public interface IInventoryRepository
    {
        public List<Inventory> GetAllInventories();
        public Inventory GetInventoryById(int id);
        public Inventory CreateInventory(Inventory inventory);
        public bool UpdateInventory(Inventory inventory);
        public bool DeleteInventory(int id);
        public bool InventoryExists(int id);
    }
}
