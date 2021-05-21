import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { promise } from 'selenium-webdriver';
import { HttpClientService } from 'src/app/shared/services/http-client.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.scss']
})
export class DocumentListComponent implements OnInit {
  files: any[];

  constructor(private httpClient: HttpClientService) { }

  ngOnInit(): void {
    this.getFilesList();
  }
  async getFilesList() {
    this.files = await this.httpClient.get('Document/list').toPromise() as any[];

  }

}
