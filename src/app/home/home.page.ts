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
  @ViewChild('tituloHome', { read: ElementRef }) tituloHome!: ElementRef;

  constructor(
    private router: Router,
    private animationCtrl: AnimationController
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.usuario = navigation.extras.state['usuario'];
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.animarTitulo();
    }, 300);
  }

  async animarTitulo() {
    if (this.tituloHome?.nativeElement) {
      const animation = this.animationCtrl.create()
        .addElement(this.tituloHome.nativeElement)
        .duration(800)
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'translateY(-15px)', 'translateY(0px)');

      await animation.play();
    }
  }

  async limpiar() {
    await this.animarInput(this.nombreInput.nativeElement);
    await this.animarInput(this.apellidoInput.nativeElement);
    
    this.nombre = '';
    this.apellido = '';
    this.educacion = '';
    this.fechaNacimiento = '';
  }

  async animarInput(element: any) {
    const animation = this.animationCtrl.create()
      .addElement(element)
      .duration(500)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'translateX(0px)' },
        { offset: 0.25, transform: 'translateX(-5px)' },
        { offset: 0.5, transform: 'translateX(5px)' },
        { offset: 0.75, transform: 'translateX(-5px)' },
        { offset: 1, transform: 'translateX(0px)' }
      ]);

    await animation.play();
  }

  mostrar() {
    if (this.nombre && this.apellido) {
      alert(`Nombre: ${this.nombre}\nApellido: ${this.apellido}`);
    } else {
      alert('Por favor complete nombre y apellido');
    }
  }
}