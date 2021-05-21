import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentModuleRoutingModule } from './document-module-routing.module';
import { DocumentUploadComponent } from './document-upload/document-upload.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { SharedModule } from '../shared/shared.module';
import { DocumentAddComponent } from './document-add/document-add.component';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    DocumentUploadComponent,
    DocumentEditComponent,
    DocumentListComponent,
    DocumentAddComponent
  ],
  imports: [
    CommonModule,
    DocumentModuleRoutingModule,
    SharedModule,
    QuillModule.forRoot()
  ]
})
export class DocumentModuleModule { }
