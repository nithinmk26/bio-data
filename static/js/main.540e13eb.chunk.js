(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),s=(t(13),t(1)),i=t(2),m=t(4),o=t(3),u=t(5),h=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Details")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Gallery")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"}," ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}}," ",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"./images/profilepic.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name," s/o ",e.fatherName),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),d=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Father")),l.a.createElement("h1",null,l.a.createElement("span",null,"Mother")),l.a.createElement("h1",null,l.a.createElement("span",null,"Sibling")),l.a.createElement("h1",null,l.a.createElement("span",null,"sister In Law")),l.a.createElement("h1",null,l.a.createElement("span",null,"DOB")),l.a.createElement("h1",null,l.a.createElement("span",null,"Caste")),l.a.createElement("h1",null,l.a.createElement("span",null,"Rashi")),l.a.createElement("h1",null,l.a.createElement("span",null,"Nakshatra")),l.a.createElement("h1",null,l.a.createElement("span",null,"place of birth")),l.a.createElement("h1",null,l.a.createElement("span",null,"Time of birth"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h4",null,e.fatherName),l.a.createElement("h4",null,e.motherName),l.a.createElement("h4",null,e.sibling),l.a.createElement("h4",null,e.sisterInLaw),l.a.createElement("h4",null,e.dob),l.a.createElement("h4",null,"Lingayath - Nolamba"),l.a.createElement("h4",null,e.rashi),l.a.createElement("h4",null,e.nakshatra),l.a.createElement("h4",null,e.birthPlace),l.a.createElement("h4",null,e.timeofbirth))))}}]),a}(n.Component),p=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData.imageUrls;return l.a.createElement("section",{id:"portfolio"},e.map(function(e,a){return l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{className:"d-inline-block ",src:e,alt:"Slide ".concat(a+1)}))}))}}]),a}(n.Component),f=(n.Component,function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("h3",{className:"lead"},"Feel free to contact for any further information"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Nithin : 9986024343,  9113683980"),l.a.createElement("h4",null," Mother : 7892041457")))))}}]),a}(n.Component)),v=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),b={imagebaseurl:"https://rbhatia46.github.io/",name:"NITHIN M K",fatherName:"Kambesh H N",motherName:"Dakshayanamma C",dob:"26-12-1997",sibling:"Chethan M K (Works at cognizant)",linkedinId:"https://www.linkedin.com/in/nithin-mk26/",roleDescription:" Driven by curiosity and a passion for learning, I am always eager to explore new ideas, cultures, and experiences.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/nithin-mk26/ ",className:"fa fa-linkedin"},{name:"instagram",url:"http://instagram.com/nanda.nithin",className:"fa fa-instagram"}],aboutme:"Dedicated and accomplished professional currently serving as a Senior Product Developer at Harman, a renowned technology company. With a Bachelor of Engineering degree under my belt, I have cultivated a passion for innovation and problem-solving, driving my success in the dynamic field of technology. Family holds a sacred place in my life, where love and support thrive. With a retired teacher as my father and my mother, who currently teaches and is approaching retirement within the next three years. My elder brother, happily married and has a child, adds to the joy and unity we share as a family.",address:"Chethana Nilaya, Rajajinagar Birur Kadur (T) Chickmagaluru (D) - 577116",education:[{UniversityName:"VTU - BGSIT",specialization:"CSE",MonthOfPassing:"Aug",YearOfPassing:"2019"}],work:[{CompanyName:"Harman",specialization:"Senior Product Developer",MonthOfLeaving:"Currently working since",YearOfLeaving:"2023"}],sisterInLaw:"Kavitha (High school Teacher - ICSE)",rashi:"vrishchika ",nakshatra:"Anuradha",birthPlace:"Birur",timeofbirth:"7:20 PM",imageUrls:["/images/portfolio/farmerboy.JPG","/images/portfolio/coffee.jpg","/images/portfolio/console.jpg"]},N=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{resumeData:b}),l.a.createElement(E,{resumeData:b}),l.a.createElement(d,{resumeData:b}),l.a.createElement(p,{resumeData:b}),l.a.createElement(f,{resumeData:b}),l.a.createElement(v,{resumeData:b}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.540e13eb.chunk.js.map