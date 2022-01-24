import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

 form: FormGroup;
 showerror:boolean=false;
 errormsg:string ="";
  constructor(
    public inventoryservice: InventoryService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
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
    this.showerror = false;
     this.errormsg = "";
    console.log(this.form.value);
    this.inventoryservice.create(this.form.value).subscribe(res => {
         console.log('Inventory created successfully!');
         this.router.navigateByUrl('inventory/home');
    },error=>{
      console.log(error);
     this.showerror=true;
     this.errormsg=error;
    })
  }
}
