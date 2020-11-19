import { Component, OnInit } from '@angular/core';
import{ServiceService } from '../service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  produit:any={"id":null,"description":"","quantite":0,"prix":0.0}
 

  constructor( private ser:ServiceService,private route:Router ) 
    
   { }

  ngOnInit(): void {
   
  }

  saveProduit(){
    let prod=JSON.stringify(this.produit);
    this.ser.addProduit(prod).subscribe(
      data=>{this.route.navigate(["liste"])
    //redirect
    },
    err=>{}
    )
  }
}
