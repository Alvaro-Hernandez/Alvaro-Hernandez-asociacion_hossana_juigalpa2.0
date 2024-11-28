import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
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
    'assets/images/9.jpg'
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

  // Esto cierra el modal
  closeModal(): void {
    this.isModalOpen = false;
  }

  // Muesta la siguiente imagen
  nextImage(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; 
    }
  }

  // Esto muestra la imagen anterior
  prevImage(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
  }
}
