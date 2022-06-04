import {
  Directive,
  HostListener,
  HostBinding,
  OnInit,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[todoStyle]',
})
export class TodoDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  // @HostBinding('style.backgroundColor') bgColor: string = '#00f';
  // @HostBinding('style.color') textColor = '#fff';
  @HostBinding('style.boxShadow') boxShadow: string = 'none';

  @HostListener('mouseenter')
  mouseEnter() {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   '#f00'
    // );
    // this.bgColor = '#f00';

    this.boxShadow = '2px 2px 3px rgba(0, 0, 0, 0.3)';
  }

  @HostListener('mouseleave') mouseLeave() {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   '#00f'
    // );
    // this.bgColor = '#00f';
    this.boxShadow = 'none';
  }

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   '#00f'
    // );
  }
}
