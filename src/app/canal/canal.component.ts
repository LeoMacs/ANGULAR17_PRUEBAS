import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-canal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canal.component.html',
  styleUrl: './canal.component.css'
})
export class CanalComponent {
  msg_canal='Canal componente';

  enviar(){
    alert("Este es un mensaje");
  }

}
