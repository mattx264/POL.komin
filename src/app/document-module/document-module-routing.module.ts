import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentAddComponent } from './document-add/document-add.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentUploadComponent } from './document-upload/document-upload.component';

const routes: Routes = [{
  path: 'list',
  component: DocumentListComponent
}, {
  path: 'edit',
  component: DocumentEditComponent
}, {
  path: 'upload',
  component: DocumentUploadComponent
}, {
  path: 'add',
  component: DocumentAddComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentModuleRoutingModule { }
