var c = document.getElementsByTagName('canvas')[0];
var b = document.body;
var a = c.getContext('2d');

function d(b,c,d,e)
{
    a.fillStyle=b;a.beginPath();a.arc(c,d,e,0,2*m.PI,!0);a.fill();a.fillRect(c,d,1,1)
}



m=Math;r=m.random;g=Date;l=+(new g);e=document;q=e.createElement("canvas");
w=e.createElement("canvas");o={};h=100;H=200;
v=window;t=c.width=v.innerWidth;u=c.height=v.innerHeight-5;
b.setAttribute("style","margin:0;background:#000");
k=a;
q.width=q.height=h;w.width=1e3;w.height=H;

for(j=0;++j<H;){
    for(i=0;1e3>++i;)a=q.getContext("2d"),z=.5-i/h,f=j/h-.5+.4*m.sqrt(m.abs(z)),f=z*z+2*f*f,
    .23>f&&d(.16<f?"#F00":"#F88",i,j,0),a=w.getContext("2d"),d(j>5e-4*i*i-.3*i+h?"#343":j>4e-4*i*i-.9*i+500?"#232":"#000",i,j,0);
    o[j]={x:r()*t,y:-h-r()*u,b:51-j/4,a:25+.4*j};o[H+j]={x:r()*t,y:r()*u-H,a:3*r()+1,c:j}
}
a=k;
var image = new Image();image.src = 'img/full_crop.png';
v.setInterval(function(){
    n=+(new g);a.clearRect(0,0,t,u);d("#FFA",H,250,150);d("#000",270,320,h);a.drawImage(w,0,u-H,t,H);
    a.drawImage(image, c.width /2 - (image.width * 1/2) / 2 , c.height / 2 - (image.height * 1/2) / 2, (image.width * 1/2), (image.height * 1/2));
    for(i=0;++i<H;)f=(n-l)/h,s=o[H+i],d("#FFA",s.x,s.y,m.floor(m.max(s.a+m.sin(s.c++/10)-.5,1))),z=o[i],
    a.drawImage(q,z.x+=-.1/(z.b/h)*f,z.y+=(5-z.b/10)*f,z.a,z.a),z.y>u&&(z.y=-h),z.x<-H&&(z.x=t);l=n
},60);