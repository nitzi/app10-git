// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery.extend(jQuery.easing,{easeOutBackCubic:function(e,f,a,j,i,g){var h=(f/=i)*f;return a+j*(-1.5*h*f*h+2*h*h+4*h*f+-9*h+5.5*f)}});function ws_dribbles(p,k,a){var e=jQuery;var j=e(this);var n=p.noCanvas||!document.createElement("canvas").getContext;var m=p.width,f=p.height;var i=e("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_dribbles").appendTo(a);if(!n){var c=e("<canvas>").css({position:"absolute",left:0,top:0,width:"100%",height:"100%"}).appendTo(i);var o=c.get(0).getContext("2d")}var l=[["#bbbbbb",0.1,0.3,0.18],["#b3b3b3",0.9,0.8,0.15],["#b6b6b6",0.68,0.4,0.2],["#b9b9b9",0.25,0.4,0.15],["#cccccc",0.11,0.7,0.15],["#c3c3c3",0.18,0.1,0.15],["#c6c6c6",0.4,0.2,0.15],["#c9c9c9",0.55,-0.04,0.18],["#d3d3d3",0,0.95,0.13],["#d6d6d6",0.5,0.8,0.22],["#d9d9d9",0.9,0.1,0.18],["#eeeeee",0.3,0.9,0.18],["#e3e3e3",0.93,0.5,0.14],["#e6e6e6",0.7,0.9,0.15]];var d=[[[0.1,0.3,0,1],[0.9,0.8,0.15,0.85],[0.68,0.4,0,0.9],[0.25,0.4,0.21,0.79],[0.11,0.7,0.3,0.7],[0.18,0.1,0.45,0.55],[0.4,0.2,0,0.75],[0.55,-0.04,0.48,0.52],[0,0.95,0.21,0.79],[0.5,0.8,0.1,0.9],[0.9,0.1,0.25,0.75],[0.3,0.9,0.18,0.82],[0.93,0.5,0.4,0.6],[0.7,0.9,0.13,0.87]],[[-0.3,-0.2,0.06,1],[-0.1,-0.3,0.12,1],[-0.2,-0.5,0,1],[-0.1,-0.3,0.24,1],[-0.3,-0.4,0.4,1],[-0.5,-0.1,0.76,1],[-0.2,-0.1,0.62,1],[-0.3,-0.3,0.48,1],[-0.4,-0.1,0.05,1],[-0.5,-0.2,0.6,1],[-0.3,-0.25,0.75,1],[-0.1,-0.4,0.3,1],[-0.2,-0.35,0.95,1],[-0.15,-0.25,0.2,1]],[[1.3,1.2,0.06,1],[1.1,1.3,0.12,1],[1.2,1.5,0,1],[1.1,1.3,0.24,1],[1.3,1.4,0.4,1],[1.5,1.1,0.76,1],[1.2,1.1,0.62,1],[1.3,1.3,0.48,1],[1.4,1.1,0.05,1],[1.5,1.2,0.6,1],[1.3,1.25,0.75,1],[1.1,1.4,0.3,1],[1.2,1.35,0.95,1],[1.15,1.25,0.2,1]],[[0.1,1.3,0,1],[0.9,1.34,0.15,0.85],[0.68,1.23,0,0.9],[0.25,1.5,0.21,0.79],[0.11,1.2,0.3,0.7],[0.18,1.4,0.16,0.84],[0.4,1.17,0,0.75],[0.55,1.2,0,0.52],[0,1.5,0.21,0.79],[0.5,1.45,0,0.9],[0.9,1.34,0.25,0.75],[0.3,1.6,0.18,0.82],[0.93,1.2,0.09,0.91],[0.7,1.15,0.13,0.87]],[[0.1,-0.3,0,1],[0.9,-0.34,0.15,0.85],[0.68,-0.23,0,0.9],[0.25,-0.5,0.21,0.79],[0.11,-0.2,0.3,0.7],[0.18,-0.4,0.16,0.84],[0.4,-0.17,0,0.75],[0.55,-0.2,0,0.52],[0,-0.5,0.21,0.79],[0.5,-0.45,0,0.9],[0.9,-0.34,0.25,0.75],[0.3,-0.6,0.18,0.82],[0.93,-0.2,0.09,0.91],[0.7,-0.15,0.13,0.87]],[[-0.2,-0.1,0,1],[1.3,1.1,0.15,0.85],[0.48,1.4,0,0.9],[1.2,1.6,0.21,0.79],[1.11,-0.15,0.3,0.7],[0.28,1.3,0.16,0.84],[-0.1,-0.4,0,0.75],[0.15,1.3,0,0.52],[-0.5,0.85,0.21,0.79],[-0.2,0.7,0,0.9],[1.4,0.2,0.25,0.75],[1.1,1.5,0.18,0.82],[-0.43,-0.2,0.09,0.91],[0.7,1.5,0.13,0.87]]];function b(y,w,t,q){y.clearRect(0,0,m,f);for(var r=0,v=t.length;r<v;r++){var s=2-t[r][3];var x=t[r][2]*(1-w);var h=Math.max(0,Math.min(1,w*s-x));if(q&&e.easing[q]){h=e.easing[q](1,h,0,1,1,1)}var u=m;if(m/f<=1.8&&m/f>0.7){u*=2}else{if(m/f<=0.7){u=f*2}}y.beginPath();y.arc((t[r][0]+(l[r][1]-t[r][0])*h)*m,(t[r][1]+(l[r][2]-t[r][1])*h)*f,l[r][3]*h*u,0,2*Math.PI,false);y.fillStyle=l[r][0];y.fill()}}this.go=function(x,s){if(n){a.find(".ws_list").css("transform","translate3d(0,0,0)").stop(true).animate({left:(x?-x+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},p.duration,"easeInOutExpo",function(){j.trigger("effectEnd")})}else{m=a.width();f=a.height();var u=Math.floor(Math.random()*(d.length));var y=d[u];var r=d[Math.floor(Math.random()*(d.length))];c.attr({width:m,height:f});var v=k.get(u==0?s:x);for(var t=0,w=l.length;t<w;t++){var q=Math.abs(l[t][1]),h=Math.abs(l[t][2]);l[t][0]=g(v,{x:q*m,y:h*f,w:2,h:2})||l[t][0]}wowAnimate(function(z){b(o,z,y,"easeOutBackCubic")},0,1,p.duration/2,function(){a.find(".ws_list").css({left:(x?-x+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))});wowAnimate(function(z){b(o,1-z,r,"easeOutBackCubic")},0,1,p.duration/2,function(){o.clearRect(0,0,m,f);j.trigger("effectEnd")})})}};function g(z,q){q=q||{};var B=1,t=q.exclude||[],y;var v=document.createElement("canvas"),s=v.getContext("2d"),r=v.width=z.naturalWidth,F=v.height=z.naturalHeight;s.drawImage(z,0,0,z.naturalWidth,z.naturalHeight);try{y=s.getImageData(q.x?q.x:0,q.y?q.y:0,q.w?q.w:z.width,q.h?q.h:z.height)["data"]}catch(A){return false}var u=(q.w?q.w:z.width*q.h?q.h:z.height)||y.length,w={},D="",C=[],h={dominant:{name:"",count:0}};var x=0;while(x<u){C[0]=y[x];C[1]=y[x+1];C[2]=y[x+2];D=C.join(",");if(D in w){w[D]=w[D]+1}else{w[D]=1}if(t.indexOf(["rgb(",D,")"].join(""))===-1){var E=w[D];if(E>h.dominant.count){h.dominant.name=D;h.dominant.count=E}}x+=B*4}return["rgb(",h.dominant.name,")"].join("")}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_book(p,n,b){var f=jQuery;var m=f(this);var i=f(".ws_list",b);var k=f("<div>").addClass("ws_effect ws_book").css({position:"absolute",top:0,left:0,width:"100%",height:"100%"}).appendTo(b),e=p.duration,d=p.perspective||0.4,g=p.shadow||0.35,a=p.noCanvas||false,l=p.no3d||false;var o={domPrefixes:" Webkit Moz ms O Khtml".split(" "),testDom:function(r){var q=this.domPrefixes.length;while(q--){if(typeof document.body.style[this.domPrefixes[q]+r]!=="undefined"){return true}}return false},cssTransitions:function(){return this.testDom("Transition")},cssTransforms3d:function(){var r=(typeof document.body.style.perspectiveProperty!=="undefined")||this.testDom("Perspective");if(r&&/AppleWebKit/.test(navigator.userAgent)){var t=document.createElement("div"),q=document.createElement("style"),s="Test3d"+Math.round(Math.random()*99999);q.textContent="@media (-webkit-transform-3d){#"+s+"{height:3px}}";document.getElementsByTagName("head")[0].appendChild(q);t.id=s;document.body.appendChild(t);r=t.offsetHeight===3;q.parentNode.removeChild(q);t.parentNode.removeChild(t)}return r},canvas:function(){if(typeof document.createElement("canvas").getContext!=="undefined"){return true}}};if(!l){l=o.cssTransitions()&&o.cssTransforms3d()}if(!a){a=o.canvas()}var j;this.go=function(r,q,E){if(j){return -1}var v=n.get(r),G=n.get(q);if(E==undefined){E=(q==0&&r!=q+1)||(r==q-1)}else{E=!E}var s=f("<div>").appendTo(k);var t=f(v);t={width:t.width(),height:t.height(),marginLeft:parseFloat(t.css("marginLeft")),marginTop:parseFloat(t.css("marginTop"))};if(l){var y={background:"#000",position:"absolute",left:0,top:0,width:"100%",height:"100%",transformStyle:"preserve-3d",zIndex:3,outline:"1px solid transparent"};perspect=b.width()*(3-d*2);s.css(y).css({perspective:perspect,transform:"translate3d(0,0,0)"});var z=90;var D=f("<div>").css(y).css({position:"relative","float":"left",width:"50%",overflow:"hidden"}).append(f("<img>").attr("src",(E?v:G).src).css(t)).appendTo(s);var C=f("<div>").css(y).css({position:"relative","float":"left",width:"50%",overflow:"hidden"}).append(f("<img>").attr("src",(E?G:v).src).css(t).css({marginLeft:-t.width/2})).appendTo(s);var I=f("<div>").css(y).css({display:E?"block":"none",width:"50%",transform:"rotateY("+(E?0.1:z)+"deg)",transition:(E?"ease-in ":"ease-out ")+e/2000+"s",transformOrigin:"right",overflow:"hidden"}).append(f("<img>").attr("src",(E?G:v).src).css(t)).appendTo(s);var F=f("<div>").css(y).css({display:E?"none":"block",left:"50%",width:"50%",transform:"rotateY(-"+(E?z:0.1)+"deg)",transition:(E?"ease-out ":"ease-in ")+e/2000+"s",transformOrigin:"left",overflow:"hidden"}).append(f("<img>").attr("src",(E?v:G).src).css(t).css({marginLeft:-t.width/2})).appendTo(s)}else{if(a){var x=f("<div>").css({position:"absolute",top:0,left:E?0:"50%",width:"50%",height:"100%",overflow:"hidden",zIndex:6}).append(f(n.get(r)).clone().css({position:"absolute",height:"100%",right:E?"auto":0,left:E?0:"auto"})).appendTo(s).hide();var B=f("<div>").css({position:"absolute",width:"100%",height:"100%",left:0,top:0,zIndex:8}).appendTo(s).hide();var H=f("<canvas>").css({position:"absolute",zIndex:2,left:0,top:-B.height()*d/2}).attr({width:B.width(),height:B.height()*(d+1)}).appendTo(B);var A=H.clone().css({top:0,zIndex:1}).attr({width:B.width(),height:B.height()}).appendTo(B);var w=H.get(0).getContext("2d");var u=A.get(0).getContext("2d")}else{i.stop(true).animate({left:(r?-r+"00%":(/Safari/.test(navigator.userAgent)?"0%":0))},e,"easeInOutExpo")}}if(!l&&a){var D=w;var C=u;var I=G;var F=v}j=new h(E,z,D,C,I,F,B,H,A,x,t,function(){m.trigger("effectEnd");s.remove();j=0})};function c(G,s,A,v,u,E,D,C,B,t,r){numSlices=u/2,widthScale=u/B,heightScale=(1-E)/numSlices;G.clearRect(0,0,r.width(),r.height());for(var q=0;q<numSlices+widthScale;q++){var z=(D?q*p.width/u+p.width/2:(numSlices-q)*p.width/u);var H=A+(D?2:-2)*q,F=v+t*heightScale*q/2;if(z<0){z=0}if(H<0){H=0}if(F<0){F=0}G.drawImage(s,z,0,2.5,p.height,H,F,2,t*(1-(heightScale*q)))}G.save();G.beginPath();G.moveTo(A,v);G.lineTo(A+(D?2:-2)*(numSlices+widthScale),v+t*heightScale*(numSlices+widthScale)/2);G.lineTo(A+(D?2:-2)*(numSlices+widthScale),t*(1-heightScale*(numSlices+widthScale))+v+t*heightScale*(numSlices+widthScale)/2);G.lineTo(A,v+t);G.closePath();G.clip();G.fillStyle="rgba(0,0,0,"+Math.round(C*100)/100+")";G.fillRect(0,0,r.width(),r.height());G.restore()}function h(A,r,C,B,y,x,v,w,u,z,t,E){if(l){if(!A){r*=-1;var D=B;B=C;C=D;D=x;x=y;y=D}setTimeout(function(){C.children("img").css("opacity",g).animate({opacity:1},e/2);y.css("transform","rotateY("+r+"deg)").children("img").css("opacity",1).animate({opacity:g},e/2,function(){y.hide();x.show().css("transform","rotateX(0deg) rotateY(0deg)").children("img").css("opacity",g).animate({opacity:1},e/2);B.children("img").css("opacity",1).animate({opacity:g},e/2)})},0);setTimeout(E,e)}else{if(a){v.show();var q=new Date;var s=true;wowAnimate(function(F){var I=jQuery.easing.easeInOutQuint(1,F,0,1,1),H=jQuery.easing.easeInOutCubic(1,F,0,1,1),L=!A;if(F<0.5){I*=2;H*=2;var G=y}else{L=A;I=(1-I)*2;H=(1-H)*2;var G=x}var J=v.height()*d/2,N=(1-I)*v.width()/2,M=1+H*d,K=v.width()/2;c(C,G,K,J,N,M,L,H*g,K,v.height(),w);if(s){z.show();s=false}B.clearRect(0,0,u.width(),u.height());B.fillStyle="rgba(0,0,0,"+(g-H*g)+")";B.fillRect(L?K:0,0,u.width()/2,u.height())},0,1,e,E)}}}}jQuery.extend(jQuery.easing,{easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a}});// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 8.7
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"dribbles,book",prev:"",next:"",duration:20*100,delay:20*100,width:640,height:360,autoPlay:true,autoPlayVideo:false,playPause:true,stopOnHover:false,loop:false,bullets:1,caption:true,captionEffect:"parallax",controls:true,controlsThumb:false,responsive:1,fullScreen:false,gestures:2,onBeforeStep:0,images:0});