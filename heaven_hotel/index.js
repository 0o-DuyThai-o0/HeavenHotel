var index=1;
change = function(){
    var imgs = ["./image/header2.jpg","./image/header3.jpg"];
    document.getElementById('img').src = imgs[index];
    index++;
    if(index == 2){
        index = 0;
    }
}

setInterval(change,5000);   