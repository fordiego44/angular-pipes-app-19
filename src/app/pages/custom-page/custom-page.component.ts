import { Component, signal } from '@angular/core';
import { heroes } from '../../data/heroes.data';
import { Hero } from '../../interfaces/hero.interface';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { CanFlyPipe } from "../../pipes/can-fly.pipe";
import { HeroColorPipe } from "../../pipes/hero-color.pipe";
import { HeroTextColorPipe } from "../../pipes/hero-text-color.pipe";
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from "../../pipes/hero-creator.pipe";
import { HeroFilterPipe } from "../../pipes/hero-filter.pipe";
import { HeroSortByPipe } from "../../pipes/hero-sort-by.pipe";

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
    HeroCreatorPipe,
    HeroFilterPipe,
    HeroSortByPipe
],
  templateUrl: './custom-page.component.html',
  styles: ``
})
export default class CustomPageComponent {
  name = signal('Fernando Herrera');

  upperCase = signal(true);

  heroes = signal(heroes);

  sortBy = signal<keyof Hero | null>(null);

  searchQuery = signal('');
}
