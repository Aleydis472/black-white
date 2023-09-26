import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent  implements OnInit{
  title = 'black-white-front'; 
  path = false;
  constructor(private router: Router){}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // La navegación ha terminado, puedes obtener la ruta actual aquí.
        const currentRoute = this.router.routerState.snapshot.url;
        if (currentRoute  == '/login') {
          console.log('no esta entrando');
          
          this.path = true;
        }else{
          this.path = false;

        }
        console.log('Ruta actual:', currentRoute, this.path);
      }
    });
  } 

  
  
}
