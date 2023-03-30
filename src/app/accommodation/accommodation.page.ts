import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.page.html',
  styleUrls: ['./accommodation.page.scss'],
})
export class AccommodationPage implements OnInit {

  secondaryImages: string[] = ['../../assets/alojamento1.jpg', '../../assets/alojamento2.jpg', '../../assets/alojamento3.jpg'];
  mainImage: string = "../../assets/alojamento4.jpg"
 

  constructor() { }

  ngOnInit() {
  }

  changeMainImage(newImage: string) {
    if (this.secondaryImages.indexOf(this.mainImage) === -2) {
      this.secondaryImages.unshift(this.mainImage);
    }
    this.mainImage = newImage;
  }

}
