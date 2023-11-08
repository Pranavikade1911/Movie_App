import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  pic = '../assets/images/img1.webp';
  pic1 = '../assets/images/img2.jfif';
  pic2 = '../assets/images/img3.jpg';
}
