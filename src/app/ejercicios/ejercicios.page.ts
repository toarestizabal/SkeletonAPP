import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.page.html',
  styleUrls: ['./ejercicios.page.scss'],
  standalone: false
})

export class EjerciciosPage implements OnInit {
  rutinaCompletada: boolean = false;
  mostrarFormulario: boolean = false;
  nuevoEjercicio: string = '';

  ejerciciosPredefinidos = [
    'Curl de Bíceps',
    'Fondos en Paralelas', 
    'Peso Muerto',
    'Dominadas',
    'Abdominales'
  ];

  constructor() {}
  
  ngOnInit() {}

  completarRutina() {
    this.rutinaCompletada = true;
    setTimeout(() => {
      alert('¡Rutina completada con éxito! 🎉');
    }, 300);
  }

  agregarEjercicio() {
    this.mostrarFormulario = true;
  }

  seleccionarEjercicioPredefinido() {
    const randomIndex = Math.floor(Math.random() * this.ejerciciosPredefinidos.length);
    this.nuevoEjercicio = this.ejerciciosPredefinidos[randomIndex];
  }

  confirmarEjercicio() {
    if (this.nuevoEjercicio) {
      alert(`Ejercicio "${this.nuevoEjercicio}" agregado temporalmente`);
      this.mostrarFormulario = false;
      this.nuevoEjercicio = '';
    }
  }

  cancelarEjercicio() {
    this.mostrarFormulario = false;
    this.nuevoEjercicio = '';
  }
}