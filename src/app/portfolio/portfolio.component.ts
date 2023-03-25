import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  mainPath: string = "../../assets/images/";
  sources: string[] = ["cabin.png", "cake.png", "circus.png", "game.png", "safe.png", "submarine.png"];
}
