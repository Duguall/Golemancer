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
class Health extends geotic__WEBPACK_IMPORTED_MODULE_0__.Component {
    static properties = {
        hp: 1,
        maxHp: 1
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
        velocity: 0,
        x: 0,
        y: 0 
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
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Health)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Position)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Action)
engine.registerComponent(_components__WEBPACK_IMPORTED_MODULE_1__.Movement)
//associating prefabs
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.Being)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.Human)
engine.registerPrefab(_entities__WEBPACK_IMPORTED_MODULE_2__.Zombie)
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
/* harmony export */   "Zombie": () => (/* binding */ Zombie)
/* harmony export */ });
/* harmony import */ var wglt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wglt */ "./node_modules/wglt/dist/wglt.js");
/* harmony import */ var wglt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wglt__WEBPACK_IMPORTED_MODULE_0__);

//default "Being"mob with related components
let Being = {
    name: "Being",
    components: [
        {
            type: "Appearance",
              properties: {
                    char: "@",
                    color: wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.WHITE
            }
        },
        {
            type: "Combat",
            properties: {
                target: "",
                x: 0,
                y: 0
            },
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
            properties: {
               hp: 1,
               maxHp: 1
            },
        },
        {
            type: "Position",
            properties: {
                x: 0,
                y: 0
            },
        },
        {
            type: "Action",
            properties: {
                speed: 1000,
                last: 0,
                adjusted: 1000,
            }
        },
        {
            type: "Movement",
            properties: {
                velocity: 0,
                x: 0,
                y: 0,
                cardinal: 0
            },
        },

    ],
};
//default "Human" subtype of "Being"
let Human = {
   name: "Human",
   inherit: "Being",
   components: [
    {
        type: "Ally",
            properties: {},
    },
    {
        type: "Appearance",
            properties: {
                char: "@",
                color: wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.YELLOW
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
            x: 0,
            y: 0,
            cardinal: 0
        },
    }
   ] 
};
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
             velocity: 1,
             x: 0,
             y: 0,
             cardinal: 0
         },
     },
    ] 
};

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
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

const preserveCamelCase = string => {
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
    } else if (isLastCharUpper && isLastLastCharUpper && /[\p{Ll}]/u.test(character)) {
      string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = character.toLocaleLowerCase() === character && character.toLocaleUpperCase() !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = character.toLocaleUpperCase() === character && character.toLocaleLowerCase() !== character;
    }
  }

  return string;
};

const camelCase = (input, options) => {
  if (!(typeof input === 'string' || Array.isArray(input))) {
    throw new TypeError('Expected the input to be `string | string[]`');
  }

  options = { ...{
      pascalCase: false
    },
    ...options
  };

  const postProcess = x => options.pascalCase ? x.charAt(0).toLocaleUpperCase() + x.slice(1) : x;

  if (Array.isArray(input)) {
    input = input.map(x => x.trim()).filter(x => x.length).join('-');
  } else {
    input = input.trim();
  }

  if (input.length === 0) {
    return '';
  }

  if (input.length === 1) {
    return options.pascalCase ? input.toLocaleUpperCase() : input.toLocaleLowerCase();
  }

  const hasUpperCase = input !== input.toLocaleLowerCase();

  if (hasUpperCase) {
    input = preserveCamelCase(input);
  }

  input = input.replace(/^[_.\- ]+/, '').toLocaleLowerCase().replace(/[_.\- ]+([\p{Alpha}\p{N}_]|$)/gu, (_, p1) => p1.toLocaleUpperCase()).replace(/\d+([\p{Alpha}\p{N}_]|$)/gu, m => m.toLocaleUpperCase());
  return postProcess(input);
};

var camelcase = camelCase; // TODO: Remove this for the next major release

var _default = camelCase;
camelcase.default = _default;

const camelCache = {};
const camelString = value => {
  const result = camelCache[value];

  if (!result) {
    camelCache[value] = camelcase(value);
    return camelCache[value];
  }

  return result;
};

class ComponentRegistry {
  constructor() {
    _defineProperty(this, "_cbit", 0);

    _defineProperty(this, "_map", {});
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
  return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
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
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
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
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function (symbol) {
    return target.propertyIsEnumerable(symbol);
  }) : [];
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
  return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
  && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
  && Object.propertyIsEnumerable.call(target, key)); // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
  var destination = {};

  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function (key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }

  getKeys(source).forEach(function (key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }

    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
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
    _defineProperty(this, "name", '');

    _defineProperty(this, "inherit", []);

    _defineProperty(this, "components", []);

    this.name = name;
  }

  addComponent(prefabComponent) {
    this.components.push(prefabComponent);
  }

  applyToEntity(entity, prefabProps = {}) {
    this.inherit.forEach(parent => {
      parent.applyToEntity(entity, prefabProps);
    });
    const arrComps = {};
    this.components.forEach(component => {
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

          if (prefabProps[ckey] && prefabProps[ckey][arrComps[ckey]]) {
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
    _defineProperty(this, "_prefabs", {});

    _defineProperty(this, "_engine", null);

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

    prefab.inherit = inherit.map(parent => {
      const ref = this.get(parent);

      if (!ref) {
        console.warn(`Prefab "${data.name}" cannot inherit from Prefab "${parent}" because is not registered yet! Prefabs must be registered in the right order.`);
        return parent;
      }

      return ref;
    });
    const comps = data.components || [];
    comps.forEach(componentData => {
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
          prefab.addComponent(new PrefabComponent(clazz, componentData.properties, componentData.overwrite));
          return;
        }
      }

      console.warn(`Unrecognized component reference "${componentData}" in prefab "${data.name}". Ensure the component is registered before the prefab.`);
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
      console.warn(`Could not instantiate prefab "${name}" since it is not registered`);
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

_defineProperty(Component, "allowMultiple", false);

_defineProperty(Component, "keyProperty", null);

_defineProperty(Component, "properties", {});

class EntityEvent {
  constructor(name, data = {}) {
    _defineProperty(this, "data", {});

    _defineProperty(this, "prevented", false);

    _defineProperty(this, "handled", false);

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
  return num | ONE << bit;
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

const serializeComponent = component => {
  return component.serialize();
};

const serializeComponentArray = arr => {
  return arr.map(serializeComponent);
};

const serializeComponentKeyed = ob => {
  const ser = {};

  for (const k in ob) {
    ser[k] = serializeComponent(ob[k]);
  }

  return ser;
};

class Entity {
  constructor(world, id) {
    _defineProperty(this, "_cbits", 0n);

    _defineProperty(this, "_qeligible", true);

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
      ...components
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
    _defineProperty(this, "_cache", []);

    _defineProperty(this, "_onAddListeners", []);

    _defineProperty(this, "_onRemoveListeners", []);

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

        this._onAddListeners.forEach(cb => cb(entity));
      }

      return true;
    }

    if (isTracking) {
      this._cache.splice(idx, 1);

      this._onRemoveListeners.forEach(cb => cb(entity));
    }

    return false;
  }

  refresh() {
    this._cache = [];

    this._world._entities.forEach(entity => {
      this.candidate(entity);
    });
  }

  get() {
    return this._cache;
  }

}

class World {
  constructor(engine) {
    _defineProperty(this, "_id", 0);

    _defineProperty(this, "_queries", []);

    _defineProperty(this, "_entities", new Map());

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
    this._entities.forEach(entity => {
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
    list.forEach(e => {
      json.push(e.serialize());
    });
    return {
      entities: json
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
    const {
      id,
      ...components
    } = data;

    const entity = this._createOrGetEntityById(id);

    entity._qeligible = false;
    Object.entries(components).forEach(([key, value]) => {
      const type = camelString(key);

      const def = this.engine._components.get(type);

      if (def.allowMultiple) {
        Object.values(value).forEach(d => {
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
    this._queries.forEach(q => q.candidate(entity));
  }

  _destroyed(id) {
    return this._entities.delete(id);
  }

}

class Engine {
  constructor() {
    _defineProperty(this, "_components", new ComponentRegistry());

    _defineProperty(this, "_prefabs", new PrefabRegistry(this));
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





var locationId = {}
//creating the map in "canvas" width = 80, height = 50
const terminal = new wglt__WEBPACK_IMPORTED_MODULE_0__.Terminal(document.querySelector('canvas'), 80, 50);

//WGLT leftovers. Setting the whole map as explored and visible to the player
for (let y = 0; y < terminal.height; y++) {
    for (let x = 0; x < terminal.width; x++) {
        terminal.grid[y][x].visible = true
        terminal.grid[y][x].explored = true
    }
}

//creating world to contain entities in order to enable query
const world = _ecs__WEBPACK_IMPORTED_MODULE_1__.default.createWorld();
//player = human test pilot
const player = world.createPrefab("Human")
player.position.x = 50
player.position.y = 20
locationId[player.position.x + "," + player.position.y] = player.id
//zombie = zombie test pilot

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        let zombie = world.createPrefab("Zombie")
        zombie.position.x = 48+i
        zombie.position.y = 10+j
        locationId[zombie.position.x + "," + zombie.position.y] = zombie.id
    }  
}
/*  Fuck it custom zombie-esque pathfinding.
    Dilemna: If each zombie only attempts to move once, there will be a trickle/accordian effect for movement.
    Solution 1: If a zombie doesn't move, they don't consume their action for the second and wait for an opening.
        Pros: Less process-intensive.
        Cons: Would cause probably minor stutterstepping to still occur
    Solution 2: Don't render a frame until all zombies have filled in every spot possible to them.
        Pros: Zombies will move as one massive wave
        Cons: Potential to be dangerously process-intensive

    DONE - Determine cardinal movement, save variable 
    DONE - Zombie moves towards nearest target
    If zombie can't move directly towards target, randomly move left/right of target
        - Heading south, move southwest/southeast. Etc. for other directions
    If zombie can't move around target, randomly move 90deg off target
        -Heading south, move west or east, etc.
    If zombie can't make lateral progress, zombie doesn't move.
    
    Solution 1 break:
        If zombie moved, they have consumed their action for their action speed. Flag cooldown
    Solution 2 break:
        If zombie moved, flag it.
            Remember the vacated spot's coordinates
        If zombie didn't move, flag it
        Starting with opposite of South and working out, move zombie in.
            Ex: Move in N, NW/NE, E/W
            Verify Zombie's target direction. If moving into moves away from target, skip zombie.
            If no zombies move, skip to next vacated spot.
    
    If zombie is able to successfully move and end adjacent to their target, flag as 'engaged'
    Engaged zombies no longer search for nearby targets until target is dead or moves out of range
    Result: Zombies will move as a horde towards nearest targets

    TODO:   Target selection
            Frequency of target selection
                Maybe Only query for targets in situations where a target is required?
                    ex. needing movement, needing to attack
                Part of general query sweep of zombies, if zombie != target, add to needTarget list?
                    During query sweep of golems, assign zombie to nearest target?

    Do solution 1 first as proof of concept due to being much simpler
    Attempt solution 1 and 2 with theoretical maximum of zombies to see processing strain and compare
    */
 //query array
const query = {
    all : world.createQuery({
        all: [],
    }),
    enemies : world.createQuery({
        all: [_components__WEBPACK_IMPORTED_MODULE_2__.Enemy],
    }),
    allies : world.createQuery({
        all: [_components__WEBPACK_IMPORTED_MODULE_2__.Ally],
    }),
}; 

//cardinal direction for movement
const cardinals = [[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]]

//Collective of all enemy AI
//AI needs to have targetting, attacking, moving
function enemyAI(time) {

    query.enemies.get().forEach((entityEnemy) => {
        //zombie AI

        if (entityEnemy.description.name == "Zombie") {
            let distance = 0
            //Determine closest player ally to zombie
            query.allies.get().forEach((entityAlly) => {
                if (Math.hypot((entityEnemy.position.x - entityAlly.position.x),(entityEnemy.position.y - entityAlly.position.y)) < distance || distance == 0) {
                    entityEnemy.combat.x = entityAlly.position.x
                    entityEnemy.combat.y = entityAlly.position.y
                    entityEnemy.combat.target = entityAlly.id
                    distance = Math.hypot((entityEnemy.position.x - entityAlly.position.x),(entityEnemy.position.y - entityAlly.position.y))
                };
            });
            entityEnemy.combat.distance = distance
            //determine cardinal movement to nearest enemy
            for (let i = 0; i < 8; i++) {
                let angle = Math.atan2(entityEnemy.combat.x - entityEnemy.position.x, entityEnemy.combat.y - entityEnemy.position.y)* 180 / Math.PI
                let lowAngle = i * 45 - 22.5
                let highAngle = i * 45 + 22.5
                if (Math.sign(lowAngle) == -1) {lowAngle += 360}
                if (Math.sign(angle) == -1) {angle += 360}
                if ((i == 0 && (angle >= 337.5 || angle <= 22.5)) || (lowAngle <= angle && angle <= highAngle)) {
                    entityEnemy.movement.x = cardinals[i][0]
                    entityEnemy.movement.y = cardinals[i][1]
                    entityEnemy.movement.cardinal = i
                };
            };
        };
    });
}
//query all and do their next action. Attack else move
//TODO: Movement for velocity > 1. Increment through each step to determine if next step is clear/adjacent to target
//TODO: Maybe randomize the direction zombies decide to go when blocked.
function doAction(time) {
    query.all.get().forEach((entity) => {
        //action available
        if (time - entity.action.last >= entity.action.adjusted) {
            //target available
            if (world.getEntity(entity.combat.target)) {
                //if adjacent to target
                if (Math.abs(entity.combat.x - entity.position.x) <= 1 && Math.abs(entity.combat.y - entity.position.y) <= 1) {
                    //adjacent
                //TODO:Velocity
                } else {
                    if (!locationId[(entity.position.x + entity.movement.x) + "," + (entity.position.y + entity.movement.y)]) {
                        //empty
                    } else {
                        //front left
                        if (!locationId[(entity.position.x + cardinals.at((entity.movement.cardinal + 1) % 8)[0]) + "," + (entity.position.y + cardinals.at((entity.movement.cardinal + 1) % 8)[1])]) {
                            entity.movement.x = cardinals.at((entity.movement.cardinal + 1) % 8)[0]
                            entity.movement.y = cardinals.at((entity.movement.cardinal + 1) % 8)[1]
                        //front right
                        } else if (!locationId[(entity.position.x + cardinals.at((entity.movement.cardinal - 1) % 8)[0]) + "," + (entity.position.y + cardinals.at((entity.movement.cardinal - 1) % 8)[1])]) {
                            entity.movement.x = cardinals.at((entity.movement.cardinal - 1) % 8)[0]
                            entity.movement.y = cardinals.at((entity.movement.cardinal - 1) % 8)[1]
                        //side left
                        } else if (!locationId[(entity.position.x + cardinals.at((entity.movement.cardinal + 2) % 8)[0]) + "," + (entity.position.y + cardinals.at((entity.movement.cardinal + 2) % 8)[1])]) {
                            entity.movement.x = cardinals.at((entity.movement.cardinal + 2) % 8)[0]
                            entity.movement.y = cardinals.at((entity.movement.cardinal + 2) % 8)[1]
                        //side right
                        } else if (!locationId[(entity.position.x + cardinals.at((entity.movement.cardinal - 2) % 8)[0]) + "," + (entity.position.y + cardinals.at((entity.movement.cardinal - 2) % 8)[1])]) {
                            entity.movement.x = cardinals.at((entity.movement.cardinal - 2) % 8)[0]
                            entity.movement.y = cardinals.at((entity.movement.cardinal - 2) % 8)[1]
                        //don't move
                        } else {
                            entity.movement.x = 0
                            entity.movement.y = 0
                        }
                    }
                    delete locationId[entity.position.x + "," + entity.position.y]
                    entity.position.x += entity.movement.x
                    entity.position.y += entity.movement.y
                    locationId[entity.position.x + "," + entity.position.y] = entity.id
                }
            }
            //adjusted action speed = action speed + (action speed - (time since last attack))
            //Any action above or below the action speed will adjust the next action accordingly to keep action speed on average
            //i.e. 1200ms since last action == next action is 800ms instead of 1000ms 
            entity.action.adjusted = entity.action.speed + entity.action.speed - (time - entity.action.last)
            entity.action.last = time
        }
    });
}
    //renderLoop = things to do every loop.
terminal.renderLoop = function(time) {
    //fps display
    if (this.lastRenderTime === 0) {
      this.lastRenderTime = time;
      this.fps = 0;
    } else {
      this.renderDelta = time - this.lastRenderTime;
      this.lastRenderTime = time;
      this.fps = Math.round(1000.0 / this.renderDelta * 100) / 100;
      this.averageFps = 0.95 * this.averageFps + 0.05 * this.fps;

    }
    //updateKeys(time) will send timestamp for the purpose of limiting repeated/held keypresses
    this.keys.updateKeys(time);
    //update(time) will send timestamp for the purpose of limiting repeated/held mouse clicks. Also tracks change in mouse coordinates
    this.mouse.update(time);
    if (this.update) {
      this.update();
    }
    enemyAI(time)
    doAction(time)

    //clear screen
    this.flush();
    this.clear();
    //drawing UI
    //Drawing test pilot player and zombie
    query.all.get().forEach((entity) => {
    this.drawString(entity.position.x, entity.position.y, entity.appearance.char, entity.appearance.color);  
    });
    //drawing FPS
    this.drawString(0,1, String(terminal.fps))
    //render all of the above
    this.render();
    //request webGL to draw to browser
    this.requestAnimationFrame();
}




/*function cookieClick(number){
    cookies = cookies + number;
	document.getElementById("cookies").innerHTML = prettify(cookies);
};

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = prettify(cursors);  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = prettify(cookies);  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = prettify(nextCost);  //updates the cursor cost for the user
};


function save(){
	var save = {
	cookies: cookies,
	cursors: cursors,
	prestige: prestige
};
localStorage.setItem("save",JSON.stringify(save));
};
function load(){
	var savegame = JSON.parse(localStorage.getItem("save"))
	if (typeof savegame.cookies !== "undefined") cookies = savegame.cookies;
	document.getElementById("cookies").innerHTML = prettify(cookies);
	if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
	document.getElementById('cursors').innerHTML = prettify(cursors);
	if (typeof savegame.cookies !== "undefined") prestige = savegame.prestige;
};

function deleteSave(){
	localStorage.removeItem("save")
};

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
};*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0RBQXdELGNBQWMsZUFBZSxVQUFVO0FBQy9GLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7QUFDckM7O0FBRUE7QUFDQSxvREFBb0QsS0FBSztBQUN6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLDJDQUEyQzs7QUFFM0M7QUFDQSw2QkFBNkI7QUFDN0Isb0NBQW9DOztBQUVwQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLFVBQVU7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUix3QkFBd0IsY0FBYztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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MkU7QUFDM0UsMkVBQTJFO0FBQzNFO0FBQ0EsaUVBQWlFO0FBQ2pFLDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb2xlbWFuY2VyLy4vbm9kZV9tb2R1bGVzL3dnbHQvZGlzdC93Z2x0LmpzIiwid2VicGFjazovL2dvbGVtYW5jZXIvLi9zcmMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyLy4vc3JjL2Vjcy5qcyIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyLy4vc3JjL2VudGl0aWVzLmpzIiwid2VicGFjazovL2dvbGVtYW5jZXIvLi9ub2RlX21vZHVsZXMvZ2VvdGljL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL2dvbGVtYW5jZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dvbGVtYW5jZXIvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24odCxpKXtcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWkoKTpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxpKTpcIm9iamVjdFwiPT09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy53Z2x0PWkoKTp0LndnbHQ9aSgpfShnbG9iYWxUaGlzLChmdW5jdGlvbigpe3JldHVybigoKT0+e1widXNlIHN0cmljdFwiO3ZhciB0PXs2MTI6KHQsaSxlKT0+e2xldCBzO2UucihpKSxlLmQoaSx7QmxlbmRNb2RlOigpPT5zLENlbGw6KCk9PkUsQ2hhcnM6KCk9PmMsQ29sb3JzOigpPT5BLENvbnNvbGU6KCk9PkssREVGQVVMVF9GT05UOigpPT5WLERlZmF1bHREaWFsb2dSZW5kZXJlcjooKT0+dixEaWFsb2c6KCk9PmIsRGlhbG9nU3RhdGU6KCk9PlMsRm9udDooKT0+TyxGb3ZPY3RhbnRzOigpPT5nLEZvdlF1YWRyYW50czooKT0+TixHVUk6KCk9PkksS2V5Ym9hcmQ6KCk9PngsS2V5czooKT0+UCxNZXNzYWdlRGlhbG9nOigpPT5ILE1vdXNlOigpPT5aLFBvaW50OigpPT5SLFJORzooKT0+aHQsUmVjdDooKT0+QyxTZWxlY3REaWFsb2c6KCk9Pk0sVGVybWluYWw6KCk9PmF0LGNvbXB1dGVQYXRoOigpPT5pdCxmaXhCb3hDZWxsczooKT0+Xyxmcm9tSHN2OigpPT5kLGZyb21SZ2I6KCk9PmEsZ2V0Rm92UXVhZHJhbnQ6KCk9PkwsbG9hZEltYWdlOigpPT5YLGxvYWRJbWFnZTJ4OigpPT5ZfSksZnVuY3Rpb24odCl7dFt0Lk5vbmU9MF09XCJOb25lXCIsdFt0LkJsZW5kPTFdPVwiQmxlbmRcIix0W3QuQWRkPTJdPVwiQWRkXCJ9KHN8fChzPXt9KSk7Y29uc3Qgcj1bWzEsMCwxLDBdLFsxLDAsMSwxXSxbMSwwLDEsMl0sWzIsMCwyLDFdLFswLDAsMiwxXSxbMCwwLDEsMl0sWzIsMCwyLDJdLFsyLDAsMiwwXSxbMCwwLDIsMl0sWzIsMCwwLDJdLFsyLDAsMCwxXSxbMSwwLDAsMl0sWzAsMCwxLDFdLFsxLDEsMCwwXSxbMSwxLDAsMV0sWzAsMSwxLDFdLFsxLDEsMSwwXSxbMCwxLDAsMV0sWzEsMSwxLDFdLFsxLDIsMSwwXSxbMiwxLDIsMF0sWzIsMiwwLDBdLFswLDIsMiwwXSxbMiwyLDAsMl0sWzAsMiwyLDJdLFsyLDIsMiwwXSxbMCwyLDAsMl0sWzIsMiwyLDJdLFsxLDIsMCwyXSxbMiwxLDAsMV0sWzAsMiwxLDJdLFswLDEsMiwxXSxbMiwxLDAsMF0sWzEsMiwwLDBdLFswLDIsMSwwXSxbMCwxLDIsMF0sWzIsMSwyLDFdLFsxLDIsMSwyXSxbMSwwLDAsMV0sWzAsMSwxLDBdXTtmdW5jdGlvbiBoKHQsaSxlKXtjb25zdCBzPXQuZ2V0Q2hhckNvZGUoaSxlKTtyZXR1cm4gdm9pZCAwIT09cyYmcz49MTc5JiZzPD0yMTh9ZnVuY3Rpb24gbyh0LGksZSxzKXtpZihpPDB8fGU8MHx8aT49dC53aWR0aHx8ZT49dC5oZWlnaHQpcmV0dXJuIDA7Y29uc3QgaD10LmdldENoYXJDb2RlKGksZSk7cmV0dXJuIHZvaWQgMD09PWh8fGg8MTc5fHxoPjIxOD8wOnJbaC0xNzldW3NdfWZ1bmN0aW9uIG4odCxpLGUscyl7Zm9yKGxldCBoPTA7aDxyLmxlbmd0aDtoKyspe2NvbnN0IG89cltoXTtpZihvWzBdPT09dCYmb1sxXT09PWkmJm9bMl09PT1lJiZvWzNdPT09cylyZXR1cm4gMTc5K2h9cmV0dXJuIDB9ZnVuY3Rpb24gXyh0KXtmb3IobGV0IGk9MDtpPHQuaGVpZ2h0O2krKylmb3IobGV0IGU9MDtlPHQud2lkdGg7ZSsrKWlmKGgodCxlLGkpKXtsZXQgcz1vKHQsZSxpLTEsMikscj1vKHQsZSsxLGksMyksaD1vKHQsZSxpKzEsMCksXz1vKHQsZS0xLGksMSk7cz4wJiYwPT09ciYmMD09PWgmJjA9PT1fP2g9czowPT09cyYmcj4wJiYwPT09aCYmMD09PV8/Xz1yOjA9PT1zJiYwPT09ciYmaD4wJiYwPT09Xz9zPWg6MD09PXMmJjA9PT1yJiYwPT09aCYmXz4wJiYocj1fKSxfPjAmJnI+MCYmKF89cj1NYXRoLm1heChfLHIpKSxzPjAmJmg+MCYmKHM9aD1NYXRoLm1heChzLGgpKTtjb25zdCBhPW4ocyxyLGgsXyk7aWYoKHN8fHJ8fGh8fF8pJiYhKGE+PTE3OSYmYTw9MjE4KSl0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGNoYXIgY29kZSEgKHVwPVwiK3MrXCIsIHJpZ2h0PVwiK3IrXCIsIGRvd249XCIraCtcIiwgbGVmdD1cIitfK1wiKVwiKTt0LmRyYXdDaGFyKGUsaSxhKX19ZnVuY3Rpb24gYSh0LGksZSxzKXtyZXR1cm4gdm9pZCAwPT09cyYmKHM9MjU1KSwodDw8MjQpKyhpPDwxNikrKGU8PDgpK3N9ZnVuY3Rpb24gZCh0LGksZSxzKXtjb25zdCByPTYqdHwwLGg9Nip0LXIsbz1lKigxLWkpLG49ZSooMS1oKmkpLF89ZSooMS0oMS1oKSppKTtsZXQgZCxBLGw7c3dpdGNoKHIlNil7Y2FzZSAwOmQ9ZSxBPV8sbD1vO2JyZWFrO2Nhc2UgMTpkPW4sQT1lLGw9bzticmVhaztjYXNlIDI6ZD1vLEE9ZSxsPV87YnJlYWs7Y2FzZSAzOmQ9byxBPW4sbD1lO2JyZWFrO2Nhc2UgNDpkPV8sQT1vLGw9ZTticmVhaztjYXNlIDU6ZD1lLEE9byxsPW47YnJlYWs7ZGVmYXVsdDpkPTAsQT0wLGw9MH1yZXR1cm4gdm9pZCAwPT09cyYmKHM9MSksYSgyNTUqZHwwLDI1NSpBfDAsMjU1Kmx8MCwyNTUqc3wwKX1jb25zdCBBPXtCTEFDSzphKDAsMCwwKSxXSElURTphKDI1NSwyNTUsMjU1KSxMSUdIVF9HUkFZOmEoMTcwLDE3MCwxNzApLERBUktfR1JBWTphKDg1LDg1LDg1KSxZRUxMT1c6YSgyNTUsMjU1LDg1KSxCUk9XTjphKDE3MCw4NSwwKSxMSUdIVF9SRUQ6YSgyNTUsODUsODUpLERBUktfUkVEOmEoMTcwLDAsMCksTElHSFRfR1JFRU46YSg4NSwyNTUsODUpLERBUktfR1JFRU46YSgwLDE3MCwwKSxMSUdIVF9DWUFOOmEoODUsMjU1LDI1NSksREFSS19DWUFOOmEoMCwxNzAsMTcwKSxMSUdIVF9CTFVFOmEoODUsODUsMjU1KSxEQVJLX0JMVUU6YSgwLDAsMTcwKSxMSUdIVF9NQUdFTlRBOmEoMjU1LDg1LDI1NSksREFSS19NQUdFTlRBOmEoMTcwLDAsMTcwKSxPUkFOR0U6YSgyNTUsMTM2LDApfTtmdW5jdGlvbiBsKHQsaSxlKXtyZXR1cm4gaSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse3ZhbHVlOmUsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2ldPWUsdH1jbGFzcyBFe2NvbnN0cnVjdG9yKHQsaSxlLHMscil7bCh0aGlzLFwieFwiLHZvaWQgMCksbCh0aGlzLFwieVwiLHZvaWQgMCksbCh0aGlzLFwiY2hhckNvZGVcIix2b2lkIDApLGwodGhpcyxcImZnXCIsdm9pZCAwKSxsKHRoaXMsXCJiZ1wiLHZvaWQgMCksbCh0aGlzLFwiZGlydHlcIix2b2lkIDApLGwodGhpcyxcImJsb2NrZWRcIix2b2lkIDApLGwodGhpcyxcImJsb2NrZWRTaWdodFwiLHZvaWQgMCksbCh0aGlzLFwiZXhwbG9yZWRcIix2b2lkIDApLGwodGhpcyxcInZpc2libGVcIix2b2lkIDApLGwodGhpcyxcInBhdGhJZFwiLHZvaWQgMCksbCh0aGlzLFwiZ1wiLHZvaWQgMCksbCh0aGlzLFwiaFwiLHZvaWQgMCksbCh0aGlzLFwicHJldlwiLHZvaWQgMCksdGhpcy54PXQsdGhpcy55PWksdGhpcy5jaGFyQ29kZT12b2lkIDAhPT1lP2Z1bmN0aW9uKHQpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgdCYmdC5sZW5ndGg+MD90LmNoYXJDb2RlQXQoMCk6dH0oZSk6XCIgXCIuY2hhckNvZGVBdCgwKSx0aGlzLmZnPXZvaWQgMCE9PXM/czpBLldISVRFLHRoaXMuYmc9dm9pZCAwIT09cj9yOkEuQkxBQ0ssdGhpcy5kaXJ0eT0hMCx0aGlzLmJsb2NrZWQ9ITEsdGhpcy5ibG9ja2VkU2lnaHQ9ITEsdGhpcy5leHBsb3JlZD0hMSx0aGlzLnZpc2libGU9ITEsdGhpcy5wYXRoSWQ9LTEsdGhpcy5nPTAsdGhpcy5oPTAsdGhpcy5wcmV2PW51bGx9c2V0Q2hhckNvZGUodCl7dGhpcy5jaGFyQ29kZSE9PXQmJih0aGlzLmNoYXJDb2RlPXQsdGhpcy5kaXJ0eT0hMCl9c2V0Rm9yZWdyb3VuZCh0KXt2b2lkIDAhPT10JiZudWxsIT09dCYmdCE9PXRoaXMuZmcmJih0aGlzLmZnPXQsdGhpcy5kaXJ0eT0hMCl9c2V0QmFja2dyb3VuZCh0KXt2b2lkIDAhPT10JiZudWxsIT09dCYmdCE9PXRoaXMuYmcmJih0aGlzLmJnPXQsdGhpcy5kaXJ0eT0hMCl9c2V0VmFsdWUodCxpLGUpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgdCYmKHQ9dC5jaGFyQ29kZUF0KDApKSxcIm51bWJlclwiPT09dHlwZW9mIHQ/KHRoaXMuc2V0Q2hhckNvZGUodCksdm9pZCAwIT09aSYmdGhpcy5zZXRGb3JlZ3JvdW5kKGkpLHZvaWQgMCE9PWUmJnRoaXMuc2V0QmFja2dyb3VuZChlKSk6dGhpcy5kcmF3Q2VsbCh0LHMuTm9uZSksdGhpcy5kaXJ0eX1kcmF3Q2VsbCh0LGkpe2NvbnN0IGU9MjU1JnQuYmc7aT09PXMuTm9uZXx8dC5jaGFyQ29kZT4wPyh0aGlzLnNldENoYXJDb2RlKHQuY2hhckNvZGUpLHRoaXMuc2V0Rm9yZWdyb3VuZCh0LmZnKSk6ZT4wJiZlPDI1NSYmdGhpcy5zZXRGb3JlZ3JvdW5kKHRoaXMuYmxlbmRDb2xvcnModGhpcy5mZyx0LmJnLGkpKSxpPT09cy5Ob25lfHwyNTU9PT1lP3RoaXMuc2V0QmFja2dyb3VuZCh0LmJnKTplPjAmJnRoaXMuc2V0QmFja2dyb3VuZCh0aGlzLmJsZW5kQ29sb3JzKHRoaXMuYmcsdC5iZyxpKSl9YmxlbmRDb2xvcnModCxpLGUpe2NvbnN0IHI9KDI1NS0oMjU1JmkpKS8yNTUsaD0xLXIsbz10Pj4yNCYyNTUsbj10Pj4xNiYyNTUsXz10Pj44JjI1NSxkPWk+PjI0JjI1NSxBPWk+PjE2JjI1NSxsPWk+PjgmMjU1O3N3aXRjaChlKXtjYXNlIHMuQmxlbmQ6cmV0dXJuIGEocipvK2gqZHwwLHIqbitoKkF8MCxyKl8raCpsfDApO2Nhc2Ugcy5BZGQ6cmV0dXJuIGEodGhpcy5jbGFtcChvK2gqZHwwKSx0aGlzLmNsYW1wKG4raCpBfDApLHRoaXMuY2xhbXAoXytoKmx8MCkpO2RlZmF1bHQ6cmV0dXJuIGl9fWNsYW1wKHQpe3JldHVybiBNYXRoLm1pbigyNTUsdCl9fWxldCBjO2Z1bmN0aW9uIHUodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fSFmdW5jdGlvbih0KXt0W3QuU01JTEVZPTFdPVwiU01JTEVZXCIsdFt0LklOVkVSU0VfU01JTEVZPTJdPVwiSU5WRVJTRV9TTUlMRVlcIix0W3QuSEVBUlQ9M109XCJIRUFSVFwiLHRbdC5ESUFNT05EPTRdPVwiRElBTU9ORFwiLHRbdC5DTFVCPTVdPVwiQ0xVQlwiLHRbdC5TUEFERT02XT1cIlNQQURFXCIsdFt0LkJVTExFVD03XT1cIkJVTExFVFwiLHRbdC5JTlZFUlNFX0JVTExFVD04XT1cIklOVkVSU0VfQlVMTEVUXCIsdFt0LkxJR0hUX1NIQURFPTE3Nl09XCJMSUdIVF9TSEFERVwiLHRbdC5NRURJVU1fU0hBREU9MTc3XT1cIk1FRElVTV9TSEFERVwiLHRbdC5EQVJLX1NIQURFPTE3OF09XCJEQVJLX1NIQURFXCIsdFt0LkJPWF9TSU5HTEVfVkVSVElDQUw9MTc5XT1cIkJPWF9TSU5HTEVfVkVSVElDQUxcIix0W3QuQk9YX1NJTkdMRV9WRVJUSUNBTF9BTkRfU0lOR0xFX0xFRlQ9MTgwXT1cIkJPWF9TSU5HTEVfVkVSVElDQUxfQU5EX1NJTkdMRV9MRUZUXCIsdFt0LkJPWF9ET1VCTEVfVkVSVElDQUxfQU5EX0RPVUJMRV9MRUZUPTE4NV09XCJCT1hfRE9VQkxFX1ZFUlRJQ0FMX0FORF9ET1VCTEVfTEVGVFwiLHRbdC5CT1hfRE9VQkxFX1ZFUlRJQ0FMPTE4Nl09XCJCT1hfRE9VQkxFX1ZFUlRJQ0FMXCIsdFt0LkJPWF9ET1VCTEVfRE9XTl9BTkRfRE9VQkxFX0xFRlQ9MTg3XT1cIkJPWF9ET1VCTEVfRE9XTl9BTkRfRE9VQkxFX0xFRlRcIix0W3QuQk9YX0RPVUJMRV9VUF9BTkRfRE9VQkxFX0xFRlQ9MTg4XT1cIkJPWF9ET1VCTEVfVVBfQU5EX0RPVUJMRV9MRUZUXCIsdFt0LkJPWF9TSU5HTEVfRE9XTl9BTkRfU0lOR0xFX0xFRlQ9MTkxXT1cIkJPWF9TSU5HTEVfRE9XTl9BTkRfU0lOR0xFX0xFRlRcIix0W3QuQk9YX1NJTkdMRV9VUF9BTkRfU0lOR0xFX1JJR0hUPTE5Ml09XCJCT1hfU0lOR0xFX1VQX0FORF9TSU5HTEVfUklHSFRcIix0W3QuQk9YX1NJTkdMRV9IT1JJWk9OVEFMX0FORF9TSU5HTEVfVVA9MTkzXT1cIkJPWF9TSU5HTEVfSE9SSVpPTlRBTF9BTkRfU0lOR0xFX1VQXCIsdFt0LkJPWF9TSU5HTEVfSE9SSVpPTlRBTF9BTkRfU0lOR0xFX0RPV049MTk0XT1cIkJPWF9TSU5HTEVfSE9SSVpPTlRBTF9BTkRfU0lOR0xFX0RPV05cIix0W3QuQk9YX1NJTkdMRV9WRVJUSUNBTF9BTkRfU0lOR0xFX1JJR0hUPTE5NV09XCJCT1hfU0lOR0xFX1ZFUlRJQ0FMX0FORF9TSU5HTEVfUklHSFRcIix0W3QuQk9YX1NJTkdMRV9IT1JJWk9OVEFMPTE5Nl09XCJCT1hfU0lOR0xFX0hPUklaT05UQUxcIix0W3QuQk9YX1NJTkdMRV9WRVJUSUNBTF9BTkRfU0lOR0xFX0hPUklaT05UQUw9MTk3XT1cIkJPWF9TSU5HTEVfVkVSVElDQUxfQU5EX1NJTkdMRV9IT1JJWk9OVEFMXCIsdFt0LkJPWF9ET1VCTEVfVVBfQU5EX0RPVUJMRV9SSUdIVD0yMDBdPVwiQk9YX0RPVUJMRV9VUF9BTkRfRE9VQkxFX1JJR0hUXCIsdFt0LkJPWF9ET1VCTEVfRE9XTl9BTkRfRE9VQkxFX1JJR0hUPTIwMV09XCJCT1hfRE9VQkxFX0RPV05fQU5EX0RPVUJMRV9SSUdIVFwiLHRbdC5CT1hfRE9VQkxFX0hPUklaT05UQUxfQU5EX0RPVUJMRV9VUD0yMDJdPVwiQk9YX0RPVUJMRV9IT1JJWk9OVEFMX0FORF9ET1VCTEVfVVBcIix0W3QuQk9YX0RPVUJMRV9IT1JJWk9OVEFMX0FORF9ET1VCTEVfRE9XTj0yMDNdPVwiQk9YX0RPVUJMRV9IT1JJWk9OVEFMX0FORF9ET1VCTEVfRE9XTlwiLHRbdC5CT1hfRE9VQkxFX1ZFUlRJQ0FMX0FORF9ET1VCTEVfUklHSFQ9MjA0XT1cIkJPWF9ET1VCTEVfVkVSVElDQUxfQU5EX0RPVUJMRV9SSUdIVFwiLHRbdC5CT1hfRE9VQkxFX0hPUklaT05UQUw9MjA1XT1cIkJPWF9ET1VCTEVfSE9SSVpPTlRBTFwiLHRbdC5CT1hfRE9VQkxFX1ZFUlRJQ0FMX0FORF9ET1VCTEVfSE9SSVpPTlRBTD0yMDZdPVwiQk9YX0RPVUJMRV9WRVJUSUNBTF9BTkRfRE9VQkxFX0hPUklaT05UQUxcIix0W3QuQk9YX1NJTkdMRV9VUF9BTkRfU0lOR0xFX0xFRlQ9MjE3XT1cIkJPWF9TSU5HTEVfVVBfQU5EX1NJTkdMRV9MRUZUXCIsdFt0LkJPWF9TSU5HTEVfRE9XTl9BTkRfU0lOR0xFX1JJR0hUPTIxOF09XCJCT1hfU0lOR0xFX0RPV05fQU5EX1NJTkdMRV9SSUdIVFwiLHRbdC5CTE9DS19GVUxMPTIxOV09XCJCTE9DS19GVUxMXCIsdFt0LkJMT0NLX0JPVFRPTV9IQUxGPTIyMF09XCJCTE9DS19CT1RUT01fSEFMRlwiLHRbdC5CTE9DS19MRUZUX0hBTEY9MjIxXT1cIkJMT0NLX0xFRlRfSEFMRlwiLHRbdC5CTE9DS19SSUdIVF9IQUxGPTIyMl09XCJCTE9DS19SSUdIVF9IQUxGXCIsdFt0LkJMT0NLX1RPUF9IQUxGPTIyM109XCJCTE9DS19UT1BfSEFMRlwifShjfHwoYz17fSkpO2NsYXNzIEt7Y29uc3RydWN0b3IodCxpLGUpe3UodGhpcyxcIndpZHRoXCIsdm9pZCAwKSx1KHRoaXMsXCJoZWlnaHRcIix2b2lkIDApLHUodGhpcyxcImdyaWRcIix2b2lkIDApLHUodGhpcyxcIm9yaWdpblhcIix2b2lkIDApLHUodGhpcyxcIm9yaWdpbllcIix2b2lkIDApLHUodGhpcyxcIm1pblhcIix2b2lkIDApLHUodGhpcyxcIm1heFhcIix2b2lkIDApLHUodGhpcyxcIm1pbllcIix2b2lkIDApLHUodGhpcyxcIm1heFlcIix2b2lkIDApLHUodGhpcyxcInJhZGl1c1wiLHZvaWQgMCksdGhpcy53aWR0aD10LHRoaXMuaGVpZ2h0PWksdGhpcy5ncmlkPVtdLHRoaXMub3JpZ2luWD0wLHRoaXMub3JpZ2luWT0wLHRoaXMubWluWD0wLHRoaXMubWF4WD0wLHRoaXMubWluWT0wLHRoaXMubWF4WT0wLHRoaXMucmFkaXVzPTA7Zm9yKGxldCBlPTA7ZTxpO2UrKyl7Y29uc3QgaT1bXTtmb3IobGV0IHM9MDtzPHQ7cysrKWkucHVzaChuZXcgRShzLGUpKTt0aGlzLmdyaWQucHVzaChpKX1pZih0aGlzLmNsZWFyKCksZSlmb3IobGV0IHM9MDtzPGk7cysrKWZvcihsZXQgaT0wO2k8dDtpKyspdGhpcy5ncmlkW3NdW2ldLmJsb2NrZWQ9dGhpcy5ncmlkW3NdW2ldLmJsb2NrZWRTaWdodD1lKGkscyl9Y2xlYXIoKXtmb3IobGV0IHQ9MDt0PHRoaXMuaGVpZ2h0O3QrKylmb3IobGV0IGk9MDtpPHRoaXMud2lkdGg7aSsrKXRoaXMuZHJhd0NoYXIoaSx0LDApfWdldENlbGwodCxpKXtpZighKHQ8MHx8aTwwfHx0Pj10aGlzLndpZHRofHxpPj10aGlzLmhlaWdodCkpcmV0dXJuIHRoaXMuZ3JpZFtpXVt0XX1nZXRDaGFyQ29kZSh0LGkpe2lmKCEodDwwfHxpPDB8fHQ+PXRoaXMud2lkdGh8fGk+PXRoaXMuaGVpZ2h0KSlyZXR1cm4gdGhpcy5ncmlkW2ldW3RdLmNoYXJDb2RlfWRyYXdDaGFyKHQsaSxlLHMscil7dD49MCYmdDx0aGlzLndpZHRoJiZpPj0wJiZpPHRoaXMuaGVpZ2h0JiZ0aGlzLmdyaWRbMHxpXVswfHRdLnNldFZhbHVlKGUscyxyKX1kcmF3U3RyaW5nKHQsaSxlLHMscil7Y29uc3QgaD1lLnNwbGl0KFwiXFxuXCIpO2ZvcihsZXQgZT0wO2U8aC5sZW5ndGg7ZSsrKXtjb25zdCBvPWhbZV07Zm9yKGxldCBoPTA7aDxvLmxlbmd0aDtoKyspdGhpcy5kcmF3Q2hhcih0K2gsaStlLG8uY2hhckNvZGVBdChoKSxzLHIpfX1kcmF3Q2VudGVyZWRTdHJpbmcodCxpLGUscyxyKXt0aGlzLmRyYXdTdHJpbmcodC1NYXRoLmZsb29yKGUubGVuZ3RoLzIpLGksZSxzLHIpfWRyYXdITGluZSh0LGksZSxzLHIsaCl7Zm9yKGxldCBvPXQ7bzx0K2U7bysrKXRoaXMuZHJhd0NoYXIobyxpLHMscixoKX1kcmF3VkxpbmUodCxpLGUscyxyLGgpe2ZvcihsZXQgbz1pO288aStlO28rKyl0aGlzLmRyYXdDaGFyKHQsbyxzLHIsaCl9ZHJhd1JlY3QodCxpLGUscyxyLGgsbyl7dGhpcy5kcmF3SExpbmUodCxpLGUscixoLG8pLHRoaXMuZHJhd0hMaW5lKHQsaStzLTEsZSxyLGgsbyksdGhpcy5kcmF3VkxpbmUodCxpLHMscixoLG8pLHRoaXMuZHJhd1ZMaW5lKHQrZS0xLGkscyxyLGgsbyl9ZHJhd0JveCh0LGksZSxzLHIsaCxvLG4sXyxhLGQsQSxsLEUpe3RoaXMuZmlsbFJlY3QodCxpLGUscywwLGwsRSksdGhpcy5kcmF3SExpbmUodCxpLGUsciksdGhpcy5kcmF3SExpbmUodCxpK3MtMSxlLG8pLHRoaXMuZHJhd1ZMaW5lKHQsaSxzLG4pLHRoaXMuZHJhd1ZMaW5lKHQrZS0xLGkscyxoKSx0aGlzLmRyYXdDaGFyKHQsaSxfKSx0aGlzLmRyYXdDaGFyKHQrZS0xLGksYSksdGhpcy5kcmF3Q2hhcih0LGkrcy0xLEEpLHRoaXMuZHJhd0NoYXIodCtlLTEsaStzLTEsZCl9ZHJhd1NpbmdsZUJveCh0LGksZSxzLHIsaCl7dGhpcy5kcmF3Qm94KHQsaSxlLHMsYy5CT1hfU0lOR0xFX0hPUklaT05UQUwsYy5CT1hfU0lOR0xFX1ZFUlRJQ0FMLGMuQk9YX1NJTkdMRV9IT1JJWk9OVEFMLGMuQk9YX1NJTkdMRV9WRVJUSUNBTCxjLkJPWF9TSU5HTEVfRE9XTl9BTkRfU0lOR0xFX1JJR0hULGMuQk9YX1NJTkdMRV9ET1dOX0FORF9TSU5HTEVfTEVGVCxjLkJPWF9TSU5HTEVfVVBfQU5EX1NJTkdMRV9MRUZULGMuQk9YX1NJTkdMRV9VUF9BTkRfU0lOR0xFX1JJR0hULHIsaCl9ZHJhd0RvdWJsZUJveCh0LGksZSxzLHIsaCl7dGhpcy5kcmF3Qm94KHQsaSxlLHMsYy5CT1hfRE9VQkxFX0hPUklaT05UQUwsYy5CT1hfRE9VQkxFX1ZFUlRJQ0FMLGMuQk9YX0RPVUJMRV9IT1JJWk9OVEFMLGMuQk9YX0RPVUJMRV9WRVJUSUNBTCxjLkJPWF9ET1VCTEVfRE9XTl9BTkRfRE9VQkxFX1JJR0hULGMuQk9YX0RPVUJMRV9ET1dOX0FORF9ET1VCTEVfTEVGVCxjLkJPWF9ET1VCTEVfVVBfQU5EX0RPVUJMRV9MRUZULGMuQk9YX0RPVUJMRV9VUF9BTkRfRE9VQkxFX1JJR0hULHIsaCl9ZmlsbFJlY3QodCxpLGUscyxyLGgsbyl7Zm9yKGxldCBuPWk7bjxpK3M7bisrKXRoaXMuZHJhd0hMaW5lKHQsbixlLHIsaCxvKX1kcmF3Q29uc29sZSh0LGksZSxyLGgsbyxuLF8pe189X3x8cy5Ob25lO2ZvcihsZXQgcz0wO3M8bjtzKyspZm9yKGxldCBuPTA7bjxvO24rKyl7Y29uc3Qgbz1lLmdldENlbGwocituLGgrcyk7byYmdGhpcy5kcmF3Q2VsbCh0K24saStzLG8sXyl9fWRyYXdDZWxsKHQsaSxlLHMpe3Q+PTAmJnQ8dGhpcy53aWR0aCYmaT49MCYmaTx0aGlzLmhlaWdodCYmdGhpcy5ncmlkW2ldW3RdLmRyYXdDZWxsKGUscyl9c2V0QmxvY2tlZCh0LGksZSl7dD49MCYmdDx0aGlzLndpZHRoJiZpPj0wJiZpPHRoaXMuaGVpZ2h0JiYodGhpcy5ncmlkW2ldW3RdLmJsb2NrZWQ9ZSl9c2V0QmxvY2tlZFNpZ2h0KHQsaSxlKXt0Pj0wJiZ0PHRoaXMud2lkdGgmJmk+PTAmJmk8dGhpcy5oZWlnaHQmJih0aGlzLmdyaWRbaV1bdF0uYmxvY2tlZFNpZ2h0PWUpfWlzVmlzaWJsZSh0LGkpe3JldHVybiEodDx0aGlzLm1pblh8fHQ+dGhpcy5tYXhYfHxpPHRoaXMubWluWXx8aT50aGlzLm1heFkpJiZ0aGlzLmdyaWRbaV1bdF0udmlzaWJsZX1pc0Jsb2NrZWQodCxpKXtyZXR1cm4gdDwwfHx0PnRoaXMud2lkdGh8fGk8MHx8aT50aGlzLmhlaWdodHx8dGhpcy5ncmlkW2ldW3RdLmJsb2NrZWR9aXNCbG9ja2VkU2lnaHQodCxpKXtyZXR1cm4gdDwwfHx0PnRoaXMud2lkdGh8fGk8MHx8aT50aGlzLmhlaWdodHx8dGhpcy5ncmlkW2ldW3RdLmJsb2NrZWRTaWdodH1jb21wdXRlT2N0YW50WSh0LGkpe2NvbnN0IGU9W10scz1bXTtsZXQgcixoLG8sbixfLGEsZCxBLGwsRSxjPTEsdT0wLEs9MCxUPTA7Zm9yKGg9dGhpcy5vcmlnaW5ZK2k7aD49dGhpcy5taW5ZJiZoPD10aGlzLm1heFk7aCs9aSxLPXUsKytjKWZvcihvPS41L2MsRT0tMSxuPU1hdGguZmxvb3IoVCpjKy41KSxyPXRoaXMub3JpZ2luWCtuKnQ7bjw9YyYmcj49dGhpcy5taW5YJiZyPD10aGlzLm1heFg7cis9dCwrK24sRT1sKXtpZihfPSEwLGE9ITEsZD1uL2MsQT1FLGw9ZCtvLEs+MClpZih0aGlzLmdyaWRbaC1pXVtyXS52aXNpYmxlJiYhdGhpcy5ncmlkW2gtaV1bcl0uYmxvY2tlZFNpZ2h0fHx0aGlzLmdyaWRbaC1pXVtyLXRdLnZpc2libGUmJiF0aGlzLmdyaWRbaC1pXVtyLXRdLmJsb2NrZWRTaWdodCl7Zm9yKGxldCB0PTA7dDxLJiZfOysrdClpZihBPD1zW3RdJiZsPj1lW3RdKWlmKHRoaXMuZ3JpZFtoXVtyXS5ibG9ja2VkU2lnaHQpe2lmKEE+PWVbdF0mJmw8PXNbdF0pe189ITE7YnJlYWt9ZVt0XT1NYXRoLm1pbihlW3RdLEEpLHNbdF09TWF0aC5tYXgoc1t0XSxsKSxhPSEwfWVsc2UgaWYoZD5lW3RdJiZkPHNbdF0pe189ITE7YnJlYWt9fWVsc2UgXz0hMTtfJiYodGhpcy5ncmlkW2hdW3JdLnZpc2libGU9ITAsdGhpcy5ncmlkW2hdW3JdLmJsb2NrZWRTaWdodCYmKFQ+PUE/VD1sOmF8fChlW3VdPUEsc1t1KytdPWwpKSl9fWNvbXB1dGVPY3RhbnRYKHQsaSl7Y29uc3QgZT1bXSxzPVtdO2xldCByLGgsbyxuLF8sYSxkLEEsbCxFLGM9MSx1PTAsSz0wLFQ9MDtmb3Iocj10aGlzLm9yaWdpblgrdDtyPj10aGlzLm1pblgmJnI8PXRoaXMubWF4WDtyKz10LEs9dSwrK2MpZm9yKG89LjUvYyxFPS0xLG49TWF0aC5mbG9vcihUKmMrLjUpLGg9dGhpcy5vcmlnaW5ZK24qaTtuPD1jJiZoPj10aGlzLm1pblkmJmg8PXRoaXMubWF4WTtoKz1pLCsrbixFPWwpe2lmKF89ITAsYT0hMSxkPW4vYyxBPUUsbD1kK28sSz4wKWlmKHRoaXMuZ3JpZFtoXVtyLXRdLnZpc2libGUmJiF0aGlzLmdyaWRbaF1bci10XS5ibG9ja2VkU2lnaHR8fHRoaXMuZ3JpZFtoLWldW3ItdF0udmlzaWJsZSYmIXRoaXMuZ3JpZFtoLWldW3ItdF0uYmxvY2tlZFNpZ2h0KXtmb3IobGV0IHQ9MDt0PEsmJl87Kyt0KWlmKEE8PXNbdF0mJmw+PWVbdF0paWYodGhpcy5ncmlkW2hdW3JdLmJsb2NrZWRTaWdodCl7aWYoQT49ZVt0XSYmbDw9c1t0XSl7Xz0hMTticmVha31lW3RdPU1hdGgubWluKGVbdF0sQSksc1t0XT1NYXRoLm1heChzW3RdLGwpLGE9ITB9ZWxzZSBpZihkPmVbdF0mJmQ8c1t0XSl7Xz0hMTticmVha319ZWxzZSBfPSExO18mJih0aGlzLmdyaWRbaF1bcl0udmlzaWJsZT0hMCx0aGlzLmdyaWRbaF1bcl0uYmxvY2tlZFNpZ2h0JiYoVD49QT9UPWw6YXx8KGVbdV09QSxzW3UrK109bCkpKX19Y29tcHV0ZUZvdih0LGksZSxzLHIpe2lmKHRoaXMub3JpZ2luWD10LHRoaXMub3JpZ2luWT1pLHRoaXMucmFkaXVzPWUscyl0aGlzLm1pblg9TWF0aC5taW4odGhpcy5taW5YLE1hdGgubWF4KDAsdC1lKSksdGhpcy5taW5ZPU1hdGgubWluKHRoaXMubWluWSxNYXRoLm1heCgwLGktZSkpLHRoaXMubWF4WD1NYXRoLm1heCh0aGlzLm1heFgsTWF0aC5taW4odGhpcy53aWR0aC0xLHQrZSkpLHRoaXMubWF4WT1NYXRoLm1heCh0aGlzLm1heFksTWF0aC5taW4odGhpcy5oZWlnaHQtMSxpK2UpKTtlbHNle3RoaXMubWluWD1NYXRoLm1heCgwLHQtZSksdGhpcy5taW5ZPU1hdGgubWF4KDAsaS1lKSx0aGlzLm1heFg9TWF0aC5taW4odGhpcy53aWR0aC0xLHQrZSksdGhpcy5tYXhZPU1hdGgubWluKHRoaXMuaGVpZ2h0LTEsaStlKTtmb3IobGV0IHQ9dGhpcy5taW5ZO3Q8PXRoaXMubWF4WTt0KyspZm9yKGxldCBpPXRoaXMubWluWDtpPD10aGlzLm1heFg7aSsrKXRoaXMuZ3JpZFt0XVtpXS52aXNpYmxlPSExfXRoaXMuZ3JpZFtpXVt0XS52aXNpYmxlPSEwLHZvaWQgMD09PXI/KHRoaXMuY29tcHV0ZU9jdGFudFkoMSwxKSx0aGlzLmNvbXB1dGVPY3RhbnRYKDEsMSksdGhpcy5jb21wdXRlT2N0YW50WCgxLC0xKSx0aGlzLmNvbXB1dGVPY3RhbnRZKDEsLTEpLHRoaXMuY29tcHV0ZU9jdGFudFkoLTEsLTEpLHRoaXMuY29tcHV0ZU9jdGFudFgoLTEsLTEpLHRoaXMuY29tcHV0ZU9jdGFudFgoLTEsMSksdGhpcy5jb21wdXRlT2N0YW50WSgtMSwxKSk6KDEmciYmdGhpcy5jb21wdXRlT2N0YW50WSgxLDEpLDImciYmdGhpcy5jb21wdXRlT2N0YW50WCgxLDEpLDQmciYmdGhpcy5jb21wdXRlT2N0YW50WCgxLC0xKSw4JnImJnRoaXMuY29tcHV0ZU9jdGFudFkoMSwtMSksMTYmciYmdGhpcy5jb21wdXRlT2N0YW50WSgtMSwtMSksMzImciYmdGhpcy5jb21wdXRlT2N0YW50WCgtMSwtMSksNjQmciYmdGhpcy5jb21wdXRlT2N0YW50WCgtMSwxKSwxMjgmciYmdGhpcy5jb21wdXRlT2N0YW50WSgtMSwxKSl9dXBkYXRlRXhwbG9yZWQoKXtmb3IobGV0IHQ9dGhpcy5taW5ZO3Q8PXRoaXMubWF4WTt0KyspZm9yKGxldCBpPXRoaXMubWluWDtpPD10aGlzLm1heFg7aSsrKXtjb25zdCBlPXRoaXMuZ3JpZFt0XVtpXTtlLmV4cGxvcmVkPWUuZXhwbG9yZWR8fGUudmlzaWJsZX19fWZ1bmN0aW9uIFQodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fWNsYXNzIE97Y29uc3RydWN0b3IodCxpLGUscyxyKXtUKHRoaXMsXCJ1cmxcIix2b2lkIDApLFQodGhpcyxcImNoYXJXaWR0aFwiLHZvaWQgMCksVCh0aGlzLFwiY2hhckhlaWdodFwiLHZvaWQgMCksVCh0aGlzLFwic2NhbGVcIix2b2lkIDApLFQodGhpcyxcImdyYXBoaWNhbFwiLHZvaWQgMCksdGhpcy51cmw9dCx0aGlzLmNoYXJXaWR0aD1pLHRoaXMuY2hhckhlaWdodD1lLHRoaXMuc2NhbGU9c3x8MSx0aGlzLmdyYXBoaWNhbD0hIXJ9fWNvbnN0IFY9bmV3IE8oXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlBQUFBQ0FBUU1BQUFENThQT0lBQUFBQmxCTVZFVUFBQUQvLy8rbDJaL2RBQUFFaGtsRVFWUkl4NDJTdjRvVVFSREdDNFV6YWRTd3dNVUQ4UUVLbGJXRDRRNThCL05HcFRWb2NLTzF3WEhVek1BSDBBY3dNVFlWR2c1YWcwSXpFWGFSamRaRVpLTnprS2JIcXRuekh5cFkwOU05KzV1dnFyN3BiWUN1QzZmdGFSaGdPTlhzMzBlQWgwTzFyWURtNElTL2VIMEI4R3hSVzJ2eG8zOTZ5dS9mYjBaRnJXMXpjT1hsUFUvWFB3SzhQR2piV2hWd000S25INjE5MTJvSzQrem1tSEphUW90eXQxa3Z0QzJBdGRvMjRpb2hQRGlHL3Y0ZUlDSnNZM1d5OFl2cjBEU0lCT2R4Z0g2djh3c3JpV2hjOHMwQXRhSy9HelNsMWpSMG5TalFud2tpNkZReE5GS2pnek8yYTdCQnF1Y0g3ZEw0TTl6OTZDSWhUMUZzL0FnS2djQTZkS0N4STI5RGFITndSSjRFR0FVMXNVME9HOXJtRTRTSWMzQTRGQ2hBQ3FxaEpSd3B4a3FoOXd4YWc0RFNtRUo1RHRwRndBUDRHVWY2bG1LY0ZGdGkxQll1UXA0eE44a3hNMmtOaGpka1RPaVRVZUFLR3ZoQTFyTHBNYllBQ1F6Q0lUbFREUk1iTFlvRWEySldQU01SRlpJdXBjU3pNVktjRVVrWCtzT0crQ2hOWDJ2RDhleDZrN09GSEwwUDE2NTVKdVBkNTNXQUQreVR2M1VyQ1FpdUhtWUJiZkl4cGtJbXV2cEJRQmtWYjVnNFhIdjNKa05pcmVHOEFPOXpEaEJadTJ6Mk9NWjExUzUvUklseU1lZk1OYVo0R3NDejV4Y2p5TTZoSFlFakFZRWZPOElnMXJrbEFlOXNSSWVZQWR3eW9JQnE2WUl6Q0FLaVdvaWZBM20zbzJBeldjZFlLT2RZNDdFSWY4UUFCQ3VZZ0lVVm1kVk1FWUVEQTBIbW8vM0Q2S0tKYmg1bXhoUDNVc1dJRTk3d25FeWd5aXpPZk9MaTJKT0pXOENlT2JsVzlJSGVLWmd2NHp4dXpEcnlPbWIrNGFRSCtNWFY2ZTB5d2RVY3hxQ2pCV2w1R3BielpkdU9HMVFFaUdYUDg2VDdFZmlKZmtNUTRPTzRIMHlxeU5DMnpsemlXRU43WXd1YzJmUTRwNUJOa1M1UVlYUDJoNU50UkpoMHZDS1FpZHRWSm1DR0F3RFNTUXBZZ2dTeGlSSXl6ZXdzZ0NoNHh4aVRQRE1oNWFqLy9sN2J0cWtyNnJReUlPdExqaTRsVlJRd1hkenZ1czQwWTUzTTMzZmg1MEdad0Y0RXhRZU1sdnVUZ2dMelNpNEVsS2N6VU83elZ0cHdkeU1LZHFaS09XYjJuRGJsYXdQeFBtdU13RkVXQlcramxaUjFlWXRTNDQya2lCR01XQ2kvaDEvK0dBUjZOWU9KV2lxTkpYRnlnRnRya3g1QzBPM0llRkdzNjdIaEVFaG1CdS9CVU9UKzA1NTFwWHhZSUYrRWxwaTVBS1JrTGw1R1ViQ0NaZGR5TXY2MjF1akVCUFA0dlN5MmZvdFR4M1UrZDNXQmlGT0E2VlNHU0I0OXYvTTdHQlg5RlByRGFUMmM5cXI0UENwd1o3cXo4MTNSOTRkVkZJZTE5djMzR2xNWlVnaFFGYjhCcmZFN1FCbWdCTWJybjJCM2Vubi95M0I1K0RMOFVCQWRuZWpkWWRCeGVWOWVqd29ZTlRnVzBPay9nQTdVRzJHQXphbmhMMERHN3E0c3Z5bndGOFV3RFB1N3UvdkQwSXVkelNsdE10VmJQK0ovZ1ViUjI5b0o3Rmc5czZVeStEbnBpVENPWWM0Y1hPZVhNV2ZzdXNTdzdGT2c5eDY1NW5heDZCbGVjd3BPUVE2OFdCd3ArSDJMTVFUdU9xMlJVaWd6aDJRL1IzQ1dBUkpJSkcxOTlFd09UeUtCbFFNem5zaENSR2VRNWdIQUJBUWw2TTRnTEVkQXpWYUJXTUNpQU5kc2F5RENIQkEvaGFnS1lmaWVsckpJbGlwS0tRSUE5TmYzd0Jsb1RIVDZCdUF4MTV6Uk5hMW5BQUFBQUVsRlRrU3VRbUNDXCIsOCw4KTtsZXQgZyxOO2Z1bmN0aW9uIEwodCxpKXtyZXR1cm4gdD4wP2k+MD9OLlFVQURSQU5UX1NPVVRIRUFTVDowPT09aT9OLlFVQURSQU5UX0VBU1Q6Ti5RVUFEUkFOVF9OT1JUSEVBU1Q6dDwwP2k+MD9OLlFVQURSQU5UX1NPVVRIV0VTVDowPT09aT9OLlFVQURSQU5UX1dFU1Q6Ti5RVUFEUkFOVF9OT1JUSFdFU1Q6aT4wP04uUVVBRFJBTlRfU09VVEg6Ti5RVUFEUkFOVF9OT1JUSH1mdW5jdGlvbiBmKHQsaSxlKXtyZXR1cm4gaSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse3ZhbHVlOmUsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2ldPWUsdH0hZnVuY3Rpb24odCl7dFt0Lk9DVEFOVF9TT1VUSF9TT1VUSEVBU1Q9MV09XCJPQ1RBTlRfU09VVEhfU09VVEhFQVNUXCIsdFt0Lk9DVEFOVF9FQVNUX1NPVVRIRUFTVD0yXT1cIk9DVEFOVF9FQVNUX1NPVVRIRUFTVFwiLHRbdC5PQ1RBTlRfRUFTVF9OT1JUSFRIRUFTVD00XT1cIk9DVEFOVF9FQVNUX05PUlRIVEhFQVNUXCIsdFt0Lk9DVEFOVF9OT1JUSF9OT1JUSEVBU1Q9OF09XCJPQ1RBTlRfTk9SVEhfTk9SVEhFQVNUXCIsdFt0Lk9DVEFOVF9OT1JUSF9OT1JUSFdFU1Q9MTZdPVwiT0NUQU5UX05PUlRIX05PUlRIV0VTVFwiLHRbdC5PQ1RBTlRfV0VTVF9OT1JUSEVBU1Q9MzJdPVwiT0NUQU5UX1dFU1RfTk9SVEhFQVNUXCIsdFt0Lk9DVEFOVF9XRVNUX1NPVVRIV0VTVD02NF09XCJPQ1RBTlRfV0VTVF9TT1VUSFdFU1RcIix0W3QuT0NUQU5UX1NPVVRIX1NPVVRIV0VTVD0xMjhdPVwiT0NUQU5UX1NPVVRIX1NPVVRIV0VTVFwifShnfHwoZz17fSkpLGZ1bmN0aW9uKHQpe3RbdC5RVUFEUkFOVF9TT1VUSEVBU1Q9M109XCJRVUFEUkFOVF9TT1VUSEVBU1RcIix0W3QuUVVBRFJBTlRfRUFTVD02XT1cIlFVQURSQU5UX0VBU1RcIix0W3QuUVVBRFJBTlRfTk9SVEhFQVNUPTEyXT1cIlFVQURSQU5UX05PUlRIRUFTVFwiLHRbdC5RVUFEUkFOVF9OT1JUSD0yNF09XCJRVUFEUkFOVF9OT1JUSFwiLHRbdC5RVUFEUkFOVF9OT1JUSFdFU1Q9NDhdPVwiUVVBRFJBTlRfTk9SVEhXRVNUXCIsdFt0LlFVQURSQU5UX1dFU1Q9OTZdPVwiUVVBRFJBTlRfV0VTVFwiLHRbdC5RVUFEUkFOVF9TT1VUSFdFU1Q9MTkyXT1cIlFVQURSQU5UX1NPVVRIV0VTVFwiLHRbdC5RVUFEUkFOVF9TT1VUSD0xMjldPVwiUVVBRFJBTlRfU09VVEhcIn0oTnx8KE49e30pKTtjbGFzcyBSe2NvbnN0cnVjdG9yKHQsaSl7Zih0aGlzLFwieFwiLHZvaWQgMCksZih0aGlzLFwieVwiLHZvaWQgMCksdGhpcy54PXQsdGhpcy55PWl9fWZ1bmN0aW9uIEQodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fWNsYXNzIEN7Y29uc3RydWN0b3IodCxpLGUscyl7RCh0aGlzLFwieFwiLHZvaWQgMCksRCh0aGlzLFwieVwiLHZvaWQgMCksRCh0aGlzLFwid2lkdGhcIix2b2lkIDApLEQodGhpcyxcImhlaWdodFwiLHZvaWQgMCksRCh0aGlzLFwibGVmdFwiLHZvaWQgMCksRCh0aGlzLFwidG9wXCIsdm9pZCAwKSxEKHRoaXMsXCJ4MlwiLHZvaWQgMCksRCh0aGlzLFwieTJcIix2b2lkIDApLHRoaXMueD10aGlzLmxlZnQ9dCx0aGlzLnk9dGhpcy50b3A9aSx0aGlzLndpZHRoPWUsdGhpcy5oZWlnaHQ9cyx0aGlzLngyPXQrZSx0aGlzLnkyPWkrc31nZXRDZW50ZXIoKXtyZXR1cm4gbmV3IFIodGhpcy54K3RoaXMud2lkdGgvMnwwLHRoaXMueSt0aGlzLmhlaWdodC8yfDApfWludGVyc2VjdHModCl7cmV0dXJuIHRoaXMueDw9dC54MiYmdGhpcy54Mj49dC54JiZ0aGlzLnk8PXQueTImJnRoaXMueTI+PXQueX1jb250YWlucyh0KXtyZXR1cm4gdC54Pj10aGlzLngmJnQueDx0aGlzLngyJiZ0Lnk+PXRoaXMueSYmdC55PHRoaXMueTJ9fWZ1bmN0aW9uIFUodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fWNsYXNzIFN7Y29uc3RydWN0b3IodCxpLGUpe1UodGhpcyxcImRpYWxvZ1wiLHZvaWQgMCksVSh0aGlzLFwicmVjdFwiLHZvaWQgMCksVSh0aGlzLFwiY29udGVudHNPZmZzZXRcIix2b2lkIDApLFUodGhpcyxcIm9wZW5cIix2b2lkIDApLFUodGhpcyxcImNvdW50XCIsdm9pZCAwKSxVKHRoaXMsXCJidWZmZXJcIix2b2lkIDApLHRoaXMuZGlhbG9nPXQsdGhpcy5yZWN0PWksdGhpcy5jb250ZW50c09mZnNldD1lLHRoaXMub3Blbj0hMSx0aGlzLmNvdW50PTB9fWNsYXNzIHZ7Z2V0U3RhdGUodCxpKXtjb25zdCBlPWkuY29udGVudHNSZWN0LndpZHRoKzQscz1pLmNvbnRlbnRzUmVjdC5oZWlnaHQrNCxyPSh0LndpZHRoLWUpLzJ8MCxoPSh0LmhlaWdodC1zKS8yfDA7cmV0dXJuIG5ldyBTKGksbmV3IEMocixoLGUscyksbmV3IFIocisyLGgrMikpfWRyYXcodCxpKXtjb25zdCBlPWkuZGlhbG9nLHt4OnMseTpyLHdpZHRoOmgsaGVpZ2h0Om99PWkucmVjdDt0LmZpbGxSZWN0KHMscixoLG8sMCxBLldISVRFLEEuQkxBQ0spLHQuZHJhd1NpbmdsZUJveChzLHIsaCxvKSx0LmRyYXdDZW50ZXJlZFN0cmluZyhzK2gvMnwwLHIsXCIgXCIrZS50aXRsZStcIiBcIiksZS5kcmF3Q29udGVudHModCxpLmNvbnRlbnRzT2Zmc2V0KX19ZnVuY3Rpb24gQih0LGksZSl7cmV0dXJuIGkgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxpLHt2YWx1ZTplLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtpXT1lLHR9Y2xhc3MgSXtjb25zdHJ1Y3Rvcih0LGkpe0IodGhpcyxcInRlcm1pbmFsXCIsdm9pZCAwKSxCKHRoaXMsXCJyZW5kZXJlclwiLHZvaWQgMCksQih0aGlzLFwiZGlhbG9nc1wiLHZvaWQgMCksdGhpcy50ZXJtaW5hbD10LHRoaXMucmVuZGVyZXI9aXx8bmV3IHYsdGhpcy5kaWFsb2dzPVtdfWFkZCh0KXt0aGlzLmRpYWxvZ3MucHVzaCh0aGlzLnJlbmRlcmVyLmdldFN0YXRlKHRoaXMudGVybWluYWwsdCkpfWhhbmRsZUlucHV0KCl7aWYoMD09PXRoaXMuZGlhbG9ncy5sZW5ndGgpcmV0dXJuITE7Y29uc3QgdD10aGlzLmRpYWxvZ3MubGVuZ3RoLTEsaT10aGlzLmRpYWxvZ3NbdGhpcy5kaWFsb2dzLmxlbmd0aC0xXTtyZXR1cm4gaS5kaWFsb2cuaGFuZGxlSW5wdXQodGhpcy50ZXJtaW5hbCxpLmNvbnRlbnRzT2Zmc2V0KSYmdGhpcy5kaWFsb2dzLnNwbGljZSh0LDEpLCEwfWRyYXcoKXtmb3IobGV0IHQ9MDt0PHRoaXMuZGlhbG9ncy5sZW5ndGg7dCsrKXRoaXMucmVuZGVyZXIuZHJhdyh0aGlzLnRlcm1pbmFsLHRoaXMuZGlhbG9nc1t0XSl9fWZ1bmN0aW9uIHAodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fWNsYXNzIGJ7Y29uc3RydWN0b3IodCxpKXtwKHRoaXMsXCJjb250ZW50c1JlY3RcIix2b2lkIDApLHAodGhpcyxcInRpdGxlXCIsdm9pZCAwKSx0aGlzLmNvbnRlbnRzUmVjdD10LHRoaXMudGl0bGU9aX19ZnVuY3Rpb24gdyh0LGksZSl7cmV0dXJuIGkgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxpLHt2YWx1ZTplLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtpXT1lLHR9Y2xhc3MgeXtjb25zdHJ1Y3Rvcigpe3codGhpcyxcImRvd25cIix2b2lkIDApLHcodGhpcyxcImRvd25UaW1lXCIsdm9pZCAwKSx3KHRoaXMsXCJyZXBlYXRcIix2b2lkIDApLHcodGhpcyxcInJlcGVhdFRpbWVcIix2b2lkIDApLHcodGhpcyxcImRvd25Db3VudFwiLHZvaWQgMCksdyh0aGlzLFwidXBDb3VudFwiLHZvaWQgMCksdGhpcy5kb3duPSExLHRoaXMuZG93blRpbWU9MCx0aGlzLnJlcGVhdD0hMSx0aGlzLnJlcGVhdFRpbWU9MCx0aGlzLmRvd25Db3VudD0wLHRoaXMudXBDb3VudD0xMDB9c2V0RG93bih0KXt0aGlzLmRvd24hPT10JiYodGhpcy5kb3duPXQsdGhpcy5yZXBlYXQ9ITEsdGhpcy5kb3duVGltZT10aGlzLnJlcGVhdFRpbWU9cGVyZm9ybWFuY2Uubm93KCkpfXVwZGF0ZSh0KXt0aGlzLnJlcGVhdD0hMSx0aGlzLmRvd24/KHRoaXMuZG93bkNvdW50KyssdGhpcy51cENvdW50PTAsdC10aGlzLmRvd25UaW1lPj0yMDAmJnQtdGhpcy5yZXBlYXRUaW1lPj02Ni42NjY2NjY2NjY2NjY2NyYmKHRoaXMucmVwZWF0PSEwLHRoaXMucmVwZWF0VGltZT10KSk6KHRoaXMuZG93bkNvdW50PTAsdGhpcy51cENvdW50KyspfWlzUHJlc3NlZCgpe3JldHVybiAxPT09dGhpcy5kb3duQ291bnR8fHRoaXMucmVwZWF0fWlzQ2xpY2tlZCgpe3JldHVybiAxPT09dGhpcy51cENvdW50fX1jb25zdCBtPTI1NjtjbGFzcyB4e2NvbnN0cnVjdG9yKHQpe3ZhciBpLGUscztzPXZvaWQgMCwoZT1cImtleXNcIilpbihpPXRoaXMpP09iamVjdC5kZWZpbmVQcm9wZXJ0eShpLGUse3ZhbHVlOnMsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTppW2VdPXMsdGhpcy5rZXlzPW5ldyBBcnJheShtKTtmb3IobGV0IHQ9MDt0PG07dCsrKXRoaXMua2V5c1t0XT1uZXcgeTt0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsKHQ9PnRoaXMuc2V0S2V5KHQsITApKSksdC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwodD0+dGhpcy5zZXRLZXkodCwhMSkpKX1zZXRLZXkodCxpKXtjb25zdCBlPXQua2V5Q29kZTtlIT09UC5WS19GMTEmJih0LnN0b3BQcm9wYWdhdGlvbigpLHQucHJldmVudERlZmF1bHQoKSxlPj0wJiZlPG0mJnRoaXMua2V5c1tlXS5zZXREb3duKGkpKX11cGRhdGVLZXlzKHQpe2ZvcihsZXQgaT0wO2k8bTtpKyspdGhpcy5rZXlzW2ldLnVwZGF0ZSh0KX1nZXRLZXkodCl7cmV0dXJuIHQ+PTAmJnQ8bT90aGlzLmtleXNbdF06bnVsbH19bGV0IFA7IWZ1bmN0aW9uKHQpe3RbdC5WS19DQU5DRUw9M109XCJWS19DQU5DRUxcIix0W3QuVktfSEVMUD02XT1cIlZLX0hFTFBcIix0W3QuVktfQkFDS19TUEFDRT04XT1cIlZLX0JBQ0tfU1BBQ0VcIix0W3QuVktfVEFCPTldPVwiVktfVEFCXCIsdFt0LlZLX0NMRUFSPTEyXT1cIlZLX0NMRUFSXCIsdFt0LlZLX0VOVEVSPTEzXT1cIlZLX0VOVEVSXCIsdFt0LlZLX1NISUZUPTE2XT1cIlZLX1NISUZUXCIsdFt0LlZLX0NPTlRST0w9MTddPVwiVktfQ09OVFJPTFwiLHRbdC5WS19BTFQ9MThdPVwiVktfQUxUXCIsdFt0LlZLX1BBVVNFPTE5XT1cIlZLX1BBVVNFXCIsdFt0LlZLX0NBUFNfTE9DSz0yMF09XCJWS19DQVBTX0xPQ0tcIix0W3QuVktfRVNDQVBFPTI3XT1cIlZLX0VTQ0FQRVwiLHRbdC5WS19TUEFDRT0zMl09XCJWS19TUEFDRVwiLHRbdC5WS19QQUdFX1VQPTMzXT1cIlZLX1BBR0VfVVBcIix0W3QuVktfUEFHRV9ET1dOPTM0XT1cIlZLX1BBR0VfRE9XTlwiLHRbdC5WS19FTkQ9MzVdPVwiVktfRU5EXCIsdFt0LlZLX0hPTUU9MzZdPVwiVktfSE9NRVwiLHRbdC5WS19MRUZUPTM3XT1cIlZLX0xFRlRcIix0W3QuVktfVVA9MzhdPVwiVktfVVBcIix0W3QuVktfUklHSFQ9MzldPVwiVktfUklHSFRcIix0W3QuVktfRE9XTj00MF09XCJWS19ET1dOXCIsdFt0LlZLX1BSSU5UU0NSRUVOPTQ0XT1cIlZLX1BSSU5UU0NSRUVOXCIsdFt0LlZLX0lOU0VSVD00NV09XCJWS19JTlNFUlRcIix0W3QuVktfREVMRVRFPTQ2XT1cIlZLX0RFTEVURVwiLHRbdC5WS18wPTQ4XT1cIlZLXzBcIix0W3QuVktfMT00OV09XCJWS18xXCIsdFt0LlZLXzI9NTBdPVwiVktfMlwiLHRbdC5WS18zPTUxXT1cIlZLXzNcIix0W3QuVktfND01Ml09XCJWS180XCIsdFt0LlZLXzU9NTNdPVwiVktfNVwiLHRbdC5WS182PTU0XT1cIlZLXzZcIix0W3QuVktfNz01NV09XCJWS183XCIsdFt0LlZLXzg9NTZdPVwiVktfOFwiLHRbdC5WS185PTU3XT1cIlZLXzlcIix0W3QuVktfQ09MT049NThdPVwiVktfQ09MT05cIix0W3QuVktfU0VNSUNPTE9OPTU5XT1cIlZLX1NFTUlDT0xPTlwiLHRbdC5WS19MRVNTX1RIQU49NjBdPVwiVktfTEVTU19USEFOXCIsdFt0LlZLX0VRVUFMUz02MV09XCJWS19FUVVBTFNcIix0W3QuVktfR1JFQVRFUl9USEFOPTYyXT1cIlZLX0dSRUFURVJfVEhBTlwiLHRbdC5WS19RVUVTVElPTl9NQVJLPTYzXT1cIlZLX1FVRVNUSU9OX01BUktcIix0W3QuVktfQVQ9NjRdPVwiVktfQVRcIix0W3QuVktfQT02NV09XCJWS19BXCIsdFt0LlZLX0I9NjZdPVwiVktfQlwiLHRbdC5WS19DPTY3XT1cIlZLX0NcIix0W3QuVktfRD02OF09XCJWS19EXCIsdFt0LlZLX0U9NjldPVwiVktfRVwiLHRbdC5WS19GPTcwXT1cIlZLX0ZcIix0W3QuVktfRz03MV09XCJWS19HXCIsdFt0LlZLX0g9NzJdPVwiVktfSFwiLHRbdC5WS19JPTczXT1cIlZLX0lcIix0W3QuVktfSj03NF09XCJWS19KXCIsdFt0LlZLX0s9NzVdPVwiVktfS1wiLHRbdC5WS19MPTc2XT1cIlZLX0xcIix0W3QuVktfTT03N109XCJWS19NXCIsdFt0LlZLX049NzhdPVwiVktfTlwiLHRbdC5WS19PPTc5XT1cIlZLX09cIix0W3QuVktfUD04MF09XCJWS19QXCIsdFt0LlZLX1E9ODFdPVwiVktfUVwiLHRbdC5WS19SPTgyXT1cIlZLX1JcIix0W3QuVktfUz04M109XCJWS19TXCIsdFt0LlZLX1Q9ODRdPVwiVktfVFwiLHRbdC5WS19VPTg1XT1cIlZLX1VcIix0W3QuVktfVj04Nl09XCJWS19WXCIsdFt0LlZLX1c9ODddPVwiVktfV1wiLHRbdC5WS19YPTg4XT1cIlZLX1hcIix0W3QuVktfWT04OV09XCJWS19ZXCIsdFt0LlZLX1o9OTBdPVwiVktfWlwiLHRbdC5WS19DT05URVhUX01FTlU9OTNdPVwiVktfQ09OVEVYVF9NRU5VXCIsdFt0LlZLX05VTVBBRDA9OTZdPVwiVktfTlVNUEFEMFwiLHRbdC5WS19OVU1QQUQxPTk3XT1cIlZLX05VTVBBRDFcIix0W3QuVktfTlVNUEFEMj05OF09XCJWS19OVU1QQUQyXCIsdFt0LlZLX05VTVBBRDM9OTldPVwiVktfTlVNUEFEM1wiLHRbdC5WS19OVU1QQUQ0PTEwMF09XCJWS19OVU1QQUQ0XCIsdFt0LlZLX05VTVBBRDU9MTAxXT1cIlZLX05VTVBBRDVcIix0W3QuVktfTlVNUEFENj0xMDJdPVwiVktfTlVNUEFENlwiLHRbdC5WS19OVU1QQUQ3PTEwM109XCJWS19OVU1QQUQ3XCIsdFt0LlZLX05VTVBBRDg9MTA0XT1cIlZLX05VTVBBRDhcIix0W3QuVktfTlVNUEFEOT0xMDVdPVwiVktfTlVNUEFEOVwiLHRbdC5WS19NVUxUSVBMWT0xMDZdPVwiVktfTVVMVElQTFlcIix0W3QuVktfQUREPTEwN109XCJWS19BRERcIix0W3QuVktfU0VQQVJBVE9SPTEwOF09XCJWS19TRVBBUkFUT1JcIix0W3QuVktfU1VCVFJBQ1Q9MTA5XT1cIlZLX1NVQlRSQUNUXCIsdFt0LlZLX0RFQ0lNQUw9MTEwXT1cIlZLX0RFQ0lNQUxcIix0W3QuVktfRElWSURFPTExMV09XCJWS19ESVZJREVcIix0W3QuVktfRjE9MTEyXT1cIlZLX0YxXCIsdFt0LlZLX0YyPTExM109XCJWS19GMlwiLHRbdC5WS19GMz0xMTRdPVwiVktfRjNcIix0W3QuVktfRjQ9MTE1XT1cIlZLX0Y0XCIsdFt0LlZLX0Y1PTExNl09XCJWS19GNVwiLHRbdC5WS19GNj0xMTddPVwiVktfRjZcIix0W3QuVktfRjc9MTE4XT1cIlZLX0Y3XCIsdFt0LlZLX0Y4PTExOV09XCJWS19GOFwiLHRbdC5WS19GOT0xMjBdPVwiVktfRjlcIix0W3QuVktfRjEwPTEyMV09XCJWS19GMTBcIix0W3QuVktfRjExPTEyMl09XCJWS19GMTFcIix0W3QuVktfRjEyPTEyM109XCJWS19GMTJcIix0W3QuVktfRjEzPTEyNF09XCJWS19GMTNcIix0W3QuVktfRjE0PTEyNV09XCJWS19GMTRcIix0W3QuVktfRjE1PTEyNl09XCJWS19GMTVcIix0W3QuVktfRjE2PTEyN109XCJWS19GMTZcIix0W3QuVktfRjE3PTEyOF09XCJWS19GMTdcIix0W3QuVktfRjE4PTEyOV09XCJWS19GMThcIix0W3QuVktfRjE5PTEzMF09XCJWS19GMTlcIix0W3QuVktfRjIwPTEzMV09XCJWS19GMjBcIix0W3QuVktfRjIxPTEzMl09XCJWS19GMjFcIix0W3QuVktfRjIyPTEzM109XCJWS19GMjJcIix0W3QuVktfRjIzPTEzNF09XCJWS19GMjNcIix0W3QuVktfRjI0PTEzNV09XCJWS19GMjRcIix0W3QuVktfTlVNX0xPQ0s9MTQ0XT1cIlZLX05VTV9MT0NLXCIsdFt0LlZLX1NDUk9MTF9MT0NLPTE0NV09XCJWS19TQ1JPTExfTE9DS1wiLHRbdC5WS19DSVJDVU1GTEVYPTE2MF09XCJWS19DSVJDVU1GTEVYXCIsdFt0LlZLX0VYQ0xBTUFUSU9OPTE2MV09XCJWS19FWENMQU1BVElPTlwiLHRbdC5WS19ET1VCTEVfUVVPVEU9MTYyXT1cIlZLX0RPVUJMRV9RVU9URVwiLHRbdC5WS19IQVNIPTE2M109XCJWS19IQVNIXCIsdFt0LlZLX0RPTExBUj0xNjRdPVwiVktfRE9MTEFSXCIsdFt0LlZLX1BFUkNFTlQ9MTY1XT1cIlZLX1BFUkNFTlRcIix0W3QuVktfQU1QRVJTQU5EPTE2Nl09XCJWS19BTVBFUlNBTkRcIix0W3QuVktfVU5ERVJTQ09SRT0xNjddPVwiVktfVU5ERVJTQ09SRVwiLHRbdC5WS19PUEVOX1BBUkVOPTE2OF09XCJWS19PUEVOX1BBUkVOXCIsdFt0LlZLX0NMT1NFX1BBUkVOPTE2OV09XCJWS19DTE9TRV9QQVJFTlwiLHRbdC5WS19BU1RFUklTSz0xNzBdPVwiVktfQVNURVJJU0tcIix0W3QuVktfUExVUz0xNzFdPVwiVktfUExVU1wiLHRbdC5WS19QSVBFPTE3Ml09XCJWS19QSVBFXCIsdFt0LlZLX0hZUEhFTl9NSU5VUz0xNzNdPVwiVktfSFlQSEVOX01JTlVTXCIsdFt0LlZLX09QRU5fQ1VSTFlfQlJBQ0tFVD0xNzRdPVwiVktfT1BFTl9DVVJMWV9CUkFDS0VUXCIsdFt0LlZLX0NMT1NFX0NVUkxZX0JSQUNLRVQ9MTc1XT1cIlZLX0NMT1NFX0NVUkxZX0JSQUNLRVRcIix0W3QuVktfVElMREU9MTc2XT1cIlZLX1RJTERFXCIsdFt0LlZLX0NPTU1BPTE4OF09XCJWS19DT01NQVwiLHRbdC5WS19QRVJJT0Q9MTkwXT1cIlZLX1BFUklPRFwiLHRbdC5WS19TTEFTSD0xOTFdPVwiVktfU0xBU0hcIix0W3QuVktfQkFDS19RVU9URT0xOTJdPVwiVktfQkFDS19RVU9URVwiLHRbdC5WS19PUEVOX0JSQUNLRVQ9MjE5XT1cIlZLX09QRU5fQlJBQ0tFVFwiLHRbdC5WS19CQUNLX1NMQVNIPTIyMF09XCJWS19CQUNLX1NMQVNIXCIsdFt0LlZLX0NMT1NFX0JSQUNLRVQ9MjIxXT1cIlZLX0NMT1NFX0JSQUNLRVRcIix0W3QuVktfUVVPVEU9MjIyXT1cIlZLX1FVT1RFXCIsdFt0LlZLX01FVEE9MjI0XT1cIlZLX01FVEFcIix0W3QuVktfQUxUR1I9MjI1XT1cIlZLX0FMVEdSXCIsdFt0LlZLX1dJTj05MV09XCJWS19XSU5cIix0W3QuVktfS0FOQT0yMV09XCJWS19LQU5BXCIsdFt0LlZLX0hBTkdVTD0yMV09XCJWS19IQU5HVUxcIix0W3QuVktfRUlTVT0yMl09XCJWS19FSVNVXCIsdFt0LlZLX0pVTkpBPTIzXT1cIlZLX0pVTkpBXCIsdFt0LlZLX0ZJTkFMPTI0XT1cIlZLX0ZJTkFMXCIsdFt0LlZLX0hBTkpBPTI1XT1cIlZLX0hBTkpBXCIsdFt0LlZLX0tBTkpJPTI1XT1cIlZLX0tBTkpJXCIsdFt0LlZLX0NPTlZFUlQ9MjhdPVwiVktfQ09OVkVSVFwiLHRbdC5WS19OT05DT05WRVJUPTI5XT1cIlZLX05PTkNPTlZFUlRcIix0W3QuVktfQUNDRVBUPTMwXT1cIlZLX0FDQ0VQVFwiLHRbdC5WS19NT0RFQ0hBTkdFPTMxXT1cIlZLX01PREVDSEFOR0VcIix0W3QuVktfU0VMRUNUPTQxXT1cIlZLX1NFTEVDVFwiLHRbdC5WS19QUklOVD00Ml09XCJWS19QUklOVFwiLHRbdC5WS19FWEVDVVRFPTQzXT1cIlZLX0VYRUNVVEVcIix0W3QuVktfU0xFRVA9OTVdPVwiVktfU0xFRVBcIn0oUHx8KFA9e30pKTtjbGFzcyBIIGV4dGVuZHMgYntjb25zdHJ1Y3Rvcih0LGkpe2NvbnN0IGU9aS5zcGxpdChcIlxcblwiKTtsZXQgcz10Lmxlbmd0aDtmb3IobGV0IHQ9MDt0PGUubGVuZ3RoO3QrKylzPU1hdGgubWF4KHMsZVt0XS5sZW5ndGgpO2NvbnN0IHI9ZS5sZW5ndGg7dmFyIGgsbyxuO3N1cGVyKG5ldyBDKDAsMCxzLHIpLHQpLG49dm9pZCAwLChvPVwibGluZXNcIilpbihoPXRoaXMpP09iamVjdC5kZWZpbmVQcm9wZXJ0eShoLG8se3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTpoW29dPW4sdGhpcy5saW5lcz1lfWRyYXdDb250ZW50cyh0LGkpe2ZvcihsZXQgZT0wO2U8dGhpcy5saW5lcy5sZW5ndGg7ZSsrKXQuZHJhd1N0cmluZyhpLngsaS55K2UsdGhpcy5saW5lc1tlXSl9aGFuZGxlSW5wdXQodCxpKXtyZXR1cm4gdC5pc0tleVByZXNzZWQoUC5WS19FU0NBUEUpfX1mdW5jdGlvbiBGKHQsaSxlKXtyZXR1cm4gaSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse3ZhbHVlOmUsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2ldPWUsdH1jbGFzcyBNIGV4dGVuZHMgYntjb25zdHJ1Y3Rvcih0LGksZSl7bGV0IHM9dC5sZW5ndGg7Zm9yKGxldCB0PTA7dDxpLmxlbmd0aDt0Kyspcz1NYXRoLm1heChzLGlbdF0ubGVuZ3RoKzQpO2NvbnN0IHI9aS5sZW5ndGg7c3VwZXIobmV3IEMoMCwwLHMsciksdCksRih0aGlzLFwib3B0aW9uc1wiLHZvaWQgMCksRih0aGlzLFwiY2FsbGJhY2tcIix2b2lkIDApLEYodGhpcyxcImhvdmVySW5kZXhcIix2b2lkIDApLHRoaXMub3B0aW9ucz1pLHRoaXMuY2FsbGJhY2s9ZSx0aGlzLmhvdmVySW5kZXg9LTF9ZHJhd0NvbnRlbnRzKHQsaSl7Zm9yKGxldCBlPTA7ZTx0aGlzLm9wdGlvbnMubGVuZ3RoO2UrKyl7Y29uc3Qgcz1TdHJpbmcuZnJvbUNoYXJDb2RlKDY1K2UpK1wiIC0gXCIrdGhpcy5vcHRpb25zW2VdO2U9PT10aGlzLmhvdmVySW5kZXg/dC5kcmF3U3RyaW5nKGkueCxpLnkrZSxzLEEuQkxBQ0ssQS5XSElURSk6dC5kcmF3U3RyaW5nKGkueCxpLnkrZSxzLEEuV0hJVEUsQS5CTEFDSyl9fWhhbmRsZUlucHV0KHQsaSl7aWYodGhpcy5ob3ZlckluZGV4PS0xLHQubW91c2UueD49aS54JiZ0Lm1vdXNlLng8aS54K3RoaXMuY29udGVudHNSZWN0LndpZHRoJiZ0Lm1vdXNlLnk+PWkueSYmdC5tb3VzZS55PGkueSt0aGlzLmNvbnRlbnRzUmVjdC5oZWlnaHQmJih0aGlzLmhvdmVySW5kZXg9dC5tb3VzZS55LWkueSwxPT09dC5tb3VzZS5idXR0b25zWzBdLnVwQ291bnQpKXJldHVybiB0aGlzLmNhbGxiYWNrKHRoaXMuaG92ZXJJbmRleCksITA7Zm9yKGxldCBpPTA7aTx0aGlzLm9wdGlvbnMubGVuZ3RoO2krKylpZih0LmlzS2V5UHJlc3NlZChQLlZLX0EraSkpcmV0dXJuIHRoaXMuY2FsbGJhY2soaSksITA7cmV0dXJuIHQuaXNLZXlQcmVzc2VkKFAuVktfRVNDQVBFKX1pc01vdXNlT3Zlck9wdGlvbih0LGksZSl7cmV0dXJuIHQubW91c2UueD49aS54JiZ0Lm1vdXNlLng8aS54K3RoaXMuY29udGVudHNSZWN0LndpZHRoJiZ0Lm1vdXNlLnk9PT1pLnkrZX19Y29uc3QgRz1be2NoYXJDb2RlOmMuQkxPQ0tfVE9QX0hBTEYsYWN0aXZlOlsxLDEsMCwwXX0se2NoYXJDb2RlOmMuQkxPQ0tfUklHSFRfSEFMRixhY3RpdmU6WzAsMSwwLDFdfV07ZnVuY3Rpb24gWCh0LGkpe2NvbnN0IGU9bmV3IEltYWdlO2Uub25sb2FkPSgpPT57Y29uc3QgdD1lLndpZHRoLHM9ZS5oZWlnaHQscj1XKGUpLGg9bmV3IEsodCxzKTtsZXQgbz0wO2ZvcihsZXQgaT0wO2k8cztpKyspZm9yKGxldCBlPTA7ZTx0O2UrKyl7aC5nZXRDZWxsKGUsaSkuc2V0QmFja2dyb3VuZChhKHJbbysrXSxyW28rK10scltvKytdLHJbbysrXSkpfWkoaCl9LGUuc3JjPXR9ZnVuY3Rpb24gWSh0LGkpe2NvbnN0IGU9bmV3IEltYWdlO2Uub25sb2FkPSgpPT57Y29uc3QgdD1lLndpZHRoLHM9ZS5oZWlnaHQscj1XKGUpLGg9bmV3IEsodC8yLHMvMik7Zm9yKGxldCBpPTA7aTxzO2krPTIpZm9yKGxldCBlPTA7ZTx0O2UrPTIpayhoLHIsZSxpLHQpO2koaCl9LGUuc3JjPXR9ZnVuY3Rpb24gVyh0KXtjb25zdCBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7aS53aWR0aD10LndpZHRoLGkuaGVpZ2h0PXQuaGVpZ2h0O2NvbnN0IGU9aS5nZXRDb250ZXh0KFwiMmRcIik7cmV0dXJuIGUuZHJhd0ltYWdlKHQsMCwwKSxlLmdldEltYWdlRGF0YSgwLDAsdC53aWR0aCx0LmhlaWdodCkuZGF0YX1mdW5jdGlvbiBrKHQsaSxlLHMscil7Y29uc3QgaD00KihzKnIrZSksbz00KihzKnIrZSsxKSxuPTQqKChzKzEpKnIrZSksXz00KigocysxKSpyK2UrMSksYT1bW2lbaF0saVtoKzFdLGlbaCsyXV0sW2lbb10saVtvKzFdLGlbbysyXV0sW2lbbl0saVtuKzFdLGlbbisyXV0sW2lbX10saVtfKzFdLGlbXysyXV1dO2xldCBkPU51bWJlci5NQVhfVkFMVUUsQT0wLGw9bnVsbCxFPW51bGw7Zm9yKGxldCB0PTA7dDxHLmxlbmd0aDt0Kyspe2NvbnN0IGk9R1t0XSxlPVEoaS5hY3RpdmUsYSk7ZS5lcnJvcjxkJiYoZD1lLmVycm9yLEE9aS5jaGFyQ29kZSxsPWUuYmcsRT1lLmZnKX10LmRyYXdDaGFyKGUvMixzLzIsQSx6KEUpLHoobCkpfWZ1bmN0aW9uIFEodCxpKXtjb25zdCBlPVtbMCwwLDBdLFswLDAsMF1dLHM9W1swLDAsMF0sWzAsMCwwXV0scj1bMCwwXTtmb3IobGV0IHM9MDtzPDQ7cysrKXtmb3IobGV0IHI9MDtyPDM7cisrKWVbdFtzXV1bcl0rPWlbc11bcl07clt0W3NdXSsrfWZvcihsZXQgdD0wO3Q8Mjt0KyspZm9yKGxldCBpPTA7aTwzO2krKylzW3RdW2ldPWVbdF1baV0vclt0XTtsZXQgaD0wO2ZvcihsZXQgZT0wO2U8NDtlKyspe2xldCByPTA7Zm9yKGxldCBoPTA7aDwzO2grKyl7Y29uc3Qgbz1pW2VdW2hdLXNbdFtlXV1baF07cis9bypvfWgrPU1hdGguc3FydChyKX1yZXR1cm57Ymc6c1swXSxmZzpzWzFdLGVycm9yOmh9fWZ1bmN0aW9uIHoodCl7cmV0dXJuIGEodFswXSx0WzFdLHRbMl0pfWZ1bmN0aW9uIGoodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fWNsYXNzIFp7Y29uc3RydWN0b3IodCl7aih0aGlzLFwiZWxcIix2b2lkIDApLGoodGhpcyxcIndpZHRoXCIsdm9pZCAwKSxqKHRoaXMsXCJoZWlnaHRcIix2b2lkIDApLGoodGhpcyxcInByZXZYXCIsdm9pZCAwKSxqKHRoaXMsXCJwcmV2WVwiLHZvaWQgMCksaih0aGlzLFwieFwiLHZvaWQgMCksaih0aGlzLFwieVwiLHZvaWQgMCksaih0aGlzLFwiZHhcIix2b2lkIDApLGoodGhpcyxcImR5XCIsdm9pZCAwKSxqKHRoaXMsXCJidXR0b25zXCIsdm9pZCAwKSx0aGlzLmVsPXQuY2FudmFzLHRoaXMud2lkdGg9dC53aWR0aCx0aGlzLmhlaWdodD10LmhlaWdodCx0aGlzLnByZXZYPTAsdGhpcy5wcmV2WT0wLHRoaXMueD0wLHRoaXMueT0wLHRoaXMuZHg9MCx0aGlzLmR5PTAsdGhpcy5idXR0b25zPVtuZXcgeSxuZXcgeSxuZXcgeV07Y29uc3QgaT10aGlzLmVsO2kuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCh0PT50aGlzLmhhbmRsZUV2ZW50KHQpKSksaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCh0PT50aGlzLmhhbmRsZUV2ZW50KHQpKSksaS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsKHQ9PnRoaXMuaGFuZGxlRXZlbnQodCkpKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCh0PT50aGlzLmhhbmRsZUV2ZW50KHQpKSk7Y29uc3QgZT10aGlzLmhhbmRsZVRvdWNoRXZlbnQuYmluZCh0aGlzKTtpLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsZSksaS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixlKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLGUpLGkuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGUpfWhhbmRsZVRvdWNoRXZlbnQodCl7aWYodC5zdG9wUHJvcGFnYXRpb24oKSx0LnByZXZlbnREZWZhdWx0KCksdC50b3VjaGVzLmxlbmd0aD4wKXtjb25zdCBpPXQudG91Y2hlc1swXTt0aGlzLnVwZGF0ZVBvc2l0aW9uKGkuY2xpZW50WCxpLmNsaWVudFkpLHRoaXMuYnV0dG9uc1swXS5zZXREb3duKCEwKX1lbHNlIHRoaXMuYnV0dG9uc1swXS5zZXREb3duKCExKX1oYW5kbGVFdmVudCh0KXt0LnN0b3BQcm9wYWdhdGlvbigpLHQucHJldmVudERlZmF1bHQoKSx0aGlzLnVwZGF0ZVBvc2l0aW9uKHQuY2xpZW50WCx0LmNsaWVudFkpLFwibW91c2Vkb3duXCI9PT10LnR5cGUmJih0aGlzLmJ1dHRvbnNbdC5idXR0b25dLnNldERvd24oITApLHRoaXMuZWwuZm9jdXMoKSksXCJtb3VzZXVwXCI9PT10LnR5cGUmJnRoaXMuYnV0dG9uc1t0LmJ1dHRvbl0uc2V0RG93bighMSl9dXBkYXRlUG9zaXRpb24odCxpKXtsZXQgZT10aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2NvbnN0IHM9dGhpcy53aWR0aC90aGlzLmhlaWdodCxyPWUud2lkdGgvZS5oZWlnaHQ7aWYoci1zPi4wMSl7Y29uc3QgdD1zKmUuaGVpZ2h0LGk9ZS53aWR0aC10O2U9bmV3IEMoTWF0aC5mbG9vcihpLzIpLDAsdCxlLmhlaWdodCl9aWYoci1zPC0uMDEpe2NvbnN0IHQ9ZS53aWR0aC9zLGk9ZS5oZWlnaHQtdDtlPW5ldyBDKDAsTWF0aC5mbG9vcihpLzIpLGUud2lkdGgsdCl9dGhpcy54PXRoaXMud2lkdGgqKHQtZS5sZWZ0KS9lLndpZHRofDAsdGhpcy55PXRoaXMuaGVpZ2h0KihpLWUudG9wKS9lLmhlaWdodHwwfXVwZGF0ZSh0KXt0aGlzLmR4PXRoaXMueC10aGlzLnByZXZYLHRoaXMuZHk9dGhpcy55LXRoaXMucHJldlksdGhpcy5wcmV2WD10aGlzLngsdGhpcy5wcmV2WT10aGlzLnk7Zm9yKGxldCBpPTA7aTx0aGlzLmJ1dHRvbnMubGVuZ3RoO2krKyl0aGlzLmJ1dHRvbnNbaV0udXBkYXRlKHQpfX1jb25zdCBKPVstMSwwLDEsLTEsMSwtMSwwLDFdLHE9Wy0xLC0xLC0xLDAsMCwxLDEsMV0sJD1bMS40LDEsMS40LDEsMSwxLjQsMSwxLjRdO2xldCB0dD0wO2Z1bmN0aW9uIGl0KHQsaSxlLHMpe3R0Kys7Y29uc3Qgcj10LmdyaWRbaS55XVtpLnhdO3IucGF0aElkPXR0LHIuZz0wLHIuaD1NYXRoLmh5cG90KGkueC1lLngsaS55LWUueSksci5wcmV2PW51bGw7Y29uc3QgaD1uZXcgc3QoW3JdKTtmb3IoO2guc2l6ZSgpPjA7KXtjb25zdCBpPWgucG9wKCk7aWYoaS54PT09ZS54JiZpLnk9PT1lLnkpcmV0dXJuIGV0KGkpO2ZvcihsZXQgcj0wO3I8Si5sZW5ndGg7cisrKXtjb25zdCBvPWkueCtKW3JdLG49aS55K3Fbcl07aWYobz49MCYmbzx0LndpZHRoJiZuPj0wJiZuPHQuaGVpZ2h0KXtjb25zdCBfPXQuZ3JpZFtuXVtvXTtpZihfLmJsb2NrZWQmJl8uZXhwbG9yZWQmJihvIT09ZS54fHxuIT09ZS55KSljb250aW51ZTtfLnBhdGhJZCE9PXR0JiYoXy5wYXRoSWQ9dHQsXy5nPTEvMCxfLmg9TWF0aC5oeXBvdChvLWUueCxuLWUueSksXy5wcmV2PW51bGwpO2NvbnN0IGE9aS5nKyRbcl07YTxfLmcmJmE8PXMmJihfLmc9YSxfLnByZXY9aSxoLmluc2VydChfKSl9fX19ZnVuY3Rpb24gZXQodCl7Y29uc3QgaT1bXTtsZXQgZT10O2Zvcig7ZTspaS5wdXNoKGUpLGU9ZS5wcmV2O3JldHVybiBpLnJldmVyc2UoKSxpfWNsYXNzIHN0e2NvbnN0cnVjdG9yKHQpe3ZhciBpLGUscztzPXZvaWQgMCwoZT1cInZhbHVlc1wiKWluKGk9dGhpcyk/T2JqZWN0LmRlZmluZVByb3BlcnR5KGksZSx7dmFsdWU6cyxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmlbZV09cyx0aGlzLnZhbHVlcz10fWluc2VydCh0KXtjb25zdCBpPXRoaXMudmFsdWVzO2xldCBlPTAscz1pLmxlbmd0aCxyPTA7Zm9yKDtlPHM7KXtjb25zdCBoPWUrcz4+PjEsbz1pW2hdO28uZytvLmg+dC5nK3QuaD8oZT1oKzEscj1lKToocz1oLHI9cyl9aS5zcGxpY2UociwwLHQpfXBvcCgpe3JldHVybiB0aGlzLnZhbHVlcy5wb3AoKX1zaXplKCl7cmV0dXJuIHRoaXMudmFsdWVzLmxlbmd0aH19ZnVuY3Rpb24gcnQodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fWNsYXNzIGh0e2NvbnN0cnVjdG9yKHQpe3J0KHRoaXMsXCJtXCIsdm9pZCAwKSxydCh0aGlzLFwiYVwiLHZvaWQgMCkscnQodGhpcyxcImNcIix2b2lkIDApLHJ0KHRoaXMsXCJzdGF0ZVwiLHZvaWQgMCksdGhpcy5tPTIxNDc0ODM2NDgsdGhpcy5hPTExMDM1MTUyNDUsdGhpcy5jPTEyMzQ1LHRoaXMuc3RhdGU9dHx8MX1uZXh0SW50KCl7cmV0dXJuIHRoaXMuc3RhdGU9KHRoaXMuYSp0aGlzLnN0YXRlK3RoaXMuYykldGhpcy5tLHRoaXMuc3RhdGV9bmV4dEZsb2F0KCl7cmV0dXJuIHRoaXMubmV4dEludCgpLyh0aGlzLm0tMSl9bmV4dFJhbmdlKHQsaSl7Y29uc3QgZT1pLXQscz10Kyh0aGlzLm5leHRJbnQoKS90aGlzLm0qZXwwKTtpZihpc05hTihzKSl0aHJvdyBuZXcgRXJyb3IoXCJyYW5kIG5hblwiKTtyZXR1cm4gc31jaG9vc2VJbmRleCh0KXtjb25zdCBpPXQucmVkdWNlKCgodCxpKT0+dCtpKSksZT10aGlzLm5leHRSYW5nZSgxLGkrMSk7bGV0IHM9MDtmb3IobGV0IGk9MDtpPHQubGVuZ3RoO2krKylpZihzKz10W2ldLGU8PXMpcmV0dXJuIGk7cmV0dXJuIHQubGVuZ3RoLTF9Y2hvb3NlS2V5KHQpe2NvbnN0IGk9T2JqZWN0LmtleXModCksZT1pLm1hcCgoaT0+dFtpXSkpO3JldHVybiBpW3RoaXMuY2hvb3NlSW5kZXgoZSldfX1mdW5jdGlvbiBvdCh0LGksZSl7cmV0dXJuIGkgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxpLHt2YWx1ZTplLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtpXT1lLHR9ZnVuY3Rpb24gbnQodCxpKXtyZXR1cm4gdC9pKjItMX1jb25zdCBfdD17Zm9udDpWfTtjbGFzcyBhdCBleHRlbmRzIEt7Y29uc3RydWN0b3IodCxpLGUscyl7c3VwZXIoaSxlKSxvdCh0aGlzLFwiY2FudmFzXCIsdm9pZCAwKSxvdCh0aGlzLFwiZm9udFwiLHZvaWQgMCksb3QodGhpcyxcInBpeGVsV2lkdGhcIix2b2lkIDApLG90KHRoaXMsXCJwaXhlbEhlaWdodFwiLHZvaWQgMCksb3QodGhpcyxcImtleXNcIix2b2lkIDApLG90KHRoaXMsXCJtb3VzZVwiLHZvaWQgMCksb3QodGhpcyxcImdsXCIsdm9pZCAwKSxvdCh0aGlzLFwicHJvZ3JhbVwiLHZvaWQgMCksb3QodGhpcyxcInBvc2l0aW9uQXR0cmliTG9jYXRpb25cIix2b2lkIDApLG90KHRoaXMsXCJ0ZXh0dXJlQXR0cmliTG9jYXRpb25cIix2b2lkIDApLG90KHRoaXMsXCJmZ0NvbG9yQXR0cmliTG9jYXRpb25cIix2b2lkIDApLG90KHRoaXMsXCJiZ0NvbG9yQXR0cmliTG9jYXRpb25cIix2b2lkIDApLG90KHRoaXMsXCJwb3NpdGlvbnNBcnJheVwiLHZvaWQgMCksb3QodGhpcyxcImluZGV4QXJyYXlcIix2b2lkIDApLG90KHRoaXMsXCJ0ZXh0dXJlQXJyYXlcIix2b2lkIDApLG90KHRoaXMsXCJmb3JlZ3JvdW5kVWludDhBcnJheVwiLHZvaWQgMCksb3QodGhpcyxcImZvcmVncm91bmREYXRhVmlld1wiLHZvaWQgMCksb3QodGhpcyxcImJhY2tncm91bmRVaW50OEFycmF5XCIsdm9pZCAwKSxvdCh0aGlzLFwiYmFja2dyb3VuZERhdGFWaWV3XCIsdm9pZCAwKSxvdCh0aGlzLFwicG9zaXRpb25CdWZmZXJcIix2b2lkIDApLG90KHRoaXMsXCJpbmRleEJ1ZmZlclwiLHZvaWQgMCksb3QodGhpcyxcInRleHR1cmVCdWZmZXJcIix2b2lkIDApLG90KHRoaXMsXCJmb3JlZ3JvdW5kQnVmZmVyXCIsdm9pZCAwKSxvdCh0aGlzLFwiYmFja2dyb3VuZEJ1ZmZlclwiLHZvaWQgMCksb3QodGhpcyxcInRleHR1cmVcIix2b2lkIDApLG90KHRoaXMsXCJsYXN0UmVuZGVyVGltZVwiLHZvaWQgMCksb3QodGhpcyxcInJlbmRlckRlbHRhXCIsdm9pZCAwKSxvdCh0aGlzLFwiZnBzXCIsdm9pZCAwKSxvdCh0aGlzLFwiYXZlcmFnZUZwc1wiLHZvaWQgMCksb3QodGhpcyxcInVwZGF0ZVwiLHZvaWQgMCkscz1zfHxfdCx0aGlzLmNhbnZhcz10LHRoaXMuZm9udD1zLmZvbnR8fFYsdGhpcy5waXhlbFdpZHRoPWkqdGhpcy5mb250LmNoYXJXaWR0aCx0aGlzLnBpeGVsSGVpZ2h0PWUqdGhpcy5mb250LmNoYXJIZWlnaHQsdC53aWR0aD10aGlzLnBpeGVsV2lkdGgsdC5oZWlnaHQ9dGhpcy5waXhlbEhlaWdodCx0LnN0eWxlLmltYWdlUmVuZGVyaW5nPVwicGl4ZWxhdGVkXCIsdC5zdHlsZS5vdXRsaW5lPVwibm9uZVwiLHQudGFiSW5kZXg9MCx0aGlzLmhhbmRsZVJlc2l6ZSgpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsKCgpPT50aGlzLmhhbmRsZVJlc2l6ZSgpKSksdGhpcy5rZXlzPW5ldyB4KHQpLHRoaXMubW91c2U9bmV3IFoodGhpcyk7Y29uc3Qgcj10LmdldENvbnRleHQoXCJ3ZWJnbFwiLHthbnRpYWxpYXM6ITF9KTtpZighcil0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaW5pdGlhbGl6ZSBXZWJHTC4gWW91ciBicm93c2VyIG1heSBub3Qgc3VwcG9ydCBpdC5cIik7Y29uc3QgaD1yLmNyZWF0ZVByb2dyYW0oKTtpZighaCl0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaW5pdGlhbGl6ZSBXZWJHTC4gWW91ciBicm93c2VyIG1heSBub3Qgc3VwcG9ydCBpdC5cIik7dGhpcy5nbD1yLHRoaXMucHJvZ3JhbT1oLHIuYXR0YWNoU2hhZGVyKGgsdGhpcy5idWlsZFNoYWRlcihyLlZFUlRFWF9TSEFERVIsXCJhdHRyaWJ1dGUgdmVjMiBhO2F0dHJpYnV0ZSB2ZWMyIGI7YXR0cmlidXRlIHZlYzMgYzthdHRyaWJ1dGUgdmVjMyBkO3ZhcnlpbmcgaGlnaHAgdmVjMiBlO3ZhcnlpbmcgaGlnaHAgdmVjNCBmO3ZhcnlpbmcgaGlnaHAgdmVjNCBnO3ZvaWQgbWFpbih2b2lkKXtnbF9Qb3NpdGlvbj12ZWM0KGEueCxhLnksMCwxKTtlPWIvMTYuMDtmPXZlYzQoYy5yLGMuZyxjLmIsMSk7Zz12ZWM0KGQucixkLmcsZC5iLDEpO31cIikpLHIuYXR0YWNoU2hhZGVyKGgsdGhpcy5idWlsZFNoYWRlcihyLkZSQUdNRU5UX1NIQURFUixcInZhcnlpbmcgaGlnaHAgdmVjMiBlO3ZhcnlpbmcgaGlnaHAgdmVjNCBmO3ZhcnlpbmcgaGlnaHAgdmVjNCBnO3VuaWZvcm0gYm9vbCBoO3VuaWZvcm0gc2FtcGxlcjJEIHM7dm9pZCBtYWluKHZvaWQpe2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQocyxlKTtpZihoKXtpZihnbF9GcmFnQ29sb3IuYTwwLjEpe2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQocyxnLnJnKjE2LjArZnJhY3QoZSoxNi4wKS8xNi4wKTt9fWVsc2V7aWYoZ2xfRnJhZ0NvbG9yLnI8MC4xKSB7Z2xfRnJhZ0NvbG9yPWc7fSBlbHNlIHtnbF9GcmFnQ29sb3I9Zjt9fX1cIikpLHIubGlua1Byb2dyYW0oaCksci51c2VQcm9ncmFtKGgpLHRoaXMuZm9udC5ncmFwaGljYWwmJnIudW5pZm9ybTFpKHIuZ2V0VW5pZm9ybUxvY2F0aW9uKGgsXCJoXCIpLDEpLHRoaXMucG9zaXRpb25BdHRyaWJMb2NhdGlvbj10aGlzLmdldEF0dHJpYkxvY2F0aW9uKFwiYVwiKSx0aGlzLnRleHR1cmVBdHRyaWJMb2NhdGlvbj10aGlzLmdldEF0dHJpYkxvY2F0aW9uKFwiYlwiKSx0aGlzLmZnQ29sb3JBdHRyaWJMb2NhdGlvbj10aGlzLmdldEF0dHJpYkxvY2F0aW9uKFwiY1wiKSx0aGlzLmJnQ29sb3JBdHRyaWJMb2NhdGlvbj10aGlzLmdldEF0dHJpYkxvY2F0aW9uKFwiZFwiKTtjb25zdCBvPWkqZTt0aGlzLnBvc2l0aW9uc0FycmF5PW5ldyBGbG9hdDMyQXJyYXkoMypvKjQpLHRoaXMuaW5kZXhBcnJheT1uZXcgVWludDE2QXJyYXkoNipvKSx0aGlzLnRleHR1cmVBcnJheT1uZXcgRmxvYXQzMkFycmF5KDIqbyo0KSx0aGlzLmZvcmVncm91bmRVaW50OEFycmF5PW5ldyBVaW50OEFycmF5KDQqbyo0KSx0aGlzLmZvcmVncm91bmREYXRhVmlldz1uZXcgRGF0YVZpZXcodGhpcy5mb3JlZ3JvdW5kVWludDhBcnJheS5idWZmZXIpLHRoaXMuYmFja2dyb3VuZFVpbnQ4QXJyYXk9bmV3IFVpbnQ4QXJyYXkoNCpvKjQpLHRoaXMuYmFja2dyb3VuZERhdGFWaWV3PW5ldyBEYXRhVmlldyh0aGlzLmJhY2tncm91bmRVaW50OEFycmF5LmJ1ZmZlcik7bGV0IG49MCxfPTAsYT0wO2ZvcihsZXQgdD0wO3Q8ZTt0KyspZm9yKGxldCBzPTA7czxpO3MrKyl0aGlzLnBvc2l0aW9uc0FycmF5W24rK109bnQocyxpKSx0aGlzLnBvc2l0aW9uc0FycmF5W24rK109LW50KHQsZSksdGhpcy5wb3NpdGlvbnNBcnJheVtuKytdPW50KHMrMSxpKSx0aGlzLnBvc2l0aW9uc0FycmF5W24rK109LW50KHQsZSksdGhpcy5wb3NpdGlvbnNBcnJheVtuKytdPW50KHMrMSxpKSx0aGlzLnBvc2l0aW9uc0FycmF5W24rK109LW50KHQrMSxlKSx0aGlzLnBvc2l0aW9uc0FycmF5W24rK109bnQocyxpKSx0aGlzLnBvc2l0aW9uc0FycmF5W24rK109LW50KHQrMSxlKSx0aGlzLmluZGV4QXJyYXlbXysrXT1hKzAsdGhpcy5pbmRleEFycmF5W18rK109YSsxLHRoaXMuaW5kZXhBcnJheVtfKytdPWErMix0aGlzLmluZGV4QXJyYXlbXysrXT1hKzAsdGhpcy5pbmRleEFycmF5W18rK109YSsyLHRoaXMuaW5kZXhBcnJheVtfKytdPWErMyxhKz00O3RoaXMucG9zaXRpb25CdWZmZXI9ci5jcmVhdGVCdWZmZXIoKSx0aGlzLmluZGV4QnVmZmVyPXIuY3JlYXRlQnVmZmVyKCksdGhpcy50ZXh0dXJlQnVmZmVyPXIuY3JlYXRlQnVmZmVyKCksdGhpcy5mb3JlZ3JvdW5kQnVmZmVyPXIuY3JlYXRlQnVmZmVyKCksdGhpcy5iYWNrZ3JvdW5kQnVmZmVyPXIuY3JlYXRlQnVmZmVyKCksci5iaW5kQnVmZmVyKHIuQVJSQVlfQlVGRkVSLHRoaXMucG9zaXRpb25CdWZmZXIpLHIuYnVmZmVyRGF0YShyLkFSUkFZX0JVRkZFUix0aGlzLnBvc2l0aW9uc0FycmF5LHIuU1RBVElDX0RSQVcpLHIuYmluZEJ1ZmZlcihyLkVMRU1FTlRfQVJSQVlfQlVGRkVSLHRoaXMuaW5kZXhCdWZmZXIpLHIuYnVmZmVyRGF0YShyLkVMRU1FTlRfQVJSQVlfQlVGRkVSLHRoaXMuaW5kZXhBcnJheSxyLlNUQVRJQ19EUkFXKSx0aGlzLnRleHR1cmU9dGhpcy5sb2FkVGV4dHVyZSh0aGlzLmZvbnQudXJsKSx0aGlzLmxhc3RSZW5kZXJUaW1lPTAsdGhpcy5yZW5kZXJEZWx0YT0wLHRoaXMuZnBzPTAsdGhpcy5hdmVyYWdlRnBzPTAsdGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKX1oYW5kbGVSZXNpemUoKXtjb25zdCB0PXRoaXMuY2FudmFzLnBhcmVudEVsZW1lbnQ7aWYoIXQpcmV0dXJuO2NvbnN0IGk9dC5vZmZzZXRXaWR0aC90aGlzLnBpeGVsV2lkdGgsZT10Lm9mZnNldEhlaWdodC90aGlzLnBpeGVsSGVpZ2h0LHM9TWF0aC5taW4oaSxlKSxyPXMqdGhpcy5waXhlbFdpZHRofDAsaD1zKnRoaXMucGl4ZWxIZWlnaHR8MDt0aGlzLmNhbnZhcy5zdHlsZS53aWR0aD1yK1wicHhcIix0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQ9aCtcInB4XCJ9Z2V0QXR0cmliTG9jYXRpb24odCl7Y29uc3QgaT10aGlzLmdsLmdldEF0dHJpYkxvY2F0aW9uKHRoaXMucHJvZ3JhbSx0KTtyZXR1cm4gdGhpcy5nbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShpKSxpfWZsdXNoKCl7bGV0IHQ9MCxpPTA7Zm9yKGxldCBlPTA7ZTx0aGlzLmhlaWdodDtlKyspZm9yKGxldCBzPTA7czx0aGlzLndpZHRoO3MrKyl7Y29uc3Qgcj10aGlzLmdldENlbGwocyxlKTtpZighci5kaXJ0eSl7dCs9OCxpKz0xNjtjb250aW51ZX1jb25zdCBoPXIuY2hhckNvZGUlMTYsbz1yLmNoYXJDb2RlLzE2fDA7dGhpcy50ZXh0dXJlQXJyYXlbdCsrXT1oLHRoaXMudGV4dHVyZUFycmF5W3QrK109byx0aGlzLnRleHR1cmVBcnJheVt0KytdPWgrMSx0aGlzLnRleHR1cmVBcnJheVt0KytdPW8sdGhpcy50ZXh0dXJlQXJyYXlbdCsrXT1oKzEsdGhpcy50ZXh0dXJlQXJyYXlbdCsrXT1vKzEsdGhpcy50ZXh0dXJlQXJyYXlbdCsrXT1oLHRoaXMudGV4dHVyZUFycmF5W3QrK109bysxO2ZvcihsZXQgdD0wO3Q8NDt0KyspdGhpcy5mb3JlZ3JvdW5kRGF0YVZpZXcuc2V0VWludDMyKGksci5mZywhMSksdGhpcy5iYWNrZ3JvdW5kRGF0YVZpZXcuc2V0VWludDMyKGksci5iZywhMSksaSs9NDtyLmRpcnR5PSExfX1pc0tleURvd24odCl7Y29uc3QgaT10aGlzLmtleXMuZ2V0S2V5KHQpO3JldHVybiEhaSYmaS5kb3dufWlzS2V5UHJlc3NlZCh0KXtjb25zdCBpPXRoaXMua2V5cy5nZXRLZXkodCk7cmV0dXJuISFpJiZpLmlzUHJlc3NlZCgpfWdldEtleURvd25Db3VudCh0KXtjb25zdCBpPXRoaXMua2V5cy5nZXRLZXkodCk7cmV0dXJuIGk/aS5kb3duQ291bnQ6MH1nZXRNb3ZlbWVudEtleSgpe3JldHVybiB0aGlzLmlzS2V5UHJlc3NlZChQLlZLX05VTVBBRDEpfHx0aGlzLmlzS2V5UHJlc3NlZChQLlZLX0IpP25ldyBSKC0xLDEpOnRoaXMuaXNLZXlQcmVzc2VkKFAuVktfTlVNUEFEMil8fHRoaXMuaXNLZXlQcmVzc2VkKFAuVktfSil8fHRoaXMuaXNLZXlQcmVzc2VkKFAuVktfRE9XTik/bmV3IFIoMCwxKTp0aGlzLmlzS2V5UHJlc3NlZChQLlZLX05VTVBBRDMpfHx0aGlzLmlzS2V5UHJlc3NlZChQLlZLX04pP25ldyBSKDEsMSk6dGhpcy5pc0tleVByZXNzZWQoUC5WS19OVU1QQUQ0KXx8dGhpcy5pc0tleVByZXNzZWQoUC5WS19IKXx8dGhpcy5pc0tleVByZXNzZWQoUC5WS19MRUZUKT9uZXcgUigtMSwwKTp0aGlzLmlzS2V5UHJlc3NlZChQLlZLX05VTVBBRDUpfHx0aGlzLmlzS2V5UHJlc3NlZChQLlZLX1BFUklPRCk/bmV3IFIoMCwwKTp0aGlzLmlzS2V5UHJlc3NlZChQLlZLX05VTVBBRDYpfHx0aGlzLmlzS2V5UHJlc3NlZChQLlZLX0wpfHx0aGlzLmlzS2V5UHJlc3NlZChQLlZLX1JJR0hUKT9uZXcgUigxLDApOnRoaXMuaXNLZXlQcmVzc2VkKFAuVktfTlVNUEFENyl8fHRoaXMuaXNLZXlQcmVzc2VkKFAuVktfWSk/bmV3IFIoLTEsLTEpOnRoaXMuaXNLZXlQcmVzc2VkKFAuVktfTlVNUEFEOCl8fHRoaXMuaXNLZXlQcmVzc2VkKFAuVktfSyl8fHRoaXMuaXNLZXlQcmVzc2VkKFAuVktfRE9XTik/bmV3IFIoMCwtMSk6dGhpcy5pc0tleVByZXNzZWQoUC5WS19OVU1QQUQ5KXx8dGhpcy5pc0tleVByZXNzZWQoUC5WS19VKT9uZXcgUigxLC0xKTp2b2lkIDB9YnVpbGRTaGFkZXIodCxpKXtjb25zdCBlPXRoaXMuZ2wscz1lLmNyZWF0ZVNoYWRlcih0KTtpZighcyl0aHJvdyBuZXcgRXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCBjb21waWxpbmcgdGhlIHNoYWRlcjogXCIpO2lmKGUuc2hhZGVyU291cmNlKHMsaSksZS5jb21waWxlU2hhZGVyKHMpLCFlLmdldFNoYWRlclBhcmFtZXRlcihzLGUuQ09NUElMRV9TVEFUVVMpKXRocm93IG5ldyBFcnJvcihcIkFuIGVycm9yIG9jY3VycmVkIGNvbXBpbGluZyB0aGUgc2hhZGVyOiBcIitlLmdldFNoYWRlckluZm9Mb2cocykpO3JldHVybiBzfWxvYWRUZXh0dXJlKHQpe2NvbnN0IGk9dGhpcy5nbCxlPWkuY3JlYXRlVGV4dHVyZSgpO2kuYmluZFRleHR1cmUoaS5URVhUVVJFXzJELGUpO2NvbnN0IHM9aS5SR0JBLHI9aS5SR0JBLGg9aS5VTlNJR05FRF9CWVRFLG89bmV3IFVpbnQ4QXJyYXkoWzAsMCwwLDI1NV0pO2kudGV4SW1hZ2UyRChpLlRFWFRVUkVfMkQsMCxzLDEsMSwwLHIsaCxvKTtjb25zdCBuPW5ldyBJbWFnZTtyZXR1cm4gbi5vbmxvYWQ9KCk9PntpLmJpbmRUZXh0dXJlKGkuVEVYVFVSRV8yRCxlKSxpLnRleEltYWdlMkQoaS5URVhUVVJFXzJELDAscyxyLGgsbiksaS50ZXhQYXJhbWV0ZXJpKGkuVEVYVFVSRV8yRCxpLlRFWFRVUkVfV1JBUF9TLGkuQ0xBTVBfVE9fRURHRSksaS50ZXhQYXJhbWV0ZXJpKGkuVEVYVFVSRV8yRCxpLlRFWFRVUkVfV1JBUF9ULGkuQ0xBTVBfVE9fRURHRSksaS50ZXhQYXJhbWV0ZXJpKGkuVEVYVFVSRV8yRCxpLlRFWFRVUkVfTUFHX0ZJTFRFUixpLkxJTkVBUiksaS50ZXhQYXJhbWV0ZXJpKGkuVEVYVFVSRV8yRCxpLlRFWFRVUkVfTUlOX0ZJTFRFUixpLkxJTkVBUil9LG4uc3JjPXQsZX1yZW5kZXIoKXtjb25zdCB0PXRoaXMuZ2w7dC5jbGVhckNvbG9yKDAsMCwwLDEpLHQuY2xlYXJEZXB0aCgxKSx0LmNsZWFyKHQuQ09MT1JfQlVGRkVSX0JJVHx0LkRFUFRIX0JVRkZFUl9CSVQpLHQudmlld3BvcnQoMCwwLHRoaXMucGl4ZWxXaWR0aCx0aGlzLnBpeGVsSGVpZ2h0KTt7Y29uc3QgaT0yLGU9dC5GTE9BVCxzPSExLHI9MCxoPTA7dC5iaW5kQnVmZmVyKHQuQVJSQVlfQlVGRkVSLHRoaXMucG9zaXRpb25CdWZmZXIpLHQudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnBvc2l0aW9uQXR0cmliTG9jYXRpb24saSxlLHMscixoKX17Y29uc3QgaT0yLGU9dC5GTE9BVCxzPSExLHI9MCxoPTA7dC5iaW5kQnVmZmVyKHQuQVJSQVlfQlVGRkVSLHRoaXMudGV4dHVyZUJ1ZmZlciksdC5idWZmZXJEYXRhKHQuQVJSQVlfQlVGRkVSLHRoaXMudGV4dHVyZUFycmF5LHQuRFlOQU1JQ19EUkFXKSx0LnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy50ZXh0dXJlQXR0cmliTG9jYXRpb24saSxlLHMscixoKX17Y29uc3QgaT00LGU9dC5VTlNJR05FRF9CWVRFLHM9ITAscj0wLGg9MDt0LmJpbmRCdWZmZXIodC5BUlJBWV9CVUZGRVIsdGhpcy5mb3JlZ3JvdW5kQnVmZmVyKSx0LmJ1ZmZlckRhdGEodC5BUlJBWV9CVUZGRVIsdGhpcy5mb3JlZ3JvdW5kVWludDhBcnJheSx0LkRZTkFNSUNfRFJBVyksdC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuZmdDb2xvckF0dHJpYkxvY2F0aW9uLGksZSxzLHIsaCl9e2NvbnN0IGk9NCxlPXQuVU5TSUdORURfQllURSxzPSEwLHI9MCxoPTA7dC5iaW5kQnVmZmVyKHQuQVJSQVlfQlVGRkVSLHRoaXMuYmFja2dyb3VuZEJ1ZmZlciksdC5idWZmZXJEYXRhKHQuQVJSQVlfQlVGRkVSLHRoaXMuYmFja2dyb3VuZFVpbnQ4QXJyYXksdC5EWU5BTUlDX0RSQVcpLHQudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLmJnQ29sb3JBdHRyaWJMb2NhdGlvbixpLGUscyxyLGgpfXQuYmluZEJ1ZmZlcih0LkVMRU1FTlRfQVJSQVlfQlVGRkVSLHRoaXMuaW5kZXhCdWZmZXIpLHQudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pLHQuYWN0aXZlVGV4dHVyZSh0LlRFWFRVUkUwKSx0LmJpbmRUZXh0dXJlKHQuVEVYVFVSRV8yRCx0aGlzLnRleHR1cmUpO3tjb25zdCBpPXRoaXMud2lkdGgqdGhpcy5oZWlnaHQqNixlPXQuVU5TSUdORURfU0hPUlQscz0wO3QuZHJhd0VsZW1lbnRzKHQuVFJJQU5HTEVTLGksZSxzKX19cmVxdWVzdEFuaW1hdGlvbkZyYW1lKCl7d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgodD0+dGhpcy5yZW5kZXJMb29wKHQpKSl9cmVuZGVyTG9vcCh0KXswPT09dGhpcy5sYXN0UmVuZGVyVGltZT8odGhpcy5sYXN0UmVuZGVyVGltZT10LHRoaXMuZnBzPTApOih0aGlzLnJlbmRlckRlbHRhPXQtdGhpcy5sYXN0UmVuZGVyVGltZSx0aGlzLmxhc3RSZW5kZXJUaW1lPXQsdGhpcy5mcHM9MWUzL3RoaXMucmVuZGVyRGVsdGEsdGhpcy5hdmVyYWdlRnBzPS45NSp0aGlzLmF2ZXJhZ2VGcHMrLjA1KnRoaXMuZnBzKSx0aGlzLmtleXMudXBkYXRlS2V5cyh0KSx0aGlzLm1vdXNlLnVwZGF0ZSh0KSx0aGlzLnVwZGF0ZSYmdGhpcy51cGRhdGUoKSx0aGlzLmZsdXNoKCksdGhpcy5yZW5kZXIoKSx0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgpfX19fSxpPXt9O2Z1bmN0aW9uIGUocyl7aWYoaVtzXSlyZXR1cm4gaVtzXS5leHBvcnRzO3ZhciByPWlbc109e2V4cG9ydHM6e319O3JldHVybiB0W3NdKHIsci5leHBvcnRzLGUpLHIuZXhwb3J0c31yZXR1cm4gZS5kPSh0LGkpPT57Zm9yKHZhciBzIGluIGkpZS5vKGkscykmJiFlLm8odCxzKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQscyx7ZW51bWVyYWJsZTohMCxnZXQ6aVtzXX0pfSxlLm89KHQsaSk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LGkpLGUucj10PT57XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LGUoNjEyKX0pKCl9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13Z2x0LmpzLm1hcCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJnZW90aWNcIlxyXG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tIFwid2dsdFwiXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFsbHkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XHJcbiAgICB9O1xyXG59XHJcbi8vZGVjbGFyaW5nIGNvbXBvbmVudHNcclxuLy9jaGFyID0gZGlzcGxheWVkIGNoYXJhY3RlciwgY29sb3IgPSBkaXNwbGF5ZWQgY29sb3JcclxuZXhwb3J0IGNsYXNzIEFwcGVhcmFuY2UgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgY2hhcjogXCJAXCIsXHJcbiAgICAgICAgY29sb3I6IENvbG9ycy5XSElURVxyXG4gICAgfVxyXG59XHJcbi8vdGFyZ2V0ID0gY3VycmVudCBwcmltYXJ5IHRhcmdldFxyXG5leHBvcnQgY2xhc3MgQ29tYmF0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIHRhcmdldDogXCJcIixcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAsXHJcbiAgICAgICAgZGlzdGFuY2U6IDBcclxuICAgIH1cclxufVxyXG4vL25hbWUgPSBuYW1lIG9mIG9iamVjdCwgZGVzYyA9IGRlc2NyaXB0aW9uIG9mIG9iamVjdFxyXG5leHBvcnQgY2xhc3MgRGVzY3JpcHRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgZGVzYzogXCJcIlxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBFbmVteSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcclxuICAgIH07XHJcbn1cclxuLy9ocCA9IGN1cnJlbnQgaGVhbHRoLCBtYXhIcCA9IG1heGltdW0gaGVhbHRoIGFsbG93ZWRcclxuZXhwb3J0IGNsYXNzIEhlYWx0aCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcclxuICAgICAgICBocDogMSxcclxuICAgICAgICBtYXhIcDogMVxyXG4gICAgfSAgXHJcbn1cclxuLy94LHkgPSB4LHkgY29vcmRpbmF0ZSBwb3NpdGlvbiBvbiBkaXNwbGF5XHJcbmV4cG9ydCBjbGFzcyBQb3NpdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH07XHJcbn1cclxuLy9hY3Rpb24gPSBhY3Rpb24gc3BlZWQgaW4gbWlsbGlzZWNvbmRzIGkuZS4gaG93IGZhc3QgYWxsIGFjdGlvbnMgc3VjaCBhcyBtb3ZpbmcgYW5kIGF0dGFja2luZyBhcmUgZG9uZVxyXG5leHBvcnQgY2xhc3MgQWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgICAgIGxhc3Q6IDAsXHJcbiAgICAgICAgYWRqdXN0ZWQ6IDEwMDBcclxuICAgIH1cclxufVxyXG4vL3ggPSBob3Jpem9udGFsIG1vdmVtZW50IHNwZWVkLCB5ID0gdmVydGljYWwgbW92ZW1lbnQgc3BlZWQuIGkuZS4gcGVyIG1vdmVtZW50IGFjdGlvbiBtb3ZlIHVwIHRvIHgveSB2ZWxvY2l0eS5cclxuZXhwb3J0IGNsYXNzIE1vdmVtZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIHZlbG9jaXR5OiAwLFxyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCBcclxuICAgIH07XHJcbn1cclxuXHJcbiIsImltcG9ydCB7RW5naW5lfSBmcm9tIFwiZ2VvdGljXCI7XHJcbmltcG9ydCB7QXBwZWFyYW5jZSwgQ29tYmF0LCBEZXNjcmlwdGlvbiwgSGVhbHRoLCBQb3NpdGlvbiwgQWN0aW9uLCBNb3ZlbWVudCwgRW5lbXksIEFsbHl9IGZyb20gXCIuL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQge0JlaW5nLCBIdW1hbiwgWm9tYmllfSBmcm9tIFwiLi9lbnRpdGllc1wiXHJcblxyXG4vL2NyZWF0aW5nIGdlb3RpYyBlbmdpbmVcclxuY29uc3QgZW5naW5lID0gbmV3IEVuZ2luZSgpO1xyXG4vL2Fzc29jaWF0aW5nIGNvbXBvbmVudHNcclxuZW5naW5lLnJlZ2lzdGVyQ29tcG9uZW50KEFsbHkpXHJcbmVuZ2luZS5yZWdpc3RlckNvbXBvbmVudChBcHBlYXJhbmNlKVxyXG5lbmdpbmUucmVnaXN0ZXJDb21wb25lbnQoQ29tYmF0KVxyXG5lbmdpbmUucmVnaXN0ZXJDb21wb25lbnQoRGVzY3JpcHRpb24pXHJcbmVuZ2luZS5yZWdpc3RlckNvbXBvbmVudChFbmVteSlcclxuZW5naW5lLnJlZ2lzdGVyQ29tcG9uZW50KEhlYWx0aClcclxuZW5naW5lLnJlZ2lzdGVyQ29tcG9uZW50KFBvc2l0aW9uKVxyXG5lbmdpbmUucmVnaXN0ZXJDb21wb25lbnQoQWN0aW9uKVxyXG5lbmdpbmUucmVnaXN0ZXJDb21wb25lbnQoTW92ZW1lbnQpXHJcbi8vYXNzb2NpYXRpbmcgcHJlZmFic1xyXG5lbmdpbmUucmVnaXN0ZXJQcmVmYWIoQmVpbmcpXHJcbmVuZ2luZS5yZWdpc3RlclByZWZhYihIdW1hbilcclxuZW5naW5lLnJlZ2lzdGVyUHJlZmFiKFpvbWJpZSlcclxuZXhwb3J0IGRlZmF1bHQgZW5naW5lOyIsImltcG9ydCB7IENvbG9ycyB9IGZyb20gXCJ3Z2x0XCJcclxuLy9kZWZhdWx0IFwiQmVpbmdcIm1vYiB3aXRoIHJlbGF0ZWQgY29tcG9uZW50c1xyXG5leHBvcnQgbGV0IEJlaW5nID0ge1xyXG4gICAgbmFtZTogXCJCZWluZ1wiLFxyXG4gICAgY29tcG9uZW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJBcHBlYXJhbmNlXCIsXHJcbiAgICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXI6IFwiQFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBDb2xvcnMuV0hJVEVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkNvbWJhdFwiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQmVpbmdcIixcclxuICAgICAgICAgICAgICAgIGRlc2M6IFwiTm9uZGVzY3JpcHQgYmVpbmcuXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkhlYWx0aFwiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgIGhwOiAxLFxyXG4gICAgICAgICAgICAgICBtYXhIcDogMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBvc2l0aW9uXCIsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiQWN0aW9uXCIsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgbGFzdDogMCxcclxuICAgICAgICAgICAgICAgIGFkanVzdGVkOiAxMDAwLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiTW92ZW1lbnRcIixcclxuICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgdmVsb2NpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgIGNhcmRpbmFsOiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICBdLFxyXG59O1xyXG4vL2RlZmF1bHQgXCJIdW1hblwiIHN1YnR5cGUgb2YgXCJCZWluZ1wiXHJcbmV4cG9ydCBsZXQgSHVtYW4gPSB7XHJcbiAgIG5hbWU6IFwiSHVtYW5cIixcclxuICAgaW5oZXJpdDogXCJCZWluZ1wiLFxyXG4gICBjb21wb25lbnRzOiBbXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJBbGx5XCIsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHt9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiBcIkFwcGVhcmFuY2VcIixcclxuICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgY2hhcjogXCJAXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogQ29sb3JzLllFTExPV1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICBuYW1lOiBcIkh1bWFuXCIsXHJcbiAgICAgICAgICAgIGRlc2M6IFwiQSBodW1hbiBiZWluZy5cIlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJIZWFsdGhcIixcclxuICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIGhwOiAxMCxcclxuICAgICAgICAgICAgbWF4SHA6IDEwXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJNb3ZlbWVudFwiLFxyXG4gICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgdmVsb2NpdHk6IDEsXHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgIGNhcmRpbmFsOiAwXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxuICAgXSBcclxufTtcclxuLy9kZWZhdWx0IFwiWm9tYmllXCIgc3VidHlwZSBvZiBcIkJlaW5nXCJcclxuZXhwb3J0IGxldCBab21iaWUgPSB7XHJcbiAgICBuYW1lOiBcIlpvbWJpZVwiLFxyXG4gICAgaW5oZXJpdDogXCJCZWluZ1wiLFxyXG4gICAgY29tcG9uZW50czogW1xyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwiQXBwZWFyYW5jZVwiLFxyXG4gICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICBjaGFyOiBcIlpcIixcclxuICAgICAgICAgICAgY29sb3I6IENvbG9ycy5EQVJLX0dSRUVOXHJcbiAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICB0eXBlOiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgIG5hbWU6IFwiWm9tYmllXCIsXHJcbiAgICAgICAgICAgICBkZXNjOiBcIkEgem9tYmllLlwiXHJcbiAgICAgICAgIH1cclxuICAgICB9LFxyXG4gICAgIHtcclxuICAgICAgICB0eXBlOiBcIkVuZW15XCIsXHJcbiAgICAgICAgcHJvcGVydGllczoge31cclxuICAgICB9LCAgICAgXHJcbiAgICAge1xyXG4gICAgICAgICB0eXBlOiBcIkhlYWx0aFwiLFxyXG4gICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICBocDogMTAsXHJcbiAgICAgICAgICAgICBtYXhIcDogMTBcclxuICAgICAgICAgfSxcclxuICAgICB9LFxyXG4gXHJcbiAgICAge1xyXG4gICAgICAgICB0eXBlOiBcIk1vdmVtZW50XCIsXHJcbiAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgIHZlbG9jaXR5OiAxLFxyXG4gICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgICBjYXJkaW5hbDogMFxyXG4gICAgICAgICB9LFxyXG4gICAgIH0sXHJcbiAgICBdIFxyXG59OyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5jb25zdCBwcmVzZXJ2ZUNhbWVsQ2FzZSA9IHN0cmluZyA9PiB7XG4gIGxldCBpc0xhc3RDaGFyTG93ZXIgPSBmYWxzZTtcbiAgbGV0IGlzTGFzdENoYXJVcHBlciA9IGZhbHNlO1xuICBsZXQgaXNMYXN0TGFzdENoYXJVcHBlciA9IGZhbHNlO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2hhcmFjdGVyID0gc3RyaW5nW2ldO1xuXG4gICAgaWYgKGlzTGFzdENoYXJMb3dlciAmJiAvW1xccHtMdX1dL3UudGVzdChjaGFyYWN0ZXIpKSB7XG4gICAgICBzdHJpbmcgPSBzdHJpbmcuc2xpY2UoMCwgaSkgKyAnLScgKyBzdHJpbmcuc2xpY2UoaSk7XG4gICAgICBpc0xhc3RDaGFyTG93ZXIgPSBmYWxzZTtcbiAgICAgIGlzTGFzdExhc3RDaGFyVXBwZXIgPSBpc0xhc3RDaGFyVXBwZXI7XG4gICAgICBpc0xhc3RDaGFyVXBwZXIgPSB0cnVlO1xuICAgICAgaSsrO1xuICAgIH0gZWxzZSBpZiAoaXNMYXN0Q2hhclVwcGVyICYmIGlzTGFzdExhc3RDaGFyVXBwZXIgJiYgL1tcXHB7TGx9XS91LnRlc3QoY2hhcmFjdGVyKSkge1xuICAgICAgc3RyaW5nID0gc3RyaW5nLnNsaWNlKDAsIGkgLSAxKSArICctJyArIHN0cmluZy5zbGljZShpIC0gMSk7XG4gICAgICBpc0xhc3RMYXN0Q2hhclVwcGVyID0gaXNMYXN0Q2hhclVwcGVyO1xuICAgICAgaXNMYXN0Q2hhclVwcGVyID0gZmFsc2U7XG4gICAgICBpc0xhc3RDaGFyTG93ZXIgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc0xhc3RDaGFyTG93ZXIgPSBjaGFyYWN0ZXIudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gY2hhcmFjdGVyICYmIGNoYXJhY3Rlci50b0xvY2FsZVVwcGVyQ2FzZSgpICE9PSBjaGFyYWN0ZXI7XG4gICAgICBpc0xhc3RMYXN0Q2hhclVwcGVyID0gaXNMYXN0Q2hhclVwcGVyO1xuICAgICAgaXNMYXN0Q2hhclVwcGVyID0gY2hhcmFjdGVyLnRvTG9jYWxlVXBwZXJDYXNlKCkgPT09IGNoYXJhY3RlciAmJiBjaGFyYWN0ZXIudG9Mb2NhbGVMb3dlckNhc2UoKSAhPT0gY2hhcmFjdGVyO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59O1xuXG5jb25zdCBjYW1lbENhc2UgPSAoaW5wdXQsIG9wdGlvbnMpID0+IHtcbiAgaWYgKCEodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KGlucHV0KSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgaW5wdXQgdG8gYmUgYHN0cmluZyB8IHN0cmluZ1tdYCcpO1xuICB9XG5cbiAgb3B0aW9ucyA9IHsgLi4ue1xuICAgICAgcGFzY2FsQ2FzZTogZmFsc2VcbiAgICB9LFxuICAgIC4uLm9wdGlvbnNcbiAgfTtcblxuICBjb25zdCBwb3N0UHJvY2VzcyA9IHggPT4gb3B0aW9ucy5wYXNjYWxDYXNlID8geC5jaGFyQXQoMCkudG9Mb2NhbGVVcHBlckNhc2UoKSArIHguc2xpY2UoMSkgOiB4O1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgIGlucHV0ID0gaW5wdXQubWFwKHggPT4geC50cmltKCkpLmZpbHRlcih4ID0+IHgubGVuZ3RoKS5qb2luKCctJyk7XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQgPSBpbnB1dC50cmltKCk7XG4gIH1cblxuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBvcHRpb25zLnBhc2NhbENhc2UgPyBpbnB1dC50b0xvY2FsZVVwcGVyQ2FzZSgpIDogaW5wdXQudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgfVxuXG4gIGNvbnN0IGhhc1VwcGVyQ2FzZSA9IGlucHV0ICE9PSBpbnB1dC50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG4gIGlmIChoYXNVcHBlckNhc2UpIHtcbiAgICBpbnB1dCA9IHByZXNlcnZlQ2FtZWxDYXNlKGlucHV0KTtcbiAgfVxuXG4gIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvXltfLlxcLSBdKy8sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpLnJlcGxhY2UoL1tfLlxcLSBdKyhbXFxwe0FscGhhfVxccHtOfV9dfCQpL2d1LCAoXywgcDEpID0+IHAxLnRvTG9jYWxlVXBwZXJDYXNlKCkpLnJlcGxhY2UoL1xcZCsoW1xccHtBbHBoYX1cXHB7Tn1fXXwkKS9ndSwgbSA9PiBtLnRvTG9jYWxlVXBwZXJDYXNlKCkpO1xuICByZXR1cm4gcG9zdFByb2Nlc3MoaW5wdXQpO1xufTtcblxudmFyIGNhbWVsY2FzZSA9IGNhbWVsQ2FzZTsgLy8gVE9ETzogUmVtb3ZlIHRoaXMgZm9yIHRoZSBuZXh0IG1ham9yIHJlbGVhc2VcblxudmFyIF9kZWZhdWx0ID0gY2FtZWxDYXNlO1xuY2FtZWxjYXNlLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuY29uc3QgY2FtZWxDYWNoZSA9IHt9O1xuY29uc3QgY2FtZWxTdHJpbmcgPSB2YWx1ZSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGNhbWVsQ2FjaGVbdmFsdWVdO1xuXG4gIGlmICghcmVzdWx0KSB7XG4gICAgY2FtZWxDYWNoZVt2YWx1ZV0gPSBjYW1lbGNhc2UodmFsdWUpO1xuICAgIHJldHVybiBjYW1lbENhY2hlW3ZhbHVlXTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jbGFzcyBDb21wb25lbnRSZWdpc3RyeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9jYml0XCIsIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX21hcFwiLCB7fSk7XG4gIH1cblxuICByZWdpc3RlcihjbGF6eikge1xuICAgIGNvbnN0IGtleSA9IGNhbWVsU3RyaW5nKGNsYXp6Lm5hbWUpO1xuICAgIGNsYXp6LnByb3RvdHlwZS5fY2tleSA9IGtleTtcbiAgICBjbGF6ei5wcm90b3R5cGUuX2NiaXQgPSBCaWdJbnQoKyt0aGlzLl9jYml0KTtcbiAgICB0aGlzLl9tYXBba2V5XSA9IGNsYXp6O1xuICB9XG5cbiAgZ2V0KGtleSkge1xuICAgIHJldHVybiB0aGlzLl9tYXBba2V5XTtcbiAgfVxuXG59XG5cbnZhciBpc01lcmdlYWJsZU9iamVjdCA9IGZ1bmN0aW9uIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc05vbk51bGxPYmplY3QodmFsdWUpICYmICFpc1NwZWNpYWwodmFsdWUpO1xufTtcblxuZnVuY3Rpb24gaXNOb25OdWxsT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzU3BlY2lhbCh2YWx1ZSkge1xuICB2YXIgc3RyaW5nVmFsdWUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICByZXR1cm4gc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IFJlZ0V4cF0nIHx8IHN0cmluZ1ZhbHVlID09PSAnW29iamVjdCBEYXRlXScgfHwgaXNSZWFjdEVsZW1lbnQodmFsdWUpO1xufSAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYjVhYzk2M2ZiNzkxZDEyOThlN2YzOTYyMzYzODNiYzk1NWY5MTZjMS9zcmMvaXNvbW9ycGhpYy9jbGFzc2ljL2VsZW1lbnQvUmVhY3RFbGVtZW50LmpzI0wyMS1MMjVcblxuXG52YXIgY2FuVXNlU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGNhblVzZVN5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcblxuZnVuY3Rpb24gaXNSZWFjdEVsZW1lbnQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fTtcbn1cblxuZnVuY3Rpb24gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodmFsdWUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuY2xvbmUgIT09IGZhbHNlICYmIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodmFsdWUpID8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnMpIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRBcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG4gIHJldHVybiB0YXJnZXQuY29uY2F0KHNvdXJjZSkubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TWVyZ2VGdW5jdGlvbihrZXksIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zLmN1c3RvbU1lcmdlKSB7XG4gICAgcmV0dXJuIGRlZXBtZXJnZTtcbiAgfVxuXG4gIHZhciBjdXN0b21NZXJnZSA9IG9wdGlvbnMuY3VzdG9tTWVyZ2Uoa2V5KTtcbiAgcmV0dXJuIHR5cGVvZiBjdXN0b21NZXJnZSA9PT0gJ2Z1bmN0aW9uJyA/IGN1c3RvbU1lcmdlIDogZGVlcG1lcmdlO1xufVxuXG5mdW5jdGlvbiBnZXRFbnVtZXJhYmxlT3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkge1xuICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KS5maWx0ZXIoZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgIHJldHVybiB0YXJnZXQucHJvcGVydHlJc0VudW1lcmFibGUoc3ltYm9sKTtcbiAgfSkgOiBbXTtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5cyh0YXJnZXQpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRhcmdldCkuY29uY2F0KGdldEVudW1lcmFibGVPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5SXNPbk9iamVjdChvYmplY3QsIHByb3BlcnR5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHByb3BlcnR5IGluIG9iamVjdDtcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSAvLyBQcm90ZWN0cyBmcm9tIHByb3RvdHlwZSBwb2lzb25pbmcgYW5kIHVuZXhwZWN0ZWQgbWVyZ2luZyB1cCB0aGUgcHJvdG90eXBlIGNoYWluLlxuXG5cbmZ1bmN0aW9uIHByb3BlcnR5SXNVbnNhZmUodGFyZ2V0LCBrZXkpIHtcbiAgcmV0dXJuIHByb3BlcnR5SXNPbk9iamVjdCh0YXJnZXQsIGtleSkgLy8gUHJvcGVydGllcyBhcmUgc2FmZSB0byBtZXJnZSBpZiB0aGV5IGRvbid0IGV4aXN0IGluIHRoZSB0YXJnZXQgeWV0LFxuICAmJiAhKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwga2V5KSAvLyB1bnNhZmUgaWYgdGhleSBleGlzdCB1cCB0aGUgcHJvdG90eXBlIGNoYWluLFxuICAmJiBPYmplY3QucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0YXJnZXQsIGtleSkpOyAvLyBhbmQgYWxzbyB1bnNhZmUgaWYgdGhleSdyZSBub25lbnVtZXJhYmxlLlxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZGVzdGluYXRpb24gPSB7fTtcblxuICBpZiAob3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG4gICAgZ2V0S2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHRhcmdldFtrZXldLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAocHJvcGVydHlJc1Vuc2FmZSh0YXJnZXQsIGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlJc09uT2JqZWN0KHRhcmdldCwga2V5KSAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGdldE1lcmdlRnVuY3Rpb24oa2V5LCBvcHRpb25zKSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlW2tleV0sIG9wdGlvbnMpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkZXN0aW5hdGlvbjtcbn1cblxuZnVuY3Rpb24gZGVlcG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG4gIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QgPSBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0IHx8IGlzTWVyZ2VhYmxlT2JqZWN0OyAvLyBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCBpcyBhZGRlZCB0byBgb3B0aW9uc2Agc28gdGhhdCBjdXN0b20gYXJyYXlNZXJnZSgpXG4gIC8vIGltcGxlbWVudGF0aW9ucyBjYW4gdXNlIGl0LiBUaGUgY2FsbGVyIG1heSBub3QgcmVwbGFjZSBpdC5cblxuICBvcHRpb25zLmNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQ7XG4gIHZhciBzb3VyY2VJc0FycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuICB2YXIgdGFyZ2V0SXNBcnJheSA9IEFycmF5LmlzQXJyYXkodGFyZ2V0KTtcbiAgdmFyIHNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2ggPSBzb3VyY2VJc0FycmF5ID09PSB0YXJnZXRJc0FycmF5O1xuXG4gIGlmICghc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCkge1xuICAgIHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChzb3VyY2UsIG9wdGlvbnMpO1xuICB9IGVsc2UgaWYgKHNvdXJjZUlzQXJyYXkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5hcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpO1xuICB9XG59XG5cbmRlZXBtZXJnZS5hbGwgPSBmdW5jdGlvbiBkZWVwbWVyZ2VBbGwoYXJyYXksIG9wdGlvbnMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgIHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5Jyk7XG4gIH1cblxuICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBuZXh0KSB7XG4gICAgcmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zKTtcbiAgfSwge30pO1xufTtcblxudmFyIGRlZXBtZXJnZV8xID0gZGVlcG1lcmdlO1xudmFyIGNqcyA9IGRlZXBtZXJnZV8xO1xuXG5jbGFzcyBQcmVmYWJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihjbGF6eiwgcHJvcGVydGllcyA9IHt9LCBvdmVyd3JpdGUgPSB0cnVlKSB7XG4gICAgdGhpcy5jbGF6eiA9IGNsYXp6O1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5vdmVyd3JpdGUgPSBvdmVyd3JpdGU7XG4gIH1cblxuICBhcHBseVRvRW50aXR5KGVudGl0eSwgaW5pdGlhbFByb3BzID0ge30pIHtcbiAgICBpZiAoIXRoaXMuY2xhenouYWxsb3dNdWx0aXBsZSAmJiBlbnRpdHkuaGFzKHRoaXMuY2xhenopKSB7XG4gICAgICBpZiAoIXRoaXMub3ZlcndyaXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcCA9IGVudGl0eVt0aGlzLmNsYXp6LnByb3RvdHlwZS5fY2tleV07XG4gICAgICBlbnRpdHkucmVtb3ZlKGNvbXApO1xuICAgIH1cblxuICAgIGNvbnN0IHByb3BzID0gY2pzKHRoaXMucHJvcGVydGllcywgaW5pdGlhbFByb3BzKTtcbiAgICBlbnRpdHkuYWRkKHRoaXMuY2xhenosIHByb3BzKTtcbiAgfVxuXG59XG5cbmNsYXNzIFByZWZhYiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJuYW1lXCIsICcnKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImluaGVyaXRcIiwgW10pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY29tcG9uZW50c1wiLCBbXSk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgYWRkQ29tcG9uZW50KHByZWZhYkNvbXBvbmVudCkge1xuICAgIHRoaXMuY29tcG9uZW50cy5wdXNoKHByZWZhYkNvbXBvbmVudCk7XG4gIH1cblxuICBhcHBseVRvRW50aXR5KGVudGl0eSwgcHJlZmFiUHJvcHMgPSB7fSkge1xuICAgIHRoaXMuaW5oZXJpdC5mb3JFYWNoKHBhcmVudCA9PiB7XG4gICAgICBwYXJlbnQuYXBwbHlUb0VudGl0eShlbnRpdHksIHByZWZhYlByb3BzKTtcbiAgICB9KTtcbiAgICBjb25zdCBhcnJDb21wcyA9IHt9O1xuICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBjb25zdCBjbGF6eiA9IGNvbXBvbmVudC5jbGF6ejtcbiAgICAgIGNvbnN0IGNrZXkgPSBjbGF6ei5wcm90b3R5cGUuX2NrZXk7XG4gICAgICBsZXQgaW5pdGlhbENvbXBQcm9wcyA9IHt9O1xuXG4gICAgICBpZiAoY2xhenouYWxsb3dNdWx0aXBsZSkge1xuICAgICAgICBpZiAoY2xhenoua2V5UHJvcGVydHkpIHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBjb21wb25lbnQucHJvcGVydGllc1tjbGF6ei5rZXlQcm9wZXJ0eV07XG5cbiAgICAgICAgICBpZiAocHJlZmFiUHJvcHNbY2tleV0gJiYgcHJlZmFiUHJvcHNbY2tleV1ba2V5XSkge1xuICAgICAgICAgICAgaW5pdGlhbENvbXBQcm9wcyA9IHByZWZhYlByb3BzW2NrZXldW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghYXJyQ29tcHNbY2tleV0pIHtcbiAgICAgICAgICAgIGFyckNvbXBzW2NrZXldID0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocHJlZmFiUHJvcHNbY2tleV0gJiYgcHJlZmFiUHJvcHNbY2tleV1bYXJyQ29tcHNbY2tleV1dKSB7XG4gICAgICAgICAgICBpbml0aWFsQ29tcFByb3BzID0gcHJlZmFiUHJvcHNbY2tleV1bYXJyQ29tcHNbY2tleV1dO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFyckNvbXBzW2NrZXldKys7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxDb21wUHJvcHMgPSBwcmVmYWJQcm9wc1tja2V5XTtcbiAgICAgIH1cblxuICAgICAgY29tcG9uZW50LmFwcGx5VG9FbnRpdHkoZW50aXR5LCBpbml0aWFsQ29tcFByb3BzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZW50aXR5O1xuICB9XG5cbn1cblxuY2xhc3MgUHJlZmFiUmVnaXN0cnkge1xuICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfcHJlZmFic1wiLCB7fSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfZW5naW5lXCIsIG51bGwpO1xuXG4gICAgdGhpcy5fZW5naW5lID0gZW5naW5lO1xuICB9XG5cbiAgZGVzZXJpYWxpemUoZGF0YSkge1xuICAgIGNvbnN0IHJlZ2lzdGVyZWQgPSB0aGlzLmdldChkYXRhLm5hbWUpO1xuXG4gICAgaWYgKHJlZ2lzdGVyZWQpIHtcbiAgICAgIHJldHVybiByZWdpc3RlcmVkO1xuICAgIH1cblxuICAgIGNvbnN0IHByZWZhYiA9IG5ldyBQcmVmYWIoZGF0YS5uYW1lKTtcbiAgICBsZXQgaW5oZXJpdDtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaW5oZXJpdCkpIHtcbiAgICAgIGluaGVyaXQgPSBkYXRhLmluaGVyaXQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YS5pbmhlcml0ID09PSAnc3RyaW5nJykge1xuICAgICAgaW5oZXJpdCA9IFtkYXRhLmluaGVyaXRdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmhlcml0ID0gW107XG4gICAgfVxuXG4gICAgcHJlZmFiLmluaGVyaXQgPSBpbmhlcml0Lm1hcChwYXJlbnQgPT4ge1xuICAgICAgY29uc3QgcmVmID0gdGhpcy5nZXQocGFyZW50KTtcblxuICAgICAgaWYgKCFyZWYpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBQcmVmYWIgXCIke2RhdGEubmFtZX1cIiBjYW5ub3QgaW5oZXJpdCBmcm9tIFByZWZhYiBcIiR7cGFyZW50fVwiIGJlY2F1c2UgaXMgbm90IHJlZ2lzdGVyZWQgeWV0ISBQcmVmYWJzIG11c3QgYmUgcmVnaXN0ZXJlZCBpbiB0aGUgcmlnaHQgb3JkZXIuYCk7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZWY7XG4gICAgfSk7XG4gICAgY29uc3QgY29tcHMgPSBkYXRhLmNvbXBvbmVudHMgfHwgW107XG4gICAgY29tcHMuZm9yRWFjaChjb21wb25lbnREYXRhID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50RGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgY2tleSA9IGNhbWVsU3RyaW5nKGNvbXBvbmVudERhdGEpO1xuXG4gICAgICAgIGNvbnN0IGNsYXp6ID0gdGhpcy5fZW5naW5lLl9jb21wb25lbnRzLmdldChja2V5KTtcblxuICAgICAgICBpZiAoY2xhenopIHtcbiAgICAgICAgICBwcmVmYWIuYWRkQ29tcG9uZW50KG5ldyBQcmVmYWJDb21wb25lbnQoY2xhenopKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnREYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBja2V5ID0gY2FtZWxTdHJpbmcoY29tcG9uZW50RGF0YS50eXBlKTtcblxuICAgICAgICBjb25zdCBjbGF6eiA9IHRoaXMuX2VuZ2luZS5fY29tcG9uZW50cy5nZXQoY2tleSk7XG5cbiAgICAgICAgaWYgKGNsYXp6KSB7XG4gICAgICAgICAgcHJlZmFiLmFkZENvbXBvbmVudChuZXcgUHJlZmFiQ29tcG9uZW50KGNsYXp6LCBjb21wb25lbnREYXRhLnByb3BlcnRpZXMsIGNvbXBvbmVudERhdGEub3ZlcndyaXRlKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUud2FybihgVW5yZWNvZ25pemVkIGNvbXBvbmVudCByZWZlcmVuY2UgXCIke2NvbXBvbmVudERhdGF9XCIgaW4gcHJlZmFiIFwiJHtkYXRhLm5hbWV9XCIuIEVuc3VyZSB0aGUgY29tcG9uZW50IGlzIHJlZ2lzdGVyZWQgYmVmb3JlIHRoZSBwcmVmYWIuYCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByZWZhYjtcbiAgfVxuXG4gIHJlZ2lzdGVyKGRhdGEpIHtcbiAgICBjb25zdCBwcmVmYWIgPSB0aGlzLmRlc2VyaWFsaXplKGRhdGEpO1xuICAgIHRoaXMuX3ByZWZhYnNbcHJlZmFiLm5hbWVdID0gcHJlZmFiO1xuICB9XG5cbiAgZ2V0KG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZmFic1tuYW1lXTtcbiAgfVxuXG4gIGNyZWF0ZSh3b3JsZCwgbmFtZSwgcHJvcGVydGllcyA9IHt9KSB7XG4gICAgY29uc3QgcHJlZmFiID0gdGhpcy5nZXQobmFtZSk7XG5cbiAgICBpZiAoIXByZWZhYikge1xuICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3QgaW5zdGFudGlhdGUgcHJlZmFiIFwiJHtuYW1lfVwiIHNpbmNlIGl0IGlzIG5vdCByZWdpc3RlcmVkYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZW50aXR5ID0gd29ybGQuY3JlYXRlRW50aXR5KCk7XG4gICAgZW50aXR5Ll9xZWxpZ2libGUgPSBmYWxzZTtcbiAgICBwcmVmYWIuYXBwbHlUb0VudGl0eShlbnRpdHksIHByb3BlcnRpZXMpO1xuICAgIGVudGl0eS5fcWVsaWdpYmxlID0gdHJ1ZTtcblxuICAgIGVudGl0eS5fY2FuZGlkYWN5KCk7XG5cbiAgICByZXR1cm4gZW50aXR5O1xuICB9XG5cbn1cblxuY2xhc3MgQ29tcG9uZW50IHtcbiAgZ2V0IHdvcmxkKCkge1xuICAgIHJldHVybiB0aGlzLmVudGl0eS53b3JsZDtcbiAgfVxuXG4gIGdldCBhbGxvd011bHRpcGxlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmFsbG93TXVsdGlwbGU7XG4gIH1cblxuICBnZXQga2V5UHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3Iua2V5UHJvcGVydHk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuY29uc3RydWN0b3IucHJvcGVydGllcywgcHJvcGVydGllcyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZW50aXR5LnJlbW92ZSh0aGlzKTtcbiAgfVxuXG4gIF9vbkRlc3Ryb3llZCgpIHtcbiAgICB0aGlzLm9uRGVzdHJveWVkKCk7XG4gICAgZGVsZXRlIHRoaXMuZW50aXR5O1xuICB9XG5cbiAgX29uRXZlbnQoZXZ0KSB7XG4gICAgdGhpcy5vbkV2ZW50KGV2dCk7XG5cbiAgICBpZiAodHlwZW9mIHRoaXNbZXZ0LmhhbmRsZXJOYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1tldnQuaGFuZGxlck5hbWVdKGV2dCk7XG4gICAgfVxuICB9XG5cbiAgX29uQXR0YWNoZWQoZW50aXR5KSB7XG4gICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XG4gICAgdGhpcy5vbkF0dGFjaGVkKGVudGl0eSk7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgY29uc3Qgb2IgPSB7fTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29uc3RydWN0b3IucHJvcGVydGllcykge1xuICAgICAgb2Jba2V5XSA9IHRoaXNba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2I7XG4gIH1cblxuICBvbkF0dGFjaGVkKGVudGl0eSkge31cblxuICBvbkRlc3Ryb3llZCgpIHt9XG5cbiAgb25FdmVudChldnQpIHt9XG5cbn1cblxuX2RlZmluZVByb3BlcnR5KENvbXBvbmVudCwgXCJhbGxvd011bHRpcGxlXCIsIGZhbHNlKTtcblxuX2RlZmluZVByb3BlcnR5KENvbXBvbmVudCwgXCJrZXlQcm9wZXJ0eVwiLCBudWxsKTtcblxuX2RlZmluZVByb3BlcnR5KENvbXBvbmVudCwgXCJwcm9wZXJ0aWVzXCIsIHt9KTtcblxuY2xhc3MgRW50aXR5RXZlbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRhID0ge30pIHtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJkYXRhXCIsIHt9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInByZXZlbnRlZFwiLCBmYWxzZSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJoYW5kbGVkXCIsIGZhbHNlKTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmhhbmRsZXJOYW1lID0gY2FtZWxTdHJpbmcoYG9uICR7dGhpcy5uYW1lfWApO1xuICB9XG5cbiAgaXMobmFtZSkge1xuICAgIHJldHVybiB0aGlzLm5hbWUgPT09IG5hbWU7XG4gIH1cblxuICBoYW5kbGUoKSB7XG4gICAgdGhpcy5oYW5kbGVkID0gdHJ1ZTtcbiAgICB0aGlzLnByZXZlbnRlZCA9IHRydWU7XG4gIH1cblxuICBwcmV2ZW50KCkge1xuICAgIHRoaXMucHJldmVudGVkID0gdHJ1ZTtcbiAgfVxuXG59XG5cbmNvbnN0IE9ORSA9IDFuO1xuY29uc3Qgc3VidHJhY3RCaXQgPSAobnVtLCBiaXQpID0+IHtcbiAgcmV0dXJuIG51bSAmIH4oMW4gPDwgYml0KTtcbn07XG5jb25zdCBhZGRCaXQgPSAobnVtLCBiaXQpID0+IHtcbiAgcmV0dXJuIG51bSB8IE9ORSA8PCBiaXQ7XG59O1xuY29uc3QgaGFzQml0ID0gKG51bSwgYml0KSA9PiB7XG4gIHJldHVybiAobnVtID4+IGJpdCkgJSAybiAhPT0gMG47XG59O1xuY29uc3QgYml0SW50ZXJzZWN0aW9uID0gKG4xLCBuMikgPT4ge1xuICByZXR1cm4gbjEgJiBuMjtcbn07XG5cbmNvbnN0IGF0dGFjaENvbXBvbmVudCA9IChlbnRpdHksIGNvbXBvbmVudCkgPT4ge1xuICBjb25zdCBrZXkgPSBjb21wb25lbnQuX2NrZXk7XG4gIGVudGl0eVtrZXldID0gY29tcG9uZW50O1xuICBlbnRpdHkuY29tcG9uZW50c1trZXldID0gY29tcG9uZW50O1xufTtcblxuY29uc3QgYXR0YWNoQ29tcG9uZW50S2V5ZWQgPSAoZW50aXR5LCBjb21wb25lbnQpID0+IHtcbiAgY29uc3Qga2V5ID0gY29tcG9uZW50Ll9ja2V5O1xuXG4gIGlmICghZW50aXR5LmNvbXBvbmVudHNba2V5XSkge1xuICAgIGVudGl0eVtrZXldID0ge307XG4gICAgZW50aXR5LmNvbXBvbmVudHNba2V5XSA9IHt9O1xuICB9XG5cbiAgZW50aXR5W2tleV1bY29tcG9uZW50W2NvbXBvbmVudC5rZXlQcm9wZXJ0eV1dID0gY29tcG9uZW50O1xuICBlbnRpdHkuY29tcG9uZW50c1trZXldW2NvbXBvbmVudFtjb21wb25lbnQua2V5UHJvcGVydHldXSA9IGNvbXBvbmVudDtcbn07XG5cbmNvbnN0IGF0dGFjaENvbXBvbmVudEFycmF5ID0gKGVudGl0eSwgY29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IGtleSA9IGNvbXBvbmVudC5fY2tleTtcblxuICBpZiAoIWVudGl0eS5jb21wb25lbnRzW2tleV0pIHtcbiAgICBlbnRpdHlba2V5XSA9IFtdO1xuICAgIGVudGl0eS5jb21wb25lbnRzW2tleV0gPSBbXTtcbiAgfVxuXG4gIGVudGl0eVtrZXldLnB1c2goY29tcG9uZW50KTtcbiAgZW50aXR5LmNvbXBvbmVudHNba2V5XS5wdXNoKGNvbXBvbmVudCk7XG59O1xuXG5jb25zdCByZW1vdmVDb21wb25lbnQgPSAoZW50aXR5LCBjb21wb25lbnQpID0+IHtcbiAgY29uc3Qga2V5ID0gY29tcG9uZW50Ll9ja2V5O1xuICBkZWxldGUgZW50aXR5W2tleV07XG4gIGRlbGV0ZSBlbnRpdHkuY29tcG9uZW50c1trZXldO1xuICBlbnRpdHkuX2NiaXRzID0gc3VidHJhY3RCaXQoZW50aXR5Ll9jYml0cywgY29tcG9uZW50Ll9jYml0KTtcblxuICBlbnRpdHkuX2NhbmRpZGFjeSgpO1xufTtcblxuY29uc3QgcmVtb3ZlQ29tcG9uZW50S2V5ZWQgPSAoZW50aXR5LCBjb21wb25lbnQpID0+IHtcbiAgY29uc3Qga2V5ID0gY29tcG9uZW50Ll9ja2V5O1xuICBjb25zdCBrZXlQcm9wID0gY29tcG9uZW50W2NvbXBvbmVudC5rZXlQcm9wZXJ0eV07XG4gIGRlbGV0ZSBlbnRpdHlba2V5XVtrZXlQcm9wXTtcbiAgZGVsZXRlIGVudGl0eS5jb21wb25lbnRzW2tleV1ba2V5UHJvcF07XG5cbiAgaWYgKE9iamVjdC5rZXlzKGVudGl0eVtrZXldKS5sZW5ndGggPD0gMCkge1xuICAgIGRlbGV0ZSBlbnRpdHlba2V5XTtcbiAgICBkZWxldGUgZW50aXR5LmNvbXBvbmVudHNba2V5XTtcbiAgICBlbnRpdHkuX2NiaXRzID0gc3VidHJhY3RCaXQoZW50aXR5Ll9jYml0cywgY29tcG9uZW50Ll9jYml0KTtcblxuICAgIGVudGl0eS5fY2FuZGlkYWN5KCk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbW92ZUNvbXBvbmVudEFycmF5ID0gKGVudGl0eSwgY29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IGtleSA9IGNvbXBvbmVudC5fY2tleTtcbiAgY29uc3QgaWR4ID0gZW50aXR5W2tleV0uaW5kZXhPZihjb21wb25lbnQpO1xuICBlbnRpdHlba2V5XS5zcGxpY2UoaWR4LCAxKTtcbiAgZW50aXR5LmNvbXBvbmVudHNba2V5XS5zcGxpY2UoaWR4LCAxKTtcblxuICBpZiAoZW50aXR5W2tleV0ubGVuZ3RoIDw9IDApIHtcbiAgICBkZWxldGUgZW50aXR5W2tleV07XG4gICAgZGVsZXRlIGVudGl0eS5jb21wb25lbnRzW2tleV07XG4gICAgZW50aXR5Ll9jYml0cyA9IHN1YnRyYWN0Qml0KGVudGl0eS5fY2JpdHMsIGNvbXBvbmVudC5fY2JpdCk7XG5cbiAgICBlbnRpdHkuX2NhbmRpZGFjeSgpO1xuICB9XG59O1xuXG5jb25zdCBzZXJpYWxpemVDb21wb25lbnQgPSBjb21wb25lbnQgPT4ge1xuICByZXR1cm4gY29tcG9uZW50LnNlcmlhbGl6ZSgpO1xufTtcblxuY29uc3Qgc2VyaWFsaXplQ29tcG9uZW50QXJyYXkgPSBhcnIgPT4ge1xuICByZXR1cm4gYXJyLm1hcChzZXJpYWxpemVDb21wb25lbnQpO1xufTtcblxuY29uc3Qgc2VyaWFsaXplQ29tcG9uZW50S2V5ZWQgPSBvYiA9PiB7XG4gIGNvbnN0IHNlciA9IHt9O1xuXG4gIGZvciAoY29uc3QgayBpbiBvYikge1xuICAgIHNlcltrXSA9IHNlcmlhbGl6ZUNvbXBvbmVudChvYltrXSk7XG4gIH1cblxuICByZXR1cm4gc2VyO1xufTtcblxuY2xhc3MgRW50aXR5IHtcbiAgY29uc3RydWN0b3Iod29ybGQsIGlkKSB7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2NiaXRzXCIsIDBuKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9xZWxpZ2libGVcIiwgdHJ1ZSk7XG5cbiAgICB0aGlzLndvcmxkID0gd29ybGQ7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgIHRoaXMuaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIF9jYW5kaWRhY3koKSB7XG4gICAgaWYgKHRoaXMuX3FlbGlnaWJsZSkge1xuICAgICAgdGhpcy53b3JsZC5fY2FuZGlkYXRlKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZChjbGF6eiwgcHJvcGVydGllcykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBjbGF6eihwcm9wZXJ0aWVzKTtcblxuICAgIGlmIChjb21wb25lbnQua2V5UHJvcGVydHkpIHtcbiAgICAgIGF0dGFjaENvbXBvbmVudEtleWVkKHRoaXMsIGNvbXBvbmVudCk7XG4gICAgfSBlbHNlIGlmIChjb21wb25lbnQuYWxsb3dNdWx0aXBsZSkge1xuICAgICAgYXR0YWNoQ29tcG9uZW50QXJyYXkodGhpcywgY29tcG9uZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0YWNoQ29tcG9uZW50KHRoaXMsIGNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY2JpdHMgPSBhZGRCaXQodGhpcy5fY2JpdHMsIGNvbXBvbmVudC5fY2JpdCk7XG5cbiAgICBjb21wb25lbnQuX29uQXR0YWNoZWQodGhpcyk7XG5cbiAgICB0aGlzLl9jYW5kaWRhY3koKTtcbiAgfVxuXG4gIGhhcyhjbGF6eikge1xuICAgIHJldHVybiBoYXNCaXQodGhpcy5fY2JpdHMsIGNsYXp6LnByb3RvdHlwZS5fY2JpdCk7XG4gIH1cblxuICByZW1vdmUoY29tcG9uZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudC5rZXlQcm9wZXJ0eSkge1xuICAgICAgcmVtb3ZlQ29tcG9uZW50S2V5ZWQodGhpcywgY29tcG9uZW50KTtcbiAgICB9IGVsc2UgaWYgKGNvbXBvbmVudC5hbGxvd011bHRpcGxlKSB7XG4gICAgICByZW1vdmVDb21wb25lbnRBcnJheSh0aGlzLCBjb21wb25lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVDb21wb25lbnQodGhpcywgY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnQuX29uRGVzdHJveWVkKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGZvciAoY29uc3QgayBpbiB0aGlzLmNvbXBvbmVudHMpIHtcbiAgICAgIGNvbnN0IHYgPSB0aGlzLmNvbXBvbmVudHNba107XG5cbiAgICAgIGlmICh2IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuX2NiaXRzID0gc3VidHJhY3RCaXQodGhpcy5fY2JpdHMsIHYuX2NiaXQpO1xuXG4gICAgICAgIHYuX29uRGVzdHJveWVkKCk7XG4gICAgICB9IGVsc2UgaWYgKHYgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiB2KSB7XG4gICAgICAgICAgdGhpcy5fY2JpdHMgPSBzdWJ0cmFjdEJpdCh0aGlzLl9jYml0cywgY29tcG9uZW50Ll9jYml0KTtcblxuICAgICAgICAgIGNvbXBvbmVudC5fb25EZXN0cm95ZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgT2JqZWN0LnZhbHVlcyh2KSkge1xuICAgICAgICAgIHRoaXMuX2NiaXRzID0gc3VidHJhY3RCaXQodGhpcy5fY2JpdHMsIGNvbXBvbmVudC5fY2JpdCk7XG5cbiAgICAgICAgICBjb21wb25lbnQuX29uRGVzdHJveWVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXNba107XG4gICAgICBkZWxldGUgdGhpcy5jb21wb25lbnRzW2tdO1xuICAgIH1cblxuICAgIHRoaXMuX2NhbmRpZGFjeSgpO1xuXG4gICAgdGhpcy53b3JsZC5fZGVzdHJveWVkKHRoaXMuaWQpO1xuXG4gICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBrIGluIHRoaXMuY29tcG9uZW50cykge1xuICAgICAgY29uc3QgdiA9IHRoaXMuY29tcG9uZW50c1trXTtcblxuICAgICAgaWYgKHYgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50c1trXSA9IHNlcmlhbGl6ZUNvbXBvbmVudCh2KTtcbiAgICAgIH0gZWxzZSBpZiAodiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGNvbXBvbmVudHNba10gPSBzZXJpYWxpemVDb21wb25lbnRBcnJheSh2KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudHNba10gPSBzZXJpYWxpemVDb21wb25lbnRLZXllZCh2KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAuLi5jb21wb25lbnRzXG4gICAgfTtcbiAgfVxuXG4gIGZpcmVFdmVudChuYW1lLCBkYXRhKSB7XG4gICAgY29uc3QgZXZ0ID0gbmV3IEVudGl0eUV2ZW50KG5hbWUsIGRhdGEpO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb21wb25lbnRzKSB7XG4gICAgICBjb25zdCB2ID0gdGhpcy5jb21wb25lbnRzW2tleV07XG5cbiAgICAgIGlmICh2IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICAgIHYuX29uRXZlbnQoZXZ0KTtcblxuICAgICAgICBpZiAoZXZ0LnByZXZlbnRlZCkge1xuICAgICAgICAgIHJldHVybiBldnQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZbaV0uX29uRXZlbnQoZXZ0KTtcblxuICAgICAgICAgIGlmIChldnQucHJldmVudGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZXZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgT2JqZWN0LnZhbHVlcyh2KSkge1xuICAgICAgICAgIGNvbXBvbmVudC5fb25FdmVudChldnQpO1xuXG4gICAgICAgICAgaWYgKGV2dC5wcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBldnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGV2dDtcbiAgfVxuXG59XG5cbmNsYXNzIFF1ZXJ5IHtcbiAgY29uc3RydWN0b3Iod29ybGQsIGZpbHRlcnMpIHtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfY2FjaGVcIiwgW10pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX29uQWRkTGlzdGVuZXJzXCIsIFtdKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9vblJlbW92ZUxpc3RlbmVyc1wiLCBbXSk7XG5cbiAgICB0aGlzLl93b3JsZCA9IHdvcmxkO1xuICAgIGNvbnN0IGFueSA9IGZpbHRlcnMuYW55IHx8IFtdO1xuICAgIGNvbnN0IGFsbCA9IGZpbHRlcnMuYWxsIHx8IFtdO1xuICAgIGNvbnN0IG5vbmUgPSBmaWx0ZXJzLm5vbmUgfHwgW107XG4gICAgdGhpcy5fYW55ID0gYW55LnJlZHVjZSgocywgYykgPT4ge1xuICAgICAgcmV0dXJuIGFkZEJpdChzLCBjLnByb3RvdHlwZS5fY2JpdCk7XG4gICAgfSwgMG4pO1xuICAgIHRoaXMuX2FsbCA9IGFsbC5yZWR1Y2UoKHMsIGMpID0+IHtcbiAgICAgIHJldHVybiBhZGRCaXQocywgYy5wcm90b3R5cGUuX2NiaXQpO1xuICAgIH0sIDBuKTtcbiAgICB0aGlzLl9ub25lID0gbm9uZS5yZWR1Y2UoKHMsIGMpID0+IHtcbiAgICAgIHJldHVybiBhZGRCaXQocywgYy5wcm90b3R5cGUuX2NiaXQpO1xuICAgIH0sIDBuKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIG9uRW50aXR5QWRkZWQoZm4pIHtcbiAgICB0aGlzLl9vbkFkZExpc3RlbmVycy5wdXNoKGZuKTtcbiAgfVxuXG4gIG9uRW50aXR5UmVtb3ZlZChmbikge1xuICAgIHRoaXMuX29uUmVtb3ZlTGlzdGVuZXJzLnB1c2goZm4pO1xuICB9XG5cbiAgaGFzKGVudGl0eSkge1xuICAgIHJldHVybiB0aGlzLmlkeChlbnRpdHkpID49IDA7XG4gIH1cblxuICBpZHgoZW50aXR5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlLmluZGV4T2YoZW50aXR5KTtcbiAgfVxuXG4gIG1hdGNoZXMoZW50aXR5KSB7XG4gICAgY29uc3QgYml0cyA9IGVudGl0eS5fY2JpdHM7XG4gICAgY29uc3QgYW55ID0gdGhpcy5fYW55ID09PSAwbiB8fCBiaXRJbnRlcnNlY3Rpb24oYml0cywgdGhpcy5fYW55KSA+IDA7XG5cbiAgICBjb25zdCBhbGwgPSBiaXRJbnRlcnNlY3Rpb24oYml0cywgdGhpcy5fYWxsKSA9PT0gdGhpcy5fYWxsO1xuXG4gICAgY29uc3Qgbm9uZSA9IGJpdEludGVyc2VjdGlvbihiaXRzLCB0aGlzLl9ub25lKSA9PT0gMG47XG4gICAgcmV0dXJuIGFueSAmJiBhbGwgJiYgbm9uZTtcbiAgfVxuXG4gIGNhbmRpZGF0ZShlbnRpdHkpIHtcbiAgICBjb25zdCBpZHggPSB0aGlzLmlkeChlbnRpdHkpO1xuICAgIGNvbnN0IGlzVHJhY2tpbmcgPSBpZHggPj0gMDtcblxuICAgIGlmICghZW50aXR5LmlzRGVzdHJveWVkICYmIHRoaXMubWF0Y2hlcyhlbnRpdHkpKSB7XG4gICAgICBpZiAoIWlzVHJhY2tpbmcpIHtcbiAgICAgICAgdGhpcy5fY2FjaGUucHVzaChlbnRpdHkpO1xuXG4gICAgICAgIHRoaXMuX29uQWRkTGlzdGVuZXJzLmZvckVhY2goY2IgPT4gY2IoZW50aXR5KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpc1RyYWNraW5nKSB7XG4gICAgICB0aGlzLl9jYWNoZS5zcGxpY2UoaWR4LCAxKTtcblxuICAgICAgdGhpcy5fb25SZW1vdmVMaXN0ZW5lcnMuZm9yRWFjaChjYiA9PiBjYihlbnRpdHkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuX2NhY2hlID0gW107XG5cbiAgICB0aGlzLl93b3JsZC5fZW50aXRpZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xuICAgICAgdGhpcy5jYW5kaWRhdGUoZW50aXR5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGU7XG4gIH1cblxufVxuXG5jbGFzcyBXb3JsZCB7XG4gIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9pZFwiLCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9xdWVyaWVzXCIsIFtdKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9lbnRpdGllc1wiLCBuZXcgTWFwKCkpO1xuXG4gICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gIH1cblxuICBjcmVhdGVJZCgpIHtcbiAgICByZXR1cm4gKyt0aGlzLl9pZCArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcbiAgfVxuXG4gIGdldEVudGl0eShpZCkge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdGllcy5nZXQoaWQpO1xuICB9XG5cbiAgZ2V0RW50aXRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VudGl0aWVzLnZhbHVlcygpO1xuICB9XG5cbiAgY3JlYXRlRW50aXR5KGlkID0gdGhpcy5jcmVhdGVJZCgpKSB7XG4gICAgY29uc3QgZW50aXR5ID0gbmV3IEVudGl0eSh0aGlzLCBpZCk7XG5cbiAgICB0aGlzLl9lbnRpdGllcy5zZXQoaWQsIGVudGl0eSk7XG5cbiAgICByZXR1cm4gZW50aXR5O1xuICB9XG5cbiAgZGVzdHJveUVudGl0eShpZCkge1xuICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZ2V0RW50aXR5KGlkKTtcblxuICAgIGlmIChlbnRpdHkpIHtcbiAgICAgIGVudGl0eS5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveUVudGl0aWVzKCkge1xuICAgIHRoaXMuX2VudGl0aWVzLmZvckVhY2goZW50aXR5ID0+IHtcbiAgICAgIGVudGl0eS5kZXN0cm95KCk7XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveUVudGl0aWVzKCk7XG4gICAgdGhpcy5faWQgPSAwO1xuICAgIHRoaXMuX3F1ZXJpZXMgPSBbXTtcbiAgICB0aGlzLl9lbnRpdGllcyA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIGNyZWF0ZVF1ZXJ5KGZpbHRlcnMpIHtcbiAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSh0aGlzLCBmaWx0ZXJzKTtcblxuICAgIHRoaXMuX3F1ZXJpZXMucHVzaChxdWVyeSk7XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBjcmVhdGVQcmVmYWIobmFtZSwgcHJvcGVydGllcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuZW5naW5lLl9wcmVmYWJzLmNyZWF0ZSh0aGlzLCBuYW1lLCBwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZShlbnRpdGllcykge1xuICAgIGNvbnN0IGpzb24gPSBbXTtcbiAgICBjb25zdCBsaXN0ID0gZW50aXRpZXMgfHwgdGhpcy5fZW50aXRpZXM7XG4gICAgbGlzdC5mb3JFYWNoKGUgPT4ge1xuICAgICAganNvbi5wdXNoKGUuc2VyaWFsaXplKCkpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBlbnRpdGllczoganNvblxuICAgIH07XG4gIH1cblxuICBkZXNlcmlhbGl6ZShkYXRhKSB7XG4gICAgZm9yIChjb25zdCBlbnRpdHlEYXRhIG9mIGRhdGEuZW50aXRpZXMpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZU9yR2V0RW50aXR5QnlJZChlbnRpdHlEYXRhLmlkKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGVudGl0eURhdGEgb2YgZGF0YS5lbnRpdGllcykge1xuICAgICAgdGhpcy5fZGVzZXJpYWxpemVFbnRpdHkoZW50aXR5RGF0YSk7XG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZU9yR2V0RW50aXR5QnlJZChpZCkge1xuICAgIHJldHVybiB0aGlzLmdldEVudGl0eShpZCkgfHwgdGhpcy5jcmVhdGVFbnRpdHkoaWQpO1xuICB9XG5cbiAgX2Rlc2VyaWFsaXplRW50aXR5KGRhdGEpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIC4uLmNvbXBvbmVudHNcbiAgICB9ID0gZGF0YTtcblxuICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuX2NyZWF0ZU9yR2V0RW50aXR5QnlJZChpZCk7XG5cbiAgICBlbnRpdHkuX3FlbGlnaWJsZSA9IGZhbHNlO1xuICAgIE9iamVjdC5lbnRyaWVzKGNvbXBvbmVudHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IGNhbWVsU3RyaW5nKGtleSk7XG5cbiAgICAgIGNvbnN0IGRlZiA9IHRoaXMuZW5naW5lLl9jb21wb25lbnRzLmdldCh0eXBlKTtcblxuICAgICAgaWYgKGRlZi5hbGxvd011bHRpcGxlKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXModmFsdWUpLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgZW50aXR5LmFkZChkZWYsIGQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVudGl0eS5hZGQoZGVmLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZW50aXR5Ll9xZWxpZ2libGUgPSB0cnVlO1xuXG4gICAgZW50aXR5Ll9jYW5kaWRhY3koKTtcbiAgfVxuXG4gIF9jYW5kaWRhdGUoZW50aXR5KSB7XG4gICAgdGhpcy5fcXVlcmllcy5mb3JFYWNoKHEgPT4gcS5jYW5kaWRhdGUoZW50aXR5KSk7XG4gIH1cblxuICBfZGVzdHJveWVkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VudGl0aWVzLmRlbGV0ZShpZCk7XG4gIH1cblxufVxuXG5jbGFzcyBFbmdpbmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfY29tcG9uZW50c1wiLCBuZXcgQ29tcG9uZW50UmVnaXN0cnkoKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfcHJlZmFic1wiLCBuZXcgUHJlZmFiUmVnaXN0cnkodGhpcykpO1xuICB9XG5cbiAgcmVnaXN0ZXJDb21wb25lbnQoY2xhenopIHtcbiAgICB0aGlzLl9jb21wb25lbnRzLnJlZ2lzdGVyKGNsYXp6KTtcbiAgfVxuXG4gIHJlZ2lzdGVyUHJlZmFiKGRhdGEpIHtcbiAgICB0aGlzLl9wcmVmYWJzLnJlZ2lzdGVyKGRhdGEpO1xuICB9XG5cbiAgY3JlYXRlV29ybGQoKSB7XG4gICAgcmV0dXJuIG5ldyBXb3JsZCh0aGlzKTtcbiAgfVxuXG4gIGRlc3Ryb3lXb3JsZCh3b3JsZCkge1xuICAgIHdvcmxkLmRlc3Ryb3koKTtcbiAgfVxuXG59XG5cbmV4cG9ydCB7IENvbXBvbmVudCwgRW5naW5lIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyB3Z2x0IGZyb20gXCJ3Z2x0XCI7XHJcbmltcG9ydCBlbmdpbmUgZnJvbSAnLi9lY3MnO1xyXG5pbXBvcnQge0FwcGVhcmFuY2UsIENvbWJhdCwgRGVzY3JpcHRpb24sIEhlYWx0aCwgUG9zaXRpb24sIEFjdGlvbiwgTW92ZW1lbnQsIEVuZW15LCBBbGx5fSBmcm9tIFwiLi9jb21wb25lbnRzXCJcclxuXHJcblxyXG52YXIgbG9jYXRpb25JZCA9IHt9XHJcbi8vY3JlYXRpbmcgdGhlIG1hcCBpbiBcImNhbnZhc1wiIHdpZHRoID0gODAsIGhlaWdodCA9IDUwXHJcbmNvbnN0IHRlcm1pbmFsID0gbmV3IHdnbHQuVGVybWluYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyksIDgwLCA1MCk7XHJcblxyXG4vL1dHTFQgbGVmdG92ZXJzLiBTZXR0aW5nIHRoZSB3aG9sZSBtYXAgYXMgZXhwbG9yZWQgYW5kIHZpc2libGUgdG8gdGhlIHBsYXllclxyXG5mb3IgKGxldCB5ID0gMDsgeSA8IHRlcm1pbmFsLmhlaWdodDsgeSsrKSB7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRlcm1pbmFsLndpZHRoOyB4KyspIHtcclxuICAgICAgICB0ZXJtaW5hbC5ncmlkW3ldW3hdLnZpc2libGUgPSB0cnVlXHJcbiAgICAgICAgdGVybWluYWwuZ3JpZFt5XVt4XS5leHBsb3JlZCA9IHRydWVcclxuICAgIH1cclxufVxyXG5cclxuLy9jcmVhdGluZyB3b3JsZCB0byBjb250YWluIGVudGl0aWVzIGluIG9yZGVyIHRvIGVuYWJsZSBxdWVyeVxyXG5jb25zdCB3b3JsZCA9IGVuZ2luZS5jcmVhdGVXb3JsZCgpO1xyXG4vL3BsYXllciA9IGh1bWFuIHRlc3QgcGlsb3RcclxuY29uc3QgcGxheWVyID0gd29ybGQuY3JlYXRlUHJlZmFiKFwiSHVtYW5cIilcclxucGxheWVyLnBvc2l0aW9uLnggPSA1MFxyXG5wbGF5ZXIucG9zaXRpb24ueSA9IDIwXHJcbmxvY2F0aW9uSWRbcGxheWVyLnBvc2l0aW9uLnggKyBcIixcIiArIHBsYXllci5wb3NpdGlvbi55XSA9IHBsYXllci5pZFxyXG4vL3pvbWJpZSA9IHpvbWJpZSB0ZXN0IHBpbG90XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcclxuICAgICAgICBsZXQgem9tYmllID0gd29ybGQuY3JlYXRlUHJlZmFiKFwiWm9tYmllXCIpXHJcbiAgICAgICAgem9tYmllLnBvc2l0aW9uLnggPSA0OCtpXHJcbiAgICAgICAgem9tYmllLnBvc2l0aW9uLnkgPSAxMCtqXHJcbiAgICAgICAgbG9jYXRpb25JZFt6b21iaWUucG9zaXRpb24ueCArIFwiLFwiICsgem9tYmllLnBvc2l0aW9uLnldID0gem9tYmllLmlkXHJcbiAgICB9ICBcclxufVxyXG4vKiAgRnVjayBpdCBjdXN0b20gem9tYmllLWVzcXVlIHBhdGhmaW5kaW5nLlxyXG4gICAgRGlsZW1uYTogSWYgZWFjaCB6b21iaWUgb25seSBhdHRlbXB0cyB0byBtb3ZlIG9uY2UsIHRoZXJlIHdpbGwgYmUgYSB0cmlja2xlL2FjY29yZGlhbiBlZmZlY3QgZm9yIG1vdmVtZW50LlxyXG4gICAgU29sdXRpb24gMTogSWYgYSB6b21iaWUgZG9lc24ndCBtb3ZlLCB0aGV5IGRvbid0IGNvbnN1bWUgdGhlaXIgYWN0aW9uIGZvciB0aGUgc2Vjb25kIGFuZCB3YWl0IGZvciBhbiBvcGVuaW5nLlxyXG4gICAgICAgIFByb3M6IExlc3MgcHJvY2Vzcy1pbnRlbnNpdmUuXHJcbiAgICAgICAgQ29uczogV291bGQgY2F1c2UgcHJvYmFibHkgbWlub3Igc3R1dHRlcnN0ZXBwaW5nIHRvIHN0aWxsIG9jY3VyXHJcbiAgICBTb2x1dGlvbiAyOiBEb24ndCByZW5kZXIgYSBmcmFtZSB1bnRpbCBhbGwgem9tYmllcyBoYXZlIGZpbGxlZCBpbiBldmVyeSBzcG90IHBvc3NpYmxlIHRvIHRoZW0uXHJcbiAgICAgICAgUHJvczogWm9tYmllcyB3aWxsIG1vdmUgYXMgb25lIG1hc3NpdmUgd2F2ZVxyXG4gICAgICAgIENvbnM6IFBvdGVudGlhbCB0byBiZSBkYW5nZXJvdXNseSBwcm9jZXNzLWludGVuc2l2ZVxyXG5cclxuICAgIERPTkUgLSBEZXRlcm1pbmUgY2FyZGluYWwgbW92ZW1lbnQsIHNhdmUgdmFyaWFibGUgXHJcbiAgICBET05FIC0gWm9tYmllIG1vdmVzIHRvd2FyZHMgbmVhcmVzdCB0YXJnZXRcclxuICAgIElmIHpvbWJpZSBjYW4ndCBtb3ZlIGRpcmVjdGx5IHRvd2FyZHMgdGFyZ2V0LCByYW5kb21seSBtb3ZlIGxlZnQvcmlnaHQgb2YgdGFyZ2V0XHJcbiAgICAgICAgLSBIZWFkaW5nIHNvdXRoLCBtb3ZlIHNvdXRod2VzdC9zb3V0aGVhc3QuIEV0Yy4gZm9yIG90aGVyIGRpcmVjdGlvbnNcclxuICAgIElmIHpvbWJpZSBjYW4ndCBtb3ZlIGFyb3VuZCB0YXJnZXQsIHJhbmRvbWx5IG1vdmUgOTBkZWcgb2ZmIHRhcmdldFxyXG4gICAgICAgIC1IZWFkaW5nIHNvdXRoLCBtb3ZlIHdlc3Qgb3IgZWFzdCwgZXRjLlxyXG4gICAgSWYgem9tYmllIGNhbid0IG1ha2UgbGF0ZXJhbCBwcm9ncmVzcywgem9tYmllIGRvZXNuJ3QgbW92ZS5cclxuICAgIFxyXG4gICAgU29sdXRpb24gMSBicmVhazpcclxuICAgICAgICBJZiB6b21iaWUgbW92ZWQsIHRoZXkgaGF2ZSBjb25zdW1lZCB0aGVpciBhY3Rpb24gZm9yIHRoZWlyIGFjdGlvbiBzcGVlZC4gRmxhZyBjb29sZG93blxyXG4gICAgU29sdXRpb24gMiBicmVhazpcclxuICAgICAgICBJZiB6b21iaWUgbW92ZWQsIGZsYWcgaXQuXHJcbiAgICAgICAgICAgIFJlbWVtYmVyIHRoZSB2YWNhdGVkIHNwb3QncyBjb29yZGluYXRlc1xyXG4gICAgICAgIElmIHpvbWJpZSBkaWRuJ3QgbW92ZSwgZmxhZyBpdFxyXG4gICAgICAgIFN0YXJ0aW5nIHdpdGggb3Bwb3NpdGUgb2YgU291dGggYW5kIHdvcmtpbmcgb3V0LCBtb3ZlIHpvbWJpZSBpbi5cclxuICAgICAgICAgICAgRXg6IE1vdmUgaW4gTiwgTlcvTkUsIEUvV1xyXG4gICAgICAgICAgICBWZXJpZnkgWm9tYmllJ3MgdGFyZ2V0IGRpcmVjdGlvbi4gSWYgbW92aW5nIGludG8gbW92ZXMgYXdheSBmcm9tIHRhcmdldCwgc2tpcCB6b21iaWUuXHJcbiAgICAgICAgICAgIElmIG5vIHpvbWJpZXMgbW92ZSwgc2tpcCB0byBuZXh0IHZhY2F0ZWQgc3BvdC5cclxuICAgIFxyXG4gICAgSWYgem9tYmllIGlzIGFibGUgdG8gc3VjY2Vzc2Z1bGx5IG1vdmUgYW5kIGVuZCBhZGphY2VudCB0byB0aGVpciB0YXJnZXQsIGZsYWcgYXMgJ2VuZ2FnZWQnXHJcbiAgICBFbmdhZ2VkIHpvbWJpZXMgbm8gbG9uZ2VyIHNlYXJjaCBmb3IgbmVhcmJ5IHRhcmdldHMgdW50aWwgdGFyZ2V0IGlzIGRlYWQgb3IgbW92ZXMgb3V0IG9mIHJhbmdlXHJcbiAgICBSZXN1bHQ6IFpvbWJpZXMgd2lsbCBtb3ZlIGFzIGEgaG9yZGUgdG93YXJkcyBuZWFyZXN0IHRhcmdldHNcclxuXHJcbiAgICBUT0RPOiAgIFRhcmdldCBzZWxlY3Rpb25cclxuICAgICAgICAgICAgRnJlcXVlbmN5IG9mIHRhcmdldCBzZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgIE1heWJlIE9ubHkgcXVlcnkgZm9yIHRhcmdldHMgaW4gc2l0dWF0aW9ucyB3aGVyZSBhIHRhcmdldCBpcyByZXF1aXJlZD9cclxuICAgICAgICAgICAgICAgICAgICBleC4gbmVlZGluZyBtb3ZlbWVudCwgbmVlZGluZyB0byBhdHRhY2tcclxuICAgICAgICAgICAgICAgIFBhcnQgb2YgZ2VuZXJhbCBxdWVyeSBzd2VlcCBvZiB6b21iaWVzLCBpZiB6b21iaWUgIT0gdGFyZ2V0LCBhZGQgdG8gbmVlZFRhcmdldCBsaXN0P1xyXG4gICAgICAgICAgICAgICAgICAgIER1cmluZyBxdWVyeSBzd2VlcCBvZiBnb2xlbXMsIGFzc2lnbiB6b21iaWUgdG8gbmVhcmVzdCB0YXJnZXQ/XHJcblxyXG4gICAgRG8gc29sdXRpb24gMSBmaXJzdCBhcyBwcm9vZiBvZiBjb25jZXB0IGR1ZSB0byBiZWluZyBtdWNoIHNpbXBsZXJcclxuICAgIEF0dGVtcHQgc29sdXRpb24gMSBhbmQgMiB3aXRoIHRoZW9yZXRpY2FsIG1heGltdW0gb2Ygem9tYmllcyB0byBzZWUgcHJvY2Vzc2luZyBzdHJhaW4gYW5kIGNvbXBhcmVcclxuICAgICovXHJcbiAvL3F1ZXJ5IGFycmF5XHJcbmNvbnN0IHF1ZXJ5ID0ge1xyXG4gICAgYWxsIDogd29ybGQuY3JlYXRlUXVlcnkoe1xyXG4gICAgICAgIGFsbDogW10sXHJcbiAgICB9KSxcclxuICAgIGVuZW1pZXMgOiB3b3JsZC5jcmVhdGVRdWVyeSh7XHJcbiAgICAgICAgYWxsOiBbRW5lbXldLFxyXG4gICAgfSksXHJcbiAgICBhbGxpZXMgOiB3b3JsZC5jcmVhdGVRdWVyeSh7XHJcbiAgICAgICAgYWxsOiBbQWxseV0sXHJcbiAgICB9KSxcclxufTsgXHJcblxyXG4vL2NhcmRpbmFsIGRpcmVjdGlvbiBmb3IgbW92ZW1lbnRcclxuY29uc3QgY2FyZGluYWxzID0gW1swLDFdLFsxLDFdLFsxLDBdLFsxLC0xXSxbMCwtMV0sWy0xLC0xXSxbLTEsMF0sWy0xLDFdXVxyXG5cclxuLy9Db2xsZWN0aXZlIG9mIGFsbCBlbmVteSBBSVxyXG4vL0FJIG5lZWRzIHRvIGhhdmUgdGFyZ2V0dGluZywgYXR0YWNraW5nLCBtb3ZpbmdcclxuZnVuY3Rpb24gZW5lbXlBSSh0aW1lKSB7XHJcblxyXG4gICAgcXVlcnkuZW5lbWllcy5nZXQoKS5mb3JFYWNoKChlbnRpdHlFbmVteSkgPT4ge1xyXG4gICAgICAgIC8vem9tYmllIEFJXHJcblxyXG4gICAgICAgIGlmIChlbnRpdHlFbmVteS5kZXNjcmlwdGlvbi5uYW1lID09IFwiWm9tYmllXCIpIHtcclxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gMFxyXG4gICAgICAgICAgICAvL0RldGVybWluZSBjbG9zZXN0IHBsYXllciBhbGx5IHRvIHpvbWJpZVxyXG4gICAgICAgICAgICBxdWVyeS5hbGxpZXMuZ2V0KCkuZm9yRWFjaCgoZW50aXR5QWxseSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguaHlwb3QoKGVudGl0eUVuZW15LnBvc2l0aW9uLnggLSBlbnRpdHlBbGx5LnBvc2l0aW9uLngpLChlbnRpdHlFbmVteS5wb3NpdGlvbi55IC0gZW50aXR5QWxseS5wb3NpdGlvbi55KSkgPCBkaXN0YW5jZSB8fCBkaXN0YW5jZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5RW5lbXkuY29tYmF0LnggPSBlbnRpdHlBbGx5LnBvc2l0aW9uLnhcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlFbmVteS5jb21iYXQueSA9IGVudGl0eUFsbHkucG9zaXRpb24ueVxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUVuZW15LmNvbWJhdC50YXJnZXQgPSBlbnRpdHlBbGx5LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBNYXRoLmh5cG90KChlbnRpdHlFbmVteS5wb3NpdGlvbi54IC0gZW50aXR5QWxseS5wb3NpdGlvbi54KSwoZW50aXR5RW5lbXkucG9zaXRpb24ueSAtIGVudGl0eUFsbHkucG9zaXRpb24ueSkpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZW50aXR5RW5lbXkuY29tYmF0LmRpc3RhbmNlID0gZGlzdGFuY2VcclxuICAgICAgICAgICAgLy9kZXRlcm1pbmUgY2FyZGluYWwgbW92ZW1lbnQgdG8gbmVhcmVzdCBlbmVteVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihlbnRpdHlFbmVteS5jb21iYXQueCAtIGVudGl0eUVuZW15LnBvc2l0aW9uLngsIGVudGl0eUVuZW15LmNvbWJhdC55IC0gZW50aXR5RW5lbXkucG9zaXRpb24ueSkqIDE4MCAvIE1hdGguUElcclxuICAgICAgICAgICAgICAgIGxldCBsb3dBbmdsZSA9IGkgKiA0NSAtIDIyLjVcclxuICAgICAgICAgICAgICAgIGxldCBoaWdoQW5nbGUgPSBpICogNDUgKyAyMi41XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5zaWduKGxvd0FuZ2xlKSA9PSAtMSkge2xvd0FuZ2xlICs9IDM2MH1cclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnNpZ24oYW5nbGUpID09IC0xKSB7YW5nbGUgKz0gMzYwfVxyXG4gICAgICAgICAgICAgICAgaWYgKChpID09IDAgJiYgKGFuZ2xlID49IDMzNy41IHx8IGFuZ2xlIDw9IDIyLjUpKSB8fCAobG93QW5nbGUgPD0gYW5nbGUgJiYgYW5nbGUgPD0gaGlnaEFuZ2xlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUVuZW15Lm1vdmVtZW50LnggPSBjYXJkaW5hbHNbaV1bMF1cclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlFbmVteS5tb3ZlbWVudC55ID0gY2FyZGluYWxzW2ldWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5RW5lbXkubW92ZW1lbnQuY2FyZGluYWwgPSBpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufVxyXG4vL3F1ZXJ5IGFsbCBhbmQgZG8gdGhlaXIgbmV4dCBhY3Rpb24uIEF0dGFjayBlbHNlIG1vdmVcclxuLy9UT0RPOiBNb3ZlbWVudCBmb3IgdmVsb2NpdHkgPiAxLiBJbmNyZW1lbnQgdGhyb3VnaCBlYWNoIHN0ZXAgdG8gZGV0ZXJtaW5lIGlmIG5leHQgc3RlcCBpcyBjbGVhci9hZGphY2VudCB0byB0YXJnZXRcclxuLy9UT0RPOiBNYXliZSByYW5kb21pemUgdGhlIGRpcmVjdGlvbiB6b21iaWVzIGRlY2lkZSB0byBnbyB3aGVuIGJsb2NrZWQuXHJcbmZ1bmN0aW9uIGRvQWN0aW9uKHRpbWUpIHtcclxuICAgIHF1ZXJ5LmFsbC5nZXQoKS5mb3JFYWNoKChlbnRpdHkpID0+IHtcclxuICAgICAgICAvL2FjdGlvbiBhdmFpbGFibGVcclxuICAgICAgICBpZiAodGltZSAtIGVudGl0eS5hY3Rpb24ubGFzdCA+PSBlbnRpdHkuYWN0aW9uLmFkanVzdGVkKSB7XHJcbiAgICAgICAgICAgIC8vdGFyZ2V0IGF2YWlsYWJsZVxyXG4gICAgICAgICAgICBpZiAod29ybGQuZ2V0RW50aXR5KGVudGl0eS5jb21iYXQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgLy9pZiBhZGphY2VudCB0byB0YXJnZXRcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhlbnRpdHkuY29tYmF0LnggLSBlbnRpdHkucG9zaXRpb24ueCkgPD0gMSAmJiBNYXRoLmFicyhlbnRpdHkuY29tYmF0LnkgLSBlbnRpdHkucG9zaXRpb24ueSkgPD0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYWRqYWNlbnRcclxuICAgICAgICAgICAgICAgIC8vVE9ETzpWZWxvY2l0eVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWxvY2F0aW9uSWRbKGVudGl0eS5wb3NpdGlvbi54ICsgZW50aXR5Lm1vdmVtZW50LngpICsgXCIsXCIgKyAoZW50aXR5LnBvc2l0aW9uLnkgKyBlbnRpdHkubW92ZW1lbnQueSldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZW1wdHlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Zyb250IGxlZnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsb2NhdGlvbklkWyhlbnRpdHkucG9zaXRpb24ueCArIGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsICsgMSkgJSA4KVswXSkgKyBcIixcIiArIChlbnRpdHkucG9zaXRpb24ueSArIGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsICsgMSkgJSA4KVsxXSldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkubW92ZW1lbnQueCA9IGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsICsgMSkgJSA4KVswXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVtZW50LnkgPSBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCArIDEpICUgOClbMV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9mcm9udCByaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFsb2NhdGlvbklkWyhlbnRpdHkucG9zaXRpb24ueCArIGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsIC0gMSkgJSA4KVswXSkgKyBcIixcIiArIChlbnRpdHkucG9zaXRpb24ueSArIGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsIC0gMSkgJSA4KVsxXSldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkubW92ZW1lbnQueCA9IGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsIC0gMSkgJSA4KVswXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVtZW50LnkgPSBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCAtIDEpICUgOClbMV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9zaWRlIGxlZnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghbG9jYXRpb25JZFsoZW50aXR5LnBvc2l0aW9uLnggKyBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCArIDIpICUgOClbMF0pICsgXCIsXCIgKyAoZW50aXR5LnBvc2l0aW9uLnkgKyBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCArIDIpICUgOClbMV0pXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVtZW50LnggPSBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCArIDIpICUgOClbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5tb3ZlbWVudC55ID0gY2FyZGluYWxzLmF0KChlbnRpdHkubW92ZW1lbnQuY2FyZGluYWwgKyAyKSAlIDgpWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2lkZSByaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFsb2NhdGlvbklkWyhlbnRpdHkucG9zaXRpb24ueCArIGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsIC0gMikgJSA4KVswXSkgKyBcIixcIiArIChlbnRpdHkucG9zaXRpb24ueSArIGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsIC0gMikgJSA4KVsxXSldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkubW92ZW1lbnQueCA9IGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsIC0gMikgJSA4KVswXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVtZW50LnkgPSBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCAtIDIpICUgOClbMV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9kb24ndCBtb3ZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkubW92ZW1lbnQueCA9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5tb3ZlbWVudC55ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBsb2NhdGlvbklkW2VudGl0eS5wb3NpdGlvbi54ICsgXCIsXCIgKyBlbnRpdHkucG9zaXRpb24ueV1cclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkucG9zaXRpb24ueCArPSBlbnRpdHkubW92ZW1lbnQueFxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eS5wb3NpdGlvbi55ICs9IGVudGl0eS5tb3ZlbWVudC55XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZFtlbnRpdHkucG9zaXRpb24ueCArIFwiLFwiICsgZW50aXR5LnBvc2l0aW9uLnldID0gZW50aXR5LmlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9hZGp1c3RlZCBhY3Rpb24gc3BlZWQgPSBhY3Rpb24gc3BlZWQgKyAoYWN0aW9uIHNwZWVkIC0gKHRpbWUgc2luY2UgbGFzdCBhdHRhY2spKVxyXG4gICAgICAgICAgICAvL0FueSBhY3Rpb24gYWJvdmUgb3IgYmVsb3cgdGhlIGFjdGlvbiBzcGVlZCB3aWxsIGFkanVzdCB0aGUgbmV4dCBhY3Rpb24gYWNjb3JkaW5nbHkgdG8ga2VlcCBhY3Rpb24gc3BlZWQgb24gYXZlcmFnZVxyXG4gICAgICAgICAgICAvL2kuZS4gMTIwMG1zIHNpbmNlIGxhc3QgYWN0aW9uID09IG5leHQgYWN0aW9uIGlzIDgwMG1zIGluc3RlYWQgb2YgMTAwMG1zIFxyXG4gICAgICAgICAgICBlbnRpdHkuYWN0aW9uLmFkanVzdGVkID0gZW50aXR5LmFjdGlvbi5zcGVlZCArIGVudGl0eS5hY3Rpb24uc3BlZWQgLSAodGltZSAtIGVudGl0eS5hY3Rpb24ubGFzdClcclxuICAgICAgICAgICAgZW50aXR5LmFjdGlvbi5sYXN0ID0gdGltZVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiAgICAvL3JlbmRlckxvb3AgPSB0aGluZ3MgdG8gZG8gZXZlcnkgbG9vcC5cclxudGVybWluYWwucmVuZGVyTG9vcCA9IGZ1bmN0aW9uKHRpbWUpIHtcclxuICAgIC8vZnBzIGRpc3BsYXlcclxuICAgIGlmICh0aGlzLmxhc3RSZW5kZXJUaW1lID09PSAwKSB7XHJcbiAgICAgIHRoaXMubGFzdFJlbmRlclRpbWUgPSB0aW1lO1xyXG4gICAgICB0aGlzLmZwcyA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlckRlbHRhID0gdGltZSAtIHRoaXMubGFzdFJlbmRlclRpbWU7XHJcbiAgICAgIHRoaXMubGFzdFJlbmRlclRpbWUgPSB0aW1lO1xyXG4gICAgICB0aGlzLmZwcyA9IE1hdGgucm91bmQoMTAwMC4wIC8gdGhpcy5yZW5kZXJEZWx0YSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgIHRoaXMuYXZlcmFnZUZwcyA9IDAuOTUgKiB0aGlzLmF2ZXJhZ2VGcHMgKyAwLjA1ICogdGhpcy5mcHM7XHJcblxyXG4gICAgfVxyXG4gICAgLy91cGRhdGVLZXlzKHRpbWUpIHdpbGwgc2VuZCB0aW1lc3RhbXAgZm9yIHRoZSBwdXJwb3NlIG9mIGxpbWl0aW5nIHJlcGVhdGVkL2hlbGQga2V5cHJlc3Nlc1xyXG4gICAgdGhpcy5rZXlzLnVwZGF0ZUtleXModGltZSk7XHJcbiAgICAvL3VwZGF0ZSh0aW1lKSB3aWxsIHNlbmQgdGltZXN0YW1wIGZvciB0aGUgcHVycG9zZSBvZiBsaW1pdGluZyByZXBlYXRlZC9oZWxkIG1vdXNlIGNsaWNrcy4gQWxzbyB0cmFja3MgY2hhbmdlIGluIG1vdXNlIGNvb3JkaW5hdGVzXHJcbiAgICB0aGlzLm1vdXNlLnVwZGF0ZSh0aW1lKTtcclxuICAgIGlmICh0aGlzLnVwZGF0ZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgZW5lbXlBSSh0aW1lKVxyXG4gICAgZG9BY3Rpb24odGltZSlcclxuXHJcbiAgICAvL2NsZWFyIHNjcmVlblxyXG4gICAgdGhpcy5mbHVzaCgpO1xyXG4gICAgdGhpcy5jbGVhcigpO1xyXG4gICAgLy9kcmF3aW5nIFVJXHJcbiAgICAvL0RyYXdpbmcgdGVzdCBwaWxvdCBwbGF5ZXIgYW5kIHpvbWJpZVxyXG4gICAgcXVlcnkuYWxsLmdldCgpLmZvckVhY2goKGVudGl0eSkgPT4ge1xyXG4gICAgdGhpcy5kcmF3U3RyaW5nKGVudGl0eS5wb3NpdGlvbi54LCBlbnRpdHkucG9zaXRpb24ueSwgZW50aXR5LmFwcGVhcmFuY2UuY2hhciwgZW50aXR5LmFwcGVhcmFuY2UuY29sb3IpOyAgXHJcbiAgICB9KTtcclxuICAgIC8vZHJhd2luZyBGUFNcclxuICAgIHRoaXMuZHJhd1N0cmluZygwLDEsIFN0cmluZyh0ZXJtaW5hbC5mcHMpKVxyXG4gICAgLy9yZW5kZXIgYWxsIG9mIHRoZSBhYm92ZVxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIC8vcmVxdWVzdCB3ZWJHTCB0byBkcmF3IHRvIGJyb3dzZXJcclxuICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qZnVuY3Rpb24gY29va2llQ2xpY2sobnVtYmVyKXtcclxuICAgIGNvb2tpZXMgPSBjb29raWVzICsgbnVtYmVyO1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llc1wiKS5pbm5lckhUTUwgPSBwcmV0dGlmeShjb29raWVzKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGJ1eUN1cnNvcigpe1xyXG4gICAgdmFyIGN1cnNvckNvc3QgPSBNYXRoLmZsb29yKDEwICogTWF0aC5wb3coMS4xLGN1cnNvcnMpKTsgICAgIC8vd29ya3Mgb3V0IHRoZSBjb3N0IG9mIHRoaXMgY3Vyc29yXHJcbiAgICBpZihjb29raWVzID49IGN1cnNvckNvc3QpeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jaGVja3MgdGhhdCB0aGUgcGxheWVyIGNhbiBhZmZvcmQgdGhlIGN1cnNvclxyXG4gICAgICAgIGN1cnNvcnMgPSBjdXJzb3JzICsgMTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaW5jcmVhc2VzIG51bWJlciBvZiBjdXJzb3JzXHJcbiAgICBcdGNvb2tpZXMgPSBjb29raWVzIC0gY3Vyc29yQ29zdDsgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcmVtb3ZlcyB0aGUgY29va2llcyBzcGVudFxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJzb3JzJykuaW5uZXJIVE1MID0gcHJldHRpZnkoY3Vyc29ycyk7ICAvL3VwZGF0ZXMgdGhlIG51bWJlciBvZiBjdXJzb3JzIGZvciB0aGUgdXNlclxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb29raWVzJykuaW5uZXJIVE1MID0gcHJldHRpZnkoY29va2llcyk7ICAvL3VwZGF0ZXMgdGhlIG51bWJlciBvZiBjb29raWVzIGZvciB0aGUgdXNlclxyXG4gICAgfTtcclxuICAgIHZhciBuZXh0Q29zdCA9IE1hdGguZmxvb3IoMTAgKiBNYXRoLnBvdygxLjEsY3Vyc29ycykpOyAgICAgICAvL3dvcmtzIG91dCB0aGUgY29zdCBvZiB0aGUgbmV4dCBjdXJzb3JcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJzb3JDb3N0JykuaW5uZXJIVE1MID0gcHJldHRpZnkobmV4dENvc3QpOyAgLy91cGRhdGVzIHRoZSBjdXJzb3IgY29zdCBmb3IgdGhlIHVzZXJcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBzYXZlKCl7XHJcblx0dmFyIHNhdmUgPSB7XHJcblx0Y29va2llczogY29va2llcyxcclxuXHRjdXJzb3JzOiBjdXJzb3JzLFxyXG5cdHByZXN0aWdlOiBwcmVzdGlnZVxyXG59O1xyXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNhdmVcIixKU09OLnN0cmluZ2lmeShzYXZlKSk7XHJcbn07XHJcbmZ1bmN0aW9uIGxvYWQoKXtcclxuXHR2YXIgc2F2ZWdhbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2F2ZVwiKSlcclxuXHRpZiAodHlwZW9mIHNhdmVnYW1lLmNvb2tpZXMgIT09IFwidW5kZWZpbmVkXCIpIGNvb2tpZXMgPSBzYXZlZ2FtZS5jb29raWVzO1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llc1wiKS5pbm5lckhUTUwgPSBwcmV0dGlmeShjb29raWVzKTtcclxuXHRpZiAodHlwZW9mIHNhdmVnYW1lLmN1cnNvcnMgIT09IFwidW5kZWZpbmVkXCIpIGN1cnNvcnMgPSBzYXZlZ2FtZS5jdXJzb3JzO1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJzb3JzJykuaW5uZXJIVE1MID0gcHJldHRpZnkoY3Vyc29ycyk7XHJcblx0aWYgKHR5cGVvZiBzYXZlZ2FtZS5jb29raWVzICE9PSBcInVuZGVmaW5lZFwiKSBwcmVzdGlnZSA9IHNhdmVnYW1lLnByZXN0aWdlO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZGVsZXRlU2F2ZSgpe1xyXG5cdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwic2F2ZVwiKVxyXG59O1xyXG5cclxuZnVuY3Rpb24gcHJldHRpZnkoaW5wdXQpe1xyXG4gICAgdmFyIG91dHB1dCA9IE1hdGgucm91bmQoaW5wdXQgKiAxMDAwMDAwKS8xMDAwMDAwO1xyXG5cdHJldHVybiBvdXRwdXQ7XHJcbn07Ki8iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=