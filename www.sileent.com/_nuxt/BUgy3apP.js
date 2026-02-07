import{e as _,f as F,c as k,g as w,h as p,o as c,F as D,r as A,i as C,j as x,k as P,l as $,m as E,n as V,p as T,q as O,s as q,a as v,b as f,v as I,x as M}from"#entry";import{_ as R}from"./BFErH3iV.js";import{d as L,a as U,u as Z}from"./YXzScfQM.js";import"./W_8ncDwr.js";import"./DaGpothW.js";import"./CeHTQRai.js";import"./DpBGp938.js";import"./DlAUqK2U.js";import"./C2M9UQFD.js";const z={key:0,class:"dynamic-zone"},B=_({__name:"DynamicZone",props:{sections:{type:Array,default:()=>[]}},setup(e){const n=e,i=F(()=>(n.sections||[]).reduce((t,o,s)=>{if("__typename"in o){const{__typename:r,...a}=o;t.push({bindings:a,is:r,key:`section-${s}-${r.toLowerCase()}`})}return t},[]));return(t,o)=>p(i).length?(c(),k("div",z,[(c(!0),k(D,null,A(p(i),({bindings:s,is:r,key:a},d)=>(c(),C(x(r),{key:a,data:s,index:d},null,8,["data","index"]))),128))])):w("",!0)}}),j=Object.assign(B,{__name:"DynamicZone"});var l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PageSections"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PageAboutSectionsDynamicZone"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ComponentAboutServices"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"services"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"subtitle"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"tagline"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"video"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cover"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"StrapiFile"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"videoUrl"},arguments:[],directives:[]}]}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"ComponentAboutMission"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tagline"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"video"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cover"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"StrapiFile"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"videoUrl"},arguments:[],directives:[]}]}}]}}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PageAbout"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"status"}},type:{kind:"NamedType",name:{kind:"Name",value:"PublicationStatus"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"locale"}},type:{kind:"NamedType",name:{kind:"Name",value:"I18NLocaleCode"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:{kind:"Name",value:"content"},name:{kind:"Name",value:"pageAbout"},arguments:[{kind:"Argument",name:{kind:"Name",value:"status"},value:{kind:"Variable",name:{kind:"Name",value:"status"}}},{kind:"Argument",name:{kind:"Name",value:"locale"},value:{kind:"Variable",name:{kind:"Name",value:"locale"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"documentId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sections"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"PageSections"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"seo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SEOMeta"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:768}};l.loc.source={body:`#import ./fragments/SEOMeta.gql
#import ./fragments/StrapiFile.gql

fragment PageSections on PageAboutSectionsDynamicZone {
  __typename
  ... on ComponentAboutServices {
    description
    id
    services {
      id
      subtitle
      title
    }
    tagline
    title
    video {
      id
      cover {
        ...StrapiFile
      }
      videoUrl
    }
  }
  ... on ComponentAboutMission {
    description
    id
    tagline
    title
    video {
      id
      cover {
        ...StrapiFile
      }
      videoUrl
    }
  }
}

query PageAbout($status: PublicationStatus, $locale: I18NLocaleCode) {
  content: pageAbout(status: $status, locale: $locale) {
    documentId
    sections {
      ...PageSections
    }
    seo {
      ...SEOMeta
    }
    title
  }
}`,name:"GraphQL request",locationOffset:{line:1,column:1}};var S={};function b(e){return e.filter(function(n){if(n.kind!=="FragmentDefinition")return!0;var i=n.name.value;return S[i]?!1:(S[i]=!0,!0)})}l.definitions=l.definitions.concat(b(L.definitions));l.definitions=l.definitions.concat(b(U.definitions));function m(e,n){if(e.kind==="FragmentSpread")n.add(e.name.value);else if(e.kind==="VariableDefinition"){var i=e.type;i.kind==="NamedType"&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(t){m(t,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(t){m(t,n)}),e.definitions&&e.definitions.forEach(function(t){m(t,n)})}var g={};(function(){l.definitions.forEach(function(n){if(n.name){var i=new Set;m(n,i),g[n.name.value]=i}})})();function N(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function y(e,n){var i={kind:e.kind,definitions:[N(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=g[n]||new Set,o=new Set,s=new Set;for(t.forEach(function(a){s.add(a)});s.size>0;){var r=s;s=new Set,r.forEach(function(a){if(!o.has(a)){o.add(a);var d=g[a]||new Set;d.forEach(function(u){s.add(u)})}})}return o.forEach(function(a){var d=N(e,a);d&&i.definitions.push(d)}),i}y(l,"PageSections");y(l,"PageAbout");const Q={class:"relative z-11 container c-black bg-white"},W={class:"grid lg:grid-cols-24 lg:gap-4"},G={class:"lg:col-span-15 lg:col-start-9 min-h-screen"},ae=_({__name:"about",async setup(e){let n,i;const t=P(),{y:o}=$(),{content:s}=([n,i]=E(()=>Z("about",l)),n=await n,i(),n),r=F(()=>s.value.sections||[]);return V(o,I(a=>{M.isTweening(".menu, .menu-toggle")||t.$ui.expand&&a>80&&t.$ui.toggleExpand(!1)},100)),T(()=>{O(()=>t.$lenis.start())}),q(()=>{t.$lenis.stop()}),(a,d)=>{const u=j,h=R;return c(),k("div",Q,[v("div",W,[v("div",G,[f(u,{sections:p(r)},null,8,["sections"]),f(h)])]),d[0]||(d[0]=v("div",{class:"backdrop fixed inset-0 z-12 bg-black pointer-events-none",style:{"clip-path":"inset(100% 0 0 0)"}},null,-1))])}}});export{ae as default};
