import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';


@Component({
  selector: 'app-temp-menu',
  standalone: true,
  imports: [RouterLink, MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDividerModule, MatButtonToggleModule, MatCheckboxModule],
  templateUrl: './temp-menu.component.html',
  styleUrl: './temp-menu.component.scss'
})
export class TempMenuComponent {

  constructor(private toastr: ToastrService) {}

  openMenu() {
   
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  storeValue() {
    localStorage.setItem('item1','some value for item1');
  }

  readValue() {
    let message1 = localStorage.getItem('item1') || 'Nothing available to read';
    this.toastr.success(message1);
  }

  removeValue() {
    localStorage.removeItem('item1');
  }

}
