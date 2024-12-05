import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  images: string[] = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/4.jpg',
    'assets/images/5.jpg',
    'assets/images/6.jpg',
    'assets/images/7.jpg',
    'assets/images/8.jpg',
    'assets/images/9.jpg',
    'assets/images/10.jpg',
    'assets/images/11.jpg',
    'assets/images/12.jpg',
    'assets/images/13.jpg',
    'assets/images/14.jpg',
    'assets/images/15.jpg',
    'assets/images/16.jpg',
    'assets/images/17.jpg',
    'assets/images/11.jpg',
    'assets/images/12.jpg',
    'assets/images/10.jpg',
  ];

  isModalOpen: boolean = false;
  currentIndex: number = 0;

  get currentImage(): string {
    return this.images[this.currentIndex];
  }

  // Abre el modal y establece la imagen actual
  openModal(index: number): void {
    this.currentIndex = index;
    this.isModalOpen = true;
  }

  // Abre el modal mostrando la primera imagen
  openAllImages(): void {
    this.currentIndex = 0;
    this.isModalOpen = true;
  }

  // Cierra el modal
  closeModal(): void {
    this.isModalOpen = false;
  }

  // Muestra la siguiente imagen
  nextImage(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  // Muestra la imagen anterior
  prevImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
  }

  // Escucha los eventos del teclado
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (this.isModalOpen) {
      if (event.key === 'ArrowRight') {
        this.nextImage();
      } else if (event.key === 'ArrowLeft') {
        this.prevImage();
      }
    }
  }
}
