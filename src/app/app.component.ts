import { Component, OnInit } from '@angular/core';
var IpfsAPI = require('ipfs-api')
import { Buffer } from 'buffer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  title = 'app';
  imageUrl: string;
  ipfsApi: any;
  ipfsId: string;
  loading: boolean;

  ngOnInit(): void {
    this.ipfsApi = IpfsAPI('127.0.0.1', '5001');
  }

  captureFile(event) {
    const files = event.target.files;
    const filename = files[0].name;
    if (filename.lastIndexOf('.') <= 0) {
      alert('Error');
    }

    const reader = new FileReader();
    reader.onloadend = () => this.saveToIpfs(reader);
    reader.readAsArrayBuffer(files[0]);
  }

  saveToIpfs (reader) {
    this.loading = true;
    console.log(reader);
    const buffer = Buffer.from(reader.result);

    this.ipfsApi.add(buffer, { progress: (prog) => console.log(`received: ${prog}`) })
      .then((response) => {
        console.log(response);
        this.ipfsId = response[0].hash;
      }).catch((err) => {
        console.error(err);
      });
      this.loading = false;
  }

  triggerFileUpload() {
    document.getElementById('file').click();
  }
}
