import { Component, OnInit, ViewChild } from '@angular/core';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Component({
  selector: 'app-videochat',
  templateUrl: './videochat.component.html',
  styleUrls: ['./videochat.component.css']
})
export class VideochatComponent implements OnInit {
  
  @ViewChild('myvideo') myVideo: any;
  @ViewChild('otrousuario') otrousuario: any;

  peer;
  anotherid;
  mypeerid;  
  constructor() { }

  ngOnInit() {
    let video = this.myVideo.nativeElement;
    let videootrousuario = this.otrousuario.nativeElement;
    //this.peer = new Peer({key: 'lwjd5qra8257b9'}); 
    this.peer = new Peer(null, {
      debug: 2
    });
    setTimeout(() => {
      this.mypeerid = this.peer.id;
    }, 3000);

    this.peer.on('connection', function(conn) {
      conn.on('data', function(data){
        debugger;
        console.log(data);
      });
    });
    
    var n = <any>navigator;
    
    n.getUserMedia =  ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia );
    
    this.peer.on('call', function(call) {
      
      n.getUserMedia({video: true, audio: true}, function(stream) {
        call.answer(stream);
        videootrousuario.src =URL.createObjectURL(stream);
        videootrousuario.play();
        call.on('stream', function(remotestream){
          video.src = URL.createObjectURL(remotestream);
          video.play();
        })
      }, function(err) {
        console.log('Failed to get stream', err);
      })
    });
  }

  connect(){
    var conn = this.peer.connect(this.anotherid);
      conn.on('open', function(){
        conn.send('Message from that id');
      }
    );
  }
  
  videoconnect(){
    let video = this.myVideo.nativeElement;
    var localvar = this.peer;
    var fname = this.anotherid;
    
    var n = <any>navigator;
    
    n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia  || n.msGetUserMedia );
    
    n.getUserMedia({video: true, audio: true}, function(stream) {
      var call = localvar.call(fname, stream);
      call.on('stream', function(remotestream) {
        video.src = URL.createObjectURL(remotestream);
        video.play();
      })
    }, function(err){
      console.log('Failed to get stream', err);
    })
  }
}
