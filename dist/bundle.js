/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/wglt/dist/wglt.js":
/*!****************************************!*\
  !*** ./node_modules/wglt/dist/wglt.js ***!
  \****************************************/
/***/ ((module) => {

!function(t,i){ true?module.exports=i():0}(globalThis,(function(){return(()=>{"use strict";var t={612:(t,i,e)=>{let s;e.r(i),e.d(i,{BlendMode:()=>s,Cell:()=>E,Chars:()=>c,Colors:()=>A,Console:()=>K,DEFAULT_FONT:()=>V,DefaultDialogRenderer:()=>v,Dialog:()=>b,DialogState:()=>S,Font:()=>O,FovOctants:()=>g,FovQuadrants:()=>N,GUI:()=>I,Keyboard:()=>x,Keys:()=>P,MessageDialog:()=>H,Mouse:()=>Z,Point:()=>R,RNG:()=>ht,Rect:()=>C,SelectDialog:()=>M,Terminal:()=>at,computePath:()=>it,fixBoxCells:()=>_,fromHsv:()=>d,fromRgb:()=>a,getFovQuadrant:()=>L,loadImage:()=>X,loadImage2x:()=>Y}),function(t){t[t.None=0]="None",t[t.Blend=1]="Blend",t[t.Add=2]="Add"}(s||(s={}));const r=[[1,0,1,0],[1,0,1,1],[1,0,1,2],[2,0,2,1],[0,0,2,1],[0,0,1,2],[2,0,2,2],[2,0,2,0],[0,0,2,2],[2,0,0,2],[2,0,0,1],[1,0,0,2],[0,0,1,1],[1,1,0,0],[1,1,0,1],[0,1,1,1],[1,1,1,0],[0,1,0,1],[1,1,1,1],[1,2,1,0],[2,1,2,0],[2,2,0,0],[0,2,2,0],[2,2,0,2],[0,2,2,2],[2,2,2,0],[0,2,0,2],[2,2,2,2],[1,2,0,2],[2,1,0,1],[0,2,1,2],[0,1,2,1],[2,1,0,0],[1,2,0,0],[0,2,1,0],[0,1,2,0],[2,1,2,1],[1,2,1,2],[1,0,0,1],[0,1,1,0]];function h(t,i,e){const s=t.getCharCode(i,e);return void 0!==s&&s>=179&&s<=218}function o(t,i,e,s){if(i<0||e<0||i>=t.width||e>=t.height)return 0;const h=t.getCharCode(i,e);return void 0===h||h<179||h>218?0:r[h-179][s]}function n(t,i,e,s){for(let h=0;h<r.length;h++){const o=r[h];if(o[0]===t&&o[1]===i&&o[2]===e&&o[3]===s)return 179+h}return 0}function _(t){for(let i=0;i<t.height;i++)for(let e=0;e<t.width;e++)if(h(t,e,i)){let s=o(t,e,i-1,2),r=o(t,e+1,i,3),h=o(t,e,i+1,0),_=o(t,e-1,i,1);s>0&&0===r&&0===h&&0===_?h=s:0===s&&r>0&&0===h&&0===_?_=r:0===s&&0===r&&h>0&&0===_?s=h:0===s&&0===r&&0===h&&_>0&&(r=_),_>0&&r>0&&(_=r=Math.max(_,r)),s>0&&h>0&&(s=h=Math.max(s,h));const a=n(s,r,h,_);if((s||r||h||_)&&!(a>=179&&a<=218))throw new Error("invalid char code! (up="+s+", right="+r+", down="+h+", left="+_+")");t.drawChar(e,i,a)}}function a(t,i,e,s){return void 0===s&&(s=255),(t<<24)+(i<<16)+(e<<8)+s}function d(t,i,e,s){const r=6*t|0,h=6*t-r,o=e*(1-i),n=e*(1-h*i),_=e*(1-(1-h)*i);let d,A,l;switch(r%6){case 0:d=e,A=_,l=o;break;case 1:d=n,A=e,l=o;break;case 2:d=o,A=e,l=_;break;case 3:d=o,A=n,l=e;break;case 4:d=_,A=o,l=e;break;case 5:d=e,A=o,l=n;break;default:d=0,A=0,l=0}return void 0===s&&(s=1),a(255*d|0,255*A|0,255*l|0,255*s|0)}const A={BLACK:a(0,0,0),WHITE:a(255,255,255),LIGHT_GRAY:a(170,170,170),DARK_GRAY:a(85,85,85),YELLOW:a(255,255,85),BROWN:a(170,85,0),LIGHT_RED:a(255,85,85),DARK_RED:a(170,0,0),LIGHT_GREEN:a(85,255,85),DARK_GREEN:a(0,170,0),LIGHT_CYAN:a(85,255,255),DARK_CYAN:a(0,170,170),LIGHT_BLUE:a(85,85,255),DARK_BLUE:a(0,0,170),LIGHT_MAGENTA:a(255,85,255),DARK_MAGENTA:a(170,0,170),ORANGE:a(255,136,0)};function l(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}class E{constructor(t,i,e,s,r){l(this,"x",void 0),l(this,"y",void 0),l(this,"charCode",void 0),l(this,"fg",void 0),l(this,"bg",void 0),l(this,"dirty",void 0),l(this,"blocked",void 0),l(this,"blockedSight",void 0),l(this,"explored",void 0),l(this,"visible",void 0),l(this,"pathId",void 0),l(this,"g",void 0),l(this,"h",void 0),l(this,"prev",void 0),this.x=t,this.y=i,this.charCode=void 0!==e?function(t){return"string"===typeof t&&t.length>0?t.charCodeAt(0):t}(e):" ".charCodeAt(0),this.fg=void 0!==s?s:A.WHITE,this.bg=void 0!==r?r:A.BLACK,this.dirty=!0,this.blocked=!1,this.blockedSight=!1,this.explored=!1,this.visible=!1,this.pathId=-1,this.g=0,this.h=0,this.prev=null}setCharCode(t){this.charCode!==t&&(this.charCode=t,this.dirty=!0)}setForeground(t){void 0!==t&&null!==t&&t!==this.fg&&(this.fg=t,this.dirty=!0)}setBackground(t){void 0!==t&&null!==t&&t!==this.bg&&(this.bg=t,this.dirty=!0)}setValue(t,i,e){return"string"===typeof t&&(t=t.charCodeAt(0)),"number"===typeof t?(this.setCharCode(t),void 0!==i&&this.setForeground(i),void 0!==e&&this.setBackground(e)):this.drawCell(t,s.None),this.dirty}drawCell(t,i){const e=255&t.bg;i===s.None||t.charCode>0?(this.setCharCode(t.charCode),this.setForeground(t.fg)):e>0&&e<255&&this.setForeground(this.blendColors(this.fg,t.bg,i)),i===s.None||255===e?this.setBackground(t.bg):e>0&&this.setBackground(this.blendColors(this.bg,t.bg,i))}blendColors(t,i,e){const r=(255-(255&i))/255,h=1-r,o=t>>24&255,n=t>>16&255,_=t>>8&255,d=i>>24&255,A=i>>16&255,l=i>>8&255;switch(e){case s.Blend:return a(r*o+h*d|0,r*n+h*A|0,r*_+h*l|0);case s.Add:return a(this.clamp(o+h*d|0),this.clamp(n+h*A|0),this.clamp(_+h*l|0));default:return i}}clamp(t){return Math.min(255,t)}}let c;function u(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}!function(t){t[t.SMILEY=1]="SMILEY",t[t.INVERSE_SMILEY=2]="INVERSE_SMILEY",t[t.HEART=3]="HEART",t[t.DIAMOND=4]="DIAMOND",t[t.CLUB=5]="CLUB",t[t.SPADE=6]="SPADE",t[t.BULLET=7]="BULLET",t[t.INVERSE_BULLET=8]="INVERSE_BULLET",t[t.LIGHT_SHADE=176]="LIGHT_SHADE",t[t.MEDIUM_SHADE=177]="MEDIUM_SHADE",t[t.DARK_SHADE=178]="DARK_SHADE",t[t.BOX_SINGLE_VERTICAL=179]="BOX_SINGLE_VERTICAL",t[t.BOX_SINGLE_VERTICAL_AND_SINGLE_LEFT=180]="BOX_SINGLE_VERTICAL_AND_SINGLE_LEFT",t[t.BOX_DOUBLE_VERTICAL_AND_DOUBLE_LEFT=185]="BOX_DOUBLE_VERTICAL_AND_DOUBLE_LEFT",t[t.BOX_DOUBLE_VERTICAL=186]="BOX_DOUBLE_VERTICAL",t[t.BOX_DOUBLE_DOWN_AND_DOUBLE_LEFT=187]="BOX_DOUBLE_DOWN_AND_DOUBLE_LEFT",t[t.BOX_DOUBLE_UP_AND_DOUBLE_LEFT=188]="BOX_DOUBLE_UP_AND_DOUBLE_LEFT",t[t.BOX_SINGLE_DOWN_AND_SINGLE_LEFT=191]="BOX_SINGLE_DOWN_AND_SINGLE_LEFT",t[t.BOX_SINGLE_UP_AND_SINGLE_RIGHT=192]="BOX_SINGLE_UP_AND_SINGLE_RIGHT",t[t.BOX_SINGLE_HORIZONTAL_AND_SINGLE_UP=193]="BOX_SINGLE_HORIZONTAL_AND_SINGLE_UP",t[t.BOX_SINGLE_HORIZONTAL_AND_SINGLE_DOWN=194]="BOX_SINGLE_HORIZONTAL_AND_SINGLE_DOWN",t[t.BOX_SINGLE_VERTICAL_AND_SINGLE_RIGHT=195]="BOX_SINGLE_VERTICAL_AND_SINGLE_RIGHT",t[t.BOX_SINGLE_HORIZONTAL=196]="BOX_SINGLE_HORIZONTAL",t[t.BOX_SINGLE_VERTICAL_AND_SINGLE_HORIZONTAL=197]="BOX_SINGLE_VERTICAL_AND_SINGLE_HORIZONTAL",t[t.BOX_DOUBLE_UP_AND_DOUBLE_RIGHT=200]="BOX_DOUBLE_UP_AND_DOUBLE_RIGHT",t[t.BOX_DOUBLE_DOWN_AND_DOUBLE_RIGHT=201]="BOX_DOUBLE_DOWN_AND_DOUBLE_RIGHT",t[t.BOX_DOUBLE_HORIZONTAL_AND_DOUBLE_UP=202]="BOX_DOUBLE_HORIZONTAL_AND_DOUBLE_UP",t[t.BOX_DOUBLE_HORIZONTAL_AND_DOUBLE_DOWN=203]="BOX_DOUBLE_HORIZONTAL_AND_DOUBLE_DOWN",t[t.BOX_DOUBLE_VERTICAL_AND_DOUBLE_RIGHT=204]="BOX_DOUBLE_VERTICAL_AND_DOUBLE_RIGHT",t[t.BOX_DOUBLE_HORIZONTAL=205]="BOX_DOUBLE_HORIZONTAL",t[t.BOX_DOUBLE_VERTICAL_AND_DOUBLE_HORIZONTAL=206]="BOX_DOUBLE_VERTICAL_AND_DOUBLE_HORIZONTAL",t[t.BOX_SINGLE_UP_AND_SINGLE_LEFT=217]="BOX_SINGLE_UP_AND_SINGLE_LEFT",t[t.BOX_SINGLE_DOWN_AND_SINGLE_RIGHT=218]="BOX_SINGLE_DOWN_AND_SINGLE_RIGHT",t[t.BLOCK_FULL=219]="BLOCK_FULL",t[t.BLOCK_BOTTOM_HALF=220]="BLOCK_BOTTOM_HALF",t[t.BLOCK_LEFT_HALF=221]="BLOCK_LEFT_HALF",t[t.BLOCK_RIGHT_HALF=222]="BLOCK_RIGHT_HALF",t[t.BLOCK_TOP_HALF=223]="BLOCK_TOP_HALF"}(c||(c={}));class K{constructor(t,i,e){u(this,"width",void 0),u(this,"height",void 0),u(this,"grid",void 0),u(this,"originX",void 0),u(this,"originY",void 0),u(this,"minX",void 0),u(this,"maxX",void 0),u(this,"minY",void 0),u(this,"maxY",void 0),u(this,"radius",void 0),this.width=t,this.height=i,this.grid=[],this.originX=0,this.originY=0,this.minX=0,this.maxX=0,this.minY=0,this.maxY=0,this.radius=0;for(let e=0;e<i;e++){const i=[];for(let s=0;s<t;s++)i.push(new E(s,e));this.grid.push(i)}if(this.clear(),e)for(let s=0;s<i;s++)for(let i=0;i<t;i++)this.grid[s][i].blocked=this.grid[s][i].blockedSight=e(i,s)}clear(){for(let t=0;t<this.height;t++)for(let i=0;i<this.width;i++)this.drawChar(i,t,0)}getCell(t,i){if(!(t<0||i<0||t>=this.width||i>=this.height))return this.grid[i][t]}getCharCode(t,i){if(!(t<0||i<0||t>=this.width||i>=this.height))return this.grid[i][t].charCode}drawChar(t,i,e,s,r){t>=0&&t<this.width&&i>=0&&i<this.height&&this.grid[0|i][0|t].setValue(e,s,r)}drawString(t,i,e,s,r){const h=e.split("\n");for(let e=0;e<h.length;e++){const o=h[e];for(let h=0;h<o.length;h++)this.drawChar(t+h,i+e,o.charCodeAt(h),s,r)}}drawCenteredString(t,i,e,s,r){this.drawString(t-Math.floor(e.length/2),i,e,s,r)}drawHLine(t,i,e,s,r,h){for(let o=t;o<t+e;o++)this.drawChar(o,i,s,r,h)}drawVLine(t,i,e,s,r,h){for(let o=i;o<i+e;o++)this.drawChar(t,o,s,r,h)}drawRect(t,i,e,s,r,h,o){this.drawHLine(t,i,e,r,h,o),this.drawHLine(t,i+s-1,e,r,h,o),this.drawVLine(t,i,s,r,h,o),this.drawVLine(t+e-1,i,s,r,h,o)}drawBox(t,i,e,s,r,h,o,n,_,a,d,A,l,E){this.fillRect(t,i,e,s,0,l,E),this.drawHLine(t,i,e,r),this.drawHLine(t,i+s-1,e,o),this.drawVLine(t,i,s,n),this.drawVLine(t+e-1,i,s,h),this.drawChar(t,i,_),this.drawChar(t+e-1,i,a),this.drawChar(t,i+s-1,A),this.drawChar(t+e-1,i+s-1,d)}drawSingleBox(t,i,e,s,r,h){this.drawBox(t,i,e,s,c.BOX_SINGLE_HORIZONTAL,c.BOX_SINGLE_VERTICAL,c.BOX_SINGLE_HORIZONTAL,c.BOX_SINGLE_VERTICAL,c.BOX_SINGLE_DOWN_AND_SINGLE_RIGHT,c.BOX_SINGLE_DOWN_AND_SINGLE_LEFT,c.BOX_SINGLE_UP_AND_SINGLE_LEFT,c.BOX_SINGLE_UP_AND_SINGLE_RIGHT,r,h)}drawDoubleBox(t,i,e,s,r,h){this.drawBox(t,i,e,s,c.BOX_DOUBLE_HORIZONTAL,c.BOX_DOUBLE_VERTICAL,c.BOX_DOUBLE_HORIZONTAL,c.BOX_DOUBLE_VERTICAL,c.BOX_DOUBLE_DOWN_AND_DOUBLE_RIGHT,c.BOX_DOUBLE_DOWN_AND_DOUBLE_LEFT,c.BOX_DOUBLE_UP_AND_DOUBLE_LEFT,c.BOX_DOUBLE_UP_AND_DOUBLE_RIGHT,r,h)}fillRect(t,i,e,s,r,h,o){for(let n=i;n<i+s;n++)this.drawHLine(t,n,e,r,h,o)}drawConsole(t,i,e,r,h,o,n,_){_=_||s.None;for(let s=0;s<n;s++)for(let n=0;n<o;n++){const o=e.getCell(r+n,h+s);o&&this.drawCell(t+n,i+s,o,_)}}drawCell(t,i,e,s){t>=0&&t<this.width&&i>=0&&i<this.height&&this.grid[i][t].drawCell(e,s)}setBlocked(t,i,e){t>=0&&t<this.width&&i>=0&&i<this.height&&(this.grid[i][t].blocked=e)}setBlockedSight(t,i,e){t>=0&&t<this.width&&i>=0&&i<this.height&&(this.grid[i][t].blockedSight=e)}isVisible(t,i){return!(t<this.minX||t>this.maxX||i<this.minY||i>this.maxY)&&this.grid[i][t].visible}isBlocked(t,i){return t<0||t>this.width||i<0||i>this.height||this.grid[i][t].blocked}isBlockedSight(t,i){return t<0||t>this.width||i<0||i>this.height||this.grid[i][t].blockedSight}computeOctantY(t,i){const e=[],s=[];let r,h,o,n,_,a,d,A,l,E,c=1,u=0,K=0,T=0;for(h=this.originY+i;h>=this.minY&&h<=this.maxY;h+=i,K=u,++c)for(o=.5/c,E=-1,n=Math.floor(T*c+.5),r=this.originX+n*t;n<=c&&r>=this.minX&&r<=this.maxX;r+=t,++n,E=l){if(_=!0,a=!1,d=n/c,A=E,l=d+o,K>0)if(this.grid[h-i][r].visible&&!this.grid[h-i][r].blockedSight||this.grid[h-i][r-t].visible&&!this.grid[h-i][r-t].blockedSight){for(let t=0;t<K&&_;++t)if(A<=s[t]&&l>=e[t])if(this.grid[h][r].blockedSight){if(A>=e[t]&&l<=s[t]){_=!1;break}e[t]=Math.min(e[t],A),s[t]=Math.max(s[t],l),a=!0}else if(d>e[t]&&d<s[t]){_=!1;break}}else _=!1;_&&(this.grid[h][r].visible=!0,this.grid[h][r].blockedSight&&(T>=A?T=l:a||(e[u]=A,s[u++]=l)))}}computeOctantX(t,i){const e=[],s=[];let r,h,o,n,_,a,d,A,l,E,c=1,u=0,K=0,T=0;for(r=this.originX+t;r>=this.minX&&r<=this.maxX;r+=t,K=u,++c)for(o=.5/c,E=-1,n=Math.floor(T*c+.5),h=this.originY+n*i;n<=c&&h>=this.minY&&h<=this.maxY;h+=i,++n,E=l){if(_=!0,a=!1,d=n/c,A=E,l=d+o,K>0)if(this.grid[h][r-t].visible&&!this.grid[h][r-t].blockedSight||this.grid[h-i][r-t].visible&&!this.grid[h-i][r-t].blockedSight){for(let t=0;t<K&&_;++t)if(A<=s[t]&&l>=e[t])if(this.grid[h][r].blockedSight){if(A>=e[t]&&l<=s[t]){_=!1;break}e[t]=Math.min(e[t],A),s[t]=Math.max(s[t],l),a=!0}else if(d>e[t]&&d<s[t]){_=!1;break}}else _=!1;_&&(this.grid[h][r].visible=!0,this.grid[h][r].blockedSight&&(T>=A?T=l:a||(e[u]=A,s[u++]=l)))}}computeFov(t,i,e,s,r){if(this.originX=t,this.originY=i,this.radius=e,s)this.minX=Math.min(this.minX,Math.max(0,t-e)),this.minY=Math.min(this.minY,Math.max(0,i-e)),this.maxX=Math.max(this.maxX,Math.min(this.width-1,t+e)),this.maxY=Math.max(this.maxY,Math.min(this.height-1,i+e));else{this.minX=Math.max(0,t-e),this.minY=Math.max(0,i-e),this.maxX=Math.min(this.width-1,t+e),this.maxY=Math.min(this.height-1,i+e);for(let t=this.minY;t<=this.maxY;t++)for(let i=this.minX;i<=this.maxX;i++)this.grid[t][i].visible=!1}this.grid[i][t].visible=!0,void 0===r?(this.computeOctantY(1,1),this.computeOctantX(1,1),this.computeOctantX(1,-1),this.computeOctantY(1,-1),this.computeOctantY(-1,-1),this.computeOctantX(-1,-1),this.computeOctantX(-1,1),this.computeOctantY(-1,1)):(1&r&&this.computeOctantY(1,1),2&r&&this.computeOctantX(1,1),4&r&&this.computeOctantX(1,-1),8&r&&this.computeOctantY(1,-1),16&r&&this.computeOctantY(-1,-1),32&r&&this.computeOctantX(-1,-1),64&r&&this.computeOctantX(-1,1),128&r&&this.computeOctantY(-1,1))}updateExplored(){for(let t=this.minY;t<=this.maxY;t++)for(let i=this.minX;i<=this.maxX;i++){const e=this.grid[t][i];e.explored=e.explored||e.visible}}}function T(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}class O{constructor(t,i,e,s,r){T(this,"url",void 0),T(this,"charWidth",void 0),T(this,"charHeight",void 0),T(this,"scale",void 0),T(this,"graphical",void 0),this.url=t,this.charWidth=i,this.charHeight=e,this.scale=s||1,this.graphical=!!r}}const V=new O("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEUAAAD///+l2Z/dAAAEhklEQVRIx42Sv4oUQRDGC4UzadSwwMUD8QEKlbWD4Q58B/NGpTVocKO1wXHUzMAH0AcwMTYVGg5ag0IzEXaRjdZEZKNzkKbHqtnzHypY09M9+5uvqr7pbYCuC6ftaRhgONXs30eAh0O1rYDm4IS/eH0B8GxRW2vxo396yu/fb0ZFrW1zcOXlPU/XPwK8PGjbWhVwM4KnH61912oK4+zmmHJaQotyt1kvtC2Atdo24iohPDiG/v4eICJsY3Wy8Yvr0DSIBOdxgH6v8wsriWhc8s0AtaK/GzSl1jR0nSjQnwki6FQxNFKjgzO2a7BBqucH7dL4M9z96CIhT1Fs/AgKgcA6dKCxI29DaHNwRJ4EGAU1sU0OG9rmE4SIc3A4FChACqqhJRwpxkqh9wxag4DSmEJ5DtpFwAP4GUf6lmKcFFti1BYuQp4xN8kxM2kNhjdkTOiTUeAKGvhA1rLpMbYACQzCITlTDRMbLYoEa2JWPSMRFZIupcSzMVKcEUkX+sOG+ChNX2vD8ex6k7OFHL0P1655JuPd53WAD+yTv3UrCQiuHmYBbfIxpkImuvpBQBkVb5g4XHv3JkNireG8AO9zDhBZu2z2OMZ11S5/RIlyMefMNaZ4GsCz5xcjyM6hHYEjAYEfO8Ig1rklAe9sRIeYAdwyoIBq6YIzCAKiWoifA3m3o2AzWcdYKOdY47EIf8QABCuYgIUVmdVMEYEDA0Hmo/3D6KKJbh5mxhP3UsWIE97wnEygyizOfOLi2JOJW8CeOblW9IHeKZgv4zxuzDryOmb+4aQH+MXV6e0ywdUcxqCjBWl5GpbzZduOG1QEiGXP86T7EfiJfkMQ4OO4H0yqyNC2zlziWEN7Ywuc2fQ4p5BNkS5QYXP2h5NtRJh0vCKQidtVJmCGAwDSSQpYggSxiRIyzewsgCh4xxiTPDMh5aj//l7btqkr6rQyIOtLji4lVRQwXdzvus40Y53M33fh50GZwF4ExQeMlvuTggLzSi4ElKczUO7zVtpwdyMKdqZKOWb2nDblawPxPmuMwFEWBW+jlZR1eYtS442kiBGMWCi/h1/+GAR6NYOJWiqNJXFygFtrkx5C0O3IeFGs67HhEEhmBu/BUOT+0551pXxYIF+Elpi5AKRkLl5GUbCCZddyMv621ujEBPP4vSy2fotTx3U+d3WBiFOA6VSGSB49v/M7GBX9FPrDaT2c9qr4PCpwZ7qz813R94dVFIe19v33GlMZUghQFb8BrfE7QBmgBMbrn2B3enn/y3B5+DL8UBAdnejdYdBxeV9ejwoYNTgW0Ok/gA7UG2GAzanhL0DG7q4svynwF8UwDPu7u/vD0IudzSltMtVbP+J/gUbR29oJ7Fg9s6Uy+DnpiTCOYc4cXOeXMWfsusSw7FOg9x655nax6BlecwpOQQ68WBwp+H2LMQTuOq2RUigzh2Q/R3CWARJIJG199EwOTyKBlQMznshCRGeQ5gHABAQl6M4gLEdAzVaBWMCiANdsayDCHBA/hagKYfielrJIlipKKQIA9Nf3wBloTHT6BuAx15zRNa1nAAAAAElFTkSuQmCC",8,8);let g,N;function L(t,i){return t>0?i>0?N.QUADRANT_SOUTHEAST:0===i?N.QUADRANT_EAST:N.QUADRANT_NORTHEAST:t<0?i>0?N.QUADRANT_SOUTHWEST:0===i?N.QUADRANT_WEST:N.QUADRANT_NORTHWEST:i>0?N.QUADRANT_SOUTH:N.QUADRANT_NORTH}function f(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}!function(t){t[t.OCTANT_SOUTH_SOUTHEAST=1]="OCTANT_SOUTH_SOUTHEAST",t[t.OCTANT_EAST_SOUTHEAST=2]="OCTANT_EAST_SOUTHEAST",t[t.OCTANT_EAST_NORTHTHEAST=4]="OCTANT_EAST_NORTHTHEAST",t[t.OCTANT_NORTH_NORTHEAST=8]="OCTANT_NORTH_NORTHEAST",t[t.OCTANT_NORTH_NORTHWEST=16]="OCTANT_NORTH_NORTHWEST",t[t.OCTANT_WEST_NORTHEAST=32]="OCTANT_WEST_NORTHEAST",t[t.OCTANT_WEST_SOUTHWEST=64]="OCTANT_WEST_SOUTHWEST",t[t.OCTANT_SOUTH_SOUTHWEST=128]="OCTANT_SOUTH_SOUTHWEST"}(g||(g={})),function(t){t[t.QUADRANT_SOUTHEAST=3]="QUADRANT_SOUTHEAST",t[t.QUADRANT_EAST=6]="QUADRANT_EAST",t[t.QUADRANT_NORTHEAST=12]="QUADRANT_NORTHEAST",t[t.QUADRANT_NORTH=24]="QUADRANT_NORTH",t[t.QUADRANT_NORTHWEST=48]="QUADRANT_NORTHWEST",t[t.QUADRANT_WEST=96]="QUADRANT_WEST",t[t.QUADRANT_SOUTHWEST=192]="QUADRANT_SOUTHWEST",t[t.QUADRANT_SOUTH=129]="QUADRANT_SOUTH"}(N||(N={}));class R{constructor(t,i){f(this,"x",void 0),f(this,"y",void 0),this.x=t,this.y=i}}function D(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}class C{constructor(t,i,e,s){D(this,"x",void 0),D(this,"y",void 0),D(this,"width",void 0),D(this,"height",void 0),D(this,"left",void 0),D(this,"top",void 0),D(this,"x2",void 0),D(this,"y2",void 0),this.x=this.left=t,this.y=this.top=i,this.width=e,this.height=s,this.x2=t+e,this.y2=i+s}getCenter(){return new R(this.x+this.width/2|0,this.y+this.height/2|0)}intersects(t){return this.x<=t.x2&&this.x2>=t.x&&this.y<=t.y2&&this.y2>=t.y}contains(t){return t.x>=this.x&&t.x<this.x2&&t.y>=this.y&&t.y<this.y2}}function U(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}class S{constructor(t,i,e){U(this,"dialog",void 0),U(this,"rect",void 0),U(this,"contentsOffset",void 0),U(this,"open",void 0),U(this,"count",void 0),U(this,"buffer",void 0),this.dialog=t,this.rect=i,this.contentsOffset=e,this.open=!1,this.count=0}}class v{getState(t,i){const e=i.contentsRect.width+4,s=i.contentsRect.height+4,r=(t.width-e)/2|0,h=(t.height-s)/2|0;return new S(i,new C(r,h,e,s),new R(r+2,h+2))}draw(t,i){const e=i.dialog,{x:s,y:r,width:h,height:o}=i.rect;t.fillRect(s,r,h,o,0,A.WHITE,A.BLACK),t.drawSingleBox(s,r,h,o),t.drawCenteredString(s+h/2|0,r," "+e.title+" "),e.drawContents(t,i.contentsOffset)}}function B(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}class I{constructor(t,i){B(this,"terminal",void 0),B(this,"renderer",void 0),B(this,"dialogs",void 0),this.terminal=t,this.renderer=i||new v,this.dialogs=[]}add(t){this.dialogs.push(this.renderer.getState(this.terminal,t))}handleInput(){if(0===this.dialogs.length)return!1;const t=this.dialogs.length-1,i=this.dialogs[this.dialogs.length-1];return i.dialog.handleInput(this.terminal,i.contentsOffset)&&this.dialogs.splice(t,1),!0}draw(){for(let t=0;t<this.dialogs.length;t++)this.renderer.draw(this.terminal,this.dialogs[t])}}function p(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}class b{constructor(t,i){p(this,"contentsRect",void 0),p(this,"title",void 0),this.contentsRect=t,this.title=i}}function w(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}class y{constructor(){w(this,"down",void 0),w(this,"downTime",void 0),w(this,"repeat",void 0),w(this,"repeatTime",void 0),w(this,"downCount",void 0),w(this,"upCount",void 0),this.down=!1,this.downTime=0,this.repeat=!1,this.repeatTime=0,this.downCount=0,this.upCount=100}setDown(t){this.down!==t&&(this.down=t,this.repeat=!1,this.downTime=this.repeatTime=performance.now())}update(t){this.repeat=!1,this.down?(this.downCount++,this.upCount=0,t-this.downTime>=200&&t-this.repeatTime>=66.66666666666667&&(this.repeat=!0,this.repeatTime=t)):(this.downCount=0,this.upCount++)}isPressed(){return 1===this.downCount||this.repeat}isClicked(){return 1===this.upCount}}const m=256;class x{constructor(t){var i,e,s;s=void 0,(e="keys")in(i=this)?Object.defineProperty(i,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[e]=s,this.keys=new Array(m);for(let t=0;t<m;t++)this.keys[t]=new y;t.addEventListener("keydown",(t=>this.setKey(t,!0))),t.addEventListener("keyup",(t=>this.setKey(t,!1)))}setKey(t,i){const e=t.keyCode;e!==P.VK_F11&&(t.stopPropagation(),t.preventDefault(),e>=0&&e<m&&this.keys[e].setDown(i))}updateKeys(t){for(let i=0;i<m;i++)this.keys[i].update(t)}getKey(t){return t>=0&&t<m?this.keys[t]:null}}let P;!function(t){t[t.VK_CANCEL=3]="VK_CANCEL",t[t.VK_HELP=6]="VK_HELP",t[t.VK_BACK_SPACE=8]="VK_BACK_SPACE",t[t.VK_TAB=9]="VK_TAB",t[t.VK_CLEAR=12]="VK_CLEAR",t[t.VK_ENTER=13]="VK_ENTER",t[t.VK_SHIFT=16]="VK_SHIFT",t[t.VK_CONTROL=17]="VK_CONTROL",t[t.VK_ALT=18]="VK_ALT",t[t.VK_PAUSE=19]="VK_PAUSE",t[t.VK_CAPS_LOCK=20]="VK_CAPS_LOCK",t[t.VK_ESCAPE=27]="VK_ESCAPE",t[t.VK_SPACE=32]="VK_SPACE",t[t.VK_PAGE_UP=33]="VK_PAGE_UP",t[t.VK_PAGE_DOWN=34]="VK_PAGE_DOWN",t[t.VK_END=35]="VK_END",t[t.VK_HOME=36]="VK_HOME",t[t.VK_LEFT=37]="VK_LEFT",t[t.VK_UP=38]="VK_UP",t[t.VK_RIGHT=39]="VK_RIGHT",t[t.VK_DOWN=40]="VK_DOWN",t[t.VK_PRINTSCREEN=44]="VK_PRINTSCREEN",t[t.VK_INSERT=45]="VK_INSERT",t[t.VK_DELETE=46]="VK_DELETE",t[t.VK_0=48]="VK_0",t[t.VK_1=49]="VK_1",t[t.VK_2=50]="VK_2",t[t.VK_3=51]="VK_3",t[t.VK_4=52]="VK_4",t[t.VK_5=53]="VK_5",t[t.VK_6=54]="VK_6",t[t.VK_7=55]="VK_7",t[t.VK_8=56]="VK_8",t[t.VK_9=57]="VK_9",t[t.VK_COLON=58]="VK_COLON",t[t.VK_SEMICOLON=59]="VK_SEMICOLON",t[t.VK_LESS_THAN=60]="VK_LESS_THAN",t[t.VK_EQUALS=61]="VK_EQUALS",t[t.VK_GREATER_THAN=62]="VK_GREATER_THAN",t[t.VK_QUESTION_MARK=63]="VK_QUESTION_MARK",t[t.VK_AT=64]="VK_AT",t[t.VK_A=65]="VK_A",t[t.VK_B=66]="VK_B",t[t.VK_C=67]="VK_C",t[t.VK_D=68]="VK_D",t[t.VK_E=69]="VK_E",t[t.VK_F=70]="VK_F",t[t.VK_G=71]="VK_G",t[t.VK_H=72]="VK_H",t[t.VK_I=73]="VK_I",t[t.VK_J=74]="VK_J",t[t.VK_K=75]="VK_K",t[t.VK_L=76]="VK_L",t[t.VK_M=77]="VK_M",t[t.VK_N=78]="VK_N",t[t.VK_O=79]="VK_O",t[t.VK_P=80]="VK_P",t[t.VK_Q=81]="VK_Q",t[t.VK_R=82]="VK_R",t[t.VK_S=83]="VK_S",t[t.VK_T=84]="VK_T",t[t.VK_U=85]="VK_U",t[t.VK_V=86]="VK_V",t[t.VK_W=87]="VK_W",t[t.VK_X=88]="VK_X",t[t.VK_Y=89]="VK_Y",t[t.VK_Z=90]="VK_Z",t[t.VK_CONTEXT_MENU=93]="VK_CONTEXT_MENU",t[t.VK_NUMPAD0=96]="VK_NUMPAD0",t[t.VK_NUMPAD1=97]="VK_NUMPAD1",t[t.VK_NUMPAD2=98]="VK_NUMPAD2",t[t.VK_NUMPAD3=99]="VK_NUMPAD3",t[t.VK_NUMPAD4=100]="VK_NUMPAD4",t[t.VK_NUMPAD5=101]="VK_NUMPAD5",t[t.VK_NUMPAD6=102]="VK_NUMPAD6",t[t.VK_NUMPAD7=103]="VK_NUMPAD7",t[t.VK_NUMPAD8=104]="VK_NUMPAD8",t[t.VK_NUMPAD9=105]="VK_NUMPAD9",t[t.VK_MULTIPLY=106]="VK_MULTIPLY",t[t.VK_ADD=107]="VK_ADD",t[t.VK_SEPARATOR=108]="VK_SEPARATOR",t[t.VK_SUBTRACT=109]="VK_SUBTRACT",t[t.VK_DECIMAL=110]="VK_DECIMAL",t[t.VK_DIVIDE=111]="VK_DIVIDE",t[t.VK_F1=112]="VK_F1",t[t.VK_F2=113]="VK_F2",t[t.VK_F3=114]="VK_F3",t[t.VK_F4=115]="VK_F4",t[t.VK_F5=116]="VK_F5",t[t.VK_F6=117]="VK_F6",t[t.VK_F7=118]="VK_F7",t[t.VK_F8=119]="VK_F8",t[t.VK_F9=120]="VK_F9",t[t.VK_F10=121]="VK_F10",t[t.VK_F11=122]="VK_F11",t[t.VK_F12=123]="VK_F12",t[t.VK_F13=124]="VK_F13",t[t.VK_F14=125]="VK_F14",t[t.VK_F15=126]="VK_F15",t[t.VK_F16=127]="VK_F16",t[t.VK_F17=128]="VK_F17",t[t.VK_F18=129]="VK_F18",t[t.VK_F19=130]="VK_F19",t[t.VK_F20=131]="VK_F20",t[t.VK_F21=132]="VK_F21",t[t.VK_F22=133]="VK_F22",t[t.VK_F23=134]="VK_F23",t[t.VK_F24=135]="VK_F24",t[t.VK_NUM_LOCK=144]="VK_NUM_LOCK",t[t.VK_SCROLL_LOCK=145]="VK_SCROLL_LOCK",t[t.VK_CIRCUMFLEX=160]="VK_CIRCUMFLEX",t[t.VK_EXCLAMATION=161]="VK_EXCLAMATION",t[t.VK_DOUBLE_QUOTE=162]="VK_DOUBLE_QUOTE",t[t.VK_HASH=163]="VK_HASH",t[t.VK_DOLLAR=164]="VK_DOLLAR",t[t.VK_PERCENT=165]="VK_PERCENT",t[t.VK_AMPERSAND=166]="VK_AMPERSAND",t[t.VK_UNDERSCORE=167]="VK_UNDERSCORE",t[t.VK_OPEN_PAREN=168]="VK_OPEN_PAREN",t[t.VK_CLOSE_PAREN=169]="VK_CLOSE_PAREN",t[t.VK_ASTERISK=170]="VK_ASTERISK",t[t.VK_PLUS=171]="VK_PLUS",t[t.VK_PIPE=172]="VK_PIPE",t[t.VK_HYPHEN_MINUS=173]="VK_HYPHEN_MINUS",t[t.VK_OPEN_CURLY_BRACKET=174]="VK_OPEN_CURLY_BRACKET",t[t.VK_CLOSE_CURLY_BRACKET=175]="VK_CLOSE_CURLY_BRACKET",t[t.VK_TILDE=176]="VK_TILDE",t[t.VK_COMMA=188]="VK_COMMA",t[t.VK_PERIOD=190]="VK_PERIOD",t[t.VK_SLASH=191]="VK_SLASH",t[t.VK_BACK_QUOTE=192]="VK_BACK_QUOTE",t[t.VK_OPEN_BRACKET=219]="VK_OPEN_BRACKET",t[t.VK_BACK_SLASH=220]="VK_BACK_SLASH",t[t.VK_CLOSE_BRACKET=221]="VK_CLOSE_BRACKET",t[t.VK_QUOTE=222]="VK_QUOTE",t[t.VK_META=224]="VK_META",t[t.VK_ALTGR=225]="VK_ALTGR",t[t.VK_WIN=91]="VK_WIN",t[t.VK_KANA=21]="VK_KANA",t[t.VK_HANGUL=21]="VK_HANGUL",t[t.VK_EISU=22]="VK_EISU",t[t.VK_JUNJA=23]="VK_JUNJA",t[t.VK_FINAL=24]="VK_FINAL",t[t.VK_HANJA=25]="VK_HANJA",t[t.VK_KANJI=25]="VK_KANJI",t[t.VK_CONVERT=28]="VK_CONVERT",t[t.VK_NONCONVERT=29]="VK_NONCONVERT",t[t.VK_ACCEPT=30]="VK_ACCEPT",t[t.VK_MODECHANGE=31]="VK_MODECHANGE",t[t.VK_SELECT=41]="VK_SELECT",t[t.VK_PRINT=42]="VK_PRINT",t[t.VK_EXECUTE=43]="VK_EXECUTE",t[t.VK_SLEEP=95]="VK_SLEEP"}(P||(P={}));class H extends b{constructor(t,i){const e=i.split("\n");let s=t.length;for(let t=0;t<e.length;t++)s=Math.max(s,e[t].length);const r=e.length;var h,o,n;super(new C(0,0,s,r),t),n=void 0,(o="lines")in(h=this)?Object.defineProperty(h,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):h[o]=n,this.lines=e}drawContents(t,i){for(let e=0;e<this.lines.length;e++)t.drawString(i.x,i.y+e,this.lines[e])}handleInput(t,i){return t.isKeyPressed(P.VK_ESCAPE)}}function F(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}class M extends b{constructor(t,i,e){let s=t.length;for(let t=0;t<i.length;t++)s=Math.max(s,i[t].length+4);const r=i.length;super(new C(0,0,s,r),t),F(this,"options",void 0),F(this,"callback",void 0),F(this,"hoverIndex",void 0),this.options=i,this.callback=e,this.hoverIndex=-1}drawContents(t,i){for(let e=0;e<this.options.length;e++){const s=String.fromCharCode(65+e)+" - "+this.options[e];e===this.hoverIndex?t.drawString(i.x,i.y+e,s,A.BLACK,A.WHITE):t.drawString(i.x,i.y+e,s,A.WHITE,A.BLACK)}}handleInput(t,i){if(this.hoverIndex=-1,t.mouse.x>=i.x&&t.mouse.x<i.x+this.contentsRect.width&&t.mouse.y>=i.y&&t.mouse.y<i.y+this.contentsRect.height&&(this.hoverIndex=t.mouse.y-i.y,1===t.mouse.buttons[0].upCount))return this.callback(this.hoverIndex),!0;for(let i=0;i<this.options.length;i++)if(t.isKeyPressed(P.VK_A+i))return this.callback(i),!0;return t.isKeyPressed(P.VK_ESCAPE)}isMouseOverOption(t,i,e){return t.mouse.x>=i.x&&t.mouse.x<i.x+this.contentsRect.width&&t.mouse.y===i.y+e}}const G=[{charCode:c.BLOCK_TOP_HALF,active:[1,1,0,0]},{charCode:c.BLOCK_RIGHT_HALF,active:[0,1,0,1]}];function X(t,i){const e=new Image;e.onload=()=>{const t=e.width,s=e.height,r=W(e),h=new K(t,s);let o=0;for(let i=0;i<s;i++)for(let e=0;e<t;e++){h.getCell(e,i).setBackground(a(r[o++],r[o++],r[o++],r[o++]))}i(h)},e.src=t}function Y(t,i){const e=new Image;e.onload=()=>{const t=e.width,s=e.height,r=W(e),h=new K(t/2,s/2);for(let i=0;i<s;i+=2)for(let e=0;e<t;e+=2)k(h,r,e,i,t);i(h)},e.src=t}function W(t){const i=document.createElement("canvas");i.width=t.width,i.height=t.height;const e=i.getContext("2d");return e.drawImage(t,0,0),e.getImageData(0,0,t.width,t.height).data}function k(t,i,e,s,r){const h=4*(s*r+e),o=4*(s*r+e+1),n=4*((s+1)*r+e),_=4*((s+1)*r+e+1),a=[[i[h],i[h+1],i[h+2]],[i[o],i[o+1],i[o+2]],[i[n],i[n+1],i[n+2]],[i[_],i[_+1],i[_+2]]];let d=Number.MAX_VALUE,A=0,l=null,E=null;for(let t=0;t<G.length;t++){const i=G[t],e=Q(i.active,a);e.error<d&&(d=e.error,A=i.charCode,l=e.bg,E=e.fg)}t.drawChar(e/2,s/2,A,z(E),z(l))}function Q(t,i){const e=[[0,0,0],[0,0,0]],s=[[0,0,0],[0,0,0]],r=[0,0];for(let s=0;s<4;s++){for(let r=0;r<3;r++)e[t[s]][r]+=i[s][r];r[t[s]]++}for(let t=0;t<2;t++)for(let i=0;i<3;i++)s[t][i]=e[t][i]/r[t];let h=0;for(let e=0;e<4;e++){let r=0;for(let h=0;h<3;h++){const o=i[e][h]-s[t[e]][h];r+=o*o}h+=Math.sqrt(r)}return{bg:s[0],fg:s[1],error:h}}function z(t){return a(t[0],t[1],t[2])}function j(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}class Z{constructor(t){j(this,"el",void 0),j(this,"width",void 0),j(this,"height",void 0),j(this,"prevX",void 0),j(this,"prevY",void 0),j(this,"x",void 0),j(this,"y",void 0),j(this,"dx",void 0),j(this,"dy",void 0),j(this,"buttons",void 0),this.el=t.canvas,this.width=t.width,this.height=t.height,this.prevX=0,this.prevY=0,this.x=0,this.y=0,this.dx=0,this.dy=0,this.buttons=[new y,new y,new y];const i=this.el;i.addEventListener("mousedown",(t=>this.handleEvent(t))),i.addEventListener("mouseup",(t=>this.handleEvent(t))),i.addEventListener("mousemove",(t=>this.handleEvent(t))),i.addEventListener("contextmenu",(t=>this.handleEvent(t)));const e=this.handleTouchEvent.bind(this);i.addEventListener("touchstart",e),i.addEventListener("touchend",e),i.addEventListener("touchcancel",e),i.addEventListener("touchmove",e)}handleTouchEvent(t){if(t.stopPropagation(),t.preventDefault(),t.touches.length>0){const i=t.touches[0];this.updatePosition(i.clientX,i.clientY),this.buttons[0].setDown(!0)}else this.buttons[0].setDown(!1)}handleEvent(t){t.stopPropagation(),t.preventDefault(),this.updatePosition(t.clientX,t.clientY),"mousedown"===t.type&&(this.buttons[t.button].setDown(!0),this.el.focus()),"mouseup"===t.type&&this.buttons[t.button].setDown(!1)}updatePosition(t,i){let e=this.el.getBoundingClientRect();const s=this.width/this.height,r=e.width/e.height;if(r-s>.01){const t=s*e.height,i=e.width-t;e=new C(Math.floor(i/2),0,t,e.height)}if(r-s<-.01){const t=e.width/s,i=e.height-t;e=new C(0,Math.floor(i/2),e.width,t)}this.x=this.width*(t-e.left)/e.width|0,this.y=this.height*(i-e.top)/e.height|0}update(t){this.dx=this.x-this.prevX,this.dy=this.y-this.prevY,this.prevX=this.x,this.prevY=this.y;for(let i=0;i<this.buttons.length;i++)this.buttons[i].update(t)}}const J=[-1,0,1,-1,1,-1,0,1],q=[-1,-1,-1,0,0,1,1,1],$=[1.4,1,1.4,1,1,1.4,1,1.4];let tt=0;function it(t,i,e,s){tt++;const r=t.grid[i.y][i.x];r.pathId=tt,r.g=0,r.h=Math.hypot(i.x-e.x,i.y-e.y),r.prev=null;const h=new st([r]);for(;h.size()>0;){const i=h.pop();if(i.x===e.x&&i.y===e.y)return et(i);for(let r=0;r<J.length;r++){const o=i.x+J[r],n=i.y+q[r];if(o>=0&&o<t.width&&n>=0&&n<t.height){const _=t.grid[n][o];if(_.blocked&&_.explored&&(o!==e.x||n!==e.y))continue;_.pathId!==tt&&(_.pathId=tt,_.g=1/0,_.h=Math.hypot(o-e.x,n-e.y),_.prev=null);const a=i.g+$[r];a<_.g&&a<=s&&(_.g=a,_.prev=i,h.insert(_))}}}}function et(t){const i=[];let e=t;for(;e;)i.push(e),e=e.prev;return i.reverse(),i}class st{constructor(t){var i,e,s;s=void 0,(e="values")in(i=this)?Object.defineProperty(i,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):i[e]=s,this.values=t}insert(t){const i=this.values;let e=0,s=i.length,r=0;for(;e<s;){const h=e+s>>>1,o=i[h];o.g+o.h>t.g+t.h?(e=h+1,r=e):(s=h,r=s)}i.splice(r,0,t)}pop(){return this.values.pop()}size(){return this.values.length}}function rt(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}class ht{constructor(t){rt(this,"m",void 0),rt(this,"a",void 0),rt(this,"c",void 0),rt(this,"state",void 0),this.m=2147483648,this.a=1103515245,this.c=12345,this.state=t||1}nextInt(){return this.state=(this.a*this.state+this.c)%this.m,this.state}nextFloat(){return this.nextInt()/(this.m-1)}nextRange(t,i){const e=i-t,s=t+(this.nextInt()/this.m*e|0);if(isNaN(s))throw new Error("rand nan");return s}chooseIndex(t){const i=t.reduce(((t,i)=>t+i)),e=this.nextRange(1,i+1);let s=0;for(let i=0;i<t.length;i++)if(s+=t[i],e<=s)return i;return t.length-1}chooseKey(t){const i=Object.keys(t),e=i.map((i=>t[i]));return i[this.chooseIndex(e)]}}function ot(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function nt(t,i){return t/i*2-1}const _t={font:V};class at extends K{constructor(t,i,e,s){super(i,e),ot(this,"canvas",void 0),ot(this,"font",void 0),ot(this,"pixelWidth",void 0),ot(this,"pixelHeight",void 0),ot(this,"keys",void 0),ot(this,"mouse",void 0),ot(this,"gl",void 0),ot(this,"program",void 0),ot(this,"positionAttribLocation",void 0),ot(this,"textureAttribLocation",void 0),ot(this,"fgColorAttribLocation",void 0),ot(this,"bgColorAttribLocation",void 0),ot(this,"positionsArray",void 0),ot(this,"indexArray",void 0),ot(this,"textureArray",void 0),ot(this,"foregroundUint8Array",void 0),ot(this,"foregroundDataView",void 0),ot(this,"backgroundUint8Array",void 0),ot(this,"backgroundDataView",void 0),ot(this,"positionBuffer",void 0),ot(this,"indexBuffer",void 0),ot(this,"textureBuffer",void 0),ot(this,"foregroundBuffer",void 0),ot(this,"backgroundBuffer",void 0),ot(this,"texture",void 0),ot(this,"lastRenderTime",void 0),ot(this,"renderDelta",void 0),ot(this,"fps",void 0),ot(this,"averageFps",void 0),ot(this,"update",void 0),s=s||_t,this.canvas=t,this.font=s.font||V,this.pixelWidth=i*this.font.charWidth,this.pixelHeight=e*this.font.charHeight,t.width=this.pixelWidth,t.height=this.pixelHeight,t.style.imageRendering="pixelated",t.style.outline="none",t.tabIndex=0,this.handleResize(),window.addEventListener("resize",(()=>this.handleResize())),this.keys=new x(t),this.mouse=new Z(this);const r=t.getContext("webgl",{antialias:!1});if(!r)throw new Error("Unable to initialize WebGL. Your browser may not support it.");const h=r.createProgram();if(!h)throw new Error("Unable to initialize WebGL. Your browser may not support it.");this.gl=r,this.program=h,r.attachShader(h,this.buildShader(r.VERTEX_SHADER,"attribute vec2 a;attribute vec2 b;attribute vec3 c;attribute vec3 d;varying highp vec2 e;varying highp vec4 f;varying highp vec4 g;void main(void){gl_Position=vec4(a.x,a.y,0,1);e=b/16.0;f=vec4(c.r,c.g,c.b,1);g=vec4(d.r,d.g,d.b,1);}")),r.attachShader(h,this.buildShader(r.FRAGMENT_SHADER,"varying highp vec2 e;varying highp vec4 f;varying highp vec4 g;uniform bool h;uniform sampler2D s;void main(void){gl_FragColor=texture2D(s,e);if(h){if(gl_FragColor.a<0.1){gl_FragColor=texture2D(s,g.rg*16.0+fract(e*16.0)/16.0);}}else{if(gl_FragColor.r<0.1) {gl_FragColor=g;} else {gl_FragColor=f;}}}")),r.linkProgram(h),r.useProgram(h),this.font.graphical&&r.uniform1i(r.getUniformLocation(h,"h"),1),this.positionAttribLocation=this.getAttribLocation("a"),this.textureAttribLocation=this.getAttribLocation("b"),this.fgColorAttribLocation=this.getAttribLocation("c"),this.bgColorAttribLocation=this.getAttribLocation("d");const o=i*e;this.positionsArray=new Float32Array(3*o*4),this.indexArray=new Uint16Array(6*o),this.textureArray=new Float32Array(2*o*4),this.foregroundUint8Array=new Uint8Array(4*o*4),this.foregroundDataView=new DataView(this.foregroundUint8Array.buffer),this.backgroundUint8Array=new Uint8Array(4*o*4),this.backgroundDataView=new DataView(this.backgroundUint8Array.buffer);let n=0,_=0,a=0;for(let t=0;t<e;t++)for(let s=0;s<i;s++)this.positionsArray[n++]=nt(s,i),this.positionsArray[n++]=-nt(t,e),this.positionsArray[n++]=nt(s+1,i),this.positionsArray[n++]=-nt(t,e),this.positionsArray[n++]=nt(s+1,i),this.positionsArray[n++]=-nt(t+1,e),this.positionsArray[n++]=nt(s,i),this.positionsArray[n++]=-nt(t+1,e),this.indexArray[_++]=a+0,this.indexArray[_++]=a+1,this.indexArray[_++]=a+2,this.indexArray[_++]=a+0,this.indexArray[_++]=a+2,this.indexArray[_++]=a+3,a+=4;this.positionBuffer=r.createBuffer(),this.indexBuffer=r.createBuffer(),this.textureBuffer=r.createBuffer(),this.foregroundBuffer=r.createBuffer(),this.backgroundBuffer=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.positionBuffer),r.bufferData(r.ARRAY_BUFFER,this.positionsArray,r.STATIC_DRAW),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,this.indexBuffer),r.bufferData(r.ELEMENT_ARRAY_BUFFER,this.indexArray,r.STATIC_DRAW),this.texture=this.loadTexture(this.font.url),this.lastRenderTime=0,this.renderDelta=0,this.fps=0,this.averageFps=0,this.requestAnimationFrame()}handleResize(){const t=this.canvas.parentElement;if(!t)return;const i=t.offsetWidth/this.pixelWidth,e=t.offsetHeight/this.pixelHeight,s=Math.min(i,e),r=s*this.pixelWidth|0,h=s*this.pixelHeight|0;this.canvas.style.width=r+"px",this.canvas.style.height=h+"px"}getAttribLocation(t){const i=this.gl.getAttribLocation(this.program,t);return this.gl.enableVertexAttribArray(i),i}flush(){let t=0,i=0;for(let e=0;e<this.height;e++)for(let s=0;s<this.width;s++){const r=this.getCell(s,e);if(!r.dirty){t+=8,i+=16;continue}const h=r.charCode%16,o=r.charCode/16|0;this.textureArray[t++]=h,this.textureArray[t++]=o,this.textureArray[t++]=h+1,this.textureArray[t++]=o,this.textureArray[t++]=h+1,this.textureArray[t++]=o+1,this.textureArray[t++]=h,this.textureArray[t++]=o+1;for(let t=0;t<4;t++)this.foregroundDataView.setUint32(i,r.fg,!1),this.backgroundDataView.setUint32(i,r.bg,!1),i+=4;r.dirty=!1}}isKeyDown(t){const i=this.keys.getKey(t);return!!i&&i.down}isKeyPressed(t){const i=this.keys.getKey(t);return!!i&&i.isPressed()}getKeyDownCount(t){const i=this.keys.getKey(t);return i?i.downCount:0}getMovementKey(){return this.isKeyPressed(P.VK_NUMPAD1)||this.isKeyPressed(P.VK_B)?new R(-1,1):this.isKeyPressed(P.VK_NUMPAD2)||this.isKeyPressed(P.VK_J)||this.isKeyPressed(P.VK_DOWN)?new R(0,1):this.isKeyPressed(P.VK_NUMPAD3)||this.isKeyPressed(P.VK_N)?new R(1,1):this.isKeyPressed(P.VK_NUMPAD4)||this.isKeyPressed(P.VK_H)||this.isKeyPressed(P.VK_LEFT)?new R(-1,0):this.isKeyPressed(P.VK_NUMPAD5)||this.isKeyPressed(P.VK_PERIOD)?new R(0,0):this.isKeyPressed(P.VK_NUMPAD6)||this.isKeyPressed(P.VK_L)||this.isKeyPressed(P.VK_RIGHT)?new R(1,0):this.isKeyPressed(P.VK_NUMPAD7)||this.isKeyPressed(P.VK_Y)?new R(-1,-1):this.isKeyPressed(P.VK_NUMPAD8)||this.isKeyPressed(P.VK_K)||this.isKeyPressed(P.VK_DOWN)?new R(0,-1):this.isKeyPressed(P.VK_NUMPAD9)||this.isKeyPressed(P.VK_U)?new R(1,-1):void 0}buildShader(t,i){const e=this.gl,s=e.createShader(t);if(!s)throw new Error("An error occurred compiling the shader: ");if(e.shaderSource(s,i),e.compileShader(s),!e.getShaderParameter(s,e.COMPILE_STATUS))throw new Error("An error occurred compiling the shader: "+e.getShaderInfoLog(s));return s}loadTexture(t){const i=this.gl,e=i.createTexture();i.bindTexture(i.TEXTURE_2D,e);const s=i.RGBA,r=i.RGBA,h=i.UNSIGNED_BYTE,o=new Uint8Array([0,0,0,255]);i.texImage2D(i.TEXTURE_2D,0,s,1,1,0,r,h,o);const n=new Image;return n.onload=()=>{i.bindTexture(i.TEXTURE_2D,e),i.texImage2D(i.TEXTURE_2D,0,s,r,h,n),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR)},n.src=t,e}render(){const t=this.gl;t.clearColor(0,0,0,1),t.clearDepth(1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.viewport(0,0,this.pixelWidth,this.pixelHeight);{const i=2,e=t.FLOAT,s=!1,r=0,h=0;t.bindBuffer(t.ARRAY_BUFFER,this.positionBuffer),t.vertexAttribPointer(this.positionAttribLocation,i,e,s,r,h)}{const i=2,e=t.FLOAT,s=!1,r=0,h=0;t.bindBuffer(t.ARRAY_BUFFER,this.textureBuffer),t.bufferData(t.ARRAY_BUFFER,this.textureArray,t.DYNAMIC_DRAW),t.vertexAttribPointer(this.textureAttribLocation,i,e,s,r,h)}{const i=4,e=t.UNSIGNED_BYTE,s=!0,r=0,h=0;t.bindBuffer(t.ARRAY_BUFFER,this.foregroundBuffer),t.bufferData(t.ARRAY_BUFFER,this.foregroundUint8Array,t.DYNAMIC_DRAW),t.vertexAttribPointer(this.fgColorAttribLocation,i,e,s,r,h)}{const i=4,e=t.UNSIGNED_BYTE,s=!0,r=0,h=0;t.bindBuffer(t.ARRAY_BUFFER,this.backgroundBuffer),t.bufferData(t.ARRAY_BUFFER,this.backgroundUint8Array,t.DYNAMIC_DRAW),t.vertexAttribPointer(this.bgColorAttribLocation,i,e,s,r,h)}t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer),t.useProgram(this.program),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.texture);{const i=this.width*this.height*6,e=t.UNSIGNED_SHORT,s=0;t.drawElements(t.TRIANGLES,i,e,s)}}requestAnimationFrame(){window.requestAnimationFrame((t=>this.renderLoop(t)))}renderLoop(t){0===this.lastRenderTime?(this.lastRenderTime=t,this.fps=0):(this.renderDelta=t-this.lastRenderTime,this.lastRenderTime=t,this.fps=1e3/this.renderDelta,this.averageFps=.95*this.averageFps+.05*this.fps),this.keys.updateKeys(t),this.mouse.update(t),this.update&&this.update(),this.flush(),this.render(),this.requestAnimationFrame()}}}},i={};function e(s){if(i[s])return i[s].exports;var r=i[s]={exports:{}};return t[s](r,r.exports,e),r.exports}return e.d=(t,i)=>{for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},e.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),e.r=t=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e(612)})()}));
//# sourceMappingURL=wglt.js.map

/***/ }),

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "entityAI": () => (/* binding */ entityAI)
/* harmony export */ });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components.js");
/*
Modular AI:
    functions in order to make it easy to switch in and out different AI into enemies/golems.
    **Movement**
    zombie horde-esque movement
    formational marching forward
    formation reinforcing from spawn
    **Targetting**
    target nearest
    dumb target adjacent random
    formation-attack neighbor's targets
    formation-phalanx attack in columns forward
    --Targetting: Find a way to include range
    --Targetting: Add targetting cooldown to reduce processing load. I.e., update every 5 actions.
    Target random in range
    Target random globally
*/



let entityAI = {
    movement: {
        //move like a zombie horde. Requires entity, a target, movement direction
        horde: function(entity) {
            let cardinals = [[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]]
            //determine cardinal movement to nearest enemy
            for (let i = 0; i < 8; i++) {
                let angle = Math.atan2(entity.combat.x - entity.position.x, entity.combat.y - entity.position.y)* 180 / Math.PI
                let lowAngle = i * 45 - 22.5
                let highAngle = i * 45 + 22.5
                if (Math.sign(lowAngle) == -1) {lowAngle += 360}
                if (Math.sign(angle) == -1) {angle += 360}
                if ((i == 0 && (angle >= 337.5 || angle <= 22.5)) || (lowAngle <= angle && angle <= highAngle)) {
                    entity.movement.x = cardinals[i][0]
                    entity.movement.y = cardinals[i][1]
                    entity.movement.cardinal = i
                };
            }
            //determine if path forward is empty
            if (!locationId[(entity.position.x + entity.movement.x) + "," + (entity.position.y + entity.movement.y)]) {
                //empty, move straight towards target
            } else {
                //decide which directions are viable to go to
                let randomDirection = []
                //front left
                if (!locationId[(entity.position.x + cardinals.at((entity.movement.cardinal + 1) % 8)[0]) + "," + (entity.position.y + cardinals.at((entity.movement.cardinal + 1) % 8)[1])]) {
                    randomDirection.push("Front Left")
                //front right
                } if (!locationId[(entity.position.x + cardinals.at((entity.movement.cardinal - 1) % 8)[0]) + "," + (entity.position.y + cardinals.at((entity.movement.cardinal - 1) % 8)[1])]) {
                    randomDirection.push("Front Right")

                //side left
                } if (!locationId[(entity.position.x + cardinals.at((entity.movement.cardinal + 2) % 8)[0]) + "," + (entity.position.y + cardinals.at((entity.movement.cardinal + 2) % 8)[1])]) {
                    randomDirection.push("Side Left")

                //side right
                } if (!locationId[(entity.position.x + cardinals.at((entity.movement.cardinal - 2) % 8)[0]) + "," + (entity.position.y + cardinals.at((entity.movement.cardinal - 2) % 8)[1])]) {
                    randomDirection.push("Side Right")
                }
                //randomly pick a valid direction to move to, or none
                switch (randomDirection[Math.floor(Math.random() * randomDirection.length)]){
                case 'Front Left':
                    entity.movement.x = cardinals.at((entity.movement.cardinal + 1) % 8)[0]
                    entity.movement.y = cardinals.at((entity.movement.cardinal + 1) % 8)[1]
                    break;
                case 'Front Right':
                    entity.movement.x = cardinals.at((entity.movement.cardinal - 1) % 8)[0]
                    entity.movement.y = cardinals.at((entity.movement.cardinal - 1) % 8)[1]
                    break;
                case 'Side Left':
                    entity.movement.x = cardinals.at((entity.movement.cardinal + 2) % 8)[0]
                    entity.movement.y = cardinals.at((entity.movement.cardinal + 2) % 8)[1]
                    break;
                case 'Side Right':
                    entity.movement.x = cardinals.at((entity.movement.cardinal - 2) % 8)[0]
                    entity.movement.y = cardinals.at((entity.movement.cardinal - 2) % 8)[1]
                    break;
                case 'None':
                case undefined:
                    entity.movement.x = 0
                    entity.movement.y = 0
                    break;
                }
            }
            //update locationId and set new position
            delete locationId[entity.position.x + "," + entity.position.y]
            entity.position.x += entity.movement.x
            entity.position.y += entity.movement.y
            locationId[entity.position.x + "," + entity.position.y] = entity.id
            //informs action timer that the last action was movement and requires velocity multiplier
            entity.add(_components__WEBPACK_IMPORTED_MODULE_0__.hasMoved)
        }
    },
    target: {
        //target nearest. requires entity, and team of target: "enemies", "allies"
        nearest: function(entity, team, cooldown) {
            if (entity.combat.targetCooldown <= 0) {
                entity.combat.targetCooldown = cooldown
                let distance = 0
                //Determine closest player ally to zombie
                query[team].get().forEach((entityTarget) => {
                    if (Math.hypot((entity.position.x - entityTarget.position.x),(entity.position.y - entityTarget.position.y)) < distance || distance == 0) {
                        entity.combat.x = entityTarget.position.x
                        entity.combat.y = entityTarget.position.y
                        entity.combat.target = entityTarget.id
                        distance = Math.hypot((entity.position.x - entityTarget.position.x),(entity.position.y - entityTarget.position.y))
                    };
                });
                entity.combat.distance = distance
            } else {
                entity.combat.targetCooldown -= 1
            }
        },
        //target adjacent, requires entity, team of target: "enemies", "allies"
        adjacent: function(entity, team, cooldown) {
            if (entity.combat.targetCooldown <= 0) {
                entity.combat.targetCooldown = cooldown
                //Determine target based on first zombie found within range 1
                let randomTarget = []
                query[team].get().forEach(entityEnemy => {
                    if (Math.abs(entity.position.x - entityEnemy.position.x) <= 1 && Math.abs(entity.position.y - entityEnemy.position.y) <= 1) {
                        randomTarget.push([entityEnemy.id, entityEnemy.position.x, entityEnemy.position.y])
                    };
                });
                if (randomTarget.length > 0) {
                    let selectedTarget = randomTarget[Math.floor(Math.random() * randomTarget.length)]
                    entity.combat.target = selectedTarget[0]
                    entity.combat.x = selectedTarget[1]
                    entity.combat.y = selectedTarget[2]
                };
            } else {
                entity.combat.targetCooldown -= 1
            }
        }
    }
}



/***/ }),

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ally": () => (/* binding */ Ally),
/* harmony export */   "Appearance": () => (/* binding */ Appearance),
/* harmony export */   "Combat": () => (/* binding */ Combat),
/* harmony export */   "Description": () => (/* binding */ Description),
/* harmony export */   "Enemy": () => (/* binding */ Enemy),
/* harmony export */   "hasMoved": () => (/* binding */ hasMoved),
/* harmony export */   "Health": () => (/* binding */ Health),
/* harmony export */   "Position": () => (/* binding */ Position),
/* harmony export */   "Action": () => (/* binding */ Action),
/* harmony export */   "Movement": () => (/* binding */ Movement)
/* harmony export */ });
/* harmony import */ var geotic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! geotic */ "./node_modules/geotic/build/index.js");
/* harmony import */ var wglt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/wglt.js");
/* harmony import */ var wglt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wglt__WEBPACK_IMPORTED_MODULE_1__);




class Ally extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {
    };
}
//declaring components
//char = displayed character, color = displayed color
class Appearance extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {
        char: "@",
        color: wglt__WEBPACK_IMPORTED_MODULE_1__.Colors.WHITE
    }
}
//target = current primary target
class Combat extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {
        target: "",
        targetCooldown: 0,
        range: 1,
        x: 0,
        y: 0,
        distance: 0
    }
}
//name = name of object, desc = description of object
class Description extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {
        desc: ""
    }
}
class Enemy extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {
    };
}
//hp = current health, maxHp = maximum health allowed
class hasMoved extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {}
}
class Health extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {
        hp: 1,
        maxHp: 1,
        minHp: 0
    }
    reduce(amount) {
        this.hp = Math.max(this.hp-amount, this.minHp)
    }
    heal(amount) {
        this.hp = Math.min(this.hp+amount, this.maxHp)
    }
    onDamageTaken(event) {
    if (event.data.damage > 0) {
        this.reduce(event.data.damage)
    } else {
        this.heal(event.data.damage)
    }
    }
    
}
//x,y = x,y coordinate position on display
class Position extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {
        x: 0,
        y: 0
    };
}
//action = action speed in milliseconds i.e. how fast all actions such as moving and attacking are done
class Action extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {
        speed: 1000,
        last: 0,
        adjusted: 1000
    }
}
//x = horizontal movement speed, y = vertical movement speed. i.e. per movement action move up to x/y velocity.
class Movement extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {
        velocity: 1,
        x: 0,
        y: 0,
        cardinal: 0
    };
}



/***/ }),

/***/ "./src/ecs.js":
/*!********************!*\
  !*** ./src/ecs.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var geotic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! geotic */ "./node_modules/geotic/build/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities */ "./src/entities.js");




//creating geotic engine
const engine = new geotic__WEBPACK_IMPORTED_MODULE_0__.Engine();
//associating components
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Ally)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Appearance)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Combat)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Description)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Enemy)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.hasMoved)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Health)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Position)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Action)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Movement)
//associating prefabs
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.Being)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.Human)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.Structure)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.Zombie)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.Vertical)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.Horizontal)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.BottomLeft)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.BottomRight)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.TopLeft)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.TopRight)
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (engine);

/***/ }),

/***/ "./src/entities.js":
/*!*************************!*\
  !*** ./src/entities.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Being": () => (/* binding */ Being),
/* harmony export */   "Human": () => (/* binding */ Human),
/* harmony export */   "Zombie": () => (/* binding */ Zombie),
/* harmony export */   "Structure": () => (/* binding */ Structure),
/* harmony export */   "Horizontal": () => (/* binding */ Horizontal),
/* harmony export */   "Vertical": () => (/* binding */ Vertical),
/* harmony export */   "BottomLeft": () => (/* binding */ BottomLeft),
/* harmony export */   "BottomRight": () => (/* binding */ BottomRight),
/* harmony export */   "TopLeft": () => (/* binding */ TopLeft),
/* harmony export */   "TopRight": () => (/* binding */ TopRight)
/* harmony export */ });
/* harmony import */ var wglt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/wglt.js");
/* harmony import */ var wglt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wglt__WEBPACK_IMPORTED_MODULE_0__);

//default "Being"mob with related components
let Being = {
    name: "Being",
    components: [
        {
            type: "Appearance",

        },
        {
            type: "Combat",
        },
        {
            type: "Description",
            properties: {
                name: "Being",
                desc: "Nondescript being."
            }
        },
        {
            type: "Health",
        },
        {
            type: "Position",
        },
        {
            type: "Action",
        },
        {
            type: "Movement",
        },

    ],
};
//default "Human" subtype of "Being"
let Human = {
   name: "Human",
   inherit: "Being",
   components: [
    { type: "Action",
        properties: {
            speed: 1000
        }    
    },
    {
        type: "Ally",
            properties: {},
    },
    {
        type: "Appearance",
            properties: {
                char: "@",
                color: wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.LIGHT_MAGENTA
            },
    },
    {
        type: "Description",
        properties: {
            name: "Human",
            desc: "A human being."
        }
    },
    {
        type: "Health",
        properties: {
            hp: 10,
            maxHp: 10
        },
    },
    {
        type: "Movement",
        properties: {
            velocity: 1,
        },
    }
   ] 
}
//default "Zombie" subtype of "Being"
let Zombie = {
    name: "Zombie",
    inherit: "Being",
    components: [
    {
        type: "Appearance",
          properties: {
            char: "Z",
            color: wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GREEN
       }
    },
    {
         type: "Description",
         properties: {
             name: "Zombie",
             desc: "A zombie."
         }
     },
     {
        type: "Enemy",
        properties: {}
     },     
     {
         type: "Health",
         properties: {
             hp: 10,
             maxHp: 10
         },
     },
 
     {
         type: "Movement",
         properties: {
             velocity: 5,
         },
     },
    ] 
}

let Structure = {
    name: "Structure",
    components: [
        {
            type: "Appearance",
              properties: {
                    char: "X",
                    color: wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.WHITE
            }
        },
        {
            type: "Description",
            properties: {
                name: "Structure",
                desc: "Nondescript structure."
            }
        },
        {
            type: "Position",
        },
    ]
}

let Horizontal = {
    name: "Horizontal",
    inherit: "Structure",
    components: [
        {
            type: "Appearance", 
                properties: {
                    char: 0xCD,
                }
        }
    ]
}

let Vertical = {
    name: "Vertical",
    inherit: "Structure",
    components: [
        {
            type: "Appearance", 
                properties: {
                    char: 0xBA,
                }
        }
    ]
}

let BottomLeft = {
    name: "BottomLeft",
    inherit: "Structure",
    components: [
        {
            type: "Appearance", 
                properties: {
                    char: 0xC8,
                }
        }
    ]
}

let BottomRight = {
    name: "BottomRight",
    inherit: "Structure",
    components: [
        {
            type: "Appearance", 
                properties: {
                    char: 0xBC,
                }
        }
    ]
}

let TopLeft = {
    name: "TopLeft",
    inherit: "Structure",
    components: [
        {
            type: "Appearance", 
                properties: {
                    char: 0xC9,
                }
        }
    ]
}

let TopRight = {
    name: "TopRight",
    inherit: "Structure",
    components: [
        {
            type: "Appearance", 
                properties: {
                    char: 0xBB,
                }
        }
    ]
}

/***/ }),

/***/ "./src/terminal/placement.js":
/*!***********************************!*\
  !*** ./src/terminal/placement.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placement": () => (/* binding */ placement)
/* harmony export */ });
/* harmony import */ var wglt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/wglt.js");
/* harmony import */ var wglt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wglt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./src/components.js");


function line(terminal, mouseStart) {
    return wglt__WEBPACK_IMPORTED_MODULE_0__.computePath(terminal, mouseStart, terminal.mouse, 1000)
}
function boxRemove(terminal, mouseStart) {
    for (let i = Math.min(mouseStart.x, terminal.mouse.x); i < Math.max(mouseStart.x, terminal.mouse.x); i++) {
        for (let j = Math.min(mouseStart.y, terminal.mouse.y); j < Math.max(mouseStart.y, terminal.mouse.y); j++) {
            let entity = world.getEntity(locationId[i + "," + j])
            if (entity && entity.has(_components__WEBPACK_IMPORTED_MODULE_1__.Ally)) {
                let cell = terminal.getCell(entity.position.x, entity.position.y)
                cell.setBackground(wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.YELLOW)
            }
        }
    }
}
function box(terminal, mouseStart, golemCount, removeBool) {
    let mousePath = []
    let lineCount = 0


    //bottom right box
    if (terminal.mouse.x - mouseStart.x > 0 && terminal.mouse.y - mouseStart.y > 0) {
        terminal.fillRect(mouseStart.x, mouseStart.y, terminal.mouse.x - mouseStart.x, terminal.mouse.y - mouseStart.y, 0, undefined, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
        if (removeBool) {
            boxRemove(terminal, mouseStart)
        } else {
            for (let i = golemCount; i > 0 && lineCount < (terminal.mouse.y - mouseStart.y); i = i - (terminal.mouse.x - mouseStart.x)) {
                if (mouseStart.y - lineCount < 30) {
                    lineCount++
                } else {
                    terminal.drawHLine(mouseStart.x, mouseStart.y + lineCount, Math.min(i, terminal.mouse.x - mouseStart.x), 0, undefined, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.YELLOW)
                    lineCount++
                }
            }
        }
        //bottom left box
    } else if (terminal.mouse.x - mouseStart.x < 0 && terminal.mouse.y - mouseStart.y > 0) {
        terminal.fillRect(terminal.mouse.x, mouseStart.y, (mouseStart.x - terminal.mouse.x) + 1, terminal.mouse.y - mouseStart.y, 0, undefined, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
        if (removeBool) {
            boxRemove(terminal, mouseStart)
        } else {
            for (let i = golemCount; i > 0 && lineCount < (terminal.mouse.y - mouseStart.y); i = i - ((mouseStart.x - terminal.mouse.x) + 1)) {
                if (mouseStart.y - lineCount < 30) {
                    lineCount++
                } else {
                    terminal.drawHLine(terminal.mouse.x + (((mouseStart.x - terminal.mouse.x) + 1) - (Math.min(i, (mouseStart.x - terminal.mouse.x) + 1))), mouseStart.y + lineCount, Math.min(i, (mouseStart.x - terminal.mouse.x) + 1), 0, undefined, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.YELLOW)
                    lineCount++
                }
            }
        }
        //top left box
    } else if (terminal.mouse.x - mouseStart.x < 0 && terminal.mouse.y - mouseStart.y < 0) {
        terminal.fillRect(terminal.mouse.x, terminal.mouse.y + 1, (mouseStart.x - terminal.mouse.x) + 1, mouseStart.y - terminal.mouse.y, 0, undefined, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
        if (removeBool) {
            boxRemove(terminal, mouseStart)
        } else {
            for (let i = golemCount; i > 0 && lineCount < (mouseStart.y - terminal.mouse.y); i = i - ((mouseStart.x - terminal.mouse.x) + 1)) {    
                if (mouseStart.y - lineCount < 30) {
                    lineCount++
                } else {        
                    terminal.drawHLine(terminal.mouse.x + (((mouseStart.x - terminal.mouse.x) + 1) - (Math.min(i, (mouseStart.x - terminal.mouse.x) + 1))), mouseStart.y - lineCount, Math.min(i, (mouseStart.x - terminal.mouse.x) + 1), 0, undefined, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.YELLOW)
                    lineCount++
                }
            }
        }
        //top right box
    } else if (terminal.mouse.x - mouseStart.x > 0 && terminal.mouse.y - mouseStart.y < 0) {
        terminal.fillRect(mouseStart.x, terminal.mouse.y + 1, terminal.mouse.x - mouseStart.x, mouseStart.y - terminal.mouse.y, 0, undefined, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
        if (removeBool) {
            boxRemove(terminal, mouseStart)
        } else {
            for (let i = golemCount; i > 0 && lineCount < (mouseStart.y - terminal.mouse.y); i = i - (terminal.mouse.x - mouseStart.x)) {    
                if (mouseStart.y - lineCount < 30) {
                    lineCount++
                } else {        
                    terminal.drawHLine(mouseStart.x, mouseStart.y - lineCount, Math.min(i, terminal.mouse.x - mouseStart.x), 0, undefined, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.YELLOW)
                    lineCount++
                }
            }
        }
    }
    mousePath[0] = mouseStart
    mousePath[1] = { x: terminal.mouse.x, y: terminal.mouse.y }
    return mousePath
}
let draw = function(terminal, mousePath) {
    let newPath = mousePath
    if (newPath == []) {newPath[0] = mouseStart}
    if (newPath.findIndex( value => value.x  == terminal.mouse.x && value.y == terminal.mouse.y) == -1) {
        newPath.push({x: terminal.mouse.x, y: terminal.mouse.y})
    }
    return newPath
}


let placement = function(terminal, mouseStart, golemCount, mousePath, placementIndex, removeBool){
    if (placementIndex === 0) {
        return line(terminal, mouseStart)
    } else if (placementIndex === 1) {
        return box(terminal, mouseStart, golemCount, removeBool)
    } else if (placementIndex === 2) {
        return draw(terminal, mousePath)
    }

}






/***/ }),

/***/ "./src/terminal/ui.js":
/*!****************************!*\
  !*** ./src/terminal/ui.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ui": () => (/* binding */ ui)
/* harmony export */ });
/* harmony import */ var _placement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placement */ "./src/terminal/placement.js");

let ui = {
    placement: _placement__WEBPACK_IMPORTED_MODULE_0__.placement,
}

/***/ }),

/***/ "./node_modules/geotic/build/index.js":
/*!********************************************!*\
  !*** ./node_modules/geotic/build/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "Engine": () => (/* binding */ Engine)
/* harmony export */ });
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true,
        });
    } else {
        obj[key] = value;
    }

    return obj;
}

const preserveCamelCase = (string) => {
    let isLastCharLower = false;
    let isLastCharUpper = false;
    let isLastLastCharUpper = false;

    for (let i = 0; i < string.length; i++) {
        const character = string[i];

        if (isLastCharLower && /[\p{Lu}]/u.test(character)) {
            string = string.slice(0, i) + '-' + string.slice(i);
            isLastCharLower = false;
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = true;
            i++;
        } else if (
            isLastCharUpper &&
            isLastLastCharUpper &&
            /[\p{Ll}]/u.test(character)
        ) {
            string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper = false;
            isLastCharLower = true;
        } else {
            isLastCharLower =
                character.toLocaleLowerCase() === character &&
                character.toLocaleUpperCase() !== character;
            isLastLastCharUpper = isLastCharUpper;
            isLastCharUpper =
                character.toLocaleUpperCase() === character &&
                character.toLocaleLowerCase() !== character;
        }
    }

    return string;
};

const camelCase = (input, options) => {
    if (!(typeof input === 'string' || Array.isArray(input))) {
        throw new TypeError('Expected the input to be `string | string[]`');
    }

    options = {
        ...{
            pascalCase: false,
        },
        ...options,
    };

    const postProcess = (x) =>
        options.pascalCase ? x.charAt(0).toLocaleUpperCase() + x.slice(1) : x;

    if (Array.isArray(input)) {
        input = input
            .map((x) => x.trim())
            .filter((x) => x.length)
            .join('-');
    } else {
        input = input.trim();
    }

    if (input.length === 0) {
        return '';
    }

    if (input.length === 1) {
        return options.pascalCase
            ? input.toLocaleUpperCase()
            : input.toLocaleLowerCase();
    }

    const hasUpperCase = input !== input.toLocaleLowerCase();

    if (hasUpperCase) {
        input = preserveCamelCase(input);
    }

    input = input
        .replace(/^[_.\- ]+/, '')
        .toLocaleLowerCase()
        .replace(/[_.\- ]+([\p{Alpha}\p{N}_]|$)/gu, (_, p1) =>
            p1.toLocaleUpperCase()
        )
        .replace(/\d+([\p{Alpha}\p{N}_]|$)/gu, (m) => m.toLocaleUpperCase());
    return postProcess(input);
};

var camelcase = camelCase; // TODO: Remove this for the next major release

var _default = camelCase;
camelcase.default = _default;

const camelCache = {};
const camelString = (value) => {
    const result = camelCache[value];

    if (!result) {
        camelCache[value] = camelcase(value);
        return camelCache[value];
    }

    return result;
};

class ComponentRegistry {
    constructor() {
        _defineProperty(this, '_cbit', 0);

        _defineProperty(this, '_map', {});
    }

    register(clazz) {
        const key = camelString(clazz.name);
        clazz.prototype._ckey = key;
        clazz.prototype._cbit = BigInt(++this._cbit);
        this._map[key] = clazz;
    }

    get(key) {
        return this._map[key];
    }
}

var isMergeableObject = function isMergeableObject(value) {
    return isNonNullObject(value) && !isSpecial(value);
};

function isNonNullObject(value) {
    return !!value && typeof value === 'object';
}

function isSpecial(value) {
    var stringValue = Object.prototype.toString.call(value);
    return (
        stringValue === '[object RegExp]' ||
        stringValue === '[object Date]' ||
        isReactElement(value)
    );
} // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25

var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
    return value.$$typeof === REACT_ELEMENT_TYPE;
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {};
}

function cloneUnlessOtherwiseSpecified(value, options) {
    return options.clone !== false && options.isMergeableObject(value)
        ? deepmerge(emptyTarget(value), value, options)
        : value;
}

function defaultArrayMerge(target, source, options) {
    return target.concat(source).map(function (element) {
        return cloneUnlessOtherwiseSpecified(element, options);
    });
}

function getMergeFunction(key, options) {
    if (!options.customMerge) {
        return deepmerge;
    }

    var customMerge = options.customMerge(key);
    return typeof customMerge === 'function' ? customMerge : deepmerge;
}

function getEnumerableOwnPropertySymbols(target) {
    return Object.getOwnPropertySymbols
        ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
              return target.propertyIsEnumerable(symbol);
          })
        : [];
}

function getKeys(target) {
    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}

function propertyIsOnObject(object, property) {
    try {
        return property in object;
    } catch (_) {
        return false;
    }
} // Protects from prototype poisoning and unexpected merging up the prototype chain.

function propertyIsUnsafe(target, key) {
    return (
        propertyIsOnObject(target, key) && // Properties are safe to merge if they don't exist in the target yet,
        !(
            Object.hasOwnProperty.call(target, key) && // unsafe if they exist up the prototype chain,
            Object.propertyIsEnumerable.call(target, key)
        )
    ); // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
    var destination = {};

    if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function (key) {
            destination[key] = cloneUnlessOtherwiseSpecified(
                target[key],
                options
            );
        });
    }

    getKeys(source).forEach(function (key) {
        if (propertyIsUnsafe(target, key)) {
            return;
        }

        if (
            propertyIsOnObject(target, key) &&
            options.isMergeableObject(source[key])
        ) {
            destination[key] = getMergeFunction(key, options)(
                target[key],
                source[key],
                options
            );
        } else {
            destination[key] = cloneUnlessOtherwiseSpecified(
                source[key],
                options
            );
        }
    });
    return destination;
}

function deepmerge(target, source, options) {
    options = options || {};
    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
    options.isMergeableObject = options.isMergeableObject || isMergeableObject; // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
    // implementations can use it. The caller may not replace it.

    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
    } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
    } else {
        return mergeObject(target, source, options);
    }
}

deepmerge.all = function deepmergeAll(array, options) {
    if (!Array.isArray(array)) {
        throw new Error('first argument should be an array');
    }

    return array.reduce(function (prev, next) {
        return deepmerge(prev, next, options);
    }, {});
};

var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;

class PrefabComponent {
    constructor(clazz, properties = {}, overwrite = true) {
        this.clazz = clazz;
        this.properties = properties;
        this.overwrite = overwrite;
    }

    applyToEntity(entity, initialProps = {}) {
        if (!this.clazz.allowMultiple && entity.has(this.clazz)) {
            if (!this.overwrite) {
                return;
            }

            const comp = entity[this.clazz.prototype._ckey];
            entity.remove(comp);
        }

        const props = cjs(this.properties, initialProps);
        entity.add(this.clazz, props);
    }
}

class Prefab {
    constructor(name) {
        _defineProperty(this, 'name', '');

        _defineProperty(this, 'inherit', []);

        _defineProperty(this, 'components', []);

        this.name = name;
    }

    addComponent(prefabComponent) {
        this.components.push(prefabComponent);
    }

    applyToEntity(entity, prefabProps = {}) {
        this.inherit.forEach((parent) => {
            parent.applyToEntity(entity, prefabProps);
        });
        const arrComps = {};
        this.components.forEach((component) => {
            const clazz = component.clazz;
            const ckey = clazz.prototype._ckey;
            let initialCompProps = {};

            if (clazz.allowMultiple) {
                if (clazz.keyProperty) {
                    const key = component.properties[clazz.keyProperty];

                    if (prefabProps[ckey] && prefabProps[ckey][key]) {
                        initialCompProps = prefabProps[ckey][key];
                    }
                } else {
                    if (!arrComps[ckey]) {
                        arrComps[ckey] = 0;
                    }

                    if (
                        prefabProps[ckey] &&
                        prefabProps[ckey][arrComps[ckey]]
                    ) {
                        initialCompProps = prefabProps[ckey][arrComps[ckey]];
                    }

                    arrComps[ckey]++;
                }
            } else {
                initialCompProps = prefabProps[ckey];
            }

            component.applyToEntity(entity, initialCompProps);
        });
        return entity;
    }
}

class PrefabRegistry {
    constructor(engine) {
        _defineProperty(this, '_prefabs', {});

        _defineProperty(this, '_engine', null);

        this._engine = engine;
    }

    deserialize(data) {
        const registered = this.get(data.name);

        if (registered) {
            return registered;
        }

        const prefab = new Prefab(data.name);
        let inherit;

        if (Array.isArray(data.inherit)) {
            inherit = data.inherit;
        } else if (typeof data.inherit === 'string') {
            inherit = [data.inherit];
        } else {
            inherit = [];
        }

        prefab.inherit = inherit.map((parent) => {
            const ref = this.get(parent);

            if (!ref) {
                console.warn(
                    `Prefab "${data.name}" cannot inherit from Prefab "${parent}" because is not registered yet! Prefabs must be registered in the right order.`
                );
                return parent;
            }

            return ref;
        });
        const comps = data.components || [];
        comps.forEach((componentData) => {
            if (typeof componentData === 'string') {
                const ckey = camelString(componentData);

                const clazz = this._engine._components.get(ckey);

                if (clazz) {
                    prefab.addComponent(new PrefabComponent(clazz));
                    return;
                }
            }

            if (typeof componentData === 'object') {
                const ckey = camelString(componentData.type);

                const clazz = this._engine._components.get(ckey);

                if (clazz) {
                    prefab.addComponent(
                        new PrefabComponent(
                            clazz,
                            componentData.properties,
                            componentData.overwrite
                        )
                    );
                    return;
                }
            }

            console.warn(
                `Unrecognized component reference "${componentData}" in prefab "${data.name}". Ensure the component is registered before the prefab.`
            );
        });
        return prefab;
    }

    register(data) {
        const prefab = this.deserialize(data);
        this._prefabs[prefab.name] = prefab;
    }

    get(name) {
        return this._prefabs[name];
    }

    create(world, name, properties = {}) {
        const prefab = this.get(name);

        if (!prefab) {
            console.warn(
                `Could not instantiate prefab "${name}" since it is not registered`
            );
            return;
        }

        const entity = world.createEntity();
        entity._qeligible = false;
        prefab.applyToEntity(entity, properties);
        entity._qeligible = true;

        entity._candidacy();

        return entity;
    }
}

class Component {
    get world() {
        return this.entity.world;
    }

    get allowMultiple() {
        return this.constructor.allowMultiple;
    }

    get keyProperty() {
        return this.constructor.keyProperty;
    }

    constructor(properties = {}) {
        Object.assign(this, this.constructor.properties, properties);
    }

    destroy() {
        this.entity.remove(this);
    }

    _onDestroyed() {
        this.onDestroyed();
        delete this.entity;
    }

    _onEvent(evt) {
        this.onEvent(evt);

        if (typeof this[evt.handlerName] === 'function') {
            this[evt.handlerName](evt);
        }
    }

    _onAttached(entity) {
        this.entity = entity;
        this.onAttached(entity);
    }

    serialize() {
        const ob = {};

        for (const key in this.constructor.properties) {
            ob[key] = this[key];
        }

        return ob;
    }

    onAttached(entity) {}

    onDestroyed() {}

    onEvent(evt) {}
}

_defineProperty(Component, 'allowMultiple', false);

_defineProperty(Component, 'keyProperty', null);

_defineProperty(Component, 'properties', {});

class EntityEvent {
    constructor(name, data = {}) {
        _defineProperty(this, 'data', {});

        _defineProperty(this, 'prevented', false);

        _defineProperty(this, 'handled', false);

        this.name = name;
        this.data = data;
        this.handlerName = camelString(`on ${this.name}`);
    }

    is(name) {
        return this.name === name;
    }

    handle() {
        this.handled = true;
        this.prevented = true;
    }

    prevent() {
        this.prevented = true;
    }
}

const ONE = 1n;
const subtractBit = (num, bit) => {
    return num & ~(1n << bit);
};
const addBit = (num, bit) => {
    return num | (ONE << bit);
};
const hasBit = (num, bit) => {
    return (num >> bit) % 2n !== 0n;
};
const bitIntersection = (n1, n2) => {
    return n1 & n2;
};

const attachComponent = (entity, component) => {
    const key = component._ckey;
    entity[key] = component;
    entity.components[key] = component;
};

const attachComponentKeyed = (entity, component) => {
    const key = component._ckey;

    if (!entity.components[key]) {
        entity[key] = {};
        entity.components[key] = {};
    }

    entity[key][component[component.keyProperty]] = component;
    entity.components[key][component[component.keyProperty]] = component;
};

const attachComponentArray = (entity, component) => {
    const key = component._ckey;

    if (!entity.components[key]) {
        entity[key] = [];
        entity.components[key] = [];
    }

    entity[key].push(component);
    entity.components[key].push(component);
};

const removeComponent = (entity, component) => {
    const key = component._ckey;
    delete entity[key];
    delete entity.components[key];
    entity._cbits = subtractBit(entity._cbits, component._cbit);

    entity._candidacy();
};

const removeComponentKeyed = (entity, component) => {
    const key = component._ckey;
    const keyProp = component[component.keyProperty];
    delete entity[key][keyProp];
    delete entity.components[key][keyProp];

    if (Object.keys(entity[key]).length <= 0) {
        delete entity[key];
        delete entity.components[key];
        entity._cbits = subtractBit(entity._cbits, component._cbit);

        entity._candidacy();
    }
};

const removeComponentArray = (entity, component) => {
    const key = component._ckey;
    const idx = entity[key].indexOf(component);
    entity[key].splice(idx, 1);
    entity.components[key].splice(idx, 1);

    if (entity[key].length <= 0) {
        delete entity[key];
        delete entity.components[key];
        entity._cbits = subtractBit(entity._cbits, component._cbit);

        entity._candidacy();
    }
};

const serializeComponent = (component) => {
    return component.serialize();
};

const serializeComponentArray = (arr) => {
    return arr.map(serializeComponent);
};

const serializeComponentKeyed = (ob) => {
    const ser = {};

    for (const k in ob) {
        ser[k] = serializeComponent(ob[k]);
    }

    return ser;
};

class Entity {
    constructor(world, id) {
        _defineProperty(this, '_cbits', 0n);

        _defineProperty(this, '_qeligible', true);

        this.world = world;
        this.id = id;
        this.components = {};
        this.isDestroyed = false;
    }

    _candidacy() {
        if (this._qeligible) {
            this.world._candidate(this);
        }
    }

    add(clazz, properties) {
        const component = new clazz(properties);

        if (component.keyProperty) {
            attachComponentKeyed(this, component);
        } else if (component.allowMultiple) {
            attachComponentArray(this, component);
        } else {
            attachComponent(this, component);
        }

        this._cbits = addBit(this._cbits, component._cbit);

        component._onAttached(this);

        this._candidacy();
    }

    has(clazz) {
        return hasBit(this._cbits, clazz.prototype._cbit);
    }

    remove(component) {
        if (component.keyProperty) {
            removeComponentKeyed(this, component);
        } else if (component.allowMultiple) {
            removeComponentArray(this, component);
        } else {
            removeComponent(this, component);
        }

        component._onDestroyed();
    }

    destroy() {
        for (const k in this.components) {
            const v = this.components[k];

            if (v instanceof Component) {
                this._cbits = subtractBit(this._cbits, v._cbit);

                v._onDestroyed();
            } else if (v instanceof Array) {
                for (const component of v) {
                    this._cbits = subtractBit(this._cbits, component._cbit);

                    component._onDestroyed();
                }
            } else {
                for (const component of Object.values(v)) {
                    this._cbits = subtractBit(this._cbits, component._cbit);

                    component._onDestroyed();
                }
            }

            delete this[k];
            delete this.components[k];
        }

        this._candidacy();

        this.world._destroyed(this.id);

        this.components = {};
        this.isDestroyed = true;
    }

    serialize() {
        const components = {};

        for (const k in this.components) {
            const v = this.components[k];

            if (v instanceof Component) {
                components[k] = serializeComponent(v);
            } else if (v instanceof Array) {
                components[k] = serializeComponentArray(v);
            } else {
                components[k] = serializeComponentKeyed(v);
            }
        }

        return {
            id: this.id,
            ...components,
        };
    }

    fireEvent(name, data) {
        const evt = new EntityEvent(name, data);

        for (const key in this.components) {
            const v = this.components[key];

            if (v instanceof Component) {
                v._onEvent(evt);

                if (evt.prevented) {
                    return evt;
                }
            } else if (v instanceof Array) {
                for (let i = 0; i < v.length; i++) {
                    v[i]._onEvent(evt);

                    if (evt.prevented) {
                        return evt;
                    }
                }
            } else {
                for (const component of Object.values(v)) {
                    component._onEvent(evt);

                    if (evt.prevented) {
                        return evt;
                    }
                }
            }
        }

        return evt;
    }
}

class Query {
    constructor(world, filters) {
        _defineProperty(this, '_cache', []);

        _defineProperty(this, '_onAddListeners', []);

        _defineProperty(this, '_onRemoveListeners', []);

        this._world = world;
        const any = filters.any || [];
        const all = filters.all || [];
        const none = filters.none || [];
        this._any = any.reduce((s, c) => {
            return addBit(s, c.prototype._cbit);
        }, 0n);
        this._all = all.reduce((s, c) => {
            return addBit(s, c.prototype._cbit);
        }, 0n);
        this._none = none.reduce((s, c) => {
            return addBit(s, c.prototype._cbit);
        }, 0n);
        this.refresh();
    }

    onEntityAdded(fn) {
        this._onAddListeners.push(fn);
    }

    onEntityRemoved(fn) {
        this._onRemoveListeners.push(fn);
    }

    has(entity) {
        return this.idx(entity) >= 0;
    }

    idx(entity) {
        return this._cache.indexOf(entity);
    }

    matches(entity) {
        const bits = entity._cbits;
        const any = this._any === 0n || bitIntersection(bits, this._any) > 0;

        const all = bitIntersection(bits, this._all) === this._all;

        const none = bitIntersection(bits, this._none) === 0n;
        return any && all && none;
    }

    candidate(entity) {
        const idx = this.idx(entity);
        const isTracking = idx >= 0;

        if (!entity.isDestroyed && this.matches(entity)) {
            if (!isTracking) {
                this._cache.push(entity);

                this._onAddListeners.forEach((cb) => cb(entity));
            }

            return true;
        }

        if (isTracking) {
            this._cache.splice(idx, 1);

            this._onRemoveListeners.forEach((cb) => cb(entity));
        }

        return false;
    }

    refresh() {
        this._cache = [];

        this._world._entities.forEach((entity) => {
            this.candidate(entity);
        });
    }

    get() {
        return this._cache;
    }
}

class World {
    constructor(engine) {
        _defineProperty(this, '_id', 0);

        _defineProperty(this, '_queries', []);

        _defineProperty(this, '_entities', new Map());

        this.engine = engine;
    }

    createId() {
        return ++this._id + Math.random().toString(36).substr(2, 9);
    }

    getEntity(id) {
        return this._entities.get(id);
    }

    getEntities() {
        return this._entities.values();
    }

    createEntity(id = this.createId()) {
        const entity = new Entity(this, id);

        this._entities.set(id, entity);

        return entity;
    }

    destroyEntity(id) {
        const entity = this.getEntity(id);

        if (entity) {
            entity.destroy();
        }
    }

    destroyEntities() {
        this._entities.forEach((entity) => {
            entity.destroy();
        });
    }

    destroy() {
        this.destroyEntities();
        this._id = 0;
        this._queries = [];
        this._entities = new Map();
    }

    createQuery(filters) {
        const query = new Query(this, filters);

        this._queries.push(query);

        return query;
    }

    createPrefab(name, properties = {}) {
        return this.engine._prefabs.create(this, name, properties);
    }

    serialize(entities) {
        const json = [];
        const list = entities || this._entities;
        list.forEach((e) => {
            json.push(e.serialize());
        });
        return {
            entities: json,
        };
    }

    deserialize(data) {
        for (const entityData of data.entities) {
            this._createOrGetEntityById(entityData.id);
        }

        for (const entityData of data.entities) {
            this._deserializeEntity(entityData);
        }
    }

    _createOrGetEntityById(id) {
        return this.getEntity(id) || this.createEntity(id);
    }

    _deserializeEntity(data) {
        const { id, ...components } = data;

        const entity = this._createOrGetEntityById(id);

        entity._qeligible = false;
        Object.entries(components).forEach(([key, value]) => {
            const type = camelString(key);

            const def = this.engine._components.get(type);

            if (def.allowMultiple) {
                Object.values(value).forEach((d) => {
                    entity.add(def, d);
                });
            } else {
                entity.add(def, value);
            }
        });
        entity._qeligible = true;

        entity._candidacy();
    }

    _candidate(entity) {
        this._queries.forEach((q) => q.candidate(entity));
    }

    _destroyed(id) {
        return this._entities.delete(id);
    }
}

class Engine {
    constructor() {
        _defineProperty(this, '_components', new ComponentRegistry());

        _defineProperty(this, '_prefabs', new PrefabRegistry(this));
    }

    registerComponent(clazz) {
        this._components.register(clazz);
    }

    registerPrefab(data) {
        this._prefabs.register(data);
    }

    createWorld() {
        return new World(this);
    }

    destroyWorld(world) {
        world.destroy();
    }
}


//# sourceMappingURL=index.js.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var wglt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/wglt.js");
/* harmony import */ var wglt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wglt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ecs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ecs */ "./src/ecs.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ai */ "./src/ai.js");
/* harmony import */ var _terminal_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terminal/ui */ "./src/terminal/ui.js");





//declaring variables with no better homes, yet.
__webpack_require__.g.locationId = {}
var golemancer = {
    golems: {
        count: 10,
        cost: 10,
        damage: 1,
        damageCost: 20,
        attackSpeed: 1,
        attackSpeedCost: 100
    },
    currency: {
        parts: 100
    },
    //0:line, 1:box, 2:draw
    placement: {
        index: 0,
    }
}
//temporary updating spot
//TODO: Move these values into the entity stats
document.getElementById("golems").innerHTML = golemancer.golems.count
document.getElementById("golemCost").innerHTML = golemancer.golems.cost
document.getElementById("Damage").innerHTML = golemancer.golems.damage
document.getElementById("AttackSpeed").innerHTML = golemancer.golems.attackSpeed
document.getElementById("Parts").innerHTML = golemancer.currency.parts
const terminalx = 82
const terminaly = 52
//creating the map in "canvas" width = 80, height = 50
const terminal = new wglt__WEBPACK_IMPORTED_MODULE_0__.Terminal(document.querySelector('canvas'), terminalx, terminaly)

//WGLT leftovers. Setting the whole map as explored and visible to the player
for (let y = 0; y < terminal.height; y++) {
    for (let x = 0; x < terminal.width; x++) {
        terminal.grid[y][x].visible = true
        terminal.grid[y][x].explored = true
    }
}

//creating world to contain entities in order to enable query
__webpack_require__.g.world = _ecs__WEBPACK_IMPORTED_MODULE_1__.default.createWorld()

//terminal border
//top
for( let i = 1; i <terminalx - 1; i++) {
    let structure = world.createPrefab("Horizontal")
    structure.position.x = i
    locationId[structure.position.x + "," + structure.position.y] = structure.id

}
//left
for( let i = 1; i < terminaly - 1; i++) {
    let structure = world.createPrefab("Vertical")
    structure.position.y = i
    locationId[structure.position.x + "," + structure.position.y] = structure.id
}
//bottom
for( let i = 1; i <terminalx - 1; i++) {
    let structure = world.createPrefab("Horizontal")
    structure.position.x = i
    structure.position.y = terminaly - 1
    locationId[structure.position.x + "," + structure.position.y] = structure.id
}
//right
for( let i = 1; i <terminaly - 1; i++) {
    let structure = world.createPrefab("Vertical")
    structure.position.y = i
    structure.position.x = terminalx - 1
    locationId[structure.position.x + "," + structure.position.y] = structure.id
}
world.createPrefab("TopLeft", {position:{x: 0,y: 0}})
world.createPrefab("TopRight", {position:{x: terminalx-1,y: 0}})
world.createPrefab("BottomLeft", {position:{x: 0,y: terminaly-1}})
world.createPrefab("BottomRight", {position:{x: terminalx-1,y: terminaly-1}})


//player = human test pilot
const playerx = 1
const playery = 1
for (let i = 0; i < playerx; i++) {
    for (let j = 0; j < playery; j++) {
    let player = world.createPrefab("Human")
    player.position.x = Math.floor(80/2-playerx/2+i+1)
    player.position.y = 40+j
    locationId[player.position.x + "," + player.position.y] = player.id
    }
}
//Array of all zombie spawn points to save processing power. 1->750
const spawnZone = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477,478,479,480,481,482,483,484,485,486,487,488,489,490,491,492,493,494,495,496,497,498,499,500,501,502,503,504,505,506,507,508,509,510,511,512,513,514,515,516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,531,532,533,534,535,536,537,538,539,540,541,542,543,544,545,546,547,548,549,550,551,552,553,554,555,556,557,558,559,560,561,562,563,564,565,566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,594,595,596,597,598,599,600,601,602,603,604,605,606,607,608,609,610,611,612,613,614,615,616,617,618,619,620,621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,638,639,640,641,642,643,644,645,646,647,648,649,650,651,652,653,654,655,656,657,658,659,660,661,662,663,664,665,666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,684,685,686,687,688,689,690,691,692,693,694,695,696,697,698,699,700,701,702,703,704,705,706,707,708,709,710,711,712,713,714,715,716,717,718,719,720,721,722,723,724,725,726,727,728,729,730,731,732,733,734,735,736,737,738,739,740,741,742,743,744,745,746,747,748,749,750]
var waveNum = 0

 //query array
__webpack_require__.g.query = {
    all : world.createQuery({
        all: [],
    }),
    enemies : world.createQuery({
        all: [_components__WEBPACK_IMPORTED_MODULE_2__.Enemy],
    }),
    allies : world.createQuery({
        all: [_components__WEBPACK_IMPORTED_MODULE_2__.Ally],
    }),
    action : world.createQuery({
        all: [_components__WEBPACK_IMPORTED_MODULE_2__.Action],
    })
}

//things to do when something dies
function killEntity(entity){
    //TODO: Include more in-depth on death effects such as currency generation
    if (entity.description.name == "Zombie") {
        golemancer.currency.parts += 5
    }
    document.getElementById("Parts").innerHTML = golemancer.currency.parts
    delete locationId[entity.position.x + "," + entity.position.y]
    entity.destroy()
}

//clicking the buy golem button, adjusts costs and counters. Cost = 10*golems^1.1
__webpack_require__.g.onBuyGolemClick = function() {
    if (golemancer.currency.parts >= golemancer.golems.cost) {
        golemancer.golems.count++
        golemancer.currency.parts -= golemancer.golems.cost
        golemancer.golems.cost = Math.floor(10*Math.pow(1.1, golemancer.golems.count))
        document.getElementById("golems").innerHTML = golemancer.golems.count
        document.getElementById("golemCost").innerHTML = golemancer.golems.cost
        document.getElementById("Parts").innerHTML = golemancer.currency.parts
    }
}

__webpack_require__.g.onBuyDamageClick = function() {
    if (golemancer.currency.parts >= golemancer.golems.damageCost) {
        golemancer.golems.damage++
        golemancer.currency.parts -= golemancer.golems.damageCost
        golemancer.golems.damageCost = Math.floor(20*Math.pow(1.1, golemancer.golems.damage))
        document.getElementById("Damage").innerHTML = golemancer.golems.damage
        document.getElementById("damageCost").innerHTML = golemancer.golems.damageCost
        document.getElementById("Parts").innerHTML = golemancer.currency.parts
    }
}
__webpack_require__.g.onBuyAttackSpeedClick = function() {
    if (golemancer.currency.parts >= golemancer.golems.attackSpeedCost) {
        golemancer.golems.attackSpeed++
        golemancer.currency.parts -= golemancer.golems.attackSpeedCost
        golemancer.golems.attackSpeedCost = Math.floor(100*Math.pow(1.1, golemancer.golems.attackSpeed))
        document.getElementById("AttackSpeed").innerHTML = golemancer.golems.attackSpeed
        document.getElementById("attackSpeedCost").innerHTML = golemancer.golems.attackSpeedCost
        document.getElementById("Parts").innerHTML = golemancer.currency.parts
    }
}
//Collective of all enemy AI
//AI needs to have targetting, attacking, moving
function enemyAI(entityEnemy, time) {
    if (entityEnemy.description.name == "Zombie") {
        //action available
        if (time - entityEnemy.action.last >= entityEnemy.action.adjusted) {
            //target available
            if (world.getEntity(entityEnemy.combat.target)) {
                //target in range
                if (Math.abs(entityEnemy.combat.x - entityEnemy.position.x) <= entityEnemy.combat.range && Math.abs(entityEnemy.combat.y - entityEnemy.position.y) <= entityEnemy.combat.range) {
                    //in range and don't move
                } else {
                    //zombie targets nearest ally, 5sec cooldown. Stops tunnel-visioning but slow to respond
                    _ai__WEBPACK_IMPORTED_MODULE_3__.entityAI.target.nearest(entityEnemy, "allies", 5)
                    _ai__WEBPACK_IMPORTED_MODULE_3__.entityAI.movement.horde(entityEnemy)    
                }
            } else {
                //zombie targets nearest ally, .1sec cooldown
                _ai__WEBPACK_IMPORTED_MODULE_3__.entityAI.target.nearest(entityEnemy, "allies", .1)      
            }
                //adjusted action speed = action speed + (action speed - (time since last attack))
                //Any action above or below the action speed will adjust the next action accordingly to keep action speed on average
                //i.e. 1200ms since last action == next action is 800ms instead of 1000ms
                //multiplier is for speeding up actions. i.e. velocity of 2 = move twice as fast. 1000ms/2=500ms cooldown
                let multiplier = 1
                if (entityEnemy.has(_components__WEBPACK_IMPORTED_MODULE_2__.hasMoved)) {
                    multiplier = entityEnemy.movement.velocity
                    entityEnemy.remove(entityEnemy.hasMoved)
                }
                    entityEnemy.action.adjusted = (entityEnemy.action.speed + entityEnemy.action.speed - (time - entityEnemy.action.last))/multiplier
                    entityEnemy.action.last = time
            }
        }
    }
function allyAI(entityAlly, time) {
    if (entityAlly.description.name == "Human") {
        //action available
        if (time - entityAlly.action.last >= entityAlly.action.adjusted) { 
            //get a target
            let target = world.getEntity(entityAlly.combat.target)
            if (!target || Math.abs(entityAlly.position.x - target.position.x) > entityAlly.combat.range  && Math.abs(entityAlly.position.y - target.position.y) > entityAlly.combat.range) {
                if(target) {target.appearance.color = wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GREEN}
                _ai__WEBPACK_IMPORTED_MODULE_3__.entityAI.target.adjacent(entityAlly, "enemies", 0)
            //have a target
            } else {
                target.appearance.color = wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.LIGHT_RED
                target.fireEvent("damage-taken", {damage:golemancer.golems.damage})
                if (target.health.hp <= 0) {
                    killEntity(target)
                    entityAlly.combat.target = ""
                    entityAlly.combat.x = 0
                    entityAlly.combat.y = 0
                }

            }
                //target available
                if (world.getEntity(entityAlly.combat.target)) {
                    //if adjacent to target
                }
                //adjusted action speed = action speed + (action speed - (time since last attack))
                //Any action above or below the action speed will adjust the next action accordingly to keep action speed on average
                //i.e. 1200ms since last action == next action is 800ms instead of 1000ms
                //multiplier is for speeding up actions. i.e. velocity of 2 = move twice as fast. 1000ms/2=500ms cooldown
                let multiplier = 1
                if (entityAlly.has(_components__WEBPACK_IMPORTED_MODULE_2__.hasMoved)) {
                    multiplier = entityAlly.movement.velocity
                    entityAlly.remove(entityAlly.hasMoved)
                }
                //TODO:move golemancer into entity stats
                entityAlly.action.adjusted = (1000/golemancer.golems.attackSpeed + 1000/golemancer.golems.attackSpeed - (time - entityAlly.action.last))/multiplier
                //entityAlly.action.adjusted = (entityAlly.action.speed + entityAlly.action.speed - (time - entityAlly.action.last))/multiplier
                entityAlly.action.last = time
            }
    }
}
//query all and do their next action. Attack else move
//TODO: Movement for velocity > 1. Increment through each step to determine if next step is clear/adjacent to target
//TODO: Maybe randomize the direction zombies decide to go when blocked.
function doAction(time) {
    query.action.get().forEach((entity) => {
        if (entity.has(_components__WEBPACK_IMPORTED_MODULE_2__.Enemy)) {
            enemyAI(entity, time)
        } else if (entity.has(_components__WEBPACK_IMPORTED_MODULE_2__.Ally)) {
            allyAI(entity, time)
        }
        
    })
}
    //renderLoop = things to do every loop.
let mousePath = []
let removeBool = false
let mouseStart = {
    x: 0,
    y: 0
}
terminal.update = function() {
    let time = performance.now()
    golemancer.placement.index = document.getElementById("placement").selectedIndex
    //clears screen
    this.clear()
    //sets everything to white on black
    this.fillRect(0, 0, this.width, this.height, 0, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.WHITE, wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.BLACK)
    //checks all entities if action is available, and then do actions
    doAction(time)
    //drawing a path while mous click is down

    //0: left click,2: right click, 1: middle click
    //as soon as the mouse is clicked down
    if (this.mouse.buttons[0].downCount === 1) {
        //sets start of path to mouse coordinates
        mouseStart.x = this.mouse.x
        mouseStart.y = this.mouse.y
    }
    //left mouse is being held down
    if (this.mouse.buttons[0].downCount > 1) {
        mousePath = _terminal_ui__WEBPACK_IMPORTED_MODULE_4__.ui.placement(this, mouseStart, golemancer.golems.count - query.allies.get().length, mousePath, golemancer.placement.index, removeBool)
    }
    //left mouse goes up
    if (this.mouse.buttons[0].upCount === 1 && mousePath.length > 0 && !removeBool) {
        //line placement
        if (golemancer.placement.index === 0 || golemancer.placement.index === 2) {
            let placeableGolems = golemancer.golems.count - query.allies.get().length
            for(let j = 0; j < placeableGolems; j++) {
                if (mousePath[j]) {
                    if (mousePath[j].y < 30) {
                        placeableGolems++
                        continue
                    } else if (locationId[mousePath[j].x + "," + mousePath[j].y] != undefined) {
                        placeableGolems++
                        continue
                    }
                    let entity = world.createPrefab("Human")
                    entity.position.x = mousePath[j].x
                    entity.position.y = mousePath[j].y
                    locationId[entity.position.x + "," + entity.position.y] = entity.id
                } else {
                    break
                }
            }
            mousePath = []
        //box placement
        } else if (golemancer.placement.index === 1) {
            //make a list of the spawn points
            let spawnList = []
            let lineCount = 0
            let placeableGolems = golemancer.golems.count - query.allies.get().length
            //bottom right box
            if (this.mouse.x-mouseStart.x > 0 && this.mouse.y-mouseStart.y > 0) {
                for (let i = placeableGolems;i > 0 && lineCount < (mousePath[1].y-mousePath[0].y); i = i-(mousePath[1].x-mousePath[0].x)) {
                    for (let xi = mousePath[0].x; xi < mousePath[0].x + Math.min(i, mousePath[1].x-mousePath[0].x); xi++) {
                        spawnList.push({x: xi, y: mousePath[0].y+lineCount})
                        }    
                    lineCount++
                }
            //bottom left box
            } else if (this.mouse.x-mouseStart.x < 0 && this.mouse.y-mouseStart.y > 0) {
                for (let i = placeableGolems;i > 0 && lineCount < (mousePath[1].y-mousePath[0].y); i = i-((mousePath[0].x-mousePath[1].x)+1)) {
                    for (let xi = mousePath[1].x+(((mousePath[0].x-mousePath[1].x)+1)-(Math.min(i, (mousePath[0].x-mousePath[1].x)+1))); xi < (mousePath[1].x+(((mousePath[0].x-mousePath[1].x)+1)-(Math.min(i, (mousePath[0].x-mousePath[1].x)+1)))) + (Math.min(i, (mousePath[0].x-mousePath[1].x)+1)); xi++) {
                        spawnList.push({x: xi, y: mousePath[0].y+lineCount})
                    }    
                    lineCount++
                }
            //top left box
            } else if (this.mouse.x-mouseStart.x < 0 && this.mouse.y-mouseStart.y < 0) {
                for (let i = placeableGolems;i > 0 && lineCount < (mouseStart.y-this.mouse.y); i = i-((mouseStart.x-this.mouse.x)+1)) {
                    for (let xi = mousePath[1].x+(((mousePath[0].x-mousePath[1].x)+1)-(Math.min(i, (mousePath[0].x-mousePath[1].x)+1))); xi < (mousePath[1].x+(((mousePath[0].x-mousePath[1].x)+1)-(Math.min(i, (mousePath[0].x-mousePath[1].x)+1)))) + (Math.min(i, (mousePath[0].x-mousePath[1].x)+1)); xi++) {
                        spawnList.push({x: xi, y: mousePath[0].y-lineCount})
                    }    
                    lineCount++
                }
            //top right box
            } else if (this.mouse.x-mouseStart.x > 0 && this.mouse.y-mouseStart.y < 0) {
                for (let i = placeableGolems;i > 0 && lineCount < (mouseStart.y-this.mouse.y); i = i-(this.mouse.x-mouseStart.x)) {
                    for (let xi = mousePath[0].x; xi < mousePath[0].x + Math.min(i, mousePath[1].x-mousePath[0].x); xi++) {
                        spawnList.push({x: xi, y: mousePath[0].y-lineCount})
                    }    
                    lineCount++
                }
            }
            //make new entities for the rest
            for (let j = 0; j < golemancer.golems.count && spawnList[j] && locationId[spawnList[j].x + "," + spawnList[j].y] == undefined; j++) {
                if (spawnList[j].y > 29) {
                    let entity = world.createPrefab("Human")
                    entity.position.x = spawnList[j].x
                    entity.position.y = spawnList[j].y
                    locationId[entity.position.x + "," + entity.position.y] = entity.id
                }
            }
            mousePath = []
        }
    }
    if (this.mouse.buttons[2].downCount === 1) {
        //sets start of path to mouse coordinates
        mouseStart.x = this.mouse.x
        mouseStart.y = this.mouse.y
    }
    //right mouse is being held down
    if (this.mouse.buttons[2].downCount > 1) {
        removeBool = true
        mousePath = _terminal_ui__WEBPACK_IMPORTED_MODULE_4__.ui.placement(this, mouseStart, golemancer.golems.count - query.allies.get().length, mousePath, golemancer.placement.index, removeBool)
    }
    //right mouse up
    if (this.mouse.buttons[2].upCount === 1 && mousePath.length > 0 && removeBool) {
        //line remove
        if (golemancer.placement.index === 0 || golemancer.placement.index === 2) {
            for(let j = 0; j < mousePath.length; j++) {
                let entity = world.getEntity(locationId[mousePath[j].x + "," + mousePath[j].y])
                if (entity && entity.has(_components__WEBPACK_IMPORTED_MODULE_2__.Ally)) {
                    killEntity(entity)
                }
            }
        }else if (golemancer.placement.index === 1) {
                let mouseStart = mousePath[0]
                let mouseEnd = mousePath[1]
            for (let i = Math.min(mouseStart.x, mouseEnd.x); i < Math.max(mouseStart.x, mouseEnd.x); i++) {
                for (let j = Math.min(mouseStart.y, mouseEnd.y); j < Math.max(mouseStart.y, mouseEnd.y); j++) {
                    let entity = world.getEntity(locationId[i + "," + j])
                    if (entity && entity.has(_components__WEBPACK_IMPORTED_MODULE_2__.Ally)) {
                        killEntity(entity)
                    }
                }
            }
        }
        mousePath = []
        removeBool = false
    }
//zombie wave spawning
//randomly generate number between 0 (0,0 of spawn zone) and n (max x, max y of spawn zone)
//divide number by x length. Whole numbers is y, modulo is x.
//x: 11-60, y: 1-15
//spawn zombies if no zombies
if (query.enemies.get().length <= 0) {
    let spawnList = []
    waveNum++
    let tempSpawnZone = spawnZone
    let zombieCount = Math.min(750, Math.pow(waveNum, 2))
    for (let i = 0; i < zombieCount; i++) {
        let spawnPoint = tempSpawnZone[Math.floor(Math.random() * (tempSpawnZone.length - 1))]

        spawnList.push(spawnPoint)
    }
    for(let i = 0;i < spawnList.length;i++) {

        let zombiex = spawnList[i] % 50 + 11
        let zombiey = Math.ceil(spawnList[i] / 50)
        let zombie = world.createPrefab("Zombie")
        zombie.position.x = zombiex
        zombie.position.y = zombiey
        locationId[zombie.position.x + "," + zombie.position.y] = zombie.id
    }
}


//start drawing stuff

    //drawing UI
    //draw spawn border
    this.drawHLine(1, 29, 80, "-", wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
    //Drawing test pilot player and zombie
    query.all.get().forEach((entity) => {
        if (!entity.isDestroyed) {

            this.drawChar(entity.position.x, entity.position.y, entity.appearance.char, entity.appearance.color), wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.BLACK;  
    }
    })
    //drawing FPS
    this.drawString(1,1, String(Math.round(this.averageFps*100/100)))
    //if path exists, change cell backgrounds to yellow
    //line placement mode and draw placement mode

    //TODO: Move this into placement.js to be in line with box drawing
    if ((golemancer.placement.index === 0 || golemancer.placement.index === 2) && mousePath.length > 0 && !removeBool) {
        let placeableGolems = golemancer.golems.count - query.allies.get().length
        for (let i=0;i < mousePath.length; i++) {
            let cell = this.getCell(mousePath[i].x, mousePath[i].y)
            if (cell) {
                if (i >= placeableGolems) {
                    cell.setBackground(wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
                } else if (locationId[mousePath[i].x + "," + mousePath[i].y]) {
                    cell.setBackground(wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
                    placeableGolems++
                } else if (mousePath[i].y < 30) {
                    cell.setBackground(wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
                    placeableGolems++

                } else {
                    cell.setBackground(wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.YELLOW)
                }
            }
        }
    } else if ((golemancer.placement.index === 0 || golemancer.placement.index === 2) && mousePath.length > 0 && removeBool) {
        for (let i=0;i < mousePath.length; i++) {
            let cell = this.getCell(mousePath[i].x, mousePath[i].y)
            if (cell) {
                if (locationId[mousePath[i].x + "," + mousePath[i].y]) {
                    let entity = world.getEntity(locationId[mousePath[i].x + "," + mousePath[i].y])
                    if (entity.has(_components__WEBPACK_IMPORTED_MODULE_2__.Ally)) {
                        cell.setBackground(wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.YELLOW)
                    } else {
                        cell.setBackground(wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
                    }
                } else {
                    cell.setBackground(wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.DARK_GRAY)
                }
            }
        }
    }

    //mouse debug
    this.drawString(1,2, "mouse x: " + String(this.mouse.x))
    this.drawString(1,3, "mouse y: " + String(this.mouse.y))
//    this.drawString(1,4, "mouse down: " + String(this.mouse.buttons[0].down))
//    this.drawString(1,5, "mouse downCount: " + String(this.mouse.buttons[0].downCount))
//    this.drawString(1,6, "mouse upCount: " + String(this.mouse.buttons[0].upCount))
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE1BQU0sR0FBRyxFQUFFO0FBQzFDO0FBQ0E7QUFDQSwwQkFBMEIsTUFBTSxHQUFHLEVBQUU7QUFDckM7QUFDQTs7QUFFQSwyQkFBMkI7O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsZ0NBQWdDLGNBQWM7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHNDQUFzQztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG9CQUFvQjs7QUFFcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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QUNBO0FBQ0EsdUNBQXVDLGtEQUFxQjtBQUM1RCxrQkFBa0I7QUFDbEIsdUNBQXVDLGtEQUFxQjtBQUM1RDtBQUNBLGtCQUFrQjtBQUNsQix1Q0FBdUMsa0RBQXFCO0FBQzVEO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsdUNBQXVDLCtDQUFrQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04scUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyw2Q0FBSTtBQUN2QywyQ0FBMkMsK0NBQWtCO0FBQzdELHNCQUFzQjtBQUN0QiwyQ0FBMkMsa0RBQXFCO0FBQ2hFO0FBQ0Esa0JBQWtCO0FBQ2xCLHVDQUF1QyxrREFBcUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29sZW1hbmNlci8uL25vZGVfbW9kdWxlcy93Z2x0L2Rpc3Qvd2dsdC5qcyIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyLy4vc3JjL2FpLmpzIiwid2VicGFjazovL2dvbGVtYW5jZXIvLi9zcmMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyLy4vc3JjL2Vjcy5qcyIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyLy4vc3JjL2VudGl0aWVzLmpzIiwid2VicGFjazovL2dvbGVtYW5jZXIvLi9zcmMvdGVybWluYWwvcGxhY2VtZW50LmpzIiwid2VicGFjazovL2dvbGVtYW5jZXIvLi9zcmMvdGVybWluYWwvdWkuanMiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci8uL25vZGVfbW9kdWxlcy9nZW90aWMvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dvbGVtYW5jZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dvbGVtYW5jZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvbGVtYW5jZXIvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24odCxpKXtcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWkoKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxpKTpcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy53Z2x0PWkoKTp0LndnbHQ9aSgpfShnbG9iYWxUaGlzLChmdW5jdGlvbigpe3JldHVybigoKT0+e1widXNlIHN0cmljdFwiO3ZhciB0PXs2MTI6KHQsaSxlKT0+e2xldCBzO2UucihpKSxlLmQoaSx7QmxlbmRNb2RlOigpPT5zLENlbGw6KCk9PkUsQ2hhcnM6KCk9PmMsQ29sb3JzOigpPT5BLENvbnNvbGU6KCk9PkssREVGQVVMVF9GT05UOigpPT5WLERlZmF1bHREaWFsb2dSZW5kZXJlcjooKT0+dixEaWFsb2c6KCk9PmIsRGlhbG9nU3RhdGU6KCk9PlMsRm9udDooKT0+TyxGb3ZPY3RhbnRzOigpPT5nLEZvdlF1YWRyYW50czooKT0+TixHVUk6KCk9PkksS2V5Ym9hcmQ6KCk9PngsS2V5czooKT0+UCxNZXNzYWdlRGlhbG9nOigpPT5ILE1vdXNlOigpPT5aLFBvaW50OigpPT5SLFJORzooKT0+aHQsUmVjdDooKT0+QyxTZWxlY3REaWFsb2c6KCk9Pk0sVGVybWluYWw6KCk9PmF0LGNvbXB1dGVQYXRoOigpPT5pdCxmaXhCb3hDZWxsczooKT0+Xyxmcm9tSHN2OigpPT5kLGZyb21SZ2I6KCk9PmEsZ2V0Rm92UXVhZHJhbnQ6KCk9PkwsbG9hZEltYWdlOigpPT5YLGxvYWRJbWFnZTJ4OigpPT5ZfSksZnVuY3Rpb24odCl7dFt0Lk5vbmU9MF09XCJOb25lXCIsdFt0LkJsZW5kPTFdPVwiQmxlbmRcIix0W3QuQWRkPTJdPVwiQWRkXCJ9KHN8fChzPXt9KSk7Y29uc3Qgcj1bWzEsMCwxLDBdLFsxLDAsMSwxXSxbMSwwLDEsMl0sWzIsMCwyLDFdLFswLDAsMiwxXSxbMCwwLDEsMl0sWzIsMCwyLDJdLFsyLDAsMiwwXSxbMCwwLDIsMl0sWzIsMCwwLDJdLFsyLDAsMCwxXSxbMSwwLDAsMl0sWzAsMCwxLDFdLFsxLDEsMCwwXSxbMSwxLDAsMV0sWzAsMSwxLDFdLFsxLDEsMSwwXSxbMCwxLDAsMV0sWzEsMSwxLDFdLFsxLDIsMSwwXSxbMiwxLDIsMF0sWzIsMiwwLDBdLFswLDIsMiwwXSxbMiwyLDAsMl0sWzAsMiwyLDJdLFsyLDIsMiwwXSxbMCwyLDAsMl0sWzIsMiwyLDJdLFsxLDIsMCwyXSxbMiwxLDAsMV0sWzAsMiwxLDJdLFswLDEsMiwxXSxbMiwxLDAsMF0sWzEsMiwwLDBdLFswLDIsMSwwXSxbMCwxLDIsMF0sWzIsMSwyLDFdLFsxLDIsMSwyXSxbMSwwLDAsMV0sWzAsMSwxLDBdXTtmdW5jdGlvbiBoKHQsaSxlKXtjb25zdCBzPXQuZ2V0Q2hhckNvZGUoaSxlKTtyZXR1cm4gdm9pZCAwIT09cyYmcz49MTc5JiZzPD0yMTh9ZnVuY3Rpb24gbyh0LGksZSxzKXtpZihpPDB8fGU8MHx8aT49dC53aWR0aHx8ZT49dC5oZWlnaHQpcmV0dXJuIDA7Y29uc3QgaD10LmdldENoYXJDb2RlKGksZSk7cmV0dXJuIHZvaWQgMD09PWh8fGg8MTc5fHxoPjIxOD8wOnJbaC0xNzldW3NdfWZ1bmN0aW9uIG4odCxpLGUscyl7Zm9yKGxldCBoPTA7aDxyLmxlbmd0aDtoKyspe2NvbnN0IG89cltoXTtpZihvWzBdPT09dCYmb1sxXT09PWkmJm9bMl09PT1lJiZvWzNdPT09cylyZXR1cm4gMTc5K2h9cmV0dXJuIDB9ZnVuY3Rpb24gXyh0KXtmb3IobGV0IGk9MDtpPHQuaGVpZ2h0O2krKylmb3IobGV0IGU9MDtlPHQud2lkdGg7ZSsrKWlmKGgodCxlLGkpKXtsZXQgcz1vKHQsZSxpLTEsMikscj1vKHQsZSsxLGksMyksaD1vKHQsZSxpKzEsMCksXz1vKHQsZS0xLGksMSk7cz4wJiYwPT09ciYmMD09PWgmJjA9PT1fP2g9czowPT09cyYmcj4wJiYwPT09aCYmMD09PV8/Xz1yOjA9PT1zJiYwPT09ciYmaD4wJiYwPT09Xz9zPWg6MD09PXMmJjA9PT1yJiYwPT09aCYmXz4wJiYocj1fKSxfPjAmJnI+MCYmKF89cj1NYXRoLm1heChfLHIpKSxzPjAmJmg+MCYmKHM9aD1NYXRoLm1heChzLGgpKTtjb25zdCBhPW4ocyxyLGgsXyk7aWYoKHN8fHJ8fGh8fF8pJiYhKGE+PTE3OSYmYTw9MjE4KSl0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGNoYXIgY29kZSEgKHVwPVwiK3MrXCIsIHJpZ2h0PVwiK3IrXCIsIGRvd249XCIraCtcIiwgbGVmdD1cIitfK1wiKVwiKTt0LmRyYXdDaGFyKGUsaSxhKX19ZnVuY3Rpb24gYSh0LGksZSxzKXtyZXR1cm4gdm9pZCAwPT09cyYmKHM9MjU1KSwodDw8MjQpKyhpPDwxNikrKGU8PDgpK3N9ZnVuY3Rpb24gZCh0LGksZSxzKXtjb25zdCByPTYqdHwwLGg9Nip0LXIsbz1lKigxLWkpLG49ZSooMS1oKmkpLF89ZSooMS0oMS1oKSppKTtsZXQgZCxBLGw7c3dpdGNoKHIlNil7Y2FzZSAwOmQ9ZSxBPV8sbD1vO2JyZWFrO2Nhc2UgMTpkPW4sQT1lLGw9bzticmVhaztjYXNlIDI6ZD1vLEE9ZSxsPV87YnJlYWs7Y2FzZSAzOmQ9byxBPW4sbD1lO2JyZWFrO2Nhc2UgNDpkPV8sQT1vLGw9ZTticmVhaztjYXNlIDU6ZD1lLEE9byxsPW47YnJlYWs7ZGVmYXVsdDpkPTAsQT0wLGw9MH1yZXR1cm4gdm9pZCAwPT09cyYmKHM9MSksYSgyNTUqZHwwLDI1NSpBfDAsMjU1Kmx8MCwyNTUqc3wwKX1jb25zdCBBPXtCTEFDSzphKDAsMCwwKSxXSElURTphKDI1NSwyNTUsMjU1KSxMSUdIVF9HUkFZOmEoMTcwLDE3MCwxNzApLERBUktfR1JBWTphKDg1LDg1LDg1KSxZRUxMT1c6YSgyNTUsMjU1LDg1KSxCUk9XTjphKDE3MCw4NSwwKSxMSUdIVF9SRUQ6YSgyNTUsODUsODUpLERBUktfUkVEOmEoMTcwLDAsMCksTElHSFRfR1JFRU46YSg4NSwyNTUsODUpLERBUktfR1JFRU46YSgwLDE3MCwwKSxMSUdIVF9DWUFOOmEoODUsMjU1LDI1NSksREFSS19DWUFOOmEoMCwxNzAsMTcwKSxMSUdIVF9CTFVFOmEoODUsODUsMjU1KSxEQVJLX0JMVUU6YSgwLDAsMTcwKSxMSUdIVF9NQUdFTlRBOmEoMjU1LDg1LDI1NSksREFSS19NQUdFTlRBOmEoMTcwLDAsMTcwKSxPUkFOR0U6YSgyNTUsMTM2LDApfTtmdW5jdGlvbiBsKHQsaSxlKXtyZXR1cm4gaSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse3ZhbHVlOmUsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2ldPWUsdH1jbGFzcyBFe2NvbnN0cnVjdG9yKHQsaSxlLHMscil7bCh0aGlzLFwieFwiLHZvaWQgMCksbCh0aGlzLFwieVwiLHZvaWQgMCksbCh0aGlzLFwiY2hhckNvZGVcIix2b2lkIDApLGwodGhpcyxcImZnXCIsdm9pZCAwKSxsKHRoaXMsXCJiZ1wiLHZvaWQgMCksbCh0aGlzLFwiZGlydHlcIix2b2lkIDApLGwodGhpcyxcImJsb2NrZWRcIix2b2lkIDApLGwodGhpcyxcImJsb2NrZWRTaWdodFwiLHZvaWQgMCksbCh0aGlzLFwiZXhwbG9yZWRcIix2b2lkIDApLGwodGhpcyxcInZpc2libGVcIix2b2lkIDApLGwodGhpcyxcInBhdGhJZFwiLHZvaWQgMCksbCh0aGlzLFwiZ1wiLHZvaWQgMCksbCh0aGlzLFwiaFwiLHZvaWQgMCksbCh0aGlzLFwicHJldlwiLHZvaWQgMCksdGhpcy54PXQsdGhpcy55PWksdGhpcy5jaGFyQ29kZT12b2lkIDAhPT1lP2Z1bmN0aW9uKHQpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgdCYmdC5sZW5ndGg+MD90LmNoYXJDb2RlQXQoMCk6dH0oZSk6XCIgXCIuY2hhckNvZGVBdCgwKSx0aGlzLmZnPXZvaWQgMCE9PXM/czpBLldISVRFLHRoaXMuYmc9dm9pZCAwIT09cj9yOkEuQkxBQ0ssdGhpcy5kaXJ0eT0hMCx0aGlzLmJsb2NrZWQ9ITEsdGhpcy5ibG9ja2VkU2lnaHQ9ITEsdGhpcy5leHBsb3JlZD0hMSx0aGlzLnZpc2libGU9ITEsdGhpcy5wYXRoSWQ9LTEsdGhpcy5nPTAsdGhpcy5oPTAsdGhpcy5wcmV2PW51bGx9c2V0Q2hhckNvZGUodCl7dGhpcy5jaGFyQ29kZSE9PXQmJih0aGlzLmNoYXJDb2RlPXQsdGhpcy5kaXJ0eT0hMCl9c2V0Rm9yZWdyb3VuZCh0KXt2b2lkIDAhPT10JiZudWxsIT09dCYmdCE9PXRoaXMuZmcmJih0aGlzLmZnPXQsdGhpcy5kaXJ0eT0hMCl9c2V0QmFja2dyb3VuZCh0KXt2b2lkIDAhPT10JiZudWxsIT09dCYmdCE9PXRoaXMuYmcmJih0aGlzLmJnPXQsdGhpcy5kaXJ0eT0hMCl9c2V0VmFsdWUodCxpLGUpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgdCYmKHQ9dC5jaGFyQ29kZUF0KDApKSxcIm51bWJlclwiPT09dHlwZW9mIHQ/KHRoaXMuc2V0Q2hhckNvZGUodCksdm9pZCAwIT09aSYmdGhpcy5zZXRGb3JlZ3JvdW5kKGkpLHZvaWQgMCE9PWUmJnRoaXMuc2V0QmFja2dyb3VuZChlKSk6dGhpcy5kcmF3Q2VsbCh0LHMuTm9uZSksdGhpcy5kaXJ0eX1kcmF3Q2VsbCh0LGkpe2NvbnN0IGU9MjU1JnQuYmc7aT09PXMuTm9uZXx8dC5jaGFyQ29kZT4wPyh0aGlzLnNldENoYXJDb2RlKHQuY2hhckNvZGUpLHRoaXMuc2V0Rm9yZWdyb3VuZCh0LmZnKSk6ZT4wJiZlPDI1NSYmdGhpcy5zZXRGb3JlZ3JvdW5kKHRoaXMuYmxlbmRDb2xvcnModGhpcy5mZyx0LmJnLGkpKSxpPT09cy5Ob25lfHwyNTU9PT1lP3RoaXMuc2V0QmFja2dyb3VuZCh0LmJnKTplPjAmJnRoaXMuc2V0QmFja2dyb3VuZCh0aGlzLmJsZW5kQ29sb3JzKHRoaXMuYmcsdC5iZyxpKSl9YmxlbmRDb2xvcnModCxpLGUpe2NvbnN0IHI9KDI1NS0oMjU1JmkpKS8yNTUsaD0xLXIsbz10Pj4yNCYyNTUsbj10Pj4xNiYyNTUsXz10Pj44JjI1NSxkPWk+PjI0JjI1NSxBPWk+PjE2JjI1NSxsPWk+PjgmMjU1O3N3aXRjaChlKXtjYXNlIHMuQmxlbmQ6cmV0dXJuIGEocipvK2gqZHwwLHIqbitoKkF8MCxyKl8raCpsfDApO2Nhc2Ugcy5BZGQ6cmV0dXJuIGEodGhpcy5jbGFtcChvK2gqZHwwKSx0aGlzLmNsYW1wKG4raCpBfDApLHRoaXMuY2xhbXAoXytoKmx8MCkpO2RlZmF1bHQ6cmV0dXJuIGl9fWNsYW1wKHQpe3JldHVybiBNYXRoLm1pbigyNTUsdCl9fWxldCBjO2Z1bmN0aW9uIHUodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fSFmdW5jdGlvbih0KXt0W3QuU01JTEVZPTFdPVwiU01JTEVZXCIsdFt0LklOVkVSU0VfU01JTEVZPTJdPVwiSU5WRVJTRV9TTUlMRVlcIix0W3QuSEVBUlQ9M109XCJIRUFSVFwiLHRbdC5ESUFNT05EPTRdPVwiRElBTU9ORFwiLHRbdC5DTFVCPTVdPVwiQ0xVQlwiLHRbdC5TUEFERT02XT1cIlNQQURFXCIsdFt0LkJVTExFVD03XT1cIkJVTExFVFwiLHRbdC5JTlZFUlNFX0JVTExFVD04XT1cIklOVkVSU0VfQlVMTEVUXCIsdFt0LkxJR0hUX1NIQURFPTE3Nl09XCJMSUdIVF9TSEFERVwiLHRbdC5NRURJVU1fU0hBREU9MTc3XT1cIk1FRElVTV9TSEFERVwiLHRbdC5EQVJLX1NIQURFPTE3OF09XCJEQVJLX1NIQURFXCIsdFt0LkJPWF9TSU5HTEVfVkVSVElDQUw9MTc5XT1cIkJPWF9TSU5HTEVfVkVSVElDQUxcIix0W3QuQk9YX1NJTkdMRV9WRVJUSUNBTF9BTkRfU0lOR0xFX0xFRlQ9MTgwXT1cIkJPWF9TSU5HTEVfVkVSVElDQUxfQU5EX1NJTkdMRV9MRUZUXCIsdFt0LkJPWF9ET1VCTEVfVkVSVElDQUxfQU5EX0RPVUJMRV9MRUZUPTE4NV09XCJCT1hfRE9VQkxFX1ZFUlRJQ0FMX0FORF9ET1VCTEVfTEVGVFwiLHRbdC5CT1hfRE9VQkxFX1ZFUlRJQ0FMPTE4Nl09XCJCT1hfRE9VQkxFX1ZFUlRJQ0FMXCIsdFt0LkJPWF9ET1VCTEVfRE9XTl9BTkRfRE9VQkxFX0xFRlQ9MTg3XT1cIkJPWF9ET1VCTEVfRE9XTl9BTkRfRE9VQkxFX0xFRlRcIix0W3QuQk9YX0RPVUJMRV9VUF9BTkRfRE9VQkxFX0xFRlQ9MTg4XT1cIkJPWF9ET1VCTEVfVVBfQU5EX0RPVUJMRV9MRUZUXCIsdFt0LkJPWF9TSU5HTEVfRE9XTl9BTkRfU0lOR0xFX0xFRlQ9MTkxXT1cIkJPWF9TSU5HTEVfRE9XTl9BTkRfU0lOR0xFX0xFRlRcIix0W3QuQk9YX1NJTkdMRV9VUF9BTkRfU0lOR0xFX1JJR0hUPTE5Ml09XCJCT1hfU0lOR0xFX1VQX0FORF9TSU5HTEVfUklHSFRcIix0W3QuQk9YX1NJTkdMRV9IT1JJWk9OVEFMX0FORF9TSU5HTEVfVVA9MTkzXT1cIkJPWF9TSU5HTEVfSE9SSVpPTlRBTF9BTkRfU0lOR0xFX1VQXCIsdFt0LkJPWF9TSU5HTEVfSE9SSVpPTlRBTF9BTkRfU0lOR0xFX0RPV049MTk0XT1cIkJPWF9TSU5HTEVfSE9SSVpPTlRBTF9BTkRfU0lOR0xFX0RPV05cIix0W3QuQk9YX1NJTkdMRV9WRVJUSUNBTF9BTkRfU0lOR0xFX1JJR0hUPTE5NV09XCJCT1hfU0lOR0xFX1ZFUlRJQ0FMX0FORF9TSU5HTEVfUklHSFRcIix0W3QuQk9YX1NJTkdMRV9IT1JJWk9OVEFMPTE5Nl09XCJCT1hfU0lOR0xFX0hPUklaT05UQUxcIix0W3QuQk9YX1NJTkdMRV9WRVJUSUNBTF9BTkRfU0lOR0xFX0hPUklaT05UQUw9MTk3XT1cIkJPWF9TSU5HTEVfVkVSVElDQUxfQU5EX1NJTkdMRV9IT1JJWk9OVEFMXCIsdFt0LkJPWF9ET1VCTEVfVVBfQU5EX0RPVUJMRV9SSUdIVD0yMDBdPVwiQk9YX0RPVUJMRV9VUF9BTkRfRE9VQkxFX1JJR0hUXCIsdFt0LkJPWF9ET1VCTEVfRE9XTl9BTkRfRE9VQkxFX1JJR0hUPTIwMV09XCJCT1hfRE9VQkxFX0RPV05fQU5EX0RPVUJMRV9SSUdIVFwiLHRbdC5CT1hfRE9VQkxFX0hPUklaT05UQUxfQU5EX0RPVUJMRV9VUD0yMDJdPVwiQk9YX0RPVUJMRV9IT1JJWk9OVEFMX0FORF9ET1VCTEVfVVBcIix0W3QuQk9YX0RPVUJMRV9IT1JJWk9OVEFMX0FORF9ET1VCTEVfRE9XTj0yMDNdPVwiQk9YX0RPVUJMRV9IT1JJWk9OVEFMX0FORF9ET1VCTEVfRE9XTlwiLHRbdC5CT1hfRE9VQkxFX1ZFUlRJQ0FMX0FORF9ET1VCTEVfUklHSFQ9MjA0XT1cIkJPWF9ET1VCTEVfVkVSVElDQUxfQU5EX0RPVUJMRV9SSUdIVFwiLHRbdC5CT1hfRE9VQkxFX0hPUklaT05UQUw9MjA1XT1cIkJPWF9ET1VCTEVfSE9SSVpPTlRBTFwiLHRbdC5CT1hfRE9VQkxFX1ZFUlRJQ0FMX0FORF9ET1VCTEVfSE9SSVpPTlRBTD0yMDZdPVwiQk9YX0RPVUJMRV9WRVJUSUNBTF9BTkRfRE9VQkxFX0hPUklaT05UQUxcIix0W3QuQk9YX1NJTkdMRV9VUF9BTkRfU0lOR0xFX0xFRlQ9MjE3XT1cIkJPWF9TSU5HTEVfVVBfQU5EX1NJTkdMRV9MRUZUXCIsdFt0LkJPWF9TSU5HTEVfRE9XTl9BTkRfU0lOR0xFX1JJR0hUPTIxOF09XCJCT1hfU0lOR0xFX0RPV05fQU5EX1NJTkdMRV9SSUdIVFwiLHRbdC5CTE9DS19GVUxMPTIxOV09XCJCTE9DS19GVUxMXCIsdFt0LkJMT0NLX0JPVFRPTV9IQUxGPTIyMF09XCJCTE9DS19CT1RUT01fSEFMRlwiLHRbdC5CTE9DS19MRUZUX0hBTEY9MjIxXT1cIkJMT0NLX0xFRlRfSEFMRlwiLHRbdC5CTE9DS19SSUdIVF9IQUxGPTIyMl09XCJCTE9DS19SSUdIVF9IQUxGXCIsdFt0LkJMT0NLX1RPUF9IQUxGPTIyM109XCJCTE9DS19UT1BfSEFMRlwifShjfHwoYz17fSkpO2NsYXNzIEt7Y29uc3RydWN0b3IodCxpLGUpe3UodGhpcyxcIndpZHRoXCIsdm9pZCAwKSx1KHRoaXMsXCJoZWlnaHRcIix2b2lkIDApLHUodGhpcyxcImdyaWRcIix2b2lkIDApLHUodGhpcyxcIm9yaWdpblhcIix2b2lkIDApLHUodGhpcyxcIm9yaWdpbllcIix2b2lkIDApLHUodGhpcyxcIm1pblhcIix2b2lkIDApLHUodGhpcyxcIm1heFhcIix2b2lkIDApLHUodGhpcyxcIm1pbllcIix2b2lkIDApLHUodGhpcyxcIm1heFlcIix2b2lkIDApLHUodGhpcyxcInJhZGl1c1wiLHZvaWQgMCksdGhpcy53aWR0aD10LHRoaXMuaGVpZ2h0PWksdGhpcy5ncmlkPVtdLHRoaXMub3JpZ2luWD0wLHRoaXMub3JpZ2luWT0wLHRoaXMubWluWD0wLHRoaXMubWF4WD0wLHRoaXMubWluWT0wLHRoaXMubWF4WT0wLHRoaXMucmFkaXVzPTA7Zm9yKGxldCBlPTA7ZTxpO2UrKyl7Y29uc3QgaT1bXTtmb3IobGV0IHM9MDtzPHQ7cysrKWkucHVzaChuZXcgRShzLGUpKTt0aGlzLmdyaWQucHVzaChpKX1pZih0aGlzLmNsZWFyKCksZSlmb3IobGV0IHM9MDtzPGk7cysrKWZvcihsZXQgaT0wO2k8dDtpKyspdGhpcy5ncmlkW3NdW2ldLmJsb2NrZWQ9dGhpcy5ncmlkW3NdW2ldLmJsb2NrZWRTaWdodD1lKGkscyl9Y2xlYXIoKXtmb3IobGV0IHQ9MDt0PHRoaXMuaGVpZ2h0O3QrKylmb3IobGV0IGk9MDtpPHRoaXMud2lkdGg7aSsrKXRoaXMuZHJhd0NoYXIoaSx0LDApfWdldENlbGwodCxpKXtpZighKHQ8MHx8aTwwfHx0Pj10aGlzLndpZHRofHxpPj10aGlzLmhlaWdodCkpcmV0dXJuIHRoaXMuZ3JpZFtpXVt0XX1nZXRDaGFyQ29kZSh0LGkpe2lmKCEodDwwfHxpPDB8fHQ+PXRoaXMud2lkdGh8fGk+PXRoaXMuaGVpZ2h0KSlyZXR1cm4gdGhpcy5ncmlkW2ldW3RdLmNoYXJDb2RlfWRyYXdDaGFyKHQsaSxlLHMscil7dD49MCYmdDx0aGlzLndpZHRoJiZpPj0wJiZpPHRoaXMuaGVpZ2h0JiZ0aGlzLmdyaWRbMHxpXVswfHRdLnNldFZhbHVlKGUscyxyKX1kcmF3U3RyaW5nKHQsaSxlLHMscil7Y29uc3QgaD1lLnNwbGl0KFwiXFxuXCIpO2ZvcihsZXQgZT0wO2U8aC5sZW5ndGg7ZSsrKXtjb25zdCBvPWhbZV07Zm9yKGxldCBoPTA7aDxvLmxlbmd0aDtoKyspdGhpcy5kcmF3Q2hhcih0K2gsaStlLG8uY2hhckNvZGVBdChoKSxzLHIpfX1kcmF3Q2VudGVyZWRTdHJpbmcodCxpLGUscyxyKXt0aGlzLmRyYXdTdHJpbmcodC1NYXRoLmZsb29yKGUubGVuZ3RoLzIpLGksZSxzLHIpfWRyYXdITGluZSh0LGksZSxzLHIsaCl7Zm9yKGxldCBvPXQ7bzx0K2U7bysrKXRoaXMuZHJhd0NoYXIobyxpLHMscixoKX1kcmF3VkxpbmUodCxpLGUscyxyLGgpe2ZvcihsZXQgbz1pO288aStlO28rKyl0aGlzLmRyYXdDaGFyKHQsbyxzLHIsaCl9ZHJhd1JlY3QodCxpLGUscyxyLGgsbyl7dGhpcy5kcmF3SExpbmUodCxpLGUscixoLG8pLHRoaXMuZHJhd0hMaW5lKHQsaStzLTEsZSxyLGgsbyksdGhpcy5kcmF3VkxpbmUodCxpLHMscixoLG8pLHRoaXMuZHJhd1ZMaW5lKHQrZS0xLGkscyxyLGgsbyl9ZHJhd0JveCh0LGksZSxzLHIsaCxvLG4sXyxhLGQsQSxsLEUpe3RoaXMuZmlsbFJlY3QodCxpLGUscywwLGwsRSksdGhpcy5kcmF3SExpbmUodCxpLGUsciksdGhpcy5kcmF3SExpbmUodCxpK3MtMSxlLG8pLHRoaXMuZHJhd1ZMaW5lKHQsaSxzLG4pLHRoaXMuZHJhd1ZMaW5lKHQrZS0xLGkscyxoKSx0aGlzLmRyYXdDaGFyKHQsaSxfKSx0aGlzLmRyYXdDaGFyKHQrZS0xLGksYSksdGhpcy5kcmF3Q2hhcih0LGkrcy0xLEEpLHRoaXMuZHJhd0NoYXIodCtlLTEsaStzLTEsZCl9ZHJhd1NpbmdsZUJveCh0LGksZSxzLHIsaCl7dGhpcy5kcmF3Qm94KHQsaSxlLHMsYy5CT1hfU0lOR0xFX0hPUklaT05UQUwsYy5CT1hfU0lOR0xFX1ZFUlRJQ0FMLGMuQk9YX1NJTkdMRV9IT1JJWk9OVEFMLGMuQk9YX1NJTkdMRV9WRVJUSUNBTCxjLkJPWF9TSU5HTEVfRE9XTl9BTkRfU0lOR0xFX1JJR0hULGMuQk9YX1NJTkdMRV9ET1dOX0FORF9TSU5HTEVfTEVGVCxjLkJPWF9TSU5HTEVfVVBfQU5EX1NJTkdMRV9MRUZULGMuQk9YX1NJTkdMRV9VUF9BTkRfU0lOR0xFX1JJR0hULHIsaCl9ZHJhd0RvdWJsZUJveCh0LGksZSxzLHIsaCl7dGhpcy5kcmF3Qm94KHQsaSxlLHMsYy5CT1hfRE9VQkxFX0hPUklaT05UQUwsYy5CT1hfRE9VQkxFX1ZFUlRJQ0FMLGMuQk9YX0RPVUJMRV9IT1JJWk9OVEFMLGMuQk9YX0RPVUJMRV9WRVJUSUNBTCxjLkJPWF9ET1VCTEVfRE9XTl9BTkRfRE9VQkxFX1JJR0hULGMuQk9YX0RPVUJMRV9ET1dOX0FORF9ET1VCTEVfTEVGVCxjLkJPWF9ET1VCTEVfVVBfQU5EX0RPVUJMRV9MRUZULGMuQk9YX0RPVUJMRV9VUF9BTkRfRE9VQkxFX1JJR0hULHIsaCl9ZmlsbFJlY3QodCxpLGUscyxyLGgsbyl7Zm9yKGxldCBuPWk7bjxpK3M7bisrKXRoaXMuZHJhd0hMaW5lKHQsbixlLHIsaCxvKX1kcmF3Q29uc29sZSh0LGksZSxyLGgsbyxuLF8pe189X3x8cy5Ob25lO2ZvcihsZXQgcz0wO3M8bjtzKyspZm9yKGxldCBuPTA7bjxvO24rKyl7Y29uc3Qgbz1lLmdldENlbGwocituLGgrcyk7byYmdGhpcy5kcmF3Q2VsbCh0K24saStzLG8sXyl9fWRyYXdDZWxsKHQsaSxlLHMpe3Q+PTAmJnQ8dGhpcy53aWR0aCYmaT49MCYmaTx0aGlzLmhlaWdodCYmdGhpcy5ncmlkW2ldW3RdLmRyYXdDZWxsKGUscyl9c2V0QmxvY2tlZCh0LGksZSl7dD49MCYmdDx0aGlzLndpZHRoJiZpPj0wJiZpPHRoaXMuaGVpZ2h0JiYodGhpcy5ncmlkW2ldW3RdLmJsb2NrZWQ9ZSl9c2V0QmxvY2tlZFNpZ2h0KHQsaSxlKXt0Pj0wJiZ0PHRoaXMud2lkdGgmJmk+PTAmJmk8dGhpcy5oZWlnaHQmJih0aGlzLmdyaWRbaV1bdF0uYmxvY2tlZFNpZ2h0PWUpfWlzVmlzaWJsZSh0LGkpe3JldHVybiEodDx0aGlzLm1pblh8fHQ+dGhpcy5tYXhYfHxpPHRoaXMubWluWXx8aT50aGlzLm1heFkpJiZ0aGlzLmdyaWRbaV1bdF0udmlzaWJsZX1pc0Jsb2NrZWQodCxpKXtyZXR1cm4gdDwwfHx0PnRoaXMud2lkdGh8fGk8MHx8aT50aGlzLmhlaWdodHx8dGhpcy5ncmlkW2ldW3RdLmJsb2NrZWR9aXNCbG9ja2VkU2lnaHQodCxpKXtyZXR1cm4gdDwwfHx0PnRoaXMud2lkdGh8fGk8MHx8aT50aGlzLmhlaWdodHx8dGhpcy5ncmlkW2ldW3RdLmJsb2NrZWRTaWdodH1jb21wdXRlT2N0YW50WSh0LGkpe2NvbnN0IGU9W10scz1bXTtsZXQgcixoLG8sbixfLGEsZCxBLGwsRSxjPTEsdT0wLEs9MCxUPTA7Zm9yKGg9dGhpcy5vcmlnaW5ZK2k7aD49dGhpcy5taW5ZJiZoPD10aGlzLm1heFk7aCs9aSxLPXUsKytjKWZvcihvPS41L2MsRT0tMSxuPU1hdGguZmxvb3IoVCpjKy41KSxyPXRoaXMub3JpZ2luWCtuKnQ7bjw9YyYmcj49dGhpcy5taW5YJiZyPD10aGlzLm1heFg7cis9dCwrK24sRT1sKXtpZihfPSEwLGE9ITEsZD1uL2MsQT1FLGw9ZCtvLEs+MClpZih0aGlzLmdyaWRbaC1pXVtyXS52aXNpYmxlJiYhdGhpcy5ncmlkW2gtaV1bcl0uYmxvY2tlZFNpZ2h0fHx0aGlzLmdyaWRbaC1pXVtyLXRdLnZpc2libGUmJiF0aGlzLmdyaWRbaC1pXVtyLXRdLmJsb2NrZWRTaWdodCl7Zm9yKGxldCB0PTA7dDxLJiZfOysrdClpZihBPD1zW3RdJiZsPj1lW3RdKWlmKHRoaXMuZ3JpZFtoXVtyXS5ibG9ja2VkU2lnaHQpe2lmKEE+PWVbdF0mJmw8PXNbdF0pe189ITE7YnJlYWt9ZVt0XT1NYXRoLm1pbihlW3RdLEEpLHNbdF09TWF0aC5tYXgoc1t0XSxsKSxhPSEwfWVsc2UgaWYoZD5lW3RdJiZkPHNbdF0pe189ITE7YnJlYWt9fWVsc2UgXz0hMTtfJiYodGhpcy5ncmlkW2hdW3JdLnZpc2libGU9ITAsdGhpcy5ncmlkW2hdW3JdLmJsb2NrZWRTaWdodCYmKFQ+PUE/VD1sOmF8fChlW3VdPUEsc1t1KytdPWwpKSl9fWNvbXB1dGVPY3RhbnRYKHQsaSl7Y29uc3QgZT1bXSxzPVtdO2xldCByLGgsbyxuLF8sYSxkLEEsbCxFLGM9MSx1PTAsSz0wLFQ9MDtmb3Iocj10aGlzLm9yaWdpblgrdDtyPj10aGlzLm1pblgmJnI8PXRoaXMubWF4WDtyKz10LEs9dSwrK2MpZm9yKG89LjUvYyxFPS0xLG49TWF0aC5mbG9vcihUKmMrLjUpLGg9dGhpcy5vcmlnaW5ZK24qaTtuPD1jJiZoPj10aGlzLm1pblkmJmg8PXRoaXMubWF4WTtoKz1pLCsrbixFPWwpe2lmKF89ITAsYT0hMSxkPW4vYyxBPUUsbD1kK28sSz4wKWlmKHRoaXMuZ3JpZFtoXVtyLXRdLnZpc2libGUmJiF0aGlzLmdyaWRbaF1bci10XS5ibG9ja2VkU2lnaHR8fHRoaXMuZ3JpZFtoLWldW3ItdF0udmlzaWJsZSYmIXRoaXMuZ3JpZFtoLWldW3ItdF0uYmxvY2tlZFNpZ2h0KXtmb3IobGV0IHQ9MDt0PEsmJl87Kyt0KWlmKEE8PXNbdF0mJmw+PWVbdF0paWYodGhpcy5ncmlkW2hdW3JdLmJsb2NrZWRTaWdodCl7aWYoQT49ZVt0XSYmbDw9c1t0XSl7Xz0hMTticmVha31lW3RdPU1hdGgubWluKGVbdF0sQSksc1t0XT1NYXRoLm1heChzW3RdLGwpLGE9ITB9ZWxzZSBpZihkPmVbdF0mJmQ8c1t0XSl7Xz0hMTticmVha319ZWxzZSBfPSExO18mJih0aGlzLmdyaWRbaF1bcl0udmlzaWJsZT0hMCx0aGlzLmdyaWRbaF1bcl0uYmxvY2tlZFNpZ2h0JiYoVD49QT9UPWw6YXx8KGVbdV09QSxzW3UrK109bCkpKX19Y29tcHV0ZUZvdih0LGksZSxzLHIpe2lmKHRoaXMub3JpZ2luWD10LHRoaXMub3JpZ2luWT1pLHRoaXMucmFkaXVzPWUscyl0aGlzLm1pblg9TWF0aC5taW4odGhpcy5taW5YLE1hdGgubWF4KDAsdC1lKSksdGhpcy5taW5ZPU1hdGgubWluKHRoaXMubWluWSxNYXRoLm1heCgwLGktZSkpLHRoaXMubWF4WD1NYXRoLm1heCh0aGlzLm1heFgsTWF0aC5taW4odGhpcy53aWR0aC0xLHQrZSkpLHRoaXMubWF4WT1NYXRoLm1heCh0aGlzLm1heFksTWF0aC5taW4odGhpcy5oZWlnaHQtMSxpK2UpKTtlbHNle3RoaXMubWluWD1NYXRoLm1heCgwLHQtZSksdGhpcy5taW5ZPU1hdGgubWF4KDAsaS1lKSx0aGlzLm1heFg9TWF0aC5taW4odGhpcy53aWR0aC0xLHQrZSksdGhpcy5tYXhZPU1hdGgubWluKHRoaXMuaGVpZ2h0LTEsaStlKTtmb3IobGV0IHQ9dGhpcy5taW5ZO3Q8PXRoaXMubWF4WTt0KyspZm9yKGxldCBpPXRoaXMubWluWDtpPD10aGlzLm1heFg7aSsrKXRoaXMuZ3JpZFt0XVtpXS52aXNpYmxlPSExfXRoaXMuZ3JpZFtpXVt0XS52aXNpYmxlPSEwLHZvaWQgMD09PXI/KHRoaXMuY29tcHV0ZU9jdGFudFkoMSwxKSx0aGlzLmNvbXB1dGVPY3RhbnRYKDEsMSksdGhpcy5jb21wdXRlT2N0YW50WCgxLC0xKSx0aGlzLmNvbXB1dGVPY3RhbnRZKDEsLTEpLHRoaXMuY29tcHV0ZU9jdGFudFkoLTEsLTEpLHRoaXMuY29tcHV0ZU9jdGFudFgoLTEsLTEpLHRoaXMuY29tcHV0ZU9jdGFudFgoLTEsMSksdGhpcy5jb21wdXRlT2N0YW50WSgtMSwxKSk6KDEmciYmdGhpcy5jb21wdXRlT2N0YW50WSgxLDEpLDImciYmdGhpcy5jb21wdXRlT2N0YW50WCgxLDEpLDQmciYmdGhpcy5jb21wdXRlT2N0YW50WCgxLC0xKSw4JnImJnRoaXMuY29tcHV0ZU9jdGFudFkoMSwtMSksMTYmciYmdGhpcy5jb21wdXRlT2N0YW50WSgtMSwtMSksMzImciYmdGhpcy5jb21wdXRlT2N0YW50WCgtMSwtMSksNjQmciYmdGhpcy5jb21wdXRlT2N0YW50WCgtMSwxKSwxMjgmciYmdGhpcy5jb21wdXRlT2N0YW50WSgtMSwxKSl9dXBkYXRlRXhwbG9yZWQoKXtmb3IobGV0IHQ9dGhpcy5taW5ZO3Q8PXRoaXMubWF4WTt0KyspZm9yKGxldCBpPXRoaXMubWluWDtpPD10aGlzLm1heFg7aSsrKXtjb25zdCBlPXRoaXMuZ3JpZFt0XVtpXTtlLmV4cGxvcmVkPWUuZXhwbG9yZWR8fGUudmlzaWJsZX19fWZ1bmN0aW9uIFQodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fWNsYXNzIE97Y29uc3RydWN0b3IodCxpLGUscyxyKXtUKHRoaXMsXCJ1cmxcIix2b2lkIDApLFQodGhpcyxcImNoYXJXaWR0aFwiLHZvaWQgMCksVCh0aGlzLFwiY2hhckhlaWdodFwiLHZvaWQgMCksVCh0aGlzLFwic2NhbGVcIix2b2lkIDApLFQodGhpcyxcImdyYXBoaWNhbFwiLHZvaWQgMCksdGhpcy51cmw9dCx0aGlzLmNoYXJXaWR0aD1pLHRoaXMuY2hhckhlaWdodD1lLHRoaXMuc2NhbGU9c3x8MSx0aGlzLmdyYXBoaWNhbD0hIXJ9fWNvbnN0IFY9bmV3IE8oXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlBQUFBQ0FBUU1BQUFENThQT0lBQUFBQmxCTVZFVUFBQUQvLy8rbDJaL2RBQUFFaGtsRVFWUkl4NDJTdjRvVVFSREdDNFV6YWRTd3dNVUQ4UUVLbGJXRDRRNThCL05HcFRWb2NLTzF3WEhVek1BSDBBY3dNVFlWR2c1YWcwSXpFWGFSamRaRVpLTnprS2JIcXRuekh5cFkwOU05KzV1dnFyN3BiWUN1QzZmdGFSaGdPTlhzMzBlQWgwTzFyWURtNElTL2VIMEI4R3hSVzJ2eG8zOTZ5dS9mYjBaRnJXMXpjT1hsUFUvWFB3SzhQR2piV2hWd000S25INjE5MTJvSzQrem1tSEphUW90eXQxa3Z0QzJBdGRvMjRpb2hQRGlHL3Y0ZUlDSnNZM1d5OFl2cjBEU0lCT2R4Z0g2djh3c3JpV2hjOHMwQXRhSy9HelNsMWpSMG5TalFud2tpNkZReE5GS2pnek8yYTdCQnF1Y0g3ZEw0TTl6OTZDSWhUMUZzL0FnS2djQTZkS0N4STI5RGFITndSSjRFR0FVMXNVME9HOXJtRTRTSWMzQTRGQ2hBQ3FxaEpSd3B4a3FoOXd4YWc0RFNtRUo1RHRwRndBUDRHVWY2bG1LY0ZGdGkxQll1UXA0eE44a3hNMmtOaGpka1RPaVRVZUFLR3ZoQTFyTHBNYllBQ1F6Q0lUbFREUk1iTFlvRWEySldQU01SRlpJdXBjU3pNVktjRVVrWCtzT0crQ2hOWDJ2RDhleDZrN09GSEwwUDE2NTVKdVBkNTNXQUQreVR2M1VyQ1FpdUhtWUJiZkl4cGtJbXV2cEJRQmtWYjVnNFhIdjNKa05pcmVHOEFPOXpEaEJadTJ6Mk9NWjExUzUvUklseU1lZk1OYVo0R3NDejV4Y2p5TTZoSFlFakFZRWZPOElnMXJrbEFlOXNSSWVZQWR3eW9JQnE2WUl6Q0FLaVdvaWZBM20zbzJBeldjZFlLT2RZNDdFSWY4UUFCQ3VZZ0lVVm1kVk1FWUVEQTBIbW8vM0Q2S0tKYmg1bXhoUDNVc1dJRTk3d25FeWd5aXpPZk9MaTJKT0pXOENlT2JsVzlJSGVLWmd2NHp4dXpEcnlPbWIrNGFRSCtNWFY2ZTB5d2RVY3hxQ2pCV2w1R3BielpkdU9HMVFFaUdYUDg2VDdFZmlKZmtNUTRPTzRIMHlxeU5DMnpsemlXRU43WXd1YzJmUTRwNUJOa1M1UVlYUDJoNU50UkpoMHZDS1FpZHRWSm1DR0F3RFNTUXBZZ2dTeGlSSXl6ZXdzZ0NoNHh4aVRQRE1oNWFqLy9sN2J0cWtyNnJReUlPdExqaTRsVlJRd1hkenZ1czQwWTUzTTMzZmg1MEdad0Y0RXhRZU1sdnVUZ2dMelNpNEVsS2N6VU83elZ0cHdkeU1LZHFaS09XYjJuRGJsYXdQeFBtdU13RkVXQlcramxaUjFlWXRTNDQya2lCR01XQ2kvaDEvK0dBUjZOWU9KV2lxTkpYRnlnRnRya3g1QzBPM0llRkdzNjdIaEVFaG1CdS9CVU9UKzA1NTFwWHhZSUYrRWxwaTVBS1JrTGw1R1ViQ0NaZGR5TXY2MjF1akVCUFA0dlN5MmZvdFR4M1UrZDNXQmlGT0E2VlNHU0I0OXYvTTdHQlg5RlByRGFUMmM5cXI0UENwd1o3cXo4MTNSOTRkVkZJZTE5djMzR2xNWlVnaFFGYjhCcmZFN1FCbWdCTWJybjJCM2Vubi95M0I1K0RMOFVCQWRuZWpkWWRCeGVWOWVqd29ZTlRnVzBPay9nQTdVRzJHQXphbmhMMERHN3E0c3Z5bndGOFV3RFB1N3UvdkQwSXVkelNsdE10VmJQK0ovZ1ViUjI5b0o3Rmc5czZVeStEbnBpVENPWWM0Y1hPZVhNV2ZzdXNTdzdGT2c5eDY1NW5heDZCbGVjd3BPUVE2OFdCd3ArSDJMTVFUdU9xMlJVaWd6aDJRL1IzQ1dBUkpJSkcxOTlFd09UeUtCbFFNem5zaENSR2VRNWdIQUJBUWw2TTRnTEVkQXpWYUJXTUNpQU5kc2F5RENIQkEvaGFnS1lmaWVsckpJbGlwS0tRSUE5TmYzd0Jsb1RIVDZCdUF4MTV6Uk5hMW5BQUFBQUVsRlRrU3VRbUNDXCIsOCw4KTtsZXQgZyxOO2Z1bmN0aW9uIEwodCxpKXtyZXR1cm4gdD4wP2k+MD9OLlFVQURSQU5UX1NPVVRIRUFTVDowPT09aT9OLlFVQURSQU5UX0VBU1Q6Ti5RVUFEUkFOVF9OT1JUSEVBU1Q6dDwwP2k+MD9OLlFVQURSQU5UX1NPVVRIV0VTVDowPT09aT9OLlFVQURSQU5UX1dFU1Q6Ti5RVUFEUkFOVF9OT1JUSFdFU1Q6aT4wP04uUVVBRFJBTlRfU09VVEg6Ti5RVUFEUkFOVF9OT1JUSH1mdW5jdGlvbiBmKHQsaSxlKXtyZXR1cm4gaSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse3ZhbHVlOmUsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2ldPWUsdH0hZnVuY3Rpb24odCl7dFt0Lk9DVEFOVF9TT1VUSF9TT1VUSEVBU1Q9MV09XCJPQ1RBTlRfU09VVEhfU09VVEhFQVNUXCIsdFt0Lk9DVEFOVF9FQVNUX1NPVVRIRUFTVD0yXT1cIk9DVEFOVF9FQVNUX1NPVVRIRUFTVFwiLHRbdC5PQ1RBTlRfRUFTVF9OT1JUSFRIRUFTVD00XT1cIk9DVEFOVF9FQVNUX05PUlRIVEhFQVNUXCIsdFt0Lk9DVEFOVF9OT1JUSF9OT1JUSEVBU1Q9OF09XCJPQ1RBTlRfTk9SVEhfTk9SVEhFQVNUXCIsdFt0Lk9DVEFOVF9OT1JUSF9OT1JUSFdFU1Q9MTZdPVwiT0NUQU5UX05PUlRIX05PUlRIV0VTVFwiLHRbdC5PQ1RBTlRfV0VTVF9OT1JUSEVBU1Q9MzJdPVwiT0NUQU5UX1dFU1RfTk9SVEhFQVNUXCIsdFt0Lk9DVEFOVF9XRVNUX1NPVVRIV0VTVD02NF09XCJPQ1RBTlRfV0VTVF9TT1VUSFdFU1RcIix0W3QuT0NUQU5UX1NPVVRIX1NPVVRIV0VTVD0xMjhdPVwiT0NUQU5UX1NPVVRIX1NPVVRIV0VTVFwifShnfHwoZz17fSkpLGZ1bmN0aW9uKHQpe3RbdC5RVUFEUkFOVF9TT1VUSEVBU1Q9M109XCJRVUFEUkFOVF9TT1VUSEVBU1RcIix0W3QuUVVBRFJBTlRfRUFTVD02XT1cIlFVQURSQU5UX0VBU1RcIix0W3QuUVVBRFJBTlRfTk9SVEhFQVNUPTEyXT1cIlFVQURSQU5UX05PUlRIRUFTVFwiLHRbdC5RVUFEUkFOVF9OT1JUSD0yNF09XCJRVUFEUkFOVF9OT1JUSFwiLHRbdC5RVUFEUkFOVF9OT1JUSFdFU1Q9NDhdPVwiUVVBRFJBTlRfTk9SVEhXRVNUXCIsdFt0LlFVQURSQU5UX1dFU1Q9OTZdPVwiUVVBRFJBTlRfV0VTVFwiLHRbdC5RVUFEUkFOVF9TT1VUSFdFU1Q9MTkyXT1cIlFVQURSQU5UX1NPVVRIV0VTVFwiLHRbdC5RVUFEUkFOVF9TT1VUSD0xMjldPVwiUVVBRFJBTlRfU09VVEhcIn0oTnx8KE49e30pKTtjbGFzcyBSe2NvbnN0cnVjdG9yKHQsaSl7Zih0aGlzLFwieFwiLHZvaWQgMCksZih0aGlzLFwieVwiLHZvaWQgMCksdGhpcy54PXQsdGhpcy55PWl9fWZ1bmN0aW9uIEQodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fWNsYXNzIEN7Y29uc3RydWN0b3IodCxpLGUscyl7RCh0aGlzLFwieFwiLHZvaWQgMCksRCh0aGlzLFwieVwiLHZvaWQgMCksRCh0aGlzLFwid2lkdGhcIix2b2lkIDApLEQodGhpcyxcImhlaWdodFwiLHZvaWQgMCksRCh0aGlzLFwibGVmdFwiLHZvaWQgMCksRCh0aGlzLFwidG9wXCIsdm9pZCAwKSxEKHRoaXMsXCJ4MlwiLHZvaWQgMCksRCh0aGlzLFwieTJcIix2b2lkIDApLHRoaXMueD10aGlzLmxlZnQ9dCx0aGlzLnk9dGhpcy50b3A9aSx0aGlzLndpZHRoPWUsdGhpcy5oZWlnaHQ9cyx0aGlzLngyPXQrZSx0aGlzLnkyPWkrc31nZXRDZW50ZXIoKXtyZXR1cm4gbmV3IFIodGhpcy54K3RoaXMud2lkdGgvMnwwLHRoaXMueSt0aGlzLmhlaWdodC8yfDApfWludGVyc2VjdHModCl7cmV0dXJuIHRoaXMueDw9dC54MiYmdGhpcy54Mj49dC54JiZ0aGlzLnk8PXQueTImJnRoaXMueTI+PXQueX1jb250YWlucyh0KXtyZXR1cm4gdC54Pj10aGlzLngmJnQueDx0aGlzLngyJiZ0Lnk+PXRoaXMueSYmdC55PHRoaXMueTJ9fWZ1bmN0aW9uIFUodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fWNsYXNzIFN7Y29uc3RydWN0b3IodCxpLGUpe1UodGhpcyxcImRpYWxvZ1wiLHZvaWQgMCksVSh0aGlzLFwicmVjdFwiLHZvaWQgMCksVSh0aGlzLFwiY29udGVudHNPZmZzZXRcIix2b2lkIDApLFUodGhpcyxcIm9wZW5cIix2b2lkIDApLFUodGhpcyxcImNvdW50XCIsdm9pZCAwKSxVKHRoaXMsXCJidWZmZXJcIix2b2lkIDApLHRoaXMuZGlhbG9nPXQsdGhpcy5yZWN0PWksdGhpcy5jb250ZW50c09mZnNldD1lLHRoaXMub3Blbj0hMSx0aGlzLmNvdW50PTB9fWNsYXNzIHZ7Z2V0U3RhdGUodCxpKXtjb25zdCBlPWkuY29udGVudHNSZWN0LndpZHRoKzQscz1pLmNvbnRlbnRzUmVjdC5oZWlnaHQrNCxyPSh0LndpZHRoLWUpLzJ8MCxoPSh0LmhlaWdodC1zKS8yfDA7cmV0dXJuIG5ldyBTKGksbmV3IEMocixoLGUscyksbmV3IFIocisyLGgrMikpfWRyYXcodCxpKXtjb25zdCBlPWkuZGlhbG9nLHt4OnMseTpyLHdpZHRoOmgsaGVpZ2h0Om99PWkucmVjdDt0LmZpbGxSZWN0KHMscixoLG8sMCxBLldISVRFLEEuQkxBQ0spLHQuZHJhd1NpbmdsZUJveChzLHIsaCxvKSx0LmRyYXdDZW50ZXJlZFN0cmluZyhzK2gvMnwwLHIsXCIgXCIrZS50aXRsZStcIiBcIiksZS5kcmF3Q29udGVudHModCxpLmNvbnRlbnRzT2Zmc2V0KX19ZnVuY3Rpb24gQih0LGksZSl7cmV0dXJuIGkgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxpLHt2YWx1ZTplLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtpXT1lLHR9Y2xhc3MgSXtjb25zdHJ1Y3Rvcih0LGkpe0IodGhpcyxcInRlcm1pbmFsXCIsdm9pZCAwKSxCKHRoaXMsXCJyZW5kZXJlclwiLHZvaWQgMCksQih0aGlzLFwiZGlhbG9nc1wiLHZvaWQgMCksdGhpcy50ZXJtaW5hbD10LHRoaXMucmVuZGVyZXI9aXx8bmV3IHYsdGhpcy5kaWFsb2dzPVtdfWFkZCh0KXt0aGlzLmRpYWxvZ3MucHVzaCh0aGlzLnJlbmRlcmVyLmdldFN0YXRlKHRoaXMudGVybWluYWwsdCkpfWhhbmRsZUlucHV0KCl7aWYoMD09PXRoaXMuZGlhbG9ncy5sZW5ndGgpcmV0dXJuITE7Y29uc3QgdD10aGlzLmRpYWxvZ3MubGVuZ3RoLTEsaT10aGlzLmRpYWxvZ3NbdGhpcy5kaWFsb2dzLmxlbmd0aC0xXTtyZXR1cm4gaS5kaWFsb2cuaGFuZGxlSW5wdXQodGhpcy50ZXJtaW5hbCxpLmNvbnRlbnRzT2Zmc2V0KSYmdGhpcy5kaWFsb2dzLnNwbGljZSh0LDEpLCEwfWRyYXcoKXtmb3IobGV0IHQ9MDt0PHRoaXMuZGlhbG9ncy5sZW5ndGg7dCsrKXRoaXMucmVuZGVyZXIuZHJhdyh0aGlzLnRlcm1pbmFsLHRoaXMuZGlhbG9nc1t0XSl9fWZ1bmN0aW9uIHAodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fWNsYXNzIGJ7Y29uc3RydWN0b3IodCxpKXtwKHRoaXMsXCJjb250ZW50c1JlY3RcIix2b2lkIDApLHAodGhpcyxcInRpdGxlXCIsdm9pZCAwKSx0aGlzLmNvbnRlbnRzUmVjdD10LHRoaXMudGl0bGU9aX19ZnVuY3Rpb24gdyh0LGksZSl7cmV0dXJuIGkgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxpLHt2YWx1ZTplLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtpXT1lLHR9Y2xhc3MgeXtjb25zdHJ1Y3Rvcigpe3codGhpcyxcImRvd25cIix2b2lkIDApLHcodGhpcyxcImRvd25UaW1lXCIsdm9pZCAwKSx3KHRoaXMsXCJyZXBlYXRcIix2b2lkIDApLHcodGhpcyxcInJlcGVhdFRpbWVcIix2b2lkIDApLHcodGhpcyxcImRvd25Db3VudFwiLHZvaWQgMCksdyh0aGlzLFwidXBDb3VudFwiLHZvaWQgMCksdGhpcy5kb3duPSExLHRoaXMuZG93blRpbWU9MCx0aGlzLnJlcGVhdD0hMSx0aGlzLnJlcGVhdFRpbWU9MCx0aGlzLmRvd25Db3VudD0wLHRoaXMudXBDb3VudD0xMDB9c2V0RG93bih0KXt0aGlzLmRvd24hPT10JiYodGhpcy5kb3duPXQsdGhpcy5yZXBlYXQ9ITEsdGhpcy5kb3duVGltZT10aGlzLnJlcGVhdFRpbWU9cGVyZm9ybWFuY2Uubm93KCkpfXVwZGF0ZSh0KXt0aGlzLnJlcGVhdD0hMSx0aGlzLmRvd24/KHRoaXMuZG93bkNvdW50KyssdGhpcy51cENvdW50PTAsdC10aGlzLmRvd25UaW1lPj0yMDAmJnQtdGhpcy5yZXBlYXRUaW1lPj02Ni42NjY2NjY2NjY2NjY2NyYmKHRoaXMucmVwZWF0PSEwLHRoaXMucmVwZWF0VGltZT10KSk6KHRoaXMuZG93bkNvdW50PTAsdGhpcy51cENvdW50KyspfWlzUHJlc3NlZCgpe3JldHVybiAxPT09dGhpcy5kb3duQ291bnR8fHRoaXMucmVwZWF0fWlzQ2xpY2tlZCgpe3JldHVybiAxPT09dGhpcy51cENvdW50fX1jb25zdCBtPTI1NjtjbGFzcyB4e2NvbnN0cnVjdG9yKHQpe3ZhciBpLGUscztzPXZvaWQgMCwoZT1cImtleXNcIilpbihpPXRoaXMpP09iamVjdC5kZWZpbmVQcm9wZXJ0eShpLGUse3ZhbHVlOnMsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTppW2VdPXMsdGhpcy5rZXlzPW5ldyBBcnJheShtKTtmb3IobGV0IHQ9MDt0PG07dCsrKXRoaXMua2V5c1t0XT1uZXcgeTt0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsKHQ9PnRoaXMuc2V0S2V5KHQsITApKSksdC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwodD0+dGhpcy5zZXRLZXkodCwhMSkpKX1zZXRLZXkodCxpKXtjb25zdCBlPXQua2V5Q29kZTtlIT09UC5WS19GMTEmJih0LnN0b3BQcm9wYWdhdGlvbigpLHQucHJldmVudERlZmF1bHQoKSxlPj0wJiZlPG0mJnRoaXMua2V5c1tlXS5zZXREb3duKGkpKX11cGRhdGVLZXlzKHQpe2ZvcihsZXQgaT0wO2k8bTtpKyspdGhpcy5rZXlzW2ldLnVwZGF0ZSh0KX1nZXRLZXkodCl7cmV0dXJuIHQ+PTAmJnQ8bT90aGlzLmtleXNbdF06bnVsbH19bGV0IFA7IWZ1bmN0aW9uKHQpe3RbdC5WS19DQU5DRUw9M109XCJWS19DQU5DRUxcIix0W3QuVktfSEVMUD02XT1cIlZLX0hFTFBcIix0W3QuVktfQkFDS19TUEFDRT04XT1cIlZLX0JBQ0tfU1BBQ0VcIix0W3QuVktfVEFCPTldPVwiVktfVEFCXCIsdFt0LlZLX0NMRUFSPTEyXT1cIlZLX0NMRUFSXCIsdFt0LlZLX0VOVEVSPTEzXT1cIlZLX0VOVEVSXCIsdFt0LlZLX1NISUZUPTE2XT1cIlZLX1NISUZUXCIsdFt0LlZLX0NPTlRST0w9MTddPVwiVktfQ09OVFJPTFwiLHRbdC5WS19BTFQ9MThdPVwiVktfQUxUXCIsdFt0LlZLX1BBVVNFPTE5XT1cIlZLX1BBVVNFXCIsdFt0LlZLX0NBUFNfTE9DSz0yMF09XCJWS19DQVBTX0xPQ0tcIix0W3QuVktfRVNDQVBFPTI3XT1cIlZLX0VTQ0FQRVwiLHRbdC5WS19TUEFDRT0zMl09XCJWS19TUEFDRVwiLHRbdC5WS19QQUdFX1VQPTMzXT1cIlZLX1BBR0VfVVBcIix0W3QuVktfUEFHRV9ET1dOPTM0XT1cIlZLX1BBR0VfRE9XTlwiLHRbdC5WS19FTkQ9MzVdPVwiVktfRU5EXCIsdFt0LlZLX0hPTUU9MzZdPVwiVktfSE9NRVwiLHRbdC5WS19MRUZUPTM3XT1cIlZLX0xFRlRcIix0W3QuVktfVVA9MzhdPVwiVktfVVBcIix0W3QuVktfUklHSFQ9MzldPVwiVktfUklHSFRcIix0W3QuVktfRE9XTj00MF09XCJWS19ET1dOXCIsdFt0LlZLX1BSSU5UU0NSRUVOPTQ0XT1cIlZLX1BSSU5UU0NSRUVOXCIsdFt0LlZLX0lOU0VSVD00NV09XCJWS19JTlNFUlRcIix0W3QuVktfREVMRVRFPTQ2XT1cIlZLX0RFTEVURVwiLHRbdC5WS18wPTQ4XT1cIlZLXzBcIix0W3QuVktfMT00OV09XCJWS18xXCIsdFt0LlZLXzI9NTBdPVwiVktfMlwiLHRbdC5WS18zPTUxXT1cIlZLXzNcIix0W3QuVktfND01Ml09XCJWS180XCIsdFt0LlZLXzU9NTNdPVwiVktfNVwiLHRbdC5WS182PTU0XT1cIlZLXzZcIix0W3QuVktfNz01NV09XCJWS183XCIsdFt0LlZLXzg9NTZdPVwiVktfOFwiLHRbdC5WS185PTU3XT1cIlZLXzlcIix0W3QuVktfQ09MT049NThdPVwiVktfQ09MT05cIix0W3QuVktfU0VNSUNPTE9OPTU5XT1cIlZLX1NFTUlDT0xPTlwiLHRbdC5WS19MRVNTX1RIQU49NjBdPVwiVktfTEVTU19USEFOXCIsdFt0LlZLX0VRVUFMUz02MV09XCJWS19FUVVBTFNcIix0W3QuVktfR1JFQVRFUl9USEFOPTYyXT1cIlZLX0dSRUFURVJfVEhBTlwiLHRbdC5WS19RVUVTVElPTl9NQVJLPTYzXT1cIlZLX1FVRVNUSU9OX01BUktcIix0W3QuVktfQVQ9NjRdPVwiVktfQVRcIix0W3QuVktfQT02NV09XCJWS19BXCIsdFt0LlZLX0I9NjZdPVwiVktfQlwiLHRbdC5WS19DPTY3XT1cIlZLX0NcIix0W3QuVktfRD02OF09XCJWS19EXCIsdFt0LlZLX0U9NjldPVwiVktfRVwiLHRbdC5WS19GPTcwXT1cIlZLX0ZcIix0W3QuVktfRz03MV09XCJWS19HXCIsdFt0LlZLX0g9NzJdPVwiVktfSFwiLHRbdC5WS19JPTczXT1cIlZLX0lcIix0W3QuVktfSj03NF09XCJWS19KXCIsdFt0LlZLX0s9NzVdPVwiVktfS1wiLHRbdC5WS19MPTc2XT1cIlZLX0xcIix0W3QuVktfTT03N109XCJWS19NXCIsdFt0LlZLX049NzhdPVwiVktfTlwiLHRbdC5WS19PPTc5XT1cIlZLX09cIix0W3QuVktfUD04MF09XCJWS19QXCIsdFt0LlZLX1E9ODFdPVwiVktfUVwiLHRbdC5WS19SPTgyXT1cIlZLX1JcIix0W3QuVktfUz04M109XCJWS19TXCIsdFt0LlZLX1Q9ODRdPVwiVktfVFwiLHRbdC5WS19VPTg1XT1cIlZLX1VcIix0W3QuVktfVj04Nl09XCJWS19WXCIsdFt0LlZLX1c9ODddPVwiVktfV1wiLHRbdC5WS19YPTg4XT1cIlZLX1hcIix0W3QuVktfWT04OV09XCJWS19ZXCIsdFt0LlZLX1o9OTBdPVwiVktfWlwiLHRbdC5WS19DT05URVhUX01FTlU9OTNdPVwiVktfQ09OVEVYVF9NRU5VXCIsdFt0LlZLX05VTVBBRDA9OTZdPVwiVktfTlVNUEFEMFwiLHRbdC5WS19OVU1QQUQxPTk3XT1cIlZLX05VTVBBRDFcIix0W3QuVktfTlVNUEFEMj05OF09XCJWS19OVU1QQUQyXCIsdFt0LlZLX05VTVBBRDM9OTldPVwiVktfTlVNUEFEM1wiLHRbdC5WS19OVU1QQUQ0PTEwMF09XCJWS19OVU1QQUQ0XCIsdFt0LlZLX05VTVBBRDU9MTAxXT1cIlZLX05VTVBBRDVcIix0W3QuVktfTlVNUEFENj0xMDJdPVwiVktfTlVNUEFENlwiLHRbdC5WS19OVU1QQUQ3PTEwM109XCJWS19OVU1QQUQ3XCIsdFt0LlZLX05VTVBBRDg9MTA0XT1cIlZLX05VTVBBRDhcIix0W3QuVktfTlVNUEFEOT0xMDVdPVwiVktfTlVNUEFEOVwiLHRbdC5WS19NVUxUSVBMWT0xMDZdPVwiVktfTVVMVElQTFlcIix0W3QuVktfQUREPTEwN109XCJWS19BRERcIix0W3QuVktfU0VQQVJBVE9SPTEwOF09XCJWS19TRVBBUkFUT1JcIix0W3QuVktfU1VCVFJBQ1Q9MTA5XT1cIlZLX1NVQlRSQUNUXCIsdFt0LlZLX0RFQ0lNQUw9MTEwXT1cIlZLX0RFQ0lNQUxcIix0W3QuVktfRElWSURFPTExMV09XCJWS19ESVZJREVcIix0W3QuVktfRjE9MTEyXT1cIlZLX0YxXCIsdFt0LlZLX0YyPTExM109XCJWS19GMlwiLHRbdC5WS19GMz0xMTRdPVwiVktfRjNcIix0W3QuVktfRjQ9MTE1XT1cIlZLX0Y0XCIsdFt0LlZLX0Y1PTExNl09XCJWS19GNVwiLHRbdC5WS19GNj0xMTddPVwiVktfRjZcIix0W3QuVktfRjc9MTE4XT1cIlZLX0Y3XCIsdFt0LlZLX0Y4PTExOV09XCJWS19GOFwiLHRbdC5WS19GOT0xMjBdPVwiVktfRjlcIix0W3QuVktfRjEwPTEyMV09XCJWS19GMTBcIix0W3QuVktfRjExPTEyMl09XCJWS19GMTFcIix0W3QuVktfRjEyPTEyM109XCJWS19GMTJcIix0W3QuVktfRjEzPTEyNF09XCJWS19GMTNcIix0W3QuVktfRjE0PTEyNV09XCJWS19GMTRcIix0W3QuVktfRjE1PTEyNl09XCJWS19GMTVcIix0W3QuVktfRjE2PTEyN109XCJWS19GMTZcIix0W3QuVktfRjE3PTEyOF09XCJWS19GMTdcIix0W3QuVktfRjE4PTEyOV09XCJWS19GMThcIix0W3QuVktfRjE5PTEzMF09XCJWS19GMTlcIix0W3QuVktfRjIwPTEzMV09XCJWS19GMjBcIix0W3QuVktfRjIxPTEzMl09XCJWS19GMjFcIix0W3QuVktfRjIyPTEzM109XCJWS19GMjJcIix0W3QuVktfRjIzPTEzNF09XCJWS19GMjNcIix0W3QuVktfRjI0PTEzNV09XCJWS19GMjRcIix0W3QuVktfTlVNX0xPQ0s9MTQ0XT1cIlZLX05VTV9MT0NLXCIsdFt0LlZLX1NDUk9MTF9MT0NLPTE0NV09XCJWS19TQ1JPTExfTE9DS1wiLHRbdC5WS19DSVJDVU1GTEVYPTE2MF09XCJWS19DSVJDVU1GTEVYXCIsdFt0LlZLX0VYQ0xBTUFUSU9OPTE2MV09XCJWS19FWENMQU1BVElPTlwiLHRbdC5WS19ET1VCTEVfUVVPVEU9MTYyXT1cIlZLX0RPVUJMRV9RVU9URVwiLHRbdC5WS19IQVNIPTE2M109XCJWS19IQVNIXCIsdFt0LlZLX0RPTExBUj0xNjRdPVwiVktfRE9MTEFSXCIsdFt0LlZLX1BFUkNFTlQ9MTY1XT1cIlZLX1BFUkNFTlRcIix0W3QuVktfQU1QRVJTQU5EPTE2Nl09XCJWS19BTVBFUlNBTkRcIix0W3QuVktfVU5ERVJTQ09SRT0xNjddPVwiVktfVU5ERVJTQ09SRVwiLHRbdC5WS19PUEVOX1BBUkVOPTE2OF09XCJWS19PUEVOX1BBUkVOXCIsdFt0LlZLX0NMT1NFX1BBUkVOPTE2OV09XCJWS19DTE9TRV9QQVJFTlwiLHRbdC5WS19BU1RFUklTSz0xNzBdPVwiVktfQVNURVJJU0tcIix0W3QuVktfUExVUz0xNzFdPVwiVktfUExVU1wiLHRbdC5WS19QSVBFPTE3Ml09XCJWS19QSVBFXCIsdFt0LlZLX0hZUEhFTl9NSU5VUz0xNzNdPVwiVktfSFlQSEVOX01JTlVTXCIsdFt0LlZLX09QRU5fQ1VSTFlfQlJBQ0tFVD0xNzRdPVwiVktfT1BFTl9DVVJMWV9CUkFDS0VUXCIsdFt0LlZLX0NMT1NFX0NVUkxZX0JSQUNLRVQ9MTc1XT1cIlZLX0NMT1NFX0NVUkxZX0JSQUNLRVRcIix0W3QuVktfVElMREU9MTc2XT1cIlZLX1RJTERFXCIsdFt0LlZLX0NPTU1BPTE4OF09XCJWS19DT01NQVwiLHRbdC5WS19QRVJJT0Q9MTkwXT1cIlZLX1BFUklPRFwiLHRbdC5WS19TTEFTSD0xOTFdPVwiVktfU0xBU0hcIix0W3QuVktfQkFDS19RVU9URT0xOTJdPVwiVktfQkFDS19RVU9URVwiLHRbdC5WS19PUEVOX0JSQUNLRVQ9MjE5XT1cIlZLX09QRU5fQlJBQ0tFVFwiLHRbdC5WS19CQUNLX1NMQVNIPTIyMF09XCJWS19CQUNLX1NMQVNIXCIsdFt0LlZLX0NMT1NFX0JSQUNLRVQ9MjIxXT1cIlZLX0NMT1NFX0JSQUNLRVRcIix0W3QuVktfUVVPVEU9MjIyXT1cIlZLX1FVT1RFXCIsdFt0LlZLX01FVEE9MjI0XT1cIlZLX01FVEFcIix0W3QuVktfQUxUR1I9MjI1XT1cIlZLX0FMVEdSXCIsdFt0LlZLX1dJTj05MV09XCJWS19XSU5cIix0W3QuVktfS0FOQT0yMV09XCJWS19LQU5BXCIsdFt0LlZLX0hBTkdVTD0yMV09XCJWS19IQU5HVUxcIix0W3QuVktfRUlTVT0yMl09XCJWS19FSVNVXCIsdFt0LlZLX0pVTkpBPTIzXT1cIlZLX0pVTkpBXCIsdFt0LlZLX0ZJTkFMPTI0XT1cIlZLX0ZJTkFMXCIsdFt0LlZLX0hBTkpBPTI1XT1cIlZLX0hBTkpBXCIsdFt0LlZLX0tBTkpJPTI1XT1cIlZLX0tBTkpJXCIsdFt0LlZLX0NPTlZFUlQ9MjhdPVwiVktfQ09OVkVSVFwiLHRbdC5WS19OT05DT05WRVJUPTI5XT1cIlZLX05PTkNPTlZFUlRcIix0W3QuVktfQUNDRVBUPTMwXT1cIlZLX0FDQ0VQVFwiLHRbdC5WS19NT0RFQ0hBTkdFPTMxXT1cIlZLX01PREVDSEFOR0VcIix0W3QuVktfU0VMRUNUPTQxXT1cIlZLX1NFTEVDVFwiLHRbdC5WS19QUklOVD00Ml09XCJWS19QUklOVFwiLHRbdC5WS19FWEVDVVRFPTQzXT1cIlZLX0VYRUNVVEVcIix0W3QuVktfU0xFRVA9OTVdPVwiVktfU0xFRVBcIn0oUHx8KFA9e30pKTtjbGFzcyBIIGV4dGVuZHMgYntjb25zdHJ1Y3Rvcih0LGkpe2NvbnN0IGU9aS5zcGxpdChcIlxcblwiKTtsZXQgcz10Lmxlbmd0aDtmb3IobGV0IHQ9MDt0PGUubGVuZ3RoO3QrKylzPU1hdGgubWF4KHMsZVt0XS5sZW5ndGgpO2NvbnN0IHI9ZS5sZW5ndGg7dmFyIGgsbyxuO3N1cGVyKG5ldyBDKDAsMCxzLHIpLHQpLG49dm9pZCAwLChvPVwibGluZXNcIilpbihoPXRoaXMpP09iamVjdC5kZWZpbmVQcm9wZXJ0eShoLG8se3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTpoW29dPW4sdGhpcy5saW5lcz1lfWRyYXdDb250ZW50cyh0LGkpe2ZvcihsZXQgZT0wO2U8dGhpcy5saW5lcy5sZW5ndGg7ZSsrKXQuZHJhd1N0cmluZyhpLngsaS55K2UsdGhpcy5saW5lc1tlXSl9aGFuZGxlSW5wdXQodCxpKXtyZXR1cm4gdC5pc0tleVByZXNzZWQoUC5WS19FU0NBUEUpfX1mdW5jdGlvbiBGKHQsaSxlKXtyZXR1cm4gaSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse3ZhbHVlOmUsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2ldPWUsdH1jbGFzcyBNIGV4dGVuZHMgYntjb25zdHJ1Y3Rvcih0LGksZSl7bGV0IHM9dC5sZW5ndGg7Zm9yKGxldCB0PTA7dDxpLmxlbmd0aDt0Kyspcz1NYXRoLm1heChzLGlbdF0ubGVuZ3RoKzQpO2NvbnN0IHI9aS5sZW5ndGg7c3VwZXIobmV3IEMoMCwwLHMsciksdCksRih0aGlzLFwib3B0aW9uc1wiLHZvaWQgMCksRih0aGlzLFwiY2FsbGJhY2tcIix2b2lkIDApLEYodGhpcyxcImhvdmVySW5kZXhcIix2b2lkIDApLHRoaXMub3B0aW9ucz1pLHRoaXMuY2FsbGJhY2s9ZSx0aGlzLmhvdmVySW5kZXg9LTF9ZHJhd0NvbnRlbnRzKHQsaSl7Zm9yKGxldCBlPTA7ZTx0aGlzLm9wdGlvbnMubGVuZ3RoO2UrKyl7Y29uc3Qgcz1TdHJpbmcuZnJvbUNoYXJDb2RlKDY1K2UpK1wiIC0gXCIrdGhpcy5vcHRpb25zW2VdO2U9PT10aGlzLmhvdmVySW5kZXg/dC5kcmF3U3RyaW5nKGkueCxpLnkrZSxzLEEuQkxBQ0ssQS5XSElURSk6dC5kcmF3U3RyaW5nKGkueCxpLnkrZSxzLEEuV0hJVEUsQS5CTEFDSyl9fWhhbmRsZUlucHV0KHQsaSl7aWYodGhpcy5ob3ZlckluZGV4PS0xLHQubW91c2UueD49aS54JiZ0Lm1vdXNlLng8aS54K3RoaXMuY29udGVudHNSZWN0LndpZHRoJiZ0Lm1vdXNlLnk+PWkueSYmdC5tb3VzZS55PGkueSt0aGlzLmNvbnRlbnRzUmVjdC5oZWlnaHQmJih0aGlzLmhvdmVySW5kZXg9dC5tb3VzZS55LWkueSwxPT09dC5tb3VzZS5idXR0b25zWzBdLnVwQ291bnQpKXJldHVybiB0aGlzLmNhbGxiYWNrKHRoaXMuaG92ZXJJbmRleCksITA7Zm9yKGxldCBpPTA7aTx0aGlzLm9wdGlvbnMubGVuZ3RoO2krKylpZih0LmlzS2V5UHJlc3NlZChQLlZLX0EraSkpcmV0dXJuIHRoaXMuY2FsbGJhY2soaSksITA7cmV0dXJuIHQuaXNLZXlQcmVzc2VkKFAuVktfRVNDQVBFKX1pc01vdXNlT3Zlck9wdGlvbih0LGksZSl7cmV0dXJuIHQubW91c2UueD49aS54JiZ0Lm1vdXNlLng8aS54K3RoaXMuY29udGVudHNSZWN0LndpZHRoJiZ0Lm1vdXNlLnk9PT1pLnkrZX19Y29uc3QgRz1be2NoYXJDb2RlOmMuQkxPQ0tfVE9QX0hBTEYsYWN0aXZlOlsxLDEsMCwwXX0se2NoYXJDb2RlOmMuQkxPQ0tfUklHSFRfSEFMRixhY3RpdmU6WzAsMSwwLDFdfV07ZnVuY3Rpb24gWCh0LGkpe2NvbnN0IGU9bmV3IEltYWdlO2Uub25sb2FkPSgpPT57Y29uc3QgdD1lLndpZHRoLHM9ZS5oZWlnaHQscj1XKGUpLGg9bmV3IEsodCxzKTtsZXQgbz0wO2ZvcihsZXQgaT0wO2k8cztpKyspZm9yKGxldCBlPTA7ZTx0O2UrKyl7aC5nZXRDZWxsKGUsaSkuc2V0QmFja2dyb3VuZChhKHJbbysrXSxyW28rK10scltvKytdLHJbbysrXSkpfWkoaCl9LGUuc3JjPXR9ZnVuY3Rpb24gWSh0LGkpe2NvbnN0IGU9bmV3IEltYWdlO2Uub25sb2FkPSgpPT57Y29uc3QgdD1lLndpZHRoLHM9ZS5oZWlnaHQscj1XKGUpLGg9bmV3IEsodC8yLHMvMik7Zm9yKGxldCBpPTA7aTxzO2krPTIpZm9yKGxldCBlPTA7ZTx0O2UrPTIpayhoLHIsZSxpLHQpO2koaCl9LGUuc3JjPXR9ZnVuY3Rpb24gVyh0KXtjb25zdCBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7aS53aWR0aD10LndpZHRoLGkuaGVpZ2h0PXQuaGVpZ2h0O2NvbnN0IGU9aS5nZXRDb250ZXh0KFwiMmRcIik7cmV0dXJuIGUuZHJhd0ltYWdlKHQsMCwwKSxlLmdldEltYWdlRGF0YSgwLDAsdC53aWR0aCx0LmhlaWdodCkuZGF0YX1mdW5jdGlvbiBrKHQsaSxlLHMscil7Y29uc3QgaD00KihzKnIrZSksbz00KihzKnIrZSsxKSxuPTQqKChzKzEpKnIrZSksXz00KigocysxKSpyK2UrMSksYT1bW2lbaF0saVtoKzFdLGlbaCsyXV0sW2lbb10saVtvKzFdLGlbbysyXV0sW2lbbl0saVtuKzFdLGlbbisyXV0sW2lbX10saVtfKzFdLGlbXysyXV1dO2xldCBkPU51bWJlci5NQVhfVkFMVUUsQT0wLGw9bnVsbCxFPW51bGw7Zm9yKGxldCB0PTA7dDxHLmxlbmd0aDt0Kyspe2NvbnN0IGk9R1t0XSxlPVEoaS5hY3RpdmUsYSk7ZS5lcnJvcjxkJiYoZD1lLmVycm9yLEE9aS5jaGFyQ29kZSxsPWUuYmcsRT1lLmZnKX10LmRyYXdDaGFyKGUvMixzLzIsQSx6KEUpLHoobCkpfWZ1bmN0aW9uIFEodCxpKXtjb25zdCBlPVtbMCwwLDBdLFswLDAsMF1dLHM9W1swLDAsMF0sWzAsMCwwXV0scj1bMCwwXTtmb3IobGV0IHM9MDtzPDQ7cysrKXtmb3IobGV0IHI9MDtyPDM7cisrKWVbdFtzXV1bcl0rPWlbc11bcl07clt0W3NdXSsrfWZvcihsZXQgdD0wO3Q8Mjt0KyspZm9yKGxldCBpPTA7aTwzO2krKylzW3RdW2ldPWVbdF1baV0vclt0XTtsZXQgaD0wO2ZvcihsZXQgZT0wO2U8NDtlKyspe2xldCByPTA7Zm9yKGxldCBoPTA7aDwzO2grKyl7Y29uc3Qgbz1pW2VdW2hdLXNbdFtlXV1baF07cis9bypvfWgrPU1hdGguc3FydChyKX1yZXR1cm57Ymc6c1swXSxmZzpzWzFdLGVycm9yOmh9fWZ1bmN0aW9uIHoodCl7cmV0dXJuIGEodFswXSx0WzFdLHRbMl0pfWZ1bmN0aW9uIGoodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fWNsYXNzIFp7Y29uc3RydWN0b3IodCl7aih0aGlzLFwiZWxcIix2b2lkIDApLGoodGhpcyxcIndpZHRoXCIsdm9pZCAwKSxqKHRoaXMsXCJoZWlnaHRcIix2b2lkIDApLGoodGhpcyxcInByZXZYXCIsdm9pZCAwKSxqKHRoaXMsXCJwcmV2WVwiLHZvaWQgMCksaih0aGlzLFwieFwiLHZvaWQgMCksaih0aGlzLFwieVwiLHZvaWQgMCksaih0aGlzLFwiZHhcIix2b2lkIDApLGoodGhpcyxcImR5XCIsdm9pZCAwKSxqKHRoaXMsXCJidXR0b25zXCIsdm9pZCAwKSx0aGlzLmVsPXQuY2FudmFzLHRoaXMud2lkdGg9dC53aWR0aCx0aGlzLmhlaWdodD10LmhlaWdodCx0aGlzLnByZXZYPTAsdGhpcy5wcmV2WT0wLHRoaXMueD0wLHRoaXMueT0wLHRoaXMuZHg9MCx0aGlzLmR5PTAsdGhpcy5idXR0b25zPVtuZXcgeSxuZXcgeSxuZXcgeV07Y29uc3QgaT10aGlzLmVsO2kuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCh0PT50aGlzLmhhbmRsZUV2ZW50KHQpKSksaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCh0PT50aGlzLmhhbmRsZUV2ZW50KHQpKSksaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsKHQ9PnRoaXMuaGFuZGxlRXZlbnQodCkpKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCh0PT50aGlzLmhhbmRsZUV2ZW50KHQpKSk7Y29uc3QgZT10aGlzLmhhbmRsZVRvdWNoRXZlbnQuYmluZCh0aGlzKTtpLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsZSksaS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixlKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLGUpLGkuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGUpfWhhbmRsZVRvdWNoRXZlbnQodCl7aWYodC5zdG9wUHJvcGFnYXRpb24oKSx0LnByZXZlbnREZWZhdWx0KCksdC50b3VjaGVzLmxlbmd0aD4wKXtjb25zdCBpPXQudG91Y2hlc1swXTt0aGlzLnVwZGF0ZVBvc2l0aW9uKGkuY2xpZW50WCxpLmNsaWVudFkpLHRoaXMuYnV0dG9uc1swXS5zZXREb3duKCEwKX1lbHNlIHRoaXMuYnV0dG9uc1swXS5zZXREb3duKCExKX1oYW5kbGVFdmVudCh0KXt0LnN0b3BQcm9wYWdhdGlvbigpLHQucHJldmVudERlZmF1bHQoKSx0aGlzLnVwZGF0ZVBvc2l0aW9uKHQuY2xpZW50WCx0LmNsaWVudFkpLFwibW91c2Vkb3duXCI9PT10LnR5cGUmJih0aGlzLmJ1dHRvbnNbdC5idXR0b25dLnNldERvd24oITApLHRoaXMuZWwuZm9jdXMoKSksXCJtb3VzZXVwXCI9PT10LnR5cGUmJnRoaXMuYnV0dG9uc1t0LmJ1dHRvbl0uc2V0RG93bighMSl9dXBkYXRlUG9zaXRpb24odCxpKXtsZXQgZT10aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2NvbnN0IHM9dGhpcy53aWR0aC90aGlzLmhlaWdodCxyPWUud2lkdGgvZS5oZWlnaHQ7aWYoci1zPi4wMSl7Y29uc3QgdD1zKmUuaGVpZ2h0LGk9ZS53aWR0aC10O2U9bmV3IEMoTWF0aC5mbG9vcihpLzIpLDAsdCxlLmhlaWdodCl9aWYoci1zPC0uMDEpe2NvbnN0IHQ9ZS53aWR0aC9zLGk9ZS5oZWlnaHQtdDtlPW5ldyBDKDAsTWF0aC5mbG9vcihpLzIpLGUud2lkdGgsdCl9dGhpcy54PXRoaXMud2lkdGgqKHQtZS5sZWZ0KS9lLndpZHRofDAsdGhpcy55PXRoaXMuaGVpZ2h0KihpLWUudG9wKS9lLmhlaWdodHwwfXVwZGF0ZSh0KXt0aGlzLmR4PXRoaXMueC10aGlzLnByZXZYLHRoaXMuZHk9dGhpcy55LXRoaXMucHJldlksdGhpcy5wcmV2WD10aGlzLngsdGhpcy5wcmV2WT10aGlzLnk7Zm9yKGxldCBpPTA7aTx0aGlzLmJ1dHRvbnMubGVuZ3RoO2krKyl0aGlzLmJ1dHRvbnNbaV0udXBkYXRlKHQpfX1jb25zdCBKPVstMSwwLDEsLTEsMSwtMSwwLDFdLHE9Wy0xLC0xLC0xLDAsMCwxLDEsMV0sJD1bMS40LDEsMS40LDEsMSwxLjQsMSwxLjRdO2xldCB0dD0wO2Z1bmN0aW9uIGl0KHQsaSxlLHMpe3R0Kys7Y29uc3Qgcj10LmdyaWRbaS55XVtpLnhdO3IucGF0aElkPXR0LHIuZz0wLHIuaD1NYXRoLmh5cG90KGkueC1lLngsaS55LWUueSksci5wcmV2PW51bGw7Y29uc3QgaD1uZXcgc3QoW3JdKTtmb3IoO2guc2l6ZSgpPjA7KXtjb25zdCBpPWgucG9wKCk7aWYoaS54PT09ZS54JiZpLnk9PT1lLnkpcmV0dXJuIGV0KGkpO2ZvcihsZXQgcj0wO3I8Si5sZW5ndGg7cisrKXtjb25zdCBvPWkueCtKW3JdLG49aS55K3Fbcl07aWYobz49MCYmbzx0LndpZHRoJiZuPj0wJiZuPHQuaGVpZ2h0KXtjb25zdCBfPXQuZ3JpZFtuXVtvXTtpZihfLmJsb2NrZWQmJl8uZXhwbG9yZWQmJihvIT09ZS54fHxuIT09ZS55KSljb250aW51ZTtfLnBhdGhJZCE9PXR0JiYoXy5wYXRoSWQ9dHQsXy5nPTEvMCxfLmg9TWF0aC5oeXBvdChvLWUueCxuLWUueSksXy5wcmV2PW51bGwpO2NvbnN0IGE9aS5nKyRbcl07YTxfLmcmJmE8PXMmJihfLmc9YSxfLnByZXY9aSxoLmluc2VydChfKSl9fX19ZnVuY3Rpb24gZXQodCl7Y29uc3QgaT1bXTtsZXQgZT10O2Zvcig7ZTspaS5wdXNoKGUpLGU9ZS5wcmV2O3JldHVybiBpLnJldmVyc2UoKSxpfWNsYXNzIHN0e2NvbnN0cnVjdG9yKHQpe3ZhciBpLGUscztzPXZvaWQgMCwoZT1cInZhbHVlc1wiKWluKGk9dGhpcyk/T2JqZWN0LmRlZmluZVByb3BlcnR5KGksZSx7dmFsdWU6cyxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmlbZV09cyx0aGlzLnZhbHVlcz10fWluc2VydCh0KXtjb25zdCBpPXRoaXMudmFsdWVzO2xldCBlPTAscz1pLmxlbmd0aCxyPTA7Zm9yKDtlPHM7KXtjb25zdCBoPWUrcz4+PjEsbz1pW2hdO28uZytvLmg+dC5nK3QuaD8oZT1oKzEscj1lKToocz1oLHI9cyl9aS5zcGxpY2UociwwLHQpfXBvcCgpe3JldHVybiB0aGlzLnZhbHVlcy5wb3AoKX1zaXplKCl7cmV0dXJuIHRoaXMudmFsdWVzLmxlbmd0aH19ZnVuY3Rpb24gcnQodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fWNsYXNzIGh0e2NvbnN0cnVjdG9yKHQpe3J0KHRoaXMsXCJtXCIsdm9pZCAwKSxydCh0aGlzLFwiYVwiLHZvaWQgMCkscnQodGhpcyxcImNcIix2b2lkIDApLHJ0KHRoaXMsXCJzdGF0ZVwiLHZvaWQgMCksdGhpcy5tPTIxNDc0ODM2NDgsdGhpcy5hPTExMDM1MTUyNDUsdGhpcy5jPTEyMzQ1LHRoaXMuc3RhdGU9dHx8MX1uZXh0SW50KCl7cmV0dXJuIHRoaXMuc3RhdGU9KHRoaXMuYSp0aGlzLnN0YXRlK3RoaXMuYykldGhpcy5tLHRoaXMuc3RhdGV9bmV4dEZsb2F0KCl7cmV0dXJuIHRoaXMubmV4dEludCgpLyh0aGlzLm0tMSl9bmV4dFJhbmdlKHQsaSl7Y29uc3QgZT1pLXQscz10Kyh0aGlzLm5leHRJbnQoKS90aGlzLm0qZXwwKTtpZihpc05hTihzKSl0aHJvdyBuZXcgRXJyb3IoXCJyYW5kIG5hblwiKTtyZXR1cm4gc31jaG9vc2VJbmRleCh0KXtjb25zdCBpPXQucmVkdWNlKCgodCxpKT0+dCtpKSksZT10aGlzLm5leHRSYW5nZSgxLGkrMSk7bGV0IHM9MDtmb3IobGV0IGk9MDtpPHQubGVuZ3RoO2krKylpZihzKz10W2ldLGU8PXMpcmV0dXJuIGk7cmV0dXJuIHQubGVuZ3RoLTF9Y2hvb3NlS2V5KHQpe2NvbnN0IGk9T2JqZWN0LmtleXModCksZT1pLm1hcCgoaT0+dFtpXSkpO3JldHVybiBpW3RoaXMuY2hvb3NlSW5kZXgoZSldfX1mdW5jdGlvbiBvdCh0LGksZSl7cmV0dXJuIGkgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxpLHt2YWx1ZTplLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtpXT1lLHR9ZnVuY3Rpb24gbnQodCxpKXtyZXR1cm4gdC9pKjItMX1jb25zdCBfdD17Zm9udDpWfTtjbGFzcyBhdCBleHRlbmRzIEt7Y29uc3RydWN0b3IodCxpLGUscyl7c3VwZXIoaSxlKSxvdCh0aGlzLFwiY2FudmFzXCIsdm9pZCAwKSxvdCh0aGlzLFwiZm9udFwiLHZvaWQgMCksb3QodGhpcyxcInBpeGVsV2lkdGhcIix2b2lkIDApLG90KHRoaXMsXCJwaXhlbEhlaWdodFwiLHZvaWQgMCksb3QodGhpcyxcImtleXNcIix2b2lkIDApLG90KHRoaXMsXCJtb3VzZVwiLHZvaWQgMCksb3QodGhpcyxcImdsXCIsdm9pZCAwKSxvdCh0aGlzLFwicHJvZ3JhbVwiLHZvaWQgMCksb3QodGhpcyxcInBvc2l0aW9uQXR0cmliTG9jYXRpb25cIix2b2lkIDApLG90KHRoaXMsXCJ0ZXh0dXJlQXR0cmliTG9jYXRpb25cIix2b2lkIDApLG90KHRoaXMsXCJmZ0NvbG9yQXR0cmliTG9jYXRpb25cIix2b2lkIDApLG90KHRoaXMsXCJiZ0NvbG9yQXR0cmliTG9jYXRpb25cIix2b2lkIDApLG90KHRoaXMsXCJwb3NpdGlvbnNBcnJheVwiLHZvaWQgMCksb3QodGhpcyxcImluZGV4QXJyYXlcIix2b2lkIDApLG90KHRoaXMsXCJ0ZXh0dXJlQXJyYXlcIix2b2lkIDApLG90KHRoaXMsXCJmb3JlZ3JvdW5kVWludDhBcnJheVwiLHZvaWQgMCksb3QodGhpcyxcImZvcmVncm91bmREYXRhVmlld1wiLHZvaWQgMCksb3QodGhpcyxcImJhY2tncm91bmRVaW50OEFycmF5XCIsdm9pZCAwKSxvdCh0aGlzLFwiYmFja2dyb3VuZERhdGFWaWV3XCIsdm9pZCAwKSxvdCh0aGlzLFwicG9zaXRpb25CdWZmZXJcIix2b2lkIDApLG90KHRoaXMsXCJpbmRleEJ1ZmZlclwiLHZvaWQgMCksb3QodGhpcyxcInRleHR1cmVCdWZmZXJcIix2b2lkIDApLG90KHRoaXMsXCJmb3JlZ3JvdW5kQnVmZmVyXCIsdm9pZCAwKSxvdCh0aGlzLFwiYmFja2dyb3VuZEJ1ZmZlclwiLHZvaWQgMCksb3QodGhpcyxcInRleHR1cmVcIix2b2lkIDApLG90KHRoaXMsXCJsYXN0UmVuZGVyVGltZVwiLHZvaWQgMCksb3QodGhpcyxcInJlbmRlckRlbHRhXCIsdm9pZCAwKSxvdCh0aGlzLFwiZnBzXCIsdm9pZCAwKSxvdCh0aGlzLFwiYXZlcmFnZUZwc1wiLHZvaWQgMCksb3QodGhpcyxcInVwZGF0ZVwiLHZvaWQgMCkscz1zfHxfdCx0aGlzLmNhbnZhcz10LHRoaXMuZm9udD1zLmZvbnR8fFYsdGhpcy5waXhlbFdpZHRoPWkqdGhpcy5mb250LmNoYXJXaWR0aCx0aGlzLnBpeGVsSGVpZ2h0PWUqdGhpcy5mb250LmNoYXJIZWlnaHQsdC53aWR0aD10aGlzLnBpeGVsV2lkdGgsdC5oZWlnaHQ9dGhpcy5waXhlbEhlaWdodCx0LnN0eWxlLmltYWdlUmVuZGVyaW5nPVwicGl4ZWxhdGVkXCIsdC5zdHlsZS5vdXRsaW5lPVwibm9uZVwiLHQudGFiSW5kZXg9MCx0aGlzLmhhbmRsZVJlc2l6ZSgpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsKCgpPT50aGlzLmhhbmRsZVJlc2l6ZSgpKSksdGhpcy5rZXlzPW5ldyB4KHQpLHRoaXMubW91c2U9bmV3IFoodGhpcyk7Y29uc3Qgcj10LmdldENvbnRleHQoXCJ3ZWJnbFwiLHthbnRpYWxpYXM6ITF9KTtpZighcil0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaW5pdGlhbGl6ZSBXZWJHTC4gWW91ciBicm93c2VyIG1heSBub3Qgc3VwcG9ydCBpdC5cIik7Y29uc3QgaD1yLmNyZWF0ZVByb2dyYW0oKTtpZighaCl0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaW5pdGlhbGl6ZSBXZWJHTC4gWW91ciBicm93c2VyIG1heSBub3Qgc3VwcG9ydCBpdC5cIik7dGhpcy5nbD1yLHRoaXMucHJvZ3JhbT1oLHIuYXR0YWNoU2hhZGVyKGgsdGhpcy5idWlsZFNoYWRlcihyLlZFUlRFWF9TSEFERVIsXCJhdHRyaWJ1dGUgdmVjMiBhO2F0dHJpYnV0ZSB2ZWMyIGI7YXR0cmlidXRlIHZlYzMgYzthdHRyaWJ1dGUgdmVjMyBkO3ZhcnlpbmcgaGlnaHAgdmVjMiBlO3ZhcnlpbmcgaGlnaHAgdmVjNCBmO3ZhcnlpbmcgaGlnaHAgdmVjNCBnO3ZvaWQgbWFpbih2b2lkKXtnbF9Qb3NpdGlvbj12ZWM0KGEueCxhLnksMCwxKTtlPWIvMTYuMDtmPXZlYzQoYy5yLGMuZyxjLmIsMSk7Zz12ZWM0KGQucixkLmcsZC5iLDEpO31cIikpLHIuYXR0YWNoU2hhZGVyKGgsdGhpcy5idWlsZFNoYWRlcihyLkZSQUdNRU5UX1NIQURFUixcInZhcnlpbmcgaGlnaHAgdmVjMiBlO3ZhcnlpbmcgaGlnaHAgdmVjNCBmO3ZhcnlpbmcgaGlnaHAgdmVjNCBnO3VuaWZvcm0gYm9vbCBoO3VuaWZvcm0gc2FtcGxlcjJEIHM7dm9pZCBtYWluKHZvaWQpe2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQocyxlKTtpZihoKXtpZihnbF9GcmFnQ29sb3IuYTwwLjEpe2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQocyxnLnJnKjE2LjArZnJhY3QoZSoxNi4wKS8xNi4wKTt9fWVsc2V7aWYoZ2xfRnJhZ0NvbG9yLnI8MC4xKSB7Z2xfRnJhZ0NvbG9yPWc7fSBlbHNlIHtnbF9GcmFnQ29sb3I9Zjt9fX1cIikpLHIubGlua1Byb2dyYW0oaCksci51c2VQcm9ncmFtKGgpLHRoaXMuZm9udC5ncmFwaGljYWwmJnIudW5pZm9ybTFpKHIuZ2V0VW5pZm9ybUxvY2F0aW9uKGgsXCJoXCIpLDEpLHRoaXMucG9zaXRpb25BdHRyaWJMb2NhdGlvbj10aGlzLmdldEF0dHJpYkxvY2F0aW9uKFwiYVwiKSx0aGlzLnRleHR1cmVBdHRyaWJMb2NhdGlvbj10aGlzLmdldEF0dHJpYkxvY2F0aW9uKFwiYlwiKSx0aGlzLmZnQ29sb3JBdHRyaWJMb2NhdGlvbj10aGlzLmdldEF0dHJpYkxvY2F0aW9uKFwiY1wiKSx0aGlzLmJnQ29sb3JBdHRyaWJMb2NhdGlvbj10aGlzLmdldEF0dHJpYkxvY2F0aW9uKFwiZFwiKTtjb25zdCBvPWkqZTt0aGlzLnBvc2l0aW9uc0FycmF5PW5ldyBGbG9hdDMyQXJyYXkoMypvKjQpLHRoaXMuaW5kZXhBcnJheT1uZXcgVWludDE2QXJyYXkoNipvKSx0aGlzLnRleHR1cmVBcnJheT1uZXcgRmxvYXQzMkFycmF5KDIqbyo0KSx0aGlzLmZvcmVncm91bmRVaW50OEFycmF5PW5ldyBVaW50OEFycmF5KDQqbyo0KSx0aGlzLmZvcmVncm91bmREYXRhVmlldz1uZXcgRGF0YVZpZXcodGhpcy5mb3JlZ3JvdW5kVWludDhBcnJheS5idWZmZXIpLHRoaXMuYmFja2dyb3VuZFVpbnQ4QXJyYXk9bmV3IFVpbnQ4QXJyYXkoNCpvKjQpLHRoaXMuYmFja2dyb3VuZERhdGFWaWV3PW5ldyBEYXRhVmlldyh0aGlzLmJhY2tncm91bmRVaW50OEFycmF5LmJ1ZmZlcik7bGV0IG49MCxfPTAsYT0wO2ZvcihsZXQgdD0wO3Q8ZTt0KyspZm9yKGxldCBzPTA7czxpO3MrKyl0aGlzLnBvc2l0aW9uc0FycmF5W24rK109bnQocyxpKSx0aGlzLnBvc2l0aW9uc0FycmF5W24rK109LW50KHQsZSksdGhpcy5wb3NpdGlvbnNBcnJheVtuKytdPW50KHMrMSxpKSx0aGlzLnBvc2l0aW9uc0FycmF5W24rK109LW50KHQsZSksdGhpcy5wb3NpdGlvbnNBcnJheVtuKytdPW50KHMrMSxpKSx0aGlzLnBvc2l0aW9uc0FycmF5W24rK109LW50KHQrMSxlKSx0aGlzLnBvc2l0aW9uc0FycmF5W24rK109bnQocyxpKSx0aGlzLnBvc2l0aW9uc0FycmF5W24rK109LW50KHQrMSxlKSx0aGlzLmluZGV4QXJyYXlbXysrXT1hKzAsdGhpcy5pbmRleEFycmF5W18rK109YSsxLHRoaXMuaW5kZXhBcnJheVtfKytdPWErMix0aGlzLmluZGV4QXJyYXlbXysrXT1hKzAsdGhpcy5pbmRleEFycmF5W18rK109YSsyLHRoaXMuaW5kZXhBcnJheVtfKytdPWErMyxhKz00O3RoaXMucG9zaXRpb25CdWZmZXI9ci5jcmVhdGVCdWZmZXIoKSx0aGlzLmluZGV4QnVmZmVyPXIuY3JlYXRlQnVmZmVyKCksdGhpcy50ZXh0dXJlQnVmZmVyPXIuY3JlYXRlQnVmZmVyKCksdGhpcy5mb3JlZ3JvdW5kQnVmZmVyPXIuY3JlYXRlQnVmZmVyKCksdGhpcy5iYWNrZ3JvdW5kQnVmZmVyPXIuY3JlYXRlQnVmZmVyKCksci5iaW5kQnVmZmVyKHIuQVJSQVlfQlVGRkVSLHRoaXMucG9zaXRpb25CdWZmZXIpLHIuYnVmZmVyRGF0YShyLkFSUkFZX0JVRkZFUix0aGlzLnBvc2l0aW9uc0FycmF5LHIuU1RBVElDX0RSQVcpLHIuYmluZEJ1ZmZlcihyLkVMRU1FTlRfQVJSQVlfQlVGRkVSLHRoaXMuaW5kZXhCdWZmZXIpLHIuYnVmZmVyRGF0YShyLkVMRU1FTlRfQVJSQVlfQlVGRkVSLHRoaXMuaW5kZXhBcnJheSxyLlNUQVRJQ19EUkFXKSx0aGlzLnRleHR1cmU9dGhpcy5sb2FkVGV4dHVyZSh0aGlzLmZvbnQudXJsKSx0aGlzLmxhc3RSZW5kZXJUaW1lPTAsdGhpcy5yZW5kZXJEZWx0YT0wLHRoaXMuZnBzPTAsdGhpcy5hdmVyYWdlRnBzPTAsdGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKX1oYW5kbGVSZXNpemUoKXtjb25zdCB0PXRoaXMuY2FudmFzLnBhcmVudEVsZW1lbnQ7aWYoIXQpcmV0dXJuO2NvbnN0IGk9dC5vZmZzZXRXaWR0aC90aGlzLnBpeGVsV2lkdGgsZT10Lm9mZnNldEhlaWdodC90aGlzLnBpeGVsSGVpZ2h0LHM9TWF0aC5taW4oaSxlKSxyPXMqdGhpcy5waXhlbFdpZHRofDAsaD1zKnRoaXMucGl4ZWxIZWlnaHR8MDt0aGlzLmNhbnZhcy5zdHlsZS53aWR0aD1yK1wicHhcIix0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQ9aCtcInB4XCJ9Z2V0QXR0cmliTG9jYXRpb24odCl7Y29uc3QgaT10aGlzLmdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ3JhbSx0KTtyZXR1cm4gdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShpKSxpfWZsdXNoKCl7bGV0IHQ9MCxpPTA7Zm9yKGxldCBlPTA7ZTx0aGlzLmhlaWdodDtlKyspZm9yKGxldCBzPTA7czx0aGlzLndpZHRoO3MrKyl7Y29uc3Qgcj10aGlzLmdldENlbGwocyxlKTtpZighci5kaXJ0eSl7dCs9OCxpKz0xNjtjb250aW51ZX1jb25zdCBoPXIuY2hhckNvZGUlMTYsbz1yLmNoYXJDb2RlLzE2fDA7dGhpcy50ZXh0dXJlQXJyYXlbdCsrXT1oLHRoaXMudGV4dHVyZUFycmF5W3QrK109byx0aGlzLnRleHR1cmVBcnJheVt0KytdPWgrMSx0aGlzLnRleHR1cmVBcnJheVt0KytdPW8sdGhpcy50ZXh0dXJlQXJyYXlbdCsrXT1oKzEsdGhpcy50ZXh0dXJlQXJyYXlbdCsrXT1vKzEsdGhpcy50ZXh0dXJlQXJyYXlbdCsrXT1oLHRoaXMudGV4dHVyZUFycmF5W3QrK109bysxO2ZvcihsZXQgdD0wO3Q8NDt0KyspdGhpcy5mb3JlZ3JvdW5kRGF0YVZpZXcuc2V0VWludDMyKGksci5mZywhMSksdGhpcy5iYWNrZ3JvdW5kRGF0YVZpZXcuc2V0VWludDMyKGksci5iZywhMSksaSs9NDtyLmRpcnR5PSExfX1pc0tleURvd24odCl7Y29uc3QgaT10aGlzLmtleXMuZ2V0S2V5KHQpO3JldHVybiEhaSYmaS5kb3dufWlzS2V5UHJlc3NlZCh0KXtjb25zdCBpPXRoaXMua2V5cy5nZXRLZXkodCk7cmV0dXJuISFpJiZpLmlzUHJlc3NlZCgpfWdldEtleURvd25Db3VudCh0KXtjb25zdCBpPXRoaXMua2V5cy5nZXRLZXkodCk7cmV0dXJuIGk/aS5kb3duQ291bnQ6MH1nZXRNb3ZlbWVudEtleSgpe3JldHVybiB0aGlzLmlzS2V5UHJlc3NlZChQLlZLX05VTVBBRDEpfHx0aGlzLmlzS2V5UHJlc3NlZChQLlZLX0IpP25ldyBSKC0xLDEpOnRoaXMuaXNLZXlQcmVzc2VkKFAuVktfTlVNUEFEMil8fHRoaXMuaXNLZXlQcmVzc2VkKFAuVktfSil8fHRoaXMuaXNLZXlQcmVzc2VkKFAuVktfRE9XTik/bmV3IFIoMCwxKTp0aGlzLmlzS2V5UHJlc3NlZChQLlZLX05VTVBBRDMpfHx0aGlzLmlzS2V5UHJlc3NlZChQLlZLX04pP25ldyBSKDEsMSk6dGhpcy5pc0tleVByZXNzZWQoUC5WS19OVU1QQUQ0KXx8dGhpcy5pc0tleVByZXNzZWQoUC5WS19IKXx8dGhpcy5pc0tleVByZXNzZWQoUC5WS19MRUZUKT9uZXcgUigtMSwwKTp0aGlzLmlzS2V5UHJlc3NlZChQLlZLX05VTVBBRDUpfHx0aGlzLmlzS2V5UHJlc3NlZChQLlZLX1BFUklPRCk/bmV3IFIoMCwwKTp0aGlzLmlzS2V5UHJlc3NlZChQLlZLX05VTVBBRDYpfHx0aGlzLmlzS2V5UHJlc3NlZChQLlZLX0wpfHx0aGlzLmlzS2V5UHJlc3NlZChQLlZLX1JJR0hUKT9uZXcgUigxLDApOnRoaXMuaXNLZXlQcmVzc2VkKFAuVktfTlVNUEFENyl8fHRoaXMuaXNLZXlQcmVzc2VkKFAuVktfWSk/bmV3IFIoLTEsLTEpOnRoaXMuaXNLZXlQcmVzc2VkKFAuVktfTlVNUEFEOCl8fHRoaXMuaXNLZXlQcmVzc2VkKFAuVktfSyl8fHRoaXMuaXNLZXlQcmVzc2VkKFAuVktfRE9XTik/bmV3IFIoMCwtMSk6dGhpcy5pc0tleVByZXNzZWQoUC5WS19OVU1QQUQ5KXx8dGhpcy5pc0tleVByZXNzZWQoUC5WS19VKT9uZXcgUigxLC0xKTp2b2lkIDB9YnVpbGRTaGFkZXIodCxpKXtjb25zdCBlPXRoaXMuZ2wscz1lLmNyZWF0ZVNoYWRlcih0KTtpZighcyl0aHJvdyBuZXcgRXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCBjb21waWxpbmcgdGhlIHNoYWRlcjogXCIpO2lmKGUuc2hhZGVyU291cmNlKHMsaSksZS5jb21waWxlU2hhZGVyKHMpLCFlLmdldFNoYWRlclBhcmFtZXRlcihzLGUuQ09NUElMRV9TVEFUVVMpKXRocm93IG5ldyBFcnJvcihcIkFuIGVycm9yIG9jY3VycmVkIGNvbXBpbGluZyB0aGUgc2hhZGVyOiBcIitlLmdldFNoYWRlckluZm9Mb2cocykpO3JldHVybiBzfWxvYWRUZXh0dXJlKHQpe2NvbnN0IGk9dGhpcy5nbCxlPWkuY3JlYXRlVGV4dHVyZSgpO2kuYmluZFRleHR1cmUoaS5URVhUVVJFXzJELGUpO2NvbnN0IHM9aS5SR0JBLHI9aS5SR0JBLGg9aS5VTlNJR05FRF9CWVRFLG89bmV3IFVpbnQ4QXJyYXkoWzAsMCwwLDI1NV0pO2kudGV4SW1hZ2UyRChpLlRFWFRVUkVfMkQsMCxzLDEsMSwwLHIsaCxvKTtjb25zdCBuPW5ldyBJbWFnZTtyZXR1cm4gbi5vbmxvYWQ9KCk9PntpLmJpbmRUZXh0dXJlKGkuVEVYVFVSRV8yRCxlKSxpLnRleEltYWdlMkQoaS5URVhUVVJFXzJELDAscyxyLGgsbiksaS50ZXhQYXJhbWV0ZXJpKGkuVEVYVFVSRV8yRCxpLlRFWFRVUkVfV1JBUF9TLGkuQ0xBTVBfVE9fRURHRSksaS50ZXhQYXJhbWV0ZXJpKGkuVEVYVFVSRV8yRCxpLlRFWFRVUkVfV1JBUF9ULGkuQ0xBTVBfVE9fRURHRSksaS50ZXhQYXJhbWV0ZXJpKGkuVEVYVFVSRV8yRCxpLlRFWFRVUkVfTUFHX0ZJTFRFUixpLkxJTkVBUiksaS50ZXhQYXJhbWV0ZXJpKGkuVEVYVFVSRV8yRCxpLlRFWFRVUkVfTUlOX0ZJTFRFUixpLkxJTkVBUil9LG4uc3JjPXQsZX1yZW5kZXIoKXtjb25zdCB0PXRoaXMuZ2w7dC5jbGVhckNvbG9yKDAsMCwwLDEpLHQuY2xlYXJEZXB0aCgxKSx0LmNsZWFyKHQuQ09MT1JfQlVGRkVSX0JJVHx0LkRFUFRIX0JVRkZFUl9CSVQpLHQudmlld3BvcnQoMCwwLHRoaXMucGl4ZWxXaWR0aCx0aGlzLnBpeGVsSGVpZ2h0KTt7Y29uc3QgaT0yLGU9dC5GTE9BVCxzPSExLHI9MCxoPTA7dC5iaW5kQnVmZmVyKHQuQVJSQVlfQlVGRkVSLHRoaXMucG9zaXRpb25CdWZmZXIpLHQudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnBvc2l0aW9uQXR0cmliTG9jYXRpb24saSxlLHMscixoKX17Y29uc3QgaT0yLGU9dC5GTE9BVCxzPSExLHI9MCxoPTA7dC5iaW5kQnVmZmVyKHQuQVJSQVlfQlVGRkVSLHRoaXMudGV4dHVyZUJ1ZmZlciksdC5idWZmZXJEYXRhKHQuQVJSQVlfQlVGRkVSLHRoaXMudGV4dHVyZUFycmF5LHQuRFlOQU1JQ19EUkFXKSx0LnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy50ZXh0dXJlQXR0cmliTG9jYXRpb24saSxlLHMscixoKX17Y29uc3QgaT00LGU9dC5VTlNJR05FRF9CWVRFLHM9ITAscj0wLGg9MDt0LmJpbmRCdWZmZXIodC5BUlJBWV9CVUZGRVIsdGhpcy5mb3JlZ3JvdW5kQnVmZmVyKSx0LmJ1ZmZlckRhdGEodC5BUlJBWV9CVUZGRVIsdGhpcy5mb3JlZ3JvdW5kVWludDhBcnJheSx0LkRZTkFNSUNfRFJBVyksdC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuZmdDb2xvckF0dHJpYkxvY2F0aW9uLGksZSxzLHIsaCl9e2NvbnN0IGk9NCxlPXQuVU5TSUdORURfQllURSxzPSEwLHI9MCxoPTA7dC5iaW5kQnVmZmVyKHQuQVJSQVlfQlVGRkVSLHRoaXMuYmFja2dyb3VuZEJ1ZmZlciksdC5idWZmZXJEYXRhKHQuQVJSQVlfQlVGRkVSLHRoaXMuYmFja2dyb3VuZFVpbnQ4QXJyYXksdC5EWU5BTUlDX0RSQVcpLHQudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLmJnQ29sb3JBdHRyaWJMb2NhdGlvbixpLGUscyxyLGgpfXQuYmluZEJ1ZmZlcih0LkVMRU1FTlRfQVJSQVlfQlVGRkVSLHRoaXMuaW5kZXhCdWZmZXIpLHQudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pLHQuYWN0aXZlVGV4dHVyZSh0LlRFWFRVUkUwKSx0LmJpbmRUZXh0dXJlKHQuVEVYVFVSRV8yRCx0aGlzLnRleHR1cmUpO3tjb25zdCBpPXRoaXMud2lkdGgqdGhpcy5oZWlnaHQqNixlPXQuVU5TSUdORURfU0hPUlQscz0wO3QuZHJhd0VsZW1lbnRzKHQuVFJJQU5HTEVTLGksZSxzKX19cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCl7d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgodD0+dGhpcy5yZW5kZXJMb29wKHQpKSl9cmVuZGVyTG9vcCh0KXswPT09dGhpcy5sYXN0UmVuZGVyVGltZT8odGhpcy5sYXN0UmVuZGVyVGltZT10LHRoaXMuZnBzPTApOih0aGlzLnJlbmRlckRlbHRhPXQtdGhpcy5sYXN0UmVuZGVyVGltZSx0aGlzLmxhc3RSZW5kZXJUaW1lPXQsdGhpcy5mcHM9MWUzL3RoaXMucmVuZGVyRGVsdGEsdGhpcy5hdmVyYWdlRnBzPS45NSp0aGlzLmF2ZXJhZ2VGcHMrLjA1KnRoaXMuZnBzKSx0aGlzLmtleXMudXBkYXRlS2V5cyh0KSx0aGlzLm1vdXNlLnVwZGF0ZSh0KSx0aGlzLnVwZGF0ZSYmdGhpcy51cGRhdGUoKSx0aGlzLmZsdXNoKCksdGhpcy5yZW5kZXIoKSx0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgpfX19fSxpPXt9O2Z1bmN0aW9uIGUocyl7aWYoaVtzXSlyZXR1cm4gaVtzXS5leHBvcnRzO3ZhciByPWlbc109e2V4cG9ydHM6e319O3JldHVybiB0W3NdKHIsci5leHBvcnRzLGUpLHIuZXhwb3J0c31yZXR1cm4gZS5kPSh0LGkpPT57Zm9yKHZhciBzIGluIGkpZS5vKGkscykmJiFlLm8odCxzKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQscyx7ZW51bWVyYWJsZTohMCxnZXQ6aVtzXX0pfSxlLm89KHQsaSk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGkpLGUucj10PT57XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LGUoNjEyKX0pKCl9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13Z2x0LmpzLm1hcCIsIi8qXHJcbk1vZHVsYXIgQUk6XHJcbiAgICBmdW5jdGlvbnMgaW4gb3JkZXIgdG8gbWFrZSBpdCBlYXN5IHRvIHN3aXRjaCBpbiBhbmQgb3V0IGRpZmZlcmVudCBBSSBpbnRvIGVuZW1pZXMvZ29sZW1zLlxyXG4gICAgKipNb3ZlbWVudCoqXHJcbiAgICB6b21iaWUgaG9yZGUtZXNxdWUgbW92ZW1lbnRcclxuICAgIGZvcm1hdGlvbmFsIG1hcmNoaW5nIGZvcndhcmRcclxuICAgIGZvcm1hdGlvbiByZWluZm9yY2luZyBmcm9tIHNwYXduXHJcbiAgICAqKlRhcmdldHRpbmcqKlxyXG4gICAgdGFyZ2V0IG5lYXJlc3RcclxuICAgIGR1bWIgdGFyZ2V0IGFkamFjZW50IHJhbmRvbVxyXG4gICAgZm9ybWF0aW9uLWF0dGFjayBuZWlnaGJvcidzIHRhcmdldHNcclxuICAgIGZvcm1hdGlvbi1waGFsYW54IGF0dGFjayBpbiBjb2x1bW5zIGZvcndhcmRcclxuICAgIC0tVGFyZ2V0dGluZzogRmluZCBhIHdheSB0byBpbmNsdWRlIHJhbmdlXHJcbiAgICAtLVRhcmdldHRpbmc6IEFkZCB0YXJnZXR0aW5nIGNvb2xkb3duIHRvIHJlZHVjZSBwcm9jZXNzaW5nIGxvYWQuIEkuZS4sIHVwZGF0ZSBldmVyeSA1IGFjdGlvbnMuXHJcbiAgICBUYXJnZXQgcmFuZG9tIGluIHJhbmdlXHJcbiAgICBUYXJnZXQgcmFuZG9tIGdsb2JhbGx5XHJcbiovXHJcbmltcG9ydCB7IGhhc01vdmVkIH0gZnJvbSBcIi4vY29tcG9uZW50c1wiXHJcblxyXG5cclxuZXhwb3J0IGxldCBlbnRpdHlBSSA9IHtcclxuICAgIG1vdmVtZW50OiB7XHJcbiAgICAgICAgLy9tb3ZlIGxpa2UgYSB6b21iaWUgaG9yZGUuIFJlcXVpcmVzIGVudGl0eSwgYSB0YXJnZXQsIG1vdmVtZW50IGRpcmVjdGlvblxyXG4gICAgICAgIGhvcmRlOiBmdW5jdGlvbihlbnRpdHkpIHtcclxuICAgICAgICAgICAgbGV0IGNhcmRpbmFscyA9IFtbMCwxXSxbMSwxXSxbMSwwXSxbMSwtMV0sWzAsLTFdLFstMSwtMV0sWy0xLDBdLFstMSwxXV1cclxuICAgICAgICAgICAgLy9kZXRlcm1pbmUgY2FyZGluYWwgbW92ZW1lbnQgdG8gbmVhcmVzdCBlbmVteVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihlbnRpdHkuY29tYmF0LnggLSBlbnRpdHkucG9zaXRpb24ueCwgZW50aXR5LmNvbWJhdC55IC0gZW50aXR5LnBvc2l0aW9uLnkpKiAxODAgLyBNYXRoLlBJXHJcbiAgICAgICAgICAgICAgICBsZXQgbG93QW5nbGUgPSBpICogNDUgLSAyMi41XHJcbiAgICAgICAgICAgICAgICBsZXQgaGlnaEFuZ2xlID0gaSAqIDQ1ICsgMjIuNVxyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguc2lnbihsb3dBbmdsZSkgPT0gLTEpIHtsb3dBbmdsZSArPSAzNjB9XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5zaWduKGFuZ2xlKSA9PSAtMSkge2FuZ2xlICs9IDM2MH1cclxuICAgICAgICAgICAgICAgIGlmICgoaSA9PSAwICYmIChhbmdsZSA+PSAzMzcuNSB8fCBhbmdsZSA8PSAyMi41KSkgfHwgKGxvd0FuZ2xlIDw9IGFuZ2xlICYmIGFuZ2xlIDw9IGhpZ2hBbmdsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkubW92ZW1lbnQueCA9IGNhcmRpbmFsc1tpXVswXVxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5tb3ZlbWVudC55ID0gY2FyZGluYWxzW2ldWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsID0gaVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2RldGVybWluZSBpZiBwYXRoIGZvcndhcmQgaXMgZW1wdHlcclxuICAgICAgICAgICAgaWYgKCFsb2NhdGlvbklkWyhlbnRpdHkucG9zaXRpb24ueCArIGVudGl0eS5tb3ZlbWVudC54KSArIFwiLFwiICsgKGVudGl0eS5wb3NpdGlvbi55ICsgZW50aXR5Lm1vdmVtZW50LnkpXSkge1xyXG4gICAgICAgICAgICAgICAgLy9lbXB0eSwgbW92ZSBzdHJhaWdodCB0b3dhcmRzIHRhcmdldFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9kZWNpZGUgd2hpY2ggZGlyZWN0aW9ucyBhcmUgdmlhYmxlIHRvIGdvIHRvXHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tRGlyZWN0aW9uID0gW11cclxuICAgICAgICAgICAgICAgIC8vZnJvbnQgbGVmdFxyXG4gICAgICAgICAgICAgICAgaWYgKCFsb2NhdGlvbklkWyhlbnRpdHkucG9zaXRpb24ueCArIGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsICsgMSkgJSA4KVswXSkgKyBcIixcIiArIChlbnRpdHkucG9zaXRpb24ueSArIGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsICsgMSkgJSA4KVsxXSldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tRGlyZWN0aW9uLnB1c2goXCJGcm9udCBMZWZ0XCIpXHJcbiAgICAgICAgICAgICAgICAvL2Zyb250IHJpZ2h0XHJcbiAgICAgICAgICAgICAgICB9IGlmICghbG9jYXRpb25JZFsoZW50aXR5LnBvc2l0aW9uLnggKyBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCAtIDEpICUgOClbMF0pICsgXCIsXCIgKyAoZW50aXR5LnBvc2l0aW9uLnkgKyBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCAtIDEpICUgOClbMV0pXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbURpcmVjdGlvbi5wdXNoKFwiRnJvbnQgUmlnaHRcIilcclxuXHJcbiAgICAgICAgICAgICAgICAvL3NpZGUgbGVmdFxyXG4gICAgICAgICAgICAgICAgfSBpZiAoIWxvY2F0aW9uSWRbKGVudGl0eS5wb3NpdGlvbi54ICsgY2FyZGluYWxzLmF0KChlbnRpdHkubW92ZW1lbnQuY2FyZGluYWwgKyAyKSAlIDgpWzBdKSArIFwiLFwiICsgKGVudGl0eS5wb3NpdGlvbi55ICsgY2FyZGluYWxzLmF0KChlbnRpdHkubW92ZW1lbnQuY2FyZGluYWwgKyAyKSAlIDgpWzFdKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICByYW5kb21EaXJlY3Rpb24ucHVzaChcIlNpZGUgTGVmdFwiKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vc2lkZSByaWdodFxyXG4gICAgICAgICAgICAgICAgfSBpZiAoIWxvY2F0aW9uSWRbKGVudGl0eS5wb3NpdGlvbi54ICsgY2FyZGluYWxzLmF0KChlbnRpdHkubW92ZW1lbnQuY2FyZGluYWwgLSAyKSAlIDgpWzBdKSArIFwiLFwiICsgKGVudGl0eS5wb3NpdGlvbi55ICsgY2FyZGluYWxzLmF0KChlbnRpdHkubW92ZW1lbnQuY2FyZGluYWwgLSAyKSAlIDgpWzFdKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICByYW5kb21EaXJlY3Rpb24ucHVzaChcIlNpZGUgUmlnaHRcIilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vcmFuZG9tbHkgcGljayBhIHZhbGlkIGRpcmVjdGlvbiB0byBtb3ZlIHRvLCBvciBub25lXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJhbmRvbURpcmVjdGlvbltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5kb21EaXJlY3Rpb24ubGVuZ3RoKV0pe1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnRnJvbnQgTGVmdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVtZW50LnggPSBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCArIDEpICUgOClbMF1cclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkubW92ZW1lbnQueSA9IGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsICsgMSkgJSA4KVsxXVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnRnJvbnQgUmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5tb3ZlbWVudC54ID0gY2FyZGluYWxzLmF0KChlbnRpdHkubW92ZW1lbnQuY2FyZGluYWwgLSAxKSAlIDgpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVtZW50LnkgPSBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCAtIDEpICUgOClbMV1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1NpZGUgTGVmdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVtZW50LnggPSBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCArIDIpICUgOClbMF1cclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkubW92ZW1lbnQueSA9IGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsICsgMikgJSA4KVsxXVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnU2lkZSBSaWdodCc6XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVtZW50LnggPSBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCAtIDIpICUgOClbMF1cclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkubW92ZW1lbnQueSA9IGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsIC0gMikgJSA4KVsxXVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnTm9uZSc6XHJcbiAgICAgICAgICAgICAgICBjYXNlIHVuZGVmaW5lZDpcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkubW92ZW1lbnQueCA9IDBcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkubW92ZW1lbnQueSA9IDBcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL3VwZGF0ZSBsb2NhdGlvbklkIGFuZCBzZXQgbmV3IHBvc2l0aW9uXHJcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhdGlvbklkW2VudGl0eS5wb3NpdGlvbi54ICsgXCIsXCIgKyBlbnRpdHkucG9zaXRpb24ueV1cclxuICAgICAgICAgICAgZW50aXR5LnBvc2l0aW9uLnggKz0gZW50aXR5Lm1vdmVtZW50LnhcclxuICAgICAgICAgICAgZW50aXR5LnBvc2l0aW9uLnkgKz0gZW50aXR5Lm1vdmVtZW50LnlcclxuICAgICAgICAgICAgbG9jYXRpb25JZFtlbnRpdHkucG9zaXRpb24ueCArIFwiLFwiICsgZW50aXR5LnBvc2l0aW9uLnldID0gZW50aXR5LmlkXHJcbiAgICAgICAgICAgIC8vaW5mb3JtcyBhY3Rpb24gdGltZXIgdGhhdCB0aGUgbGFzdCBhY3Rpb24gd2FzIG1vdmVtZW50IGFuZCByZXF1aXJlcyB2ZWxvY2l0eSBtdWx0aXBsaWVyXHJcbiAgICAgICAgICAgIGVudGl0eS5hZGQoaGFzTW92ZWQpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRhcmdldDoge1xyXG4gICAgICAgIC8vdGFyZ2V0IG5lYXJlc3QuIHJlcXVpcmVzIGVudGl0eSwgYW5kIHRlYW0gb2YgdGFyZ2V0OiBcImVuZW1pZXNcIiwgXCJhbGxpZXNcIlxyXG4gICAgICAgIG5lYXJlc3Q6IGZ1bmN0aW9uKGVudGl0eSwgdGVhbSwgY29vbGRvd24pIHtcclxuICAgICAgICAgICAgaWYgKGVudGl0eS5jb21iYXQudGFyZ2V0Q29vbGRvd24gPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgZW50aXR5LmNvbWJhdC50YXJnZXRDb29sZG93biA9IGNvb2xkb3duXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSAwXHJcbiAgICAgICAgICAgICAgICAvL0RldGVybWluZSBjbG9zZXN0IHBsYXllciBhbGx5IHRvIHpvbWJpZVxyXG4gICAgICAgICAgICAgICAgcXVlcnlbdGVhbV0uZ2V0KCkuZm9yRWFjaCgoZW50aXR5VGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguaHlwb3QoKGVudGl0eS5wb3NpdGlvbi54IC0gZW50aXR5VGFyZ2V0LnBvc2l0aW9uLngpLChlbnRpdHkucG9zaXRpb24ueSAtIGVudGl0eVRhcmdldC5wb3NpdGlvbi55KSkgPCBkaXN0YW5jZSB8fCBkaXN0YW5jZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5jb21iYXQueCA9IGVudGl0eVRhcmdldC5wb3NpdGlvbi54XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5jb21iYXQueSA9IGVudGl0eVRhcmdldC5wb3NpdGlvbi55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5jb21iYXQudGFyZ2V0ID0gZW50aXR5VGFyZ2V0LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5oeXBvdCgoZW50aXR5LnBvc2l0aW9uLnggLSBlbnRpdHlUYXJnZXQucG9zaXRpb24ueCksKGVudGl0eS5wb3NpdGlvbi55IC0gZW50aXR5VGFyZ2V0LnBvc2l0aW9uLnkpKVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGVudGl0eS5jb21iYXQuZGlzdGFuY2UgPSBkaXN0YW5jZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZW50aXR5LmNvbWJhdC50YXJnZXRDb29sZG93biAtPSAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vdGFyZ2V0IGFkamFjZW50LCByZXF1aXJlcyBlbnRpdHksIHRlYW0gb2YgdGFyZ2V0OiBcImVuZW1pZXNcIiwgXCJhbGxpZXNcIlxyXG4gICAgICAgIGFkamFjZW50OiBmdW5jdGlvbihlbnRpdHksIHRlYW0sIGNvb2xkb3duKSB7XHJcbiAgICAgICAgICAgIGlmIChlbnRpdHkuY29tYmF0LnRhcmdldENvb2xkb3duIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGVudGl0eS5jb21iYXQudGFyZ2V0Q29vbGRvd24gPSBjb29sZG93blxyXG4gICAgICAgICAgICAgICAgLy9EZXRlcm1pbmUgdGFyZ2V0IGJhc2VkIG9uIGZpcnN0IHpvbWJpZSBmb3VuZCB3aXRoaW4gcmFuZ2UgMVxyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbVRhcmdldCA9IFtdXHJcbiAgICAgICAgICAgICAgICBxdWVyeVt0ZWFtXS5nZXQoKS5mb3JFYWNoKGVudGl0eUVuZW15ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZW50aXR5LnBvc2l0aW9uLnggLSBlbnRpdHlFbmVteS5wb3NpdGlvbi54KSA8PSAxICYmIE1hdGguYWJzKGVudGl0eS5wb3NpdGlvbi55IC0gZW50aXR5RW5lbXkucG9zaXRpb24ueSkgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5kb21UYXJnZXQucHVzaChbZW50aXR5RW5lbXkuaWQsIGVudGl0eUVuZW15LnBvc2l0aW9uLngsIGVudGl0eUVuZW15LnBvc2l0aW9uLnldKVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChyYW5kb21UYXJnZXQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFRhcmdldCA9IHJhbmRvbVRhcmdldFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5kb21UYXJnZXQubGVuZ3RoKV1cclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuY29tYmF0LnRhcmdldCA9IHNlbGVjdGVkVGFyZ2V0WzBdXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LmNvbWJhdC54ID0gc2VsZWN0ZWRUYXJnZXRbMV1cclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkuY29tYmF0LnkgPSBzZWxlY3RlZFRhcmdldFsyXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVudGl0eS5jb21iYXQudGFyZ2V0Q29vbGRvd24gLT0gMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiZ2VvdGljXCJcclxuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSBcIndnbHRcIlxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBbGx5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xyXG4gICAgfTtcclxufVxyXG4vL2RlY2xhcmluZyBjb21wb25lbnRzXHJcbi8vY2hhciA9IGRpc3BsYXllZCBjaGFyYWN0ZXIsIGNvbG9yID0gZGlzcGxheWVkIGNvbG9yXHJcbmV4cG9ydCBjbGFzcyBBcHBlYXJhbmNlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIGNoYXI6IFwiQFwiLFxyXG4gICAgICAgIGNvbG9yOiBDb2xvcnMuV0hJVEVcclxuICAgIH1cclxufVxyXG4vL3RhcmdldCA9IGN1cnJlbnQgcHJpbWFyeSB0YXJnZXRcclxuZXhwb3J0IGNsYXNzIENvbWJhdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcclxuICAgICAgICB0YXJnZXQ6IFwiXCIsXHJcbiAgICAgICAgdGFyZ2V0Q29vbGRvd246IDAsXHJcbiAgICAgICAgcmFuZ2U6IDEsXHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIGRpc3RhbmNlOiAwXHJcbiAgICB9XHJcbn1cclxuLy9uYW1lID0gbmFtZSBvZiBvYmplY3QsIGRlc2MgPSBkZXNjcmlwdGlvbiBvZiBvYmplY3RcclxuZXhwb3J0IGNsYXNzIERlc2NyaXB0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIGRlc2M6IFwiXCJcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XHJcbiAgICB9O1xyXG59XHJcbi8vaHAgPSBjdXJyZW50IGhlYWx0aCwgbWF4SHAgPSBtYXhpbXVtIGhlYWx0aCBhbGxvd2VkXHJcbmV4cG9ydCBjbGFzcyBoYXNNb3ZlZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHt9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEhlYWx0aCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcclxuICAgICAgICBocDogMSxcclxuICAgICAgICBtYXhIcDogMSxcclxuICAgICAgICBtaW5IcDogMFxyXG4gICAgfVxyXG4gICAgcmVkdWNlKGFtb3VudCkge1xyXG4gICAgICAgIHRoaXMuaHAgPSBNYXRoLm1heCh0aGlzLmhwLWFtb3VudCwgdGhpcy5taW5IcClcclxuICAgIH1cclxuICAgIGhlYWwoYW1vdW50KSB7XHJcbiAgICAgICAgdGhpcy5ocCA9IE1hdGgubWluKHRoaXMuaHArYW1vdW50LCB0aGlzLm1heEhwKVxyXG4gICAgfVxyXG4gICAgb25EYW1hZ2VUYWtlbihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmRhdGEuZGFtYWdlID4gMCkge1xyXG4gICAgICAgIHRoaXMucmVkdWNlKGV2ZW50LmRhdGEuZGFtYWdlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmhlYWwoZXZlbnQuZGF0YS5kYW1hZ2UpXHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4vL3gseSA9IHgseSBjb29yZGluYXRlIHBvc2l0aW9uIG9uIGRpc3BsYXlcclxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMFxyXG4gICAgfTtcclxufVxyXG4vL2FjdGlvbiA9IGFjdGlvbiBzcGVlZCBpbiBtaWxsaXNlY29uZHMgaS5lLiBob3cgZmFzdCBhbGwgYWN0aW9ucyBzdWNoIGFzIG1vdmluZyBhbmQgYXR0YWNraW5nIGFyZSBkb25lXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgc3BlZWQ6IDEwMDAsXHJcbiAgICAgICAgbGFzdDogMCxcclxuICAgICAgICBhZGp1c3RlZDogMTAwMFxyXG4gICAgfVxyXG59XHJcbi8veCA9IGhvcml6b250YWwgbW92ZW1lbnQgc3BlZWQsIHkgPSB2ZXJ0aWNhbCBtb3ZlbWVudCBzcGVlZC4gaS5lLiBwZXIgbW92ZW1lbnQgYWN0aW9uIG1vdmUgdXAgdG8geC95IHZlbG9jaXR5LlxyXG5leHBvcnQgY2xhc3MgTW92ZW1lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgdmVsb2NpdHk6IDEsXHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIGNhcmRpbmFsOiAwXHJcbiAgICB9O1xyXG59XHJcblxyXG4iLCJpbXBvcnQge0VuZ2luZX0gZnJvbSBcImdlb3RpY1wiO1xyXG5pbXBvcnQge0FsbHksIEFwcGVhcmFuY2UsIENvbWJhdCwgRGVzY3JpcHRpb24sIEVuZW15LCBoYXNNb3ZlZCwgSGVhbHRoLCBQb3NpdGlvbiwgQWN0aW9uLCBNb3ZlbWVudH0gZnJvbSBcIi4vY29tcG9uZW50c1wiXHJcbmltcG9ydCAqIGFzIGVudGl0aWVzIGZyb20gXCIuL2VudGl0aWVzXCJcclxuXHJcbi8vY3JlYXRpbmcgZ2VvdGljIGVuZ2luZVxyXG5jb25zdCBlbmdpbmUgPSBuZXcgRW5naW5lKCk7XHJcbi8vYXNzb2NpYXRpbmcgY29tcG9uZW50c1xyXG5lbmdpbmUucmVnaXN0ZXJDb21wb25lbnQoQWxseSlcclxuZW5naW5lLnJlZ2lzdGVyQ29tcG9uZW50KEFwcGVhcmFuY2UpXHJcbmVuZ2luZS5yZWdpc3RlckNvbXBvbmVudChDb21iYXQpXHJcbmVuZ2luZS5yZWdpc3RlckNvbXBvbmVudChEZXNjcmlwdGlvbilcclxuZW5naW5lLnJlZ2lzdGVyQ29tcG9uZW50KEVuZW15KVxyXG5lbmdpbmUucmVnaXN0ZXJDb21wb25lbnQoaGFzTW92ZWQpXHJcbmVuZ2luZS5yZWdpc3RlckNvbXBvbmVudChIZWFsdGgpXHJcbmVuZ2luZS5yZWdpc3RlckNvbXBvbmVudChQb3NpdGlvbilcclxuZW5naW5lLnJlZ2lzdGVyQ29tcG9uZW50KEFjdGlvbilcclxuZW5naW5lLnJlZ2lzdGVyQ29tcG9uZW50KE1vdmVtZW50KVxyXG4vL2Fzc29jaWF0aW5nIHByZWZhYnNcclxuZW5naW5lLnJlZ2lzdGVyUHJlZmFiKGVudGl0aWVzLkJlaW5nKVxyXG5lbmdpbmUucmVnaXN0ZXJQcmVmYWIoZW50aXRpZXMuSHVtYW4pXHJcbmVuZ2luZS5yZWdpc3RlclByZWZhYihlbnRpdGllcy5TdHJ1Y3R1cmUpXHJcbmVuZ2luZS5yZWdpc3RlclByZWZhYihlbnRpdGllcy5ab21iaWUpXHJcbmVuZ2luZS5yZWdpc3RlclByZWZhYihlbnRpdGllcy5WZXJ0aWNhbClcclxuZW5naW5lLnJlZ2lzdGVyUHJlZmFiKGVudGl0aWVzLkhvcml6b250YWwpXHJcbmVuZ2luZS5yZWdpc3RlclByZWZhYihlbnRpdGllcy5Cb3R0b21MZWZ0KVxyXG5lbmdpbmUucmVnaXN0ZXJQcmVmYWIoZW50aXRpZXMuQm90dG9tUmlnaHQpXHJcbmVuZ2luZS5yZWdpc3RlclByZWZhYihlbnRpdGllcy5Ub3BMZWZ0KVxyXG5lbmdpbmUucmVnaXN0ZXJQcmVmYWIoZW50aXRpZXMuVG9wUmlnaHQpXHJcbmV4cG9ydCBkZWZhdWx0IGVuZ2luZTsiLCJpbXBvcnQgeyBDb2xvcnMsICB9IGZyb20gXCJ3Z2x0XCJcclxuLy9kZWZhdWx0IFwiQmVpbmdcIm1vYiB3aXRoIHJlbGF0ZWQgY29tcG9uZW50c1xyXG5leHBvcnQgbGV0IEJlaW5nID0ge1xyXG4gICAgbmFtZTogXCJCZWluZ1wiLFxyXG4gICAgY29tcG9uZW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJBcHBlYXJhbmNlXCIsXHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkNvbWJhdFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQmVpbmdcIixcclxuICAgICAgICAgICAgICAgIGRlc2M6IFwiTm9uZGVzY3JpcHQgYmVpbmcuXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkhlYWx0aFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBvc2l0aW9uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiQWN0aW9uXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiTW92ZW1lbnRcIixcclxuICAgICAgICB9LFxyXG5cclxuICAgIF0sXHJcbn07XHJcbi8vZGVmYXVsdCBcIkh1bWFuXCIgc3VidHlwZSBvZiBcIkJlaW5nXCJcclxuZXhwb3J0IGxldCBIdW1hbiA9IHtcclxuICAgbmFtZTogXCJIdW1hblwiLFxyXG4gICBpbmhlcml0OiBcIkJlaW5nXCIsXHJcbiAgIGNvbXBvbmVudHM6IFtcclxuICAgIHsgdHlwZTogXCJBY3Rpb25cIixcclxuICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIHNwZWVkOiAxMDAwXHJcbiAgICAgICAgfSAgICBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJBbGx5XCIsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHt9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiBcIkFwcGVhcmFuY2VcIixcclxuICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgY2hhcjogXCJAXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogQ29sb3JzLkxJR0hUX01BR0VOVEFcclxuICAgICAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgbmFtZTogXCJIdW1hblwiLFxyXG4gICAgICAgICAgICBkZXNjOiBcIkEgaHVtYW4gYmVpbmcuXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwiSGVhbHRoXCIsXHJcbiAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICBocDogMTAsXHJcbiAgICAgICAgICAgIG1heEhwOiAxMFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwiTW92ZW1lbnRcIixcclxuICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIHZlbG9jaXR5OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbiAgIF0gXHJcbn1cclxuLy9kZWZhdWx0IFwiWm9tYmllXCIgc3VidHlwZSBvZiBcIkJlaW5nXCJcclxuZXhwb3J0IGxldCBab21iaWUgPSB7XHJcbiAgICBuYW1lOiBcIlpvbWJpZVwiLFxyXG4gICAgaW5oZXJpdDogXCJCZWluZ1wiLFxyXG4gICAgY29tcG9uZW50czogW1xyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwiQXBwZWFyYW5jZVwiLFxyXG4gICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICBjaGFyOiBcIlpcIixcclxuICAgICAgICAgICAgY29sb3I6IENvbG9ycy5EQVJLX0dSRUVOXHJcbiAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICB0eXBlOiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgIG5hbWU6IFwiWm9tYmllXCIsXHJcbiAgICAgICAgICAgICBkZXNjOiBcIkEgem9tYmllLlwiXHJcbiAgICAgICAgIH1cclxuICAgICB9LFxyXG4gICAgIHtcclxuICAgICAgICB0eXBlOiBcIkVuZW15XCIsXHJcbiAgICAgICAgcHJvcGVydGllczoge31cclxuICAgICB9LCAgICAgXHJcbiAgICAge1xyXG4gICAgICAgICB0eXBlOiBcIkhlYWx0aFwiLFxyXG4gICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICBocDogMTAsXHJcbiAgICAgICAgICAgICBtYXhIcDogMTBcclxuICAgICAgICAgfSxcclxuICAgICB9LFxyXG4gXHJcbiAgICAge1xyXG4gICAgICAgICB0eXBlOiBcIk1vdmVtZW50XCIsXHJcbiAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgIHZlbG9jaXR5OiA1LFxyXG4gICAgICAgICB9LFxyXG4gICAgIH0sXHJcbiAgICBdIFxyXG59XHJcblxyXG5leHBvcnQgbGV0IFN0cnVjdHVyZSA9IHtcclxuICAgIG5hbWU6IFwiU3RydWN0dXJlXCIsXHJcbiAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkFwcGVhcmFuY2VcIixcclxuICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcjogXCJYXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IENvbG9ycy5XSElURVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJTdHJ1Y3R1cmVcIixcclxuICAgICAgICAgICAgICAgIGRlc2M6IFwiTm9uZGVzY3JpcHQgc3RydWN0dXJlLlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJQb3NpdGlvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgSG9yaXpvbnRhbCA9IHtcclxuICAgIG5hbWU6IFwiSG9yaXpvbnRhbFwiLFxyXG4gICAgaW5oZXJpdDogXCJTdHJ1Y3R1cmVcIixcclxuICAgIGNvbXBvbmVudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiQXBwZWFyYW5jZVwiLCBcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFyOiAweENELFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGxldCBWZXJ0aWNhbCA9IHtcclxuICAgIG5hbWU6IFwiVmVydGljYWxcIixcclxuICAgIGluaGVyaXQ6IFwiU3RydWN0dXJlXCIsXHJcbiAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkFwcGVhcmFuY2VcIiwgXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcjogMHhCQSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgQm90dG9tTGVmdCA9IHtcclxuICAgIG5hbWU6IFwiQm90dG9tTGVmdFwiLFxyXG4gICAgaW5oZXJpdDogXCJTdHJ1Y3R1cmVcIixcclxuICAgIGNvbXBvbmVudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiQXBwZWFyYW5jZVwiLCBcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFyOiAweEM4LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGxldCBCb3R0b21SaWdodCA9IHtcclxuICAgIG5hbWU6IFwiQm90dG9tUmlnaHRcIixcclxuICAgIGluaGVyaXQ6IFwiU3RydWN0dXJlXCIsXHJcbiAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkFwcGVhcmFuY2VcIiwgXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcjogMHhCQyxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgVG9wTGVmdCA9IHtcclxuICAgIG5hbWU6IFwiVG9wTGVmdFwiLFxyXG4gICAgaW5oZXJpdDogXCJTdHJ1Y3R1cmVcIixcclxuICAgIGNvbXBvbmVudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiQXBwZWFyYW5jZVwiLCBcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFyOiAweEM5LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IGxldCBUb3BSaWdodCA9IHtcclxuICAgIG5hbWU6IFwiVG9wUmlnaHRcIixcclxuICAgIGluaGVyaXQ6IFwiU3RydWN0dXJlXCIsXHJcbiAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkFwcGVhcmFuY2VcIiwgXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcjogMHhCQixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0iLCJpbXBvcnQgKiBhcyB3Z2x0IGZyb20gXCJ3Z2x0XCJcclxuaW1wb3J0IHtBbGx5fSBmcm9tIFwiLi4vY29tcG9uZW50c1wiXHJcbmZ1bmN0aW9uIGxpbmUodGVybWluYWwsIG1vdXNlU3RhcnQpIHtcclxuICAgIHJldHVybiB3Z2x0LmNvbXB1dGVQYXRoKHRlcm1pbmFsLCBtb3VzZVN0YXJ0LCB0ZXJtaW5hbC5tb3VzZSwgMTAwMClcclxufVxyXG5mdW5jdGlvbiBib3hSZW1vdmUodGVybWluYWwsIG1vdXNlU3RhcnQpIHtcclxuICAgIGZvciAobGV0IGkgPSBNYXRoLm1pbihtb3VzZVN0YXJ0LngsIHRlcm1pbmFsLm1vdXNlLngpOyBpIDwgTWF0aC5tYXgobW91c2VTdGFydC54LCB0ZXJtaW5hbC5tb3VzZS54KTsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IE1hdGgubWluKG1vdXNlU3RhcnQueSwgdGVybWluYWwubW91c2UueSk7IGogPCBNYXRoLm1heChtb3VzZVN0YXJ0LnksIHRlcm1pbmFsLm1vdXNlLnkpOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IGVudGl0eSA9IHdvcmxkLmdldEVudGl0eShsb2NhdGlvbklkW2kgKyBcIixcIiArIGpdKVxyXG4gICAgICAgICAgICBpZiAoZW50aXR5ICYmIGVudGl0eS5oYXMoQWxseSkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gdGVybWluYWwuZ2V0Q2VsbChlbnRpdHkucG9zaXRpb24ueCwgZW50aXR5LnBvc2l0aW9uLnkpXHJcbiAgICAgICAgICAgICAgICBjZWxsLnNldEJhY2tncm91bmQod2dsdC5Db2xvcnMuWUVMTE9XKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGJveCh0ZXJtaW5hbCwgbW91c2VTdGFydCwgZ29sZW1Db3VudCwgcmVtb3ZlQm9vbCkge1xyXG4gICAgbGV0IG1vdXNlUGF0aCA9IFtdXHJcbiAgICBsZXQgbGluZUNvdW50ID0gMFxyXG5cclxuXHJcbiAgICAvL2JvdHRvbSByaWdodCBib3hcclxuICAgIGlmICh0ZXJtaW5hbC5tb3VzZS54IC0gbW91c2VTdGFydC54ID4gMCAmJiB0ZXJtaW5hbC5tb3VzZS55IC0gbW91c2VTdGFydC55ID4gMCkge1xyXG4gICAgICAgIHRlcm1pbmFsLmZpbGxSZWN0KG1vdXNlU3RhcnQueCwgbW91c2VTdGFydC55LCB0ZXJtaW5hbC5tb3VzZS54IC0gbW91c2VTdGFydC54LCB0ZXJtaW5hbC5tb3VzZS55IC0gbW91c2VTdGFydC55LCAwLCB1bmRlZmluZWQsIHdnbHQuQ29sb3JzLkRBUktfR1JBWSlcclxuICAgICAgICBpZiAocmVtb3ZlQm9vbCkge1xyXG4gICAgICAgICAgICBib3hSZW1vdmUodGVybWluYWwsIG1vdXNlU3RhcnQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGdvbGVtQ291bnQ7IGkgPiAwICYmIGxpbmVDb3VudCA8ICh0ZXJtaW5hbC5tb3VzZS55IC0gbW91c2VTdGFydC55KTsgaSA9IGkgLSAodGVybWluYWwubW91c2UueCAtIG1vdXNlU3RhcnQueCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtb3VzZVN0YXJ0LnkgLSBsaW5lQ291bnQgPCAzMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVDb3VudCsrXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlcm1pbmFsLmRyYXdITGluZShtb3VzZVN0YXJ0LngsIG1vdXNlU3RhcnQueSArIGxpbmVDb3VudCwgTWF0aC5taW4oaSwgdGVybWluYWwubW91c2UueCAtIG1vdXNlU3RhcnQueCksIDAsIHVuZGVmaW5lZCwgd2dsdC5Db2xvcnMuWUVMTE9XKVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVDb3VudCsrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9ib3R0b20gbGVmdCBib3hcclxuICAgIH0gZWxzZSBpZiAodGVybWluYWwubW91c2UueCAtIG1vdXNlU3RhcnQueCA8IDAgJiYgdGVybWluYWwubW91c2UueSAtIG1vdXNlU3RhcnQueSA+IDApIHtcclxuICAgICAgICB0ZXJtaW5hbC5maWxsUmVjdCh0ZXJtaW5hbC5tb3VzZS54LCBtb3VzZVN0YXJ0LnksIChtb3VzZVN0YXJ0LnggLSB0ZXJtaW5hbC5tb3VzZS54KSArIDEsIHRlcm1pbmFsLm1vdXNlLnkgLSBtb3VzZVN0YXJ0LnksIDAsIHVuZGVmaW5lZCwgd2dsdC5Db2xvcnMuREFSS19HUkFZKVxyXG4gICAgICAgIGlmIChyZW1vdmVCb29sKSB7XHJcbiAgICAgICAgICAgIGJveFJlbW92ZSh0ZXJtaW5hbCwgbW91c2VTdGFydClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gZ29sZW1Db3VudDsgaSA+IDAgJiYgbGluZUNvdW50IDwgKHRlcm1pbmFsLm1vdXNlLnkgLSBtb3VzZVN0YXJ0LnkpOyBpID0gaSAtICgobW91c2VTdGFydC54IC0gdGVybWluYWwubW91c2UueCkgKyAxKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlU3RhcnQueSAtIGxpbmVDb3VudCA8IDMwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUNvdW50KytcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVybWluYWwuZHJhd0hMaW5lKHRlcm1pbmFsLm1vdXNlLnggKyAoKChtb3VzZVN0YXJ0LnggLSB0ZXJtaW5hbC5tb3VzZS54KSArIDEpIC0gKE1hdGgubWluKGksIChtb3VzZVN0YXJ0LnggLSB0ZXJtaW5hbC5tb3VzZS54KSArIDEpKSksIG1vdXNlU3RhcnQueSArIGxpbmVDb3VudCwgTWF0aC5taW4oaSwgKG1vdXNlU3RhcnQueCAtIHRlcm1pbmFsLm1vdXNlLngpICsgMSksIDAsIHVuZGVmaW5lZCwgd2dsdC5Db2xvcnMuWUVMTE9XKVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVDb3VudCsrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy90b3AgbGVmdCBib3hcclxuICAgIH0gZWxzZSBpZiAodGVybWluYWwubW91c2UueCAtIG1vdXNlU3RhcnQueCA8IDAgJiYgdGVybWluYWwubW91c2UueSAtIG1vdXNlU3RhcnQueSA8IDApIHtcclxuICAgICAgICB0ZXJtaW5hbC5maWxsUmVjdCh0ZXJtaW5hbC5tb3VzZS54LCB0ZXJtaW5hbC5tb3VzZS55ICsgMSwgKG1vdXNlU3RhcnQueCAtIHRlcm1pbmFsLm1vdXNlLngpICsgMSwgbW91c2VTdGFydC55IC0gdGVybWluYWwubW91c2UueSwgMCwgdW5kZWZpbmVkLCB3Z2x0LkNvbG9ycy5EQVJLX0dSQVkpXHJcbiAgICAgICAgaWYgKHJlbW92ZUJvb2wpIHtcclxuICAgICAgICAgICAgYm94UmVtb3ZlKHRlcm1pbmFsLCBtb3VzZVN0YXJ0KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBnb2xlbUNvdW50OyBpID4gMCAmJiBsaW5lQ291bnQgPCAobW91c2VTdGFydC55IC0gdGVybWluYWwubW91c2UueSk7IGkgPSBpIC0gKChtb3VzZVN0YXJ0LnggLSB0ZXJtaW5hbC5tb3VzZS54KSArIDEpKSB7ICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlU3RhcnQueSAtIGxpbmVDb3VudCA8IDMwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUNvdW50KytcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7ICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0ZXJtaW5hbC5kcmF3SExpbmUodGVybWluYWwubW91c2UueCArICgoKG1vdXNlU3RhcnQueCAtIHRlcm1pbmFsLm1vdXNlLngpICsgMSkgLSAoTWF0aC5taW4oaSwgKG1vdXNlU3RhcnQueCAtIHRlcm1pbmFsLm1vdXNlLngpICsgMSkpKSwgbW91c2VTdGFydC55IC0gbGluZUNvdW50LCBNYXRoLm1pbihpLCAobW91c2VTdGFydC54IC0gdGVybWluYWwubW91c2UueCkgKyAxKSwgMCwgdW5kZWZpbmVkLCB3Z2x0LkNvbG9ycy5ZRUxMT1cpXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUNvdW50KytcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3RvcCByaWdodCBib3hcclxuICAgIH0gZWxzZSBpZiAodGVybWluYWwubW91c2UueCAtIG1vdXNlU3RhcnQueCA+IDAgJiYgdGVybWluYWwubW91c2UueSAtIG1vdXNlU3RhcnQueSA8IDApIHtcclxuICAgICAgICB0ZXJtaW5hbC5maWxsUmVjdChtb3VzZVN0YXJ0LngsIHRlcm1pbmFsLm1vdXNlLnkgKyAxLCB0ZXJtaW5hbC5tb3VzZS54IC0gbW91c2VTdGFydC54LCBtb3VzZVN0YXJ0LnkgLSB0ZXJtaW5hbC5tb3VzZS55LCAwLCB1bmRlZmluZWQsIHdnbHQuQ29sb3JzLkRBUktfR1JBWSlcclxuICAgICAgICBpZiAocmVtb3ZlQm9vbCkge1xyXG4gICAgICAgICAgICBib3hSZW1vdmUodGVybWluYWwsIG1vdXNlU3RhcnQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGdvbGVtQ291bnQ7IGkgPiAwICYmIGxpbmVDb3VudCA8IChtb3VzZVN0YXJ0LnkgLSB0ZXJtaW5hbC5tb3VzZS55KTsgaSA9IGkgLSAodGVybWluYWwubW91c2UueCAtIG1vdXNlU3RhcnQueCkpIHsgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAobW91c2VTdGFydC55IC0gbGluZUNvdW50IDwgMzApIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lQ291bnQrK1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRlcm1pbmFsLmRyYXdITGluZShtb3VzZVN0YXJ0LngsIG1vdXNlU3RhcnQueSAtIGxpbmVDb3VudCwgTWF0aC5taW4oaSwgdGVybWluYWwubW91c2UueCAtIG1vdXNlU3RhcnQueCksIDAsIHVuZGVmaW5lZCwgd2dsdC5Db2xvcnMuWUVMTE9XKVxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVDb3VudCsrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtb3VzZVBhdGhbMF0gPSBtb3VzZVN0YXJ0XHJcbiAgICBtb3VzZVBhdGhbMV0gPSB7IHg6IHRlcm1pbmFsLm1vdXNlLngsIHk6IHRlcm1pbmFsLm1vdXNlLnkgfVxyXG4gICAgcmV0dXJuIG1vdXNlUGF0aFxyXG59XHJcbmxldCBkcmF3ID0gZnVuY3Rpb24odGVybWluYWwsIG1vdXNlUGF0aCkge1xyXG4gICAgbGV0IG5ld1BhdGggPSBtb3VzZVBhdGhcclxuICAgIGlmIChuZXdQYXRoID09IFtdKSB7bmV3UGF0aFswXSA9IG1vdXNlU3RhcnR9XHJcbiAgICBpZiAobmV3UGF0aC5maW5kSW5kZXgoIHZhbHVlID0+IHZhbHVlLnggID09IHRlcm1pbmFsLm1vdXNlLnggJiYgdmFsdWUueSA9PSB0ZXJtaW5hbC5tb3VzZS55KSA9PSAtMSkge1xyXG4gICAgICAgIG5ld1BhdGgucHVzaCh7eDogdGVybWluYWwubW91c2UueCwgeTogdGVybWluYWwubW91c2UueX0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3UGF0aFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGxldCBwbGFjZW1lbnQgPSBmdW5jdGlvbih0ZXJtaW5hbCwgbW91c2VTdGFydCwgZ29sZW1Db3VudCwgbW91c2VQYXRoLCBwbGFjZW1lbnRJbmRleCwgcmVtb3ZlQm9vbCl7XHJcbiAgICBpZiAocGxhY2VtZW50SW5kZXggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gbGluZSh0ZXJtaW5hbCwgbW91c2VTdGFydClcclxuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50SW5kZXggPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gYm94KHRlcm1pbmFsLCBtb3VzZVN0YXJ0LCBnb2xlbUNvdW50LCByZW1vdmVCb29sKVxyXG4gICAgfSBlbHNlIGlmIChwbGFjZW1lbnRJbmRleCA9PT0gMikge1xyXG4gICAgICAgIHJldHVybiBkcmF3KHRlcm1pbmFsLCBtb3VzZVBhdGgpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge3BsYWNlbWVudH0gZnJvbSBcIi4vcGxhY2VtZW50XCJcclxuZXhwb3J0IGxldCB1aSA9IHtcclxuICAgIHBsYWNlbWVudCxcclxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufVxuXG5jb25zdCBwcmVzZXJ2ZUNhbWVsQ2FzZSA9IChzdHJpbmcpID0+IHtcbiAgICBsZXQgaXNMYXN0Q2hhckxvd2VyID0gZmFsc2U7XG4gICAgbGV0IGlzTGFzdENoYXJVcHBlciA9IGZhbHNlO1xuICAgIGxldCBpc0xhc3RMYXN0Q2hhclVwcGVyID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGFyYWN0ZXIgPSBzdHJpbmdbaV07XG5cbiAgICAgICAgaWYgKGlzTGFzdENoYXJMb3dlciAmJiAvW1xccHtMdX1dL3UudGVzdChjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcuc2xpY2UoMCwgaSkgKyAnLScgKyBzdHJpbmcuc2xpY2UoaSk7XG4gICAgICAgICAgICBpc0xhc3RDaGFyTG93ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIGlzTGFzdExhc3RDaGFyVXBwZXIgPSBpc0xhc3RDaGFyVXBwZXI7XG4gICAgICAgICAgICBpc0xhc3RDaGFyVXBwZXIgPSB0cnVlO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgaXNMYXN0Q2hhclVwcGVyICYmXG4gICAgICAgICAgICBpc0xhc3RMYXN0Q2hhclVwcGVyICYmXG4gICAgICAgICAgICAvW1xccHtMbH1dL3UudGVzdChjaGFyYWN0ZXIpXG4gICAgICAgICkge1xuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nLnNsaWNlKDAsIGkgLSAxKSArICctJyArIHN0cmluZy5zbGljZShpIC0gMSk7XG4gICAgICAgICAgICBpc0xhc3RMYXN0Q2hhclVwcGVyID0gaXNMYXN0Q2hhclVwcGVyO1xuICAgICAgICAgICAgaXNMYXN0Q2hhclVwcGVyID0gZmFsc2U7XG4gICAgICAgICAgICBpc0xhc3RDaGFyTG93ZXIgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNMYXN0Q2hhckxvd2VyID1cbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gY2hhcmFjdGVyICYmXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyLnRvTG9jYWxlVXBwZXJDYXNlKCkgIT09IGNoYXJhY3RlcjtcbiAgICAgICAgICAgIGlzTGFzdExhc3RDaGFyVXBwZXIgPSBpc0xhc3RDaGFyVXBwZXI7XG4gICAgICAgICAgICBpc0xhc3RDaGFyVXBwZXIgPVxuICAgICAgICAgICAgICAgIGNoYXJhY3Rlci50b0xvY2FsZVVwcGVyQ2FzZSgpID09PSBjaGFyYWN0ZXIgJiZcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIudG9Mb2NhbGVMb3dlckNhc2UoKSAhPT0gY2hhcmFjdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbn07XG5cbmNvbnN0IGNhbWVsQ2FzZSA9IChpbnB1dCwgb3B0aW9ucykgPT4ge1xuICAgIGlmICghKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheShpbnB1dCkpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHRoZSBpbnB1dCB0byBiZSBgc3RyaW5nIHwgc3RyaW5nW11gJyk7XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9IHtcbiAgICAgICAgLi4ue1xuICAgICAgICAgICAgcGFzY2FsQ2FzZTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcblxuICAgIGNvbnN0IHBvc3RQcm9jZXNzID0gKHgpID0+XG4gICAgICAgIG9wdGlvbnMucGFzY2FsQ2FzZSA/IHguY2hhckF0KDApLnRvTG9jYWxlVXBwZXJDYXNlKCkgKyB4LnNsaWNlKDEpIDogeDtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgICAgICBpbnB1dCA9IGlucHV0XG4gICAgICAgICAgICAubWFwKCh4KSA9PiB4LnRyaW0oKSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHgpID0+IHgubGVuZ3RoKVxuICAgICAgICAgICAgLmpvaW4oJy0nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dCA9IGlucHV0LnRyaW0oKTtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAoaW5wdXQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLnBhc2NhbENhc2VcbiAgICAgICAgICAgID8gaW5wdXQudG9Mb2NhbGVVcHBlckNhc2UoKVxuICAgICAgICAgICAgOiBpbnB1dC50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc1VwcGVyQ2FzZSA9IGlucHV0ICE9PSBpbnB1dC50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKGhhc1VwcGVyQ2FzZSkge1xuICAgICAgICBpbnB1dCA9IHByZXNlcnZlQ2FtZWxDYXNlKGlucHV0KTtcbiAgICB9XG5cbiAgICBpbnB1dCA9IGlucHV0XG4gICAgICAgIC5yZXBsYWNlKC9eW18uXFwtIF0rLywgJycpXG4gICAgICAgIC50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAgICAgIC5yZXBsYWNlKC9bXy5cXC0gXSsoW1xccHtBbHBoYX1cXHB7Tn1fXXwkKS9ndSwgKF8sIHAxKSA9PlxuICAgICAgICAgICAgcDEudG9Mb2NhbGVVcHBlckNhc2UoKVxuICAgICAgICApXG4gICAgICAgIC5yZXBsYWNlKC9cXGQrKFtcXHB7QWxwaGF9XFxwe059X118JCkvZ3UsIChtKSA9PiBtLnRvTG9jYWxlVXBwZXJDYXNlKCkpO1xuICAgIHJldHVybiBwb3N0UHJvY2VzcyhpbnB1dCk7XG59O1xuXG52YXIgY2FtZWxjYXNlID0gY2FtZWxDYXNlOyAvLyBUT0RPOiBSZW1vdmUgdGhpcyBmb3IgdGhlIG5leHQgbWFqb3IgcmVsZWFzZVxuXG52YXIgX2RlZmF1bHQgPSBjYW1lbENhc2U7XG5jYW1lbGNhc2UuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG5jb25zdCBjYW1lbENhY2hlID0ge307XG5jb25zdCBjYW1lbFN0cmluZyA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGNhbWVsQ2FjaGVbdmFsdWVdO1xuXG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgY2FtZWxDYWNoZVt2YWx1ZV0gPSBjYW1lbGNhc2UodmFsdWUpO1xuICAgICAgICByZXR1cm4gY2FtZWxDYWNoZVt2YWx1ZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNsYXNzIENvbXBvbmVudFJlZ2lzdHJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRoaXMsICdfY2JpdCcsIDApO1xuXG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX21hcCcsIHt9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlcihjbGF6eikge1xuICAgICAgICBjb25zdCBrZXkgPSBjYW1lbFN0cmluZyhjbGF6ei5uYW1lKTtcbiAgICAgICAgY2xhenoucHJvdG90eXBlLl9ja2V5ID0ga2V5O1xuICAgICAgICBjbGF6ei5wcm90b3R5cGUuX2NiaXQgPSBCaWdJbnQoKyt0aGlzLl9jYml0KTtcbiAgICAgICAgdGhpcy5fbWFwW2tleV0gPSBjbGF6ejtcbiAgICB9XG5cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tYXBba2V5XTtcbiAgICB9XG59XG5cbnZhciBpc01lcmdlYWJsZU9iamVjdCA9IGZ1bmN0aW9uIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzTm9uTnVsbE9iamVjdCh2YWx1ZSkgJiYgIWlzU3BlY2lhbCh2YWx1ZSk7XG59O1xuXG5mdW5jdGlvbiBpc05vbk51bGxPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBpc1NwZWNpYWwodmFsdWUpIHtcbiAgICB2YXIgc3RyaW5nVmFsdWUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICAgIHJldHVybiAoXG4gICAgICAgIHN0cmluZ1ZhbHVlID09PSAnW29iamVjdCBSZWdFeHBdJyB8fFxuICAgICAgICBzdHJpbmdWYWx1ZSA9PT0gJ1tvYmplY3QgRGF0ZV0nIHx8XG4gICAgICAgIGlzUmVhY3RFbGVtZW50KHZhbHVlKVxuICAgICk7XG59IC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvYmxvYi9iNWFjOTYzZmI3OTFkMTI5OGU3ZjM5NjIzNjM4M2JjOTU1ZjkxNmMxL3NyYy9pc29tb3JwaGljL2NsYXNzaWMvZWxlbWVudC9SZWFjdEVsZW1lbnQuanMjTDIxLUwyNVxuXG52YXIgY2FuVXNlU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGNhblVzZVN5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcblxuZnVuY3Rpb24gaXNSZWFjdEVsZW1lbnQodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxuZnVuY3Rpb24gZW1wdHlUYXJnZXQodmFsKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge307XG59XG5cbmZ1bmN0aW9uIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuY2xvbmUgIT09IGZhbHNlICYmIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodmFsdWUpXG4gICAgICAgID8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnMpXG4gICAgICAgIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRBcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRhcmdldC5jb25jYXQoc291cmNlKS5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRNZXJnZUZ1bmN0aW9uKGtleSwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5jdXN0b21NZXJnZSkge1xuICAgICAgICByZXR1cm4gZGVlcG1lcmdlO1xuICAgIH1cblxuICAgIHZhciBjdXN0b21NZXJnZSA9IG9wdGlvbnMuY3VzdG9tTWVyZ2Uoa2V5KTtcbiAgICByZXR1cm4gdHlwZW9mIGN1c3RvbU1lcmdlID09PSAnZnVuY3Rpb24nID8gY3VzdG9tTWVyZ2UgOiBkZWVwbWVyZ2U7XG59XG5cbmZ1bmN0aW9uIGdldEVudW1lcmFibGVPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbiAgICAgICAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkuZmlsdGVyKGZ1bmN0aW9uIChzeW1ib2wpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5wcm9wZXJ0eUlzRW51bWVyYWJsZShzeW1ib2wpO1xuICAgICAgICAgIH0pXG4gICAgICAgIDogW107XG59XG5cbmZ1bmN0aW9uIGdldEtleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRhcmdldCkuY29uY2F0KGdldEVudW1lcmFibGVPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5SXNPbk9iamVjdChvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5IGluIG9iamVjdDtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59IC8vIFByb3RlY3RzIGZyb20gcHJvdG90eXBlIHBvaXNvbmluZyBhbmQgdW5leHBlY3RlZCBtZXJnaW5nIHVwIHRoZSBwcm90b3R5cGUgY2hhaW4uXG5cbmZ1bmN0aW9uIHByb3BlcnR5SXNVbnNhZmUodGFyZ2V0LCBrZXkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBwcm9wZXJ0eUlzT25PYmplY3QodGFyZ2V0LCBrZXkpICYmIC8vIFByb3BlcnRpZXMgYXJlIHNhZmUgdG8gbWVyZ2UgaWYgdGhleSBkb24ndCBleGlzdCBpbiB0aGUgdGFyZ2V0IHlldCxcbiAgICAgICAgIShcbiAgICAgICAgICAgIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwga2V5KSAmJiAvLyB1bnNhZmUgaWYgdGhleSBleGlzdCB1cCB0aGUgcHJvdG90eXBlIGNoYWluLFxuICAgICAgICAgICAgT2JqZWN0LnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodGFyZ2V0LCBrZXkpXG4gICAgICAgIClcbiAgICApOyAvLyBhbmQgYWxzbyB1bnNhZmUgaWYgdGhleSdyZSBub25lbnVtZXJhYmxlLlxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHt9O1xuXG4gICAgaWYgKG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICBnZXRLZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0sXG4gICAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0S2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAocHJvcGVydHlJc1Vuc2FmZSh0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHByb3BlcnR5SXNPbk9iamVjdCh0YXJnZXQsIGtleSkgJiZcbiAgICAgICAgICAgIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pXG4gICAgICAgICkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGdldE1lcmdlRnVuY3Rpb24oa2V5LCBvcHRpb25zKShcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSxcbiAgICAgICAgICAgICAgICBzb3VyY2Vba2V5XSxcbiAgICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKFxuICAgICAgICAgICAgICAgIHNvdXJjZVtrZXldLFxuICAgICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb247XG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnMuYXJyYXlNZXJnZSA9IG9wdGlvbnMuYXJyYXlNZXJnZSB8fCBkZWZhdWx0QXJyYXlNZXJnZTtcbiAgICBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0ID0gb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCB8fCBpc01lcmdlYWJsZU9iamVjdDsgLy8gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQgaXMgYWRkZWQgdG8gYG9wdGlvbnNgIHNvIHRoYXQgY3VzdG9tIGFycmF5TWVyZ2UoKVxuICAgIC8vIGltcGxlbWVudGF0aW9ucyBjYW4gdXNlIGl0LiBUaGUgY2FsbGVyIG1heSBub3QgcmVwbGFjZSBpdC5cblxuICAgIG9wdGlvbnMuY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQgPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZDtcbiAgICB2YXIgc291cmNlSXNBcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcbiAgICB2YXIgdGFyZ2V0SXNBcnJheSA9IEFycmF5LmlzQXJyYXkodGFyZ2V0KTtcbiAgICB2YXIgc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCA9IHNvdXJjZUlzQXJyYXkgPT09IHRhcmdldElzQXJyYXk7XG5cbiAgICBpZiAoIXNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIGlmIChzb3VyY2VJc0FycmF5KSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucyk7XG4gICAgfVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheScpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIG5leHQpIHtcbiAgICAgICAgcmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zKTtcbiAgICB9LCB7fSk7XG59O1xuXG52YXIgZGVlcG1lcmdlXzEgPSBkZWVwbWVyZ2U7XG52YXIgY2pzID0gZGVlcG1lcmdlXzE7XG5cbmNsYXNzIFByZWZhYkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoY2xhenosIHByb3BlcnRpZXMgPSB7fSwgb3ZlcndyaXRlID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmNsYXp6ID0gY2xheno7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgICAgIHRoaXMub3ZlcndyaXRlID0gb3ZlcndyaXRlO1xuICAgIH1cblxuICAgIGFwcGx5VG9FbnRpdHkoZW50aXR5LCBpbml0aWFsUHJvcHMgPSB7fSkge1xuICAgICAgICBpZiAoIXRoaXMuY2xhenouYWxsb3dNdWx0aXBsZSAmJiBlbnRpdHkuaGFzKHRoaXMuY2xhenopKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMub3ZlcndyaXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjb21wID0gZW50aXR5W3RoaXMuY2xhenoucHJvdG90eXBlLl9ja2V5XTtcbiAgICAgICAgICAgIGVudGl0eS5yZW1vdmUoY29tcCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9wcyA9IGNqcyh0aGlzLnByb3BlcnRpZXMsIGluaXRpYWxQcm9wcyk7XG4gICAgICAgIGVudGl0eS5hZGQodGhpcy5jbGF6eiwgcHJvcHMpO1xuICAgIH1cbn1cblxuY2xhc3MgUHJlZmFiIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbmFtZScsICcnKTtcblxuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgJ2luaGVyaXQnLCBbXSk7XG5cbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRoaXMsICdjb21wb25lbnRzJywgW10pO1xuXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgYWRkQ29tcG9uZW50KHByZWZhYkNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMucHVzaChwcmVmYWJDb21wb25lbnQpO1xuICAgIH1cblxuICAgIGFwcGx5VG9FbnRpdHkoZW50aXR5LCBwcmVmYWJQcm9wcyA9IHt9KSB7XG4gICAgICAgIHRoaXMuaW5oZXJpdC5mb3JFYWNoKChwYXJlbnQpID0+IHtcbiAgICAgICAgICAgIHBhcmVudC5hcHBseVRvRW50aXR5KGVudGl0eSwgcHJlZmFiUHJvcHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYXJyQ29tcHMgPSB7fTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xhenogPSBjb21wb25lbnQuY2xheno7XG4gICAgICAgICAgICBjb25zdCBja2V5ID0gY2xhenoucHJvdG90eXBlLl9ja2V5O1xuICAgICAgICAgICAgbGV0IGluaXRpYWxDb21wUHJvcHMgPSB7fTtcblxuICAgICAgICAgICAgaWYgKGNsYXp6LmFsbG93TXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xhenoua2V5UHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gY29tcG9uZW50LnByb3BlcnRpZXNbY2xhenoua2V5UHJvcGVydHldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmYWJQcm9wc1tja2V5XSAmJiBwcmVmYWJQcm9wc1tja2V5XVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsQ29tcFByb3BzID0gcHJlZmFiUHJvcHNbY2tleV1ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYXJyQ29tcHNbY2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyckNvbXBzW2NrZXldID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZhYlByb3BzW2NrZXldICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmYWJQcm9wc1tja2V5XVthcnJDb21wc1tja2V5XV1cbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsQ29tcFByb3BzID0gcHJlZmFiUHJvcHNbY2tleV1bYXJyQ29tcHNbY2tleV1dO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYXJyQ29tcHNbY2tleV0rKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGluaXRpYWxDb21wUHJvcHMgPSBwcmVmYWJQcm9wc1tja2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tcG9uZW50LmFwcGx5VG9FbnRpdHkoZW50aXR5LCBpbml0aWFsQ29tcFByb3BzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgfVxufVxuXG5jbGFzcyBQcmVmYWJSZWdpc3RyeSB7XG4gICAgY29uc3RydWN0b3IoZW5naW5lKSB7XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX3ByZWZhYnMnLCB7fSk7XG5cbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRoaXMsICdfZW5naW5lJywgbnVsbCk7XG5cbiAgICAgICAgdGhpcy5fZW5naW5lID0gZW5naW5lO1xuICAgIH1cblxuICAgIGRlc2VyaWFsaXplKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJlZCA9IHRoaXMuZ2V0KGRhdGEubmFtZSk7XG5cbiAgICAgICAgaWYgKHJlZ2lzdGVyZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZWdpc3RlcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJlZmFiID0gbmV3IFByZWZhYihkYXRhLm5hbWUpO1xuICAgICAgICBsZXQgaW5oZXJpdDtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmluaGVyaXQpKSB7XG4gICAgICAgICAgICBpbmhlcml0ID0gZGF0YS5pbmhlcml0O1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhLmluaGVyaXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpbmhlcml0ID0gW2RhdGEuaW5oZXJpdF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmhlcml0ID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBwcmVmYWIuaW5oZXJpdCA9IGluaGVyaXQubWFwKChwYXJlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZiA9IHRoaXMuZ2V0KHBhcmVudCk7XG5cbiAgICAgICAgICAgIGlmICghcmVmKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgICBgUHJlZmFiIFwiJHtkYXRhLm5hbWV9XCIgY2Fubm90IGluaGVyaXQgZnJvbSBQcmVmYWIgXCIke3BhcmVudH1cIiBiZWNhdXNlIGlzIG5vdCByZWdpc3RlcmVkIHlldCEgUHJlZmFicyBtdXN0IGJlIHJlZ2lzdGVyZWQgaW4gdGhlIHJpZ2h0IG9yZGVyLmBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWY7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjb21wcyA9IGRhdGEuY29tcG9uZW50cyB8fCBbXTtcbiAgICAgICAgY29tcHMuZm9yRWFjaCgoY29tcG9uZW50RGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnREYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNrZXkgPSBjYW1lbFN0cmluZyhjb21wb25lbnREYXRhKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNsYXp6ID0gdGhpcy5fZW5naW5lLl9jb21wb25lbnRzLmdldChja2V5KTtcblxuICAgICAgICAgICAgICAgIGlmIChjbGF6eikge1xuICAgICAgICAgICAgICAgICAgICBwcmVmYWIuYWRkQ29tcG9uZW50KG5ldyBQcmVmYWJDb21wb25lbnQoY2xhenopKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnREYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNrZXkgPSBjYW1lbFN0cmluZyhjb21wb25lbnREYXRhLnR5cGUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2xhenogPSB0aGlzLl9lbmdpbmUuX2NvbXBvbmVudHMuZ2V0KGNrZXkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNsYXp6KSB7XG4gICAgICAgICAgICAgICAgICAgIHByZWZhYi5hZGRDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgUHJlZmFiQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXp6LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudERhdGEucHJvcGVydGllcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnREYXRhLm92ZXJ3cml0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYFVucmVjb2duaXplZCBjb21wb25lbnQgcmVmZXJlbmNlIFwiJHtjb21wb25lbnREYXRhfVwiIGluIHByZWZhYiBcIiR7ZGF0YS5uYW1lfVwiLiBFbnN1cmUgdGhlIGNvbXBvbmVudCBpcyByZWdpc3RlcmVkIGJlZm9yZSB0aGUgcHJlZmFiLmBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJlZmFiO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcHJlZmFiID0gdGhpcy5kZXNlcmlhbGl6ZShkYXRhKTtcbiAgICAgICAgdGhpcy5fcHJlZmFic1twcmVmYWIubmFtZV0gPSBwcmVmYWI7XG4gICAgfVxuXG4gICAgZ2V0KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZWZhYnNbbmFtZV07XG4gICAgfVxuXG4gICAgY3JlYXRlKHdvcmxkLCBuYW1lLCBwcm9wZXJ0aWVzID0ge30pIHtcbiAgICAgICAgY29uc3QgcHJlZmFiID0gdGhpcy5nZXQobmFtZSk7XG5cbiAgICAgICAgaWYgKCFwcmVmYWIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgQ291bGQgbm90IGluc3RhbnRpYXRlIHByZWZhYiBcIiR7bmFtZX1cIiBzaW5jZSBpdCBpcyBub3QgcmVnaXN0ZXJlZGBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbnRpdHkgPSB3b3JsZC5jcmVhdGVFbnRpdHkoKTtcbiAgICAgICAgZW50aXR5Ll9xZWxpZ2libGUgPSBmYWxzZTtcbiAgICAgICAgcHJlZmFiLmFwcGx5VG9FbnRpdHkoZW50aXR5LCBwcm9wZXJ0aWVzKTtcbiAgICAgICAgZW50aXR5Ll9xZWxpZ2libGUgPSB0cnVlO1xuXG4gICAgICAgIGVudGl0eS5fY2FuZGlkYWN5KCk7XG5cbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG59XG5cbmNsYXNzIENvbXBvbmVudCB7XG4gICAgZ2V0IHdvcmxkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbnRpdHkud29ybGQ7XG4gICAgfVxuXG4gICAgZ2V0IGFsbG93TXVsdGlwbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmFsbG93TXVsdGlwbGU7XG4gICAgfVxuXG4gICAgZ2V0IGtleVByb3BlcnR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5rZXlQcm9wZXJ0eTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzID0ge30pIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnByb3BlcnRpZXMsIHByb3BlcnRpZXMpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZW50aXR5LnJlbW92ZSh0aGlzKTtcbiAgICB9XG5cbiAgICBfb25EZXN0cm95ZWQoKSB7XG4gICAgICAgIHRoaXMub25EZXN0cm95ZWQoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuZW50aXR5O1xuICAgIH1cblxuICAgIF9vbkV2ZW50KGV2dCkge1xuICAgICAgICB0aGlzLm9uRXZlbnQoZXZ0KTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXNbZXZ0LmhhbmRsZXJOYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpc1tldnQuaGFuZGxlck5hbWVdKGV2dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25BdHRhY2hlZChlbnRpdHkpIHtcbiAgICAgICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XG4gICAgICAgIHRoaXMub25BdHRhY2hlZChlbnRpdHkpO1xuICAgIH1cblxuICAgIHNlcmlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3Qgb2IgPSB7fTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNvbnN0cnVjdG9yLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIG9iW2tleV0gPSB0aGlzW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2I7XG4gICAgfVxuXG4gICAgb25BdHRhY2hlZChlbnRpdHkpIHt9XG5cbiAgICBvbkRlc3Ryb3llZCgpIHt9XG5cbiAgICBvbkV2ZW50KGV2dCkge31cbn1cblxuX2RlZmluZVByb3BlcnR5KENvbXBvbmVudCwgJ2FsbG93TXVsdGlwbGUnLCBmYWxzZSk7XG5cbl9kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQsICdrZXlQcm9wZXJ0eScsIG51bGwpO1xuXG5fZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LCAncHJvcGVydGllcycsIHt9KTtcblxuY2xhc3MgRW50aXR5RXZlbnQge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGEgPSB7fSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgJ2RhdGEnLCB7fSk7XG5cbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRoaXMsICdwcmV2ZW50ZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRoaXMsICdoYW5kbGVkJywgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuaGFuZGxlck5hbWUgPSBjYW1lbFN0cmluZyhgb24gJHt0aGlzLm5hbWV9YCk7XG4gICAgfVxuXG4gICAgaXMobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lID09PSBuYW1lO1xuICAgIH1cblxuICAgIGhhbmRsZSgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcmV2ZW50ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHByZXZlbnQoKSB7XG4gICAgICAgIHRoaXMucHJldmVudGVkID0gdHJ1ZTtcbiAgICB9XG59XG5cbmNvbnN0IE9ORSA9IDFuO1xuY29uc3Qgc3VidHJhY3RCaXQgPSAobnVtLCBiaXQpID0+IHtcbiAgICByZXR1cm4gbnVtICYgfigxbiA8PCBiaXQpO1xufTtcbmNvbnN0IGFkZEJpdCA9IChudW0sIGJpdCkgPT4ge1xuICAgIHJldHVybiBudW0gfCAoT05FIDw8IGJpdCk7XG59O1xuY29uc3QgaGFzQml0ID0gKG51bSwgYml0KSA9PiB7XG4gICAgcmV0dXJuIChudW0gPj4gYml0KSAlIDJuICE9PSAwbjtcbn07XG5jb25zdCBiaXRJbnRlcnNlY3Rpb24gPSAobjEsIG4yKSA9PiB7XG4gICAgcmV0dXJuIG4xICYgbjI7XG59O1xuXG5jb25zdCBhdHRhY2hDb21wb25lbnQgPSAoZW50aXR5LCBjb21wb25lbnQpID0+IHtcbiAgICBjb25zdCBrZXkgPSBjb21wb25lbnQuX2NrZXk7XG4gICAgZW50aXR5W2tleV0gPSBjb21wb25lbnQ7XG4gICAgZW50aXR5LmNvbXBvbmVudHNba2V5XSA9IGNvbXBvbmVudDtcbn07XG5cbmNvbnN0IGF0dGFjaENvbXBvbmVudEtleWVkID0gKGVudGl0eSwgY29tcG9uZW50KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gY29tcG9uZW50Ll9ja2V5O1xuXG4gICAgaWYgKCFlbnRpdHkuY29tcG9uZW50c1trZXldKSB7XG4gICAgICAgIGVudGl0eVtrZXldID0ge307XG4gICAgICAgIGVudGl0eS5jb21wb25lbnRzW2tleV0gPSB7fTtcbiAgICB9XG5cbiAgICBlbnRpdHlba2V5XVtjb21wb25lbnRbY29tcG9uZW50LmtleVByb3BlcnR5XV0gPSBjb21wb25lbnQ7XG4gICAgZW50aXR5LmNvbXBvbmVudHNba2V5XVtjb21wb25lbnRbY29tcG9uZW50LmtleVByb3BlcnR5XV0gPSBjb21wb25lbnQ7XG59O1xuXG5jb25zdCBhdHRhY2hDb21wb25lbnRBcnJheSA9IChlbnRpdHksIGNvbXBvbmVudCkgPT4ge1xuICAgIGNvbnN0IGtleSA9IGNvbXBvbmVudC5fY2tleTtcblxuICAgIGlmICghZW50aXR5LmNvbXBvbmVudHNba2V5XSkge1xuICAgICAgICBlbnRpdHlba2V5XSA9IFtdO1xuICAgICAgICBlbnRpdHkuY29tcG9uZW50c1trZXldID0gW107XG4gICAgfVxuXG4gICAgZW50aXR5W2tleV0ucHVzaChjb21wb25lbnQpO1xuICAgIGVudGl0eS5jb21wb25lbnRzW2tleV0ucHVzaChjb21wb25lbnQpO1xufTtcblxuY29uc3QgcmVtb3ZlQ29tcG9uZW50ID0gKGVudGl0eSwgY29tcG9uZW50KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gY29tcG9uZW50Ll9ja2V5O1xuICAgIGRlbGV0ZSBlbnRpdHlba2V5XTtcbiAgICBkZWxldGUgZW50aXR5LmNvbXBvbmVudHNba2V5XTtcbiAgICBlbnRpdHkuX2NiaXRzID0gc3VidHJhY3RCaXQoZW50aXR5Ll9jYml0cywgY29tcG9uZW50Ll9jYml0KTtcblxuICAgIGVudGl0eS5fY2FuZGlkYWN5KCk7XG59O1xuXG5jb25zdCByZW1vdmVDb21wb25lbnRLZXllZCA9IChlbnRpdHksIGNvbXBvbmVudCkgPT4ge1xuICAgIGNvbnN0IGtleSA9IGNvbXBvbmVudC5fY2tleTtcbiAgICBjb25zdCBrZXlQcm9wID0gY29tcG9uZW50W2NvbXBvbmVudC5rZXlQcm9wZXJ0eV07XG4gICAgZGVsZXRlIGVudGl0eVtrZXldW2tleVByb3BdO1xuICAgIGRlbGV0ZSBlbnRpdHkuY29tcG9uZW50c1trZXldW2tleVByb3BdO1xuXG4gICAgaWYgKE9iamVjdC5rZXlzKGVudGl0eVtrZXldKS5sZW5ndGggPD0gMCkge1xuICAgICAgICBkZWxldGUgZW50aXR5W2tleV07XG4gICAgICAgIGRlbGV0ZSBlbnRpdHkuY29tcG9uZW50c1trZXldO1xuICAgICAgICBlbnRpdHkuX2NiaXRzID0gc3VidHJhY3RCaXQoZW50aXR5Ll9jYml0cywgY29tcG9uZW50Ll9jYml0KTtcblxuICAgICAgICBlbnRpdHkuX2NhbmRpZGFjeSgpO1xuICAgIH1cbn07XG5cbmNvbnN0IHJlbW92ZUNvbXBvbmVudEFycmF5ID0gKGVudGl0eSwgY29tcG9uZW50KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gY29tcG9uZW50Ll9ja2V5O1xuICAgIGNvbnN0IGlkeCA9IGVudGl0eVtrZXldLmluZGV4T2YoY29tcG9uZW50KTtcbiAgICBlbnRpdHlba2V5XS5zcGxpY2UoaWR4LCAxKTtcbiAgICBlbnRpdHkuY29tcG9uZW50c1trZXldLnNwbGljZShpZHgsIDEpO1xuXG4gICAgaWYgKGVudGl0eVtrZXldLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIGRlbGV0ZSBlbnRpdHlba2V5XTtcbiAgICAgICAgZGVsZXRlIGVudGl0eS5jb21wb25lbnRzW2tleV07XG4gICAgICAgIGVudGl0eS5fY2JpdHMgPSBzdWJ0cmFjdEJpdChlbnRpdHkuX2NiaXRzLCBjb21wb25lbnQuX2NiaXQpO1xuXG4gICAgICAgIGVudGl0eS5fY2FuZGlkYWN5KCk7XG4gICAgfVxufTtcblxuY29uc3Qgc2VyaWFsaXplQ29tcG9uZW50ID0gKGNvbXBvbmVudCkgPT4ge1xuICAgIHJldHVybiBjb21wb25lbnQuc2VyaWFsaXplKCk7XG59O1xuXG5jb25zdCBzZXJpYWxpemVDb21wb25lbnRBcnJheSA9IChhcnIpID0+IHtcbiAgICByZXR1cm4gYXJyLm1hcChzZXJpYWxpemVDb21wb25lbnQpO1xufTtcblxuY29uc3Qgc2VyaWFsaXplQ29tcG9uZW50S2V5ZWQgPSAob2IpID0+IHtcbiAgICBjb25zdCBzZXIgPSB7fTtcblxuICAgIGZvciAoY29uc3QgayBpbiBvYikge1xuICAgICAgICBzZXJba10gPSBzZXJpYWxpemVDb21wb25lbnQob2Jba10pO1xuICAgIH1cblxuICAgIHJldHVybiBzZXI7XG59O1xuXG5jbGFzcyBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKHdvcmxkLCBpZCkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgJ19jYml0cycsIDBuKTtcblxuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgJ19xZWxpZ2libGUnLCB0cnVlKTtcblxuICAgICAgICB0aGlzLndvcmxkID0gd29ybGQ7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgICAgIHRoaXMuaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBfY2FuZGlkYWN5KCkge1xuICAgICAgICBpZiAodGhpcy5fcWVsaWdpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLndvcmxkLl9jYW5kaWRhdGUodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGQoY2xhenosIHByb3BlcnRpZXMpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IGNsYXp6KHByb3BlcnRpZXMpO1xuXG4gICAgICAgIGlmIChjb21wb25lbnQua2V5UHJvcGVydHkpIHtcbiAgICAgICAgICAgIGF0dGFjaENvbXBvbmVudEtleWVkKHRoaXMsIGNvbXBvbmVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50LmFsbG93TXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGF0dGFjaENvbXBvbmVudEFycmF5KHRoaXMsIGNvbXBvbmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdHRhY2hDb21wb25lbnQodGhpcywgY29tcG9uZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2NiaXRzID0gYWRkQml0KHRoaXMuX2NiaXRzLCBjb21wb25lbnQuX2NiaXQpO1xuXG4gICAgICAgIGNvbXBvbmVudC5fb25BdHRhY2hlZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9jYW5kaWRhY3koKTtcbiAgICB9XG5cbiAgICBoYXMoY2xhenopIHtcbiAgICAgICAgcmV0dXJuIGhhc0JpdCh0aGlzLl9jYml0cywgY2xhenoucHJvdG90eXBlLl9jYml0KTtcbiAgICB9XG5cbiAgICByZW1vdmUoY29tcG9uZW50KSB7XG4gICAgICAgIGlmIChjb21wb25lbnQua2V5UHJvcGVydHkpIHtcbiAgICAgICAgICAgIHJlbW92ZUNvbXBvbmVudEtleWVkKHRoaXMsIGNvbXBvbmVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50LmFsbG93TXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHJlbW92ZUNvbXBvbmVudEFycmF5KHRoaXMsIGNvbXBvbmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW1vdmVDb21wb25lbnQodGhpcywgY29tcG9uZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudC5fb25EZXN0cm95ZWQoKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBmb3IgKGNvbnN0IGsgaW4gdGhpcy5jb21wb25lbnRzKSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gdGhpcy5jb21wb25lbnRzW2tdO1xuXG4gICAgICAgICAgICBpZiAodiBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NiaXRzID0gc3VidHJhY3RCaXQodGhpcy5fY2JpdHMsIHYuX2NiaXQpO1xuXG4gICAgICAgICAgICAgICAgdi5fb25EZXN0cm95ZWQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2Ygdikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYml0cyA9IHN1YnRyYWN0Qml0KHRoaXMuX2NiaXRzLCBjb21wb25lbnQuX2NiaXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5fb25EZXN0cm95ZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIE9iamVjdC52YWx1ZXModikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2JpdHMgPSBzdWJ0cmFjdEJpdCh0aGlzLl9jYml0cywgY29tcG9uZW50Ll9jYml0KTtcblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuX29uRGVzdHJveWVkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgdGhpc1trXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNvbXBvbmVudHNba107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jYW5kaWRhY3koKTtcblxuICAgICAgICB0aGlzLndvcmxkLl9kZXN0cm95ZWQodGhpcy5pZCk7XG5cbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgICAgIHRoaXMuaXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHNlcmlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3QgayBpbiB0aGlzLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLmNvbXBvbmVudHNba107XG5cbiAgICAgICAgICAgIGlmICh2IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50c1trXSA9IHNlcmlhbGl6ZUNvbXBvbmVudCh2KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50c1trXSA9IHNlcmlhbGl6ZUNvbXBvbmVudEFycmF5KHYpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzW2tdID0gc2VyaWFsaXplQ29tcG9uZW50S2V5ZWQodik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgICAgICAuLi5jb21wb25lbnRzLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZpcmVFdmVudChuYW1lLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGV2dCA9IG5ldyBFbnRpdHlFdmVudChuYW1lLCBkYXRhKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLmNvbXBvbmVudHNba2V5XTtcblxuICAgICAgICAgICAgaWYgKHYgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICB2Ll9vbkV2ZW50KGV2dCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXZ0LnByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZbaV0uX29uRXZlbnQoZXZ0KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0LnByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgT2JqZWN0LnZhbHVlcyh2KSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuX29uRXZlbnQoZXZ0KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0LnByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV2dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBldnQ7XG4gICAgfVxufVxuXG5jbGFzcyBRdWVyeSB7XG4gICAgY29uc3RydWN0b3Iod29ybGQsIGZpbHRlcnMpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRoaXMsICdfY2FjaGUnLCBbXSk7XG5cbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRoaXMsICdfb25BZGRMaXN0ZW5lcnMnLCBbXSk7XG5cbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRoaXMsICdfb25SZW1vdmVMaXN0ZW5lcnMnLCBbXSk7XG5cbiAgICAgICAgdGhpcy5fd29ybGQgPSB3b3JsZDtcbiAgICAgICAgY29uc3QgYW55ID0gZmlsdGVycy5hbnkgfHwgW107XG4gICAgICAgIGNvbnN0IGFsbCA9IGZpbHRlcnMuYWxsIHx8IFtdO1xuICAgICAgICBjb25zdCBub25lID0gZmlsdGVycy5ub25lIHx8IFtdO1xuICAgICAgICB0aGlzLl9hbnkgPSBhbnkucmVkdWNlKChzLCBjKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYWRkQml0KHMsIGMucHJvdG90eXBlLl9jYml0KTtcbiAgICAgICAgfSwgMG4pO1xuICAgICAgICB0aGlzLl9hbGwgPSBhbGwucmVkdWNlKChzLCBjKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYWRkQml0KHMsIGMucHJvdG90eXBlLl9jYml0KTtcbiAgICAgICAgfSwgMG4pO1xuICAgICAgICB0aGlzLl9ub25lID0gbm9uZS5yZWR1Y2UoKHMsIGMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhZGRCaXQocywgYy5wcm90b3R5cGUuX2NiaXQpO1xuICAgICAgICB9LCAwbik7XG4gICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIG9uRW50aXR5QWRkZWQoZm4pIHtcbiAgICAgICAgdGhpcy5fb25BZGRMaXN0ZW5lcnMucHVzaChmbik7XG4gICAgfVxuXG4gICAgb25FbnRpdHlSZW1vdmVkKGZuKSB7XG4gICAgICAgIHRoaXMuX29uUmVtb3ZlTGlzdGVuZXJzLnB1c2goZm4pO1xuICAgIH1cblxuICAgIGhhcyhlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWR4KGVudGl0eSkgPj0gMDtcbiAgICB9XG5cbiAgICBpZHgoZW50aXR5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWNoZS5pbmRleE9mKGVudGl0eSk7XG4gICAgfVxuXG4gICAgbWF0Y2hlcyhlbnRpdHkpIHtcbiAgICAgICAgY29uc3QgYml0cyA9IGVudGl0eS5fY2JpdHM7XG4gICAgICAgIGNvbnN0IGFueSA9IHRoaXMuX2FueSA9PT0gMG4gfHwgYml0SW50ZXJzZWN0aW9uKGJpdHMsIHRoaXMuX2FueSkgPiAwO1xuXG4gICAgICAgIGNvbnN0IGFsbCA9IGJpdEludGVyc2VjdGlvbihiaXRzLCB0aGlzLl9hbGwpID09PSB0aGlzLl9hbGw7XG5cbiAgICAgICAgY29uc3Qgbm9uZSA9IGJpdEludGVyc2VjdGlvbihiaXRzLCB0aGlzLl9ub25lKSA9PT0gMG47XG4gICAgICAgIHJldHVybiBhbnkgJiYgYWxsICYmIG5vbmU7XG4gICAgfVxuXG4gICAgY2FuZGlkYXRlKGVudGl0eSkge1xuICAgICAgICBjb25zdCBpZHggPSB0aGlzLmlkeChlbnRpdHkpO1xuICAgICAgICBjb25zdCBpc1RyYWNraW5nID0gaWR4ID49IDA7XG5cbiAgICAgICAgaWYgKCFlbnRpdHkuaXNEZXN0cm95ZWQgJiYgdGhpcy5tYXRjaGVzKGVudGl0eSkpIHtcbiAgICAgICAgICAgIGlmICghaXNUcmFja2luZykge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlLnB1c2goZW50aXR5KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX29uQWRkTGlzdGVuZXJzLmZvckVhY2goKGNiKSA9PiBjYihlbnRpdHkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNUcmFja2luZykge1xuICAgICAgICAgICAgdGhpcy5fY2FjaGUuc3BsaWNlKGlkeCwgMSk7XG5cbiAgICAgICAgICAgIHRoaXMuX29uUmVtb3ZlTGlzdGVuZXJzLmZvckVhY2goKGNiKSA9PiBjYihlbnRpdHkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLl9jYWNoZSA9IFtdO1xuXG4gICAgICAgIHRoaXMuX3dvcmxkLl9lbnRpdGllcy5mb3JFYWNoKChlbnRpdHkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FuZGlkYXRlKGVudGl0eSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlO1xuICAgIH1cbn1cblxuY2xhc3MgV29ybGQge1xuICAgIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgJ19pZCcsIDApO1xuXG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnX3F1ZXJpZXMnLCBbXSk7XG5cbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRoaXMsICdfZW50aXRpZXMnLCBuZXcgTWFwKCkpO1xuXG4gICAgICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICAgIH1cblxuICAgIGNyZWF0ZUlkKCkge1xuICAgICAgICByZXR1cm4gKyt0aGlzLl9pZCArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcbiAgICB9XG5cbiAgICBnZXRFbnRpdHkoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VudGl0aWVzLmdldChpZCk7XG4gICAgfVxuXG4gICAgZ2V0RW50aXRpZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRpdGllcy52YWx1ZXMoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVFbnRpdHkoaWQgPSB0aGlzLmNyZWF0ZUlkKCkpIHtcbiAgICAgICAgY29uc3QgZW50aXR5ID0gbmV3IEVudGl0eSh0aGlzLCBpZCk7XG5cbiAgICAgICAgdGhpcy5fZW50aXRpZXMuc2V0KGlkLCBlbnRpdHkpO1xuXG4gICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgfVxuXG4gICAgZGVzdHJveUVudGl0eShpZCkge1xuICAgICAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmdldEVudGl0eShpZCk7XG5cbiAgICAgICAgaWYgKGVudGl0eSkge1xuICAgICAgICAgICAgZW50aXR5LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3lFbnRpdGllcygpIHtcbiAgICAgICAgdGhpcy5fZW50aXRpZXMuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICAgICAgICBlbnRpdHkuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3lFbnRpdGllcygpO1xuICAgICAgICB0aGlzLl9pZCA9IDA7XG4gICAgICAgIHRoaXMuX3F1ZXJpZXMgPSBbXTtcbiAgICAgICAgdGhpcy5fZW50aXRpZXMgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlUXVlcnkoZmlsdGVycykge1xuICAgICAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSh0aGlzLCBmaWx0ZXJzKTtcblxuICAgICAgICB0aGlzLl9xdWVyaWVzLnB1c2gocXVlcnkpO1xuXG4gICAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9XG5cbiAgICBjcmVhdGVQcmVmYWIobmFtZSwgcHJvcGVydGllcyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuZ2luZS5fcHJlZmFicy5jcmVhdGUodGhpcywgbmFtZSwgcHJvcGVydGllcyk7XG4gICAgfVxuXG4gICAgc2VyaWFsaXplKGVudGl0aWVzKSB7XG4gICAgICAgIGNvbnN0IGpzb24gPSBbXTtcbiAgICAgICAgY29uc3QgbGlzdCA9IGVudGl0aWVzIHx8IHRoaXMuX2VudGl0aWVzO1xuICAgICAgICBsaXN0LmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgIGpzb24ucHVzaChlLnNlcmlhbGl6ZSgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlbnRpdGllczoganNvbixcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkZXNlcmlhbGl6ZShkYXRhKSB7XG4gICAgICAgIGZvciAoY29uc3QgZW50aXR5RGF0YSBvZiBkYXRhLmVudGl0aWVzKSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVPckdldEVudGl0eUJ5SWQoZW50aXR5RGF0YS5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGVudGl0eURhdGEgb2YgZGF0YS5lbnRpdGllcykge1xuICAgICAgICAgICAgdGhpcy5fZGVzZXJpYWxpemVFbnRpdHkoZW50aXR5RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY3JlYXRlT3JHZXRFbnRpdHlCeUlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEVudGl0eShpZCkgfHwgdGhpcy5jcmVhdGVFbnRpdHkoaWQpO1xuICAgIH1cblxuICAgIF9kZXNlcmlhbGl6ZUVudGl0eShkYXRhKSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIC4uLmNvbXBvbmVudHMgfSA9IGRhdGE7XG5cbiAgICAgICAgY29uc3QgZW50aXR5ID0gdGhpcy5fY3JlYXRlT3JHZXRFbnRpdHlCeUlkKGlkKTtcblxuICAgICAgICBlbnRpdHkuX3FlbGlnaWJsZSA9IGZhbHNlO1xuICAgICAgICBPYmplY3QuZW50cmllcyhjb21wb25lbnRzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBjYW1lbFN0cmluZyhrZXkpO1xuXG4gICAgICAgICAgICBjb25zdCBkZWYgPSB0aGlzLmVuZ2luZS5fY29tcG9uZW50cy5nZXQodHlwZSk7XG5cbiAgICAgICAgICAgIGlmIChkZWYuYWxsb3dNdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXModmFsdWUpLmZvckVhY2goKGQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LmFkZChkZWYsIGQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbnRpdHkuYWRkKGRlZiwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZW50aXR5Ll9xZWxpZ2libGUgPSB0cnVlO1xuXG4gICAgICAgIGVudGl0eS5fY2FuZGlkYWN5KCk7XG4gICAgfVxuXG4gICAgX2NhbmRpZGF0ZShlbnRpdHkpIHtcbiAgICAgICAgdGhpcy5fcXVlcmllcy5mb3JFYWNoKChxKSA9PiBxLmNhbmRpZGF0ZShlbnRpdHkpKTtcbiAgICB9XG5cbiAgICBfZGVzdHJveWVkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbnRpdGllcy5kZWxldGUoaWQpO1xuICAgIH1cbn1cblxuY2xhc3MgRW5naW5lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRoaXMsICdfY29tcG9uZW50cycsIG5ldyBDb21wb25lbnRSZWdpc3RyeSgpKTtcblxuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgJ19wcmVmYWJzJywgbmV3IFByZWZhYlJlZ2lzdHJ5KHRoaXMpKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckNvbXBvbmVudChjbGF6eikge1xuICAgICAgICB0aGlzLl9jb21wb25lbnRzLnJlZ2lzdGVyKGNsYXp6KTtcbiAgICB9XG5cbiAgICByZWdpc3RlclByZWZhYihkYXRhKSB7XG4gICAgICAgIHRoaXMuX3ByZWZhYnMucmVnaXN0ZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgY3JlYXRlV29ybGQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgV29ybGQodGhpcyk7XG4gICAgfVxuXG4gICAgZGVzdHJveVdvcmxkKHdvcmxkKSB7XG4gICAgICAgIHdvcmxkLmRlc3Ryb3koKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IENvbXBvbmVudCwgRW5naW5lIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIHdnbHQgZnJvbSBcIndnbHRcIlxyXG5pbXBvcnQgZW5naW5lIGZyb20gJy4vZWNzJ1xyXG5pbXBvcnQge0FsbHksIEFwcGVhcmFuY2UsIENvbWJhdCwgRGVzY3JpcHRpb24sIEVuZW15LCBoYXNNb3ZlZCwgSGVhbHRoLCBQb3NpdGlvbiwgQWN0aW9uLCBNb3ZlbWVudH0gZnJvbSBcIi4vY29tcG9uZW50c1wiXHJcbmltcG9ydCB7ZW50aXR5QUl9IGZyb20gXCIuL2FpXCJcclxuaW1wb3J0IHt1aX0gZnJvbSBcIi4vdGVybWluYWwvdWlcIlxyXG4vL2RlY2xhcmluZyB2YXJpYWJsZXMgd2l0aCBubyBiZXR0ZXIgaG9tZXMsIHlldC5cclxuZ2xvYmFsLmxvY2F0aW9uSWQgPSB7fVxyXG52YXIgZ29sZW1hbmNlciA9IHtcclxuICAgIGdvbGVtczoge1xyXG4gICAgICAgIGNvdW50OiAxMCxcclxuICAgICAgICBjb3N0OiAxMCxcclxuICAgICAgICBkYW1hZ2U6IDEsXHJcbiAgICAgICAgZGFtYWdlQ29zdDogMjAsXHJcbiAgICAgICAgYXR0YWNrU3BlZWQ6IDEsXHJcbiAgICAgICAgYXR0YWNrU3BlZWRDb3N0OiAxMDBcclxuICAgIH0sXHJcbiAgICBjdXJyZW5jeToge1xyXG4gICAgICAgIHBhcnRzOiAxMDBcclxuICAgIH0sXHJcbiAgICAvLzA6bGluZSwgMTpib3gsIDI6ZHJhd1xyXG4gICAgcGxhY2VtZW50OiB7XHJcbiAgICAgICAgaW5kZXg6IDAsXHJcbiAgICB9XHJcbn1cclxuLy90ZW1wb3JhcnkgdXBkYXRpbmcgc3BvdFxyXG4vL1RPRE86IE1vdmUgdGhlc2UgdmFsdWVzIGludG8gdGhlIGVudGl0eSBzdGF0c1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvbGVtc1wiKS5pbm5lckhUTUwgPSBnb2xlbWFuY2VyLmdvbGVtcy5jb3VudFxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvbGVtQ29zdFwiKS5pbm5lckhUTUwgPSBnb2xlbWFuY2VyLmdvbGVtcy5jb3N0XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRGFtYWdlXCIpLmlubmVySFRNTCA9IGdvbGVtYW5jZXIuZ29sZW1zLmRhbWFnZVxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkF0dGFja1NwZWVkXCIpLmlubmVySFRNTCA9IGdvbGVtYW5jZXIuZ29sZW1zLmF0dGFja1NwZWVkXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiUGFydHNcIikuaW5uZXJIVE1MID0gZ29sZW1hbmNlci5jdXJyZW5jeS5wYXJ0c1xyXG5jb25zdCB0ZXJtaW5hbHggPSA4MlxyXG5jb25zdCB0ZXJtaW5hbHkgPSA1MlxyXG4vL2NyZWF0aW5nIHRoZSBtYXAgaW4gXCJjYW52YXNcIiB3aWR0aCA9IDgwLCBoZWlnaHQgPSA1MFxyXG5jb25zdCB0ZXJtaW5hbCA9IG5ldyB3Z2x0LlRlcm1pbmFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpLCB0ZXJtaW5hbHgsIHRlcm1pbmFseSlcclxuXHJcbi8vV0dMVCBsZWZ0b3ZlcnMuIFNldHRpbmcgdGhlIHdob2xlIG1hcCBhcyBleHBsb3JlZCBhbmQgdmlzaWJsZSB0byB0aGUgcGxheWVyXHJcbmZvciAobGV0IHkgPSAwOyB5IDwgdGVybWluYWwuaGVpZ2h0OyB5KyspIHtcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGVybWluYWwud2lkdGg7IHgrKykge1xyXG4gICAgICAgIHRlcm1pbmFsLmdyaWRbeV1beF0udmlzaWJsZSA9IHRydWVcclxuICAgICAgICB0ZXJtaW5hbC5ncmlkW3ldW3hdLmV4cGxvcmVkID0gdHJ1ZVxyXG4gICAgfVxyXG59XHJcblxyXG4vL2NyZWF0aW5nIHdvcmxkIHRvIGNvbnRhaW4gZW50aXRpZXMgaW4gb3JkZXIgdG8gZW5hYmxlIHF1ZXJ5XHJcbmdsb2JhbC53b3JsZCA9IGVuZ2luZS5jcmVhdGVXb3JsZCgpXHJcblxyXG4vL3Rlcm1pbmFsIGJvcmRlclxyXG4vL3RvcFxyXG5mb3IoIGxldCBpID0gMTsgaSA8dGVybWluYWx4IC0gMTsgaSsrKSB7XHJcbiAgICBsZXQgc3RydWN0dXJlID0gd29ybGQuY3JlYXRlUHJlZmFiKFwiSG9yaXpvbnRhbFwiKVxyXG4gICAgc3RydWN0dXJlLnBvc2l0aW9uLnggPSBpXHJcbiAgICBsb2NhdGlvbklkW3N0cnVjdHVyZS5wb3NpdGlvbi54ICsgXCIsXCIgKyBzdHJ1Y3R1cmUucG9zaXRpb24ueV0gPSBzdHJ1Y3R1cmUuaWRcclxuXHJcbn1cclxuLy9sZWZ0XHJcbmZvciggbGV0IGkgPSAxOyBpIDwgdGVybWluYWx5IC0gMTsgaSsrKSB7XHJcbiAgICBsZXQgc3RydWN0dXJlID0gd29ybGQuY3JlYXRlUHJlZmFiKFwiVmVydGljYWxcIilcclxuICAgIHN0cnVjdHVyZS5wb3NpdGlvbi55ID0gaVxyXG4gICAgbG9jYXRpb25JZFtzdHJ1Y3R1cmUucG9zaXRpb24ueCArIFwiLFwiICsgc3RydWN0dXJlLnBvc2l0aW9uLnldID0gc3RydWN0dXJlLmlkXHJcbn1cclxuLy9ib3R0b21cclxuZm9yKCBsZXQgaSA9IDE7IGkgPHRlcm1pbmFseCAtIDE7IGkrKykge1xyXG4gICAgbGV0IHN0cnVjdHVyZSA9IHdvcmxkLmNyZWF0ZVByZWZhYihcIkhvcml6b250YWxcIilcclxuICAgIHN0cnVjdHVyZS5wb3NpdGlvbi54ID0gaVxyXG4gICAgc3RydWN0dXJlLnBvc2l0aW9uLnkgPSB0ZXJtaW5hbHkgLSAxXHJcbiAgICBsb2NhdGlvbklkW3N0cnVjdHVyZS5wb3NpdGlvbi54ICsgXCIsXCIgKyBzdHJ1Y3R1cmUucG9zaXRpb24ueV0gPSBzdHJ1Y3R1cmUuaWRcclxufVxyXG4vL3JpZ2h0XHJcbmZvciggbGV0IGkgPSAxOyBpIDx0ZXJtaW5hbHkgLSAxOyBpKyspIHtcclxuICAgIGxldCBzdHJ1Y3R1cmUgPSB3b3JsZC5jcmVhdGVQcmVmYWIoXCJWZXJ0aWNhbFwiKVxyXG4gICAgc3RydWN0dXJlLnBvc2l0aW9uLnkgPSBpXHJcbiAgICBzdHJ1Y3R1cmUucG9zaXRpb24ueCA9IHRlcm1pbmFseCAtIDFcclxuICAgIGxvY2F0aW9uSWRbc3RydWN0dXJlLnBvc2l0aW9uLnggKyBcIixcIiArIHN0cnVjdHVyZS5wb3NpdGlvbi55XSA9IHN0cnVjdHVyZS5pZFxyXG59XHJcbndvcmxkLmNyZWF0ZVByZWZhYihcIlRvcExlZnRcIiwge3Bvc2l0aW9uOnt4OiAwLHk6IDB9fSlcclxud29ybGQuY3JlYXRlUHJlZmFiKFwiVG9wUmlnaHRcIiwge3Bvc2l0aW9uOnt4OiB0ZXJtaW5hbHgtMSx5OiAwfX0pXHJcbndvcmxkLmNyZWF0ZVByZWZhYihcIkJvdHRvbUxlZnRcIiwge3Bvc2l0aW9uOnt4OiAwLHk6IHRlcm1pbmFseS0xfX0pXHJcbndvcmxkLmNyZWF0ZVByZWZhYihcIkJvdHRvbVJpZ2h0XCIsIHtwb3NpdGlvbjp7eDogdGVybWluYWx4LTEseTogdGVybWluYWx5LTF9fSlcclxuXHJcblxyXG4vL3BsYXllciA9IGh1bWFuIHRlc3QgcGlsb3RcclxuY29uc3QgcGxheWVyeCA9IDFcclxuY29uc3QgcGxheWVyeSA9IDFcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJ4OyBpKyspIHtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyeTsgaisrKSB7XHJcbiAgICBsZXQgcGxheWVyID0gd29ybGQuY3JlYXRlUHJlZmFiKFwiSHVtYW5cIilcclxuICAgIHBsYXllci5wb3NpdGlvbi54ID0gTWF0aC5mbG9vcig4MC8yLXBsYXllcngvMitpKzEpXHJcbiAgICBwbGF5ZXIucG9zaXRpb24ueSA9IDQwK2pcclxuICAgIGxvY2F0aW9uSWRbcGxheWVyLnBvc2l0aW9uLnggKyBcIixcIiArIHBsYXllci5wb3NpdGlvbi55XSA9IHBsYXllci5pZFxyXG4gICAgfVxyXG59XHJcbi8vQXJyYXkgb2YgYWxsIHpvbWJpZSBzcGF3biBwb2ludHMgdG8gc2F2ZSBwcm9jZXNzaW5nIHBvd2VyLiAxLT43NTBcclxuY29uc3Qgc3Bhd25ab25lID0gWzEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDE5LDIwLDIxLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDI5LDMwLDMxLDMyLDMzLDM0LDM1LDM2LDM3LDM4LDM5LDQwLDQxLDQyLDQzLDQ0LDQ1LDQ2LDQ3LDQ4LDQ5LDUwLDUxLDUyLDUzLDU0LDU1LDU2LDU3LDU4LDU5LDYwLDYxLDYyLDYzLDY0LDY1LDY2LDY3LDY4LDY5LDcwLDcxLDcyLDczLDc0LDc1LDc2LDc3LDc4LDc5LDgwLDgxLDgyLDgzLDg0LDg1LDg2LDg3LDg4LDg5LDkwLDkxLDkyLDkzLDk0LDk1LDk2LDk3LDk4LDk5LDEwMCwxMDEsMTAyLDEwMywxMDQsMTA1LDEwNiwxMDcsMTA4LDEwOSwxMTAsMTExLDExMiwxMTMsMTE0LDExNSwxMTYsMTE3LDExOCwxMTksMTIwLDEyMSwxMjIsMTIzLDEyNCwxMjUsMTI2LDEyNywxMjgsMTI5LDEzMCwxMzEsMTMyLDEzMywxMzQsMTM1LDEzNiwxMzcsMTM4LDEzOSwxNDAsMTQxLDE0MiwxNDMsMTQ0LDE0NSwxNDYsMTQ3LDE0OCwxNDksMTUwLDE1MSwxNTIsMTUzLDE1NCwxNTUsMTU2LDE1NywxNTgsMTU5LDE2MCwxNjEsMTYyLDE2MywxNjQsMTY1LDE2NiwxNjcsMTY4LDE2OSwxNzAsMTcxLDE3MiwxNzMsMTc0LDE3NSwxNzYsMTc3LDE3OCwxNzksMTgwLDE4MSwxODIsMTgzLDE4NCwxODUsMTg2LDE4NywxODgsMTg5LDE5MCwxOTEsMTkyLDE5MywxOTQsMTk1LDE5NiwxOTcsMTk4LDE5OSwyMDAsMjAxLDIwMiwyMDMsMjA0LDIwNSwyMDYsMjA3LDIwOCwyMDksMjEwLDIxMSwyMTIsMjEzLDIxNCwyMTUsMjE2LDIxNywyMTgsMjE5LDIyMCwyMjEsMjIyLDIyMywyMjQsMjI1LDIyNiwyMjcsMjI4LDIyOSwyMzAsMjMxLDIzMiwyMzMsMjM0LDIzNSwyMzYsMjM3LDIzOCwyMzksMjQwLDI0MSwyNDIsMjQzLDI0NCwyNDUsMjQ2LDI0NywyNDgsMjQ5LDI1MCwyNTEsMjUyLDI1MywyNTQsMjU1LDI1NiwyNTcsMjU4LDI1OSwyNjAsMjYxLDI2MiwyNjMsMjY0LDI2NSwyNjYsMjY3LDI2OCwyNjksMjcwLDI3MSwyNzIsMjczLDI3NCwyNzUsMjc2LDI3NywyNzgsMjc5LDI4MCwyODEsMjgyLDI4MywyODQsMjg1LDI4NiwyODcsMjg4LDI4OSwyOTAsMjkxLDI5MiwyOTMsMjk0LDI5NSwyOTYsMjk3LDI5OCwyOTksMzAwLDMwMSwzMDIsMzAzLDMwNCwzMDUsMzA2LDMwNywzMDgsMzA5LDMxMCwzMTEsMzEyLDMxMywzMTQsMzE1LDMxNiwzMTcsMzE4LDMxOSwzMjAsMzIxLDMyMiwzMjMsMzI0LDMyNSwzMjYsMzI3LDMyOCwzMjksMzMwLDMzMSwzMzIsMzMzLDMzNCwzMzUsMzM2LDMzNywzMzgsMzM5LDM0MCwzNDEsMzQyLDM0MywzNDQsMzQ1LDM0NiwzNDcsMzQ4LDM0OSwzNTAsMzUxLDM1MiwzNTMsMzU0LDM1NSwzNTYsMzU3LDM1OCwzNTksMzYwLDM2MSwzNjIsMzYzLDM2NCwzNjUsMzY2LDM2NywzNjgsMzY5LDM3MCwzNzEsMzcyLDM3MywzNzQsMzc1LDM3NiwzNzcsMzc4LDM3OSwzODAsMzgxLDM4MiwzODMsMzg0LDM4NSwzODYsMzg3LDM4OCwzODksMzkwLDM5MSwzOTIsMzkzLDM5NCwzOTUsMzk2LDM5NywzOTgsMzk5LDQwMCw0MDEsNDAyLDQwMyw0MDQsNDA1LDQwNiw0MDcsNDA4LDQwOSw0MTAsNDExLDQxMiw0MTMsNDE0LDQxNSw0MTYsNDE3LDQxOCw0MTksNDIwLDQyMSw0MjIsNDIzLDQyNCw0MjUsNDI2LDQyNyw0MjgsNDI5LDQzMCw0MzEsNDMyLDQzMyw0MzQsNDM1LDQzNiw0MzcsNDM4LDQzOSw0NDAsNDQxLDQ0Miw0NDMsNDQ0LDQ0NSw0NDYsNDQ3LDQ0OCw0NDksNDUwLDQ1MSw0NTIsNDUzLDQ1NCw0NTUsNDU2LDQ1Nyw0NTgsNDU5LDQ2MCw0NjEsNDYyLDQ2Myw0NjQsNDY1LDQ2Niw0NjcsNDY4LDQ2OSw0NzAsNDcxLDQ3Miw0NzMsNDc0LDQ3NSw0NzYsNDc3LDQ3OCw0NzksNDgwLDQ4MSw0ODIsNDgzLDQ4NCw0ODUsNDg2LDQ4Nyw0ODgsNDg5LDQ5MCw0OTEsNDkyLDQ5Myw0OTQsNDk1LDQ5Niw0OTcsNDk4LDQ5OSw1MDAsNTAxLDUwMiw1MDMsNTA0LDUwNSw1MDYsNTA3LDUwOCw1MDksNTEwLDUxMSw1MTIsNTEzLDUxNCw1MTUsNTE2LDUxNyw1MTgsNTE5LDUyMCw1MjEsNTIyLDUyMyw1MjQsNTI1LDUyNiw1MjcsNTI4LDUyOSw1MzAsNTMxLDUzMiw1MzMsNTM0LDUzNSw1MzYsNTM3LDUzOCw1MzksNTQwLDU0MSw1NDIsNTQzLDU0NCw1NDUsNTQ2LDU0Nyw1NDgsNTQ5LDU1MCw1NTEsNTUyLDU1Myw1NTQsNTU1LDU1Niw1NTcsNTU4LDU1OSw1NjAsNTYxLDU2Miw1NjMsNTY0LDU2NSw1NjYsNTY3LDU2OCw1NjksNTcwLDU3MSw1NzIsNTczLDU3NCw1NzUsNTc2LDU3Nyw1NzgsNTc5LDU4MCw1ODEsNTgyLDU4Myw1ODQsNTg1LDU4Niw1ODcsNTg4LDU4OSw1OTAsNTkxLDU5Miw1OTMsNTk0LDU5NSw1OTYsNTk3LDU5OCw1OTksNjAwLDYwMSw2MDIsNjAzLDYwNCw2MDUsNjA2LDYwNyw2MDgsNjA5LDYxMCw2MTEsNjEyLDYxMyw2MTQsNjE1LDYxNiw2MTcsNjE4LDYxOSw2MjAsNjIxLDYyMiw2MjMsNjI0LDYyNSw2MjYsNjI3LDYyOCw2MjksNjMwLDYzMSw2MzIsNjMzLDYzNCw2MzUsNjM2LDYzNyw2MzgsNjM5LDY0MCw2NDEsNjQyLDY0Myw2NDQsNjQ1LDY0Niw2NDcsNjQ4LDY0OSw2NTAsNjUxLDY1Miw2NTMsNjU0LDY1NSw2NTYsNjU3LDY1OCw2NTksNjYwLDY2MSw2NjIsNjYzLDY2NCw2NjUsNjY2LDY2Nyw2NjgsNjY5LDY3MCw2NzEsNjcyLDY3Myw2NzQsNjc1LDY3Niw2NzcsNjc4LDY3OSw2ODAsNjgxLDY4Miw2ODMsNjg0LDY4NSw2ODYsNjg3LDY4OCw2ODksNjkwLDY5MSw2OTIsNjkzLDY5NCw2OTUsNjk2LDY5Nyw2OTgsNjk5LDcwMCw3MDEsNzAyLDcwMyw3MDQsNzA1LDcwNiw3MDcsNzA4LDcwOSw3MTAsNzExLDcxMiw3MTMsNzE0LDcxNSw3MTYsNzE3LDcxOCw3MTksNzIwLDcyMSw3MjIsNzIzLDcyNCw3MjUsNzI2LDcyNyw3MjgsNzI5LDczMCw3MzEsNzMyLDczMyw3MzQsNzM1LDczNiw3MzcsNzM4LDczOSw3NDAsNzQxLDc0Miw3NDMsNzQ0LDc0NSw3NDYsNzQ3LDc0OCw3NDksNzUwXVxyXG52YXIgd2F2ZU51bSA9IDBcclxuXHJcbiAvL3F1ZXJ5IGFycmF5XHJcbmdsb2JhbC5xdWVyeSA9IHtcclxuICAgIGFsbCA6IHdvcmxkLmNyZWF0ZVF1ZXJ5KHtcclxuICAgICAgICBhbGw6IFtdLFxyXG4gICAgfSksXHJcbiAgICBlbmVtaWVzIDogd29ybGQuY3JlYXRlUXVlcnkoe1xyXG4gICAgICAgIGFsbDogW0VuZW15XSxcclxuICAgIH0pLFxyXG4gICAgYWxsaWVzIDogd29ybGQuY3JlYXRlUXVlcnkoe1xyXG4gICAgICAgIGFsbDogW0FsbHldLFxyXG4gICAgfSksXHJcbiAgICBhY3Rpb24gOiB3b3JsZC5jcmVhdGVRdWVyeSh7XHJcbiAgICAgICAgYWxsOiBbQWN0aW9uXSxcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vdGhpbmdzIHRvIGRvIHdoZW4gc29tZXRoaW5nIGRpZXNcclxuZnVuY3Rpb24ga2lsbEVudGl0eShlbnRpdHkpe1xyXG4gICAgLy9UT0RPOiBJbmNsdWRlIG1vcmUgaW4tZGVwdGggb24gZGVhdGggZWZmZWN0cyBzdWNoIGFzIGN1cnJlbmN5IGdlbmVyYXRpb25cclxuICAgIGlmIChlbnRpdHkuZGVzY3JpcHRpb24ubmFtZSA9PSBcIlpvbWJpZVwiKSB7XHJcbiAgICAgICAgZ29sZW1hbmNlci5jdXJyZW5jeS5wYXJ0cyArPSA1XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlBhcnRzXCIpLmlubmVySFRNTCA9IGdvbGVtYW5jZXIuY3VycmVuY3kucGFydHNcclxuICAgIGRlbGV0ZSBsb2NhdGlvbklkW2VudGl0eS5wb3NpdGlvbi54ICsgXCIsXCIgKyBlbnRpdHkucG9zaXRpb24ueV1cclxuICAgIGVudGl0eS5kZXN0cm95KClcclxufVxyXG5cclxuLy9jbGlja2luZyB0aGUgYnV5IGdvbGVtIGJ1dHRvbiwgYWRqdXN0cyBjb3N0cyBhbmQgY291bnRlcnMuIENvc3QgPSAxMCpnb2xlbXNeMS4xXHJcbmdsb2JhbC5vbkJ1eUdvbGVtQ2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmIChnb2xlbWFuY2VyLmN1cnJlbmN5LnBhcnRzID49IGdvbGVtYW5jZXIuZ29sZW1zLmNvc3QpIHtcclxuICAgICAgICBnb2xlbWFuY2VyLmdvbGVtcy5jb3VudCsrXHJcbiAgICAgICAgZ29sZW1hbmNlci5jdXJyZW5jeS5wYXJ0cyAtPSBnb2xlbWFuY2VyLmdvbGVtcy5jb3N0XHJcbiAgICAgICAgZ29sZW1hbmNlci5nb2xlbXMuY29zdCA9IE1hdGguZmxvb3IoMTAqTWF0aC5wb3coMS4xLCBnb2xlbWFuY2VyLmdvbGVtcy5jb3VudCkpXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb2xlbXNcIikuaW5uZXJIVE1MID0gZ29sZW1hbmNlci5nb2xlbXMuY291bnRcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvbGVtQ29zdFwiKS5pbm5lckhUTUwgPSBnb2xlbWFuY2VyLmdvbGVtcy5jb3N0XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQYXJ0c1wiKS5pbm5lckhUTUwgPSBnb2xlbWFuY2VyLmN1cnJlbmN5LnBhcnRzXHJcbiAgICB9XHJcbn1cclxuXHJcbmdsb2JhbC5vbkJ1eURhbWFnZUNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoZ29sZW1hbmNlci5jdXJyZW5jeS5wYXJ0cyA+PSBnb2xlbWFuY2VyLmdvbGVtcy5kYW1hZ2VDb3N0KSB7XHJcbiAgICAgICAgZ29sZW1hbmNlci5nb2xlbXMuZGFtYWdlKytcclxuICAgICAgICBnb2xlbWFuY2VyLmN1cnJlbmN5LnBhcnRzIC09IGdvbGVtYW5jZXIuZ29sZW1zLmRhbWFnZUNvc3RcclxuICAgICAgICBnb2xlbWFuY2VyLmdvbGVtcy5kYW1hZ2VDb3N0ID0gTWF0aC5mbG9vcigyMCpNYXRoLnBvdygxLjEsIGdvbGVtYW5jZXIuZ29sZW1zLmRhbWFnZSkpXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJEYW1hZ2VcIikuaW5uZXJIVE1MID0gZ29sZW1hbmNlci5nb2xlbXMuZGFtYWdlXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYW1hZ2VDb3N0XCIpLmlubmVySFRNTCA9IGdvbGVtYW5jZXIuZ29sZW1zLmRhbWFnZUNvc3RcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlBhcnRzXCIpLmlubmVySFRNTCA9IGdvbGVtYW5jZXIuY3VycmVuY3kucGFydHNcclxuICAgIH1cclxufVxyXG5nbG9iYWwub25CdXlBdHRhY2tTcGVlZENsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoZ29sZW1hbmNlci5jdXJyZW5jeS5wYXJ0cyA+PSBnb2xlbWFuY2VyLmdvbGVtcy5hdHRhY2tTcGVlZENvc3QpIHtcclxuICAgICAgICBnb2xlbWFuY2VyLmdvbGVtcy5hdHRhY2tTcGVlZCsrXHJcbiAgICAgICAgZ29sZW1hbmNlci5jdXJyZW5jeS5wYXJ0cyAtPSBnb2xlbWFuY2VyLmdvbGVtcy5hdHRhY2tTcGVlZENvc3RcclxuICAgICAgICBnb2xlbWFuY2VyLmdvbGVtcy5hdHRhY2tTcGVlZENvc3QgPSBNYXRoLmZsb29yKDEwMCpNYXRoLnBvdygxLjEsIGdvbGVtYW5jZXIuZ29sZW1zLmF0dGFja1NwZWVkKSlcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkF0dGFja1NwZWVkXCIpLmlubmVySFRNTCA9IGdvbGVtYW5jZXIuZ29sZW1zLmF0dGFja1NwZWVkXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdHRhY2tTcGVlZENvc3RcIikuaW5uZXJIVE1MID0gZ29sZW1hbmNlci5nb2xlbXMuYXR0YWNrU3BlZWRDb3N0XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJQYXJ0c1wiKS5pbm5lckhUTUwgPSBnb2xlbWFuY2VyLmN1cnJlbmN5LnBhcnRzXHJcbiAgICB9XHJcbn1cclxuLy9Db2xsZWN0aXZlIG9mIGFsbCBlbmVteSBBSVxyXG4vL0FJIG5lZWRzIHRvIGhhdmUgdGFyZ2V0dGluZywgYXR0YWNraW5nLCBtb3ZpbmdcclxuZnVuY3Rpb24gZW5lbXlBSShlbnRpdHlFbmVteSwgdGltZSkge1xyXG4gICAgaWYgKGVudGl0eUVuZW15LmRlc2NyaXB0aW9uLm5hbWUgPT0gXCJab21iaWVcIikge1xyXG4gICAgICAgIC8vYWN0aW9uIGF2YWlsYWJsZVxyXG4gICAgICAgIGlmICh0aW1lIC0gZW50aXR5RW5lbXkuYWN0aW9uLmxhc3QgPj0gZW50aXR5RW5lbXkuYWN0aW9uLmFkanVzdGVkKSB7XHJcbiAgICAgICAgICAgIC8vdGFyZ2V0IGF2YWlsYWJsZVxyXG4gICAgICAgICAgICBpZiAod29ybGQuZ2V0RW50aXR5KGVudGl0eUVuZW15LmNvbWJhdC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAvL3RhcmdldCBpbiByYW5nZVxyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGVudGl0eUVuZW15LmNvbWJhdC54IC0gZW50aXR5RW5lbXkucG9zaXRpb24ueCkgPD0gZW50aXR5RW5lbXkuY29tYmF0LnJhbmdlICYmIE1hdGguYWJzKGVudGl0eUVuZW15LmNvbWJhdC55IC0gZW50aXR5RW5lbXkucG9zaXRpb24ueSkgPD0gZW50aXR5RW5lbXkuY29tYmF0LnJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pbiByYW5nZSBhbmQgZG9uJ3QgbW92ZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3pvbWJpZSB0YXJnZXRzIG5lYXJlc3QgYWxseSwgNXNlYyBjb29sZG93bi4gU3RvcHMgdHVubmVsLXZpc2lvbmluZyBidXQgc2xvdyB0byByZXNwb25kXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5QUkudGFyZ2V0Lm5lYXJlc3QoZW50aXR5RW5lbXksIFwiYWxsaWVzXCIsIDUpXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5QUkubW92ZW1lbnQuaG9yZGUoZW50aXR5RW5lbXkpICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy96b21iaWUgdGFyZ2V0cyBuZWFyZXN0IGFsbHksIC4xc2VjIGNvb2xkb3duXHJcbiAgICAgICAgICAgICAgICBlbnRpdHlBSS50YXJnZXQubmVhcmVzdChlbnRpdHlFbmVteSwgXCJhbGxpZXNcIiwgLjEpICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vYWRqdXN0ZWQgYWN0aW9uIHNwZWVkID0gYWN0aW9uIHNwZWVkICsgKGFjdGlvbiBzcGVlZCAtICh0aW1lIHNpbmNlIGxhc3QgYXR0YWNrKSlcclxuICAgICAgICAgICAgICAgIC8vQW55IGFjdGlvbiBhYm92ZSBvciBiZWxvdyB0aGUgYWN0aW9uIHNwZWVkIHdpbGwgYWRqdXN0IHRoZSBuZXh0IGFjdGlvbiBhY2NvcmRpbmdseSB0byBrZWVwIGFjdGlvbiBzcGVlZCBvbiBhdmVyYWdlXHJcbiAgICAgICAgICAgICAgICAvL2kuZS4gMTIwMG1zIHNpbmNlIGxhc3QgYWN0aW9uID09IG5leHQgYWN0aW9uIGlzIDgwMG1zIGluc3RlYWQgb2YgMTAwMG1zXHJcbiAgICAgICAgICAgICAgICAvL211bHRpcGxpZXIgaXMgZm9yIHNwZWVkaW5nIHVwIGFjdGlvbnMuIGkuZS4gdmVsb2NpdHkgb2YgMiA9IG1vdmUgdHdpY2UgYXMgZmFzdC4gMTAwMG1zLzI9NTAwbXMgY29vbGRvd25cclxuICAgICAgICAgICAgICAgIGxldCBtdWx0aXBsaWVyID0gMVxyXG4gICAgICAgICAgICAgICAgaWYgKGVudGl0eUVuZW15LmhhcyhoYXNNb3ZlZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsaWVyID0gZW50aXR5RW5lbXkubW92ZW1lbnQudmVsb2NpdHlcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlFbmVteS5yZW1vdmUoZW50aXR5RW5lbXkuaGFzTW92ZWQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5RW5lbXkuYWN0aW9uLmFkanVzdGVkID0gKGVudGl0eUVuZW15LmFjdGlvbi5zcGVlZCArIGVudGl0eUVuZW15LmFjdGlvbi5zcGVlZCAtICh0aW1lIC0gZW50aXR5RW5lbXkuYWN0aW9uLmxhc3QpKS9tdWx0aXBsaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5RW5lbXkuYWN0aW9uLmxhc3QgPSB0aW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbmZ1bmN0aW9uIGFsbHlBSShlbnRpdHlBbGx5LCB0aW1lKSB7XHJcbiAgICBpZiAoZW50aXR5QWxseS5kZXNjcmlwdGlvbi5uYW1lID09IFwiSHVtYW5cIikge1xyXG4gICAgICAgIC8vYWN0aW9uIGF2YWlsYWJsZVxyXG4gICAgICAgIGlmICh0aW1lIC0gZW50aXR5QWxseS5hY3Rpb24ubGFzdCA+PSBlbnRpdHlBbGx5LmFjdGlvbi5hZGp1c3RlZCkgeyBcclxuICAgICAgICAgICAgLy9nZXQgYSB0YXJnZXRcclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IHdvcmxkLmdldEVudGl0eShlbnRpdHlBbGx5LmNvbWJhdC50YXJnZXQpXHJcbiAgICAgICAgICAgIGlmICghdGFyZ2V0IHx8IE1hdGguYWJzKGVudGl0eUFsbHkucG9zaXRpb24ueCAtIHRhcmdldC5wb3NpdGlvbi54KSA+IGVudGl0eUFsbHkuY29tYmF0LnJhbmdlICAmJiBNYXRoLmFicyhlbnRpdHlBbGx5LnBvc2l0aW9uLnkgLSB0YXJnZXQucG9zaXRpb24ueSkgPiBlbnRpdHlBbGx5LmNvbWJhdC5yYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgaWYodGFyZ2V0KSB7dGFyZ2V0LmFwcGVhcmFuY2UuY29sb3IgPSB3Z2x0LkNvbG9ycy5EQVJLX0dSRUVOfVxyXG4gICAgICAgICAgICAgICAgZW50aXR5QUkudGFyZ2V0LmFkamFjZW50KGVudGl0eUFsbHksIFwiZW5lbWllc1wiLCAwKVxyXG4gICAgICAgICAgICAvL2hhdmUgYSB0YXJnZXRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5hcHBlYXJhbmNlLmNvbG9yID0gd2dsdC5Db2xvcnMuTElHSFRfUkVEXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuZmlyZUV2ZW50KFwiZGFtYWdlLXRha2VuXCIsIHtkYW1hZ2U6Z29sZW1hbmNlci5nb2xlbXMuZGFtYWdlfSlcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuaGVhbHRoLmhwIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBraWxsRW50aXR5KHRhcmdldClcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlBbGx5LmNvbWJhdC50YXJnZXQgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5QWxseS5jb21iYXQueCA9IDBcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlBbGx5LmNvbWJhdC55ID0gMFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy90YXJnZXQgYXZhaWxhYmxlXHJcbiAgICAgICAgICAgICAgICBpZiAod29ybGQuZ2V0RW50aXR5KGVudGl0eUFsbHkuY29tYmF0LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2lmIGFkamFjZW50IHRvIHRhcmdldFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9hZGp1c3RlZCBhY3Rpb24gc3BlZWQgPSBhY3Rpb24gc3BlZWQgKyAoYWN0aW9uIHNwZWVkIC0gKHRpbWUgc2luY2UgbGFzdCBhdHRhY2spKVxyXG4gICAgICAgICAgICAgICAgLy9BbnkgYWN0aW9uIGFib3ZlIG9yIGJlbG93IHRoZSBhY3Rpb24gc3BlZWQgd2lsbCBhZGp1c3QgdGhlIG5leHQgYWN0aW9uIGFjY29yZGluZ2x5IHRvIGtlZXAgYWN0aW9uIHNwZWVkIG9uIGF2ZXJhZ2VcclxuICAgICAgICAgICAgICAgIC8vaS5lLiAxMjAwbXMgc2luY2UgbGFzdCBhY3Rpb24gPT0gbmV4dCBhY3Rpb24gaXMgODAwbXMgaW5zdGVhZCBvZiAxMDAwbXNcclxuICAgICAgICAgICAgICAgIC8vbXVsdGlwbGllciBpcyBmb3Igc3BlZWRpbmcgdXAgYWN0aW9ucy4gaS5lLiB2ZWxvY2l0eSBvZiAyID0gbW92ZSB0d2ljZSBhcyBmYXN0LiAxMDAwbXMvMj01MDBtcyBjb29sZG93blxyXG4gICAgICAgICAgICAgICAgbGV0IG11bHRpcGxpZXIgPSAxXHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5QWxseS5oYXMoaGFzTW92ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGllciA9IGVudGl0eUFsbHkubW92ZW1lbnQudmVsb2NpdHlcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlBbGx5LnJlbW92ZShlbnRpdHlBbGx5Lmhhc01vdmVkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9UT0RPOm1vdmUgZ29sZW1hbmNlciBpbnRvIGVudGl0eSBzdGF0c1xyXG4gICAgICAgICAgICAgICAgZW50aXR5QWxseS5hY3Rpb24uYWRqdXN0ZWQgPSAoMTAwMC9nb2xlbWFuY2VyLmdvbGVtcy5hdHRhY2tTcGVlZCArIDEwMDAvZ29sZW1hbmNlci5nb2xlbXMuYXR0YWNrU3BlZWQgLSAodGltZSAtIGVudGl0eUFsbHkuYWN0aW9uLmxhc3QpKS9tdWx0aXBsaWVyXHJcbiAgICAgICAgICAgICAgICAvL2VudGl0eUFsbHkuYWN0aW9uLmFkanVzdGVkID0gKGVudGl0eUFsbHkuYWN0aW9uLnNwZWVkICsgZW50aXR5QWxseS5hY3Rpb24uc3BlZWQgLSAodGltZSAtIGVudGl0eUFsbHkuYWN0aW9uLmxhc3QpKS9tdWx0aXBsaWVyXHJcbiAgICAgICAgICAgICAgICBlbnRpdHlBbGx5LmFjdGlvbi5sYXN0ID0gdGltZVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy9xdWVyeSBhbGwgYW5kIGRvIHRoZWlyIG5leHQgYWN0aW9uLiBBdHRhY2sgZWxzZSBtb3ZlXHJcbi8vVE9ETzogTW92ZW1lbnQgZm9yIHZlbG9jaXR5ID4gMS4gSW5jcmVtZW50IHRocm91Z2ggZWFjaCBzdGVwIHRvIGRldGVybWluZSBpZiBuZXh0IHN0ZXAgaXMgY2xlYXIvYWRqYWNlbnQgdG8gdGFyZ2V0XHJcbi8vVE9ETzogTWF5YmUgcmFuZG9taXplIHRoZSBkaXJlY3Rpb24gem9tYmllcyBkZWNpZGUgdG8gZ28gd2hlbiBibG9ja2VkLlxyXG5mdW5jdGlvbiBkb0FjdGlvbih0aW1lKSB7XHJcbiAgICBxdWVyeS5hY3Rpb24uZ2V0KCkuZm9yRWFjaCgoZW50aXR5KSA9PiB7XHJcbiAgICAgICAgaWYgKGVudGl0eS5oYXMoRW5lbXkpKSB7XHJcbiAgICAgICAgICAgIGVuZW15QUkoZW50aXR5LCB0aW1lKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZW50aXR5LmhhcyhBbGx5KSkge1xyXG4gICAgICAgICAgICBhbGx5QUkoZW50aXR5LCB0aW1lKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pXHJcbn1cclxuICAgIC8vcmVuZGVyTG9vcCA9IHRoaW5ncyB0byBkbyBldmVyeSBsb29wLlxyXG5sZXQgbW91c2VQYXRoID0gW11cclxubGV0IHJlbW92ZUJvb2wgPSBmYWxzZVxyXG5sZXQgbW91c2VTdGFydCA9IHtcclxuICAgIHg6IDAsXHJcbiAgICB5OiAwXHJcbn1cclxudGVybWluYWwudXBkYXRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgdGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXHJcbiAgICBnb2xlbWFuY2VyLnBsYWNlbWVudC5pbmRleCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhY2VtZW50XCIpLnNlbGVjdGVkSW5kZXhcclxuICAgIC8vY2xlYXJzIHNjcmVlblxyXG4gICAgdGhpcy5jbGVhcigpXHJcbiAgICAvL3NldHMgZXZlcnl0aGluZyB0byB3aGl0ZSBvbiBibGFja1xyXG4gICAgdGhpcy5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgd2dsdC5Db2xvcnMuV0hJVEUsIHdnbHQuQ29sb3JzLkJMQUNLKVxyXG4gICAgLy9jaGVja3MgYWxsIGVudGl0aWVzIGlmIGFjdGlvbiBpcyBhdmFpbGFibGUsIGFuZCB0aGVuIGRvIGFjdGlvbnNcclxuICAgIGRvQWN0aW9uKHRpbWUpXHJcbiAgICAvL2RyYXdpbmcgYSBwYXRoIHdoaWxlIG1vdXMgY2xpY2sgaXMgZG93blxyXG5cclxuICAgIC8vMDogbGVmdCBjbGljaywyOiByaWdodCBjbGljaywgMTogbWlkZGxlIGNsaWNrXHJcbiAgICAvL2FzIHNvb24gYXMgdGhlIG1vdXNlIGlzIGNsaWNrZWQgZG93blxyXG4gICAgaWYgKHRoaXMubW91c2UuYnV0dG9uc1swXS5kb3duQ291bnQgPT09IDEpIHtcclxuICAgICAgICAvL3NldHMgc3RhcnQgb2YgcGF0aCB0byBtb3VzZSBjb29yZGluYXRlc1xyXG4gICAgICAgIG1vdXNlU3RhcnQueCA9IHRoaXMubW91c2UueFxyXG4gICAgICAgIG1vdXNlU3RhcnQueSA9IHRoaXMubW91c2UueVxyXG4gICAgfVxyXG4gICAgLy9sZWZ0IG1vdXNlIGlzIGJlaW5nIGhlbGQgZG93blxyXG4gICAgaWYgKHRoaXMubW91c2UuYnV0dG9uc1swXS5kb3duQ291bnQgPiAxKSB7XHJcbiAgICAgICAgbW91c2VQYXRoID0gdWkucGxhY2VtZW50KHRoaXMsIG1vdXNlU3RhcnQsIGdvbGVtYW5jZXIuZ29sZW1zLmNvdW50IC0gcXVlcnkuYWxsaWVzLmdldCgpLmxlbmd0aCwgbW91c2VQYXRoLCBnb2xlbWFuY2VyLnBsYWNlbWVudC5pbmRleCwgcmVtb3ZlQm9vbClcclxuICAgIH1cclxuICAgIC8vbGVmdCBtb3VzZSBnb2VzIHVwXHJcbiAgICBpZiAodGhpcy5tb3VzZS5idXR0b25zWzBdLnVwQ291bnQgPT09IDEgJiYgbW91c2VQYXRoLmxlbmd0aCA+IDAgJiYgIXJlbW92ZUJvb2wpIHtcclxuICAgICAgICAvL2xpbmUgcGxhY2VtZW50XHJcbiAgICAgICAgaWYgKGdvbGVtYW5jZXIucGxhY2VtZW50LmluZGV4ID09PSAwIHx8IGdvbGVtYW5jZXIucGxhY2VtZW50LmluZGV4ID09PSAyKSB7XHJcbiAgICAgICAgICAgIGxldCBwbGFjZWFibGVHb2xlbXMgPSBnb2xlbWFuY2VyLmdvbGVtcy5jb3VudCAtIHF1ZXJ5LmFsbGllcy5nZXQoKS5sZW5ndGhcclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHBsYWNlYWJsZUdvbGVtczsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW91c2VQYXRoW2pdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vdXNlUGF0aFtqXS55IDwgMzApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VhYmxlR29sZW1zKytcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvY2F0aW9uSWRbbW91c2VQYXRoW2pdLnggKyBcIixcIiArIG1vdXNlUGF0aFtqXS55XSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VhYmxlR29sZW1zKytcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVudGl0eSA9IHdvcmxkLmNyZWF0ZVByZWZhYihcIkh1bWFuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBvc2l0aW9uLnggPSBtb3VzZVBhdGhbal0ueFxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5wb3NpdGlvbi55ID0gbW91c2VQYXRoW2pdLnlcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbklkW2VudGl0eS5wb3NpdGlvbi54ICsgXCIsXCIgKyBlbnRpdHkucG9zaXRpb24ueV0gPSBlbnRpdHkuaWRcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtb3VzZVBhdGggPSBbXVxyXG4gICAgICAgIC8vYm94IHBsYWNlbWVudFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZ29sZW1hbmNlci5wbGFjZW1lbnQuaW5kZXggPT09IDEpIHtcclxuICAgICAgICAgICAgLy9tYWtlIGEgbGlzdCBvZiB0aGUgc3Bhd24gcG9pbnRzXHJcbiAgICAgICAgICAgIGxldCBzcGF3bkxpc3QgPSBbXVxyXG4gICAgICAgICAgICBsZXQgbGluZUNvdW50ID0gMFxyXG4gICAgICAgICAgICBsZXQgcGxhY2VhYmxlR29sZW1zID0gZ29sZW1hbmNlci5nb2xlbXMuY291bnQgLSBxdWVyeS5hbGxpZXMuZ2V0KCkubGVuZ3RoXHJcbiAgICAgICAgICAgIC8vYm90dG9tIHJpZ2h0IGJveFxyXG4gICAgICAgICAgICBpZiAodGhpcy5tb3VzZS54LW1vdXNlU3RhcnQueCA+IDAgJiYgdGhpcy5tb3VzZS55LW1vdXNlU3RhcnQueSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBwbGFjZWFibGVHb2xlbXM7aSA+IDAgJiYgbGluZUNvdW50IDwgKG1vdXNlUGF0aFsxXS55LW1vdXNlUGF0aFswXS55KTsgaSA9IGktKG1vdXNlUGF0aFsxXS54LW1vdXNlUGF0aFswXS54KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHhpID0gbW91c2VQYXRoWzBdLng7IHhpIDwgbW91c2VQYXRoWzBdLnggKyBNYXRoLm1pbihpLCBtb3VzZVBhdGhbMV0ueC1tb3VzZVBhdGhbMF0ueCk7IHhpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhd25MaXN0LnB1c2goe3g6IHhpLCB5OiBtb3VzZVBhdGhbMF0ueStsaW5lQ291bnR9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVDb3VudCsrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vYm90dG9tIGxlZnQgYm94XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3VzZS54LW1vdXNlU3RhcnQueCA8IDAgJiYgdGhpcy5tb3VzZS55LW1vdXNlU3RhcnQueSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBwbGFjZWFibGVHb2xlbXM7aSA+IDAgJiYgbGluZUNvdW50IDwgKG1vdXNlUGF0aFsxXS55LW1vdXNlUGF0aFswXS55KTsgaSA9IGktKChtb3VzZVBhdGhbMF0ueC1tb3VzZVBhdGhbMV0ueCkrMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4aSA9IG1vdXNlUGF0aFsxXS54KygoKG1vdXNlUGF0aFswXS54LW1vdXNlUGF0aFsxXS54KSsxKS0oTWF0aC5taW4oaSwgKG1vdXNlUGF0aFswXS54LW1vdXNlUGF0aFsxXS54KSsxKSkpOyB4aSA8IChtb3VzZVBhdGhbMV0ueCsoKChtb3VzZVBhdGhbMF0ueC1tb3VzZVBhdGhbMV0ueCkrMSktKE1hdGgubWluKGksIChtb3VzZVBhdGhbMF0ueC1tb3VzZVBhdGhbMV0ueCkrMSkpKSkgKyAoTWF0aC5taW4oaSwgKG1vdXNlUGF0aFswXS54LW1vdXNlUGF0aFsxXS54KSsxKSk7IHhpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhd25MaXN0LnB1c2goe3g6IHhpLCB5OiBtb3VzZVBhdGhbMF0ueStsaW5lQ291bnR9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUNvdW50KytcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy90b3AgbGVmdCBib3hcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdXNlLngtbW91c2VTdGFydC54IDwgMCAmJiB0aGlzLm1vdXNlLnktbW91c2VTdGFydC55IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHBsYWNlYWJsZUdvbGVtcztpID4gMCAmJiBsaW5lQ291bnQgPCAobW91c2VTdGFydC55LXRoaXMubW91c2UueSk7IGkgPSBpLSgobW91c2VTdGFydC54LXRoaXMubW91c2UueCkrMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4aSA9IG1vdXNlUGF0aFsxXS54KygoKG1vdXNlUGF0aFswXS54LW1vdXNlUGF0aFsxXS54KSsxKS0oTWF0aC5taW4oaSwgKG1vdXNlUGF0aFswXS54LW1vdXNlUGF0aFsxXS54KSsxKSkpOyB4aSA8IChtb3VzZVBhdGhbMV0ueCsoKChtb3VzZVBhdGhbMF0ueC1tb3VzZVBhdGhbMV0ueCkrMSktKE1hdGgubWluKGksIChtb3VzZVBhdGhbMF0ueC1tb3VzZVBhdGhbMV0ueCkrMSkpKSkgKyAoTWF0aC5taW4oaSwgKG1vdXNlUGF0aFswXS54LW1vdXNlUGF0aFsxXS54KSsxKSk7IHhpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhd25MaXN0LnB1c2goe3g6IHhpLCB5OiBtb3VzZVBhdGhbMF0ueS1saW5lQ291bnR9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUNvdW50KytcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy90b3AgcmlnaHQgYm94XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tb3VzZS54LW1vdXNlU3RhcnQueCA+IDAgJiYgdGhpcy5tb3VzZS55LW1vdXNlU3RhcnQueSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBwbGFjZWFibGVHb2xlbXM7aSA+IDAgJiYgbGluZUNvdW50IDwgKG1vdXNlU3RhcnQueS10aGlzLm1vdXNlLnkpOyBpID0gaS0odGhpcy5tb3VzZS54LW1vdXNlU3RhcnQueCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4aSA9IG1vdXNlUGF0aFswXS54OyB4aSA8IG1vdXNlUGF0aFswXS54ICsgTWF0aC5taW4oaSwgbW91c2VQYXRoWzFdLngtbW91c2VQYXRoWzBdLngpOyB4aSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYXduTGlzdC5wdXNoKHt4OiB4aSwgeTogbW91c2VQYXRoWzBdLnktbGluZUNvdW50fSlcclxuICAgICAgICAgICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVDb3VudCsrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9tYWtlIG5ldyBlbnRpdGllcyBmb3IgdGhlIHJlc3RcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnb2xlbWFuY2VyLmdvbGVtcy5jb3VudCAmJiBzcGF3bkxpc3Rbal0gJiYgbG9jYXRpb25JZFtzcGF3bkxpc3Rbal0ueCArIFwiLFwiICsgc3Bhd25MaXN0W2pdLnldID09IHVuZGVmaW5lZDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3Bhd25MaXN0W2pdLnkgPiAyOSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbnRpdHkgPSB3b3JsZC5jcmVhdGVQcmVmYWIoXCJIdW1hblwiKVxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5wb3NpdGlvbi54ID0gc3Bhd25MaXN0W2pdLnhcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkucG9zaXRpb24ueSA9IHNwYXduTGlzdFtqXS55XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZFtlbnRpdHkucG9zaXRpb24ueCArIFwiLFwiICsgZW50aXR5LnBvc2l0aW9uLnldID0gZW50aXR5LmlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbW91c2VQYXRoID0gW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5tb3VzZS5idXR0b25zWzJdLmRvd25Db3VudCA9PT0gMSkge1xyXG4gICAgICAgIC8vc2V0cyBzdGFydCBvZiBwYXRoIHRvIG1vdXNlIGNvb3JkaW5hdGVzXHJcbiAgICAgICAgbW91c2VTdGFydC54ID0gdGhpcy5tb3VzZS54XHJcbiAgICAgICAgbW91c2VTdGFydC55ID0gdGhpcy5tb3VzZS55XHJcbiAgICB9XHJcbiAgICAvL3JpZ2h0IG1vdXNlIGlzIGJlaW5nIGhlbGQgZG93blxyXG4gICAgaWYgKHRoaXMubW91c2UuYnV0dG9uc1syXS5kb3duQ291bnQgPiAxKSB7XHJcbiAgICAgICAgcmVtb3ZlQm9vbCA9IHRydWVcclxuICAgICAgICBtb3VzZVBhdGggPSB1aS5wbGFjZW1lbnQodGhpcywgbW91c2VTdGFydCwgZ29sZW1hbmNlci5nb2xlbXMuY291bnQgLSBxdWVyeS5hbGxpZXMuZ2V0KCkubGVuZ3RoLCBtb3VzZVBhdGgsIGdvbGVtYW5jZXIucGxhY2VtZW50LmluZGV4LCByZW1vdmVCb29sKVxyXG4gICAgfVxyXG4gICAgLy9yaWdodCBtb3VzZSB1cFxyXG4gICAgaWYgKHRoaXMubW91c2UuYnV0dG9uc1syXS51cENvdW50ID09PSAxICYmIG1vdXNlUGF0aC5sZW5ndGggPiAwICYmIHJlbW92ZUJvb2wpIHtcclxuICAgICAgICAvL2xpbmUgcmVtb3ZlXHJcbiAgICAgICAgaWYgKGdvbGVtYW5jZXIucGxhY2VtZW50LmluZGV4ID09PSAwIHx8IGdvbGVtYW5jZXIucGxhY2VtZW50LmluZGV4ID09PSAyKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBtb3VzZVBhdGgubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbnRpdHkgPSB3b3JsZC5nZXRFbnRpdHkobG9jYXRpb25JZFttb3VzZVBhdGhbal0ueCArIFwiLFwiICsgbW91c2VQYXRoW2pdLnldKVxyXG4gICAgICAgICAgICAgICAgaWYgKGVudGl0eSAmJiBlbnRpdHkuaGFzKEFsbHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2lsbEVudGl0eShlbnRpdHkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZiAoZ29sZW1hbmNlci5wbGFjZW1lbnQuaW5kZXggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtb3VzZVN0YXJ0ID0gbW91c2VQYXRoWzBdXHJcbiAgICAgICAgICAgICAgICBsZXQgbW91c2VFbmQgPSBtb3VzZVBhdGhbMV1cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IE1hdGgubWluKG1vdXNlU3RhcnQueCwgbW91c2VFbmQueCk7IGkgPCBNYXRoLm1heChtb3VzZVN0YXJ0LngsIG1vdXNlRW5kLngpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBNYXRoLm1pbihtb3VzZVN0YXJ0LnksIG1vdXNlRW5kLnkpOyBqIDwgTWF0aC5tYXgobW91c2VTdGFydC55LCBtb3VzZUVuZC55KTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVudGl0eSA9IHdvcmxkLmdldEVudGl0eShsb2NhdGlvbklkW2kgKyBcIixcIiArIGpdKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRpdHkgJiYgZW50aXR5LmhhcyhBbGx5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBraWxsRW50aXR5KGVudGl0eSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbW91c2VQYXRoID0gW11cclxuICAgICAgICByZW1vdmVCb29sID0gZmFsc2VcclxuICAgIH1cclxuLy96b21iaWUgd2F2ZSBzcGF3bmluZ1xyXG4vL3JhbmRvbWx5IGdlbmVyYXRlIG51bWJlciBiZXR3ZWVuIDAgKDAsMCBvZiBzcGF3biB6b25lKSBhbmQgbiAobWF4IHgsIG1heCB5IG9mIHNwYXduIHpvbmUpXHJcbi8vZGl2aWRlIG51bWJlciBieSB4IGxlbmd0aC4gV2hvbGUgbnVtYmVycyBpcyB5LCBtb2R1bG8gaXMgeC5cclxuLy94OiAxMS02MCwgeTogMS0xNVxyXG4vL3NwYXduIHpvbWJpZXMgaWYgbm8gem9tYmllc1xyXG5pZiAocXVlcnkuZW5lbWllcy5nZXQoKS5sZW5ndGggPD0gMCkge1xyXG4gICAgbGV0IHNwYXduTGlzdCA9IFtdXHJcbiAgICB3YXZlTnVtKytcclxuICAgIGxldCB0ZW1wU3Bhd25ab25lID0gc3Bhd25ab25lXHJcbiAgICBsZXQgem9tYmllQ291bnQgPSBNYXRoLm1pbig3NTAsIE1hdGgucG93KHdhdmVOdW0sIDIpKVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB6b21iaWVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHNwYXduUG9pbnQgPSB0ZW1wU3Bhd25ab25lW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0ZW1wU3Bhd25ab25lLmxlbmd0aCAtIDEpKV1cclxuXHJcbiAgICAgICAgc3Bhd25MaXN0LnB1c2goc3Bhd25Qb2ludClcclxuICAgIH1cclxuICAgIGZvcihsZXQgaSA9IDA7aSA8IHNwYXduTGlzdC5sZW5ndGg7aSsrKSB7XHJcblxyXG4gICAgICAgIGxldCB6b21iaWV4ID0gc3Bhd25MaXN0W2ldICUgNTAgKyAxMVxyXG4gICAgICAgIGxldCB6b21iaWV5ID0gTWF0aC5jZWlsKHNwYXduTGlzdFtpXSAvIDUwKVxyXG4gICAgICAgIGxldCB6b21iaWUgPSB3b3JsZC5jcmVhdGVQcmVmYWIoXCJab21iaWVcIilcclxuICAgICAgICB6b21iaWUucG9zaXRpb24ueCA9IHpvbWJpZXhcclxuICAgICAgICB6b21iaWUucG9zaXRpb24ueSA9IHpvbWJpZXlcclxuICAgICAgICBsb2NhdGlvbklkW3pvbWJpZS5wb3NpdGlvbi54ICsgXCIsXCIgKyB6b21iaWUucG9zaXRpb24ueV0gPSB6b21iaWUuaWRcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vc3RhcnQgZHJhd2luZyBzdHVmZlxyXG5cclxuICAgIC8vZHJhd2luZyBVSVxyXG4gICAgLy9kcmF3IHNwYXduIGJvcmRlclxyXG4gICAgdGhpcy5kcmF3SExpbmUoMSwgMjksIDgwLCBcIi1cIiwgd2dsdC5Db2xvcnMuREFSS19HUkFZKVxyXG4gICAgLy9EcmF3aW5nIHRlc3QgcGlsb3QgcGxheWVyIGFuZCB6b21iaWVcclxuICAgIHF1ZXJ5LmFsbC5nZXQoKS5mb3JFYWNoKChlbnRpdHkpID0+IHtcclxuICAgICAgICBpZiAoIWVudGl0eS5pc0Rlc3Ryb3llZCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kcmF3Q2hhcihlbnRpdHkucG9zaXRpb24ueCwgZW50aXR5LnBvc2l0aW9uLnksIGVudGl0eS5hcHBlYXJhbmNlLmNoYXIsIGVudGl0eS5hcHBlYXJhbmNlLmNvbG9yKSwgd2dsdC5Db2xvcnMuQkxBQ0s7ICBcclxuICAgIH1cclxuICAgIH0pXHJcbiAgICAvL2RyYXdpbmcgRlBTXHJcbiAgICB0aGlzLmRyYXdTdHJpbmcoMSwxLCBTdHJpbmcoTWF0aC5yb3VuZCh0aGlzLmF2ZXJhZ2VGcHMqMTAwLzEwMCkpKVxyXG4gICAgLy9pZiBwYXRoIGV4aXN0cywgY2hhbmdlIGNlbGwgYmFja2dyb3VuZHMgdG8geWVsbG93XHJcbiAgICAvL2xpbmUgcGxhY2VtZW50IG1vZGUgYW5kIGRyYXcgcGxhY2VtZW50IG1vZGVcclxuXHJcbiAgICAvL1RPRE86IE1vdmUgdGhpcyBpbnRvIHBsYWNlbWVudC5qcyB0byBiZSBpbiBsaW5lIHdpdGggYm94IGRyYXdpbmdcclxuICAgIGlmICgoZ29sZW1hbmNlci5wbGFjZW1lbnQuaW5kZXggPT09IDAgfHwgZ29sZW1hbmNlci5wbGFjZW1lbnQuaW5kZXggPT09IDIpICYmIG1vdXNlUGF0aC5sZW5ndGggPiAwICYmICFyZW1vdmVCb29sKSB7XHJcbiAgICAgICAgbGV0IHBsYWNlYWJsZUdvbGVtcyA9IGdvbGVtYW5jZXIuZ29sZW1zLmNvdW50IC0gcXVlcnkuYWxsaWVzLmdldCgpLmxlbmd0aFxyXG4gICAgICAgIGZvciAobGV0IGk9MDtpIDwgbW91c2VQYXRoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjZWxsID0gdGhpcy5nZXRDZWxsKG1vdXNlUGF0aFtpXS54LCBtb3VzZVBhdGhbaV0ueSlcclxuICAgICAgICAgICAgaWYgKGNlbGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpID49IHBsYWNlYWJsZUdvbGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QmFja2dyb3VuZCh3Z2x0LkNvbG9ycy5EQVJLX0dSQVkpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxvY2F0aW9uSWRbbW91c2VQYXRoW2ldLnggKyBcIixcIiArIG1vdXNlUGF0aFtpXS55XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QmFja2dyb3VuZCh3Z2x0LkNvbG9ycy5EQVJLX0dSQVkpXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VhYmxlR29sZW1zKytcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW91c2VQYXRoW2ldLnkgPCAzMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QmFja2dyb3VuZCh3Z2x0LkNvbG9ycy5EQVJLX0dSQVkpXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VhYmxlR29sZW1zKytcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QmFja2dyb3VuZCh3Z2x0LkNvbG9ycy5ZRUxMT1cpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKChnb2xlbWFuY2VyLnBsYWNlbWVudC5pbmRleCA9PT0gMCB8fCBnb2xlbWFuY2VyLnBsYWNlbWVudC5pbmRleCA9PT0gMikgJiYgbW91c2VQYXRoLmxlbmd0aCA+IDAgJiYgcmVtb3ZlQm9vbCkge1xyXG4gICAgICAgIGZvciAobGV0IGk9MDtpIDwgbW91c2VQYXRoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjZWxsID0gdGhpcy5nZXRDZWxsKG1vdXNlUGF0aFtpXS54LCBtb3VzZVBhdGhbaV0ueSlcclxuICAgICAgICAgICAgaWYgKGNlbGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbklkW21vdXNlUGF0aFtpXS54ICsgXCIsXCIgKyBtb3VzZVBhdGhbaV0ueV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW50aXR5ID0gd29ybGQuZ2V0RW50aXR5KGxvY2F0aW9uSWRbbW91c2VQYXRoW2ldLnggKyBcIixcIiArIG1vdXNlUGF0aFtpXS55XSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZW50aXR5LmhhcyhBbGx5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEJhY2tncm91bmQod2dsdC5Db2xvcnMuWUVMTE9XKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuc2V0QmFja2dyb3VuZCh3Z2x0LkNvbG9ycy5EQVJLX0dSQVkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjZWxsLnNldEJhY2tncm91bmQod2dsdC5Db2xvcnMuREFSS19HUkFZKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vbW91c2UgZGVidWdcclxuICAgIHRoaXMuZHJhd1N0cmluZygxLDIsIFwibW91c2UgeDogXCIgKyBTdHJpbmcodGhpcy5tb3VzZS54KSlcclxuICAgIHRoaXMuZHJhd1N0cmluZygxLDMsIFwibW91c2UgeTogXCIgKyBTdHJpbmcodGhpcy5tb3VzZS55KSlcclxuLy8gICAgdGhpcy5kcmF3U3RyaW5nKDEsNCwgXCJtb3VzZSBkb3duOiBcIiArIFN0cmluZyh0aGlzLm1vdXNlLmJ1dHRvbnNbMF0uZG93bikpXHJcbi8vICAgIHRoaXMuZHJhd1N0cmluZygxLDUsIFwibW91c2UgZG93bkNvdW50OiBcIiArIFN0cmluZyh0aGlzLm1vdXNlLmJ1dHRvbnNbMF0uZG93bkNvdW50KSlcclxuLy8gICAgdGhpcy5kcmF3U3RyaW5nKDEsNiwgXCJtb3VzZSB1cENvdW50OiBcIiArIFN0cmluZyh0aGlzLm1vdXNlLmJ1dHRvbnNbMF0udXBDb3VudCkpXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9