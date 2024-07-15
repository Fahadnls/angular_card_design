import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FormsModule, NgIf, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  customDesign: any = [
    {
      objectType: 'topCard',
      textValue: '',
      hAlignment: 'center',
      vAlignment: '0',
      color: '#000000',
      size: '14px',
      font: '',
    },
    {
      objectType: 'middleCard',
      textValue: '',
      hAlignment: 'center',
      vAlignment: '0',
      color: '#000000',
      size: '14px',
      font: '',
    },
    {
      objectType: 'bottomCard',
      textValue: '',
      hAlignment: 'center',
      vAlignment: '0',
      color: '#000000',
      size: '14px',
      font: '',
    },
  ];
  selectedCard = 0;

  ngOnInit(): void {}

  onHorizontalAlignment(
    block: 'top' | 'middle' | 'bottom',
    alignment: 'left' | 'center' | 'right'
  ) {
    this.customDesign[this.selectedCard].hAlignment = alignment;
  }
  inputClick(i: any) {
    console.log(i);
    this.selectedCard = i;
  }

  SelectColor(data: any) {
    this.customDesign[this.selectedCard].color = data.target.value;
  }

  selectSize(data: any) {
    this.customDesign[this.selectedCard].size = data.target.value;
  }

  selectFont(data: any) {
    this.customDesign[this.selectedCard].font = data.target.value;
  }

  reset() {
   
   console.log(this.customDesign);
   
  }
  getVerticalAlignment(value: any) {
    switch (value) {
      case 'top':
        return -60;
      case 'middle':
        return 5;
      case 'bottom':
        return 60;
      default:
        return 5;
    }
  }

  getLeftHAlignment() {
    if (this.selectedCard >= 0 && this.selectedCard <= 2) {
      return this.customDesign[this.selectedCard].hAlignment == 'left';
    }
    return false;
  }
  getCenterHAlignment() {
    if (this.selectedCard >= 0 && this.selectedCard <= 2) {
      return this.customDesign[this.selectedCard].hAlignment == 'center';
    }
    return false;
  }
  getRightHAlignment() {
    if (this.selectedCard >= 0 && this.selectedCard <= 2) {
      return this.customDesign[this.selectedCard].hAlignment == 'right';
    }
    return false;
  }
  getLeftVAlignment() {
    if (this.selectedCard >= 0 && this.selectedCard <= 2) {
      return this.customDesign[this.selectedCard].vAlignment == 'top';
    }
    return false;
  }
  getCenterVAlignment() {
    if (this.selectedCard >= 0 && this.selectedCard <= 2) {
      return this.customDesign[this.selectedCard].vAlignment == 'middle';
    }
    return false;
  }
  getRightVAlignment() {
    if (this.selectedCard >= 0 && this.selectedCard <= 2) {
      return this.customDesign[this.selectedCard].vAlignment == 'bottom';
    }
    return false;
  }
  onVerticalAlignment(
    block: 'top' | 'middle' | 'bottom',
    alignment: 'top' | 'middle' | 'bottom'
  ) {
    this.customDesign[this.selectedCard].vAlignment = alignment;
  }
  textValues(data: any) {
    console.log(data.target);
  }
  onDone() {
    console.log(this.customDesign);
  }
}
