(this.webpackJsonptampolinapp=this.webpackJsonptampolinapp||[]).push([[0],{44:function(e,t,a){e.exports=a(77)},49:function(e,t,a){},50:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),o=a.n(s),l=(a(49),a(18)),i=a(19),c=a(22),m=a(20),u=a(23),p=(a(50),a(37)),d=a(9),h=a.n(d),g=a(15),f=a(80),y=a(38),v=a.n(y),b=a(24),w=a.n(b),E="https://naetalab.com/",N=function(){var e=Object(g.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=w()({method:"POST",data:t,url:E+"/wp-json/rest-user/register"}),e.abrupt("return",Promise.resolve(a));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(g.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=w()({method:"POST",data:t,url:E+"/wp-json/rest-user/tampols"}),e.abrupt("return",Promise.resolve(a));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=a(14),I=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).checkingEmail=function(){var e=localStorage.getItem("email");null===e?a.setState({show:!0,logedIn:!1,sla:"https://github.com/agitnaeta/tampolin#disclaimer"}):(a.setState({show:!1,logedIn:!0,sla:"https://github.com/agitnaeta/tampolin#disclaimer"}),a.createSession(e))},a.createSession=function(){var e=Object(g.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N({email:t});case 2:return 1e3===(n=e.sent).data.code&&a.setState({logedIn:!0,show:!1}),e.next=6,localStorage.setItem("email",t);case 6:a.props.inputUser(n.data.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleClose=function(){a.setState({show:!1})},a.responseGoogle=function(){var e=Object(g.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.getBasicProfile(),e.next=3,N({name:n.getName(),profile_picture:n.getImageUrl(),email:n.getEmail(),token_id:n.getId()});case 3:return 1e3===(r=e.sent).data.code&&a.setState({logedIn:!0,show:!1}),e.next=7,localStorage.setItem("email",n.getEmail());case 7:a.props.inputUser(r.data.data);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={show:!0,logedIn:!1,sla:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.checkingEmail()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{backdrop:"static",id:"register-modal",show:this.state.show,onHide:this.handleClose},r.a.createElement(f.a.Body,null,r.a.createElement("div",null,r.a.createElement("h5",null,' Login "Tampol Online" '),r.a.createElement("div",{className:"form-group group-register"},r.a.createElement(v.a,{className:"btn-block btn-primary",clientId:"1065136493014-ql91q7uefodnpjcholluphl1353pq4dp.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin"}),r.a.createElement("p",{className:"group-register text-center"},"Degan login saya menyetujui",r.a.createElement("a",{href:this.state.sla}," Term And Sevices ")))))))}}]),t}(r.a.Component),x=Object(k.b)((function(e){return e}),{inputUser:function(e){return{type:"USER",payload:e}}})(I),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).enterName=function(e){a.setState({enemies_name:e.target.value})},a.enterLink=function(e){a.setState({enemies_img:e.target.value})},a.slap=function(){a.setState({play:!0});var e=new p;new Audio(a.state.audioUrl).play(),e.translate({from:{x:-300,y:50},to:{x:0,y:0},duration:50}).scale({from:{x:1,y:5},to:{x:1,y:1}}).applyTo(document.querySelectorAll(".animation-target"));var t=a.state.slapCount;a.setState({slapCount:t+1}),a.state.slapCount>-1&&a.setState({handImageDisplay:"block"}),a.state.slapCount>30&&a.setState({songVideo:"https://www.youtube.com/embed/91dhAgsc01M?autoplay=1",quoteStyle:"block"}),1===a.state.slapCount&&a.state.default_img!==a.state.enemies_name&&S({email:a.props.user.data.user_email,enemies_name:a.state.enemies_name})},a.changeImage=function(e){e.preventDefault();var t=new FileReader;if(null===e.target.files[0])return!1;var n=e.target.files[0];t.onloadend=function(){a.setState({file:n,enemies_img:t.result,slapCount:0})},t.readAsDataURL(n),a.slap()},a.state={play:!1,audioUrl:"",slapImg:"",slapCount:0,enemies_name:"",enemies_img:"",songVideo:"",quoteStyle:"",handImageDisplay:"",userName:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({audioUrl:"https://agitnaeta.github.io/tampolin//slap.wav",slapImg:"https://agitnaeta.github.io/tampolin//slap.png",enemies_img:"https://www.w3schools.com/bootstrap4/img_avatar3.png",default_img:"https://www.w3schools.com/bootstrap4/img_avatar3.png",quoteStyle:"none",handImageDisplay:"none",enemies_name:'Click Image For "Tampol"',userName:""})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(x,{display:this.state.displayRegister}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("h4",{className:"text-center slap-counter"},'"Tampol" Counter :'),r.a.createElement("h1",{className:"text-center"},this.state.slapCount)),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"animation-target",onClick:this.slap},r.a.createElement("img",{style:{display:this.state.handImageDisplay},alt:"HandSlap",src:this.state.slapImg})),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body enemy-image"},r.a.createElement("div",{className:"card-img-overlay",onClick:this.slap},r.a.createElement("h5",{className:"card-title"},this.state.enemies_name),r.a.createElement("div",{className:"watermark"},r.a.createElement("p",null," ",r.a.createElement("span",null,this.state.userName)))),r.a.createElement("img",{className:"card-img enemy-foto",src:this.state.enemies_img,alt:"EnemyFoto"}))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("label",{className:"label-file-upload",htmlFor:"upload-file"}," Upload File"),r.a.createElement("input",{style:{display:"none"},type:"file",id:"upload-file",className:"upload-file",onChange:function(t){return e.changeImage(t)}})),r.a.createElement("input",{onKeyUp:function(t){return e.enterName(t)},placeholder:"Insert your enemies name",className:"form-control input-lg"})),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{className:"btn btn-block btn-danger btn-lg btn-tampol",onClick:this.slap},"Tampols It Baby!!!"))),r.a.createElement("div",{className:"col-md-4 slap-counter"},r.a.createElement("iframe",{title:"song",width:"100%",height:"300px",src:this.state.songVideo,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}),r.a.createElement("p",{className:"text-muted text-center",style:{display:this.state.quoteStyle}},"I offer you peace, I offer you love, I offer you friendship. I see your beauty, I hear your need, I feel your feelings. My wisdom flows from the highest source. I salute that Source in you. Let us work together for unity and peace",r.a.createElement("span",null,"- Mahatma Gandhi")))),r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-md-12 navbar text-white fixed-bottom navbar-expand-sm navbar-dark bg-dark"},"Tampolin - 2019 by  :",r.a.createElement("a",{href:"https://www.youtube.com/agitnaeta"}," @agitnaeta"))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return void 0===e.user.data||(t.userName="Tampoled by: "+e.user.data.user_email,t)}}]),t}(r.a.Component),_=Object(k.b)((function(e){return e}))(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(76);var O=a(13),C=Object(O.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"USER"===t.type?t.payload:e}});o.a.render(r.a.createElement(k.a,{store:Object(O.c)(C)},r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.56f4d8d4.chunk.js.map