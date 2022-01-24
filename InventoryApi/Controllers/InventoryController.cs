using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InventoryApi.Models;
using InventoryApi.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace InventoryApi.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class InventoryController : ControllerBase
    {
        public InventoryController(IInventoryRepository inventoryRepository)
        {
            InventoryRepository = inventoryRepository;
        }

        public IInventoryRepository InventoryRepository { get; }

        [HttpGet]
        public ActionResult<IEnumerable<Inventory>> GetInventories()
        {
            Console.WriteLine($"-->GetInventories Called!");
            var inventories = InventoryRepository.GetAllInventories();
            return Ok(inventories);
        }

        [HttpGet("{id}", Name = "GetInventory")]
        public ActionResult<Inventory> GetInventory(int id)
        {
            Console.WriteLine($"--> GetInventory called for ID {id}");
            if (!InventoryRepository.InventoryExists(id))
            {
                return NotFound();
            }
            var inventory = InventoryRepository.GetInventoryById(id);
            if (inventory == null)
            {
                return NotFound();
            }
            return Ok(inventory);
        }
        [HttpPost]
        public ActionResult<Inventory> CreateInvontary(Inventory inventory)
        {
            Console.WriteLine($"--> CreateInvontary Called");
            var response = InventoryRepository.CreateInventory(inventory);
            return CreatedAtRoute(nameof(GetInventory),
                new { id = response.Id }, response);
        }
        [HttpPut("{id}")]
        public ActionResult<bool> UpdateInventory(int id, Inventory inventory)
        {
            Console.WriteLine($"--> UpdateInventory Called");
            inventory.Id = id;
            var response = InventoryRepository.UpdateInventory(inventory);
            return Ok(response);
        }
        [HttpDelete("{id}")]
        public ActionResult<bool> DeleteInventory(int id)
        {
            Console.WriteLine($"--> DeleteInventory Called");
            var response = InventoryRepository.DeleteInventory(id);
            return Ok(response);
        }
    }
}
