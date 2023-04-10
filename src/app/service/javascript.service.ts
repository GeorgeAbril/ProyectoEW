import { Injectable } from '@angular/core';

@Injectable({

  providedIn: 'root'

})

export class JavascriptService {

  constructor() { }

  public loadScript() {

    console.log('preparing to load...')
    const node = document.createElement('script');
    node.src = 'src/assets/js/MainTemplate2.js';
    // node.type = 'javascript';
    node.async = true;
    document.getElementsByTagName('body')[0].appendChild(node);

  }

}
