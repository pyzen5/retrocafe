(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"19mU":function(t,i,e){"use strict";e.r(i),e.d(i,"MenuModule",(function(){return Q}));var s=e("ofXK"),c=e("tyNb"),n=e("7Kzt"),a=e("LRne"),o=e("fXoL"),r=e("cygB"),b=e("kt0X"),m=e("zkoq"),u=e("Wp6s"),l=e("bTqV");function d(t,i){if(1&t){const t=o.Sb();o.Rb(0,"mat-grid-tile"),o.Rb(1,"mat-card",2),o.Nb(2,"img",3),o.Rb(3,"mat-card-content"),o.Rb(4,"h3"),o.wc(5),o.Qb(),o.Rb(6,"p"),o.wc(7),o.Qb(),o.Qb(),o.Rb(8,"mat-card-actions"),o.Rb(9,"button",4),o.Zb("click",(function(){o.oc(t);const e=i.$implicit;return o.bc().delteDish(e)})),o.wc(10,"Delete"),o.Qb(),o.Rb(11,"button",5),o.wc(12,"LIKE"),o.Qb(),o.Rb(13,"button",5),o.wc(14,"SHARE"),o.Qb(),o.Qb(),o.Qb(),o.Qb()}if(2&t){const t=i.$implicit;o.Bb(2),o.ic("src","assets/images/",t.imagepath,"",o.pc),o.Bb(3),o.xc(t.name),o.Bb(2),o.yc(" ",t.description," ")}}let p=(()=>{class t{constructor(t,i,e){this.router=t,this.backendService=i,this.store=e}ngOnInit(){this.store.dispatch(n.b()),this.subscription$=this.store.subscribe(t=>{this.menuList=t.menu});const t=Object(a.a)([1,2,3]).subscribe(t=>console.log(t));this.subscription$.add(t)}ngOnDestroy(){this.subscription$.unsubscribe()}delteDish(t){this.store.dispatch(n.a({payload:t}))}}return t.\u0275fac=function(i){return new(i||t)(o.Mb(c.b),o.Mb(r.a),o.Mb(b.h))},t.\u0275cmp=o.Gb({type:t,selectors:[["app-menu"]],decls:2,vars:1,consts:[["cols","3"],[4,"ngFor","ngForOf"],["routerLink","./dish",1,"example-card"],["width","200px","height","200px","mat-card-image","","alt","Photo of a Shiba Inu",3,"src"],["mat-button","",3,"click"],["mat-button",""]],template:function(t,i){1&t&&(o.Rb(0,"mat-grid-list",0),o.uc(1,d,15,3,"mat-grid-tile",1),o.Qb()),2&t&&(o.Bb(1),o.hc("ngForOf",i.menuList))},directives:[m.a,s.l,m.c,u.a,c.c,u.d,u.c,u.b,l.a],styles:[".example-card[_ngcontent-%COMP%]{max-width:400px}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}"]}),t})();var h=e("A5z7");function g(t,i){if(1&t&&(o.Rb(0,"div"),o.Rb(1,"p"),o.wc(2),o.Qb(),o.Rb(3,"span"),o.wc(4),o.Qb(),o.Rb(5,"span"),o.wc(6),o.cc(7,"date"),o.Qb(),o.Nb(8,"hr"),o.Qb()),2&t){const t=i.$implicit;o.Bb(2),o.zc("",t.comment," ",t.rating," stars "),o.Bb(2),o.yc("-- ",t.user," "),o.Bb(2),o.xc(o.dc(7,4,t.time))}}const f=[{path:"dish",component:(()=>{class t{constructor(){this.dish={imagepath:"fruitbowl.jpg",name:"Fruit Bowl",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nulla et massa ultrices blandit id quis sem. Vestibulum convallis nunc quis augue ultrices, eget placerat lectus pellentesque.",comments:[{user:"John",rating:4.5,comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris elit, pretium pharetra leo in, efficitur lacinia arcu.",time:"18-Mar-2020"},{user:"Bob",rating:5,comment:"Nunc a facilisis erat. Nam non risus pretium, finibus felis quis, dictum justo.",time:"20-Mar-2020"},{user:"Doe",rating:5,comment:"Sed erat tellus, rhoncus eget augue quis, faucibus blandit nibh.",time:"25-Mar-2020"}]},this.totalComments=this.dish.comments.length;const t=this.dish.comments.reduce((t,i)=>t+i.rating,0);this.avgRating=t/this.totalComments}ngOnInit(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=o.Gb({type:t,selectors:[["app-dish"]],decls:20,vars:9,consts:[[1,"dish"],[1,"example-card",2,"width","400px"],["width","200px","height","200px","mat-card-image","","alt","Photo of a Shiba Inu",3,"src"],["aria-label","Fish selection"],["color","primary"],[1,"comments-section"],[4,"ngFor","ngForOf"]],template:function(t,i){1&t&&(o.Rb(0,"div",0),o.Rb(1,"mat-card",1),o.Nb(2,"img",2),o.Rb(3,"mat-card-content"),o.Rb(4,"h3"),o.wc(5),o.Qb(),o.Rb(6,"p"),o.wc(7),o.Qb(),o.Qb(),o.Rb(8,"mat-card-actions"),o.Rb(9,"mat-chip-list",3),o.Rb(10,"mat-chip",4),o.wc(11),o.cc(12,"number"),o.Qb(),o.Rb(13,"mat-chip",4),o.wc(14),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Rb(15,"div",5),o.Rb(16,"h2"),o.wc(17,"Comments"),o.Qb(),o.Nb(18,"br"),o.uc(19,g,9,6,"div",6),o.Qb(),o.Qb()),2&t&&(o.Bb(2),o.ic("src","assets/images/",i.dish.imagepath,"",o.pc),o.Bb(3),o.xc(i.dish.name),o.Bb(2),o.yc(" ",i.dish.description," "),o.Bb(4),o.yc("",o.ec(12,6,i.avgRating,"1.2-2")," Rating"),o.Bb(3),o.yc("",i.totalComments," Comments"),o.Bb(5),o.hc("ngForOf",i.dish.comments))},directives:[u.a,u.d,u.c,u.b,h.b,h.a,s.l],pipes:[s.e,s.d],styles:[".dish[_ngcontent-%COMP%]{display:flex}.comments-section[_ngcontent-%COMP%], .dish[_ngcontent-%COMP%]{padding:10px}"]}),t})()},{path:"",component:p}];let R=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(i){return new(i||t)},imports:[[c.e.forChild(f)],c.e]}),t})();var w=e("UrhF");let Q=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(i){return new(i||t)},imports:[[s.b,R,w.a]]}),t})()}}]);