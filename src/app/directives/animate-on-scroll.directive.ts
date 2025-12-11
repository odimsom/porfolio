import { Directive, ElementRef, Input, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appAnimate]',
  standalone: true
})
export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input('appAnimate') animationName: string = 'animate-fade-in-up';
  @Input() delay: string = '0ms';
  @Input() threshold: number = 0.1;

  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Initially hide the element to ensure it doesn't flash before animating
    // this.renderer.addClass(this.el.nativeElement, 'animate-hidden');

    // Set delay if provided
    if (this.delay) {
       this.renderer.setStyle(this.el.nativeElement, 'animation-delay', this.delay);
    }

    // Add will-change to improve performance
    this.renderer.setStyle(this.el.nativeElement, 'will-change', 'opacity, transform');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: this.threshold
    };

    // Create observer
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the animation class
          this.renderer.addClass(this.el.nativeElement, this.animationName);
          // Mark as animated to remove opacity: 0 override
          this.renderer.addClass(this.el.nativeElement, 'animated');
          // Remove hidden class (legacy)
          this.renderer.removeClass(this.el.nativeElement, 'animate-hidden');

          // Stop observing once animated
          this.observer?.unobserve(this.el.nativeElement);

          // Remove will-change after animation completes (approx 1s)
          setTimeout(() => {
            this.renderer.removeStyle(this.el.nativeElement, 'will-change');
          }, 1000);
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
