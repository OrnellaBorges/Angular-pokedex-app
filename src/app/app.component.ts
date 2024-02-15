import { Component } from "@angular/core"; // import de l'élément component qui vien de angular pour construire un composant web
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root", // nom du composant // balise html personalisé
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ pokemons[1] }}!</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  pokemons = ["Bulbizarre", "Salamèche", "Carapuce"];
}
