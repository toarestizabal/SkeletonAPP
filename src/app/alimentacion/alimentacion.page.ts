import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alimentacion',
  templateUrl: './alimentacion.page.html',
  styleUrls: ['./alimentacion.page.scss'],
  standalone: false
})

export class AlimentacionPage implements OnInit {

  agregarAlimento() {
    alert('¡Alimento agregado correctamente!');
  }

  constructor() {}
  ngOnInit() {}
}