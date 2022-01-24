import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventory } from '../inventory';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
inventories: Inventory[] = [];
  constructor(
    private _inventoryService:InventoryService,
    private router: Router ) { }

  ngOnInit(): void {
    this._inventoryService.getAllInventories().subscribe(inventoriesdata=>{
      this.inventories=inventoriesdata;
    });
    console.log(this.inventories);
  }
deletePost(id:number)
{
  console.log(id);
  this._inventoryService.delete(id).subscribe(a=>{
    console.log('Inventory deleted successfully!');
         this.ngOnInit();
  })
}
}
