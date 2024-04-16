class BMP{
  constructor(arr){
    this.file = String.fromCharCode(arr[0]) + String.fromCharCode(arr[1])
    this.filesize = this.getByte(arr,2,5)
    this.reserve = this.getByte(arr,6,9)
    this.offset = this.getByte(arr,10,13)
    this.infoheadersize = this.getByte(arr,14,17)
    this.width = this.getByte(arr,18,21)
    this.height = this.getByte(arr,22,25)
    this.planes = this.getByte(arr,26,27)
    this.bpp = this.getByte(arr,28,29)
    this.compress = this.getByte(arr,30,33)
    this.bmpsize = this.getByte(arr,34,37)
    this.xpixel = this.getByte(arr,38,41)
    this.ypixel = this.getByte(arr,42,45)
    this.colorused = this.getByte(arr,46,49)
    this.importantcolor = this.getByte(arr,50,53)
  }
  getByte(arr,a,b){
    this.temp = 0
    for(var i=b;i>=a;i--) this.temp = this.temp * 256 + arr[i]
    return this.temp
  }
}

function setup(){
  noCanvas();
  noLoop();
  titleDiv = createElement("h1","BMP Reader with p5.js")
  authorDiv = createElement("h3","Author : Andy Lu")
  
  InfoShow = createElement("h3","<br><br>Show BMP Info (14 + 40 header)")
  
  fileInput = createFileInput(file => {
    const reader = new FileReader();
    
    
    reader.onload = e => {
      var arr = new Uint8Array(e.target.result)
      target = new BMP(arr)
      
      infoDiv.html("")
      infoDiv.html("<br>File : "+target.file,1)
      infoDiv.html("<br>File Size : "+target.filesize,1)
      infoDiv.html("<br>File Reserved : "+target.reserve,1)
      infoDiv.html("<br>File Offset : "+target.offset,1)
      infoDiv.html("<br><br>Info Header Size : "+target.infoheadersize,1)
      infoDiv.html("<br>BMP Width : "+target.width,1)
      infoDiv.html("<br>BMP Height : "+target.height,1)
      infoDiv.html("<br>BMP Planes : "+target.planes,1)
      infoDiv.html("<br>Bits per Pixel : "+target.bpp,1)
      infoDiv.html("<br>Compress : "+target.compress,1)
      infoDiv.html("<br>BMP Size : "+target.bmpsize,1)
      infoDiv.html("<br>xpixel : "+target.xpixel,1)
      infoDiv.html("<br>ypixel : "+target.ypixel,1)
      infoDiv.html("<br>Color Used : "+target.colorused,1)
      infoDiv.html("<br>Important Color : "+target.importantcolor,1)


      
    };
    reader.readAsArrayBuffer(file.file);
  });
  infoDiv = createElement("div")
}