import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventory } from '../inventory';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id: number;
  inventory: Inventory;
   
  constructor(
    public inventoryservice: InventoryService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['inventoryId'];      
    this.inventoryservice.getinventorybyid(this.id).subscribe((data: Inventory)=>{
      this.inventory = data;
    });
  }
}
