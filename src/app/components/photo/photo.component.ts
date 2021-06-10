import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { PhotoService } from '../../services/photo.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

import { base64StringToBlob } from 'blob-util';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  hasBoolean?: boolean;
  imageBlobUrl?: any;
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';

  constructor(private photoService: PhotoService, private tokenStorageService: TokenStorageService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.photoService.get(this.tokenStorageService.getUser().id).subscribe(
      data => {
        this.photo(data.data, data.type);
      }, err => {
        console.log(err);
        this.hasBoolean = false;
      }
    );
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.photoService.create(this.currentFile, this.tokenStorageService.getUser().id).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.photoService.get(this.tokenStorageService.getUser().id).subscribe(
                data => {
                  this.photo(data.data, data.type);
                }, err => {
                  console.log(err);
                }
              );
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Error intentando subir foto';
            }

            this.currentFile = undefined;
          });

      }

      this.selectedFiles = undefined;
    }
  }

  update(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this.photoService.update(this.currentFile, this.tokenStorageService.getUser().id).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.photoService.get(this.tokenStorageService.getUser().id).subscribe(
                data => {
                  this.photo(data.data, data.type);
                }, err => {
                  console.log(err);
                }
              );
            }
          },
          (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Error intentando subir foto';
            }

            this.currentFile = undefined;
          });

      }

      this.selectedFiles = undefined;
    }
  }


  photo(data: any, type: any): void{
    const blob = base64StringToBlob(data, type);
    this.imageBlobUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
    this.hasBoolean = blob.size > 1;
  }

}
