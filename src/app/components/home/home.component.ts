import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  paragraph = "It may contribute to reducing the risk of heart and arterial diseases. It includes helping the body replenish red blood cells.It may be used as a means of emptying excess iron for those affected.A 2008 study found a slight reduction in the risk of some types of cancer in people who donate blood regularly.It improves blood flow.";
  paragraphChunks: string[] = [];

  constructor() {
    this.paragraphChunks = this.chunkParagraph(this.paragraph, 150);
  }

  chunkParagraph(paragraph: string, chunkSize: number): string[] {
    const chunks = [];
    for (let i = 0; i < paragraph.length; i += chunkSize) {
      chunks.push(paragraph.substring(i, i + chunkSize));
    }
    return chunks;
  }
}
