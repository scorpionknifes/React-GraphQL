(this["webpackJsonpgraphql-jobs-msa-web-app"]=this["webpackJsonpgraphql-jobs-msa-web-app"]||[]).push([[0],{77:function(e,a,n){e.exports=n(97)},82:function(e,a,n){},83:function(e,a,n){},84:function(e,a,n){},91:function(e,a,n){},92:function(e,a,n){},93:function(e,a,n){},94:function(e,a,n){},97:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(14),c=n.n(l),o=(n(82),n(83),n(69)),i=n(138),s=n(70),u=n(18),m=n(23),d=n(126),p=n(139),b=n(130),v=(n(84),n(30)),g=n(24),E=n.n(g);function f(){var e=Object(v.a)(["  \nfragment JobFragment on Job {\n    id\n    title\n    slug\n    description\n    applyUrl\n  \n    cities {\n        name\n    }\n  \n    countries {\n        name\n    }\n  \n    remotes {\n        name\n    }\n  \n    tags {\n        name\n    }\n  \n    company {\n        name\n        logoUrl\n    }\n  \n    commitment {\n        title\n    }\n}"]);return f=function(){return e},e}var h=E()(f());function j(){var e=Object(v.a)(["\nquery Jobs($input: JobsInput) {\n    jobs(input: $input) {\n        ...JobFragment\n    }\n}\n","\n"]);return j=function(){return e},e}var y=E()(j(),h);function O(){var e=Object(v.a)(["\nquery Locations($input: LocationsInput!) {\n    locations(input: $input) {\n        type\n        slug\n    }\n}\n"]);return O=function(){return e},e}var C=E()(O()),N=n(49),S=Object(t.createContext)({}),M=function(e){var a=e.children,n=Object(t.useState)(null),l=Object(m.a)(n,2),c=l[0],o=l[1],i=Object(t.useState)(null),s=Object(m.a)(i,2),u=s[0],d=s[1],p=Object(t.useState)(""),b=Object(m.a)(p,2),v=b[0],g=b[1],E=Object(t.useState)(""),f=Object(m.a)(E,2),h=f[0],j=f[1],O=Object(t.useState)(!0),M=Object(m.a)(O,2),k=M[0],w=M[1],J={slug:v,type:h},x=Object(N.a)(y,{variables:{input:J}}),A=Object(N.a)(C,{variables:{input:u}});Object(t.useEffect)((function(){var e=x.loading,a=x.error,n=x.data;a||e||!n||(o(n.jobs.reverse()),console.log(n.jobs))}),[x]),Object(t.useEffect)((function(){var e=A.loading,a=A.error,n=A.data;if(!a&&!e&&n){var t=n.locations;if(console.log(t),0===t.length)return console.log("no results"),void o(null);g(t[0].slug),j(t[0].type)}}),[A]),Object(t.useEffect)((function(){w(x.loading||A.loading)}),[x.loading,A.loading]);return r.a.createElement(S.Provider,{value:{loading:k,slug:v,setSlug:g,type:h,setType:j,jobs:c,setJobs:o,handleSearch:function(e){o([]),d({value:e})}}},a)},k=function(){var e=Object(t.useState)(!1),a=Object(m.a)(e,2),n=a[0],l=a[1],c=Object(t.useState)(""),o=Object(m.a)(c,2),i=o[0],s=o[1],u=Object(t.useContext)(S).handleSearch;return r.a.createElement("div",{className:"SearchBarContainer"},r.a.createElement(d.a,{container:!0,spacing:3},r.a.createElement(d.a,{item:!0,xs:6,sm:6},r.a.createElement(p.a,{className:"SearchTextField",required:!0,id:"outlined-required",label:"Location",variant:"outlined",error:n&&""===i,onClick:function(){return l(!0)},value:i,onChange:function(e){return s(e.target.value)}})),r.a.createElement(d.a,{item:!0,xs:6,sm:6},r.a.createElement(b.a,{variant:"contained",color:"primary",onClick:function(){u(i)}},"Submit"))))},w=n(131),J=n(140),x=n(132),A=n(141),T=(n(91),function(e){var a,n,t,l=e.Job;return r.a.createElement(w.a,{className:"MediaCardContainer"},r.a.createElement(d.a,{className:"MediaCardAvatarBox",container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement("div",{className:"MediaCardAvatarInner"},r.a.createElement(d.a,null,l.company.logoUrl&&""!==l.company.logoUrl?r.a.createElement(J.a,{alt:"Remy Sharp",className:"MediaCardAvatar",src:l.company.logoUrl}):r.a.createElement(J.a,{"aria-label":"recipe",className:"MediaCardAvatar"},l.company.name.charAt(0))),r.a.createElement(d.a,{container:!0,direction:"column",justify:"center",alignItems:"flex-start"},r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,r.a.createElement("b",null,l.title)," "),r.a.createElement("span",null,"at ",l.company.name," ")))),r.a.createElement(x.a,null,r.a.createElement("div",{className:"MediaCardTags"},null===(a=l.tags)||void 0===a?void 0:a.map((function(e,a){var n=e.name;return r.a.createElement(A.a,{key:a,className:"MediaCardTag",variant:"outlined",color:"primary",label:n})}))),r.a.createElement("div",{className:"MediaCardTags"},r.a.createElement(A.a,{className:"MediaCardTag",variant:"outlined",label:l.commitment.title}),null===(n=l.countries)||void 0===n?void 0:n.map((function(e,a){var n=e.name;return r.a.createElement(A.a,{key:a,className:"MediaCardTag",variant:"outlined",color:"primary",label:n})})),null===(t=l.cities)||void 0===t?void 0:t.map((function(e,a){var n=e.name;return r.a.createElement(A.a,{key:a,className:"MediaCardTag",variant:"outlined",color:"secondary",label:n})})))),r.a.createElement("div",{className:"MediaCardApplyButton"},r.a.createElement(b.a,{variant:"contained",size:"large",color:"primary",href:l.applyUrl},"Apply"))))}),q=(n(92),n(133)),I=(n(93),function(){return r.a.createElement("div",{className:"SpinnerComponent"},r.a.createElement(q.a,null))}),U=function(){var e=Object(t.useContext)(S),a=e.jobs,n=e.loading,l=[];return null===a||void 0===a||a.forEach((function(e,a){e&&l.push(r.a.createElement(d.a,{key:"card_"+a,item:!0,sm:6,md:4,lg:3,container:!0,spacing:2,className:"MediaGridCard"},r.a.createElement(T,{Job:e})))})),r.a.createElement("div",null,r.a.createElement(d.a,{container:!0,spacing:3,className:"MediaGridContainer"},n?r.a.createElement(I,null):l!==[]&&a?l:r.a.createElement("div",null,"No Jobs Found")))},B=n(134),F=n(135),L=n(136),$=n(137),G=n(68),Q=n.n(G),R=(n(94),function(){return r.a.createElement(B.a,{position:"static"},r.a.createElement(F.a,null,r.a.createElement(L.a,{variant:"h5"},"GraphQL Jobs"),r.a.createElement(k,null),r.a.createElement($.a,{href:"https://github.com/scorpionknifes/React-GraphQL",edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(Q.a,null))))}),W=new s.a({uri:"https://api.graphql.jobs"}),z=Object(o.a)({breakpoints:{values:{xs:0,sm:700,md:960,lg:1280,xl:1920}}}),P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{client:W},r.a.createElement(M,null,r.a.createElement(i.a,{theme:z},r.a.createElement(R,null),r.a.createElement(U,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[77,1,2]]]);
//# sourceMappingURL=main.e3557315.chunk.js.map