import { Injectable } from '@angular/core';
import { carouselItem } from '../types/carusel.types';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  carouselItems:Array<carouselItem>=[{
    path:'../../../assets/pump.jpg',
    description:'Exclusive  brand merchandise'

  },
  {
    path:'../../../assets/drill.png',
    description:'Customer deals are winners'

  },
  {
    path:'../../../assets/dem.jpg',
    description:'High quality and standard equipment'

  },
  {
    path:'../../../assets/sds.jpg',
    description:'Exchange your old equipment for a new one '

  }]
  constructor() { }
}
