import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  usuario: string = '';
  nombre: string = '';
  apellido: string = '';
  educacion: string = '';
  fechaNacimiento: string = '';

  @ViewChild('nombreInput', { read: ElementRef }) nombreInput!: ElementRef;
  @ViewChild('apellidoInput', { read: ElementRef }) apellidoInput!: ElementRef;

  constructor(
    private router: Router,
    private animationCtrl: AnimationController
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.usuario = navigation.extras.state['usuario'];
    }
  }

  ngOnInit() {}

  async limpiar() {
    // Primero: Animación de desvanecimiento
    await this.animarInput(this.nombreInput.nativeElement);
    await this.animarInput(this.apellidoInput.nativeElement);
    
    // Después: Limpiar campos
    this.nombre = '';
    this.apellido = '';
    this.educacion = '';
    this.fechaNacimiento = '';
  }

  async animarInput(element: any) {
    const animation = this.animationCtrl.create()
      .addElement(element)
      .duration(800)
      .iterations(1)
      .keyframes([
        { offset: 0, opacity: '1', transform: 'scale(1)' },
        { offset: 0.5, opacity: '0.7', transform: 'scale(0.98)' },
        { offset: 1, opacity: '1', transform: 'scale(1)' }
      ]);

    await animation.play();
  }

  formatearFecha(event: any) {
    let value = event.target.value.replace(/\D/g, ''); // Remover caracteres no numéricos
    
    if (value.length > 2 && value.length <= 4) {
      value = value.substring(0, 2) + '/' + value.substring(2);
    } else if (value.length > 4) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4) + '/' + value.substring(4, 8);
    }
    
    this.fechaNacimiento = value;
  }

  mostrar() {
    if (this.nombre && this.apellido) {
      alert(`Nombre: ${this.nombre}\nApellido: ${this.apellido}`);
    } else {
      alert('Por favor complete nombre y apellido');
    }
  }
}