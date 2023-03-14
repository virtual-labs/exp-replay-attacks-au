(function(){"use strict";var e={4909:function(e,t,n){var s=n(9242),o=n(3396);function a(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var r=n(89);const i={},l=(0,r.Z)(i,[["render",a]]);var c=l,d=n(678),p=n(7139);const h={class:"flex-box"},u=(0,o._)("div",{id:"snackbar"},"Some text some message..",-1),f={class:"rem-space"},m={class:"col-1"},g={class:"row-3"},k={class:"row-3-content-space"},b={key:0,class:"step-1"},v=(0,o._)("p",null,"In this experiment, we will be combining active and passive attacks to retrieve the username and password of a user. You are the machine titled 'Hacker' in the network. Begin by intercepting a packet from a channel of your choice.",-1),y=(0,o._)("br",null,null,-1),C=(0,o._)("option",{value:"1"},"Channel 1",-1),w=(0,o._)("option",{value:"2"},"Channel 2",-1),x=(0,o._)("option",{value:"3"},"Channel 3",-1),_=[C,w,x],P={key:1,class:"step-2"},B=(0,o._)("h4",null,"Start packet transmission",-1),L=(0,o._)("p",null,"Now that you have established a man in the middle attack, you can use this to communicate with the server on behalf of the user and the server. Click on next to send a packet to the server on behalf of the user.",-1),D=[B,L],S={key:2,class:"step-2"},I=(0,o._)("h4",null,"Packet intercepted successfully",-1),A=(0,o._)("p",null,"Now that you have intercepted a packet, you can use this to communicate with the server on behalf of the user. The packet you intercepted is shown in the terminal.",-1),E=(0,o._)("br",null,null,-1),F=(0,o._)("p",null,"To send the packet to the server on behalf of the user, click on 'Next' Remember to respond as soon as the packet is sent to avoid resetting the experiment.",-1),H=(0,o._)("br",null,null,-1),N={style:{"font-size":"x-large",color:"red"}},M={key:3},T=(0,o._)("h4",null,"Send response back",-1),R=(0,o._)("p",null,"Now that you have sent a packet to the server on behalf of the user, you can send a response back to the user. Click on 'Next' to send a response back to the user. Note that this packet will not actually reach the user, it will be intercepted by you.",-1),W=[T,R],j={key:4,class:"step-3"},$=(0,o._)("h4",null,"Received reply from server",-1),U=(0,o._)("p",null,"Intercepted packet was sent successfully to the server and the reply has been retrieved. Analyze the packet to identify username and password, and input them in the respective text fields here, to verify.",-1),O=(0,o._)("br",null,null,-1),z=(0,o._)("p",null,"Make sure you respond back to the user with the same packet you received from the server.",-1),q=(0,o._)("br",null,null,-1),V={class:"button-row"},Z={class:"row-network"},G={class:"col-2"},Y={class:"row-4"},K={class:"terminal"},J={class:"terminal-choices"};function Q(e,t,n,a,r,i){const l=(0,o.up)("StyledButton"),c=(0,o.up)("ServerComponent"),d=(0,o.up)("EndSystemComponent"),C=(0,o.up)("NetworkInteractionComponent");return(0,o.wg)(),(0,o.iD)("main",null,[(0,o._)("div",h,[u,(0,o._)("div",f,[(0,o._)("div",m,[(0,o._)("div",g,[(0,o._)("div",k,[1===r.step?((0,o.wg)(),(0,o.iD)("div",b,[v,y,(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.chosenChannel=e)},_,512),[[s.bM,r.chosenChannel]])])):(0,o.kq)("",!0),2===r.step?((0,o.wg)(),(0,o.iD)("div",P,D)):(0,o.kq)("",!0),3===r.step?((0,o.wg)(),(0,o.iD)("div",S,[I,A,E,F,H,(0,o._)("p",null,[(0,o.Uk)("The packet has to be sent in the next "),(0,o._)("span",N,(0,p.zw)(r.countDown),1),(0,o.Uk)(" seconds or the experiment will fail as the server will close the connection after timing out waiting for a response. To send the packet, click on the corresponding Port no. under the 'Respond' section on your computer.")])])):(0,o.kq)("",!0),4===r.step?((0,o.wg)(),(0,o.iD)("div",M,W)):(0,o.kq)("",!0),5===r.step?((0,o.wg)(),(0,o.iD)("div",j,[$,U,O,z,q,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.userName=e),placeholder:"username"},null,512),[[s.nr,r.userName]]),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.password=e),placeholder:"password"},null,512),[[s.nr,r.password]])])):(0,o.kq)("",!0)]),(0,o._)("div",V,[(0,o.Wm)(l,{text:"Next",invisible:6!==r.step,"click-function":i.nextPage},null,8,["invisible","click-function"]),(0,o.Wm)(l,{text:1===r.step?"Start":"Next",invisible:3===r.step||5===r.step||6===r.step,"click-function":i.buttonClick,disable:r.disableButton&&3!==r.step&&5!==r.step},null,8,["text","invisible","click-function","disable"]),(0,o.Wm)(l,{text:"Verify","click-function":i.verifyCredentials,invisible:5!==r.step,disable:r.disableButton},null,8,["click-function","invisible","disable"]),(0,o.Wm)(l,{text:"Reset","click-function":i.reset,disable:r.disableButton},null,8,["click-function","disable"])])]),(0,o._)("div",Z,[(0,o.Wm)(C,{ref:"childComponentRef"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{top:"10%",left:"5%",class:"box",id:"box1"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{"ip-address":r.ipAddress[0],port1:r.portsClientA[0],port2:r.portsClientA[1],port3:r.portsClientA[2],port4:r.portsClientA[3],"port-labels":r.computerAPortLabels},null,8,["ip-address","port1","port2","port3","port4","port-labels"])])),_:1}),(0,o.Wm)(d,{top:"40%",left:"5%",class:"box",id:"box2"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{"ip-address":r.ipAddress[1],port1:r.portsClientB[0],port2:r.portsClientB[1],port3:r.portsClientB[2],port4:r.portsClientB[3],"port-labels":r.computerBPortLabels},null,8,["ip-address","port1","port2","port3","port4","port-labels"])])),_:1}),(0,o.Wm)(d,{top:"70%",left:"5%",class:"box",id:"box3"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{"ip-address":r.ipAddress[2],port1:r.portsClientC[0],port2:r.portsClientC[1],port3:r.portsClientC[2],port4:r.portsClientC[3],"port-labels":r.computerCPortLabels},null,8,["ip-address","port1","port2","port3","port4","port-labels"])])),_:1}),(0,o.Wm)(d,{top:"10%",left:"75%",class:"box",id:"box4"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{onRespond:i.respond,"display-extra-options":!0,responseData:r.receivedPackages,"ip-address":r.ipAddress[3],port1:r.portsHacker[0],port2:r.portsHacker[1],port3:r.portsHacker[2],port4:r.portsHacker[3],"port-labels":r.mitmPortLabels},null,8,["onRespond","responseData","ip-address","port1","port2","port3","port4","port-labels"])])),_:1}),(0,o.Wm)(d,{top:"70%",left:"75%",class:"box",id:"box5","package-info":r.serverPackages},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{"ip-address":r.ipAddress[4],port1:r.portsServer[0],port2:r.portsServer[1],port3:r.portsServer[2],port4:r.portsServer[3],"port-labels":r.computerDPortLabels},null,8,["ip-address","port1","port2","port3","port4","port-labels"])])),_:1},8,["package-info"])])),_:1},512)])]),(0,o._)("div",G,[(0,o._)("div",Y,[(0,o._)("div",K,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.channelHackerData,((e,t)=>((0,o.wg)(),(0,o.iD)("span",{key:t},(0,p.zw)(e),1)))),128))]),(0,o._)("div",J,[(0,o._)("button",{class:(0,p.C_)(["terminal-button",{"active-button":!0}])}," Hacker ")])])])])])])}n(7658);const X=e=>((0,o.dD)("data-v-a42d58b6"),e=e(),(0,o.Cn)(),e),ee={id:"top-bar"},te=X((()=>(0,o._)("div",{class:"side-space"},null,-1))),ne={class:"title"},se=X((()=>(0,o._)("div",{class:"side-space"},[(0,o._)("button",{class:"submit-report"},"Report a Bug")],-1)));function oe(e,t,n,s,a,r){return(0,o.wg)(),(0,o.iD)("div",ee,[te,(0,o._)("div",ne,(0,p.zw)(n.title),1),se])}var ae={name:"TopBar",props:{title:{type:String,default:"Packet Simulator"}}};const re=(0,r.Z)(ae,[["render",oe],["__scopeId","data-v-a42d58b6"]]);var ie=re;const le=["disabled"];function ce(e,t,n,s,a,r){return(0,o.wg)(),(0,o.iD)("button",{style:(0,p.j5)(r.buttonStyle),onClick:t[0]||(t[0]=(...e)=>n.clickFunction&&n.clickFunction(...e)),disabled:n.disable,class:"styled-button"},(0,p.zw)(n.text),13,le)}var de={name:"StyledButton",props:{backgroundColor:{type:String,default:"#288EC8"},textColor:{type:String,default:"white"},text:{type:String,default:"Button"},clickFunction:{type:Function,default:()=>{}},disable:{type:Boolean,default:!1},invisible:{type:Boolean,default:!1}},computed:{buttonStyle(){return{backgroundColor:this.backgroundColor,color:this.textColor,visibility:this.invisible?"hidden":"visible"}}}};const pe=(0,r.Z)(de,[["render",ce],["__scopeId","data-v-a67e5656"]]);var he=pe;const ue=e=>((0,o.dD)("data-v-2497eb48"),e=e(),(0,o.Cn)(),e),fe={id:"margin-container"},me={id:"root"},ge=ue((()=>(0,o._)("svg",{id:"lineCanvas"},null,-1))),ke={id:"overlay"};function be(e,t,n,s,a,r){return(0,o.wg)(),(0,o.iD)("div",fe,[(0,o._)("div",me,[ge,(0,o._)("div",ke,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])])])}var ve={name:"NetworkInteractionComponent",props:{onPackageAnimationEnd:{type:Function},onPackageReachDestination:{type:Function}},mounted(){let e=document.getElementById("margin-container").getBoundingClientRect(),t=e.width-50+"px",n=e.height-50+"px";document.getElementById("root").style.width=t,document.getElementById("root").style.height=n,document.getElementById("lineCanvas").style.width=t,document.getElementById("lineCanvas").style.height=n,document.getElementById("overlay").style.width=t,document.getElementById("overlay").style.height=n},methods:{drawSVGLine(e,t,n,s,o,a){let r=document.getElementById("lineCanvas"),i=document.createElementNS("http://www.w3.org/2000/svg","line");if(o?i.setAttribute("style","stroke:"+o+";stroke-width:1"):i.setAttribute("style","stroke:rgb(0,0,0);stroke-width:1"),i.setAttribute("x1",e),i.setAttribute("y1",t),i.setAttribute("x2",n),i.setAttribute("y2",s),r.appendChild(i),a){let o=document.createElementNS("http://www.w3.org/2000/svg","text");o.setAttribute("x",(e+n)/2),o.setAttribute("y",(t+s)/2-6),o.setAttribute("text-anchor","middle"),o.setAttribute("alignment-baseline","middle"),o.setAttribute("font-size","12px"),o.setAttribute("font-weight","500"),o.setAttribute("fill","black"),o.setAttribute("transform","rotate("+180*Math.atan((s-t)/(n-e))/Math.PI+" "+(e+n)/2+" "+(t+s)/2+")"),o.innerHTML=a,r.appendChild(o)}},animatePackage(e,t,n,s){let o=document.getElementById(t),a=document.getElementById(e),r=document.getElementById(n),i=document.getElementById("overlay");if(!o||!a||!r||!i)return;let l=40,c=o.offsetHeight/2,d=r.offsetLeft+r.offsetWidth,p=r.offsetTop+r.offsetHeight;o.remove(),i.appendChild(o),o.style.left=d+"px",o.style.top=p+"px";let h=r.offsetLeft+r.offsetWidth/2-l,u=r.offsetTop+r.offsetHeight/2-c;o.style.left=h+"px",o.style.top=u+"px";let f=async()=>{if(h=Math.round(h),u=Math.round(u),o.offsetLeft===h&&o.offsetTop===u){let e=a.offsetLeft+a.offsetWidth/2-l,n=a.offsetTop+a.offsetHeight/2-c;o.style.left=e+"px",o.style.top=n+"px";let r=async()=>{if(e=Math.round(e),n=Math.round(n),o.offsetLeft===e&&o.offsetTop===n){let e=a.offsetLeft+a.offsetWidth,n=a.offsetTop+a.offsetHeight;o.style.left=e+"px",o.style.top=n+"px";let r=()=>{o.offsetLeft===e&&o.offsetTop===n?(this.onPackageAnimationEnd&&this.onPackageAnimationEnd(t),s&&s()):setTimeout((()=>{r()}),100)};r()}else setTimeout((()=>{r()}),100)};r().then((()=>{this.onPackageReachDestination&&this.onPackageReachDestination(t)}))}else setTimeout((()=>{f()}),500)};f()},arrangePackages(e,t){if(!e)return;let n=document.getElementById(e),s=document.getElementById("overlay"),o=n.offsetLeft+n.offsetWidth,a=n.offsetTop+n.offsetHeight;console.log(t);for(let r=0;r<t.length;r++){console.log(t[r],"error");let e=document.getElementById(t[r]);s.appendChild(e),e.style.left=o+"px",e.style.top=a+"px";let n=o+15*r,i=a+15*r;e.style.left=n+"px",e.style.top=i+"px"}},drawLine(e,t,n,s){let o=document.getElementById(e),a=document.getElementById(t);if(!o||!a)return;let r=o.offsetLeft+o.offsetWidth/2,i=o.offsetTop+o.offsetHeight/2,l=a.offsetLeft+a.offsetWidth/2,c=a.offsetTop+a.offsetHeight/2;n||(n="black"),s?this.drawSVGLine(r,i,l,c,n,s):this.drawSVGLine(r,i,l,c,n)},drawLineOffset(e,t,n,s,o,a,r){let i=document.getElementById(e),l=document.getElementById(t);if(!i||!l)return;let c=i.offsetLeft+i.offsetWidth/2,d=i.offsetTop+i.offsetHeight/2,p=l.offsetLeft+l.offsetWidth/2,h=l.offsetTop+l.offsetHeight/2;if(s)if(r){let e=c-n/2,t=p-n/2;this.drawSVGLine(e,d,t,h,o,a)}else{let e=c+n/2,t=p+n/2;this.drawSVGLine(e,d,t,h,o,a)}else if(r){let e=d-n/2,t=h-n/2;this.drawSVGLine(c,e,p,t,o,a)}else{let e=d+n/2,t=h+n/2;this.drawSVGLine(c,e,p,t,o,a)}},clearLines(){let e=document.getElementById("lineCanvas");e.parentNode.replaceChild(e.cloneNode(!1),e)}}};const ye=(0,r.Z)(ve,[["render",be],["__scopeId","data-v-2497eb48"]]);var Ce=ye;const we=["id"],xe={id:"endSystemVector"},_e=["id"];function Pe(e,t,n,s,a,r){const i=(0,o.up)("PackageComponent");return(0,o.wg)(),(0,o.iD)("div",{class:(0,p.C_)([n.Class,"rootElementEndSystem"]),id:n.Id,style:(0,p.j5)({top:n.top,left:n.left})},[(0,o._)("div",xe,[(0,o.WI)(e.$slots,"default",{},void 0,!0)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.packageInfo,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t},[e.packageId?((0,o.wg)(),(0,o.iD)("div",{key:0,style:(0,p.j5)([{position:"absolute",right:"-88px"},{transition:"ease-in-out "+(e.animationSeconds??1)+"s",visibility:e.displayPackage?"visible":"hidden"}]),id:e.packageId,class:"package"},[(0,o.Wm)(i,{data:e.data,"background-color":e.packageBackgroundColor},null,8,["data","background-color"])],12,_e)):(0,o.kq)("",!0)])))),128))],14,we)}const Be={class:"packageText"},Le={key:0,class:"dash"};function De(e,t,n,s,a,r){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",{id:"packageBox",style:(0,p.j5)({backgroundColor:n.backgroundColor})},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.data,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:e.id},[(0,o._)("div",Be,(0,p.zw)(e),1),r.addDash(t)?((0,o.wg)(),(0,o.iD)("div",Le)):(0,o.kq)("",!0)])))),128))],4)])}var Se={name:"PackageComponent",methods:{addDash(e){return this.data.length!==e+1}},props:{data:{type:Array},backgroundColor:{type:String,default:"#ABFF8E"}}};const Ie=(0,r.Z)(Se,[["render",De],["__scopeId","data-v-f0687b40"]]);var Ae=Ie,Ee={name:"EndSystemComponent",components:{PackageComponent:Ae},props:{Class:{type:String},Id:{type:String},top:{type:String},left:{type:String},packageInfo:{type:[Object]}},computed:{packagePosition(){return"-50px"}}};const Fe=(0,r.Z)(Ee,[["render",Pe],["__scopeId","data-v-0ce0fef6"]]);var He=Fe;const Ne=e=>((0,o.dD)("data-v-30723712"),e=e(),(0,o.Cn)(),e),Me={class:"root-col"},Te={class:"col"},Re={class:"id-address"},We={class:"col"},je={class:"circle-div-text"},$e={class:"circle-div-text"},Ue={class:"circle-div-text"},Oe={class:"circle-div-text"},ze=Ne((()=>(0,o._)("div",{class:"title"}," Respond ",-1))),qe={class:"respond-buttons"},Ve=["onClick"];function Ze(e,t,n,s,a,r){return(0,o.wg)(),(0,o.iD)("div",Me,[(0,o._)("div",{class:"root",style:(0,p.j5)({backgroundColor:n.backgroundColor??"#AA9A8B",border:n.displayExtraOptions?"none":"1px solid black"})},[(0,o._)("div",Te,[(0,o._)("span",Re,(0,p.zw)(n.ipAddress),1)]),(0,o._)("div",We,[(0,o._)("div",{class:"circle-div",style:(0,p.j5)({backgroundColor:r.port0Color})},[(0,o._)("span",je,(0,p.zw)(r.portLabel(0)),1)],4),(0,o._)("div",{class:"circle-div",style:(0,p.j5)({backgroundColor:r.port1Color})},[(0,o._)("span",$e,(0,p.zw)(r.portLabel(1)),1)],4),(0,o._)("div",{class:"circle-div",style:(0,p.j5)({backgroundColor:r.port2Color})},[(0,o._)("span",Ue,(0,p.zw)(r.portLabel(2)),1)],4),(0,o._)("div",{class:"circle-div",style:(0,p.j5)({backgroundColor:r.port3Color})},[(0,o._)("span",Oe,(0,p.zw)(r.portLabel(3)),1)],4)])],4),n.displayExtraOptions?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"extra-options",style:(0,p.j5)({visibility:0!==n.responseData.length?"visible":"hidden"})},[ze,(0,o._)("div",qe,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.responseData,((e,t)=>((0,o.wg)(),(0,o.iD)("button",{key:t,style:(0,p.j5)({backgroundColor:e.backgroundColour}),onClick:t=>this.$emit("respond",e)}," Port: "+(0,p.zw)(parseInt(e.serverPort)+1),13,Ve)))),128))])],4)):(0,o.kq)("",!0)])}var Ge={name:"ServerComponent",props:{port1:Number,port2:Number,port3:Number,port4:Number,portLabels:[],ipAddress:String,displayExtraOptions:Boolean,responseData:[],backgroundColor:String},computed:{port0Color(){return 0===this.port1?"#FF0000":1===this.port1?"#33FF00":2===this.port1?"#FFD600":"#FF0000"},port1Color(){return 0===this.port2?"#FF0000":1===this.port2?"#33FF00":2===this.port2?"#FFD600":"#FF0000"},port2Color(){return 0===this.port3?"#FF0000":1===this.port3?"#33FF00":2===this.port3?"#FFD600":"#FF0000"},port3Color(){return 0===this.port4?"#FF0000":1===this.port4?"#33FF00":2===this.port4?"#FFD600":"#FF0000"}},methods:{portLabel(e){return this.portLabels&&this.portLabels.length>e?this.portLabels[e]:e+1}}};const Ye=(0,r.Z)(Ge,[["render",Ze],["__scopeId","data-v-30723712"]]);var Ke=Ye,Je={name:"App",mounted(){for(let e=0;e<5;e++){let t="";if(3!==e){for(let e=0;e<4;e++)t+=Math.floor(255*Math.random())+1,3!==e&&(t+=".");this.ipAddress.push(t)}else this.ipAddress.push("Hacker - MITM")}this.$refs.childComponentRef.drawLine("box1","box5",null,"Unencrypted Channel 1"),this.$refs.childComponentRef.drawLine("box2","box5",null,"Unencrypted Channel 2"),this.$refs.childComponentRef.drawLine("box3","box5",null,"Unencrypted Channel 3"),this.generatedUserName=this.userNameList[Math.floor(3*Math.random())],this.generatedPassword=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);for(let e=0;e<4;e++){let e=Math.floor(8e3*Math.random())+1e3;this.computerAPortLabels.push(e),e=Math.floor(8e3*Math.random())+1e3,this.computerBPortLabels.push(e),e=Math.floor(8e3*Math.random())+1e3,this.computerCPortLabels.push(e),e=Math.floor(8e3*Math.random())+1e3,this.computerDPortLabels.push(e),e=Math.floor(8e3*Math.random())+1e3,this.mitmPortLabels.push(e)}},data(){return{step:1,chosenChannel:1,computerAPortLabels:[],computerBPortLabels:[],computerCPortLabels:[],computerDPortLabels:[],mitmPortLabels:[],userNameList:["manoj_prakash@wxycolon","ranjeet_radhakrishnan@mnosemicolon","aniket_ramamurthy@bfgperiod","soorya_venkataraman@qrscomma"],disableButton:!1,userName:"",password:"",generatedUserName:"",generatedPassword:"",isPacketSentBack:!1,ipAddress:[],portsClientA:[2,1,1,1],portsClientB:[2,1,1,1],portsClientC:[2,1,1,1],portsHacker:[1,1,1,1],portsServer:[2,2,2,1],channelHackerData:["hacker@unencryptedChannel > Logging data from unencrypted channel"],receivedPackages:[],countDown:10,serverPackages:[{packageId:"package01",data:[],displayPackage:!1,packageBackgroundColor:"#9efd85",animationSeconds:1}]}},methods:{correct1(e){var t=document.getElementById("snackbar");t.innerHTML=e,t.style.backgroundColor="green",t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)},incorrect(e){var t=document.getElementById("snackbar");t.innerHTML=e,t.style.backgroundColor="red",t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),7e3)},respond(e){3===e.step&&(this.step=4,this.disableButton=!0,this.channelHackerData.push("hacker@unencryptedChannel > Sending intercepted package to server"),this.$refs.childComponentRef.animatePackage("box5","package01","box4",(()=>{this.receivedPackages=[],this.disableButton=!1,this.isPacketSentBack=!0}))),5===e.step&&(this.channelHackerData.push("hacker@unencryptedChannel > Sending intercepted package back to client"),this.$refs.childComponentRef.animatePackage("box"+this.chosenChannel,"package01","box4",(()=>{this.receivedPackages=[],this.disableButton=!1})))},nextPage(){this.$router.push({name:"simulation-view"})},buttonClick(){if(1===this.step){this.disableButton=!0,this.portsHacker[0]=2,this.portsHacker[1]=2,this.channelHackerData.push(`hacker@unencryptedChannel > Opening ports ${this.mitmPortLabels[0]} and ${this.mitmPortLabels[1]} on hacker`),this.channelHackerData.push("hacker@unencryptedChannel > Establishing connection to server with ip address "+this.ipAddress[4]+" and client ip address "+this.ipAddress[this.chosenChannel-1]),this.$refs.childComponentRef.clearLines(),this.$refs.childComponentRef.drawLine("box4","box5",null,"Unencrypted Channel "+this.chosenChannel);for(let e=1;e<=3;e++)this.chosenChannel!=e?this.$refs.childComponentRef.drawLine("box"+e,"box5",null,"Unencrypted Channel "+e):this.$refs.childComponentRef.drawLine("box"+e,"box4",null,"Unencrypted Channel "+e);this.step=2,this.disableButton=!1}else 2===this.step?(this.disableButton=!0,this.serverPackages[0].data=["Requesting access credentials"],this.serverPackages[0].displayPackage=!0,this.$refs.childComponentRef.animatePackage("box4","package01","box"+this.chosenChannel,(()=>{this.channelHackerData.push("hacker@unencryptedChannel > Intercepted message from server to client on channel number: "+this.chosenChannel),this.channelHackerData.push("hacker@unencryptedChannel > Message content: "+this.serverPackages[0].data[0]+", connection: keep-alive, accept-language: en-US,en;q=0.9, host: "+this.ipAddress[4]+", user-agent: connection: keep-alive, client-ip: "+this.ipAddress[this.chosenChannel-1]),this.receivedPackages.push({packageId:this.serverPackages[0].packageId,serverPort:0,backgroundColour:this.serverPackages[0].packageBackgroundColor,step:3}),this.step=3,this.disableButton=!1,this.countDown=10;let e=()=>{this.countDown--,3===this.step&&0===this.countDown?(this.incorrect("Server response wasn't forwarded on time, please try again"),this.reset()):3===this.step&&this.countDown>0&&setTimeout(e,1e3)};e()}))):4===this.step&&(this.disableButton=!0,this.step=5,this.serverPackages[0].data=["Access credentials"],this.$refs.childComponentRef.animatePackage("box4","package01","box5",(()=>{this.receivedPackages=[],this.channelHackerData.push("hacker@unencryptedChannel > Intercepted message from server to client on channel number: "+this.chosenChannel),this.channelHackerData.push("hacker@unencryptedChannel > Message content: "+this.serverPackages[0].data[0]+", connection: keep-alive, accept-language: en-US,en;q=0.9, host: "+this.ipAddress[4]+", user-agent: connection: keep-alive, client-ip: "+this.ipAddress[this.chosenChannel-1]),this.channelHackerData.push("hacker@unencryptedChannel > Response: {success: true, message: 'Auth cred', data: {username: "+this.generatedUserName+", password: "+this.generatedPassword+"}}"),this.receivedPackages.push({packageId:this.serverPackages[0].packageId,serverPort:1,backgroundColour:this.serverPackages[0].packageBackgroundColor,step:5}),this.disableButton=!1})))},verifyCredentials(){this.userName===this.generatedUserName&&this.password===this.generatedPassword&&this.isPacketSentBack?(this.correct1("Experiment successful!"),this.step=6):this.incorrect("Experiment failed, please try again.")},reset(){this.step=1,this.chosenChannel=1,this.disableButton=!1,this.isPacketSentBack=!1,this.userName="",this.password="",this.channelHackerData=["hacker@unencryptedChannel > Logging data from unencrypted channel"],this.receivedPackages=[],this.$refs.childComponentRef.clearLines(),this.$refs.childComponentRef.drawLine("box1","box5",null,"Unencrypted Channel 1"),this.$refs.childComponentRef.drawLine("box2","box5",null,"Unencrypted Channel 2"),this.$refs.childComponentRef.drawLine("box3","box5",null,"Unencrypted Channel 3"),this.portsClientA=[2,1,1,1],this.portsClientB=[2,1,1,1],this.portsClientC=[2,1,1,1],this.portsHacker=[1,1,1,1],this.portsServer=[2,2,2,1],this.serverPackages[0].data=[],this.serverPackages[0].displayPackage=!1}},components:{ServerComponent:Ke,EndSystemComponent:He,NetworkInteractionComponent:Ce,TopBar:ie,StyledButton:he}};const Qe=(0,r.Z)(Je,[["render",Q]]);var Xe=Qe;const et={src:"/graph.html",id:"frame",ref:"myiframe"};function tt(e,t){return(0,o.wg)(),(0,o.iD)("iframe",et,"\r\n  ",512)}const nt={},st=(0,r.Z)(nt,[["render",tt],["__scopeId","data-v-093a645f"]]);var ot=st;const at=(0,d.p7)({history:(0,d.PP)("/"),routes:[{path:"/",name:"experiment-view",component:()=>Xe},{path:"/simulation",name:"simulation-view",component:()=>ot}]});var rt=at;(0,s.ri)(c).use(rt).mount("#app")}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,s,o,a){if(!s){var r=1/0;for(d=0;d<e.length;d++){s=e[d][0],o=e[d][1],a=e[d][2];for(var i=!0,l=0;l<s.length;l++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(i=!1,a<r&&(r=a));if(i){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[s,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,a,r=s[0],i=s[1],l=s[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(l)var d=l(n)}for(t&&t(s);c<r.length;c++)a=r[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},s=self["webpackChunkexp_4"]=self["webpackChunkexp_4"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(4909)}));s=n.O(s)})();
//# sourceMappingURL=app.03a08b63.js.map