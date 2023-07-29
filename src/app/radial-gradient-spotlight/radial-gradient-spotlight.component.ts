import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-radial-gradient-spotlight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radial-gradient-spotlight.component.html',
  styleUrls: ['./radial-gradient-spotlight.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadialGradientSpotlightComponent {
  @ViewChild('spotlight', { static: false })
  spotlight?: ElementRef<HTMLDivElement>;

  constructor(private renderer: Renderer2) {}

  onMouseMove($event: MouseEvent) {
    if (this.spotlight) {
      /** @see {@link https://github.com/facebook/react/issues/16201#issuecomment-514983239} */
      const { top, left } = (
        $event.currentTarget as HTMLElement
      ).getBoundingClientRect();

      this.renderer.setAttribute(
        this.spotlight.nativeElement,
        'style',
        `background: radial-gradient(
          400px
          circle at ${$event.clientX - left}px ${$event.clientY - top}px,
          var(--color-sky-500) 0%,
          transparent 80%
        );`
      );
    }
  }
}
