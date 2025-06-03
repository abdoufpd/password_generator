var width = window.innerWidth;

var writep = document.getElementById('password');
var ti= document.querySelector('#p')

writep.style.width=100-40+'%';

//Notification.requestPermission();

//window.setInterval(e=>{document.title = writep.value+' - Password Creator';new Notification('Now Date : '+ new Date(),{body:'Live_Time_Created-By ==> Farouk',icon:"8.png",tag:'No Reapeat'})},1000)


setTimeout(function(){document.querySelector('.loader').style.display = 'none';window.onkeypress=function(){window.location='./Password_Maker.html'}},5000)

ti.value = document.cookie.replace('EPGC=','')
function createPassword(){
        
        
        var length = 8;
        var characters = 'abcdefghklmnopkrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890._-'
        var word ="";
        for (var a = 0,n = characters.length;a<length;++a){
            word += characters.charAt(Math.floor(Math.random() * n))
        }
        writep.value=word;var copybtn = document.getElementById('copybtn');
        copybtn.onclick=function (){writep.select();document.execCommand('copy');alert('Your password seccesfully copied to clipboard ☺ ');}
        document.cookie = 'EPGC'+'='+word+';'+ 'gtrgtg' + '; path= ';
        window.confirm('We Will Create A Data For More Usage Experience !! \n - Data_Created : '+document.cookie)
        
        
        
}

var p = document.getElementById('help');

p.style.display='none';
function help(){
        
        
        if(p.style.display=='none'){
            p.style.display='block'
        }else{
            p.style.display='none'
        }
}
var loader = document.querySelector('.loader');
if(loader.style.display=='flex'){
        
}