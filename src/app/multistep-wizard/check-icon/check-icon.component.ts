import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-check-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-icon.component.html',
  styleUrls: ['./check-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckIconComponent {
  @Input() classNames: string = '';
}
