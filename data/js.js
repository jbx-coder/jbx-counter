let newmoney1=0
let newmoney2=0
let newmoney3=0
let k=1
let x=0
a=1
// 初始设置


images=[
    "url('./data/pictures/bg1.jpg')",
    "url('./data/pictures/bg2.jpg')",
    "url('./data/pictures/bg3.jpg')",
    "url('./data/pictures/bg4.jpg')",
    "url('./data/pictures/bg5.jpg')"
]
// 背景来源


var p1m1 = document.getElementById('p1/-1')
var p1p1 = document.getElementById('p1/+1')
var p1m2 = document.getElementById('p1/-2')
var p1m5 = document.getElementById('p1/-5')
var p1m10 = document.getElementById('p1/-10')
var p1m32 = document.getElementById('p1/-32')
var p1p32 = document.getElementById('p1/+32')
var charge1 = document.getElementById('p1/charge')
var nm1=document.getElementById('money1')
var p2m1 = document.getElementById('p2/-1')
var p2p1 = document.getElementById('p2/+1')
var p2m2 = document.getElementById('p2/-2')
var p2m5 = document.getElementById('p2/-5')
var p2m10 = document.getElementById('p2/-10')
var p2m32 = document.getElementById('p2/-32')
var p2p32 = document.getElementById('p2/+32')
var charge2 = document.getElementById('p2/charge')
var nm2=document.getElementById('money2')
var p3m1 = document.getElementById('p3/-1')
var p3p1 = document.getElementById('p3/+1')
var p3m2 = document.getElementById('p3/-2')
var p3m5 = document.getElementById('p3/-5')
var p3m10 = document.getElementById('p3/-10')
var p3m32 = document.getElementById('p3/-32')
var p3p32 = document.getElementById('p3/+32')
var charge3 = document.getElementById('p3/charge')
var nm3=document.getElementById('money3')
var question=document.getElementById('question')
var per1=document.getElementById('per1')
var per2=document.getElementById('per2')
var per3=document.getElementById('per3')
var per4=document.getElementById('per4')
var per5=document.getElementById('per5')
var per6=document.getElementById('per6')
var dataclear=document.getElementById('dataclear')
var changebg=document.getElementById('changebg')
var body=document.getElementById("bg")
var bomb=document.getElementById('bomb')
// 获取元素


function getdata(){
    if('jbx-coder-counter' in localStorage){
        data=JSON.parse(localStorage.getItem('jbx-coder-counter'))
        newmoney1=data[0]
        newmoney2=data[1]
        newmoney3=data[2]
        k=data[3]
        nm3.innerHTML=newmoney3/k
        nm2.innerHTML=newmoney2/k
        nm1.innerHTML=newmoney1/k
        per1.style.backgroundColor=data[4]
        per2.style.backgroundColor=data[5]
        per3.style.backgroundColor=data[6]
        per4.style.backgroundColor=data[7]
        per5.style.backgroundColor=data[8]
        per6.style.backgroundColor=data[9]
        question.innerHTML=data[10]
        x=data[11]
        a=data[12]
        bomb.innerHTML=data[13]
        body.style.backgroundImage=images[x]
    }
}
getdata()

function setdata(){
    data =[
        newmoney1,
        newmoney2,
        newmoney3,
        k,
        per1.style.backgroundColor,
        per2.style.backgroundColor,
        per3.style.backgroundColor,
        per4.style.backgroundColor,
        per5.style.backgroundColor,
        per6.style.backgroundColor,
        question.innerHTML,
        x,
        a,
        bomb.innerHTML
    ]
    localStorage.setItem('jbx-coder-counter',JSON.stringify(data))
} 
// 定义数据储存读取

per1.onclick=function(){
    k=10
    nm1.innerHTML=newmoney1/k 
    nm2.innerHTML=newmoney2/k 
    nm3.innerHTML=newmoney3/k
    per1.style.backgroundColor='red'
    per2.style.backgroundColor='cyan'
    per3.style.backgroundColor='cyan'
    per4.style.backgroundColor='cyan'
    per5.style.backgroundColor='cyan'
    per6.style.backgroundColor='cyan'
    question.innerHTML='0.1元/张（点击按钮修改）'
    setdata()
}
per2.onclick=function(){
    k=5
    nm1.innerHTML=newmoney1/k 
    nm2.innerHTML=newmoney2/k 
    nm3.innerHTML=newmoney3/k
    per2.style.backgroundColor='red'
    per1.style.backgroundColor='cyan'
    per3.style.backgroundColor='cyan'
    per4.style.backgroundColor='cyan'
    per5.style.backgroundColor='cyan'
    per6.style.backgroundColor='cyan'
    question.innerHTML='0.2元/张（点击按钮修改）'
    setdata()
}
per3.onclick=function(){
    k=2
    nm1.innerHTML=newmoney1/k 
    nm2.innerHTML=newmoney2/k 
    nm3.innerHTML=newmoney3/k
    per3.style.backgroundColor='red'
    per2.style.backgroundColor='cyan'
    per1.style.backgroundColor='cyan'
    per4.style.backgroundColor='cyan'
    per5.style.backgroundColor='cyan'
    per6.style.backgroundColor='cyan'
    question.innerHTML='0.5元/张（点击按钮修改）'
    setdata()
} 
per4.onclick=function(){
    k=1
    nm1.innerHTML=newmoney1/k 
    nm2.innerHTML=newmoney2/k 
    nm3.innerHTML=newmoney3/k
    per4.style.backgroundColor='red'
    per2.style.backgroundColor='cyan'
    per3.style.backgroundColor='cyan'
    per1.style.backgroundColor='cyan'
    per5.style.backgroundColor='cyan'
    per6.style.backgroundColor='cyan'
    question.innerHTML='1元/张（点击按钮修改）'
    setdata()
}
per5.onclick=function(){
    k=0.5
    nm1.innerHTML=newmoney1/k 
    nm2.innerHTML=newmoney2/k 
    nm3.innerHTML=newmoney3/k
    per5.style.backgroundColor='red'
    per2.style.backgroundColor='cyan'
    per3.style.backgroundColor='cyan'
    per4.style.backgroundColor='cyan'
    per1.style.backgroundColor='cyan'
    per6.style.backgroundColor='cyan'
    question.innerHTML='2元/张（点击按钮修改）'
    setdata()
}
per6.onclick=function(){
    k=0.2
    nm1.innerHTML=newmoney1/k 
    nm2.innerHTML=newmoney2/k 
    nm3.innerHTML=newmoney3/k
    per6.style.backgroundColor='red'
    per2.style.backgroundColor='cyan'
    per3.style.backgroundColor='cyan'
    per4.style.backgroundColor='cyan'
    per1.style.backgroundColor='cyan'
    per5.style.backgroundColor='cyan'
    question.innerHTML='5元/张（点击按钮修改）'
    setdata()
}
p1m1.onclick= function(){
    newmoney1-=1*a
    nm1.innerHTML=newmoney1/k            
}
p1p1.onclick= function(){
    newmoney1+=1*a
    nm1.innerHTML=newmoney1/k            
}
p1m2.onclick= function(){
    newmoney1-=2*a
    nm1.innerHTML=newmoney1/k            
}
p1m5.onclick= function(){
    newmoney1-=5*a
    nm1.innerHTML=newmoney1/k            
}
p1m10.onclick= function(){
    newmoney1-=10*a
    nm1.innerHTML=newmoney1/k            
}
p1m32.onclick= function(){
    newmoney1-=32*a
    nm1.innerHTML=newmoney1/k            
}
p1p32.onclick= function(){
    newmoney1+=32*a
    nm1.innerHTML=newmoney1/k            
}
charge1.onclick= function(){
    newmoney1=-newmoney2-newmoney3
    nm1.innerHTML=newmoney1/k
    a=1
    bomb.innerText='BOMB'
    setdata()           
}
p2m1.onclick= function(){
    newmoney2-=1*a
    nm2.innerHTML=newmoney2/k            
}
p2p1.onclick= function(){
    newmoney2+=1*a
    nm2.innerHTML=newmoney2/k            
}
p2m2.onclick= function(){
    newmoney2-=2*a
    nm2.innerHTML=newmoney2/k           
}
p2m5.onclick= function(){
    newmoney2-=5*a
    nm2.innerHTML=newmoney2/k            
}
p2m10.onclick= function(){
    newmoney2-=10*a
    nm2.innerHTML=newmoney2/k           
}
p2m32.onclick= function(){
    newmoney2-=32*a
    nm2.innerHTML=newmoney2/k           
}
p2p32.onclick= function(){
    newmoney2+=32*a
    nm2.innerHTML=newmoney2/k          
}
charge2.onclick= function(){
    newmoney2=-newmoney1-newmoney3
    nm2.innerHTML=newmoney2/k 
    a=1
    bomb.innerText='BOMB'
    setdata()          
}
p3m1.onclick= function(){
    newmoney3-=1*a
    nm3.innerHTML=newmoney3/k            
}
p3p1.onclick= function(){
    newmoney3 +=1*a
    nm3.innerHTML=newmoney3/k           
}
p3m2.onclick= function(){
    newmoney3-=2*a
    nm3.innerHTML=newmoney3/k          
}
p3m5.onclick= function(){
    newmoney3-=5*a
    nm3.innerHTML=newmoney3/k            
}
p3m10.onclick= function(){
    newmoney3-=10*a
    nm3.innerHTML=newmoney3/k           
}
p3m32.onclick= function(){
    newmoney3-=32*a
    nm3.innerHTML=newmoney3/k           
}
p3p32.onclick= function(){
    newmoney3+=32*a
    nm3.innerHTML=newmoney3/k           
}
charge3.onclick= function(){
    newmoney3=-newmoney1-newmoney2
    nm3.innerHTML=newmoney3/k   
    a=1
    bomb.innerText='BOMB'
    setdata()        
}

// 计算

dataclear.onclick=function(){
    localStorage.clear('jbx-coder-counter')
    judge=0
    question.innerHTML='1元/张（点击按钮修改）'
    newmoney1=0
    newmoney2=0
    newmoney3=0
    k=1
    nm1.innerHTML=newmoney1/k 
    nm2.innerHTML=newmoney2/k 
    nm3.innerHTML=newmoney3/k
    per4.style.backgroundColor='red'
    per2.style.backgroundColor='cyan'
    per3.style.backgroundColor='cyan'
    per6.style.backgroundColor='cyan'
    per1.style.backgroundColor='cyan'
    per5.style.backgroundColor='cyan' 
    x=0 
    body.style.backgroundImage=images[x]
    a=1
    bomb.innerText='BOMB' 
}

changebg.onclick=function(){
    if(x>3){
        x=0
    }else{
        x+=1
    }
    body.style.backgroundImage=images[x]
    setdata()
}
bomb.onclick=function(){
    a+=1
    bomb.innerText='翻'+a+'倍'
    setdata()
}