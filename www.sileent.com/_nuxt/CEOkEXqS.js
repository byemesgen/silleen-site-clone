const m={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},M={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},Ba={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},gr=Object.entries(Ba),r=gr.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{}),Hn={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},We=gr.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{...Hn}),Fn=Object.entries(We).reduce((t,[e,i])=>{const a=r[e];return a&&(t[i]=a),t},{userinactivechange:"userinactive"}),fr=Object.entries(r).reduce((t,[e,i])=>{const a=We[e];return a&&(t[i]=a),t},{userinactive:"userinactivechange"}),re={SUBTITLES:"subtitles",CAPTIONS:"captions",DESCRIPTIONS:"descriptions",CHAPTERS:"chapters",METADATA:"metadata"},He={DISABLED:"disabled",HIDDEN:"hidden",SHOWING:"showing"},Bn={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4},Ea={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},q={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},ge={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},Wn={HIGH:"high",MEDIUM:"medium",LOW:"low",OFF:"off"},br={INLINE:"inline",FULLSCREEN:"fullscreen",PICTURE_IN_PICTURE:"picture-in-picture"},Dd=Object.freeze(Object.defineProperty({__proto__:null,AttributeToStateChangeEventMap:fr,AvailabilityStates:q,MediaStateChangeEvents:We,MediaStateReceiverAttributes:M,MediaUIAttributes:r,MediaUIEvents:m,MediaUIProps:Ba,PointerTypes:Ea,ReadyStates:Bn,StateChangeEventToAttributeMap:Fn,StreamTypes:ge,TextTrackKinds:re,TextTrackModes:He,VolumeLevels:Wn,WebkitPresentationModes:br},Symbol.toStringTag,{value:"Module"}));function Vn(t){return t?.map(Gn).join(" ")}function Gn(t){if(t){const{id:e,width:i,height:a}=t;return[e,i,a].filter(s=>s!=null).join(":")}}function Kn(t){return t?.map(qn).join(" ")}function qn(t){if(t){const{id:e,kind:i,language:a,label:s}=t;return[e,i,a,s].filter(n=>n!=null).join(":")}}function Wa(t){return typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t)}const Ar=t=>new Promise(e=>setTimeout(e,t)),Bs=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],Yn=(t,e)=>{const i=t===1?Bs[e].singular:Bs[e].plural;return`${t} ${i}`},ht=t=>{if(!Wa(t))return"";const e=Math.abs(t),i=e!==t,a=new Date(0,0,0,0,0,e,0);return`${[a.getHours(),a.getMinutes(),a.getSeconds()].map((d,u)=>d&&Yn(d,u)).filter(d=>d).join(", ")}${i?" remaining":""}`};function Te(t,e){let i=!1;t<0&&(i=!0,t=0-t),t=t<0?0:t;let a=Math.floor(t%60),s=Math.floor(t/60%60),n=Math.floor(t/3600);const o=Math.floor(e/60%60),d=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(n=s=a="0"),n=n>0||d>0?n+":":"",s=((n||o>=10)&&s<10?"0"+s:s)+":",a=a<10?"0"+a:a,(i?"-":"")+n+s+a}const Tr=Object.freeze({length:0,start(t){const e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(t){const e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});function Qn(t=Tr){return Array.from(t).map((e,i)=>[Number(t.start(i).toFixed(3)),Number(t.end(i).toFixed(3))].join(":")).join(" ")}const Cd=Object.freeze(Object.defineProperty({__proto__:null,emptyTimeRanges:Tr,formatAsTimePhrase:ht,formatTime:Te,serializeTimeRanges:Qn},Symbol.toStringTag,{value:"Module"})),zn={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."};var Ws;const ua={en:zn};let va=((Ws=globalThis.navigator)==null?void 0:Ws.language)||"en";const Zn=t=>{va=t},Xn=t=>{var e,i,a;const[s]=va.split("-");return((e=ua[va])==null?void 0:e[t])||((i=ua[s])==null?void 0:i[t])||((a=ua.en)==null?void 0:a[t])||t},E=(t,e={})=>Xn(t).replace(/\{(\w+)\}/g,(i,a)=>a in e?String(e[a]):`{${a}}`);class Ir{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class Sr extends Ir{}class Vs extends Sr{constructor(){super(...arguments),this.role=null}}class Jn{observe(){}unobserve(){}disconnect(){}}const Mr={createElement:function(){return new xt.HTMLElement},createElementNS:function(){return new xt.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},xt={ResizeObserver:Jn,document:Mr,Node:Sr,Element:Vs,HTMLElement:class extends Vs{constructor(){super(...arguments),this.innerHTML=""}get content(){return new xt.DocumentFragment}},DocumentFragment:class extends Ir{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}},DOMParser:class{parseFromString(e,i){return{body:{textContent:e}}}}},yr=typeof window>"u"||typeof window.customElements>"u",Lr=Object.keys(xt).every(t=>t in globalThis),l=yr&&!Lr?xt:globalThis,Q=yr&&!Lr?Mr:globalThis.document,Gs=new WeakMap,Va=t=>{let e=Gs.get(t);return e||Gs.set(t,e=new Set),e},kr=new l.ResizeObserver(t=>{for(const e of t)for(const i of Va(e.target))i(e)});function wr(t,e){Va(t).add(e),kr.observe(t)}function Rr(t,e){const i=Va(t);i.delete(e),i.size||kr.unobserve(t)}function ne(t){const e={};for(const i of t)e[i.name]=i.value;return e}function jn(t){var e;return(e=eo(t))!=null?e:Kt(t,"media-controller")}function eo(t){var e;const{MEDIA_CONTROLLER:i}=M,a=t.getAttribute(i);if(a)return(e=io(t))==null?void 0:e.getElementById(a)}const Dr=(t,e,i=".value")=>{const a=t.querySelector(i);a&&(a.textContent=e)},to=(t,e)=>{const i=`slot[name="${e}"]`,a=t.shadowRoot.querySelector(i);return a?a.children:[]},Cr=(t,e)=>to(t,e)[0],Et=(t,e)=>!t||!e?!1:t?.contains(e)?!0:Et(t,e.getRootNode().host),Kt=(t,e)=>{if(!t)return null;const i=t.closest(e);return i||Kt(t.getRootNode().host,e)};function Or(t=document){var e;const i=t?.activeElement;return i?(e=Or(i.shadowRoot))!=null?e:i:null}function io(t){var e;const i=(e=t?.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function Ur(t,{depth:e=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(t.checkVisibility)return t.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let s=t;for(;s&&e>0;){const n=getComputedStyle(s);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;s=s.parentElement,e--}return!0}function ao(t,e,i,a){const s=a.x-i.x,n=a.y-i.y,o=s*s+n*n;if(o===0)return 0;const d=((t-i.x)*s+(e-i.y)*n)/o;return Math.max(0,Math.min(1,d))}function x(t,e){const i=so(t,a=>a===e);return i||ro(t,e)}function so(t,e){var i,a;let s;for(s of(i=t.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=s.sheet)==null?void 0:a.cssRules}catch{continue}for(const o of n??[])if(e(o.selectorText))return o}}function ro(t,e){var i,a;const s=(i=t.querySelectorAll("style:not([media])"))!=null?i:[],n=s?.[s.length-1];return n?.sheet?(n?.sheet.insertRule(`${e}{}`,n.sheet.cssRules.length),(a=n.sheet.cssRules)==null?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function D(t,e,i=Number.NaN){const a=t.getAttribute(e);return a!=null?+a:i}function W(t,e,i){const a=+i;if(i==null||Number.isNaN(a)){t.hasAttribute(e)&&t.removeAttribute(e);return}D(t,e,void 0)!==a&&t.setAttribute(e,`${a}`)}function I(t,e){return t.hasAttribute(e)}function S(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}I(t,e)!=i&&t.toggleAttribute(e,i)}function C(t,e,i=null){var a;return(a=t.getAttribute(e))!=null?a:i}function O(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}const a=`${i}`;C(t,e,void 0)!==a&&t.setAttribute(e,a)}var Pr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Se=(t,e,i)=>(Pr(t,e,"read from private field"),i?i.call(t):e.get(t)),no=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Yt=(t,e,i,a)=>(Pr(t,e,"write to private field"),e.set(t,i),i),Y;function oo(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}class Wi extends l.HTMLElement{constructor(){if(super(),no(this,Y,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[M.MEDIA_CONTROLLER,r.MEDIA_PAUSED]}attributeChangedCallback(e,i,a){var s,n,o,d,u;e===M.MEDIA_CONTROLLER&&(i&&((n=(s=Se(this,Y))==null?void 0:s.unassociateElement)==null||n.call(s,this),Yt(this,Y,null)),a&&this.isConnected&&(Yt(this,Y,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(d=Se(this,Y))==null?void 0:d.associateElement)==null||u.call(d,this)))}connectedCallback(){var e,i,a,s;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),Yt(this,Y,lo(this)),this.getAttribute(M.MEDIA_CONTROLLER)&&((i=(e=Se(this,Y))==null?void 0:e.associateElement)==null||i.call(e,this)),(a=Se(this,Y))==null||a.addEventListener("pointerdown",this),(s=Se(this,Y))==null||s.addEventListener("click",this)}disconnectedCallback(){var e,i,a,s;this.getAttribute(M.MEDIA_CONTROLLER)&&((i=(e=Se(this,Y))==null?void 0:e.unassociateElement)==null||i.call(e,this)),(a=Se(this,Y))==null||a.removeEventListener("pointerdown",this),(s=Se(this,Y))==null||s.removeEventListener("click",this),Yt(this,Y,null)}handleEvent(e){var i;const a=(i=e.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(a?.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:n,clientY:o}=e,{left:d,top:u,width:_,height:f}=this.getBoundingClientRect(),g=n-d,h=o-u;if(g<0||h<0||g>_||h>f||_===0&&f===0)return;const p=this._pointerType||"mouse";if(this._pointerType=void 0,p===Ea.TOUCH){this.handleTap(e);return}else if(p===Ea.MOUSE){this.handleMouseClick(e);return}}}}get mediaPaused(){return I(this,r.MEDIA_PAUSED)}set mediaPaused(e){S(this,r.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const i=this.mediaPaused?m.MEDIA_PLAY_REQUEST:m.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new l.CustomEvent(i,{composed:!0,bubbles:!0}))}}Y=new WeakMap;Wi.shadowRootOptions={mode:"open"};Wi.getTemplateHTML=oo;function lo(t){var e;const i=t.getAttribute(M.MEDIA_CONTROLLER);return i?(e=t.getRootNode())==null?void 0:e.getElementById(i):Kt(t,"media-controller")}l.customElements.get("media-gesture-receiver")||l.customElements.define("media-gesture-receiver",Wi);var Ks=Wi,Ga=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ee=(t,e,i)=>(Ga(t,e,"read from private field"),i?i.call(t):e.get(t)),J=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Oe=(t,e,i,a)=>(Ga(t,e,"write to private field"),e.set(t,i),i),te=(t,e,i)=>(Ga(t,e,"access private method"),i),wi,je,Nt,ut,ri,_a,xr,It,ni,ga,Nr,fa,$r,$t,Vi,Gi,Ka,mt,Ht;const v={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function uo(t){return`
    <style>
      
      :host([${r.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${v.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${v.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${v.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${v.AUDIO}])[${v.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${v.AUDIO}])[${v.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${v.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${v.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${v.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${v.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${v.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${v.USER_INACTIVE}]:not([${r.MEDIA_PAUSED}]):not([${r.MEDIA_IS_AIRPLAYING}]):not([${r.MEDIA_IS_CASTING}]):not([${v.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${v.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${v.USER_INACTIVE}]:not([${v.NO_AUTOHIDE}]):not([${r.MEDIA_PAUSED}]):not([${r.MEDIA_IS_CASTING}]):not([${v.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${v.USER_INACTIVE}][${v.AUTOHIDE_OVER_CONTROLS}]:not([${v.NO_AUTOHIDE}]):not([${r.MEDIA_PAUSED}]):not([${r.MEDIA_IS_CASTING}]):not([${v.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${v.AUDIO}])[${r.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${Ks.shadowRootOptions.mode}">
          ${Ks.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}const co=Object.values(r),ho="sm:384 md:576 lg:768 xl:960";function mo(t){Hr(t.target,t.contentRect.width)}function Hr(t,e){var i;if(!t.isConnected)return;const a=(i=t.getAttribute(v.BREAKPOINTS))!=null?i:ho,s=po(a),n=Eo(s,e);let o=!1;if(Object.keys(s).forEach(d=>{if(n.includes(d)){t.hasAttribute(`breakpoint${d}`)||(t.setAttribute(`breakpoint${d}`,""),o=!0);return}t.hasAttribute(`breakpoint${d}`)&&(t.removeAttribute(`breakpoint${d}`),o=!0)}),o){const d=new CustomEvent(We.BREAKPOINTS_CHANGE,{detail:n});t.dispatchEvent(d)}t.breakpointsComputed||(t.breakpointsComputed=!0,t.dispatchEvent(new CustomEvent(We.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function po(t){const e=t.split(/\s+/);return Object.fromEntries(e.map(i=>i.split(":")))}function Eo(t,e){return Object.keys(t).filter(i=>e>=parseInt(t[i]))}class qt extends l.HTMLElement{constructor(){if(super(),J(this,_a),J(this,ga),J(this,fa),J(this,$t),J(this,Gi),J(this,mt),J(this,wi,0),J(this,je,null),J(this,Nt,null),J(this,ut,void 0),this.breakpointsComputed=!1,J(this,ri,new MutationObserver(te(this,_a,xr).bind(this))),J(this,It,!1),J(this,ni,i=>{ee(this,It)||(setTimeout(()=>{mo(i),Oe(this,It,!1)},0),Oe(this,It,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const i=ne(this.attributes),a=this.constructor.getTemplateHTML(i);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(a):this.shadowRoot.innerHTML=a}const e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){ee(this,je)&&this.mediaUnsetCallback(ee(this,je));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[v.AUTOHIDE,v.GESTURES_DISABLED].concat(co).filter(e=>![r.MEDIA_RENDITION_LIST,r.MEDIA_AUDIO_TRACK_LIST,r.MEDIA_CHAPTERS_CUES,r.MEDIA_WIDTH,r.MEDIA_HEIGHT,r.MEDIA_ERROR,r.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,i,a){e.toLowerCase()==v.AUTOHIDE&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return e?.nodeName=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(Oe(this,je,e),e.localName.includes("-")&&await l.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;ee(this,ri).observe(this,{childList:!0,subtree:!0}),wr(this,ee(this,ni));const i=this.getAttribute(v.AUDIO)!=null,a=E(i?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",a),this.handleMediaUpdated(this.media),this.setAttribute(v.USER_INACTIVE,""),Hr(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=l.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;ee(this,ri).disconnect(),Rr(this,ee(this,ni)),this.media&&this.mediaUnsetCallback(this.media),(e=l.window)==null||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){Oe(this,je,null)}handleEvent(e){switch(e.type){case"pointerdown":Oe(this,wi,e.timeStamp);break;case"pointermove":te(this,ga,Nr).call(this,e);break;case"pointerup":te(this,fa,$r).call(this,e);break;case"mouseleave":te(this,$t,Vi).call(this);break;case"mouseup":this.removeAttribute(v.KEYBOARD_CONTROL);break;case"keyup":te(this,mt,Ht).call(this),this.setAttribute(v.KEYBOARD_CONTROL,"");break}}set autohide(e){const i=Number(e);Oe(this,ut,isNaN(i)?0:i)}get autohide(){return(ee(this,ut)===void 0?2:ee(this,ut)).toString()}get breakpoints(){return C(this,v.BREAKPOINTS)}set breakpoints(e){O(this,v.BREAKPOINTS,e)}get audio(){return I(this,v.AUDIO)}set audio(e){S(this,v.AUDIO,e)}get gesturesDisabled(){return I(this,v.GESTURES_DISABLED)}set gesturesDisabled(e){S(this,v.GESTURES_DISABLED,e)}get keyboardControl(){return I(this,v.KEYBOARD_CONTROL)}set keyboardControl(e){S(this,v.KEYBOARD_CONTROL,e)}get noAutohide(){return I(this,v.NO_AUTOHIDE)}set noAutohide(e){S(this,v.NO_AUTOHIDE,e)}get autohideOverControls(){return I(this,v.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){S(this,v.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return I(this,v.USER_INACTIVE)}set userInteractive(e){S(this,v.USER_INACTIVE,e)}}wi=new WeakMap;je=new WeakMap;Nt=new WeakMap;ut=new WeakMap;ri=new WeakMap;_a=new WeakSet;xr=function(t){const e=this.media;for(const i of t){if(i.type!=="childList")continue;const a=i.removedNodes;for(const s of a){if(s.slot!="media"||i.target!=this)continue;let n=i.previousSibling&&i.previousSibling.previousElementSibling;if(!n||!e)this.mediaUnsetCallback(s);else{let o=n.slot!=="media";for(;(n=n.previousSibling)!==null;)n.slot=="media"&&(o=!1);o&&this.mediaUnsetCallback(s)}}if(e)for(const s of i.addedNodes)s===e&&this.handleMediaUpdated(e)}};It=new WeakMap;ni=new WeakMap;ga=new WeakSet;Nr=function(t){if(t.pointerType!=="mouse"&&t.timeStamp-ee(this,wi)<250)return;te(this,Gi,Ka).call(this),clearTimeout(ee(this,Nt));const e=this.hasAttribute(v.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(t.target)||e)&&te(this,mt,Ht).call(this)};fa=new WeakSet;$r=function(t){if(t.pointerType==="touch"){const e=!this.hasAttribute(v.USER_INACTIVE);[this,this.media].includes(t.target)&&e?te(this,$t,Vi).call(this):te(this,mt,Ht).call(this)}else t.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(e?.localName))&&te(this,mt,Ht).call(this)};$t=new WeakSet;Vi=function(){if(ee(this,ut)<0||this.hasAttribute(v.USER_INACTIVE))return;this.setAttribute(v.USER_INACTIVE,"");const t=new l.CustomEvent(We.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(t)};Gi=new WeakSet;Ka=function(){if(!this.hasAttribute(v.USER_INACTIVE))return;this.removeAttribute(v.USER_INACTIVE);const t=new l.CustomEvent(We.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(t)};mt=new WeakSet;Ht=function(){te(this,Gi,Ka).call(this),clearTimeout(ee(this,Nt));const t=parseInt(this.autohide);t<0||Oe(this,Nt,setTimeout(()=>{te(this,$t,Vi).call(this)},t*1e3))};qt.shadowRootOptions={mode:"open"};qt.getTemplateHTML=uo;l.customElements.get("media-container")||l.customElements.define("media-container",qt);var xd=qt,Fr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},B=(t,e,i)=>(Fr(t,e,"read from private field"),i?i.call(t):e.get(t)),ft=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Qt=(t,e,i,a)=>(Fr(t,e,"write to private field"),e.set(t,i),i),et,tt,Ri,Ne,Ae,Le;class Br{constructor(e,i,{defaultValue:a}={defaultValue:void 0}){ft(this,Ae),ft(this,et,void 0),ft(this,tt,void 0),ft(this,Ri,void 0),ft(this,Ne,new Set),Qt(this,et,e),Qt(this,tt,i),Qt(this,Ri,new Set(a))}[Symbol.iterator](){return B(this,Ae,Le).values()}get length(){return B(this,Ae,Le).size}get value(){var e;return(e=[...B(this,Ae,Le)].join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(Qt(this,Ne,new Set),this.add(...(i=e?.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return[...B(this,Ae,Le)][e]}values(){return B(this,Ae,Le).values()}forEach(e,i){B(this,Ae,Le).forEach(e,i)}add(...e){var i,a;e.forEach(s=>B(this,Ne).add(s)),!(this.value===""&&!((i=B(this,et))!=null&&i.hasAttribute(`${B(this,tt)}`)))&&((a=B(this,et))==null||a.setAttribute(`${B(this,tt)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>B(this,Ne).delete(a)),(i=B(this,et))==null||i.setAttribute(`${B(this,tt)}`,`${this.value}`)}contains(e){return B(this,Ae,Le).has(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){return this.remove(e),this.add(i),e===i}}et=new WeakMap;tt=new WeakMap;Ri=new WeakMap;Ne=new WeakMap;Ae=new WeakSet;Le=function(){return B(this,Ne).size?B(this,Ne):B(this,Ri)};const vo=(t="")=>t.split(/\s+/),Wr=(t="")=>{const[e,i,a]=t.split(":"),s=a?decodeURIComponent(a):void 0;return{kind:e==="cc"?re.CAPTIONS:re.SUBTITLES,language:i,label:s}},Vr=(t="",e={})=>vo(t).map(i=>{const a=Wr(i);return{...e,...a}}),Gr=t=>t?Array.isArray(t)?t.map(e=>typeof e=="string"?Wr(e):e):typeof t=="string"?Vr(t):[t]:[],_o=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,ba=(t=[])=>Array.prototype.map.call(t,_o).join(" "),go=(t,e)=>i=>i[t]===e,Kr=t=>{const e=Object.entries(t).map(([i,a])=>go(i,a));return i=>e.every(a=>a(i))},Ot=(t,e=[],i=[])=>{const a=Gr(i).map(Kr),s=n=>a.some(o=>o(n));Array.from(e).filter(s).forEach(n=>{n.mode=t})},Ki=(t,e=()=>!0)=>{if(!t?.textTracks)return[];const i=typeof e=="function"?e:Kr(e);return Array.from(t.textTracks).filter(i)},fo=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(r.MEDIA_SUBTITLES_SHOWING)},bo=t=>{var e;const{media:i,fullscreenElement:a}=t;try{const s=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(s){const n=(e=a[s])==null?void 0:e.call(a);if(n instanceof Promise)return n.catch(()=>{})}else i?.webkitEnterFullscreen?i.webkitEnterFullscreen():i?.requestFullscreen&&i.requestFullscreen()}catch(s){console.error(s)}},qs="exitFullscreen"in Q?"exitFullscreen":"webkitExitFullscreen"in Q?"webkitExitFullscreen":"webkitCancelFullScreen"in Q?"webkitCancelFullScreen":void 0,Ao=t=>{var e;const{documentElement:i}=t;if(qs){const a=(e=i?.[qs])==null?void 0:e.call(i);if(a instanceof Promise)return a.catch(()=>{})}},St="fullscreenElement"in Q?"fullscreenElement":"webkitFullscreenElement"in Q?"webkitFullscreenElement":void 0,To=t=>{const{documentElement:e,media:i}=t,a=e?.[St];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===br.FULLSCREEN?i:a},Io=t=>{var e;const{media:i,documentElement:a,fullscreenElement:s=i}=t;if(!i||!a)return!1;const n=To(t);if(!n)return!1;if(n===s||n===i)return!0;if(n.localName.includes("-")){let o=n.shadowRoot;if(!(St in o))return Et(n,s);for(;o?.[St];){if(o[St]===s)return!0;o=(e=o[St])==null?void 0:e.shadowRoot}}return!1},So="fullscreenEnabled"in Q?"fullscreenEnabled":"webkitFullscreenEnabled"in Q?"webkitFullscreenEnabled":void 0,Mo=t=>{const{documentElement:e,media:i}=t;return!!e?.[So]||i&&"webkitSupportsFullscreen"in i};let zt;const qa=()=>{var t,e;return zt||(zt=(e=(t=Q)==null?void 0:t.createElement)==null?void 0:e.call(t,"video"),zt)},yo=async(t=qa())=>{if(!t)return!1;const e=t.volume;t.volume=e/2+.1;const i=new AbortController,a=await Promise.race([Lo(t,i.signal),ko(t,e)]);return i.abort(),a},Lo=(t,e)=>new Promise(i=>{t.addEventListener("volumechange",()=>i(!0),{signal:e})}),ko=async(t,e)=>{for(let i=0;i<10;i++){if(t.volume===e)return!1;await Ar(10)}return t.volume!==e},wo=/.*Version\/.*Safari\/.*/.test(l.navigator.userAgent),qr=(t=qa())=>l.matchMedia("(display-mode: standalone)").matches&&wo?!1:typeof t?.requestPictureInPicture=="function",Yr=(t=qa())=>Mo({documentElement:Q,media:t}),Ro=Yr(),Do=qr(),Co=!!l.WebKitPlaybackTargetAvailabilityEvent,Oo=!!l.chrome,Di=t=>Ki(t.media,e=>[re.SUBTITLES,re.CAPTIONS].includes(e.kind)).sort((e,i)=>e.kind>=i.kind?1:-1),Qr=t=>Ki(t.media,e=>e.mode===He.SHOWING&&[re.SUBTITLES,re.CAPTIONS].includes(e.kind)),zr=(t,e)=>{const i=Di(t),a=Qr(t),s=!!a.length;if(i.length){if(e===!1||s&&e!==!0)Ot(He.DISABLED,i,a);else if(e===!0||!s&&e!==!1){let n=i[0];const{options:o}=t;if(!o?.noSubtitlesLangPref){const f=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),g=f?[f,...globalThis.navigator.languages]:globalThis.navigator.languages,h=i.filter(p=>g.some(w=>p.language.toLowerCase().startsWith(w.split("-")[0]))).sort((p,w)=>{const T=g.findIndex(k=>p.language.toLowerCase().startsWith(k.split("-")[0])),A=g.findIndex(k=>w.language.toLowerCase().startsWith(k.split("-")[0]));return T-A});h[0]&&(n=h[0])}const{language:d,label:u,kind:_}=n;Ot(He.DISABLED,i,a),Ot(He.SHOWING,i,[{language:d,label:u,kind:_}])}}},Ya=(t,e)=>t===e?!0:t==null||e==null||typeof t!=typeof e?!1:typeof t=="number"&&Number.isNaN(t)&&Number.isNaN(e)?!0:typeof t!="object"?!1:Array.isArray(t)?Uo(t,e):Object.entries(t).every(([i,a])=>i in e&&Ya(a,e[i])),Uo=(t,e)=>{const i=Array.isArray(t),a=Array.isArray(e);return i!==a?!1:i||a?t.length!==e.length?!1:t.every((s,n)=>Ya(s,e[n])):!0},Po=Object.values(ge);let Ci;const xo=yo().then(t=>(Ci=t,Ci)),No=async(...t)=>{await Promise.all(t.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof l.HTMLElement))return;const i=e.localName;if(!i.includes("-"))return;const a=l.customElements.get(i);a&&e instanceof a||(await l.customElements.whenDefined(i),l.customElements.upgrade(e))}))},$o=new l.DOMParser,Ho=t=>t&&($o.parseFromString(t,"text/html").body.textContent||t),Mt={mediaError:{get(t,e){const{media:i}=t;if(e?.type!=="playing")return i?.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(t,e){var i;const{media:a}=t;if(e?.type!=="playing")return(i=a?.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(t,e){var i,a;const{media:s}=t;if(e?.type!=="playing")return(a=(i=s?.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(t){var e;const{media:i}=t;return(e=i?.videoWidth)!=null?e:0},mediaEvents:["resize"]},mediaHeight:{get(t){var e;const{media:i}=t;return(e=i?.videoHeight)!=null?e:0},mediaEvents:["resize"]},mediaPaused:{get(t){var e;const{media:i}=t;return(e=i?.paused)!=null?e:!0},set(t,e){var i;const{media:a}=e;a&&(t?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(t,e){const{media:i}=t;return i?e?e.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(t){var e;const{media:i}=t;return(e=i?.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(t){var e;const{media:i}=t;return(e=i?.playbackRate)!=null?e:1},set(t,e){const{media:i}=e;i&&Number.isFinite(+t)&&(i.playbackRate=+t)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(t){var e;const{media:i}=t;return(e=i?.muted)!=null?e:!1},set(t,e){const{media:i}=e;if(i){try{l.localStorage.setItem("media-chrome-pref-muted",t?"true":"false")}catch(a){console.debug("Error setting muted pref",a)}i.muted=t}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noMutedPref:i}}=e,{media:a}=e;if(!(!a||a.muted||i))try{const s=l.localStorage.getItem("media-chrome-pref-muted")==="true";Mt.mediaMuted.set(s,e),t(s)}catch(s){console.debug("Error getting muted pref",s)}}]},mediaVolume:{get(t){var e;const{media:i}=t;return(e=i?.volume)!=null?e:1},set(t,e){const{media:i}=e;if(i){try{t==null?l.localStorage.removeItem("media-chrome-pref-volume"):l.localStorage.setItem("media-chrome-pref-volume",t.toString())}catch(a){console.debug("Error setting volume pref",a)}Number.isFinite(+t)&&(i.volume=+t)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noVolumePref:i}}=e;if(!i)try{const{media:a}=e;if(!a)return;const s=l.localStorage.getItem("media-chrome-pref-volume");if(s==null)return;Mt.mediaVolume.set(+s,e),t(+s)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(t){const{media:e}=t;return typeof e?.volume>"u"?"high":e.muted||e.volume===0?"off":e.volume<.5?"low":e.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(t){var e;const{media:i}=t;return(e=i?.currentTime)!=null?e:0},set(t,e){const{media:i}=e;!i||!Wa(t)||(i.currentTime=t)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(t){const{media:e,options:{defaultDuration:i}={}}=t;return i&&(!e||!e.duration||Number.isNaN(e.duration)||!Number.isFinite(e.duration))?i:Number.isFinite(e?.duration)?e.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(t){const{media:e}=t;return e?.readyState<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(t){var e;const{media:i}=t;if(!((e=i?.seekable)!=null&&e.length))return;const a=i.seekable.start(0),s=i.seekable.end(i.seekable.length-1);if(!(!a&&!s))return[Number(a.toFixed(3)),Number(s.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(t){var e;const{media:i}=t,a=(e=i?.buffered)!=null?e:[];return Array.from(a).map((s,n)=>[Number(a.start(n).toFixed(3)),Number(a.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(t){const{media:e,options:{defaultStreamType:i}={}}=t,a=[ge.LIVE,ge.ON_DEMAND].includes(i)?i:void 0;if(!e)return a;const{streamType:s}=e;if(Po.includes(s))return s===ge.UNKNOWN?a:s;const n=e.duration;return n===1/0?ge.LIVE:Number.isFinite(n)?ge.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(t){const{media:e}=t;if(!e)return Number.NaN;const{targetLiveWindow:i}=e,a=Mt.mediaStreamType.get(t);return(i==null||Number.isNaN(i))&&a===ge.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(t){const{media:e,options:{liveEdgeOffset:i=10}={}}=t;if(!e)return!1;if(typeof e.liveEdgeStart=="number")return Number.isNaN(e.liveEdgeStart)?!1:e.currentTime>=e.liveEdgeStart;if(!(Mt.mediaStreamType.get(t)===ge.LIVE))return!1;const s=e.seekable;if(!s)return!0;if(!s.length)return!1;const n=s.end(s.length-1)-i;return e.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(t){return Di(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(t){return Qr(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i,a;const{media:s,options:n}=e;if(!s)return;const o=d=>{var u;!n.defaultSubtitles||d&&![re.CAPTIONS,re.SUBTITLES].includes((u=d?.track)==null?void 0:u.kind)||zr(e,!0)};return s.addEventListener("loadstart",o),(i=s.textTracks)==null||i.addEventListener("addtrack",o),(a=s.textTracks)==null||a.addEventListener("removetrack",o),()=>{var d,u;s.removeEventListener("loadstart",o),(d=s.textTracks)==null||d.removeEventListener("addtrack",o),(u=s.textTracks)==null||u.removeEventListener("removetrack",o)}}]},mediaChaptersCues:{get(t){var e;const{media:i}=t;if(!i)return[];const[a]=Ki(i,{kind:re.CHAPTERS});return Array.from((e=a?.cues)!=null?e:[]).map(({text:s,startTime:n,endTime:o})=>({text:Ho(s),startTime:n,endTime:o}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;if(!a)return;const s=a.querySelector('track[kind="chapters"][default][src]'),n=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return s?.addEventListener("load",t),n?.addEventListener("load",t),()=>{s?.removeEventListener("load",t),n?.removeEventListener("load",t)}}]},mediaIsPip:{get(t){var e,i;const{media:a,documentElement:s}=t;if(!a||!s||!s.pictureInPictureElement)return!1;if(s.pictureInPictureElement===a)return!0;if(s.pictureInPictureElement instanceof HTMLMediaElement)return(e=a.localName)!=null&&e.includes("-")?Et(a,s.pictureInPictureElement):!1;if(s.pictureInPictureElement.localName.includes("-")){let n=s.pictureInPictureElement.shadowRoot;for(;n?.pictureInPictureElement;){if(n.pictureInPictureElement===a)return!0;n=(i=n.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(t,e){const{media:i}=e;if(i)if(t){if(!Q.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(s=>{if(s.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const n=()=>{i.removeEventListener("loadedmetadata",o),i.preload="none"},o=()=>{i.requestPictureInPicture().catch(a),n()};i.addEventListener("loadedmetadata",o),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),n()},1e3)}else throw s}else throw s})}else Q.pictureInPictureElement&&Q.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(t){var e;const{media:i}=t;return[...(e=i?.videoRenditions)!=null?e:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(t){var e,i,a;const{media:s}=t;return(a=(i=s?.videoRenditions)==null?void 0:i[(e=s.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:a.id},set(t,e){const{media:i}=e;if(!i?.videoRenditions){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=t,s=Array.prototype.findIndex.call(i.videoRenditions,n=>n.id==a);i.videoRenditions.selectedIndex!=s&&(i.videoRenditions.selectedIndex=s)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(t){var e;const{media:i}=t;return[...(e=i?.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(t){var e,i;const{media:a}=t;return(i=[...(e=a?.audioTracks)!=null?e:[]].find(s=>s.enabled))==null?void 0:i.id},set(t,e){const{media:i}=e;if(!i?.audioTracks){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=t;for(const s of i.audioTracks)s.enabled=a==s.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(t){return Io(t)},set(t,e){t?bo(e):Ao(e)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(t){var e;const{media:i}=t;return!i?.remote||((e=i.remote)==null?void 0:e.state)==="disconnected"?!1:!!i.remote.state},set(t,e){var i,a;const{media:s}=e;if(s&&!(t&&((i=s.remote)==null?void 0:i.state)!=="disconnected")&&!(!t&&((a=s.remote)==null?void 0:a.state)!=="connected")){if(typeof s.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}s.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(t,e){const{media:i}=e;if(i){if(!(i.webkitShowPlaybackTargetPicker&&l.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(t){const{media:e}=t;if(!Ro||!Yr(e))return q.UNSUPPORTED}},mediaPipUnavailable:{get(t){const{media:e}=t;if(!Do||!qr(e))return q.UNSUPPORTED;if(e?.disablePictureInPicture)return q.UNAVAILABLE}},mediaVolumeUnavailable:{get(t){const{media:e}=t;if(Ci===!1||e?.volume==null)return q.UNSUPPORTED},stateOwnersUpdateHandlers:[t=>{Ci==null&&xo.then(e=>t(e?void 0:q.UNSUPPORTED))}]},mediaCastUnavailable:{get(t,{availability:e="not-available"}={}){var i;const{media:a}=t;if(!Oo||!((i=a?.remote)!=null&&i.state))return q.UNSUPPORTED;if(!(e==null||e==="available"))return q.UNAVAILABLE},stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(t,e){if(!Co)return q.UNSUPPORTED;if(e?.availability==="not-available")return q.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(t){var e;const{media:i}=t;if(!i?.videoRenditions)return q.UNSUPPORTED;if(!((e=i.videoRenditions)!=null&&e.length))return q.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(t){var e,i;const{media:a}=t;if(!a?.audioTracks)return q.UNSUPPORTED;if(((i=(e=a.audioTracks)==null?void 0:e.length)!=null?i:0)<=1)return q.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(t){const{options:{mediaLang:e}={}}=t;return e??"en"}}},Fo={[m.MEDIA_PREVIEW_REQUEST](t,e,{detail:i}){var a,s,n;const{media:o}=e,d=i??void 0;let u,_;if(o&&d!=null){const[p]=Ki(o,{kind:re.METADATA,label:"thumbnails"}),w=Array.prototype.find.call((a=p?.cues)!=null?a:[],(T,A,k)=>A===0?T.endTime>d:A===k.length-1?T.startTime<=d:T.startTime<=d&&T.endTime>d);if(w){const T=/'^(?:[a-z]+:)?\/\//i.test(w.text)||(s=o?.querySelector('track[label="thumbnails"]'))==null?void 0:s.src,A=new URL(w.text,T);_=new URLSearchParams(A.hash).get("#xywh").split(",").map(z=>+z),u=A.href}}const f=t.mediaDuration.get(e);let h=(n=t.mediaChaptersCues.get(e).find((p,w,T)=>w===T.length-1&&f===p.endTime?p.startTime<=d&&p.endTime>=d:p.startTime<=d&&p.endTime>d))==null?void 0:n.text;return i!=null&&h==null&&(h=""),{mediaPreviewTime:d,mediaPreviewImage:u,mediaPreviewCoords:_,mediaPreviewChapter:h}},[m.MEDIA_PAUSE_REQUEST](t,e){t["mediaPaused"].set(!0,e)},[m.MEDIA_PLAY_REQUEST](t,e){var i,a,s,n;const o="mediaPaused",u=t.mediaStreamType.get(e)===ge.LIVE,_=!((i=e.options)!=null&&i.noAutoSeekToLive),f=t.mediaTargetLiveWindow.get(e)>0;if(u&&_&&!f){const g=(a=t.mediaSeekable.get(e))==null?void 0:a[1];if(g){const h=(n=(s=e.options)==null?void 0:s.seekToLiveOffset)!=null?n:0,p=g-h;t.mediaCurrentTime.set(p,e)}}t[o].set(!1,e)},[m.MEDIA_PLAYBACK_RATE_REQUEST](t,e,{detail:i}){const a="mediaPlaybackRate",s=i;t[a].set(s,e)},[m.MEDIA_MUTE_REQUEST](t,e){t["mediaMuted"].set(!0,e)},[m.MEDIA_UNMUTE_REQUEST](t,e){const i="mediaMuted";t.mediaVolume.get(e)||t.mediaVolume.set(.25,e),t[i].set(!1,e)},[m.MEDIA_VOLUME_REQUEST](t,e,{detail:i}){const a="mediaVolume",s=i;s&&t.mediaMuted.get(e)&&t.mediaMuted.set(!1,e),t[a].set(s,e)},[m.MEDIA_SEEK_REQUEST](t,e,{detail:i}){const a="mediaCurrentTime",s=i;t[a].set(s,e)},[m.MEDIA_SEEK_TO_LIVE_REQUEST](t,e){var i,a,s;const n="mediaCurrentTime",o=(i=t.mediaSeekable.get(e))==null?void 0:i[1];if(Number.isNaN(Number(o)))return;const d=(s=(a=e.options)==null?void 0:a.seekToLiveOffset)!=null?s:0,u=o-d;t[n].set(u,e)},[m.MEDIA_SHOW_SUBTITLES_REQUEST](t,e,{detail:i}){var a;const{options:s}=e,n=Di(e),o=Gr(i),d=(a=o[0])==null?void 0:a.language;d&&!s.noSubtitlesLangPref&&l.localStorage.setItem("media-chrome-pref-subtitles-lang",d),Ot(He.SHOWING,n,o)},[m.MEDIA_DISABLE_SUBTITLES_REQUEST](t,e,{detail:i}){const a=Di(e),s=i??[];Ot(He.DISABLED,a,s)},[m.MEDIA_TOGGLE_SUBTITLES_REQUEST](t,e,{detail:i}){zr(e,i)},[m.MEDIA_RENDITION_REQUEST](t,e,{detail:i}){const a="mediaRenditionSelected",s=i;t[a].set(s,e)},[m.MEDIA_AUDIO_TRACK_REQUEST](t,e,{detail:i}){const a="mediaAudioTrackEnabled",s=i;t[a].set(s,e)},[m.MEDIA_ENTER_PIP_REQUEST](t,e){const i="mediaIsPip";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[m.MEDIA_EXIT_PIP_REQUEST](t,e){t["mediaIsPip"].set(!1,e)},[m.MEDIA_ENTER_FULLSCREEN_REQUEST](t,e){const i="mediaIsFullscreen";t.mediaIsPip.get(e)&&t.mediaIsPip.set(!1,e),t[i].set(!0,e)},[m.MEDIA_EXIT_FULLSCREEN_REQUEST](t,e){t["mediaIsFullscreen"].set(!1,e)},[m.MEDIA_ENTER_CAST_REQUEST](t,e){const i="mediaIsCasting";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[m.MEDIA_EXIT_CAST_REQUEST](t,e){t["mediaIsCasting"].set(!1,e)},[m.MEDIA_AIRPLAY_REQUEST](t,e){t["mediaIsAirplaying"].set(!0,e)}},Bo=({media:t,fullscreenElement:e,documentElement:i,stateMediator:a=Mt,requestMap:s=Fo,options:n={},monitorStateOwnersOnlyWithSubscriptions:o=!0})=>{const d=[],u={options:{...n}};let _=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const f=T=>{T!=null&&(Ya(T,_)||(_=Object.freeze({..._,...T}),d.forEach(A=>A(_))))},g=()=>{const T=Object.entries(a).reduce((A,[k,{get:z}])=>(A[k]=z(u),A),{});f(T)},h={};let p;const w=async(T,A)=>{var k,z,oe,_t,Ke,ds,us,cs,hs,ms,ps,Es,vs,_s,gs,fs;const Dn=!!p;if(p={...u,...p??{},...T},Dn)return;await No(...Object.values(T));const qe=d.length>0&&A===0&&o,bs=u.media!==p.media,As=((k=u.media)==null?void 0:k.textTracks)!==((z=p.media)==null?void 0:z.textTracks),Ts=((oe=u.media)==null?void 0:oe.videoRenditions)!==((_t=p.media)==null?void 0:_t.videoRenditions),Is=((Ke=u.media)==null?void 0:Ke.audioTracks)!==((ds=p.media)==null?void 0:ds.audioTracks),Ss=((us=u.media)==null?void 0:us.remote)!==((cs=p.media)==null?void 0:cs.remote),Ms=u.documentElement!==p.documentElement,ys=!!u.media&&(bs||qe),Ls=!!((hs=u.media)!=null&&hs.textTracks)&&(As||qe),ks=!!((ms=u.media)!=null&&ms.videoRenditions)&&(Ts||qe),ws=!!((ps=u.media)!=null&&ps.audioTracks)&&(Is||qe),Rs=!!((Es=u.media)!=null&&Es.remote)&&(Ss||qe),Ds=!!u.documentElement&&(Ms||qe),Cs=ys||Ls||ks||ws||Rs||Ds,Ye=d.length===0&&A===1&&o,Os=!!p.media&&(bs||Ye),Us=!!((vs=p.media)!=null&&vs.textTracks)&&(As||Ye),Ps=!!((_s=p.media)!=null&&_s.videoRenditions)&&(Ts||Ye),xs=!!((gs=p.media)!=null&&gs.audioTracks)&&(Is||Ye),Ns=!!((fs=p.media)!=null&&fs.remote)&&(Ss||Ye),$s=!!p.documentElement&&(Ms||Ye),Hs=Os||Us||Ps||xs||Ns||$s;if(!(Cs||Hs)){Object.entries(p).forEach(([L,gt])=>{u[L]=gt}),g(),p=void 0;return}Object.entries(a).forEach(([L,{get:gt,mediaEvents:Cn=[],textTracksEvents:On=[],videoRenditionsEvents:Un=[],audioTracksEvents:Pn=[],remoteEvents:xn=[],rootEvents:Nn=[],stateOwnersUpdateHandlers:$n=[]}])=>{h[L]||(h[L]={});const Z=U=>{const X=gt(u,U);f({[L]:X})};let $;$=h[L].mediaEvents,Cn.forEach(U=>{$&&ys&&(u.media.removeEventListener(U,$),h[L].mediaEvents=void 0),Os&&(p.media.addEventListener(U,Z),h[L].mediaEvents=Z)}),$=h[L].textTracksEvents,On.forEach(U=>{var X,ie;$&&Ls&&((X=u.media.textTracks)==null||X.removeEventListener(U,$),h[L].textTracksEvents=void 0),Us&&((ie=p.media.textTracks)==null||ie.addEventListener(U,Z),h[L].textTracksEvents=Z)}),$=h[L].videoRenditionsEvents,Un.forEach(U=>{var X,ie;$&&ks&&((X=u.media.videoRenditions)==null||X.removeEventListener(U,$),h[L].videoRenditionsEvents=void 0),Ps&&((ie=p.media.videoRenditions)==null||ie.addEventListener(U,Z),h[L].videoRenditionsEvents=Z)}),$=h[L].audioTracksEvents,Pn.forEach(U=>{var X,ie;$&&ws&&((X=u.media.audioTracks)==null||X.removeEventListener(U,$),h[L].audioTracksEvents=void 0),xs&&((ie=p.media.audioTracks)==null||ie.addEventListener(U,Z),h[L].audioTracksEvents=Z)}),$=h[L].remoteEvents,xn.forEach(U=>{var X,ie;$&&Rs&&((X=u.media.remote)==null||X.removeEventListener(U,$),h[L].remoteEvents=void 0),Ns&&((ie=p.media.remote)==null||ie.addEventListener(U,Z),h[L].remoteEvents=Z)}),$=h[L].rootEvents,Nn.forEach(U=>{$&&Ds&&(u.documentElement.removeEventListener(U,$),h[L].rootEvents=void 0),$s&&(p.documentElement.addEventListener(U,Z),h[L].rootEvents=Z)});const Fs=h[L].stateOwnersUpdateHandlers;$n.forEach(U=>{Fs&&Cs&&Fs(),Hs&&(h[L].stateOwnersUpdateHandlers=U(Z,p))})}),Object.entries(p).forEach(([L,gt])=>{u[L]=gt}),g(),p=void 0};return w({media:t,fullscreenElement:e,documentElement:i,options:n}),{dispatch(T){const{type:A,detail:k}=T;if(s[A]&&_.mediaErrorCode==null){f(s[A](a,u,T));return}A==="mediaelementchangerequest"?w({media:k}):A==="fullscreenelementchangerequest"?w({fullscreenElement:k}):A==="documentelementchangerequest"?w({documentElement:k}):A==="optionschangerequest"&&(Object.entries(k??{}).forEach(([z,oe])=>{u.options[z]=oe}),g())},getState(){return _},subscribe(T){return w({},d.length+1),d.push(T),T(_),()=>{const A=d.indexOf(T);A>=0&&(w({},d.length-1),d.splice(A,1))}}}};var Qa=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},b=(t,e,i)=>(Qa(t,e,"read from private field"),i?i.call(t):e.get(t)),fe=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Me=(t,e,i,a)=>(Qa(t,e,"write to private field"),e.set(t,i),i),Re=(t,e,i)=>(Qa(t,e,"access private method"),i),$e,yt,y,Lt,ue,oi,li,Aa,pt,Ft,di,Ta;const Zr=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],Ys=10,c={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",SEEK_TO_LIVE_OFFSET:"seektoliveoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",LANG:"lang"};class Xr extends qt{constructor(){super(),fe(this,li),fe(this,pt),fe(this,di),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,fe(this,$e,new Br(this,c.HOTKEYS)),fe(this,yt,void 0),fe(this,y,void 0),fe(this,Lt,void 0),fe(this,ue,void 0),fe(this,oi,i=>{var a;(a=b(this,y))==null||a.dispatch(i)}),this.associateElement(this);let e={};Me(this,Lt,i=>{Object.entries(i).forEach(([a,s])=>{if(a in e&&e[a]===s)return;this.propagateMediaState(a,s);const n=a.toLowerCase(),o=new l.CustomEvent(fr[n],{composed:!0,detail:s});this.dispatchEvent(o)}),e=i}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(c.NO_HOTKEYS,c.HOTKEYS,c.DEFAULT_STREAM_TYPE,c.DEFAULT_SUBTITLES,c.DEFAULT_DURATION,c.LANG)}get mediaStore(){return b(this,y)}set mediaStore(e){var i,a;if(b(this,y)&&((i=b(this,ue))==null||i.call(this),Me(this,ue,void 0)),Me(this,y,e),!b(this,y)&&!this.hasAttribute(c.NO_DEFAULT_STORE)){Re(this,li,Aa).call(this);return}Me(this,ue,(a=b(this,y))==null?void 0:a.subscribe(b(this,Lt)))}get fullscreenElement(){var e;return(e=b(this,yt))!=null?e:this}set fullscreenElement(e){var i;this.hasAttribute(c.FULLSCREEN_ELEMENT)&&this.removeAttribute(c.FULLSCREEN_ELEMENT),Me(this,yt,e),(i=b(this,y))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return I(this,c.DEFAULT_SUBTITLES)}set defaultSubtitles(e){S(this,c.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return C(this,c.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){O(this,c.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return D(this,c.DEFAULT_DURATION)}set defaultDuration(e){W(this,c.DEFAULT_DURATION,e)}get noHotkeys(){return I(this,c.NO_HOTKEYS)}set noHotkeys(e){S(this,c.NO_HOTKEYS,e)}get keysUsed(){return C(this,c.KEYS_USED)}set keysUsed(e){O(this,c.KEYS_USED,e)}get liveEdgeOffset(){return D(this,c.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){W(this,c.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return I(this,c.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){S(this,c.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return I(this,c.NO_VOLUME_PREF)}set noVolumePref(e){S(this,c.NO_VOLUME_PREF,e)}get noSubtitlesLangPref(){return I(this,c.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){S(this,c.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return I(this,c.NO_DEFAULT_STORE)}set noDefaultStore(e){S(this,c.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,i,a){var s,n,o,d,u,_,f,g,h;if(super.attributeChangedCallback(e,i,a),e===c.NO_HOTKEYS)a!==i&&a===""?(this.hasAttribute(c.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==i&&a===null&&this.enableHotkeys();else if(e===c.HOTKEYS)b(this,$e).value=a;else if(e===c.DEFAULT_SUBTITLES&&a!==i)(s=b(this,y))==null||s.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(c.DEFAULT_SUBTITLES)}});else if(e===c.DEFAULT_STREAM_TYPE)(o=b(this,y))==null||o.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(n=this.getAttribute(c.DEFAULT_STREAM_TYPE))!=null?n:void 0}});else if(e===c.LIVE_EDGE_OFFSET)(d=b(this,y))==null||d.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(c.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(c.LIVE_EDGE_OFFSET)}});else if(e===c.SEEK_TO_LIVE_OFFSET)(u=b(this,y))==null||u.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(c.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(c.SEEK_TO_LIVE_OFFSET):void 0}});else if(e===c.NO_AUTO_SEEK_TO_LIVE)(_=b(this,y))==null||_.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(c.NO_AUTO_SEEK_TO_LIVE)}});else if(e===c.FULLSCREEN_ELEMENT){const p=a?(f=this.getRootNode())==null?void 0:f.getElementById(a):void 0;Me(this,yt,p),(g=b(this,y))==null||g.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===c.LANG&&a!==i&&(Zn(a),(h=b(this,y))==null||h.dispatch({type:"optionschangerequest",detail:{mediaLang:a}}))}connectedCallback(){var e,i;!b(this,y)&&!this.hasAttribute(c.NO_DEFAULT_STORE)&&Re(this,li,Aa).call(this),(e=b(this,y))==null||e.dispatch({type:"documentelementchangerequest",detail:Q}),super.connectedCallback(),b(this,y)&&!b(this,ue)&&Me(this,ue,(i=b(this,y))==null?void 0:i.subscribe(b(this,Lt))),this.enableHotkeys()}disconnectedCallback(){var e,i,a,s;(e=super.disconnectedCallback)==null||e.call(this),b(this,y)&&((i=b(this,y))==null||i.dispatch({type:"documentelementchangerequest",detail:void 0}),(a=b(this,y))==null||a.dispatch({type:m.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),b(this,ue)&&((s=b(this,ue))==null||s.call(this),Me(this,ue,void 0))}mediaSetCallback(e){var i;super.mediaSetCallback(e),(i=b(this,y))==null||i.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var i;super.mediaUnsetCallback(e),(i=b(this,y))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,i){Zs(this.mediaStateReceivers,e,i)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(i.has(e))return;const a=this.registerMediaStateReceiver.bind(this),s=this.unregisterMediaStateReceiver.bind(this),n=Yo(e,a,s);Object.values(m).forEach(o=>{e.addEventListener(o,b(this,oi))}),i.set(e,n)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(!i.has(e))return;i.get(e)(),i.delete(e),Object.values(m).forEach(s=>{e.removeEventListener(s,b(this,oi))})}registerMediaStateReceiver(e){if(!e)return;const i=this.mediaStateReceivers;i.indexOf(e)>-1||(i.push(e),b(this,y)&&Object.entries(b(this,y).getState()).forEach(([s,n])=>{Zs([e],s,n)}))}unregisterMediaStateReceiver(e){const i=this.mediaStateReceivers,a=i.indexOf(e);a<0||i.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",Re(this,di,Ta))}disableHotkeys(){this.removeEventListener("keydown",Re(this,di,Ta)),this.removeEventListener("keyup",Re(this,pt,Ft))}get hotkeys(){return C(this,c.HOTKEYS)}set hotkeys(e){O(this,c.HOTKEYS,e)}keyboardShortcutHandler(e){var i,a,s,n,o;const d=e.target;if(((s=(a=(i=d.getAttribute(c.KEYS_USED))==null?void 0:i.split(" "))!=null?a:d?.keysUsed)!=null?s:[]).map(h=>h==="Space"?" ":h).filter(Boolean).includes(e.key))return;let _,f,g;if(!b(this,$e).contains(`no${e.key.toLowerCase()}`)&&!(e.key===" "&&b(this,$e).contains("nospace")))switch(e.key){case" ":case"k":_=b(this,y).getState().mediaPaused?m.MEDIA_PLAY_REQUEST:m.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new l.CustomEvent(_,{composed:!0,bubbles:!0}));break;case"m":_=this.mediaStore.getState().mediaVolumeLevel==="off"?m.MEDIA_UNMUTE_REQUEST:m.MEDIA_MUTE_REQUEST,this.dispatchEvent(new l.CustomEvent(_,{composed:!0,bubbles:!0}));break;case"f":_=this.mediaStore.getState().mediaIsFullscreen?m.MEDIA_EXIT_FULLSCREEN_REQUEST:m.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new l.CustomEvent(_,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new l.CustomEvent(m.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{const h=this.hasAttribute(c.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(c.KEYBOARD_BACKWARD_SEEK_OFFSET):Ys;f=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)-h,0),g=new l.CustomEvent(m.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:f}),this.dispatchEvent(g);break}case"ArrowRight":{const h=this.hasAttribute(c.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(c.KEYBOARD_FORWARD_SEEK_OFFSET):Ys;f=Math.max(((o=this.mediaStore.getState().mediaCurrentTime)!=null?o:0)+h,0),g=new l.CustomEvent(m.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:f}),this.dispatchEvent(g);break}}}}$e=new WeakMap;yt=new WeakMap;y=new WeakMap;Lt=new WeakMap;ue=new WeakMap;oi=new WeakMap;li=new WeakSet;Aa=function(){var t;this.mediaStore=Bo({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(c.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(c.DEFAULT_DURATION)?+this.getAttribute(c.DEFAULT_DURATION):void 0,defaultStreamType:(t=this.getAttribute(c.DEFAULT_STREAM_TYPE))!=null?t:void 0,liveEdgeOffset:this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(c.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(c.SEEK_TO_LIVE_OFFSET):this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(c.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(c.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(c.NO_SUBTITLES_LANG_PREF)}})};pt=new WeakSet;Ft=function(t){const{key:e}=t;if(!Zr.includes(e)){this.removeEventListener("keyup",Re(this,pt,Ft));return}this.keyboardShortcutHandler(t)};di=new WeakSet;Ta=function(t){const{metaKey:e,altKey:i,key:a}=t;if(e||i||!Zr.includes(a)){this.removeEventListener("keyup",Re(this,pt,Ft));return}[" ","ArrowLeft","ArrowRight"].includes(a)&&!(b(this,$e).contains(`no${a.toLowerCase()}`)||a===" "&&b(this,$e).contains("nospace"))&&t.preventDefault(),this.addEventListener("keyup",Re(this,pt,Ft),{once:!0})};const Wo=Object.values(r),Vo=Object.values(Ba),Jr=t=>{var e,i,a,s;let{observedAttributes:n}=t.constructor;!n&&((e=t.nodeName)!=null&&e.includes("-"))&&(l.customElements.upgrade(t),{observedAttributes:n}=t.constructor);const o=(s=(a=(i=t?.getAttribute)==null?void 0:i.call(t,M.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:s.call(a,/\s+/);return Array.isArray(n||o)?(n||o).filter(d=>Wo.includes(d)):[]},Go=t=>{var e,i;return(e=t.nodeName)!=null&&e.includes("-")&&l.customElements.get((i=t.nodeName)==null?void 0:i.toLowerCase())&&!(t instanceof l.customElements.get(t.nodeName.toLowerCase()))&&l.customElements.upgrade(t),Vo.some(a=>a in t)},Ia=t=>Go(t)||!!Jr(t).length,Qs=t=>{var e;return(e=t?.join)==null?void 0:e.call(t,":")},zs={[r.MEDIA_SUBTITLES_LIST]:ba,[r.MEDIA_SUBTITLES_SHOWING]:ba,[r.MEDIA_SEEKABLE]:Qs,[r.MEDIA_BUFFERED]:t=>t?.map(Qs).join(" "),[r.MEDIA_PREVIEW_COORDS]:t=>t?.join(" "),[r.MEDIA_RENDITION_LIST]:Vn,[r.MEDIA_AUDIO_TRACK_LIST]:Kn},Ko=async(t,e,i)=>{var a,s;if(t.isConnected||await Ar(0),typeof i=="boolean"||i==null)return S(t,e,i);if(typeof i=="number")return W(t,e,i);if(typeof i=="string")return O(t,e,i);if(Array.isArray(i)&&!i.length)return t.removeAttribute(e);const n=(s=(a=zs[e])==null?void 0:a.call(zs,i))!=null?s:i;return t.setAttribute(e,n)},qo=t=>{var e;return!!((e=t.closest)!=null&&e.call(t,'*[slot="media"]'))},Ue=(t,e)=>{if(qo(t))return;const i=(s,n)=>{var o,d;Ia(s)&&n(s);const{children:u=[]}=s??{},_=(d=(o=s?.shadowRoot)==null?void 0:o.children)!=null?d:[];[...u,..._].forEach(g=>Ue(g,n))},a=t?.nodeName.toLowerCase();if(a.includes("-")&&!Ia(t)){l.customElements.whenDefined(a).then(()=>{i(t,e)});return}i(t,e)},Zs=(t,e,i)=>{t.forEach(a=>{if(e in a){a[e]=i;return}const s=Jr(a),n=e.toLowerCase();s.includes(n)&&Ko(a,n,i)})},Yo=(t,e,i)=>{Ue(t,e);const a=f=>{var g;const h=(g=f?.composedPath()[0])!=null?g:f.target;e(h)},s=f=>{var g;const h=(g=f?.composedPath()[0])!=null?g:f.target;i(h)};t.addEventListener(m.REGISTER_MEDIA_STATE_RECEIVER,a),t.addEventListener(m.UNREGISTER_MEDIA_STATE_RECEIVER,s);const n=f=>{f.forEach(g=>{const{addedNodes:h=[],removedNodes:p=[],type:w,target:T,attributeName:A}=g;w==="childList"?(Array.prototype.forEach.call(h,k=>Ue(k,e)),Array.prototype.forEach.call(p,k=>Ue(k,i))):w==="attributes"&&A===M.MEDIA_CHROME_ATTRIBUTES&&(Ia(T)?e(T):i(T))})};let o=[];const d=f=>{const g=f.target;g.name!=="media"&&(o.forEach(h=>Ue(h,i)),o=[...g.assignedElements({flatten:!0})],o.forEach(h=>Ue(h,e)))};t.addEventListener("slotchange",d);const u=new MutationObserver(n);return u.observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{Ue(t,i),t.removeEventListener("slotchange",d),u.disconnect(),t.removeEventListener(m.REGISTER_MEDIA_STATE_RECEIVER,a),t.removeEventListener(m.UNREGISTER_MEDIA_STATE_RECEIVER,s)}};l.customElements.get("media-controller")||l.customElements.define("media-controller",Xr);var Nd=Xr;const Qe={PLACEMENT:"placement",BOUNDS:"bounds"};function Qo(t){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}class qi extends l.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!Ur(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const i=this.placement;if(i==="left"||i==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const a=getComputedStyle(this),s=(e=Kt(this,"#"+this.bounds))!=null?e:jn(this);if(!s)return;const{x:n,width:o}=s.getBoundingClientRect(),{x:d,width:u}=this.getBoundingClientRect(),_=d+u,f=n+o,g=a.getPropertyValue("--media-tooltip-offset-x"),h=g?parseFloat(g.replace("px","")):0,p=a.getPropertyValue("--media-tooltip-container-margin"),w=p?parseFloat(p.replace("px","")):0,T=d-n+h-w,A=_-f+h+w;if(T<0){this.style.setProperty("--media-tooltip-offset-x",`${T}px`);return}if(A>0){this.style.setProperty("--media-tooltip-offset-x",`${A}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[Qe.PLACEMENT,Qe.BOUNDS]}get placement(){return C(this,Qe.PLACEMENT)}set placement(e){O(this,Qe.PLACEMENT,e)}get bounds(){return C(this,Qe.BOUNDS)}set bounds(e){O(this,Qe.BOUNDS,e)}}qi.shadowRootOptions={mode:"open"};qi.getTemplateHTML=Qo;l.customElements.get("media-tooltip")||l.customElements.define("media-tooltip",qi);var Xs=qi,za=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},P=(t,e,i)=>(za(t,e,"read from private field"),i?i.call(t):e.get(t)),ze=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Zt=(t,e,i,a)=>(za(t,e,"write to private field"),e.set(t,i),i),zo=(t,e,i)=>(za(t,e,"access private method"),i),ce,ct,De,it,ui,Sa,jr;const ye={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function Zo(t,e={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${Xs.shadowRootOptions.mode}">
          ${Xs.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(t)}
        </slot>
      </media-tooltip>
    </slot>
  `}function Xo(t,e){return`
    <slot></slot>
  `}function Jo(){return""}class G extends l.HTMLElement{constructor(){if(super(),ze(this,Sa),ze(this,ce,void 0),this.preventClick=!1,this.tooltipEl=null,ze(this,ct,e=>{this.preventClick||this.handleClick(e),setTimeout(P(this,De),0)}),ze(this,De,()=>{var e,i;(i=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||i.call(e)}),ze(this,it,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",P(this,it));return}this.preventClick||this.handleClick(e)}),ze(this,ui,e=>{const{metaKey:i,altKey:a,key:s}=e;if(i||a||!this.keysUsed.includes(s)){this.removeEventListener("keyup",P(this,it));return}this.addEventListener("keyup",P(this,it),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",ye.TOOLTIP_PLACEMENT,M.MEDIA_CONTROLLER,r.MEDIA_LANG]}enable(){this.addEventListener("click",P(this,ct)),this.addEventListener("keydown",P(this,ui)),this.tabIndex=0}disable(){this.removeEventListener("click",P(this,ct)),this.removeEventListener("keydown",P(this,ui)),this.removeEventListener("keyup",P(this,it)),this.tabIndex=-1}attributeChangedCallback(e,i,a){var s,n,o,d,u;e===M.MEDIA_CONTROLLER?(i&&((n=(s=P(this,ce))==null?void 0:s.unassociateElement)==null||n.call(s,this),Zt(this,ce,null)),a&&this.isConnected&&(Zt(this,ce,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(d=P(this,ce))==null?void 0:d.associateElement)==null||u.call(d,this))):e==="disabled"&&a!==i?a==null?this.enable():this.disable():e===ye.TOOLTIP_PLACEMENT&&this.tooltipEl&&a!==i?this.tooltipEl.placement=a:e===r.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),P(this,De).call(this)}connectedCallback(){var e,i,a;const{style:s}=x(this.shadowRoot,":host");s.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const n=this.getAttribute(M.MEDIA_CONTROLLER);n&&(Zt(this,ce,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=P(this,ce))==null?void 0:i.associateElement)==null||a.call(i,this)),l.customElements.whenDefined("media-tooltip").then(()=>zo(this,Sa,jr).call(this))}disconnectedCallback(){var e,i;this.disable(),(i=(e=P(this,ce))==null?void 0:e.unassociateElement)==null||i.call(e,this),Zt(this,ce,null),this.removeEventListener("mouseenter",P(this,De)),this.removeEventListener("focus",P(this,De)),this.removeEventListener("click",P(this,ct))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return C(this,ye.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){O(this,ye.TOOLTIP_PLACEMENT,e)}get mediaController(){return C(this,M.MEDIA_CONTROLLER)}set mediaController(e){O(this,M.MEDIA_CONTROLLER,e)}get disabled(){return I(this,ye.DISABLED)}set disabled(e){S(this,ye.DISABLED,e)}get noTooltip(){return I(this,ye.NO_TOOLTIP)}set noTooltip(e){S(this,ye.NO_TOOLTIP,e)}handleClick(e){}}ce=new WeakMap;ct=new WeakMap;De=new WeakMap;it=new WeakMap;ui=new WeakMap;Sa=new WeakSet;jr=function(){this.addEventListener("mouseenter",P(this,De)),this.addEventListener("focus",P(this,De)),this.addEventListener("click",P(this,ct));const t=this.tooltipPlacement;t&&this.tooltipEl&&(this.tooltipEl.placement=t)};G.shadowRootOptions={mode:"open"};G.getTemplateHTML=Zo;G.getSlotTemplateHTML=Xo;G.getTooltipContentHTML=Jo;l.customElements.get("media-chrome-button")||l.customElements.define("media-chrome-button",G);var $d=G;const Js=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function jo(t){return`
    <style>
      :host([${r.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${r.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${r.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${r.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Js}</slot>
      <slot name="exit">${Js}</slot>
    </slot>
  `}function el(){return`
    <slot name="tooltip-enter">${E("start airplay")}</slot>
    <slot name="tooltip-exit">${E("stop airplay")}</slot>
  `}const js=t=>{const e=t.mediaIsAirplaying?E("stop airplay"):E("start airplay");t.setAttribute("aria-label",e)};class Yi extends G{static get observedAttributes(){return[...super.observedAttributes,r.MEDIA_IS_AIRPLAYING,r.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),js(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===r.MEDIA_IS_AIRPLAYING&&js(this)}get mediaIsAirplaying(){return I(this,r.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){S(this,r.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return C(this,r.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){O(this,r.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new l.CustomEvent(m.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}Yi.getSlotTemplateHTML=jo;Yi.getTooltipContentHTML=el;l.customElements.get("media-airplay-button")||l.customElements.define("media-airplay-button",Yi);var Hd=Yi;const tl=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,il=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function al(t){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${tl}</slot>
      <slot name="off">${il}</slot>
    </slot>
  `}function sl(){return`
    <slot name="tooltip-enable">${E("Enable captions")}</slot>
    <slot name="tooltip-disable">${E("Disable captions")}</slot>
  `}const er=t=>{t.setAttribute("aria-checked",fo(t).toString())};class Qi extends G{static get observedAttributes(){return[...super.observedAttributes,r.MEDIA_SUBTITLES_LIST,r.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",E("closed captions")),er(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===r.MEDIA_SUBTITLES_SHOWING&&er(this)}get mediaSubtitlesList(){return tr(this,r.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){ir(this,r.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return tr(this,r.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){ir(this,r.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new l.CustomEvent(m.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}Qi.getSlotTemplateHTML=al;Qi.getTooltipContentHTML=sl;const tr=(t,e)=>{const i=t.getAttribute(e);return i?Vr(i):[]},ir=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=ba(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};l.customElements.get("media-captions-button")||l.customElements.define("media-captions-button",Qi);var Fd=Qi;const rl='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',nl='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function ol(t){return`
    <style>
      :host([${r.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${r.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${r.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${r.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${rl}</slot>
      <slot name="exit">${nl}</slot>
    </slot>
  `}function ll(){return`
    <slot name="tooltip-enter">${E("Start casting")}</slot>
    <slot name="tooltip-exit">${E("Stop casting")}</slot>
  `}const ar=t=>{const e=t.mediaIsCasting?E("stop casting"):E("start casting");t.setAttribute("aria-label",e)};class zi extends G{static get observedAttributes(){return[...super.observedAttributes,r.MEDIA_IS_CASTING,r.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),ar(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===r.MEDIA_IS_CASTING&&ar(this)}get mediaIsCasting(){return I(this,r.MEDIA_IS_CASTING)}set mediaIsCasting(e){S(this,r.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return C(this,r.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){O(this,r.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?m.MEDIA_EXIT_CAST_REQUEST:m.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}}zi.getSlotTemplateHTML=ol;zi.getTooltipContentHTML=ll;l.customElements.get("media-cast-button")||l.customElements.define("media-cast-button",zi);var Bd=zi,Za=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Fe=(t,e,i)=>(Za(t,e,"read from private field"),e.get(t)),be=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Xa=(t,e,i,a)=>(Za(t,e,"write to private field"),e.set(t,i),i),Ce=(t,e,i)=>(Za(t,e,"access private method"),i),Oi,Bt,Ve,ci,Ma,ya,en,La,tn,ka,an,wa,sn,Ra,rn;function dl(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(t)}
  `}function ul(t){return`
    <slot id="content"></slot>
  `}const bt={OPEN:"open",ANCHOR:"anchor"};class vt extends l.HTMLElement{constructor(){super(),be(this,ci),be(this,ya),be(this,La),be(this,ka),be(this,wa),be(this,Ra),be(this,Oi,!1),be(this,Bt,null),be(this,Ve,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[bt.OPEN,bt.ANCHOR]}get open(){return I(this,bt.OPEN)}set open(e){S(this,bt.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":Ce(this,ka,an).call(this,e);break;case"focusout":Ce(this,wa,sn).call(this,e);break;case"keydown":Ce(this,Ra,rn).call(this,e);break}}connectedCallback(){Ce(this,ci,Ma).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,i,a){Ce(this,ci,Ma).call(this),e===bt.OPEN&&a!==i&&(this.open?Ce(this,ya,en).call(this):Ce(this,La,tn).call(this))}focus(){Xa(this,Bt,Or());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),i=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||i)return;const a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');a?.focus()}get keysUsed(){return["Escape","Tab"]}}Oi=new WeakMap;Bt=new WeakMap;Ve=new WeakMap;ci=new WeakSet;Ma=function(){if(!Fe(this,Oi)&&(Xa(this,Oi,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const t=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t),queueMicrotask(()=>{const{style:e}=x(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};ya=new WeakSet;en=function(){var t;(t=Fe(this,Ve))==null||t.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};La=new WeakSet;tn=function(){var t;(t=Fe(this,Ve))==null||t.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};ka=new WeakSet;an=function(t){Xa(this,Ve,t.relatedTarget),Et(this,t.relatedTarget)||(this.open=!this.open)};wa=new WeakSet;sn=function(t){var e;Et(this,t.relatedTarget)||((e=Fe(this,Bt))==null||e.focus(),Fe(this,Ve)&&Fe(this,Ve)!==t.relatedTarget&&this.open&&(this.open=!1))};Ra=new WeakSet;rn=function(t){var e,i,a,s,n;const{key:o,ctrlKey:d,altKey:u,metaKey:_}=t;d||u||_||this.keysUsed.includes(o)&&(t.preventDefault(),t.stopPropagation(),o==="Tab"?(t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(s=(a=this.nextElementSibling)==null?void 0:a.focus)==null||s.call(a),this.blur()):o==="Escape"&&((n=Fe(this,Bt))==null||n.focus(),this.open=!1))};vt.shadowRootOptions={mode:"open"};vt.getTemplateHTML=dl;vt.getSlotTemplateHTML=ul;l.customElements.get("media-chrome-dialog")||l.customElements.define("media-chrome-dialog",vt);var Wd=vt,Ja=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},R=(t,e,i)=>(Ja(t,e,"read from private field"),i?i.call(t):e.get(t)),V=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ke=(t,e,i,a)=>(Ja(t,e,"write to private field"),e.set(t,i),i),ae=(t,e,i)=>(Ja(t,e,"access private method"),i),he,Zi,hi,mi,se,Ui,pi,Ei,vi,ja,nn,_i,Da,gi,Ca,Pi,es,Oa,on,Ua,ln,Pa,dn,xa,un;function cl(t){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `}class Ge extends l.HTMLElement{constructor(){if(super(),V(this,ja),V(this,_i),V(this,gi),V(this,Pi),V(this,Oa),V(this,Ua),V(this,Pa),V(this,xa),V(this,he,void 0),V(this,Zi,void 0),V(this,hi,void 0),V(this,mi,void 0),V(this,se,{}),V(this,Ui,[]),V(this,pi,()=>{if(this.range.matches(":focus-visible")){const{style:e}=x(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),V(this,Ei,()=>{const{style:e}=x(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),V(this,vi,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.container=this.shadowRoot.querySelector("#container"),ke(this,hi,this.shadowRoot.querySelector("#startpoint")),ke(this,mi,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",M.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var s,n,o,d,u;e===M.MEDIA_CONTROLLER?(i&&((n=(s=R(this,he))==null?void 0:s.unassociateElement)==null||n.call(s,this),ke(this,he,null)),a&&this.isConnected&&(ke(this,he,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(d=R(this,he))==null?void 0:d.associateElement)==null||u.call(d,this))):(e==="disabled"||e==="aria-disabled"&&i!==a)&&(a==null?(this.range.removeAttribute(e),ae(this,_i,Da).call(this)):(this.range.setAttribute(e,a),ae(this,gi,Ca).call(this)))}connectedCallback(){var e,i,a;const{style:s}=x(this.shadowRoot,":host");s.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),R(this,se).pointer=x(this.shadowRoot,"#pointer"),R(this,se).progress=x(this.shadowRoot,"#progress"),R(this,se).thumb=x(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),R(this,se).activeSegment=x(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const n=this.getAttribute(M.MEDIA_CONTROLLER);n&&(ke(this,he,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=R(this,he))==null?void 0:i.associateElement)==null||a.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",R(this,pi)),this.shadowRoot.addEventListener("focusout",R(this,Ei)),ae(this,_i,Da).call(this),wr(this.container,R(this,vi))}disconnectedCallback(){var e,i;ae(this,gi,Ca).call(this),(i=(e=R(this,he))==null?void 0:e.unassociateElement)==null||i.call(e,this),ke(this,he,null),this.shadowRoot.removeEventListener("focusin",R(this,pi)),this.shadowRoot.removeEventListener("focusout",R(this,Ei)),Rr(this.container,R(this,vi))}updatePointerBar(e){var i;(i=R(this,se).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,i;const a=this.range.valueAsNumber*100;(e=R(this,se).progress)==null||e.style.setProperty("width",`${a}%`),(i=R(this,se).thumb)==null||i.style.setProperty("left",`${a}%`)}updateSegments(e){const i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!e?.length),!e?.length)return;const a=[...new Set([+this.range.min,...e.flatMap(n=>[n.start,n.end]),+this.range.max])];ke(this,Ui,[...a]);const s=a.pop();for(const[n,o]of a.entries()){const[d,u]=[n===0,n===a.length-1],_=d?"calc(var(--segments-gap) / -1)":`${o*100}%`,g=`calc(${((u?s:a[n+1])-o)*100}%${d||u?"":" - var(--segments-gap)"})`,h=Q.createElementNS("http://www.w3.org/2000/svg","rect"),p=x(this.shadowRoot,`#segments-clipping rect:nth-child(${n+1})`);p.style.setProperty("x",_),p.style.setProperty("width",g),i.append(h)}}getPointerRatio(e){return ao(e.clientX,e.clientY,R(this,hi).getBoundingClientRect(),R(this,mi).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":ae(this,xa,un).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":ae(this,Oa,on).call(this,e);break;case"pointerdown":ae(this,Pi,es).call(this,e);break;case"pointerup":ae(this,Ua,ln).call(this);break;case"pointerleave":ae(this,Pa,dn).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}he=new WeakMap;Zi=new WeakMap;hi=new WeakMap;mi=new WeakMap;se=new WeakMap;Ui=new WeakMap;pi=new WeakMap;Ei=new WeakMap;vi=new WeakMap;ja=new WeakSet;nn=function(t){const e=R(this,se).activeSegment;if(!e)return;const i=this.getPointerRatio(t),s=`#segments-clipping rect:nth-child(${R(this,Ui).findIndex((n,o,d)=>{const u=d[o+1];return u!=null&&i>=n&&i<=u})+1})`;(e.selectorText!=s||!e.style.transform)&&(e.selectorText=s,e.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};_i=new WeakSet;Da=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};gi=new WeakSet;Ca=function(){var t,e;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),(t=l.window)==null||t.removeEventListener("pointerup",this),(e=l.window)==null||e.removeEventListener("pointermove",this)};Pi=new WeakSet;es=function(t){var e;ke(this,Zi,t.composedPath().includes(this.range)),(e=l.window)==null||e.addEventListener("pointerup",this)};Oa=new WeakSet;on=function(t){var e;t.pointerType!=="mouse"&&ae(this,Pi,es).call(this,t),this.addEventListener("pointerleave",this),(e=l.window)==null||e.addEventListener("pointermove",this)};Ua=new WeakSet;ln=function(){var t;(t=l.window)==null||t.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};Pa=new WeakSet;dn=function(){var t,e;this.removeEventListener("pointerleave",this),(t=l.window)==null||t.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(e=R(this,se).activeSegment)==null||e.style.removeProperty("transform")};xa=new WeakSet;un=function(t){this.toggleAttribute("dragging",t.buttons===1||t.pointerType!=="mouse"),this.updatePointerBar(t),ae(this,ja,nn).call(this,t),this.dragging&&(t.pointerType!=="mouse"||!R(this,Zi))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(t),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))};Ge.shadowRootOptions={mode:"open"};Ge.getTemplateHTML=cl;l.customElements.get("media-chrome-range")||l.customElements.define("media-chrome-range",Ge);var Vd=Ge,cn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Xt=(t,e,i)=>(cn(t,e,"read from private field"),i?i.call(t):e.get(t)),hl=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Jt=(t,e,i,a)=>(cn(t,e,"write to private field"),e.set(t,i),i),me;function ml(t){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}class Xi extends l.HTMLElement{constructor(){if(super(),hl(this,me,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[M.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var s,n,o,d,u;e===M.MEDIA_CONTROLLER&&(i&&((n=(s=Xt(this,me))==null?void 0:s.unassociateElement)==null||n.call(s,this),Jt(this,me,null)),a&&this.isConnected&&(Jt(this,me,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(d=Xt(this,me))==null?void 0:d.associateElement)==null||u.call(d,this)))}connectedCallback(){var e,i,a;const s=this.getAttribute(M.MEDIA_CONTROLLER);s&&(Jt(this,me,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(a=(i=Xt(this,me))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Xt(this,me))==null?void 0:e.unassociateElement)==null||i.call(e,this),Jt(this,me,null)}}me=new WeakMap;Xi.shadowRootOptions={mode:"open"};Xi.getTemplateHTML=ml;l.customElements.get("media-control-bar")||l.customElements.define("media-control-bar",Xi);var Gd=Xi,hn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},jt=(t,e,i)=>(hn(t,e,"read from private field"),i?i.call(t):e.get(t)),pl=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ei=(t,e,i,a)=>(hn(t,e,"write to private field"),e.set(t,i),i),pe;function El(t,e={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}
  `}function vl(t,e){return`
    <slot></slot>
  `}class Ie extends l.HTMLElement{constructor(){if(super(),pl(this,pe,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[M.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var s,n,o,d,u;e===M.MEDIA_CONTROLLER&&(i&&((n=(s=jt(this,pe))==null?void 0:s.unassociateElement)==null||n.call(s,this),ei(this,pe,null)),a&&this.isConnected&&(ei(this,pe,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(d=jt(this,pe))==null?void 0:d.associateElement)==null||u.call(d,this)))}connectedCallback(){var e,i,a;const{style:s}=x(this.shadowRoot,":host");s.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const n=this.getAttribute(M.MEDIA_CONTROLLER);n&&(ei(this,pe,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=jt(this,pe))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=jt(this,pe))==null?void 0:e.unassociateElement)==null||i.call(e,this),ei(this,pe,null)}}pe=new WeakMap;Ie.shadowRootOptions={mode:"open"};Ie.getTemplateHTML=El;Ie.getSlotTemplateHTML=vl;l.customElements.get("media-text-display")||l.customElements.define("media-text-display",Ie);var Kd=Ie,mn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},sr=(t,e,i)=>(mn(t,e,"read from private field"),i?i.call(t):e.get(t)),_l=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},gl=(t,e,i,a)=>(mn(t,e,"write to private field"),e.set(t,i),i),kt;function fl(t,e){return`
    <slot>${Te(e.mediaDuration)}</slot>
  `}class ts extends Ie{constructor(){var e;super(),_l(this,kt,void 0),gl(this,kt,this.shadowRoot.querySelector("slot")),sr(this,kt).textContent=Te((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,r.MEDIA_DURATION]}attributeChangedCallback(e,i,a){e===r.MEDIA_DURATION&&(sr(this,kt).textContent=Te(+a)),super.attributeChangedCallback(e,i,a)}get mediaDuration(){return D(this,r.MEDIA_DURATION)}set mediaDuration(e){W(this,r.MEDIA_DURATION,e)}}kt=new WeakMap;ts.getSlotTemplateHTML=fl;l.customElements.get("media-duration-display")||l.customElements.define("media-duration-display",ts);var qd=ts;const bl={2:E("Network Error"),3:E("Decode Error"),4:E("Source Not Supported"),5:E("Encryption Error")},Al={2:E("A network error caused the media download to fail."),3:E("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:E("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:E("The media is encrypted and there are no keys to decrypt it.")},pn=t=>{var e,i;return t.code===1?null:{title:(e=bl[t.code])!=null?e:`Error ${t.code}`,message:(i=Al[t.code])!=null?i:t.message}};var En=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Tl=(t,e,i)=>(En(t,e,"read from private field"),i?i.call(t):e.get(t)),Il=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Sl=(t,e,i,a)=>(En(t,e,"write to private field"),e.set(t,i),i),fi;function Ml(t){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${t.mediaerrorcode}" id="content">
      ${vn({code:+t.mediaerrorcode,message:t.mediaerrormessage})}
    </slot>
  `}function yl(t){return t.code&&pn(t)!==null}function vn(t){var e;const{title:i,message:a}=(e=pn(t))!=null?e:{};let s="";return i&&(s+=`<slot name="error-${t.code}-title"><h3>${i}</h3></slot>`),a&&(s+=`<slot name="error-${t.code}-message"><p>${a}</p></slot>`),s}const rr=[r.MEDIA_ERROR_CODE,r.MEDIA_ERROR_MESSAGE];class Ji extends vt{constructor(){super(...arguments),Il(this,fi,null)}static get observedAttributes(){return[...super.observedAttributes,...rr]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,i,a){var s;if(super.attributeChangedCallback(e,i,a),!rr.includes(e))return;const n=(s=this.mediaError)!=null?s:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=yl(n),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(n))}get mediaError(){return Tl(this,fi)}set mediaError(e){Sl(this,fi,e)}get mediaErrorCode(){return D(this,"mediaerrorcode")}set mediaErrorCode(e){W(this,"mediaerrorcode",e)}get mediaErrorMessage(){return C(this,"mediaerrormessage")}set mediaErrorMessage(e){O(this,"mediaerrormessage",e)}}fi=new WeakMap;Ji.getSlotTemplateHTML=Ml;Ji.formatErrorMessage=vn;l.customElements.get("media-error-dialog")||l.customElements.define("media-error-dialog",Ji);var Yd=Ji;const Ll=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,kl=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function wl(t){return`
    <style>
      :host([${r.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${r.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${r.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${r.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Ll}</slot>
      <slot name="exit">${kl}</slot>
    </slot>
  `}function Rl(){return`
    <slot name="tooltip-enter">${E("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${E("Exit fullscreen mode")}</slot>
  `}const nr=t=>{const e=t.mediaIsFullscreen?E("exit fullscreen mode"):E("enter fullscreen mode");t.setAttribute("aria-label",e)};class ji extends G{static get observedAttributes(){return[...super.observedAttributes,r.MEDIA_IS_FULLSCREEN,r.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),nr(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===r.MEDIA_IS_FULLSCREEN&&nr(this)}get mediaFullscreenUnavailable(){return C(this,r.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){O(this,r.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return I(this,r.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){S(this,r.MEDIA_IS_FULLSCREEN,e)}handleClick(){const e=this.mediaIsFullscreen?m.MEDIA_EXIT_FULLSCREEN_REQUEST:m.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}}ji.getSlotTemplateHTML=wl;ji.getTooltipContentHTML=Rl;l.customElements.get("media-fullscreen-button")||l.customElements.define("media-fullscreen-button",ji);var Qd=ji;const{MEDIA_TIME_IS_LIVE:bi,MEDIA_PAUSED:Ut}=r,{MEDIA_SEEK_TO_LIVE_REQUEST:Dl,MEDIA_PLAY_REQUEST:Cl}=m,Ol='<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>';function Ul(t){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${bi}]:not([${Ut}])) slot[name=indicator] > *,
      :host([${bi}]:not([${Ut}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${bi}]:not([${Ut}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${Ol}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${E("live")}</slot>
  `}const or=t=>{var e;const i=t.mediaPaused||!t.mediaTimeIsLive,a=E(i?"seek to live":"playing live");t.setAttribute("aria-label",a);const s=(e=t.shadowRoot)==null?void 0:e.querySelector('slot[name="text"]');s&&(s.textContent=E("live")),i?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")};class is extends G{static get observedAttributes(){return[...super.observedAttributes,bi,Ut]}connectedCallback(){super.connectedCallback(),or(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),or(this)}get mediaPaused(){return I(this,r.MEDIA_PAUSED)}set mediaPaused(e){S(this,r.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return I(this,r.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){S(this,r.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new l.CustomEvent(Dl,{composed:!0,bubbles:!0})),this.hasAttribute(Ut)&&this.dispatchEvent(new l.CustomEvent(Cl,{composed:!0,bubbles:!0})))}}is.getSlotTemplateHTML=Ul;l.customElements.get("media-live-button")||l.customElements.define("media-live-button",is);var zd=is,_n=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},At=(t,e,i)=>(_n(t,e,"read from private field"),i?i.call(t):e.get(t)),lr=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Tt=(t,e,i,a)=>(_n(t,e,"write to private field"),e.set(t,i),i),Ee,Ai;const ti={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},gn=500,Pl=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function xl(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${gn}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${r.MEDIA_LOADING}]:not([${r.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${r.MEDIA_LOADING}]:not([${r.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${r.MEDIA_LOADING}]:not([${r.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${Pl}</slot>
    <div id="status" role="status" aria-live="polite">${E("media loading")}</div>
  `}class ea extends l.HTMLElement{constructor(){if(super(),lr(this,Ee,void 0),lr(this,Ai,gn),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[M.MEDIA_CONTROLLER,r.MEDIA_PAUSED,r.MEDIA_LOADING,ti.LOADING_DELAY]}attributeChangedCallback(e,i,a){var s,n,o,d,u;e===ti.LOADING_DELAY&&i!==a?this.loadingDelay=Number(a):e===M.MEDIA_CONTROLLER&&(i&&((n=(s=At(this,Ee))==null?void 0:s.unassociateElement)==null||n.call(s,this),Tt(this,Ee,null)),a&&this.isConnected&&(Tt(this,Ee,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(d=At(this,Ee))==null?void 0:d.associateElement)==null||u.call(d,this)))}connectedCallback(){var e,i,a;const s=this.getAttribute(M.MEDIA_CONTROLLER);s&&(Tt(this,Ee,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(a=(i=At(this,Ee))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=At(this,Ee))==null?void 0:e.unassociateElement)==null||i.call(e,this),Tt(this,Ee,null)}get loadingDelay(){return At(this,Ai)}set loadingDelay(e){Tt(this,Ai,e);const{style:i}=x(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return I(this,r.MEDIA_PAUSED)}set mediaPaused(e){S(this,r.MEDIA_PAUSED,e)}get mediaLoading(){return I(this,r.MEDIA_LOADING)}set mediaLoading(e){S(this,r.MEDIA_LOADING,e)}get mediaController(){return C(this,M.MEDIA_CONTROLLER)}set mediaController(e){O(this,M.MEDIA_CONTROLLER,e)}get noAutohide(){return I(this,ti.NO_AUTOHIDE)}set noAutohide(e){S(this,ti.NO_AUTOHIDE,e)}}Ee=new WeakMap;Ai=new WeakMap;ea.shadowRootOptions={mode:"open"};ea.getTemplateHTML=xl;l.customElements.get("media-loading-indicator")||l.customElements.define("media-loading-indicator",ea);var Zd=ea;const Nl=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,dr=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,$l=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function Hl(t){return`
    <style>
      :host(:not([${r.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${r.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${r.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${r.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${r.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${r.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${r.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${Nl}</slot>
      <slot name="low">${dr}</slot>
      <slot name="medium">${dr}</slot>
      <slot name="high">${$l}</slot>
    </slot>
  `}function Fl(){return`
    <slot name="tooltip-mute">${E("Mute")}</slot>
    <slot name="tooltip-unmute">${E("Unmute")}</slot>
  `}const ur=t=>{const e=t.mediaVolumeLevel==="off",i=E(e?"unmute":"mute");t.setAttribute("aria-label",i)};class ta extends G{static get observedAttributes(){return[...super.observedAttributes,r.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),ur(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===r.MEDIA_VOLUME_LEVEL&&ur(this)}get mediaVolumeLevel(){return C(this,r.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){O(this,r.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?m.MEDIA_UNMUTE_REQUEST:m.MEDIA_MUTE_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}}ta.getSlotTemplateHTML=Hl;ta.getTooltipContentHTML=Fl;l.customElements.get("media-mute-button")||l.customElements.define("media-mute-button",ta);var Xd=ta;const cr=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function Bl(t){return`
    <style>
      :host([${r.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${r.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${r.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${r.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${cr}</slot>
      <slot name="exit">${cr}</slot>
    </slot>
  `}function Wl(){return`
    <slot name="tooltip-enter">${E("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${E("Exit picture in picture mode")}</slot>
  `}const hr=t=>{const e=t.mediaIsPip?E("exit picture in picture mode"):E("enter picture in picture mode");t.setAttribute("aria-label",e)};class ia extends G{static get observedAttributes(){return[...super.observedAttributes,r.MEDIA_IS_PIP,r.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),hr(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===r.MEDIA_IS_PIP&&hr(this)}get mediaPipUnavailable(){return C(this,r.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){O(this,r.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return I(this,r.MEDIA_IS_PIP)}set mediaIsPip(e){S(this,r.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?m.MEDIA_EXIT_PIP_REQUEST:m.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}}ia.getSlotTemplateHTML=Bl;ia.getTooltipContentHTML=Wl;l.customElements.get("media-pip-button")||l.customElements.define("media-pip-button",ia);var Jd=ia,Vl=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ze=(t,e,i)=>(Vl(t,e,"read from private field"),i?i.call(t):e.get(t)),Gl=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},we;const ca={RATES:"rates"},Kl=[1,1.2,1.5,1.7,2],wt=1;function ql(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate||wt}x</slot>
  `}function Yl(){return E("Playback rate")}class aa extends G{constructor(){var e;super(),Gl(this,we,new Br(this,ca.RATES,{defaultValue:Kl})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(e=this.mediaPlaybackRate)!=null?e:wt}x`}static get observedAttributes(){return[...super.observedAttributes,r.MEDIA_PLAYBACK_RATE,ca.RATES]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===ca.RATES&&(Ze(this,we).value=a),e===r.MEDIA_PLAYBACK_RATE){const s=a?+a:Number.NaN,n=Number.isNaN(s)?wt:s;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",E("Playback rate {playbackRate}",{playbackRate:n}))}}get rates(){return Ze(this,we)}set rates(e){e?Array.isArray(e)?Ze(this,we).value=e.join(" "):typeof e=="string"&&(Ze(this,we).value=e):Ze(this,we).value=""}get mediaPlaybackRate(){return D(this,r.MEDIA_PLAYBACK_RATE,wt)}set mediaPlaybackRate(e){W(this,r.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,i;const a=Array.from(Ze(this,we).values(),o=>+o).sort((o,d)=>o-d),s=(i=(e=a.find(o=>o>this.mediaPlaybackRate))!=null?e:a[0])!=null?i:wt,n=new l.CustomEvent(m.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:s});this.dispatchEvent(n)}}we=new WeakMap;aa.getSlotTemplateHTML=ql;aa.getTooltipContentHTML=Yl;l.customElements.get("media-playback-rate-button")||l.customElements.define("media-playback-rate-button",aa);var jd=aa;const Ql=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,zl=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function Zl(t){return`
    <style>
      :host([${r.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${r.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${r.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${r.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${Ql}</slot>
      <slot name="pause">${zl}</slot>
    </slot>
  `}function Xl(){return`
    <slot name="tooltip-play">${E("Play")}</slot>
    <slot name="tooltip-pause">${E("Pause")}</slot>
  `}const mr=t=>{const e=t.mediaPaused?E("play"):E("pause");t.setAttribute("aria-label",e)};class sa extends G{static get observedAttributes(){return[...super.observedAttributes,r.MEDIA_PAUSED,r.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),mr(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===r.MEDIA_PAUSED||e===r.MEDIA_LANG)&&mr(this)}get mediaPaused(){return I(this,r.MEDIA_PAUSED)}set mediaPaused(e){S(this,r.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?m.MEDIA_PLAY_REQUEST:m.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}}sa.getSlotTemplateHTML=Zl;sa.getTooltipContentHTML=Xl;l.customElements.get("media-play-button")||l.customElements.define("media-play-button",sa);var eu=sa;const le={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function Jl(t){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}const jl=t=>{t.style.removeProperty("background-image")},ed=(t,e)=>{t.style["background-image"]=`url('${e}')`};class ra extends l.HTMLElement{static get observedAttributes(){return[le.PLACEHOLDER_SRC,le.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,i,a){e===le.SRC&&(a==null?this.image.removeAttribute(le.SRC):this.image.setAttribute(le.SRC,a)),e===le.PLACEHOLDER_SRC&&(a==null?jl(this.image):ed(this.image,a))}get placeholderSrc(){return C(this,le.PLACEHOLDER_SRC)}set placeholderSrc(e){O(this,le.SRC,e)}get src(){return C(this,le.SRC)}set src(e){O(this,le.SRC,e)}}ra.shadowRootOptions={mode:"open"};ra.getTemplateHTML=Jl;l.customElements.get("media-poster-image")||l.customElements.define("media-poster-image",ra);var tu=ra,fn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},td=(t,e,i)=>(fn(t,e,"read from private field"),i?i.call(t):e.get(t)),id=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ad=(t,e,i,a)=>(fn(t,e,"write to private field"),e.set(t,i),i),Ti;class bn extends Ie{constructor(){super(),id(this,Ti,void 0),ad(this,Ti,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,r.MEDIA_PREVIEW_CHAPTER,r.MEDIA_LANG]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),(e===r.MEDIA_PREVIEW_CHAPTER||e===r.MEDIA_LANG)&&a!==i&&a!=null)if(td(this,Ti).textContent=a,a!==""){const s=E("chapter: {chapterName}",{chapterName:a});this.setAttribute("aria-valuetext",s)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return C(this,r.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){O(this,r.MEDIA_PREVIEW_CHAPTER,e)}}Ti=new WeakMap;l.customElements.get("media-preview-chapter-display")||l.customElements.define("media-preview-chapter-display",bn);var iu=bn,An=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ii=(t,e,i)=>(An(t,e,"read from private field"),i?i.call(t):e.get(t)),sd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ai=(t,e,i,a)=>(An(t,e,"write to private field"),e.set(t,i),i),ve;function rd(t){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}class na extends l.HTMLElement{constructor(){if(super(),sd(this,ve,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=ne(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[M.MEDIA_CONTROLLER,r.MEDIA_PREVIEW_IMAGE,r.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,i,a;const s=this.getAttribute(M.MEDIA_CONTROLLER);s&&(ai(this,ve,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(a=(i=ii(this,ve))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=ii(this,ve))==null?void 0:e.unassociateElement)==null||i.call(e,this),ai(this,ve,null)}attributeChangedCallback(e,i,a){var s,n,o,d,u;[r.MEDIA_PREVIEW_IMAGE,r.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===M.MEDIA_CONTROLLER&&(i&&((n=(s=ii(this,ve))==null?void 0:s.unassociateElement)==null||n.call(s,this),ai(this,ve,null)),a&&this.isConnected&&(ai(this,ve,(o=this.getRootNode())==null?void 0:o.getElementById(a)),(u=(d=ii(this,ve))==null?void 0:d.associateElement)==null||u.call(d,this)))}get mediaPreviewImage(){return C(this,r.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){O(this,r.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(r.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(r.MEDIA_PREVIEW_COORDS);return}this.setAttribute(r.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(e&&i))return;const[a,s,n,o]=e,d=i.split("#")[0],u=getComputedStyle(this),{maxWidth:_,maxHeight:f,minWidth:g,minHeight:h}=u,p=Math.min(parseInt(_)/n,parseInt(f)/o),w=Math.max(parseInt(g)/n,parseInt(h)/o),T=p<1,A=T?p:w>1?w:1,{style:k}=x(this.shadowRoot,":host"),z=x(this.shadowRoot,"img").style,oe=this.shadowRoot.querySelector("img"),_t=T?"min":"max";k.setProperty(`${_t}-width`,"initial","important"),k.setProperty(`${_t}-height`,"initial","important"),k.width=`${n*A}px`,k.height=`${o*A}px`;const Ke=()=>{z.width=`${this.imgWidth*A}px`,z.height=`${this.imgHeight*A}px`,z.display="block"};oe.src!==d&&(oe.onload=()=>{this.imgWidth=oe.naturalWidth,this.imgHeight=oe.naturalHeight,Ke()},oe.src=d,Ke()),Ke(),z.transform=`translate(-${a*A}px, -${s*A}px)`}}ve=new WeakMap;na.shadowRootOptions={mode:"open"};na.getTemplateHTML=rd;l.customElements.get("media-preview-thumbnail")||l.customElements.define("media-preview-thumbnail",na);var pr=na,Tn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Er=(t,e,i)=>(Tn(t,e,"read from private field"),i?i.call(t):e.get(t)),nd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},od=(t,e,i,a)=>(Tn(t,e,"write to private field"),e.set(t,i),i),Rt;class In extends Ie{constructor(){super(),nd(this,Rt,void 0),od(this,Rt,this.shadowRoot.querySelector("slot")),Er(this,Rt).textContent=Te(0)}static get observedAttributes(){return[...super.observedAttributes,r.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===r.MEDIA_PREVIEW_TIME&&a!=null&&(Er(this,Rt).textContent=Te(parseFloat(a)))}get mediaPreviewTime(){return D(this,r.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){W(this,r.MEDIA_PREVIEW_TIME,e)}}Rt=new WeakMap;l.customElements.get("media-preview-time-display")||l.customElements.define("media-preview-time-display",In);var au=In;const Xe={SEEK_OFFSET:"seekoffset"},ha=30,ld=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${t}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function dd(t,e){return`
    <slot name="icon">${ld(e.seekOffset)}</slot>
  `}function ud(){return E("Seek backward")}const cd=0;class oa extends G{static get observedAttributes(){return[...super.observedAttributes,r.MEDIA_CURRENT_TIME,Xe.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=D(this,Xe.SEEK_OFFSET,ha)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===Xe.SEEK_OFFSET&&(this.seekOffset=D(this,Xe.SEEK_OFFSET,ha))}get seekOffset(){return D(this,Xe.SEEK_OFFSET,ha)}set seekOffset(e){W(this,Xe.SEEK_OFFSET,e),this.setAttribute("aria-label",E("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),Dr(Cr(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return D(this,r.MEDIA_CURRENT_TIME,cd)}set mediaCurrentTime(e){W(this,r.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new l.CustomEvent(m.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}oa.getSlotTemplateHTML=dd;oa.getTooltipContentHTML=ud;l.customElements.get("media-seek-backward-button")||l.customElements.define("media-seek-backward-button",oa);var su=oa;const Je={SEEK_OFFSET:"seekoffset"},ma=30,hd=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${t}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function md(t,e){return`
    <slot name="icon">${hd(e.seekOffset)}</slot>
  `}function pd(){return E("Seek forward")}const Ed=0;class la extends G{static get observedAttributes(){return[...super.observedAttributes,r.MEDIA_CURRENT_TIME,Je.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=D(this,Je.SEEK_OFFSET,ma)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===Je.SEEK_OFFSET&&(this.seekOffset=D(this,Je.SEEK_OFFSET,ma))}get seekOffset(){return D(this,Je.SEEK_OFFSET,ma)}set seekOffset(e){W(this,Je.SEEK_OFFSET,e),this.setAttribute("aria-label",E("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),Dr(Cr(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return D(this,r.MEDIA_CURRENT_TIME,Ed)}set mediaCurrentTime(e){W(this,r.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,i=new l.CustomEvent(m.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}la.getSlotTemplateHTML=md;la.getTooltipContentHTML=pd;l.customElements.get("media-seek-forward-button")||l.customElements.define("media-seek-forward-button",la);var ru=la,Sn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},pa=(t,e,i)=>(Sn(t,e,"read from private field"),i?i.call(t):e.get(t)),vd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},_d=(t,e,i,a)=>(Sn(t,e,"write to private field"),e.set(t,i),i),at;const Pe={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},vr=[...Object.values(Pe),r.MEDIA_CURRENT_TIME,r.MEDIA_DURATION,r.MEDIA_SEEKABLE],_r=["Enter"," "],gd="&nbsp;/&nbsp;",Na=(t,{timesSep:e=gd}={})=>{var i,a;const s=(i=t.mediaCurrentTime)!=null?i:0,[,n]=(a=t.mediaSeekable)!=null?a:[];let o=0;Number.isFinite(t.mediaDuration)?o=t.mediaDuration:Number.isFinite(n)&&(o=n);const d=t.remaining?Te(0-(o-s)):Te(s);return t.showDuration?`${d}${e}${Te(o)}`:d},fd="video not loaded, unknown time.",bd=t=>{var e;const i=t.mediaCurrentTime,[,a]=(e=t.mediaSeekable)!=null?e:[];let s=null;if(Number.isFinite(t.mediaDuration)?s=t.mediaDuration:Number.isFinite(a)&&(s=a),i==null||s===null){t.setAttribute("aria-valuetext",fd);return}const n=t.remaining?ht(0-(s-i)):ht(i);if(!t.showDuration){t.setAttribute("aria-valuetext",n);return}const o=ht(s),d=`${n} of ${o}`;t.setAttribute("aria-valuetext",d)};function Ad(t,e){return`
    <slot>${Na(e)}</slot>
  `}class as extends Ie{constructor(){super(),vd(this,at,void 0),_d(this,at,this.shadowRoot.querySelector("slot")),pa(this,at).innerHTML=`${Na(this)}`}static get observedAttributes(){return[...super.observedAttributes,...vr,"disabled"]}connectedCallback(){const{style:e}=x(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",E("playback time"));const i=a=>{const{key:s}=a;if(!_r.includes(s)){this.removeEventListener("keyup",i);return}this.toggleTimeDisplay()};this.addEventListener("keydown",a=>{const{metaKey:s,altKey:n,key:o}=a;if(s||n||!_r.includes(o)){this.removeEventListener("keyup",i);return}this.addEventListener("keyup",i)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,i,a){vr.includes(e)?this.update():e==="disabled"&&a!==i&&(a==null?this.enable():this.disable()),super.attributeChangedCallback(e,i,a)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return I(this,Pe.REMAINING)}set remaining(e){S(this,Pe.REMAINING,e)}get showDuration(){return I(this,Pe.SHOW_DURATION)}set showDuration(e){S(this,Pe.SHOW_DURATION,e)}get noToggle(){return I(this,Pe.NO_TOGGLE)}set noToggle(e){S(this,Pe.NO_TOGGLE,e)}get mediaDuration(){return D(this,r.MEDIA_DURATION)}set mediaDuration(e){W(this,r.MEDIA_DURATION,e)}get mediaCurrentTime(){return D(this,r.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){W(this,r.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(r.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(r.MEDIA_SEEKABLE);return}this.setAttribute(r.MEDIA_SEEKABLE,e.join(":"))}update(){const e=Na(this);bd(this),e!==pa(this,at).innerHTML&&(pa(this,at).innerHTML=e)}}at=new WeakMap;as.getSlotTemplateHTML=Ad;l.customElements.get("media-time-display")||l.customElements.define("media-time-display",as);var nu=as,Mn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},F=(t,e,i)=>(Mn(t,e,"read from private field"),e.get(t)),de=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},j=(t,e,i,a)=>(Mn(t,e,"write to private field"),e.set(t,i),i),Td=(t,e,i,a)=>({set _(s){j(t,e,s)},get _(){return F(t,e)}}),st,Ii,rt,Dt,Si,Mi,yi,nt,xe,Li;class Id{constructor(e,i,a){de(this,st,void 0),de(this,Ii,void 0),de(this,rt,void 0),de(this,Dt,void 0),de(this,Si,void 0),de(this,Mi,void 0),de(this,yi,void 0),de(this,nt,void 0),de(this,xe,0),de(this,Li,(s=performance.now())=>{j(this,xe,requestAnimationFrame(F(this,Li))),j(this,Dt,performance.now()-F(this,rt));const n=1e3/this.fps;if(F(this,Dt)>n){j(this,rt,s-F(this,Dt)%n);const o=1e3/((s-F(this,Ii))/++Td(this,Si)._),d=(s-F(this,Mi))/1e3/this.duration;let u=F(this,yi)+d*this.playbackRate;u-F(this,st).valueAsNumber>0?j(this,nt,this.playbackRate/this.duration/o):(j(this,nt,.995*F(this,nt)),u=F(this,st).valueAsNumber+F(this,nt)),this.callback(u)}}),j(this,st,e),this.callback=i,this.fps=a}start(){F(this,xe)===0&&(j(this,rt,performance.now()),j(this,Ii,F(this,rt)),j(this,Si,0),F(this,Li).call(this))}stop(){F(this,xe)!==0&&(cancelAnimationFrame(F(this,xe)),j(this,xe,0))}update({start:e,duration:i,playbackRate:a}){const s=e-F(this,st).valueAsNumber,n=Math.abs(i-this.duration);(s>0||s<-.03||n>=.5)&&this.callback(e),j(this,yi,e),j(this,Mi,performance.now()),this.duration=i,this.playbackRate=a}}st=new WeakMap;Ii=new WeakMap;rt=new WeakMap;Dt=new WeakMap;Si=new WeakMap;Mi=new WeakMap;yi=new WeakMap;nt=new WeakMap;xe=new WeakMap;Li=new WeakMap;var ss=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},N=(t,e,i)=>(ss(t,e,"read from private field"),i?i.call(t):e.get(t)),H=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},_e=(t,e,i,a)=>(ss(t,e,"write to private field"),e.set(t,i),i),K=(t,e,i)=>(ss(t,e,"access private method"),i),ot,Be,xi,Pt,Ni,ki,Wt,Vt,lt,dt,Ct,rs,yn,$a,$i,ns,Hi,os,Fi,ls,Ha,Ln,Gt,Bi,Fa,kn;const Sd="video not loaded, unknown time.",Md=t=>{const e=t.range,i=ht(+wn(t)),a=ht(+t.mediaSeekableEnd),s=i&&a?`${i} of ${a}`:Sd;e.setAttribute("aria-valuetext",s)};function yd(t){return`
    ${Ge.getTemplateHTML(t)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${r.MEDIA_PREVIEW_IMAGE}], [${r.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${r.MEDIA_PREVIEW_IMAGE}], [${r.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${r.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${r.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${r.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${r.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${r.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${r.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${r.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${r.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${r.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${r.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${r.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${r.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${pr.shadowRootOptions.mode}">
            ${pr.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}const si=(t,e=t.mediaCurrentTime)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;if(Number.isNaN(a))return 0;const s=(e-i)/(a-i);return Math.max(0,Math.min(s,1))},wn=(t,e=t.range.valueAsNumber)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;return Number.isNaN(a)?0:e*(a-i)+i};class da extends Ge{constructor(){super(),H(this,dt),H(this,rs),H(this,$i),H(this,Hi),H(this,Fi),H(this,Ha),H(this,Gt),H(this,Fa),H(this,ot,void 0),H(this,Be,void 0),H(this,xi,void 0),H(this,Pt,void 0),H(this,Ni,void 0),H(this,ki,void 0),H(this,Wt,void 0),H(this,Vt,void 0),H(this,lt,void 0),H(this,$a,a=>{this.dragging||(Wa(a)&&(this.range.valueAsNumber=a),this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),_e(this,xi,this.shadowRoot.querySelectorAll('[part~="box"]')),_e(this,Ni,this.shadowRoot.querySelector('[part~="preview-box"]')),_e(this,ki,this.shadowRoot.querySelector('[part~="current-box"]'));const i=getComputedStyle(this);_e(this,Wt,parseInt(i.getPropertyValue("--media-box-padding-left"))),_e(this,Vt,parseInt(i.getPropertyValue("--media-box-padding-right"))),_e(this,Be,new Id(this.range,N(this,$a),60))}static get observedAttributes(){return[...super.observedAttributes,r.MEDIA_PAUSED,r.MEDIA_DURATION,r.MEDIA_SEEKABLE,r.MEDIA_CURRENT_TIME,r.MEDIA_PREVIEW_IMAGE,r.MEDIA_PREVIEW_TIME,r.MEDIA_PREVIEW_CHAPTER,r.MEDIA_BUFFERED,r.MEDIA_PLAYBACK_RATE,r.MEDIA_LOADING,r.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",E("seek")),K(this,dt,Ct).call(this),_e(this,ot,this.getRootNode()),(e=N(this,ot))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),K(this,dt,Ct).call(this),(e=N(this,ot))==null||e.removeEventListener("transitionstart",this),_e(this,ot,null)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),i!=a&&(e===r.MEDIA_CURRENT_TIME||e===r.MEDIA_PAUSED||e===r.MEDIA_ENDED||e===r.MEDIA_LOADING||e===r.MEDIA_DURATION||e===r.MEDIA_SEEKABLE?(N(this,Be).update({start:si(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),K(this,dt,Ct).call(this),Md(this)):e===r.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===r.MEDIA_DURATION||e===r.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=N(this,lt),this.updateBar()))}get mediaChaptersCues(){return N(this,lt)}set mediaChaptersCues(e){var i;_e(this,lt,e),this.updateSegments((i=N(this,lt))==null?void 0:i.map(a=>({start:si(this,a.startTime),end:si(this,a.endTime)})))}get mediaPaused(){return I(this,r.MEDIA_PAUSED)}set mediaPaused(e){S(this,r.MEDIA_PAUSED,e)}get mediaLoading(){return I(this,r.MEDIA_LOADING)}set mediaLoading(e){S(this,r.MEDIA_LOADING,e)}get mediaDuration(){return D(this,r.MEDIA_DURATION)}set mediaDuration(e){W(this,r.MEDIA_DURATION,e)}get mediaCurrentTime(){return D(this,r.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){W(this,r.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return D(this,r.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){W(this,r.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(r.MEDIA_BUFFERED);return e?e.split(" ").map(i=>i.split(":").map(a=>+a)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(r.MEDIA_BUFFERED);return}const i=e.map(a=>a.join(":")).join(" ");this.setAttribute(r.MEDIA_BUFFERED,i)}get mediaSeekable(){const e=this.getAttribute(r.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(r.MEDIA_SEEKABLE);return}this.setAttribute(r.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,i=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;const[i=0]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaPreviewImage(){return C(this,r.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){O(this,r.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return D(this,r.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){W(this,r.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return I(this,r.MEDIA_ENDED)}set mediaEnded(e){S(this,r.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const i=this.mediaBuffered;if(!i.length)return;let a;if(this.mediaEnded)a=1;else{const n=this.mediaCurrentTime,[,o=this.mediaSeekableStart]=(e=i.find(([d,u])=>d<=n&&n<=u))!=null?e:[];a=si(this,o)}const{style:s}=x(this.shadowRoot,"#buffered");s.setProperty("width",`${a*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const i=x(this.shadowRoot,"#current-rail"),a=x(this.shadowRoot,'[part~="current-box"]'),s=K(this,$i,ns).call(this,N(this,ki)),n=K(this,Hi,os).call(this,s,this.range.valueAsNumber),o=K(this,Fi,ls).call(this,s,this.range.valueAsNumber);i.style.transform=`translateX(${n})`,i.style.setProperty("--_range-width",`${s.range.width}`),a.style.setProperty("--_box-shift",`${o}`),a.style.setProperty("--_box-width",`${s.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":K(this,Fa,kn).call(this);break;case"pointermove":K(this,Ha,Ln).call(this,e);break;case"pointerup":case"pointerleave":K(this,Gt,Bi).call(this,null);break;case"transitionstart":Et(e.target,this)&&setTimeout(()=>K(this,dt,Ct).call(this),0);break}}}ot=new WeakMap;Be=new WeakMap;xi=new WeakMap;Pt=new WeakMap;Ni=new WeakMap;ki=new WeakMap;Wt=new WeakMap;Vt=new WeakMap;lt=new WeakMap;dt=new WeakSet;Ct=function(){K(this,rs,yn).call(this)?N(this,Be).start():N(this,Be).stop()};rs=new WeakSet;yn=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&Ur(this)};$a=new WeakMap;$i=new WeakSet;ns=function(t){var e;const a=((e=this.getAttribute("bounds")?Kt(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?e:this).getBoundingClientRect(),s=this.range.getBoundingClientRect(),n=t.offsetWidth,o=-(s.left-a.left-n/2),d=a.right-s.left-n/2;return{box:{width:n,min:o,max:d},bounds:a,range:s}};Hi=new WeakSet;os=function(t,e){let i=`${e*100}%`;const{width:a,min:s,max:n}=t.box;if(!a)return i;if(Number.isNaN(s)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${s}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(n)){const d=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${d})`}return i};Fi=new WeakSet;ls=function(t,e){const{width:i,min:a,max:s}=t.box,n=e*t.range.width;if(n<a+N(this,Wt)){const o=t.range.left-t.bounds.left-N(this,Wt);return`${n-i/2+o}px`}if(n>s-N(this,Vt)){const o=t.bounds.right-t.range.right-N(this,Vt);return`${n+i/2-o-t.range.width}px`}return 0};Ha=new WeakSet;Ln=function(t){const e=[...N(this,xi)].some(f=>t.composedPath().includes(f));if(!this.dragging&&(e||!t.composedPath().includes(this))){K(this,Gt,Bi).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=x(this.shadowRoot,"#preview-rail"),s=x(this.shadowRoot,'[part~="preview-box"]'),n=K(this,$i,ns).call(this,N(this,Ni));let o=(t.clientX-n.range.left)/n.range.width;o=Math.max(0,Math.min(1,o));const d=K(this,Hi,os).call(this,n,o),u=K(this,Fi,ls).call(this,n,o);a.style.transform=`translateX(${d})`,a.style.setProperty("--_range-width",`${n.range.width}`),s.style.setProperty("--_box-shift",`${u}`),s.style.setProperty("--_box-width",`${n.box.width}px`);const _=Math.round(N(this,Pt))-Math.round(o*i);Math.abs(_)<1&&o>.01&&o<.99||(_e(this,Pt,o*i),K(this,Gt,Bi).call(this,N(this,Pt)))};Gt=new WeakSet;Bi=function(t){this.dispatchEvent(new l.CustomEvent(m.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))};Fa=new WeakSet;kn=function(){N(this,Be).stop();const t=wn(this);this.dispatchEvent(new l.CustomEvent(m.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))};da.shadowRootOptions={mode:"open"};da.getTemplateHTML=yd;l.customElements.get("media-time-range")||l.customElements.define("media-time-range",da);var ou=da;const Ld=1,kd=t=>t.mediaMuted?0:t.mediaVolume,wd=t=>`${Math.round(t*100)}%`;class Rn extends Ge{static get observedAttributes(){return[...super.observedAttributes,r.MEDIA_VOLUME,r.MEDIA_MUTED,r.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{const e=this.range.value,i=new l.CustomEvent(m.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",E("volume"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===r.MEDIA_VOLUME||e===r.MEDIA_MUTED)&&(this.range.valueAsNumber=kd(this),this.range.setAttribute("aria-valuetext",wd(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return D(this,r.MEDIA_VOLUME,Ld)}set mediaVolume(e){W(this,r.MEDIA_VOLUME,e)}get mediaMuted(){return I(this,r.MEDIA_MUTED)}set mediaMuted(e){S(this,r.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return C(this,r.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){O(this,r.MEDIA_VOLUME_UNAVAILABLE,e)}}l.customElements.get("media-volume-range")||l.customElements.define("media-volume-range",Rn);var lu=Rn;export{Hd as MediaAirplayButton,Fd as MediaCaptionsButton,Bd as MediaCastButton,$d as MediaChromeButton,Wd as MediaChromeDialog,Vd as MediaChromeRange,xd as MediaContainer,Gd as MediaControlBar,Nd as MediaController,qd as MediaDurationDisplay,Yd as MediaErrorDialog,Qd as MediaFullscreenButton,Ks as MediaGestureReceiver,zd as MediaLiveButton,Zd as MediaLoadingIndicator,Xd as MediaMuteButton,Jd as MediaPipButton,eu as MediaPlayButton,jd as MediaPlaybackRateButton,tu as MediaPosterImage,iu as MediaPreviewChapterDisplay,pr as MediaPreviewThumbnail,au as MediaPreviewTimeDisplay,su as MediaSeekBackwardButton,ru as MediaSeekForwardButton,Kd as MediaTextDisplay,nu as MediaTimeDisplay,ou as MediaTimeRange,Xs as MediaTooltip,lu as MediaVolumeRange,Dd as constants,E as t,Cd as timeUtils};
