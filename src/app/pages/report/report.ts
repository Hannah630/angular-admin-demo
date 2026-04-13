import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [TableModule],
  templateUrl: './report.html',
  styleUrl: './report.scss',
})
export class Report {
  data: any[] = [];
  totalRecords = 100;
  loading = false;

  // 模擬 API
  loadData(event: any) {
    this.loading = true;

    setTimeout(() => {
      this.data = Array.from({ length: event.rows }).map((_, i) => {
        const index = event.first + i;
        return {
          name: 'User ' + index,
          age: 20 + (index % 10),
          city: ['Taipei', 'Tokyo', 'Seoul'][index % 3],
        };
      });

      this.loading = false;
    }, 800);
  }
}
