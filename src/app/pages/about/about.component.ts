import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { RouterLink } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  
})
export class AboutComponent implements OnInit {
  @ViewChild('parentDiv', {static: true}) parentDivRef!: ElementRef;
  @ViewChild('childDiv', {static: true}) childDivRef!: ElementRef;

  defaultParentHeight: string = '100%';
  defaultParentWidth: string = '75%'; // Assuming 75% of the parent's width for the child
  defaultChildHeight: string = '100%';

  parentHeight: string = this.defaultParentHeight;
  parentWidth: string = this.defaultParentWidth;
  childDivStyle: { [key: string]: string } = {};

  constructor() { }

  ngOnInit(): void {
    this.updateChildHeight();
  }

  increaseDivSize() {
    const parentHeight = this.parentDivRef.nativeElement.offsetHeight;
    const parentWidth = this.parentDivRef.nativeElement.offsetWidth;
    this.parentHeight = '100%'; // Set parent height to maximum
    this.parentWidth = '100%'; // Set parent width to maximum
    this.childDivStyle = {
      height: parentHeight + 'px',
      width: parentWidth + 'px'
    };
  }

  private updateChildHeight() {
    const parentHeight = this.parentDivRef.nativeElement.offsetHeight;
    this.childDivStyle = { height: parentHeight + 'px' };
  }
}
