import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [NgStyle, CommonModule],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css'
})
export class BenefitsComponent {
  beneficios = [
    {
      titulo: "Apoio emocional",
      descricao: "Oferecemos apoio emocional contínuo para lidar com desafios da vida.",
      icon: "bi-heart"
    },
    {
      titulo: "Autoconhecimento",
      descricao: "Ajudamos você a entender melhor seus sentimentos e emoções.",
      icon: "bi-lightbulb"
    },
    {
      titulo: "Gestão do estresse",
      descricao: "Técnicas eficazes para gerenciar e reduzir o estresse do dia a dia.",
      icon: "bi-bandaid"
    }
  ];
}
