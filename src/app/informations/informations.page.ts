import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-informations',
  templateUrl: 'informations.page.html',
  styleUrls: ['informations.page.scss'],
})
export class InformationsPage implements OnInit {

  items: any[] = [
    { title: 'Localização', content: 'Atães fica localizada a cerca de 9 km a sul do centro de Vila Verde e a cerca de 30 km a norte de Braga.' },
    { title: 'Serviços', 
    content: [ '- Banco (Crédito Agrícola)',
               '- Unidade de cuidados de saúde personalizados (UCSP) ',
               '- Loja do cidadão/CTT',
               '- Comércios (mercearias, cafés, padarias, farmácias, cabeleireiros, entre outros) ']},
    { title: 'Atividades ao ar livre', content: 'Atães é uma região com muitas trilhas para caminhada, ciclismo e corrida, com belas paisagens naturais e um clima agradável.' },
    { title: 'Vinho Verde', content: ' A região de Vila Verde, incluindo Atães, é conhecida pela produção de vinho verde, um vinho jovem, fresco e frutado.' }
  ];
  selectedItem: any;

  constructor(public navCtrl: NavController) {}
 
  ngOnInit() {
  }

  showContent(item: any) {
    this.selectedItem = item;
  }

}
