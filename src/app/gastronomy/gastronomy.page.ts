import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastronomy',
  templateUrl: './gastronomy.page.html',
  styleUrls: ['./gastronomy.page.scss'],
})
export class GastronomyPage implements OnInit {
  secondaryImages: string[] = ['../../assets/cozido.jpg','../../assets/caldo.jpg', '../../assets/bacalhau.jpg', '../../assets/vinho.jpg'];
  mainImage: string = "../../assets/cozido.jpg"

  constructor() { }

  ngOnInit() {
  }

  changeMainImage(newImage: string) {
    this.mainImage = newImage;
  }

}