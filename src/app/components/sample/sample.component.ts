import { Component } from '@angular/core';
import { Test } from './../../service/test';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-sample',
  standalone: true,
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  imports: [MatButtonModule, NgTemplateOutlet, CommonModule, MatIconModule, MatExpansionModule]

})
export class SampleComponent {

  constructor(private test:Test) {
    
  }
  public ngonInit() {
    this.test.getCountriesData().subscribe((data)=>{
      console.log(data);
    });
}
  message = 'Hello from SampleComponent';
}
