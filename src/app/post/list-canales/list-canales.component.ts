import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ICanal } from '../i-canal';
import { SCanalService } from '../s-canal.service';
import { Canal } from '../../class/canal';

@Component({
  selector: 'app-list-canales',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-canales.component.html',
  styleUrl: './list-canales.component.css'
})
export class ListCanalesComponent {
  canales: Canal[]=[];

  constructor(public canalService:SCanalService){}

  ngOnInit():void{
    this.canalService.getAllCanales().subscribe((data:Canal[])=>{
      this.canales=data;
      console.log(this.canales);
    })
  }

  deleteCanales(id:number){
    this.canalService.deleteCanalbyID(id).subscribe( res=>{
      this.canales=this.canales.filter(item=>item.idCanal!==id);
      console.log('Canal eliminado correctamente!');
      alert("Canal eliminado correctamente!!");
    })
  }

}
