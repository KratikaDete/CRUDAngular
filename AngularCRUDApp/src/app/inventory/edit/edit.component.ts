import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventory } from '../inventory';
import { FormGroup, FormControl, Validators} from '@angular/forms';
   
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    
  id: number;
  inventory: Inventory;
  form: FormGroup;
  showerror:boolean=false;
  errormsg:string ="";

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
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.inventoryservice.update(this.id, this.form.value).subscribe(res => {
         console.log('Inventory updated successfully!');
         this.router.navigateByUrl('inventory/home');
    },error=>{
      console.log(error);
     this.showerror=true;
     this.errormsg=error;
    })
  }   
}