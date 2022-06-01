import { Component, OnInit } from '@angular/core';
import { AlbumModel } from 'src/app/models/album.model';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {

albuns: AlbumModel[] = [
  { 
    name: 'bleach',  
    url: '../../../assets/albuns/bleach/cover.jpg'
  },
  {
    name: 'inceticide',
    url: '../../../assets/albuns/incesticide/cover.jpg'
  },
  {
    name: 'in utero',
    url: '../../../assets/albuns/in-utero/cover.jpg'
  },
  {
    name: 'nevermind',
    url: '../../../assets/albuns/nevermind/cover.jpg'
  },
  {
    name: 'outcesticide',
    url: '../../../assets/albuns/outcesticide/cover.jpg'
  },
  {
    name: 'interview-limited-edition',
    url: '../../../assets/albuns/interview-limited-edition/cover.jpeg'
    
  },
  {
    name: 'live',
    url: '../../../assets/albuns/nirvana-live/54883830_1SZ.webp'
    
  },
  {
    name: 'unplugged-new-york',
    url: '../../../assets/albuns/unplugged-new-york/cover.jpg'
    
  },
  {
    name: 'nirvana logo',
    url: '../../../assets/albuns/nirvana/cover.jpg'
  },
  {
    name: 'nirvana-complete-cover',
    url: '../../../assets/albuns/nirvana-complete-cover-version/cover.jpg'
  }



]


  
  constructor() { }

  ngOnInit(): void {
 
    console.log(this.albuns);
    

  }

}
