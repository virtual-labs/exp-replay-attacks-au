"use strict";(self["webpackChunkexp_4"]=self["webpackChunkexp_4"]||[]).push([[488],{7488:function(e,t,s){s.r(t),s.d(t,{default:function(){return Oe}});var n=s(3396),o=s(9242),a=s(7139);const r={class:"flex-box"},i=(0,n._)("div",{id:"snackbar"},"Some text some message..",-1),l={class:"rem-space"},c={class:"col-1"},d={class:"row-3"},p={class:"row-3-content-space"},h={key:0,class:"step-1"},u=(0,n._)("p",null,"In this experiment, we will be combining active and passive attacks to retrieve the username and password of a user. You are the machine titled 'Hacker' in the network. Begin by intercepting a packet from a channel of your choice.",-1),f=(0,n._)("br",null,null,-1),m=(0,n._)("option",{value:"1"},"Channel 1",-1),g=(0,n._)("option",{value:"2"},"Channel 2",-1),k=(0,n._)("option",{value:"3"},"Channel 3",-1),b=[m,g,k],v={key:1,class:"step-2"},y=(0,n._)("h4",null,"Start packet transmission",-1),C=(0,n._)("p",null,"Now that you have established a man in the middle attack, you can use this to communicate with the server on behalf of the user. Click on 'Next' to send a packet to the server on behalf of the user.",-1),w=[y,C],x={key:2,class:"step-2"},_=(0,n._)("h4",null,"Packet intercepted successfully",-1),P=(0,n._)("p",null,"Now that you have intercepted a packet, you can use this to communicate with the server on behalf of the user. The packet you intercepted is shown in the terminal.",-1),B=(0,n._)("br",null,null,-1),L=(0,n._)("p",null,"To send the packet to the server on behalf of the user, click on 'Next' Remember to respond as soon as the packet is sent to avoid resetting the experiment.",-1),D=(0,n._)("br",null,null,-1),S={style:{"font-size":"x-large",color:"red"}},A={key:3},I=(0,n._)("h4",null,"Send response back",-1),E=(0,n._)("p",null,"Now that you have sent a packet to the server on behalf of the user, you can send a response back to the user. Click on 'Next' to send a response back to the user. Note that this packet will not actually reach the user, it will be intercepted by you.",-1),F=[I,E],H={key:4,class:"step-3"},N=(0,n._)("h4",null,"Received reply from server",-1),M=(0,n._)("p",null,"Intercepted packet was sent successfully to the server and the reply has been retrieved. Analyze the packet to identify username and password, and input them in the respective text fields here, to verify.",-1),R=(0,n._)("br",null,null,-1),T=(0,n._)("p",null,"Make sure you respond back to the user with the same packet you received from the server.",-1),W=(0,n._)("br",null,null,-1),$={class:"button-row"},U={class:"row-network"},j={class:"col-2"},z={class:"row-4"},q={class:"terminal"},V={class:"terminal-choices"};function G(e,t,s,m,g,k){const y=(0,n.up)("StyledButton"),C=(0,n.up)("ServerComponent"),I=(0,n.up)("EndSystemComponent"),E=(0,n.up)("NetworkInteractionComponent");return(0,n.wg)(),(0,n.iD)("main",null,[(0,n._)("div",r,[i,(0,n._)("div",l,[(0,n._)("div",c,[(0,n._)("div",d,[(0,n._)("div",p,[1===g.step?((0,n.wg)(),(0,n.iD)("div",h,[u,f,(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>g.chosenChannel=e)},b,512),[[o.bM,g.chosenChannel]])])):(0,n.kq)("",!0),2===g.step?((0,n.wg)(),(0,n.iD)("div",v,w)):(0,n.kq)("",!0),3===g.step?((0,n.wg)(),(0,n.iD)("div",x,[_,P,B,L,D,(0,n._)("p",null,[(0,n.Uk)("The packet has to be sent in the next "),(0,n._)("span",S,(0,a.zw)(g.countDown),1),(0,n.Uk)(" seconds or the experiment will fail as the server will close the connection after timing out waiting for a response. To send the packet, click on the corresponding Port no. under the 'Respond' section on your computer.")])])):(0,n.kq)("",!0),4===g.step?((0,n.wg)(),(0,n.iD)("div",A,F)):(0,n.kq)("",!0),5===g.step?((0,n.wg)(),(0,n.iD)("div",H,[N,M,R,T,W,(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>g.userName=e),placeholder:"username"},null,512),[[o.nr,g.userName]]),(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>g.password=e),placeholder:"password"},null,512),[[o.nr,g.password]])])):(0,n.kq)("",!0)]),(0,n._)("div",$,[(0,n.Wm)(y,{text:"Next",invisible:6!==g.step,"click-function":k.nextPage},null,8,["invisible","click-function"]),(0,n.Wm)(y,{text:1===g.step?"Start":"Next",invisible:3===g.step||5===g.step||6===g.step,"click-function":k.buttonClick,disable:g.disableButton&&3!==g.step&&5!==g.step},null,8,["text","invisible","click-function","disable"]),(0,n.Wm)(y,{text:"Verify","click-function":k.verifyCredentials,invisible:5!==g.step,disable:g.disableButton},null,8,["click-function","invisible","disable"]),(0,n.Wm)(y,{text:"Reset","click-function":k.reset,disable:g.disableButton},null,8,["click-function","disable"])])]),(0,n._)("div",U,[(0,n.Wm)(E,{ref:"childComponentRef"},{default:(0,n.w5)((()=>[(0,n.Wm)(I,{top:"10%",left:"5%",class:"box",id:"box1"},{default:(0,n.w5)((()=>[(0,n.Wm)(C,{"ip-address":g.ipAddress[0],port1:g.portsClientA[0],port2:g.portsClientA[1],port3:g.portsClientA[2],port4:g.portsClientA[3],"port-labels":g.computerAPortLabels},null,8,["ip-address","port1","port2","port3","port4","port-labels"])])),_:1}),(0,n.Wm)(I,{top:"40%",left:"5%",class:"box",id:"box2"},{default:(0,n.w5)((()=>[(0,n.Wm)(C,{"ip-address":g.ipAddress[1],port1:g.portsClientB[0],port2:g.portsClientB[1],port3:g.portsClientB[2],port4:g.portsClientB[3],"port-labels":g.computerBPortLabels},null,8,["ip-address","port1","port2","port3","port4","port-labels"])])),_:1}),(0,n.Wm)(I,{top:"70%",left:"5%",class:"box",id:"box3"},{default:(0,n.w5)((()=>[(0,n.Wm)(C,{"ip-address":g.ipAddress[2],port1:g.portsClientC[0],port2:g.portsClientC[1],port3:g.portsClientC[2],port4:g.portsClientC[3],"port-labels":g.computerCPortLabels},null,8,["ip-address","port1","port2","port3","port4","port-labels"])])),_:1}),(0,n.Wm)(I,{top:"10%",left:"75%",class:"box",id:"box4"},{default:(0,n.w5)((()=>[(0,n.Wm)(C,{onRespond:k.respond,"display-extra-options":!0,responseData:g.receivedPackages,"ip-address":g.ipAddress[3],port1:g.portsHacker[0],port2:g.portsHacker[1],port3:g.portsHacker[2],port4:g.portsHacker[3],"port-labels":g.mitmPortLabels},null,8,["onRespond","responseData","ip-address","port1","port2","port3","port4","port-labels"])])),_:1}),(0,n.Wm)(I,{top:"70%",left:"75%",class:"box",id:"box5","package-info":g.serverPackages},{default:(0,n.w5)((()=>[(0,n.Wm)(C,{"ip-address":g.ipAddress[4],port1:g.portsServer[0],port2:g.portsServer[1],port3:g.portsServer[2],port4:g.portsServer[3],"port-labels":g.computerDPortLabels},null,8,["ip-address","port1","port2","port3","port4","port-labels"])])),_:1},8,["package-info"])])),_:1},512)])]),(0,n._)("div",j,[(0,n._)("div",z,[(0,n._)("div",q,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(g.channelHackerData,((e,t)=>((0,n.wg)(),(0,n.iD)("span",{key:t},(0,a.zw)(e),1)))),128))]),(0,n._)("div",V,[(0,n._)("button",{class:(0,a.C_)(["terminal-button",{"active-button":!0}])}," Hacker ")])])])])])])}s(7658);const Z=e=>((0,n.dD)("data-v-a42d58b6"),e=e(),(0,n.Cn)(),e),O={id:"top-bar"},Y=Z((()=>(0,n._)("div",{class:"side-space"},null,-1))),K={class:"title"},J=Z((()=>(0,n._)("div",{class:"side-space"},[(0,n._)("button",{class:"submit-report"},"Report a Bug")],-1)));function Q(e,t,s,o,r,i){return(0,n.wg)(),(0,n.iD)("div",O,[Y,(0,n._)("div",K,(0,a.zw)(s.title),1),J])}var X={name:"TopBar",props:{title:{type:String,default:"Packet Simulator"}}},ee=s(89);const te=(0,ee.Z)(X,[["render",Q],["__scopeId","data-v-a42d58b6"]]);var se=te;const ne=["disabled"];function oe(e,t,s,o,r,i){return(0,n.wg)(),(0,n.iD)("button",{style:(0,a.j5)(i.buttonStyle),onClick:t[0]||(t[0]=(...e)=>s.clickFunction&&s.clickFunction(...e)),disabled:s.disable,class:"styled-button"},(0,a.zw)(s.text),13,ne)}var ae={name:"StyledButton",props:{backgroundColor:{type:String,default:"#288EC8"},textColor:{type:String,default:"white"},text:{type:String,default:"Button"},clickFunction:{type:Function,default:()=>{}},disable:{type:Boolean,default:!1},invisible:{type:Boolean,default:!1}},computed:{buttonStyle(){return{backgroundColor:this.backgroundColor,color:this.textColor,visibility:this.invisible?"hidden":"visible"}}}};const re=(0,ee.Z)(ae,[["render",oe],["__scopeId","data-v-a67e5656"]]);var ie=re;const le=e=>((0,n.dD)("data-v-2497eb48"),e=e(),(0,n.Cn)(),e),ce={id:"margin-container"},de={id:"root"},pe=le((()=>(0,n._)("svg",{id:"lineCanvas"},null,-1))),he={id:"overlay"};function ue(e,t,s,o,a,r){return(0,n.wg)(),(0,n.iD)("div",ce,[(0,n._)("div",de,[pe,(0,n._)("div",he,[(0,n.WI)(e.$slots,"default",{},void 0,!0)])])])}var fe={name:"NetworkInteractionComponent",props:{onPackageAnimationEnd:{type:Function},onPackageReachDestination:{type:Function}},mounted(){let e=document.getElementById("margin-container").getBoundingClientRect(),t=e.width-50+"px",s=e.height-50+"px";document.getElementById("root").style.width=t,document.getElementById("root").style.height=s,document.getElementById("lineCanvas").style.width=t,document.getElementById("lineCanvas").style.height=s,document.getElementById("overlay").style.width=t,document.getElementById("overlay").style.height=s},methods:{drawSVGLine(e,t,s,n,o,a){let r=document.getElementById("lineCanvas"),i=document.createElementNS("http://www.w3.org/2000/svg","line");if(o?i.setAttribute("style","stroke:"+o+";stroke-width:1"):i.setAttribute("style","stroke:rgb(0,0,0);stroke-width:1"),i.setAttribute("x1",e),i.setAttribute("y1",t),i.setAttribute("x2",s),i.setAttribute("y2",n),r.appendChild(i),a){let o=document.createElementNS("http://www.w3.org/2000/svg","text");o.setAttribute("x",(e+s)/2),o.setAttribute("y",(t+n)/2-6),o.setAttribute("text-anchor","middle"),o.setAttribute("alignment-baseline","middle"),o.setAttribute("font-size","12px"),o.setAttribute("font-weight","500"),o.setAttribute("fill","black"),o.setAttribute("transform","rotate("+180*Math.atan((n-t)/(s-e))/Math.PI+" "+(e+s)/2+" "+(t+n)/2+")"),o.innerHTML=a,r.appendChild(o)}},animatePackage(e,t,s,n){let o=document.getElementById(t),a=document.getElementById(e),r=document.getElementById(s),i=document.getElementById("overlay");if(!o||!a||!r||!i)return;let l=40,c=o.offsetHeight/2,d=r.offsetLeft+r.offsetWidth,p=r.offsetTop+r.offsetHeight;o.remove(),i.appendChild(o),o.style.left=d+"px",o.style.top=p+"px";let h=r.offsetLeft+r.offsetWidth/2-l,u=r.offsetTop+r.offsetHeight/2-c;o.style.left=h+"px",o.style.top=u+"px";let f=async()=>{if(h=Math.round(h),u=Math.round(u),o.offsetLeft===h&&o.offsetTop===u){let e=a.offsetLeft+a.offsetWidth/2-l,s=a.offsetTop+a.offsetHeight/2-c;o.style.left=e+"px",o.style.top=s+"px";let r=async()=>{if(e=Math.round(e),s=Math.round(s),o.offsetLeft===e&&o.offsetTop===s){let e=a.offsetLeft+a.offsetWidth,s=a.offsetTop+a.offsetHeight;o.style.left=e+"px",o.style.top=s+"px";let r=()=>{o.offsetLeft===e&&o.offsetTop===s?(this.onPackageAnimationEnd&&this.onPackageAnimationEnd(t),n&&n()):setTimeout((()=>{r()}),100)};r()}else setTimeout((()=>{r()}),100)};r().then((()=>{this.onPackageReachDestination&&this.onPackageReachDestination(t)}))}else setTimeout((()=>{f()}),500)};f()},arrangePackages(e,t){if(!e)return;let s=document.getElementById(e),n=document.getElementById("overlay"),o=s.offsetLeft+s.offsetWidth,a=s.offsetTop+s.offsetHeight;console.log(t);for(let r=0;r<t.length;r++){console.log(t[r],"error");let e=document.getElementById(t[r]);n.appendChild(e),e.style.left=o+"px",e.style.top=a+"px";let s=o+15*r,i=a+15*r;e.style.left=s+"px",e.style.top=i+"px"}},drawLine(e,t,s,n){let o=document.getElementById(e),a=document.getElementById(t);if(!o||!a)return;let r=o.offsetLeft+o.offsetWidth/2,i=o.offsetTop+o.offsetHeight/2,l=a.offsetLeft+a.offsetWidth/2,c=a.offsetTop+a.offsetHeight/2;s||(s="black"),n?this.drawSVGLine(r,i,l,c,s,n):this.drawSVGLine(r,i,l,c,s)},drawLineOffset(e,t,s,n,o,a,r){let i=document.getElementById(e),l=document.getElementById(t);if(!i||!l)return;let c=i.offsetLeft+i.offsetWidth/2,d=i.offsetTop+i.offsetHeight/2,p=l.offsetLeft+l.offsetWidth/2,h=l.offsetTop+l.offsetHeight/2;if(n)if(r){let e=c-s/2,t=p-s/2;this.drawSVGLine(e,d,t,h,o,a)}else{let e=c+s/2,t=p+s/2;this.drawSVGLine(e,d,t,h,o,a)}else if(r){let e=d-s/2,t=h-s/2;this.drawSVGLine(c,e,p,t,o,a)}else{let e=d+s/2,t=h+s/2;this.drawSVGLine(c,e,p,t,o,a)}},clearLines(){let e=document.getElementById("lineCanvas");e.parentNode.replaceChild(e.cloneNode(!1),e)}}};const me=(0,ee.Z)(fe,[["render",ue],["__scopeId","data-v-2497eb48"]]);var ge=me;const ke=["id"],be={id:"endSystemVector"},ve=["id"];function ye(e,t,s,o,r,i){const l=(0,n.up)("PackageComponent");return(0,n.wg)(),(0,n.iD)("div",{class:(0,a.C_)([s.Class,"rootElementEndSystem"]),id:s.Id,style:(0,a.j5)({top:s.top,left:s.left})},[(0,n._)("div",be,[(0,n.WI)(e.$slots,"default",{},void 0,!0)]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.packageInfo,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t},[e.packageId?((0,n.wg)(),(0,n.iD)("div",{key:0,style:(0,a.j5)([{position:"absolute",right:"-88px"},{transition:"ease-in-out "+(e.animationSeconds??1)+"s",visibility:e.displayPackage?"visible":"hidden"}]),id:e.packageId,class:"package"},[(0,n.Wm)(l,{data:e.data,"background-color":e.packageBackgroundColor},null,8,["data","background-color"])],12,ve)):(0,n.kq)("",!0)])))),128))],14,ke)}const Ce={class:"packageText"},we={key:0,class:"dash"};function xe(e,t,s,o,r,i){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",{id:"packageBox",style:(0,a.j5)({backgroundColor:s.backgroundColor})},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.data,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:e.id},[(0,n._)("div",Ce,(0,a.zw)(e),1),i.addDash(t)?((0,n.wg)(),(0,n.iD)("div",we)):(0,n.kq)("",!0)])))),128))],4)])}var _e={name:"PackageComponent",methods:{addDash(e){return this.data.length!==e+1}},props:{data:{type:Array},backgroundColor:{type:String,default:"#ABFF8E"}}};const Pe=(0,ee.Z)(_e,[["render",xe],["__scopeId","data-v-f0687b40"]]);var Be=Pe,Le={name:"EndSystemComponent",components:{PackageComponent:Be},props:{Class:{type:String},Id:{type:String},top:{type:String},left:{type:String},packageInfo:{type:[Object]}},computed:{packagePosition(){return"-50px"}}};const De=(0,ee.Z)(Le,[["render",ye],["__scopeId","data-v-0ce0fef6"]]);var Se=De;const Ae=e=>((0,n.dD)("data-v-30723712"),e=e(),(0,n.Cn)(),e),Ie={class:"root-col"},Ee={class:"col"},Fe={class:"id-address"},He={class:"col"},Ne={class:"circle-div-text"},Me={class:"circle-div-text"},Re={class:"circle-div-text"},Te={class:"circle-div-text"},We=Ae((()=>(0,n._)("div",{class:"title"}," Respond ",-1))),$e={class:"respond-buttons"},Ue=["onClick"];function je(e,t,s,o,r,i){return(0,n.wg)(),(0,n.iD)("div",Ie,[(0,n._)("div",{class:"root",style:(0,a.j5)({backgroundColor:s.backgroundColor??"#AA9A8B",border:s.displayExtraOptions?"none":"1px solid black"})},[(0,n._)("div",Ee,[(0,n._)("span",Fe,(0,a.zw)(s.ipAddress),1)]),(0,n._)("div",He,[(0,n._)("div",{class:"circle-div",style:(0,a.j5)({backgroundColor:i.port0Color})},[(0,n._)("span",Ne,(0,a.zw)(i.portLabel(0)),1)],4),(0,n._)("div",{class:"circle-div",style:(0,a.j5)({backgroundColor:i.port1Color})},[(0,n._)("span",Me,(0,a.zw)(i.portLabel(1)),1)],4),(0,n._)("div",{class:"circle-div",style:(0,a.j5)({backgroundColor:i.port2Color})},[(0,n._)("span",Re,(0,a.zw)(i.portLabel(2)),1)],4),(0,n._)("div",{class:"circle-div",style:(0,a.j5)({backgroundColor:i.port3Color})},[(0,n._)("span",Te,(0,a.zw)(i.portLabel(3)),1)],4)])],4),s.displayExtraOptions?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"extra-options",style:(0,a.j5)({visibility:0!==s.responseData.length?"visible":"hidden"})},[We,(0,n._)("div",$e,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.responseData,((e,t)=>((0,n.wg)(),(0,n.iD)("button",{key:t,style:(0,a.j5)({backgroundColor:e.backgroundColour}),onClick:t=>this.$emit("respond",e)}," Port: "+(0,a.zw)(parseInt(e.serverPort)+1),13,Ue)))),128))])],4)):(0,n.kq)("",!0)])}var ze={name:"ServerComponent",props:{port1:Number,port2:Number,port3:Number,port4:Number,portLabels:[],ipAddress:String,displayExtraOptions:Boolean,responseData:[],backgroundColor:String},computed:{port0Color(){return 0===this.port1?"#FF0000":1===this.port1?"#33FF00":2===this.port1?"#FFD600":"#FF0000"},port1Color(){return 0===this.port2?"#FF0000":1===this.port2?"#33FF00":2===this.port2?"#FFD600":"#FF0000"},port2Color(){return 0===this.port3?"#FF0000":1===this.port3?"#33FF00":2===this.port3?"#FFD600":"#FF0000"},port3Color(){return 0===this.port4?"#FF0000":1===this.port4?"#33FF00":2===this.port4?"#FFD600":"#FF0000"}},methods:{portLabel(e){return this.portLabels&&this.portLabels.length>e?this.portLabels[e]:e+1}}};const qe=(0,ee.Z)(ze,[["render",je],["__scopeId","data-v-30723712"]]);var Ve=qe,Ge={name:"App",mounted(){for(let e=0;e<5;e++){let t="";if(3!==e){for(let e=0;e<4;e++)t+=Math.floor(255*Math.random())+1,3!==e&&(t+=".");this.ipAddress.push(t)}else this.ipAddress.push("Hacker - MITM")}this.$refs.childComponentRef.drawLine("box1","box5",null,"Unencrypted Channel 1"),this.$refs.childComponentRef.drawLine("box2","box5",null,"Unencrypted Channel 2"),this.$refs.childComponentRef.drawLine("box3","box5",null,"Unencrypted Channel 3"),this.generatedUserName=this.userNameList[Math.floor(3*Math.random())],this.generatedPassword=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);for(let e=0;e<4;e++){let e=Math.floor(8e3*Math.random())+1e3;this.computerAPortLabels.push(e),e=Math.floor(8e3*Math.random())+1e3,this.computerBPortLabels.push(e),e=Math.floor(8e3*Math.random())+1e3,this.computerCPortLabels.push(e),e=Math.floor(8e3*Math.random())+1e3,this.computerDPortLabels.push(e),e=Math.floor(8e3*Math.random())+1e3,this.mitmPortLabels.push(e)}},data(){return{step:1,chosenChannel:1,computerAPortLabels:[],computerBPortLabels:[],computerCPortLabels:[],computerDPortLabels:[],mitmPortLabels:[],userNameList:["manoj_prakash@wxycolon","ranjeet_radhakrishnan@mnosemicolon","aniket_ramamurthy@bfgperiod","soorya_venkataraman@qrscomma"],disableButton:!1,userName:"",password:"",generatedUserName:"",generatedPassword:"",isPacketSentBack:!1,ipAddress:[],portsClientA:[2,1,1,1],portsClientB:[2,1,1,1],portsClientC:[2,1,1,1],portsHacker:[1,1,1,1],portsServer:[2,2,2,1],channelHackerData:["hacker@unencryptedChannel > Logging data from unencrypted channel"],receivedPackages:[],countDown:10,serverPackages:[{packageId:"package01",data:[],displayPackage:!1,packageBackgroundColor:"#9efd85",animationSeconds:1}]}},methods:{correct1(e){var t=document.getElementById("snackbar");t.innerHTML=e,t.style.backgroundColor="green",t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)},incorrect(e){var t=document.getElementById("snackbar");t.innerHTML=e,t.style.backgroundColor="red",t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),7e3)},respond(e){3===e.step&&(this.step=4,this.disableButton=!0,this.channelHackerData.push("hacker@unencryptedChannel > Sending intercepted package to server"),this.$refs.childComponentRef.animatePackage("box5","package01","box4",(()=>{this.receivedPackages=[],this.disableButton=!1,this.isPacketSentBack=!0}))),5===e.step&&(this.channelHackerData.push("hacker@unencryptedChannel > Sending intercepted package back to client"),this.$refs.childComponentRef.animatePackage("box"+this.chosenChannel,"package01","box4",(()=>{this.receivedPackages=[],this.disableButton=!1})))},nextPage(){this.$router.push({name:"simulation-view"})},buttonClick(){if(1===this.step){this.disableButton=!0,this.portsHacker[0]=2,this.portsHacker[1]=2,this.channelHackerData.push(`hacker@unencryptedChannel > Opening ports ${this.mitmPortLabels[0]} and ${this.mitmPortLabels[1]} on hacker`),this.channelHackerData.push("hacker@unencryptedChannel > Establishing connection to server with ip address "+this.ipAddress[4]+" and client ip address "+this.ipAddress[this.chosenChannel-1]),this.$refs.childComponentRef.clearLines(),this.$refs.childComponentRef.drawLine("box4","box5",null,"Unencrypted Channel "+this.chosenChannel);for(let e=1;e<=3;e++)this.chosenChannel!=e?this.$refs.childComponentRef.drawLine("box"+e,"box5",null,"Unencrypted Channel "+e):this.$refs.childComponentRef.drawLine("box"+e,"box4",null,"Unencrypted Channel "+e);this.step=2,this.disableButton=!1}else 2===this.step?(this.disableButton=!0,this.serverPackages[0].data=["Requesting access credentials"],this.serverPackages[0].displayPackage=!0,this.$refs.childComponentRef.animatePackage("box4","package01","box"+this.chosenChannel,(()=>{this.channelHackerData.push("hacker@unencryptedChannel > Intercepted message from server to client on channel number: "+this.chosenChannel),this.channelHackerData.push("hacker@unencryptedChannel > Message content: "+this.serverPackages[0].data[0]+", connection: keep-alive, accept-language: en-US,en;q=0.9, host: "+this.ipAddress[4]+", user-agent: connection: keep-alive, client-ip: "+this.ipAddress[this.chosenChannel-1]),this.receivedPackages.push({packageId:this.serverPackages[0].packageId,serverPort:0,backgroundColour:this.serverPackages[0].packageBackgroundColor,step:3}),this.step=3,this.disableButton=!1,this.countDown=10;let e=()=>{this.countDown--,3===this.step&&0===this.countDown?(this.incorrect("Server response wasn't forwarded on time, please try again"),this.reset()):3===this.step&&this.countDown>0&&setTimeout(e,1e3)};e()}))):4===this.step&&(this.disableButton=!0,this.step=5,this.serverPackages[0].data=["Access credentials"],this.$refs.childComponentRef.animatePackage("box4","package01","box5",(()=>{this.receivedPackages=[],this.channelHackerData.push("hacker@unencryptedChannel > Intercepted message from server to client on channel number: "+this.chosenChannel),this.channelHackerData.push("hacker@unencryptedChannel > Message content: "+this.serverPackages[0].data[0]+", connection: keep-alive, accept-language: en-US,en;q=0.9, host: "+this.ipAddress[4]+", user-agent: connection: keep-alive, client-ip: "+this.ipAddress[this.chosenChannel-1]),this.channelHackerData.push("hacker@unencryptedChannel > Response: {success: true, message: 'Auth cred', data: {username: "+this.generatedUserName+", password: "+this.generatedPassword+"}}"),this.receivedPackages.push({packageId:this.serverPackages[0].packageId,serverPort:1,backgroundColour:this.serverPackages[0].packageBackgroundColor,step:5}),this.disableButton=!1})))},verifyCredentials(){this.userName===this.generatedUserName&&this.password===this.generatedPassword&&this.isPacketSentBack?(this.correct1("Experiment successful!"),this.step=6):this.incorrect("Experiment failed, please try again.")},reset(){this.step=1,this.chosenChannel=1,this.disableButton=!1,this.isPacketSentBack=!1,this.userName="",this.password="",this.channelHackerData=["hacker@unencryptedChannel > Logging data from unencrypted channel"],this.receivedPackages=[],this.$refs.childComponentRef.clearLines(),this.$refs.childComponentRef.drawLine("box1","box5",null,"Unencrypted Channel 1"),this.$refs.childComponentRef.drawLine("box2","box5",null,"Unencrypted Channel 2"),this.$refs.childComponentRef.drawLine("box3","box5",null,"Unencrypted Channel 3"),this.portsClientA=[2,1,1,1],this.portsClientB=[2,1,1,1],this.portsClientC=[2,1,1,1],this.portsHacker=[1,1,1,1],this.portsServer=[2,2,2,1],this.serverPackages[0].data=[],this.serverPackages[0].displayPackage=!1}},components:{ServerComponent:Ve,EndSystemComponent:Se,NetworkInteractionComponent:ge,TopBar:se,StyledButton:ie}};const Ze=(0,ee.Z)(Ge,[["render",G]]);var Oe=Ze}}]);
//# sourceMappingURL=488.baeaee79.js.map