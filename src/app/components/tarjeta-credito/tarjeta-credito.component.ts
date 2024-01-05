import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from 'src/app/services/tarjeta.service';


@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {

  listTarjetas: any[] = [
    // {titulo:'Marco Cueva',numeroTarjeta:'102140387289',fechaExpiracion:'10/22',cvv:'123'},
    // {titulo:'Juan Ramirez',numeroTarjeta:'102740581461',fechaExpiracion:'08/22',cvv:'123'}
  ];
  form: FormGroup;
  accion = "agregar";
  id: number | undefined;
  constructor(private fb: FormBuilder, private toastr: ToastrService, private _tarjetaService: TarjetaService) {
    this.form = this.fb.group({
      titulo: ["", Validators.required],
      numeroTarjeta: ["", [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion: ["", [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ["", [Validators.required, Validators.maxLength(4), Validators.minLength(4)]]

    })
  }

  ngOnInit(): void {
    this.obtenerTarjetas();
  }

  obtenerTarjetas() {
    this._tarjetaService.getLisTarjetas().subscribe(data => {
      console.log(data);
      this.listTarjetas = data;
    }, error => {
      console.error(error);
    })
  }

  guardarTarjeta(): void {
    const tarjeta: any = {
      titulo: this.form.get("titulo")?.value,
      numeroTarjeta: this.form.get("numeroTarjeta")?.value,
      fechaExpiracion: this.form.get("fechaExpiracion")?.value,
      cvv: this.form.get("cvv")?.value
    }
    // this.listTarjetas.push(tarjeta);
    if (this.id == undefined) {
      //Agregar tarjeta
      this._tarjetaService.saveTarjeta(tarjeta).subscribe(data => {
        this.toastr.success("La tarjeta fue registrada con éxito!", "Tarjeta registrada");
        this.obtenerTarjetas();
        this.form.reset();
      }, error => {
        this.toastr.error("Ups! Ocurrió un error.", "Error");
        console.log(error);
      });

    } else {
      //Actualizar tarjeta
      tarjeta.id=this.id;
      this._tarjetaService.updateTarjeta(this.id, tarjeta).subscribe(data => {
        this.toastr.info("La tarjeta fue actualizada con éxito!", "Tarjeta actualizada");
        this.accion = "Agregar";
        this.id = undefined;
        this.form.reset();
        this.obtenerTarjetas();
      }, error => {
        this.toastr.success("Ups! Ocurrió un error.", "Error");
        console.log(error);
      });

    }


  }

  eliminarTarjeta(index: number): void {
    // this.listTarjetas.splice(index,1);
    this._tarjetaService.deleteTarjeta(index).subscribe(data => {
      this.toastr.error("La tarjeta fue eliminada con éxito!", "Tarjeta eliminada");
      this.obtenerTarjetas();
    }, error => {
      console.error(error);
    });
  }

  editarTarjeta(tarjeta: any): void {
    this.accion = "editar";
    this.id = tarjeta.id;
    this.form.patchValue({
      titulo: tarjeta.titulo,
      numeroTarjeta: tarjeta.numeroTarjeta,
      fechaExpiracion: tarjeta.fechaExpiracion,
      cvv: tarjeta.cvv
    })
  }

}
