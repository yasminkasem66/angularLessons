import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(imgUrl: string, placeHolder: string, forceHttp: string,) {
    let img = imgUrl ? imgUrl : placeHolder;
    console.log('before', img);
    if (forceHttp) {
      if (img.indexOf('https') == -1) {
        img = img.replace('http', 'https')
      }
    }
    console.log('after', img);


    return img;
  }

}
