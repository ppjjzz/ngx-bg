import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  str = 'sdasd';
  list = [
    {
      id: 3294,
      name: 'Women',
      path: 'Women',
      children: [
        {
          id: 3299,
          name: 'Dresses',
          path: 'Women >Dresses',
          children: []
        }
      ]
    }
  ];
}
