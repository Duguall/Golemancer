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
/* harmony export */   "Structure": () => (/* binding */ Structure)
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
             velocity: 50,
         },
     },
    ] 
};

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
const terminalx = 82
const terminaly = 52
//creating the map in "canvas" width = 80, height = 50
const terminal = new wglt__WEBPACK_IMPORTED_MODULE_0__.Terminal(document.querySelector('canvas'), terminalx, terminaly);

//WGLT leftovers. Setting the whole map as explored and visible to the player
for (let y = 0; y < terminal.height; y++) {
    for (let x = 0; x < terminal.width; x++) {
        terminal.grid[y][x].visible = true
        terminal.grid[y][x].explored = true
    }
}

//creating world to contain entities in order to enable query
const world = _ecs__WEBPACK_IMPORTED_MODULE_1__.default.createWorld();

//terminal border
//top
for( let i = 0; i <terminalx; i++) {
    let structure = world.createPrefab("Structure")
    structure.position.x = i
    locationId[structure.position.x + "," + structure.position.y] = structure.id

}
//left
for( let i = 0; i <terminaly; i++) {
    let structure = world.createPrefab("Structure")
    structure.position.y = i
    locationId[structure.position.x + "," + structure.position.y] = structure.id
}
//bottom
for( let i = 0; i <terminalx; i++) {
    let structure = world.createPrefab("Structure")
    structure.position.x = i
    structure.position.y = terminaly - 1
    locationId[structure.position.x + "," + structure.position.y] = structure.id
}
//right
for( let i = 0; i <terminaly; i++) {
    let structure = world.createPrefab("Structure")
    structure.position.y = i
    structure.position.x = terminalx - 1
    locationId[structure.position.x + "," + structure.position.y] = structure.id
}
//player = human test pilot
const playerx = 40
const playery = 2
for (let i = 0; i < playerx; i++) {
    for (let j = 0; j < playery; j++) {
    let player = world.createPrefab("Human")
    player.position.x = 80/2-playerx/2+i+1
    player.position.y = 40+j
    locationId[player.position.x + "," + player.position.y] = player.id
    }
}
//zombie = zombie test pilot
const zombiex = 60
const zombiey = 10
for (let i = 0; i < zombiex; i++) {
    for (let j = 0; j < zombiey; j++) {
        let zombie = world.createPrefab("Zombie")
        zombie.position.x = 80/2-zombiex/2+i+1
        zombie.position.y = 1+j
        locationId[zombie.position.x + "," + zombie.position.y] = zombie.id
    }  
}
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
    action : world.createQuery({
        all: [_components__WEBPACK_IMPORTED_MODULE_2__.Action],
    })
}; 

//cardinal direction for movement
const cardinals = [[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]]

function killEntity(entity){
delete locationId[entity.position.x + "," + entity.position.y]
entity.destroy()
}

//Collective of all enemy AI
//AI needs to have targetting, attacking, moving
function enemyAI(entityEnemy, time) {
    if (entityEnemy.description.name == "Zombie") {
        //action available
        if (time - entityEnemy.action.last >= entityEnemy.action.adjusted) {
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
            }
                //target available
                if (world.getEntity(entityEnemy.combat.target)) {
                    //if adjacent to target
                    if (Math.abs(entityEnemy.combat.x - entityEnemy.position.x) <= 1 && Math.abs(entityEnemy.combat.y - entityEnemy.position.y) <= 1) {
                        //adjacent
                    //TODO:Velocity
                    } else {
                        if (!locationId[(entityEnemy.position.x + entityEnemy.movement.x) + "," + (entityEnemy.position.y + entityEnemy.movement.y)]) {
                            //empty
                        } else {
                            //decide which directions are viable to go to
                            let randomDirection = []
                            //front left
                            if (!locationId[(entityEnemy.position.x + cardinals.at((entityEnemy.movement.cardinal + 1) % 8)[0]) + "," + (entityEnemy.position.y + cardinals.at((entityEnemy.movement.cardinal + 1) % 8)[1])]) {
                                randomDirection.push("Front Left")
                            //front right
                            } if (!locationId[(entityEnemy.position.x + cardinals.at((entityEnemy.movement.cardinal - 1) % 8)[0]) + "," + (entityEnemy.position.y + cardinals.at((entityEnemy.movement.cardinal - 1) % 8)[1])]) {
                                randomDirection.push("Front Right")

                            //side left
                            } if (!locationId[(entityEnemy.position.x + cardinals.at((entityEnemy.movement.cardinal + 2) % 8)[0]) + "," + (entityEnemy.position.y + cardinals.at((entityEnemy.movement.cardinal + 2) % 8)[1])]) {
                                randomDirection.push("Side Left")

                            //side right
                            } if (!locationId[(entityEnemy.position.x + cardinals.at((entityEnemy.movement.cardinal - 2) % 8)[0]) + "," + (entityEnemy.position.y + cardinals.at((entityEnemy.movement.cardinal - 2) % 8)[1])]) {
                                randomDirection.push("Side Right")

                            //don't move
                            }
                            //randomly pick a valid direction to move to, or none
                            switch (randomDirection[Math.floor(Math.random() * randomDirection.length)]){
                            case 'Front Left':
                                entityEnemy.movement.x = cardinals.at((entityEnemy.movement.cardinal + 1) % 8)[0]
                                entityEnemy.movement.y = cardinals.at((entityEnemy.movement.cardinal + 1) % 8)[1]
                                break;
                            case 'Front Right':
                                entityEnemy.movement.x = cardinals.at((entityEnemy.movement.cardinal - 1) % 8)[0]
                                entityEnemy.movement.y = cardinals.at((entityEnemy.movement.cardinal - 1) % 8)[1]
                                break;
                            case 'Side Left':
                                entityEnemy.movement.x = cardinals.at((entityEnemy.movement.cardinal + 2) % 8)[0]
                                entityEnemy.movement.y = cardinals.at((entityEnemy.movement.cardinal + 2) % 8)[1]
                                break;
                            case 'Side Right':
                                entityEnemy.movement.x = cardinals.at((entityEnemy.movement.cardinal - 2) % 8)[0]
                                entityEnemy.movement.y = cardinals.at((entityEnemy.movement.cardinal - 2) % 8)[1]
                                break;
                            case 'None':
                            case undefined:
                                entityEnemy.movement.x = 0
                                entityEnemy.movement.y = 0
                                break;
                            }
                        }
                        delete locationId[entityEnemy.position.x + "," + entityEnemy.position.y]
                        entityEnemy.position.x += entityEnemy.movement.x
                        entityEnemy.position.y += entityEnemy.movement.y
                        locationId[entityEnemy.position.x + "," + entityEnemy.position.y] = entityEnemy.id
                        entityEnemy.add(_components__WEBPACK_IMPORTED_MODULE_2__.hasMoved)
                    }
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
            };
        };
    };

function allyAI(entityAlly, time) {
    if (entityAlly.description.name == "Human") {
        //action available
        if (time - entityAlly.action.last >= entityAlly.action.adjusted) { 
            //get a target
            let target = world.getEntity(entityAlly.combat.target)
            if (!target) {
                //Determine target based on first zombie found within range 1
                let randomTarget = []
                query.enemies.get().forEach(entityEnemy => {
                    if (Math.abs(entityAlly.position.x - entityEnemy.position.x) <= 1 && Math.abs(entityAlly.position.y - entityEnemy.position.y) <= 1) {
                        randomTarget.push([entityEnemy.id, entityEnemy.position.x, entityEnemy.position.y])
                    };
                });
                if (randomTarget.length > 0) {
                    let selectedTarget = randomTarget[Math.floor(Math.random() * randomTarget.length)]
                    entityAlly.combat.target = selectedTarget[0]
                    entityAlly.combat.x = selectedTarget[1]
                    entityAlly.combat.y = selectedTarget[2]
                };
                //have a target
            } else {
                target.appearance.color = wglt__WEBPACK_IMPORTED_MODULE_0__.Colors.LIGHT_RED
                target.fireEvent("damage-taken", {damage:1})
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
                };
                //adjusted action speed = action speed + (action speed - (time since last attack))
                //Any action above or below the action speed will adjust the next action accordingly to keep action speed on average
                //i.e. 1200ms since last action == next action is 800ms instead of 1000ms
                //multiplier is for speeding up actions. i.e. velocity of 2 = move twice as fast. 1000ms/2=500ms cooldown
                let multiplier = 1
                if (entityAlly.has(_components__WEBPACK_IMPORTED_MODULE_2__.hasMoved)) {
                    multiplier = entityAlly.movement.velocity
                    entityAlly.remove(entityAlly.hasMoved)
                }
                entityAlly.action.adjusted = (entityAlly.action.speed + entityAlly.action.speed - (time - entityAlly.action.last))/multiplier
                entityAlly.action.last = time
            };
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
    doAction(time)

    //clear screen
    this.flush();
    this.clear();
    //drawing UI
    //Drawing test pilot player and zombie
    query.all.get().forEach((entity) => {
        if (!entity.isDestroyed) {
            this.drawString(entity.position.x, entity.position.y, entity.appearance.char, entity.appearance.color);  
    }
    });
    //drawing FPS
    this.drawString(0,1, String(terminal.fps))
    //render all of the above
    this.render();
    //request webGL to draw to browser
    this.requestAnimationFrame();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSLHdCQUF3QixjQUFjO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG9DQUFvQztBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztB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QzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLDBDQUEwQyxrREFBcUI7QUFDL0Qsa0RBQWtELFNBQVM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxpREFBUTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4Q0FBSztBQUM1QjtBQUNBLFVBQVUsb0JBQW9CLDZDQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dvbGVtYW5jZXIvLi9ub2RlX21vZHVsZXMvd2dsdC9kaXN0L3dnbHQuanMiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci8uL3NyYy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL2dvbGVtYW5jZXIvLi9zcmMvZWNzLmpzIiwid2VicGFjazovL2dvbGVtYW5jZXIvLi9zcmMvZW50aXRpZXMuanMiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci8uL25vZGVfbW9kdWxlcy9nZW90aWMvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dvbGVtYW5jZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dvbGVtYW5jZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbih0LGkpe1wib2JqZWN0XCI9PT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9aSgpOlwiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLGkpOlwib2JqZWN0XCI9PT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLndnbHQ9aSgpOnQud2dsdD1pKCl9KGdsb2JhbFRoaXMsKGZ1bmN0aW9uKCl7cmV0dXJuKCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9ezYxMjoodCxpLGUpPT57bGV0IHM7ZS5yKGkpLGUuZChpLHtCbGVuZE1vZGU6KCk9PnMsQ2VsbDooKT0+RSxDaGFyczooKT0+YyxDb2xvcnM6KCk9PkEsQ29uc29sZTooKT0+SyxERUZBVUxUX0ZPTlQ6KCk9PlYsRGVmYXVsdERpYWxvZ1JlbmRlcmVyOigpPT52LERpYWxvZzooKT0+YixEaWFsb2dTdGF0ZTooKT0+UyxGb250OigpPT5PLEZvdk9jdGFudHM6KCk9PmcsRm92UXVhZHJhbnRzOigpPT5OLEdVSTooKT0+SSxLZXlib2FyZDooKT0+eCxLZXlzOigpPT5QLE1lc3NhZ2VEaWFsb2c6KCk9PkgsTW91c2U6KCk9PlosUG9pbnQ6KCk9PlIsUk5HOigpPT5odCxSZWN0OigpPT5DLFNlbGVjdERpYWxvZzooKT0+TSxUZXJtaW5hbDooKT0+YXQsY29tcHV0ZVBhdGg6KCk9Pml0LGZpeEJveENlbGxzOigpPT5fLGZyb21Ic3Y6KCk9PmQsZnJvbVJnYjooKT0+YSxnZXRGb3ZRdWFkcmFudDooKT0+TCxsb2FkSW1hZ2U6KCk9PlgsbG9hZEltYWdlMng6KCk9Pll9KSxmdW5jdGlvbih0KXt0W3QuTm9uZT0wXT1cIk5vbmVcIix0W3QuQmxlbmQ9MV09XCJCbGVuZFwiLHRbdC5BZGQ9Ml09XCJBZGRcIn0oc3x8KHM9e30pKTtjb25zdCByPVtbMSwwLDEsMF0sWzEsMCwxLDFdLFsxLDAsMSwyXSxbMiwwLDIsMV0sWzAsMCwyLDFdLFswLDAsMSwyXSxbMiwwLDIsMl0sWzIsMCwyLDBdLFswLDAsMiwyXSxbMiwwLDAsMl0sWzIsMCwwLDFdLFsxLDAsMCwyXSxbMCwwLDEsMV0sWzEsMSwwLDBdLFsxLDEsMCwxXSxbMCwxLDEsMV0sWzEsMSwxLDBdLFswLDEsMCwxXSxbMSwxLDEsMV0sWzEsMiwxLDBdLFsyLDEsMiwwXSxbMiwyLDAsMF0sWzAsMiwyLDBdLFsyLDIsMCwyXSxbMCwyLDIsMl0sWzIsMiwyLDBdLFswLDIsMCwyXSxbMiwyLDIsMl0sWzEsMiwwLDJdLFsyLDEsMCwxXSxbMCwyLDEsMl0sWzAsMSwyLDFdLFsyLDEsMCwwXSxbMSwyLDAsMF0sWzAsMiwxLDBdLFswLDEsMiwwXSxbMiwxLDIsMV0sWzEsMiwxLDJdLFsxLDAsMCwxXSxbMCwxLDEsMF1dO2Z1bmN0aW9uIGgodCxpLGUpe2NvbnN0IHM9dC5nZXRDaGFyQ29kZShpLGUpO3JldHVybiB2b2lkIDAhPT1zJiZzPj0xNzkmJnM8PTIxOH1mdW5jdGlvbiBvKHQsaSxlLHMpe2lmKGk8MHx8ZTwwfHxpPj10LndpZHRofHxlPj10LmhlaWdodClyZXR1cm4gMDtjb25zdCBoPXQuZ2V0Q2hhckNvZGUoaSxlKTtyZXR1cm4gdm9pZCAwPT09aHx8aDwxNzl8fGg+MjE4PzA6cltoLTE3OV1bc119ZnVuY3Rpb24gbih0LGksZSxzKXtmb3IobGV0IGg9MDtoPHIubGVuZ3RoO2grKyl7Y29uc3Qgbz1yW2hdO2lmKG9bMF09PT10JiZvWzFdPT09aSYmb1syXT09PWUmJm9bM109PT1zKXJldHVybiAxNzkraH1yZXR1cm4gMH1mdW5jdGlvbiBfKHQpe2ZvcihsZXQgaT0wO2k8dC5oZWlnaHQ7aSsrKWZvcihsZXQgZT0wO2U8dC53aWR0aDtlKyspaWYoaCh0LGUsaSkpe2xldCBzPW8odCxlLGktMSwyKSxyPW8odCxlKzEsaSwzKSxoPW8odCxlLGkrMSwwKSxfPW8odCxlLTEsaSwxKTtzPjAmJjA9PT1yJiYwPT09aCYmMD09PV8/aD1zOjA9PT1zJiZyPjAmJjA9PT1oJiYwPT09Xz9fPXI6MD09PXMmJjA9PT1yJiZoPjAmJjA9PT1fP3M9aDowPT09cyYmMD09PXImJjA9PT1oJiZfPjAmJihyPV8pLF8+MCYmcj4wJiYoXz1yPU1hdGgubWF4KF8scikpLHM+MCYmaD4wJiYocz1oPU1hdGgubWF4KHMsaCkpO2NvbnN0IGE9bihzLHIsaCxfKTtpZigoc3x8cnx8aHx8XykmJiEoYT49MTc5JiZhPD0yMTgpKXRocm93IG5ldyBFcnJvcihcImludmFsaWQgY2hhciBjb2RlISAodXA9XCIrcytcIiwgcmlnaHQ9XCIrcitcIiwgZG93bj1cIitoK1wiLCBsZWZ0PVwiK18rXCIpXCIpO3QuZHJhd0NoYXIoZSxpLGEpfX1mdW5jdGlvbiBhKHQsaSxlLHMpe3JldHVybiB2b2lkIDA9PT1zJiYocz0yNTUpLCh0PDwyNCkrKGk8PDE2KSsoZTw8OCkrc31mdW5jdGlvbiBkKHQsaSxlLHMpe2NvbnN0IHI9Nip0fDAsaD02KnQtcixvPWUqKDEtaSksbj1lKigxLWgqaSksXz1lKigxLSgxLWgpKmkpO2xldCBkLEEsbDtzd2l0Y2gociU2KXtjYXNlIDA6ZD1lLEE9XyxsPW87YnJlYWs7Y2FzZSAxOmQ9bixBPWUsbD1vO2JyZWFrO2Nhc2UgMjpkPW8sQT1lLGw9XzticmVhaztjYXNlIDM6ZD1vLEE9bixsPWU7YnJlYWs7Y2FzZSA0OmQ9XyxBPW8sbD1lO2JyZWFrO2Nhc2UgNTpkPWUsQT1vLGw9bjticmVhaztkZWZhdWx0OmQ9MCxBPTAsbD0wfXJldHVybiB2b2lkIDA9PT1zJiYocz0xKSxhKDI1NSpkfDAsMjU1KkF8MCwyNTUqbHwwLDI1NSpzfDApfWNvbnN0IEE9e0JMQUNLOmEoMCwwLDApLFdISVRFOmEoMjU1LDI1NSwyNTUpLExJR0hUX0dSQVk6YSgxNzAsMTcwLDE3MCksREFSS19HUkFZOmEoODUsODUsODUpLFlFTExPVzphKDI1NSwyNTUsODUpLEJST1dOOmEoMTcwLDg1LDApLExJR0hUX1JFRDphKDI1NSw4NSw4NSksREFSS19SRUQ6YSgxNzAsMCwwKSxMSUdIVF9HUkVFTjphKDg1LDI1NSw4NSksREFSS19HUkVFTjphKDAsMTcwLDApLExJR0hUX0NZQU46YSg4NSwyNTUsMjU1KSxEQVJLX0NZQU46YSgwLDE3MCwxNzApLExJR0hUX0JMVUU6YSg4NSw4NSwyNTUpLERBUktfQkxVRTphKDAsMCwxNzApLExJR0hUX01BR0VOVEE6YSgyNTUsODUsMjU1KSxEQVJLX01BR0VOVEE6YSgxNzAsMCwxNzApLE9SQU5HRTphKDI1NSwxMzYsMCl9O2Z1bmN0aW9uIGwodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fWNsYXNzIEV7Y29uc3RydWN0b3IodCxpLGUscyxyKXtsKHRoaXMsXCJ4XCIsdm9pZCAwKSxsKHRoaXMsXCJ5XCIsdm9pZCAwKSxsKHRoaXMsXCJjaGFyQ29kZVwiLHZvaWQgMCksbCh0aGlzLFwiZmdcIix2b2lkIDApLGwodGhpcyxcImJnXCIsdm9pZCAwKSxsKHRoaXMsXCJkaXJ0eVwiLHZvaWQgMCksbCh0aGlzLFwiYmxvY2tlZFwiLHZvaWQgMCksbCh0aGlzLFwiYmxvY2tlZFNpZ2h0XCIsdm9pZCAwKSxsKHRoaXMsXCJleHBsb3JlZFwiLHZvaWQgMCksbCh0aGlzLFwidmlzaWJsZVwiLHZvaWQgMCksbCh0aGlzLFwicGF0aElkXCIsdm9pZCAwKSxsKHRoaXMsXCJnXCIsdm9pZCAwKSxsKHRoaXMsXCJoXCIsdm9pZCAwKSxsKHRoaXMsXCJwcmV2XCIsdm9pZCAwKSx0aGlzLng9dCx0aGlzLnk9aSx0aGlzLmNoYXJDb2RlPXZvaWQgMCE9PWU/ZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiB0JiZ0Lmxlbmd0aD4wP3QuY2hhckNvZGVBdCgwKTp0fShlKTpcIiBcIi5jaGFyQ29kZUF0KDApLHRoaXMuZmc9dm9pZCAwIT09cz9zOkEuV0hJVEUsdGhpcy5iZz12b2lkIDAhPT1yP3I6QS5CTEFDSyx0aGlzLmRpcnR5PSEwLHRoaXMuYmxvY2tlZD0hMSx0aGlzLmJsb2NrZWRTaWdodD0hMSx0aGlzLmV4cGxvcmVkPSExLHRoaXMudmlzaWJsZT0hMSx0aGlzLnBhdGhJZD0tMSx0aGlzLmc9MCx0aGlzLmg9MCx0aGlzLnByZXY9bnVsbH1zZXRDaGFyQ29kZSh0KXt0aGlzLmNoYXJDb2RlIT09dCYmKHRoaXMuY2hhckNvZGU9dCx0aGlzLmRpcnR5PSEwKX1zZXRGb3JlZ3JvdW5kKHQpe3ZvaWQgMCE9PXQmJm51bGwhPT10JiZ0IT09dGhpcy5mZyYmKHRoaXMuZmc9dCx0aGlzLmRpcnR5PSEwKX1zZXRCYWNrZ3JvdW5kKHQpe3ZvaWQgMCE9PXQmJm51bGwhPT10JiZ0IT09dGhpcy5iZyYmKHRoaXMuYmc9dCx0aGlzLmRpcnR5PSEwKX1zZXRWYWx1ZSh0LGksZSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiB0JiYodD10LmNoYXJDb2RlQXQoMCkpLFwibnVtYmVyXCI9PT10eXBlb2YgdD8odGhpcy5zZXRDaGFyQ29kZSh0KSx2b2lkIDAhPT1pJiZ0aGlzLnNldEZvcmVncm91bmQoaSksdm9pZCAwIT09ZSYmdGhpcy5zZXRCYWNrZ3JvdW5kKGUpKTp0aGlzLmRyYXdDZWxsKHQscy5Ob25lKSx0aGlzLmRpcnR5fWRyYXdDZWxsKHQsaSl7Y29uc3QgZT0yNTUmdC5iZztpPT09cy5Ob25lfHx0LmNoYXJDb2RlPjA/KHRoaXMuc2V0Q2hhckNvZGUodC5jaGFyQ29kZSksdGhpcy5zZXRGb3JlZ3JvdW5kKHQuZmcpKTplPjAmJmU8MjU1JiZ0aGlzLnNldEZvcmVncm91bmQodGhpcy5ibGVuZENvbG9ycyh0aGlzLmZnLHQuYmcsaSkpLGk9PT1zLk5vbmV8fDI1NT09PWU/dGhpcy5zZXRCYWNrZ3JvdW5kKHQuYmcpOmU+MCYmdGhpcy5zZXRCYWNrZ3JvdW5kKHRoaXMuYmxlbmRDb2xvcnModGhpcy5iZyx0LmJnLGkpKX1ibGVuZENvbG9ycyh0LGksZSl7Y29uc3Qgcj0oMjU1LSgyNTUmaSkpLzI1NSxoPTEtcixvPXQ+PjI0JjI1NSxuPXQ+PjE2JjI1NSxfPXQ+PjgmMjU1LGQ9aT4+MjQmMjU1LEE9aT4+MTYmMjU1LGw9aT4+OCYyNTU7c3dpdGNoKGUpe2Nhc2Ugcy5CbGVuZDpyZXR1cm4gYShyKm8raCpkfDAscipuK2gqQXwwLHIqXytoKmx8MCk7Y2FzZSBzLkFkZDpyZXR1cm4gYSh0aGlzLmNsYW1wKG8raCpkfDApLHRoaXMuY2xhbXAobitoKkF8MCksdGhpcy5jbGFtcChfK2gqbHwwKSk7ZGVmYXVsdDpyZXR1cm4gaX19Y2xhbXAodCl7cmV0dXJuIE1hdGgubWluKDI1NSx0KX19bGV0IGM7ZnVuY3Rpb24gdSh0LGksZSl7cmV0dXJuIGkgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxpLHt2YWx1ZTplLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtpXT1lLHR9IWZ1bmN0aW9uKHQpe3RbdC5TTUlMRVk9MV09XCJTTUlMRVlcIix0W3QuSU5WRVJTRV9TTUlMRVk9Ml09XCJJTlZFUlNFX1NNSUxFWVwiLHRbdC5IRUFSVD0zXT1cIkhFQVJUXCIsdFt0LkRJQU1PTkQ9NF09XCJESUFNT05EXCIsdFt0LkNMVUI9NV09XCJDTFVCXCIsdFt0LlNQQURFPTZdPVwiU1BBREVcIix0W3QuQlVMTEVUPTddPVwiQlVMTEVUXCIsdFt0LklOVkVSU0VfQlVMTEVUPThdPVwiSU5WRVJTRV9CVUxMRVRcIix0W3QuTElHSFRfU0hBREU9MTc2XT1cIkxJR0hUX1NIQURFXCIsdFt0Lk1FRElVTV9TSEFERT0xNzddPVwiTUVESVVNX1NIQURFXCIsdFt0LkRBUktfU0hBREU9MTc4XT1cIkRBUktfU0hBREVcIix0W3QuQk9YX1NJTkdMRV9WRVJUSUNBTD0xNzldPVwiQk9YX1NJTkdMRV9WRVJUSUNBTFwiLHRbdC5CT1hfU0lOR0xFX1ZFUlRJQ0FMX0FORF9TSU5HTEVfTEVGVD0xODBdPVwiQk9YX1NJTkdMRV9WRVJUSUNBTF9BTkRfU0lOR0xFX0xFRlRcIix0W3QuQk9YX0RPVUJMRV9WRVJUSUNBTF9BTkRfRE9VQkxFX0xFRlQ9MTg1XT1cIkJPWF9ET1VCTEVfVkVSVElDQUxfQU5EX0RPVUJMRV9MRUZUXCIsdFt0LkJPWF9ET1VCTEVfVkVSVElDQUw9MTg2XT1cIkJPWF9ET1VCTEVfVkVSVElDQUxcIix0W3QuQk9YX0RPVUJMRV9ET1dOX0FORF9ET1VCTEVfTEVGVD0xODddPVwiQk9YX0RPVUJMRV9ET1dOX0FORF9ET1VCTEVfTEVGVFwiLHRbdC5CT1hfRE9VQkxFX1VQX0FORF9ET1VCTEVfTEVGVD0xODhdPVwiQk9YX0RPVUJMRV9VUF9BTkRfRE9VQkxFX0xFRlRcIix0W3QuQk9YX1NJTkdMRV9ET1dOX0FORF9TSU5HTEVfTEVGVD0xOTFdPVwiQk9YX1NJTkdMRV9ET1dOX0FORF9TSU5HTEVfTEVGVFwiLHRbdC5CT1hfU0lOR0xFX1VQX0FORF9TSU5HTEVfUklHSFQ9MTkyXT1cIkJPWF9TSU5HTEVfVVBfQU5EX1NJTkdMRV9SSUdIVFwiLHRbdC5CT1hfU0lOR0xFX0hPUklaT05UQUxfQU5EX1NJTkdMRV9VUD0xOTNdPVwiQk9YX1NJTkdMRV9IT1JJWk9OVEFMX0FORF9TSU5HTEVfVVBcIix0W3QuQk9YX1NJTkdMRV9IT1JJWk9OVEFMX0FORF9TSU5HTEVfRE9XTj0xOTRdPVwiQk9YX1NJTkdMRV9IT1JJWk9OVEFMX0FORF9TSU5HTEVfRE9XTlwiLHRbdC5CT1hfU0lOR0xFX1ZFUlRJQ0FMX0FORF9TSU5HTEVfUklHSFQ9MTk1XT1cIkJPWF9TSU5HTEVfVkVSVElDQUxfQU5EX1NJTkdMRV9SSUdIVFwiLHRbdC5CT1hfU0lOR0xFX0hPUklaT05UQUw9MTk2XT1cIkJPWF9TSU5HTEVfSE9SSVpPTlRBTFwiLHRbdC5CT1hfU0lOR0xFX1ZFUlRJQ0FMX0FORF9TSU5HTEVfSE9SSVpPTlRBTD0xOTddPVwiQk9YX1NJTkdMRV9WRVJUSUNBTF9BTkRfU0lOR0xFX0hPUklaT05UQUxcIix0W3QuQk9YX0RPVUJMRV9VUF9BTkRfRE9VQkxFX1JJR0hUPTIwMF09XCJCT1hfRE9VQkxFX1VQX0FORF9ET1VCTEVfUklHSFRcIix0W3QuQk9YX0RPVUJMRV9ET1dOX0FORF9ET1VCTEVfUklHSFQ9MjAxXT1cIkJPWF9ET1VCTEVfRE9XTl9BTkRfRE9VQkxFX1JJR0hUXCIsdFt0LkJPWF9ET1VCTEVfSE9SSVpPTlRBTF9BTkRfRE9VQkxFX1VQPTIwMl09XCJCT1hfRE9VQkxFX0hPUklaT05UQUxfQU5EX0RPVUJMRV9VUFwiLHRbdC5CT1hfRE9VQkxFX0hPUklaT05UQUxfQU5EX0RPVUJMRV9ET1dOPTIwM109XCJCT1hfRE9VQkxFX0hPUklaT05UQUxfQU5EX0RPVUJMRV9ET1dOXCIsdFt0LkJPWF9ET1VCTEVfVkVSVElDQUxfQU5EX0RPVUJMRV9SSUdIVD0yMDRdPVwiQk9YX0RPVUJMRV9WRVJUSUNBTF9BTkRfRE9VQkxFX1JJR0hUXCIsdFt0LkJPWF9ET1VCTEVfSE9SSVpPTlRBTD0yMDVdPVwiQk9YX0RPVUJMRV9IT1JJWk9OVEFMXCIsdFt0LkJPWF9ET1VCTEVfVkVSVElDQUxfQU5EX0RPVUJMRV9IT1JJWk9OVEFMPTIwNl09XCJCT1hfRE9VQkxFX1ZFUlRJQ0FMX0FORF9ET1VCTEVfSE9SSVpPTlRBTFwiLHRbdC5CT1hfU0lOR0xFX1VQX0FORF9TSU5HTEVfTEVGVD0yMTddPVwiQk9YX1NJTkdMRV9VUF9BTkRfU0lOR0xFX0xFRlRcIix0W3QuQk9YX1NJTkdMRV9ET1dOX0FORF9TSU5HTEVfUklHSFQ9MjE4XT1cIkJPWF9TSU5HTEVfRE9XTl9BTkRfU0lOR0xFX1JJR0hUXCIsdFt0LkJMT0NLX0ZVTEw9MjE5XT1cIkJMT0NLX0ZVTExcIix0W3QuQkxPQ0tfQk9UVE9NX0hBTEY9MjIwXT1cIkJMT0NLX0JPVFRPTV9IQUxGXCIsdFt0LkJMT0NLX0xFRlRfSEFMRj0yMjFdPVwiQkxPQ0tfTEVGVF9IQUxGXCIsdFt0LkJMT0NLX1JJR0hUX0hBTEY9MjIyXT1cIkJMT0NLX1JJR0hUX0hBTEZcIix0W3QuQkxPQ0tfVE9QX0hBTEY9MjIzXT1cIkJMT0NLX1RPUF9IQUxGXCJ9KGN8fChjPXt9KSk7Y2xhc3MgS3tjb25zdHJ1Y3Rvcih0LGksZSl7dSh0aGlzLFwid2lkdGhcIix2b2lkIDApLHUodGhpcyxcImhlaWdodFwiLHZvaWQgMCksdSh0aGlzLFwiZ3JpZFwiLHZvaWQgMCksdSh0aGlzLFwib3JpZ2luWFwiLHZvaWQgMCksdSh0aGlzLFwib3JpZ2luWVwiLHZvaWQgMCksdSh0aGlzLFwibWluWFwiLHZvaWQgMCksdSh0aGlzLFwibWF4WFwiLHZvaWQgMCksdSh0aGlzLFwibWluWVwiLHZvaWQgMCksdSh0aGlzLFwibWF4WVwiLHZvaWQgMCksdSh0aGlzLFwicmFkaXVzXCIsdm9pZCAwKSx0aGlzLndpZHRoPXQsdGhpcy5oZWlnaHQ9aSx0aGlzLmdyaWQ9W10sdGhpcy5vcmlnaW5YPTAsdGhpcy5vcmlnaW5ZPTAsdGhpcy5taW5YPTAsdGhpcy5tYXhYPTAsdGhpcy5taW5ZPTAsdGhpcy5tYXhZPTAsdGhpcy5yYWRpdXM9MDtmb3IobGV0IGU9MDtlPGk7ZSsrKXtjb25zdCBpPVtdO2ZvcihsZXQgcz0wO3M8dDtzKyspaS5wdXNoKG5ldyBFKHMsZSkpO3RoaXMuZ3JpZC5wdXNoKGkpfWlmKHRoaXMuY2xlYXIoKSxlKWZvcihsZXQgcz0wO3M8aTtzKyspZm9yKGxldCBpPTA7aTx0O2krKyl0aGlzLmdyaWRbc11baV0uYmxvY2tlZD10aGlzLmdyaWRbc11baV0uYmxvY2tlZFNpZ2h0PWUoaSxzKX1jbGVhcigpe2ZvcihsZXQgdD0wO3Q8dGhpcy5oZWlnaHQ7dCsrKWZvcihsZXQgaT0wO2k8dGhpcy53aWR0aDtpKyspdGhpcy5kcmF3Q2hhcihpLHQsMCl9Z2V0Q2VsbCh0LGkpe2lmKCEodDwwfHxpPDB8fHQ+PXRoaXMud2lkdGh8fGk+PXRoaXMuaGVpZ2h0KSlyZXR1cm4gdGhpcy5ncmlkW2ldW3RdfWdldENoYXJDb2RlKHQsaSl7aWYoISh0PDB8fGk8MHx8dD49dGhpcy53aWR0aHx8aT49dGhpcy5oZWlnaHQpKXJldHVybiB0aGlzLmdyaWRbaV1bdF0uY2hhckNvZGV9ZHJhd0NoYXIodCxpLGUscyxyKXt0Pj0wJiZ0PHRoaXMud2lkdGgmJmk+PTAmJmk8dGhpcy5oZWlnaHQmJnRoaXMuZ3JpZFswfGldWzB8dF0uc2V0VmFsdWUoZSxzLHIpfWRyYXdTdHJpbmcodCxpLGUscyxyKXtjb25zdCBoPWUuc3BsaXQoXCJcXG5cIik7Zm9yKGxldCBlPTA7ZTxoLmxlbmd0aDtlKyspe2NvbnN0IG89aFtlXTtmb3IobGV0IGg9MDtoPG8ubGVuZ3RoO2grKyl0aGlzLmRyYXdDaGFyKHQraCxpK2Usby5jaGFyQ29kZUF0KGgpLHMscil9fWRyYXdDZW50ZXJlZFN0cmluZyh0LGksZSxzLHIpe3RoaXMuZHJhd1N0cmluZyh0LU1hdGguZmxvb3IoZS5sZW5ndGgvMiksaSxlLHMscil9ZHJhd0hMaW5lKHQsaSxlLHMscixoKXtmb3IobGV0IG89dDtvPHQrZTtvKyspdGhpcy5kcmF3Q2hhcihvLGkscyxyLGgpfWRyYXdWTGluZSh0LGksZSxzLHIsaCl7Zm9yKGxldCBvPWk7bzxpK2U7bysrKXRoaXMuZHJhd0NoYXIodCxvLHMscixoKX1kcmF3UmVjdCh0LGksZSxzLHIsaCxvKXt0aGlzLmRyYXdITGluZSh0LGksZSxyLGgsbyksdGhpcy5kcmF3SExpbmUodCxpK3MtMSxlLHIsaCxvKSx0aGlzLmRyYXdWTGluZSh0LGkscyxyLGgsbyksdGhpcy5kcmF3VkxpbmUodCtlLTEsaSxzLHIsaCxvKX1kcmF3Qm94KHQsaSxlLHMscixoLG8sbixfLGEsZCxBLGwsRSl7dGhpcy5maWxsUmVjdCh0LGksZSxzLDAsbCxFKSx0aGlzLmRyYXdITGluZSh0LGksZSxyKSx0aGlzLmRyYXdITGluZSh0LGkrcy0xLGUsbyksdGhpcy5kcmF3VkxpbmUodCxpLHMsbiksdGhpcy5kcmF3VkxpbmUodCtlLTEsaSxzLGgpLHRoaXMuZHJhd0NoYXIodCxpLF8pLHRoaXMuZHJhd0NoYXIodCtlLTEsaSxhKSx0aGlzLmRyYXdDaGFyKHQsaStzLTEsQSksdGhpcy5kcmF3Q2hhcih0K2UtMSxpK3MtMSxkKX1kcmF3U2luZ2xlQm94KHQsaSxlLHMscixoKXt0aGlzLmRyYXdCb3godCxpLGUscyxjLkJPWF9TSU5HTEVfSE9SSVpPTlRBTCxjLkJPWF9TSU5HTEVfVkVSVElDQUwsYy5CT1hfU0lOR0xFX0hPUklaT05UQUwsYy5CT1hfU0lOR0xFX1ZFUlRJQ0FMLGMuQk9YX1NJTkdMRV9ET1dOX0FORF9TSU5HTEVfUklHSFQsYy5CT1hfU0lOR0xFX0RPV05fQU5EX1NJTkdMRV9MRUZULGMuQk9YX1NJTkdMRV9VUF9BTkRfU0lOR0xFX0xFRlQsYy5CT1hfU0lOR0xFX1VQX0FORF9TSU5HTEVfUklHSFQscixoKX1kcmF3RG91YmxlQm94KHQsaSxlLHMscixoKXt0aGlzLmRyYXdCb3godCxpLGUscyxjLkJPWF9ET1VCTEVfSE9SSVpPTlRBTCxjLkJPWF9ET1VCTEVfVkVSVElDQUwsYy5CT1hfRE9VQkxFX0hPUklaT05UQUwsYy5CT1hfRE9VQkxFX1ZFUlRJQ0FMLGMuQk9YX0RPVUJMRV9ET1dOX0FORF9ET1VCTEVfUklHSFQsYy5CT1hfRE9VQkxFX0RPV05fQU5EX0RPVUJMRV9MRUZULGMuQk9YX0RPVUJMRV9VUF9BTkRfRE9VQkxFX0xFRlQsYy5CT1hfRE9VQkxFX1VQX0FORF9ET1VCTEVfUklHSFQscixoKX1maWxsUmVjdCh0LGksZSxzLHIsaCxvKXtmb3IobGV0IG49aTtuPGkrcztuKyspdGhpcy5kcmF3SExpbmUodCxuLGUscixoLG8pfWRyYXdDb25zb2xlKHQsaSxlLHIsaCxvLG4sXyl7Xz1ffHxzLk5vbmU7Zm9yKGxldCBzPTA7czxuO3MrKylmb3IobGV0IG49MDtuPG87bisrKXtjb25zdCBvPWUuZ2V0Q2VsbChyK24saCtzKTtvJiZ0aGlzLmRyYXdDZWxsKHQrbixpK3MsbyxfKX19ZHJhd0NlbGwodCxpLGUscyl7dD49MCYmdDx0aGlzLndpZHRoJiZpPj0wJiZpPHRoaXMuaGVpZ2h0JiZ0aGlzLmdyaWRbaV1bdF0uZHJhd0NlbGwoZSxzKX1zZXRCbG9ja2VkKHQsaSxlKXt0Pj0wJiZ0PHRoaXMud2lkdGgmJmk+PTAmJmk8dGhpcy5oZWlnaHQmJih0aGlzLmdyaWRbaV1bdF0uYmxvY2tlZD1lKX1zZXRCbG9ja2VkU2lnaHQodCxpLGUpe3Q+PTAmJnQ8dGhpcy53aWR0aCYmaT49MCYmaTx0aGlzLmhlaWdodCYmKHRoaXMuZ3JpZFtpXVt0XS5ibG9ja2VkU2lnaHQ9ZSl9aXNWaXNpYmxlKHQsaSl7cmV0dXJuISh0PHRoaXMubWluWHx8dD50aGlzLm1heFh8fGk8dGhpcy5taW5ZfHxpPnRoaXMubWF4WSkmJnRoaXMuZ3JpZFtpXVt0XS52aXNpYmxlfWlzQmxvY2tlZCh0LGkpe3JldHVybiB0PDB8fHQ+dGhpcy53aWR0aHx8aTwwfHxpPnRoaXMuaGVpZ2h0fHx0aGlzLmdyaWRbaV1bdF0uYmxvY2tlZH1pc0Jsb2NrZWRTaWdodCh0LGkpe3JldHVybiB0PDB8fHQ+dGhpcy53aWR0aHx8aTwwfHxpPnRoaXMuaGVpZ2h0fHx0aGlzLmdyaWRbaV1bdF0uYmxvY2tlZFNpZ2h0fWNvbXB1dGVPY3RhbnRZKHQsaSl7Y29uc3QgZT1bXSxzPVtdO2xldCByLGgsbyxuLF8sYSxkLEEsbCxFLGM9MSx1PTAsSz0wLFQ9MDtmb3IoaD10aGlzLm9yaWdpblkraTtoPj10aGlzLm1pblkmJmg8PXRoaXMubWF4WTtoKz1pLEs9dSwrK2MpZm9yKG89LjUvYyxFPS0xLG49TWF0aC5mbG9vcihUKmMrLjUpLHI9dGhpcy5vcmlnaW5YK24qdDtuPD1jJiZyPj10aGlzLm1pblgmJnI8PXRoaXMubWF4WDtyKz10LCsrbixFPWwpe2lmKF89ITAsYT0hMSxkPW4vYyxBPUUsbD1kK28sSz4wKWlmKHRoaXMuZ3JpZFtoLWldW3JdLnZpc2libGUmJiF0aGlzLmdyaWRbaC1pXVtyXS5ibG9ja2VkU2lnaHR8fHRoaXMuZ3JpZFtoLWldW3ItdF0udmlzaWJsZSYmIXRoaXMuZ3JpZFtoLWldW3ItdF0uYmxvY2tlZFNpZ2h0KXtmb3IobGV0IHQ9MDt0PEsmJl87Kyt0KWlmKEE8PXNbdF0mJmw+PWVbdF0paWYodGhpcy5ncmlkW2hdW3JdLmJsb2NrZWRTaWdodCl7aWYoQT49ZVt0XSYmbDw9c1t0XSl7Xz0hMTticmVha31lW3RdPU1hdGgubWluKGVbdF0sQSksc1t0XT1NYXRoLm1heChzW3RdLGwpLGE9ITB9ZWxzZSBpZihkPmVbdF0mJmQ8c1t0XSl7Xz0hMTticmVha319ZWxzZSBfPSExO18mJih0aGlzLmdyaWRbaF1bcl0udmlzaWJsZT0hMCx0aGlzLmdyaWRbaF1bcl0uYmxvY2tlZFNpZ2h0JiYoVD49QT9UPWw6YXx8KGVbdV09QSxzW3UrK109bCkpKX19Y29tcHV0ZU9jdGFudFgodCxpKXtjb25zdCBlPVtdLHM9W107bGV0IHIsaCxvLG4sXyxhLGQsQSxsLEUsYz0xLHU9MCxLPTAsVD0wO2ZvcihyPXRoaXMub3JpZ2luWCt0O3I+PXRoaXMubWluWCYmcjw9dGhpcy5tYXhYO3IrPXQsSz11LCsrYylmb3Iobz0uNS9jLEU9LTEsbj1NYXRoLmZsb29yKFQqYysuNSksaD10aGlzLm9yaWdpblkrbippO248PWMmJmg+PXRoaXMubWluWSYmaDw9dGhpcy5tYXhZO2grPWksKytuLEU9bCl7aWYoXz0hMCxhPSExLGQ9bi9jLEE9RSxsPWQrbyxLPjApaWYodGhpcy5ncmlkW2hdW3ItdF0udmlzaWJsZSYmIXRoaXMuZ3JpZFtoXVtyLXRdLmJsb2NrZWRTaWdodHx8dGhpcy5ncmlkW2gtaV1bci10XS52aXNpYmxlJiYhdGhpcy5ncmlkW2gtaV1bci10XS5ibG9ja2VkU2lnaHQpe2ZvcihsZXQgdD0wO3Q8SyYmXzsrK3QpaWYoQTw9c1t0XSYmbD49ZVt0XSlpZih0aGlzLmdyaWRbaF1bcl0uYmxvY2tlZFNpZ2h0KXtpZihBPj1lW3RdJiZsPD1zW3RdKXtfPSExO2JyZWFrfWVbdF09TWF0aC5taW4oZVt0XSxBKSxzW3RdPU1hdGgubWF4KHNbdF0sbCksYT0hMH1lbHNlIGlmKGQ+ZVt0XSYmZDxzW3RdKXtfPSExO2JyZWFrfX1lbHNlIF89ITE7XyYmKHRoaXMuZ3JpZFtoXVtyXS52aXNpYmxlPSEwLHRoaXMuZ3JpZFtoXVtyXS5ibG9ja2VkU2lnaHQmJihUPj1BP1Q9bDphfHwoZVt1XT1BLHNbdSsrXT1sKSkpfX1jb21wdXRlRm92KHQsaSxlLHMscil7aWYodGhpcy5vcmlnaW5YPXQsdGhpcy5vcmlnaW5ZPWksdGhpcy5yYWRpdXM9ZSxzKXRoaXMubWluWD1NYXRoLm1pbih0aGlzLm1pblgsTWF0aC5tYXgoMCx0LWUpKSx0aGlzLm1pblk9TWF0aC5taW4odGhpcy5taW5ZLE1hdGgubWF4KDAsaS1lKSksdGhpcy5tYXhYPU1hdGgubWF4KHRoaXMubWF4WCxNYXRoLm1pbih0aGlzLndpZHRoLTEsdCtlKSksdGhpcy5tYXhZPU1hdGgubWF4KHRoaXMubWF4WSxNYXRoLm1pbih0aGlzLmhlaWdodC0xLGkrZSkpO2Vsc2V7dGhpcy5taW5YPU1hdGgubWF4KDAsdC1lKSx0aGlzLm1pblk9TWF0aC5tYXgoMCxpLWUpLHRoaXMubWF4WD1NYXRoLm1pbih0aGlzLndpZHRoLTEsdCtlKSx0aGlzLm1heFk9TWF0aC5taW4odGhpcy5oZWlnaHQtMSxpK2UpO2ZvcihsZXQgdD10aGlzLm1pblk7dDw9dGhpcy5tYXhZO3QrKylmb3IobGV0IGk9dGhpcy5taW5YO2k8PXRoaXMubWF4WDtpKyspdGhpcy5ncmlkW3RdW2ldLnZpc2libGU9ITF9dGhpcy5ncmlkW2ldW3RdLnZpc2libGU9ITAsdm9pZCAwPT09cj8odGhpcy5jb21wdXRlT2N0YW50WSgxLDEpLHRoaXMuY29tcHV0ZU9jdGFudFgoMSwxKSx0aGlzLmNvbXB1dGVPY3RhbnRYKDEsLTEpLHRoaXMuY29tcHV0ZU9jdGFudFkoMSwtMSksdGhpcy5jb21wdXRlT2N0YW50WSgtMSwtMSksdGhpcy5jb21wdXRlT2N0YW50WCgtMSwtMSksdGhpcy5jb21wdXRlT2N0YW50WCgtMSwxKSx0aGlzLmNvbXB1dGVPY3RhbnRZKC0xLDEpKTooMSZyJiZ0aGlzLmNvbXB1dGVPY3RhbnRZKDEsMSksMiZyJiZ0aGlzLmNvbXB1dGVPY3RhbnRYKDEsMSksNCZyJiZ0aGlzLmNvbXB1dGVPY3RhbnRYKDEsLTEpLDgmciYmdGhpcy5jb21wdXRlT2N0YW50WSgxLC0xKSwxNiZyJiZ0aGlzLmNvbXB1dGVPY3RhbnRZKC0xLC0xKSwzMiZyJiZ0aGlzLmNvbXB1dGVPY3RhbnRYKC0xLC0xKSw2NCZyJiZ0aGlzLmNvbXB1dGVPY3RhbnRYKC0xLDEpLDEyOCZyJiZ0aGlzLmNvbXB1dGVPY3RhbnRZKC0xLDEpKX11cGRhdGVFeHBsb3JlZCgpe2ZvcihsZXQgdD10aGlzLm1pblk7dDw9dGhpcy5tYXhZO3QrKylmb3IobGV0IGk9dGhpcy5taW5YO2k8PXRoaXMubWF4WDtpKyspe2NvbnN0IGU9dGhpcy5ncmlkW3RdW2ldO2UuZXhwbG9yZWQ9ZS5leHBsb3JlZHx8ZS52aXNpYmxlfX19ZnVuY3Rpb24gVCh0LGksZSl7cmV0dXJuIGkgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxpLHt2YWx1ZTplLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtpXT1lLHR9Y2xhc3MgT3tjb25zdHJ1Y3Rvcih0LGksZSxzLHIpe1QodGhpcyxcInVybFwiLHZvaWQgMCksVCh0aGlzLFwiY2hhcldpZHRoXCIsdm9pZCAwKSxUKHRoaXMsXCJjaGFySGVpZ2h0XCIsdm9pZCAwKSxUKHRoaXMsXCJzY2FsZVwiLHZvaWQgMCksVCh0aGlzLFwiZ3JhcGhpY2FsXCIsdm9pZCAwKSx0aGlzLnVybD10LHRoaXMuY2hhcldpZHRoPWksdGhpcy5jaGFySGVpZ2h0PWUsdGhpcy5zY2FsZT1zfHwxLHRoaXMuZ3JhcGhpY2FsPSEhcn19Y29uc3QgVj1uZXcgTyhcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBSUFBQUFDQUFRTUFBQUQ1OFBPSUFBQUFCbEJNVkVVQUFBRC8vLytsMlovZEFBQUVoa2xFUVZSSXg0MlN2NG9VUVJER0M0VXphZFN3d01VRDhRRUtsYldENFE1OEIvTkdwVFZvY0tPMXdYSFV6TUFIMEFjd01UWVZHZzVhZzBJekVYYVJqZFpFWktOemtLYkhxdG56SHlwWTA5TTkrNXV2cXI3cGJZQ3VDNmZ0YVJoZ09OWHMzMGVBaDBPMXJZRG00SVMvZUgwQjhHeFJXMnZ4bzM5Nnl1L2ZiMFpGclcxemNPWGxQVS9YUHdLOFBHamJXaFZ3TTRLbkg2MTkxMm9LNCt6bW1ISmFRb3R5dDFrdnRDMkF0ZG8yNGlvaFBEaUcvdjRlSUNKc1kzV3k4WXZyMERTSUJPZHhnSDZ2OHdzcmlXaGM4czBBdGFLL0d6U2wxalIwblNqUW53a2k2RlF4TkZLamd6TzJhN0JCcXVjSDdkTDRNOXo5NkNJaFQxRnMvQWdLZ2NBNmRLQ3hJMjlEYUhOd1JKNEVHQVUxc1UwT0c5cm1FNFNJYzNBNEZDaEFDcXFoSlJ3cHhrcWg5d3hhZzREU21FSjVEdHBGd0FQNEdVZjZsbUtjRkZ0aTFCWXVRcDR4TjhreE0ya05oamRrVE9pVFVlQUtHdmhBMXJMcE1iWUFDUXpDSVRsVERSTWJMWW9FYTJKV1BTTVJGWkl1cGNTek1WS2NFVWtYK3NPRytDaE5YMnZEOGV4Nms3T0ZITDBQMTY1NUp1UGQ1M1dBRCt5VHYzVXJDUWl1SG1ZQmJmSXhwa0ltdXZwQlFCa1ZiNWc0WEh2M0prTmlyZUc4QU85ekRoQlp1MnoyT01aMTFTNS9SSWx5TWVmTU5hWjRHc0N6NXhjanlNNmhIWUVqQVlFZk84SWcxcmtsQWU5c1JJZVlBZHd5b0lCcTZZSXpDQUtpV29pZkEzbTNvMkF6V2NkWUtPZFk0N0VJZjhRQUJDdVlnSVVWbWRWTUVZRURBMEhtby8zRDZLS0piaDVteGhQM1VzV0lFOTd3bkV5Z3lpek9mT0xpMkpPSlc4Q2VPYmxXOUlIZUtaZ3Y0enh1ekRyeU9tYis0YVFIK01YVjZlMHl3ZFVjeHFDakJXbDVHcGJ6WmR1T0cxUUVpR1hQODZUN0VmaUpma01RNE9PNEgweXF5TkMyemx6aVdFTjdZd3VjMmZRNHA1Qk5rUzVRWVhQMmg1TnRSSmgwdkNLUWlkdFZKbUNHQXdEU1NRcFlnZ1N4aVJJeXpld3NnQ2g0eHhpVFBETWg1YWovL2w3YnRxa3I2clF5SU90TGppNGxWUlF3WGR6dnVzNDBZNTNNMzNmaDUwR1p3RjRFeFFlTWx2dVRnZ0x6U2k0RWxLY3pVTzd6VnRwd2R5TUtkcVpLT1diMm5EYmxhd1B4UG11TXdGRVdCVytqbFpSMWVZdFM0NDJraUJHTVdDaS9oMS8rR0FSNk5ZT0pXaXFOSlhGeWdGdHJreDVDME8zSWVGR3M2N0hoRUVobUJ1L0JVT1QrMDU1MXBYeFlJRitFbHBpNUFLUmtMbDVHVWJDQ1pkZHlNdjYyMXVqRUJQUDR2U3kyZm90VHgzVStkM1dCaUZPQTZWU0dTQjQ5di9NN0dCWDlGUHJEYVQyYzlxcjRQQ3B3WjdxejgxM1I5NGRWRkllMTl2MzNHbE1aVWdoUUZiOEJyZkU3UUJtZ0JNYnJuMkIzZW5uL3kzQjUrREw4VUJBZG5lamRZZEJ4ZVY5ZWp3b1lOVGdXME9rL2dBN1VHMkdBemFuaEwwREc3cTRzdnlud0Y4VXdEUHU3dS92RDBJdWR6U2x0TXRWYlArSi9nVWJSMjlvSjdGZzlzNlV5K0RucGlUQ09ZYzRjWE9lWE1XZnN1c1N3N0ZPZzl4NjU1bmF4NkJsZWN3cE9RUTY4V0J3cCtIMkxNUVR1T3EyUlVpZ3poMlEvUjNDV0FSSklKRzE5OUV3T1R5S0JsUU16bnNoQ1JHZVE1Z0hBQkFRbDZNNGdMRWRBelZhQldNQ2lBTmRzYXlEQ0hCQS9oYWdLWWZpZWxySklsaXBLS1FJQTlOZjN3QmxvVEhUNkJ1QXgxNXpSTmExbkFBQUFBRWxGVGtTdVFtQ0NcIiw4LDgpO2xldCBnLE47ZnVuY3Rpb24gTCh0LGkpe3JldHVybiB0PjA/aT4wP04uUVVBRFJBTlRfU09VVEhFQVNUOjA9PT1pP04uUVVBRFJBTlRfRUFTVDpOLlFVQURSQU5UX05PUlRIRUFTVDp0PDA/aT4wP04uUVVBRFJBTlRfU09VVEhXRVNUOjA9PT1pP04uUVVBRFJBTlRfV0VTVDpOLlFVQURSQU5UX05PUlRIV0VTVDppPjA/Ti5RVUFEUkFOVF9TT1VUSDpOLlFVQURSQU5UX05PUlRIfWZ1bmN0aW9uIGYodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fSFmdW5jdGlvbih0KXt0W3QuT0NUQU5UX1NPVVRIX1NPVVRIRUFTVD0xXT1cIk9DVEFOVF9TT1VUSF9TT1VUSEVBU1RcIix0W3QuT0NUQU5UX0VBU1RfU09VVEhFQVNUPTJdPVwiT0NUQU5UX0VBU1RfU09VVEhFQVNUXCIsdFt0Lk9DVEFOVF9FQVNUX05PUlRIVEhFQVNUPTRdPVwiT0NUQU5UX0VBU1RfTk9SVEhUSEVBU1RcIix0W3QuT0NUQU5UX05PUlRIX05PUlRIRUFTVD04XT1cIk9DVEFOVF9OT1JUSF9OT1JUSEVBU1RcIix0W3QuT0NUQU5UX05PUlRIX05PUlRIV0VTVD0xNl09XCJPQ1RBTlRfTk9SVEhfTk9SVEhXRVNUXCIsdFt0Lk9DVEFOVF9XRVNUX05PUlRIRUFTVD0zMl09XCJPQ1RBTlRfV0VTVF9OT1JUSEVBU1RcIix0W3QuT0NUQU5UX1dFU1RfU09VVEhXRVNUPTY0XT1cIk9DVEFOVF9XRVNUX1NPVVRIV0VTVFwiLHRbdC5PQ1RBTlRfU09VVEhfU09VVEhXRVNUPTEyOF09XCJPQ1RBTlRfU09VVEhfU09VVEhXRVNUXCJ9KGd8fChnPXt9KSksZnVuY3Rpb24odCl7dFt0LlFVQURSQU5UX1NPVVRIRUFTVD0zXT1cIlFVQURSQU5UX1NPVVRIRUFTVFwiLHRbdC5RVUFEUkFOVF9FQVNUPTZdPVwiUVVBRFJBTlRfRUFTVFwiLHRbdC5RVUFEUkFOVF9OT1JUSEVBU1Q9MTJdPVwiUVVBRFJBTlRfTk9SVEhFQVNUXCIsdFt0LlFVQURSQU5UX05PUlRIPTI0XT1cIlFVQURSQU5UX05PUlRIXCIsdFt0LlFVQURSQU5UX05PUlRIV0VTVD00OF09XCJRVUFEUkFOVF9OT1JUSFdFU1RcIix0W3QuUVVBRFJBTlRfV0VTVD05Nl09XCJRVUFEUkFOVF9XRVNUXCIsdFt0LlFVQURSQU5UX1NPVVRIV0VTVD0xOTJdPVwiUVVBRFJBTlRfU09VVEhXRVNUXCIsdFt0LlFVQURSQU5UX1NPVVRIPTEyOV09XCJRVUFEUkFOVF9TT1VUSFwifShOfHwoTj17fSkpO2NsYXNzIFJ7Y29uc3RydWN0b3IodCxpKXtmKHRoaXMsXCJ4XCIsdm9pZCAwKSxmKHRoaXMsXCJ5XCIsdm9pZCAwKSx0aGlzLng9dCx0aGlzLnk9aX19ZnVuY3Rpb24gRCh0LGksZSl7cmV0dXJuIGkgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxpLHt2YWx1ZTplLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtpXT1lLHR9Y2xhc3MgQ3tjb25zdHJ1Y3Rvcih0LGksZSxzKXtEKHRoaXMsXCJ4XCIsdm9pZCAwKSxEKHRoaXMsXCJ5XCIsdm9pZCAwKSxEKHRoaXMsXCJ3aWR0aFwiLHZvaWQgMCksRCh0aGlzLFwiaGVpZ2h0XCIsdm9pZCAwKSxEKHRoaXMsXCJsZWZ0XCIsdm9pZCAwKSxEKHRoaXMsXCJ0b3BcIix2b2lkIDApLEQodGhpcyxcIngyXCIsdm9pZCAwKSxEKHRoaXMsXCJ5MlwiLHZvaWQgMCksdGhpcy54PXRoaXMubGVmdD10LHRoaXMueT10aGlzLnRvcD1pLHRoaXMud2lkdGg9ZSx0aGlzLmhlaWdodD1zLHRoaXMueDI9dCtlLHRoaXMueTI9aStzfWdldENlbnRlcigpe3JldHVybiBuZXcgUih0aGlzLngrdGhpcy53aWR0aC8yfDAsdGhpcy55K3RoaXMuaGVpZ2h0LzJ8MCl9aW50ZXJzZWN0cyh0KXtyZXR1cm4gdGhpcy54PD10LngyJiZ0aGlzLngyPj10LngmJnRoaXMueTw9dC55MiYmdGhpcy55Mj49dC55fWNvbnRhaW5zKHQpe3JldHVybiB0Lng+PXRoaXMueCYmdC54PHRoaXMueDImJnQueT49dGhpcy55JiZ0Lnk8dGhpcy55Mn19ZnVuY3Rpb24gVSh0LGksZSl7cmV0dXJuIGkgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxpLHt2YWx1ZTplLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtpXT1lLHR9Y2xhc3MgU3tjb25zdHJ1Y3Rvcih0LGksZSl7VSh0aGlzLFwiZGlhbG9nXCIsdm9pZCAwKSxVKHRoaXMsXCJyZWN0XCIsdm9pZCAwKSxVKHRoaXMsXCJjb250ZW50c09mZnNldFwiLHZvaWQgMCksVSh0aGlzLFwib3BlblwiLHZvaWQgMCksVSh0aGlzLFwiY291bnRcIix2b2lkIDApLFUodGhpcyxcImJ1ZmZlclwiLHZvaWQgMCksdGhpcy5kaWFsb2c9dCx0aGlzLnJlY3Q9aSx0aGlzLmNvbnRlbnRzT2Zmc2V0PWUsdGhpcy5vcGVuPSExLHRoaXMuY291bnQ9MH19Y2xhc3MgdntnZXRTdGF0ZSh0LGkpe2NvbnN0IGU9aS5jb250ZW50c1JlY3Qud2lkdGgrNCxzPWkuY29udGVudHNSZWN0LmhlaWdodCs0LHI9KHQud2lkdGgtZSkvMnwwLGg9KHQuaGVpZ2h0LXMpLzJ8MDtyZXR1cm4gbmV3IFMoaSxuZXcgQyhyLGgsZSxzKSxuZXcgUihyKzIsaCsyKSl9ZHJhdyh0LGkpe2NvbnN0IGU9aS5kaWFsb2cse3g6cyx5OnIsd2lkdGg6aCxoZWlnaHQ6b309aS5yZWN0O3QuZmlsbFJlY3QocyxyLGgsbywwLEEuV0hJVEUsQS5CTEFDSyksdC5kcmF3U2luZ2xlQm94KHMscixoLG8pLHQuZHJhd0NlbnRlcmVkU3RyaW5nKHMraC8yfDAscixcIiBcIitlLnRpdGxlK1wiIFwiKSxlLmRyYXdDb250ZW50cyh0LGkuY29udGVudHNPZmZzZXQpfX1mdW5jdGlvbiBCKHQsaSxlKXtyZXR1cm4gaSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse3ZhbHVlOmUsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2ldPWUsdH1jbGFzcyBJe2NvbnN0cnVjdG9yKHQsaSl7Qih0aGlzLFwidGVybWluYWxcIix2b2lkIDApLEIodGhpcyxcInJlbmRlcmVyXCIsdm9pZCAwKSxCKHRoaXMsXCJkaWFsb2dzXCIsdm9pZCAwKSx0aGlzLnRlcm1pbmFsPXQsdGhpcy5yZW5kZXJlcj1pfHxuZXcgdix0aGlzLmRpYWxvZ3M9W119YWRkKHQpe3RoaXMuZGlhbG9ncy5wdXNoKHRoaXMucmVuZGVyZXIuZ2V0U3RhdGUodGhpcy50ZXJtaW5hbCx0KSl9aGFuZGxlSW5wdXQoKXtpZigwPT09dGhpcy5kaWFsb2dzLmxlbmd0aClyZXR1cm4hMTtjb25zdCB0PXRoaXMuZGlhbG9ncy5sZW5ndGgtMSxpPXRoaXMuZGlhbG9nc1t0aGlzLmRpYWxvZ3MubGVuZ3RoLTFdO3JldHVybiBpLmRpYWxvZy5oYW5kbGVJbnB1dCh0aGlzLnRlcm1pbmFsLGkuY29udGVudHNPZmZzZXQpJiZ0aGlzLmRpYWxvZ3Muc3BsaWNlKHQsMSksITB9ZHJhdygpe2ZvcihsZXQgdD0wO3Q8dGhpcy5kaWFsb2dzLmxlbmd0aDt0KyspdGhpcy5yZW5kZXJlci5kcmF3KHRoaXMudGVybWluYWwsdGhpcy5kaWFsb2dzW3RdKX19ZnVuY3Rpb24gcCh0LGksZSl7cmV0dXJuIGkgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxpLHt2YWx1ZTplLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtpXT1lLHR9Y2xhc3MgYntjb25zdHJ1Y3Rvcih0LGkpe3AodGhpcyxcImNvbnRlbnRzUmVjdFwiLHZvaWQgMCkscCh0aGlzLFwidGl0bGVcIix2b2lkIDApLHRoaXMuY29udGVudHNSZWN0PXQsdGhpcy50aXRsZT1pfX1mdW5jdGlvbiB3KHQsaSxlKXtyZXR1cm4gaSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse3ZhbHVlOmUsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2ldPWUsdH1jbGFzcyB5e2NvbnN0cnVjdG9yKCl7dyh0aGlzLFwiZG93blwiLHZvaWQgMCksdyh0aGlzLFwiZG93blRpbWVcIix2b2lkIDApLHcodGhpcyxcInJlcGVhdFwiLHZvaWQgMCksdyh0aGlzLFwicmVwZWF0VGltZVwiLHZvaWQgMCksdyh0aGlzLFwiZG93bkNvdW50XCIsdm9pZCAwKSx3KHRoaXMsXCJ1cENvdW50XCIsdm9pZCAwKSx0aGlzLmRvd249ITEsdGhpcy5kb3duVGltZT0wLHRoaXMucmVwZWF0PSExLHRoaXMucmVwZWF0VGltZT0wLHRoaXMuZG93bkNvdW50PTAsdGhpcy51cENvdW50PTEwMH1zZXREb3duKHQpe3RoaXMuZG93biE9PXQmJih0aGlzLmRvd249dCx0aGlzLnJlcGVhdD0hMSx0aGlzLmRvd25UaW1lPXRoaXMucmVwZWF0VGltZT1wZXJmb3JtYW5jZS5ub3coKSl9dXBkYXRlKHQpe3RoaXMucmVwZWF0PSExLHRoaXMuZG93bj8odGhpcy5kb3duQ291bnQrKyx0aGlzLnVwQ291bnQ9MCx0LXRoaXMuZG93blRpbWU+PTIwMCYmdC10aGlzLnJlcGVhdFRpbWU+PTY2LjY2NjY2NjY2NjY2NjY3JiYodGhpcy5yZXBlYXQ9ITAsdGhpcy5yZXBlYXRUaW1lPXQpKToodGhpcy5kb3duQ291bnQ9MCx0aGlzLnVwQ291bnQrKyl9aXNQcmVzc2VkKCl7cmV0dXJuIDE9PT10aGlzLmRvd25Db3VudHx8dGhpcy5yZXBlYXR9aXNDbGlja2VkKCl7cmV0dXJuIDE9PT10aGlzLnVwQ291bnR9fWNvbnN0IG09MjU2O2NsYXNzIHh7Y29uc3RydWN0b3IodCl7dmFyIGksZSxzO3M9dm9pZCAwLChlPVwia2V5c1wiKWluKGk9dGhpcyk/T2JqZWN0LmRlZmluZVByb3BlcnR5KGksZSx7dmFsdWU6cyxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmlbZV09cyx0aGlzLmtleXM9bmV3IEFycmF5KG0pO2ZvcihsZXQgdD0wO3Q8bTt0KyspdGhpcy5rZXlzW3RdPW5ldyB5O3QuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwodD0+dGhpcy5zZXRLZXkodCwhMCkpKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCh0PT50aGlzLnNldEtleSh0LCExKSkpfXNldEtleSh0LGkpe2NvbnN0IGU9dC5rZXlDb2RlO2UhPT1QLlZLX0YxMSYmKHQuc3RvcFByb3BhZ2F0aW9uKCksdC5wcmV2ZW50RGVmYXVsdCgpLGU+PTAmJmU8bSYmdGhpcy5rZXlzW2VdLnNldERvd24oaSkpfXVwZGF0ZUtleXModCl7Zm9yKGxldCBpPTA7aTxtO2krKyl0aGlzLmtleXNbaV0udXBkYXRlKHQpfWdldEtleSh0KXtyZXR1cm4gdD49MCYmdDxtP3RoaXMua2V5c1t0XTpudWxsfX1sZXQgUDshZnVuY3Rpb24odCl7dFt0LlZLX0NBTkNFTD0zXT1cIlZLX0NBTkNFTFwiLHRbdC5WS19IRUxQPTZdPVwiVktfSEVMUFwiLHRbdC5WS19CQUNLX1NQQUNFPThdPVwiVktfQkFDS19TUEFDRVwiLHRbdC5WS19UQUI9OV09XCJWS19UQUJcIix0W3QuVktfQ0xFQVI9MTJdPVwiVktfQ0xFQVJcIix0W3QuVktfRU5URVI9MTNdPVwiVktfRU5URVJcIix0W3QuVktfU0hJRlQ9MTZdPVwiVktfU0hJRlRcIix0W3QuVktfQ09OVFJPTD0xN109XCJWS19DT05UUk9MXCIsdFt0LlZLX0FMVD0xOF09XCJWS19BTFRcIix0W3QuVktfUEFVU0U9MTldPVwiVktfUEFVU0VcIix0W3QuVktfQ0FQU19MT0NLPTIwXT1cIlZLX0NBUFNfTE9DS1wiLHRbdC5WS19FU0NBUEU9MjddPVwiVktfRVNDQVBFXCIsdFt0LlZLX1NQQUNFPTMyXT1cIlZLX1NQQUNFXCIsdFt0LlZLX1BBR0VfVVA9MzNdPVwiVktfUEFHRV9VUFwiLHRbdC5WS19QQUdFX0RPV049MzRdPVwiVktfUEFHRV9ET1dOXCIsdFt0LlZLX0VORD0zNV09XCJWS19FTkRcIix0W3QuVktfSE9NRT0zNl09XCJWS19IT01FXCIsdFt0LlZLX0xFRlQ9MzddPVwiVktfTEVGVFwiLHRbdC5WS19VUD0zOF09XCJWS19VUFwiLHRbdC5WS19SSUdIVD0zOV09XCJWS19SSUdIVFwiLHRbdC5WS19ET1dOPTQwXT1cIlZLX0RPV05cIix0W3QuVktfUFJJTlRTQ1JFRU49NDRdPVwiVktfUFJJTlRTQ1JFRU5cIix0W3QuVktfSU5TRVJUPTQ1XT1cIlZLX0lOU0VSVFwiLHRbdC5WS19ERUxFVEU9NDZdPVwiVktfREVMRVRFXCIsdFt0LlZLXzA9NDhdPVwiVktfMFwiLHRbdC5WS18xPTQ5XT1cIlZLXzFcIix0W3QuVktfMj01MF09XCJWS18yXCIsdFt0LlZLXzM9NTFdPVwiVktfM1wiLHRbdC5WS180PTUyXT1cIlZLXzRcIix0W3QuVktfNT01M109XCJWS181XCIsdFt0LlZLXzY9NTRdPVwiVktfNlwiLHRbdC5WS183PTU1XT1cIlZLXzdcIix0W3QuVktfOD01Nl09XCJWS184XCIsdFt0LlZLXzk9NTddPVwiVktfOVwiLHRbdC5WS19DT0xPTj01OF09XCJWS19DT0xPTlwiLHRbdC5WS19TRU1JQ09MT049NTldPVwiVktfU0VNSUNPTE9OXCIsdFt0LlZLX0xFU1NfVEhBTj02MF09XCJWS19MRVNTX1RIQU5cIix0W3QuVktfRVFVQUxTPTYxXT1cIlZLX0VRVUFMU1wiLHRbdC5WS19HUkVBVEVSX1RIQU49NjJdPVwiVktfR1JFQVRFUl9USEFOXCIsdFt0LlZLX1FVRVNUSU9OX01BUks9NjNdPVwiVktfUVVFU1RJT05fTUFSS1wiLHRbdC5WS19BVD02NF09XCJWS19BVFwiLHRbdC5WS19BPTY1XT1cIlZLX0FcIix0W3QuVktfQj02Nl09XCJWS19CXCIsdFt0LlZLX0M9NjddPVwiVktfQ1wiLHRbdC5WS19EPTY4XT1cIlZLX0RcIix0W3QuVktfRT02OV09XCJWS19FXCIsdFt0LlZLX0Y9NzBdPVwiVktfRlwiLHRbdC5WS19HPTcxXT1cIlZLX0dcIix0W3QuVktfSD03Ml09XCJWS19IXCIsdFt0LlZLX0k9NzNdPVwiVktfSVwiLHRbdC5WS19KPTc0XT1cIlZLX0pcIix0W3QuVktfSz03NV09XCJWS19LXCIsdFt0LlZLX0w9NzZdPVwiVktfTFwiLHRbdC5WS19NPTc3XT1cIlZLX01cIix0W3QuVktfTj03OF09XCJWS19OXCIsdFt0LlZLX089NzldPVwiVktfT1wiLHRbdC5WS19QPTgwXT1cIlZLX1BcIix0W3QuVktfUT04MV09XCJWS19RXCIsdFt0LlZLX1I9ODJdPVwiVktfUlwiLHRbdC5WS19TPTgzXT1cIlZLX1NcIix0W3QuVktfVD04NF09XCJWS19UXCIsdFt0LlZLX1U9ODVdPVwiVktfVVwiLHRbdC5WS19WPTg2XT1cIlZLX1ZcIix0W3QuVktfVz04N109XCJWS19XXCIsdFt0LlZLX1g9ODhdPVwiVktfWFwiLHRbdC5WS19ZPTg5XT1cIlZLX1lcIix0W3QuVktfWj05MF09XCJWS19aXCIsdFt0LlZLX0NPTlRFWFRfTUVOVT05M109XCJWS19DT05URVhUX01FTlVcIix0W3QuVktfTlVNUEFEMD05Nl09XCJWS19OVU1QQUQwXCIsdFt0LlZLX05VTVBBRDE9OTddPVwiVktfTlVNUEFEMVwiLHRbdC5WS19OVU1QQUQyPTk4XT1cIlZLX05VTVBBRDJcIix0W3QuVktfTlVNUEFEMz05OV09XCJWS19OVU1QQUQzXCIsdFt0LlZLX05VTVBBRDQ9MTAwXT1cIlZLX05VTVBBRDRcIix0W3QuVktfTlVNUEFENT0xMDFdPVwiVktfTlVNUEFENVwiLHRbdC5WS19OVU1QQUQ2PTEwMl09XCJWS19OVU1QQUQ2XCIsdFt0LlZLX05VTVBBRDc9MTAzXT1cIlZLX05VTVBBRDdcIix0W3QuVktfTlVNUEFEOD0xMDRdPVwiVktfTlVNUEFEOFwiLHRbdC5WS19OVU1QQUQ5PTEwNV09XCJWS19OVU1QQUQ5XCIsdFt0LlZLX01VTFRJUExZPTEwNl09XCJWS19NVUxUSVBMWVwiLHRbdC5WS19BREQ9MTA3XT1cIlZLX0FERFwiLHRbdC5WS19TRVBBUkFUT1I9MTA4XT1cIlZLX1NFUEFSQVRPUlwiLHRbdC5WS19TVUJUUkFDVD0xMDldPVwiVktfU1VCVFJBQ1RcIix0W3QuVktfREVDSU1BTD0xMTBdPVwiVktfREVDSU1BTFwiLHRbdC5WS19ESVZJREU9MTExXT1cIlZLX0RJVklERVwiLHRbdC5WS19GMT0xMTJdPVwiVktfRjFcIix0W3QuVktfRjI9MTEzXT1cIlZLX0YyXCIsdFt0LlZLX0YzPTExNF09XCJWS19GM1wiLHRbdC5WS19GND0xMTVdPVwiVktfRjRcIix0W3QuVktfRjU9MTE2XT1cIlZLX0Y1XCIsdFt0LlZLX0Y2PTExN109XCJWS19GNlwiLHRbdC5WS19GNz0xMThdPVwiVktfRjdcIix0W3QuVktfRjg9MTE5XT1cIlZLX0Y4XCIsdFt0LlZLX0Y5PTEyMF09XCJWS19GOVwiLHRbdC5WS19GMTA9MTIxXT1cIlZLX0YxMFwiLHRbdC5WS19GMTE9MTIyXT1cIlZLX0YxMVwiLHRbdC5WS19GMTI9MTIzXT1cIlZLX0YxMlwiLHRbdC5WS19GMTM9MTI0XT1cIlZLX0YxM1wiLHRbdC5WS19GMTQ9MTI1XT1cIlZLX0YxNFwiLHRbdC5WS19GMTU9MTI2XT1cIlZLX0YxNVwiLHRbdC5WS19GMTY9MTI3XT1cIlZLX0YxNlwiLHRbdC5WS19GMTc9MTI4XT1cIlZLX0YxN1wiLHRbdC5WS19GMTg9MTI5XT1cIlZLX0YxOFwiLHRbdC5WS19GMTk9MTMwXT1cIlZLX0YxOVwiLHRbdC5WS19GMjA9MTMxXT1cIlZLX0YyMFwiLHRbdC5WS19GMjE9MTMyXT1cIlZLX0YyMVwiLHRbdC5WS19GMjI9MTMzXT1cIlZLX0YyMlwiLHRbdC5WS19GMjM9MTM0XT1cIlZLX0YyM1wiLHRbdC5WS19GMjQ9MTM1XT1cIlZLX0YyNFwiLHRbdC5WS19OVU1fTE9DSz0xNDRdPVwiVktfTlVNX0xPQ0tcIix0W3QuVktfU0NST0xMX0xPQ0s9MTQ1XT1cIlZLX1NDUk9MTF9MT0NLXCIsdFt0LlZLX0NJUkNVTUZMRVg9MTYwXT1cIlZLX0NJUkNVTUZMRVhcIix0W3QuVktfRVhDTEFNQVRJT049MTYxXT1cIlZLX0VYQ0xBTUFUSU9OXCIsdFt0LlZLX0RPVUJMRV9RVU9URT0xNjJdPVwiVktfRE9VQkxFX1FVT1RFXCIsdFt0LlZLX0hBU0g9MTYzXT1cIlZLX0hBU0hcIix0W3QuVktfRE9MTEFSPTE2NF09XCJWS19ET0xMQVJcIix0W3QuVktfUEVSQ0VOVD0xNjVdPVwiVktfUEVSQ0VOVFwiLHRbdC5WS19BTVBFUlNBTkQ9MTY2XT1cIlZLX0FNUEVSU0FORFwiLHRbdC5WS19VTkRFUlNDT1JFPTE2N109XCJWS19VTkRFUlNDT1JFXCIsdFt0LlZLX09QRU5fUEFSRU49MTY4XT1cIlZLX09QRU5fUEFSRU5cIix0W3QuVktfQ0xPU0VfUEFSRU49MTY5XT1cIlZLX0NMT1NFX1BBUkVOXCIsdFt0LlZLX0FTVEVSSVNLPTE3MF09XCJWS19BU1RFUklTS1wiLHRbdC5WS19QTFVTPTE3MV09XCJWS19QTFVTXCIsdFt0LlZLX1BJUEU9MTcyXT1cIlZLX1BJUEVcIix0W3QuVktfSFlQSEVOX01JTlVTPTE3M109XCJWS19IWVBIRU5fTUlOVVNcIix0W3QuVktfT1BFTl9DVVJMWV9CUkFDS0VUPTE3NF09XCJWS19PUEVOX0NVUkxZX0JSQUNLRVRcIix0W3QuVktfQ0xPU0VfQ1VSTFlfQlJBQ0tFVD0xNzVdPVwiVktfQ0xPU0VfQ1VSTFlfQlJBQ0tFVFwiLHRbdC5WS19USUxERT0xNzZdPVwiVktfVElMREVcIix0W3QuVktfQ09NTUE9MTg4XT1cIlZLX0NPTU1BXCIsdFt0LlZLX1BFUklPRD0xOTBdPVwiVktfUEVSSU9EXCIsdFt0LlZLX1NMQVNIPTE5MV09XCJWS19TTEFTSFwiLHRbdC5WS19CQUNLX1FVT1RFPTE5Ml09XCJWS19CQUNLX1FVT1RFXCIsdFt0LlZLX09QRU5fQlJBQ0tFVD0yMTldPVwiVktfT1BFTl9CUkFDS0VUXCIsdFt0LlZLX0JBQ0tfU0xBU0g9MjIwXT1cIlZLX0JBQ0tfU0xBU0hcIix0W3QuVktfQ0xPU0VfQlJBQ0tFVD0yMjFdPVwiVktfQ0xPU0VfQlJBQ0tFVFwiLHRbdC5WS19RVU9URT0yMjJdPVwiVktfUVVPVEVcIix0W3QuVktfTUVUQT0yMjRdPVwiVktfTUVUQVwiLHRbdC5WS19BTFRHUj0yMjVdPVwiVktfQUxUR1JcIix0W3QuVktfV0lOPTkxXT1cIlZLX1dJTlwiLHRbdC5WS19LQU5BPTIxXT1cIlZLX0tBTkFcIix0W3QuVktfSEFOR1VMPTIxXT1cIlZLX0hBTkdVTFwiLHRbdC5WS19FSVNVPTIyXT1cIlZLX0VJU1VcIix0W3QuVktfSlVOSkE9MjNdPVwiVktfSlVOSkFcIix0W3QuVktfRklOQUw9MjRdPVwiVktfRklOQUxcIix0W3QuVktfSEFOSkE9MjVdPVwiVktfSEFOSkFcIix0W3QuVktfS0FOSkk9MjVdPVwiVktfS0FOSklcIix0W3QuVktfQ09OVkVSVD0yOF09XCJWS19DT05WRVJUXCIsdFt0LlZLX05PTkNPTlZFUlQ9MjldPVwiVktfTk9OQ09OVkVSVFwiLHRbdC5WS19BQ0NFUFQ9MzBdPVwiVktfQUNDRVBUXCIsdFt0LlZLX01PREVDSEFOR0U9MzFdPVwiVktfTU9ERUNIQU5HRVwiLHRbdC5WS19TRUxFQ1Q9NDFdPVwiVktfU0VMRUNUXCIsdFt0LlZLX1BSSU5UPTQyXT1cIlZLX1BSSU5UXCIsdFt0LlZLX0VYRUNVVEU9NDNdPVwiVktfRVhFQ1VURVwiLHRbdC5WS19TTEVFUD05NV09XCJWS19TTEVFUFwifShQfHwoUD17fSkpO2NsYXNzIEggZXh0ZW5kcyBie2NvbnN0cnVjdG9yKHQsaSl7Y29uc3QgZT1pLnNwbGl0KFwiXFxuXCIpO2xldCBzPXQubGVuZ3RoO2ZvcihsZXQgdD0wO3Q8ZS5sZW5ndGg7dCsrKXM9TWF0aC5tYXgocyxlW3RdLmxlbmd0aCk7Y29uc3Qgcj1lLmxlbmd0aDt2YXIgaCxvLG47c3VwZXIobmV3IEMoMCwwLHMsciksdCksbj12b2lkIDAsKG89XCJsaW5lc1wiKWluKGg9dGhpcyk/T2JqZWN0LmRlZmluZVByb3BlcnR5KGgsbyx7dmFsdWU6bixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmhbb109bix0aGlzLmxpbmVzPWV9ZHJhd0NvbnRlbnRzKHQsaSl7Zm9yKGxldCBlPTA7ZTx0aGlzLmxpbmVzLmxlbmd0aDtlKyspdC5kcmF3U3RyaW5nKGkueCxpLnkrZSx0aGlzLmxpbmVzW2VdKX1oYW5kbGVJbnB1dCh0LGkpe3JldHVybiB0LmlzS2V5UHJlc3NlZChQLlZLX0VTQ0FQRSl9fWZ1bmN0aW9uIEYodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fWNsYXNzIE0gZXh0ZW5kcyBie2NvbnN0cnVjdG9yKHQsaSxlKXtsZXQgcz10Lmxlbmd0aDtmb3IobGV0IHQ9MDt0PGkubGVuZ3RoO3QrKylzPU1hdGgubWF4KHMsaVt0XS5sZW5ndGgrNCk7Y29uc3Qgcj1pLmxlbmd0aDtzdXBlcihuZXcgQygwLDAscyxyKSx0KSxGKHRoaXMsXCJvcHRpb25zXCIsdm9pZCAwKSxGKHRoaXMsXCJjYWxsYmFja1wiLHZvaWQgMCksRih0aGlzLFwiaG92ZXJJbmRleFwiLHZvaWQgMCksdGhpcy5vcHRpb25zPWksdGhpcy5jYWxsYmFjaz1lLHRoaXMuaG92ZXJJbmRleD0tMX1kcmF3Q29udGVudHModCxpKXtmb3IobGV0IGU9MDtlPHRoaXMub3B0aW9ucy5sZW5ndGg7ZSsrKXtjb25zdCBzPVN0cmluZy5mcm9tQ2hhckNvZGUoNjUrZSkrXCIgLSBcIit0aGlzLm9wdGlvbnNbZV07ZT09PXRoaXMuaG92ZXJJbmRleD90LmRyYXdTdHJpbmcoaS54LGkueStlLHMsQS5CTEFDSyxBLldISVRFKTp0LmRyYXdTdHJpbmcoaS54LGkueStlLHMsQS5XSElURSxBLkJMQUNLKX19aGFuZGxlSW5wdXQodCxpKXtpZih0aGlzLmhvdmVySW5kZXg9LTEsdC5tb3VzZS54Pj1pLngmJnQubW91c2UueDxpLngrdGhpcy5jb250ZW50c1JlY3Qud2lkdGgmJnQubW91c2UueT49aS55JiZ0Lm1vdXNlLnk8aS55K3RoaXMuY29udGVudHNSZWN0LmhlaWdodCYmKHRoaXMuaG92ZXJJbmRleD10Lm1vdXNlLnktaS55LDE9PT10Lm1vdXNlLmJ1dHRvbnNbMF0udXBDb3VudCkpcmV0dXJuIHRoaXMuY2FsbGJhY2sodGhpcy5ob3ZlckluZGV4KSwhMDtmb3IobGV0IGk9MDtpPHRoaXMub3B0aW9ucy5sZW5ndGg7aSsrKWlmKHQuaXNLZXlQcmVzc2VkKFAuVktfQStpKSlyZXR1cm4gdGhpcy5jYWxsYmFjayhpKSwhMDtyZXR1cm4gdC5pc0tleVByZXNzZWQoUC5WS19FU0NBUEUpfWlzTW91c2VPdmVyT3B0aW9uKHQsaSxlKXtyZXR1cm4gdC5tb3VzZS54Pj1pLngmJnQubW91c2UueDxpLngrdGhpcy5jb250ZW50c1JlY3Qud2lkdGgmJnQubW91c2UueT09PWkueStlfX1jb25zdCBHPVt7Y2hhckNvZGU6Yy5CTE9DS19UT1BfSEFMRixhY3RpdmU6WzEsMSwwLDBdfSx7Y2hhckNvZGU6Yy5CTE9DS19SSUdIVF9IQUxGLGFjdGl2ZTpbMCwxLDAsMV19XTtmdW5jdGlvbiBYKHQsaSl7Y29uc3QgZT1uZXcgSW1hZ2U7ZS5vbmxvYWQ9KCk9Pntjb25zdCB0PWUud2lkdGgscz1lLmhlaWdodCxyPVcoZSksaD1uZXcgSyh0LHMpO2xldCBvPTA7Zm9yKGxldCBpPTA7aTxzO2krKylmb3IobGV0IGU9MDtlPHQ7ZSsrKXtoLmdldENlbGwoZSxpKS5zZXRCYWNrZ3JvdW5kKGEocltvKytdLHJbbysrXSxyW28rK10scltvKytdKSl9aShoKX0sZS5zcmM9dH1mdW5jdGlvbiBZKHQsaSl7Y29uc3QgZT1uZXcgSW1hZ2U7ZS5vbmxvYWQ9KCk9Pntjb25zdCB0PWUud2lkdGgscz1lLmhlaWdodCxyPVcoZSksaD1uZXcgSyh0LzIscy8yKTtmb3IobGV0IGk9MDtpPHM7aSs9Milmb3IobGV0IGU9MDtlPHQ7ZSs9MilrKGgscixlLGksdCk7aShoKX0sZS5zcmM9dH1mdW5jdGlvbiBXKHQpe2NvbnN0IGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtpLndpZHRoPXQud2lkdGgsaS5oZWlnaHQ9dC5oZWlnaHQ7Y29uc3QgZT1pLmdldENvbnRleHQoXCIyZFwiKTtyZXR1cm4gZS5kcmF3SW1hZ2UodCwwLDApLGUuZ2V0SW1hZ2VEYXRhKDAsMCx0LndpZHRoLHQuaGVpZ2h0KS5kYXRhfWZ1bmN0aW9uIGsodCxpLGUscyxyKXtjb25zdCBoPTQqKHMqcitlKSxvPTQqKHMqcitlKzEpLG49NCooKHMrMSkqcitlKSxfPTQqKChzKzEpKnIrZSsxKSxhPVtbaVtoXSxpW2grMV0saVtoKzJdXSxbaVtvXSxpW28rMV0saVtvKzJdXSxbaVtuXSxpW24rMV0saVtuKzJdXSxbaVtfXSxpW18rMV0saVtfKzJdXV07bGV0IGQ9TnVtYmVyLk1BWF9WQUxVRSxBPTAsbD1udWxsLEU9bnVsbDtmb3IobGV0IHQ9MDt0PEcubGVuZ3RoO3QrKyl7Y29uc3QgaT1HW3RdLGU9UShpLmFjdGl2ZSxhKTtlLmVycm9yPGQmJihkPWUuZXJyb3IsQT1pLmNoYXJDb2RlLGw9ZS5iZyxFPWUuZmcpfXQuZHJhd0NoYXIoZS8yLHMvMixBLHooRSkseihsKSl9ZnVuY3Rpb24gUSh0LGkpe2NvbnN0IGU9W1swLDAsMF0sWzAsMCwwXV0scz1bWzAsMCwwXSxbMCwwLDBdXSxyPVswLDBdO2ZvcihsZXQgcz0wO3M8NDtzKyspe2ZvcihsZXQgcj0wO3I8MztyKyspZVt0W3NdXVtyXSs9aVtzXVtyXTtyW3Rbc11dKyt9Zm9yKGxldCB0PTA7dDwyO3QrKylmb3IobGV0IGk9MDtpPDM7aSsrKXNbdF1baV09ZVt0XVtpXS9yW3RdO2xldCBoPTA7Zm9yKGxldCBlPTA7ZTw0O2UrKyl7bGV0IHI9MDtmb3IobGV0IGg9MDtoPDM7aCsrKXtjb25zdCBvPWlbZV1baF0tc1t0W2VdXVtoXTtyKz1vKm99aCs9TWF0aC5zcXJ0KHIpfXJldHVybntiZzpzWzBdLGZnOnNbMV0sZXJyb3I6aH19ZnVuY3Rpb24geih0KXtyZXR1cm4gYSh0WzBdLHRbMV0sdFsyXSl9ZnVuY3Rpb24gaih0LGksZSl7cmV0dXJuIGkgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxpLHt2YWx1ZTplLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtpXT1lLHR9Y2xhc3MgWntjb25zdHJ1Y3Rvcih0KXtqKHRoaXMsXCJlbFwiLHZvaWQgMCksaih0aGlzLFwid2lkdGhcIix2b2lkIDApLGoodGhpcyxcImhlaWdodFwiLHZvaWQgMCksaih0aGlzLFwicHJldlhcIix2b2lkIDApLGoodGhpcyxcInByZXZZXCIsdm9pZCAwKSxqKHRoaXMsXCJ4XCIsdm9pZCAwKSxqKHRoaXMsXCJ5XCIsdm9pZCAwKSxqKHRoaXMsXCJkeFwiLHZvaWQgMCksaih0aGlzLFwiZHlcIix2b2lkIDApLGoodGhpcyxcImJ1dHRvbnNcIix2b2lkIDApLHRoaXMuZWw9dC5jYW52YXMsdGhpcy53aWR0aD10LndpZHRoLHRoaXMuaGVpZ2h0PXQuaGVpZ2h0LHRoaXMucHJldlg9MCx0aGlzLnByZXZZPTAsdGhpcy54PTAsdGhpcy55PTAsdGhpcy5keD0wLHRoaXMuZHk9MCx0aGlzLmJ1dHRvbnM9W25ldyB5LG5ldyB5LG5ldyB5XTtjb25zdCBpPXRoaXMuZWw7aS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsKHQ9PnRoaXMuaGFuZGxlRXZlbnQodCkpKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsKHQ9PnRoaXMuaGFuZGxlRXZlbnQodCkpKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwodD0+dGhpcy5oYW5kbGVFdmVudCh0KSkpLGkuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsKHQ9PnRoaXMuaGFuZGxlRXZlbnQodCkpKTtjb25zdCBlPXRoaXMuaGFuZGxlVG91Y2hFdmVudC5iaW5kKHRoaXMpO2kuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixlKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLGUpLGkuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoY2FuY2VsXCIsZSksaS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsZSl9aGFuZGxlVG91Y2hFdmVudCh0KXtpZih0LnN0b3BQcm9wYWdhdGlvbigpLHQucHJldmVudERlZmF1bHQoKSx0LnRvdWNoZXMubGVuZ3RoPjApe2NvbnN0IGk9dC50b3VjaGVzWzBdO3RoaXMudXBkYXRlUG9zaXRpb24oaS5jbGllbnRYLGkuY2xpZW50WSksdGhpcy5idXR0b25zWzBdLnNldERvd24oITApfWVsc2UgdGhpcy5idXR0b25zWzBdLnNldERvd24oITEpfWhhbmRsZUV2ZW50KHQpe3Quc3RvcFByb3BhZ2F0aW9uKCksdC5wcmV2ZW50RGVmYXVsdCgpLHRoaXMudXBkYXRlUG9zaXRpb24odC5jbGllbnRYLHQuY2xpZW50WSksXCJtb3VzZWRvd25cIj09PXQudHlwZSYmKHRoaXMuYnV0dG9uc1t0LmJ1dHRvbl0uc2V0RG93bighMCksdGhpcy5lbC5mb2N1cygpKSxcIm1vdXNldXBcIj09PXQudHlwZSYmdGhpcy5idXR0b25zW3QuYnV0dG9uXS5zZXREb3duKCExKX11cGRhdGVQb3NpdGlvbih0LGkpe2xldCBlPXRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7Y29uc3Qgcz10aGlzLndpZHRoL3RoaXMuaGVpZ2h0LHI9ZS53aWR0aC9lLmhlaWdodDtpZihyLXM+LjAxKXtjb25zdCB0PXMqZS5oZWlnaHQsaT1lLndpZHRoLXQ7ZT1uZXcgQyhNYXRoLmZsb29yKGkvMiksMCx0LGUuaGVpZ2h0KX1pZihyLXM8LS4wMSl7Y29uc3QgdD1lLndpZHRoL3MsaT1lLmhlaWdodC10O2U9bmV3IEMoMCxNYXRoLmZsb29yKGkvMiksZS53aWR0aCx0KX10aGlzLng9dGhpcy53aWR0aCoodC1lLmxlZnQpL2Uud2lkdGh8MCx0aGlzLnk9dGhpcy5oZWlnaHQqKGktZS50b3ApL2UuaGVpZ2h0fDB9dXBkYXRlKHQpe3RoaXMuZHg9dGhpcy54LXRoaXMucHJldlgsdGhpcy5keT10aGlzLnktdGhpcy5wcmV2WSx0aGlzLnByZXZYPXRoaXMueCx0aGlzLnByZXZZPXRoaXMueTtmb3IobGV0IGk9MDtpPHRoaXMuYnV0dG9ucy5sZW5ndGg7aSsrKXRoaXMuYnV0dG9uc1tpXS51cGRhdGUodCl9fWNvbnN0IEo9Wy0xLDAsMSwtMSwxLC0xLDAsMV0scT1bLTEsLTEsLTEsMCwwLDEsMSwxXSwkPVsxLjQsMSwxLjQsMSwxLDEuNCwxLDEuNF07bGV0IHR0PTA7ZnVuY3Rpb24gaXQodCxpLGUscyl7dHQrKztjb25zdCByPXQuZ3JpZFtpLnldW2kueF07ci5wYXRoSWQ9dHQsci5nPTAsci5oPU1hdGguaHlwb3QoaS54LWUueCxpLnktZS55KSxyLnByZXY9bnVsbDtjb25zdCBoPW5ldyBzdChbcl0pO2Zvcig7aC5zaXplKCk+MDspe2NvbnN0IGk9aC5wb3AoKTtpZihpLng9PT1lLngmJmkueT09PWUueSlyZXR1cm4gZXQoaSk7Zm9yKGxldCByPTA7cjxKLmxlbmd0aDtyKyspe2NvbnN0IG89aS54K0pbcl0sbj1pLnkrcVtyXTtpZihvPj0wJiZvPHQud2lkdGgmJm4+PTAmJm48dC5oZWlnaHQpe2NvbnN0IF89dC5ncmlkW25dW29dO2lmKF8uYmxvY2tlZCYmXy5leHBsb3JlZCYmKG8hPT1lLnh8fG4hPT1lLnkpKWNvbnRpbnVlO18ucGF0aElkIT09dHQmJihfLnBhdGhJZD10dCxfLmc9MS8wLF8uaD1NYXRoLmh5cG90KG8tZS54LG4tZS55KSxfLnByZXY9bnVsbCk7Y29uc3QgYT1pLmcrJFtyXTthPF8uZyYmYTw9cyYmKF8uZz1hLF8ucHJldj1pLGguaW5zZXJ0KF8pKX19fX1mdW5jdGlvbiBldCh0KXtjb25zdCBpPVtdO2xldCBlPXQ7Zm9yKDtlOylpLnB1c2goZSksZT1lLnByZXY7cmV0dXJuIGkucmV2ZXJzZSgpLGl9Y2xhc3Mgc3R7Y29uc3RydWN0b3IodCl7dmFyIGksZSxzO3M9dm9pZCAwLChlPVwidmFsdWVzXCIpaW4oaT10aGlzKT9PYmplY3QuZGVmaW5lUHJvcGVydHkoaSxlLHt2YWx1ZTpzLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6aVtlXT1zLHRoaXMudmFsdWVzPXR9aW5zZXJ0KHQpe2NvbnN0IGk9dGhpcy52YWx1ZXM7bGV0IGU9MCxzPWkubGVuZ3RoLHI9MDtmb3IoO2U8czspe2NvbnN0IGg9ZStzPj4+MSxvPWlbaF07by5nK28uaD50LmcrdC5oPyhlPWgrMSxyPWUpOihzPWgscj1zKX1pLnNwbGljZShyLDAsdCl9cG9wKCl7cmV0dXJuIHRoaXMudmFsdWVzLnBvcCgpfXNpemUoKXtyZXR1cm4gdGhpcy52YWx1ZXMubGVuZ3RofX1mdW5jdGlvbiBydCh0LGksZSl7cmV0dXJuIGkgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxpLHt2YWx1ZTplLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtpXT1lLHR9Y2xhc3MgaHR7Y29uc3RydWN0b3IodCl7cnQodGhpcyxcIm1cIix2b2lkIDApLHJ0KHRoaXMsXCJhXCIsdm9pZCAwKSxydCh0aGlzLFwiY1wiLHZvaWQgMCkscnQodGhpcyxcInN0YXRlXCIsdm9pZCAwKSx0aGlzLm09MjE0NzQ4MzY0OCx0aGlzLmE9MTEwMzUxNTI0NSx0aGlzLmM9MTIzNDUsdGhpcy5zdGF0ZT10fHwxfW5leHRJbnQoKXtyZXR1cm4gdGhpcy5zdGF0ZT0odGhpcy5hKnRoaXMuc3RhdGUrdGhpcy5jKSV0aGlzLm0sdGhpcy5zdGF0ZX1uZXh0RmxvYXQoKXtyZXR1cm4gdGhpcy5uZXh0SW50KCkvKHRoaXMubS0xKX1uZXh0UmFuZ2UodCxpKXtjb25zdCBlPWktdCxzPXQrKHRoaXMubmV4dEludCgpL3RoaXMubSplfDApO2lmKGlzTmFOKHMpKXRocm93IG5ldyBFcnJvcihcInJhbmQgbmFuXCIpO3JldHVybiBzfWNob29zZUluZGV4KHQpe2NvbnN0IGk9dC5yZWR1Y2UoKCh0LGkpPT50K2kpKSxlPXRoaXMubmV4dFJhbmdlKDEsaSsxKTtsZXQgcz0wO2ZvcihsZXQgaT0wO2k8dC5sZW5ndGg7aSsrKWlmKHMrPXRbaV0sZTw9cylyZXR1cm4gaTtyZXR1cm4gdC5sZW5ndGgtMX1jaG9vc2VLZXkodCl7Y29uc3QgaT1PYmplY3Qua2V5cyh0KSxlPWkubWFwKChpPT50W2ldKSk7cmV0dXJuIGlbdGhpcy5jaG9vc2VJbmRleChlKV19fWZ1bmN0aW9uIG90KHQsaSxlKXtyZXR1cm4gaSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse3ZhbHVlOmUsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2ldPWUsdH1mdW5jdGlvbiBudCh0LGkpe3JldHVybiB0L2kqMi0xfWNvbnN0IF90PXtmb250OlZ9O2NsYXNzIGF0IGV4dGVuZHMgS3tjb25zdHJ1Y3Rvcih0LGksZSxzKXtzdXBlcihpLGUpLG90KHRoaXMsXCJjYW52YXNcIix2b2lkIDApLG90KHRoaXMsXCJmb250XCIsdm9pZCAwKSxvdCh0aGlzLFwicGl4ZWxXaWR0aFwiLHZvaWQgMCksb3QodGhpcyxcInBpeGVsSGVpZ2h0XCIsdm9pZCAwKSxvdCh0aGlzLFwia2V5c1wiLHZvaWQgMCksb3QodGhpcyxcIm1vdXNlXCIsdm9pZCAwKSxvdCh0aGlzLFwiZ2xcIix2b2lkIDApLG90KHRoaXMsXCJwcm9ncmFtXCIsdm9pZCAwKSxvdCh0aGlzLFwicG9zaXRpb25BdHRyaWJMb2NhdGlvblwiLHZvaWQgMCksb3QodGhpcyxcInRleHR1cmVBdHRyaWJMb2NhdGlvblwiLHZvaWQgMCksb3QodGhpcyxcImZnQ29sb3JBdHRyaWJMb2NhdGlvblwiLHZvaWQgMCksb3QodGhpcyxcImJnQ29sb3JBdHRyaWJMb2NhdGlvblwiLHZvaWQgMCksb3QodGhpcyxcInBvc2l0aW9uc0FycmF5XCIsdm9pZCAwKSxvdCh0aGlzLFwiaW5kZXhBcnJheVwiLHZvaWQgMCksb3QodGhpcyxcInRleHR1cmVBcnJheVwiLHZvaWQgMCksb3QodGhpcyxcImZvcmVncm91bmRVaW50OEFycmF5XCIsdm9pZCAwKSxvdCh0aGlzLFwiZm9yZWdyb3VuZERhdGFWaWV3XCIsdm9pZCAwKSxvdCh0aGlzLFwiYmFja2dyb3VuZFVpbnQ4QXJyYXlcIix2b2lkIDApLG90KHRoaXMsXCJiYWNrZ3JvdW5kRGF0YVZpZXdcIix2b2lkIDApLG90KHRoaXMsXCJwb3NpdGlvbkJ1ZmZlclwiLHZvaWQgMCksb3QodGhpcyxcImluZGV4QnVmZmVyXCIsdm9pZCAwKSxvdCh0aGlzLFwidGV4dHVyZUJ1ZmZlclwiLHZvaWQgMCksb3QodGhpcyxcImZvcmVncm91bmRCdWZmZXJcIix2b2lkIDApLG90KHRoaXMsXCJiYWNrZ3JvdW5kQnVmZmVyXCIsdm9pZCAwKSxvdCh0aGlzLFwidGV4dHVyZVwiLHZvaWQgMCksb3QodGhpcyxcImxhc3RSZW5kZXJUaW1lXCIsdm9pZCAwKSxvdCh0aGlzLFwicmVuZGVyRGVsdGFcIix2b2lkIDApLG90KHRoaXMsXCJmcHNcIix2b2lkIDApLG90KHRoaXMsXCJhdmVyYWdlRnBzXCIsdm9pZCAwKSxvdCh0aGlzLFwidXBkYXRlXCIsdm9pZCAwKSxzPXN8fF90LHRoaXMuY2FudmFzPXQsdGhpcy5mb250PXMuZm9udHx8Vix0aGlzLnBpeGVsV2lkdGg9aSp0aGlzLmZvbnQuY2hhcldpZHRoLHRoaXMucGl4ZWxIZWlnaHQ9ZSp0aGlzLmZvbnQuY2hhckhlaWdodCx0LndpZHRoPXRoaXMucGl4ZWxXaWR0aCx0LmhlaWdodD10aGlzLnBpeGVsSGVpZ2h0LHQuc3R5bGUuaW1hZ2VSZW5kZXJpbmc9XCJwaXhlbGF0ZWRcIix0LnN0eWxlLm91dGxpbmU9XCJub25lXCIsdC50YWJJbmRleD0wLHRoaXMuaGFuZGxlUmVzaXplKCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwoKCk9PnRoaXMuaGFuZGxlUmVzaXplKCkpKSx0aGlzLmtleXM9bmV3IHgodCksdGhpcy5tb3VzZT1uZXcgWih0aGlzKTtjb25zdCByPXQuZ2V0Q29udGV4dChcIndlYmdsXCIse2FudGlhbGlhczohMX0pO2lmKCFyKXRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBpbml0aWFsaXplIFdlYkdMLiBZb3VyIGJyb3dzZXIgbWF5IG5vdCBzdXBwb3J0IGl0LlwiKTtjb25zdCBoPXIuY3JlYXRlUHJvZ3JhbSgpO2lmKCFoKXRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBpbml0aWFsaXplIFdlYkdMLiBZb3VyIGJyb3dzZXIgbWF5IG5vdCBzdXBwb3J0IGl0LlwiKTt0aGlzLmdsPXIsdGhpcy5wcm9ncmFtPWgsci5hdHRhY2hTaGFkZXIoaCx0aGlzLmJ1aWxkU2hhZGVyKHIuVkVSVEVYX1NIQURFUixcImF0dHJpYnV0ZSB2ZWMyIGE7YXR0cmlidXRlIHZlYzIgYjthdHRyaWJ1dGUgdmVjMyBjO2F0dHJpYnV0ZSB2ZWMzIGQ7dmFyeWluZyBoaWdocCB2ZWMyIGU7dmFyeWluZyBoaWdocCB2ZWM0IGY7dmFyeWluZyBoaWdocCB2ZWM0IGc7dm9pZCBtYWluKHZvaWQpe2dsX1Bvc2l0aW9uPXZlYzQoYS54LGEueSwwLDEpO2U9Yi8xNi4wO2Y9dmVjNChjLnIsYy5nLGMuYiwxKTtnPXZlYzQoZC5yLGQuZyxkLmIsMSk7fVwiKSksci5hdHRhY2hTaGFkZXIoaCx0aGlzLmJ1aWxkU2hhZGVyKHIuRlJBR01FTlRfU0hBREVSLFwidmFyeWluZyBoaWdocCB2ZWMyIGU7dmFyeWluZyBoaWdocCB2ZWM0IGY7dmFyeWluZyBoaWdocCB2ZWM0IGc7dW5pZm9ybSBib29sIGg7dW5pZm9ybSBzYW1wbGVyMkQgczt2b2lkIG1haW4odm9pZCl7Z2xfRnJhZ0NvbG9yPXRleHR1cmUyRChzLGUpO2lmKGgpe2lmKGdsX0ZyYWdDb2xvci5hPDAuMSl7Z2xfRnJhZ0NvbG9yPXRleHR1cmUyRChzLGcucmcqMTYuMCtmcmFjdChlKjE2LjApLzE2LjApO319ZWxzZXtpZihnbF9GcmFnQ29sb3IucjwwLjEpIHtnbF9GcmFnQ29sb3I9Zzt9IGVsc2Uge2dsX0ZyYWdDb2xvcj1mO319fVwiKSksci5saW5rUHJvZ3JhbShoKSxyLnVzZVByb2dyYW0oaCksdGhpcy5mb250LmdyYXBoaWNhbCYmci51bmlmb3JtMWkoci5nZXRVbmlmb3JtTG9jYXRpb24oaCxcImhcIiksMSksdGhpcy5wb3NpdGlvbkF0dHJpYkxvY2F0aW9uPXRoaXMuZ2V0QXR0cmliTG9jYXRpb24oXCJhXCIpLHRoaXMudGV4dHVyZUF0dHJpYkxvY2F0aW9uPXRoaXMuZ2V0QXR0cmliTG9jYXRpb24oXCJiXCIpLHRoaXMuZmdDb2xvckF0dHJpYkxvY2F0aW9uPXRoaXMuZ2V0QXR0cmliTG9jYXRpb24oXCJjXCIpLHRoaXMuYmdDb2xvckF0dHJpYkxvY2F0aW9uPXRoaXMuZ2V0QXR0cmliTG9jYXRpb24oXCJkXCIpO2NvbnN0IG89aSplO3RoaXMucG9zaXRpb25zQXJyYXk9bmV3IEZsb2F0MzJBcnJheSgzKm8qNCksdGhpcy5pbmRleEFycmF5PW5ldyBVaW50MTZBcnJheSg2Km8pLHRoaXMudGV4dHVyZUFycmF5PW5ldyBGbG9hdDMyQXJyYXkoMipvKjQpLHRoaXMuZm9yZWdyb3VuZFVpbnQ4QXJyYXk9bmV3IFVpbnQ4QXJyYXkoNCpvKjQpLHRoaXMuZm9yZWdyb3VuZERhdGFWaWV3PW5ldyBEYXRhVmlldyh0aGlzLmZvcmVncm91bmRVaW50OEFycmF5LmJ1ZmZlciksdGhpcy5iYWNrZ3JvdW5kVWludDhBcnJheT1uZXcgVWludDhBcnJheSg0Km8qNCksdGhpcy5iYWNrZ3JvdW5kRGF0YVZpZXc9bmV3IERhdGFWaWV3KHRoaXMuYmFja2dyb3VuZFVpbnQ4QXJyYXkuYnVmZmVyKTtsZXQgbj0wLF89MCxhPTA7Zm9yKGxldCB0PTA7dDxlO3QrKylmb3IobGV0IHM9MDtzPGk7cysrKXRoaXMucG9zaXRpb25zQXJyYXlbbisrXT1udChzLGkpLHRoaXMucG9zaXRpb25zQXJyYXlbbisrXT0tbnQodCxlKSx0aGlzLnBvc2l0aW9uc0FycmF5W24rK109bnQocysxLGkpLHRoaXMucG9zaXRpb25zQXJyYXlbbisrXT0tbnQodCxlKSx0aGlzLnBvc2l0aW9uc0FycmF5W24rK109bnQocysxLGkpLHRoaXMucG9zaXRpb25zQXJyYXlbbisrXT0tbnQodCsxLGUpLHRoaXMucG9zaXRpb25zQXJyYXlbbisrXT1udChzLGkpLHRoaXMucG9zaXRpb25zQXJyYXlbbisrXT0tbnQodCsxLGUpLHRoaXMuaW5kZXhBcnJheVtfKytdPWErMCx0aGlzLmluZGV4QXJyYXlbXysrXT1hKzEsdGhpcy5pbmRleEFycmF5W18rK109YSsyLHRoaXMuaW5kZXhBcnJheVtfKytdPWErMCx0aGlzLmluZGV4QXJyYXlbXysrXT1hKzIsdGhpcy5pbmRleEFycmF5W18rK109YSszLGErPTQ7dGhpcy5wb3NpdGlvbkJ1ZmZlcj1yLmNyZWF0ZUJ1ZmZlcigpLHRoaXMuaW5kZXhCdWZmZXI9ci5jcmVhdGVCdWZmZXIoKSx0aGlzLnRleHR1cmVCdWZmZXI9ci5jcmVhdGVCdWZmZXIoKSx0aGlzLmZvcmVncm91bmRCdWZmZXI9ci5jcmVhdGVCdWZmZXIoKSx0aGlzLmJhY2tncm91bmRCdWZmZXI9ci5jcmVhdGVCdWZmZXIoKSxyLmJpbmRCdWZmZXIoci5BUlJBWV9CVUZGRVIsdGhpcy5wb3NpdGlvbkJ1ZmZlciksci5idWZmZXJEYXRhKHIuQVJSQVlfQlVGRkVSLHRoaXMucG9zaXRpb25zQXJyYXksci5TVEFUSUNfRFJBVyksci5iaW5kQnVmZmVyKHIuRUxFTUVOVF9BUlJBWV9CVUZGRVIsdGhpcy5pbmRleEJ1ZmZlciksci5idWZmZXJEYXRhKHIuRUxFTUVOVF9BUlJBWV9CVUZGRVIsdGhpcy5pbmRleEFycmF5LHIuU1RBVElDX0RSQVcpLHRoaXMudGV4dHVyZT10aGlzLmxvYWRUZXh0dXJlKHRoaXMuZm9udC51cmwpLHRoaXMubGFzdFJlbmRlclRpbWU9MCx0aGlzLnJlbmRlckRlbHRhPTAsdGhpcy5mcHM9MCx0aGlzLmF2ZXJhZ2VGcHM9MCx0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgpfWhhbmRsZVJlc2l6ZSgpe2NvbnN0IHQ9dGhpcy5jYW52YXMucGFyZW50RWxlbWVudDtpZighdClyZXR1cm47Y29uc3QgaT10Lm9mZnNldFdpZHRoL3RoaXMucGl4ZWxXaWR0aCxlPXQub2Zmc2V0SGVpZ2h0L3RoaXMucGl4ZWxIZWlnaHQscz1NYXRoLm1pbihpLGUpLHI9cyp0aGlzLnBpeGVsV2lkdGh8MCxoPXMqdGhpcy5waXhlbEhlaWdodHwwO3RoaXMuY2FudmFzLnN0eWxlLndpZHRoPXIrXCJweFwiLHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodD1oK1wicHhcIn1nZXRBdHRyaWJMb2NhdGlvbih0KXtjb25zdCBpPXRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5wcm9ncmFtLHQpO3JldHVybiB0aGlzLmdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGkpLGl9Zmx1c2goKXtsZXQgdD0wLGk9MDtmb3IobGV0IGU9MDtlPHRoaXMuaGVpZ2h0O2UrKylmb3IobGV0IHM9MDtzPHRoaXMud2lkdGg7cysrKXtjb25zdCByPXRoaXMuZ2V0Q2VsbChzLGUpO2lmKCFyLmRpcnR5KXt0Kz04LGkrPTE2O2NvbnRpbnVlfWNvbnN0IGg9ci5jaGFyQ29kZSUxNixvPXIuY2hhckNvZGUvMTZ8MDt0aGlzLnRleHR1cmVBcnJheVt0KytdPWgsdGhpcy50ZXh0dXJlQXJyYXlbdCsrXT1vLHRoaXMudGV4dHVyZUFycmF5W3QrK109aCsxLHRoaXMudGV4dHVyZUFycmF5W3QrK109byx0aGlzLnRleHR1cmVBcnJheVt0KytdPWgrMSx0aGlzLnRleHR1cmVBcnJheVt0KytdPW8rMSx0aGlzLnRleHR1cmVBcnJheVt0KytdPWgsdGhpcy50ZXh0dXJlQXJyYXlbdCsrXT1vKzE7Zm9yKGxldCB0PTA7dDw0O3QrKyl0aGlzLmZvcmVncm91bmREYXRhVmlldy5zZXRVaW50MzIoaSxyLmZnLCExKSx0aGlzLmJhY2tncm91bmREYXRhVmlldy5zZXRVaW50MzIoaSxyLmJnLCExKSxpKz00O3IuZGlydHk9ITF9fWlzS2V5RG93bih0KXtjb25zdCBpPXRoaXMua2V5cy5nZXRLZXkodCk7cmV0dXJuISFpJiZpLmRvd259aXNLZXlQcmVzc2VkKHQpe2NvbnN0IGk9dGhpcy5rZXlzLmdldEtleSh0KTtyZXR1cm4hIWkmJmkuaXNQcmVzc2VkKCl9Z2V0S2V5RG93bkNvdW50KHQpe2NvbnN0IGk9dGhpcy5rZXlzLmdldEtleSh0KTtyZXR1cm4gaT9pLmRvd25Db3VudDowfWdldE1vdmVtZW50S2V5KCl7cmV0dXJuIHRoaXMuaXNLZXlQcmVzc2VkKFAuVktfTlVNUEFEMSl8fHRoaXMuaXNLZXlQcmVzc2VkKFAuVktfQik/bmV3IFIoLTEsMSk6dGhpcy5pc0tleVByZXNzZWQoUC5WS19OVU1QQUQyKXx8dGhpcy5pc0tleVByZXNzZWQoUC5WS19KKXx8dGhpcy5pc0tleVByZXNzZWQoUC5WS19ET1dOKT9uZXcgUigwLDEpOnRoaXMuaXNLZXlQcmVzc2VkKFAuVktfTlVNUEFEMyl8fHRoaXMuaXNLZXlQcmVzc2VkKFAuVktfTik/bmV3IFIoMSwxKTp0aGlzLmlzS2V5UHJlc3NlZChQLlZLX05VTVBBRDQpfHx0aGlzLmlzS2V5UHJlc3NlZChQLlZLX0gpfHx0aGlzLmlzS2V5UHJlc3NlZChQLlZLX0xFRlQpP25ldyBSKC0xLDApOnRoaXMuaXNLZXlQcmVzc2VkKFAuVktfTlVNUEFENSl8fHRoaXMuaXNLZXlQcmVzc2VkKFAuVktfUEVSSU9EKT9uZXcgUigwLDApOnRoaXMuaXNLZXlQcmVzc2VkKFAuVktfTlVNUEFENil8fHRoaXMuaXNLZXlQcmVzc2VkKFAuVktfTCl8fHRoaXMuaXNLZXlQcmVzc2VkKFAuVktfUklHSFQpP25ldyBSKDEsMCk6dGhpcy5pc0tleVByZXNzZWQoUC5WS19OVU1QQUQ3KXx8dGhpcy5pc0tleVByZXNzZWQoUC5WS19ZKT9uZXcgUigtMSwtMSk6dGhpcy5pc0tleVByZXNzZWQoUC5WS19OVU1QQUQ4KXx8dGhpcy5pc0tleVByZXNzZWQoUC5WS19LKXx8dGhpcy5pc0tleVByZXNzZWQoUC5WS19ET1dOKT9uZXcgUigwLC0xKTp0aGlzLmlzS2V5UHJlc3NlZChQLlZLX05VTVBBRDkpfHx0aGlzLmlzS2V5UHJlc3NlZChQLlZLX1UpP25ldyBSKDEsLTEpOnZvaWQgMH1idWlsZFNoYWRlcih0LGkpe2NvbnN0IGU9dGhpcy5nbCxzPWUuY3JlYXRlU2hhZGVyKHQpO2lmKCFzKXRocm93IG5ldyBFcnJvcihcIkFuIGVycm9yIG9jY3VycmVkIGNvbXBpbGluZyB0aGUgc2hhZGVyOiBcIik7aWYoZS5zaGFkZXJTb3VyY2UocyxpKSxlLmNvbXBpbGVTaGFkZXIocyksIWUuZ2V0U2hhZGVyUGFyYW1ldGVyKHMsZS5DT01QSUxFX1NUQVRVUykpdGhyb3cgbmV3IEVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQgY29tcGlsaW5nIHRoZSBzaGFkZXI6IFwiK2UuZ2V0U2hhZGVySW5mb0xvZyhzKSk7cmV0dXJuIHN9bG9hZFRleHR1cmUodCl7Y29uc3QgaT10aGlzLmdsLGU9aS5jcmVhdGVUZXh0dXJlKCk7aS5iaW5kVGV4dHVyZShpLlRFWFRVUkVfMkQsZSk7Y29uc3Qgcz1pLlJHQkEscj1pLlJHQkEsaD1pLlVOU0lHTkVEX0JZVEUsbz1uZXcgVWludDhBcnJheShbMCwwLDAsMjU1XSk7aS50ZXhJbWFnZTJEKGkuVEVYVFVSRV8yRCwwLHMsMSwxLDAscixoLG8pO2NvbnN0IG49bmV3IEltYWdlO3JldHVybiBuLm9ubG9hZD0oKT0+e2kuYmluZFRleHR1cmUoaS5URVhUVVJFXzJELGUpLGkudGV4SW1hZ2UyRChpLlRFWFRVUkVfMkQsMCxzLHIsaCxuKSxpLnRleFBhcmFtZXRlcmkoaS5URVhUVVJFXzJELGkuVEVYVFVSRV9XUkFQX1MsaS5DTEFNUF9UT19FREdFKSxpLnRleFBhcmFtZXRlcmkoaS5URVhUVVJFXzJELGkuVEVYVFVSRV9XUkFQX1QsaS5DTEFNUF9UT19FREdFKSxpLnRleFBhcmFtZXRlcmkoaS5URVhUVVJFXzJELGkuVEVYVFVSRV9NQUdfRklMVEVSLGkuTElORUFSKSxpLnRleFBhcmFtZXRlcmkoaS5URVhUVVJFXzJELGkuVEVYVFVSRV9NSU5fRklMVEVSLGkuTElORUFSKX0sbi5zcmM9dCxlfXJlbmRlcigpe2NvbnN0IHQ9dGhpcy5nbDt0LmNsZWFyQ29sb3IoMCwwLDAsMSksdC5jbGVhckRlcHRoKDEpLHQuY2xlYXIodC5DT0xPUl9CVUZGRVJfQklUfHQuREVQVEhfQlVGRkVSX0JJVCksdC52aWV3cG9ydCgwLDAsdGhpcy5waXhlbFdpZHRoLHRoaXMucGl4ZWxIZWlnaHQpO3tjb25zdCBpPTIsZT10LkZMT0FULHM9ITEscj0wLGg9MDt0LmJpbmRCdWZmZXIodC5BUlJBWV9CVUZGRVIsdGhpcy5wb3NpdGlvbkJ1ZmZlciksdC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMucG9zaXRpb25BdHRyaWJMb2NhdGlvbixpLGUscyxyLGgpfXtjb25zdCBpPTIsZT10LkZMT0FULHM9ITEscj0wLGg9MDt0LmJpbmRCdWZmZXIodC5BUlJBWV9CVUZGRVIsdGhpcy50ZXh0dXJlQnVmZmVyKSx0LmJ1ZmZlckRhdGEodC5BUlJBWV9CVUZGRVIsdGhpcy50ZXh0dXJlQXJyYXksdC5EWU5BTUlDX0RSQVcpLHQudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLnRleHR1cmVBdHRyaWJMb2NhdGlvbixpLGUscyxyLGgpfXtjb25zdCBpPTQsZT10LlVOU0lHTkVEX0JZVEUscz0hMCxyPTAsaD0wO3QuYmluZEJ1ZmZlcih0LkFSUkFZX0JVRkZFUix0aGlzLmZvcmVncm91bmRCdWZmZXIpLHQuYnVmZmVyRGF0YSh0LkFSUkFZX0JVRkZFUix0aGlzLmZvcmVncm91bmRVaW50OEFycmF5LHQuRFlOQU1JQ19EUkFXKSx0LnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5mZ0NvbG9yQXR0cmliTG9jYXRpb24saSxlLHMscixoKX17Y29uc3QgaT00LGU9dC5VTlNJR05FRF9CWVRFLHM9ITAscj0wLGg9MDt0LmJpbmRCdWZmZXIodC5BUlJBWV9CVUZGRVIsdGhpcy5iYWNrZ3JvdW5kQnVmZmVyKSx0LmJ1ZmZlckRhdGEodC5BUlJBWV9CVUZGRVIsdGhpcy5iYWNrZ3JvdW5kVWludDhBcnJheSx0LkRZTkFNSUNfRFJBVyksdC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuYmdDb2xvckF0dHJpYkxvY2F0aW9uLGksZSxzLHIsaCl9dC5iaW5kQnVmZmVyKHQuRUxFTUVOVF9BUlJBWV9CVUZGRVIsdGhpcy5pbmRleEJ1ZmZlciksdC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSksdC5hY3RpdmVUZXh0dXJlKHQuVEVYVFVSRTApLHQuYmluZFRleHR1cmUodC5URVhUVVJFXzJELHRoaXMudGV4dHVyZSk7e2NvbnN0IGk9dGhpcy53aWR0aCp0aGlzLmhlaWdodCo2LGU9dC5VTlNJR05FRF9TSE9SVCxzPTA7dC5kcmF3RWxlbWVudHModC5UUklBTkdMRVMsaSxlLHMpfX1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKXt3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCh0PT50aGlzLnJlbmRlckxvb3AodCkpKX1yZW5kZXJMb29wKHQpezA9PT10aGlzLmxhc3RSZW5kZXJUaW1lPyh0aGlzLmxhc3RSZW5kZXJUaW1lPXQsdGhpcy5mcHM9MCk6KHRoaXMucmVuZGVyRGVsdGE9dC10aGlzLmxhc3RSZW5kZXJUaW1lLHRoaXMubGFzdFJlbmRlclRpbWU9dCx0aGlzLmZwcz0xZTMvdGhpcy5yZW5kZXJEZWx0YSx0aGlzLmF2ZXJhZ2VGcHM9Ljk1KnRoaXMuYXZlcmFnZUZwcysuMDUqdGhpcy5mcHMpLHRoaXMua2V5cy51cGRhdGVLZXlzKHQpLHRoaXMubW91c2UudXBkYXRlKHQpLHRoaXMudXBkYXRlJiZ0aGlzLnVwZGF0ZSgpLHRoaXMuZmx1c2goKSx0aGlzLnJlbmRlcigpLHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCl9fX19LGk9e307ZnVuY3Rpb24gZShzKXtpZihpW3NdKXJldHVybiBpW3NdLmV4cG9ydHM7dmFyIHI9aVtzXT17ZXhwb3J0czp7fX07cmV0dXJuIHRbc10ocixyLmV4cG9ydHMsZSksci5leHBvcnRzfXJldHVybiBlLmQ9KHQsaSk9Pntmb3IodmFyIHMgaW4gaSllLm8oaSxzKSYmIWUubyh0LHMpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxzLHtlbnVtZXJhYmxlOiEwLGdldDppW3NdfSl9LGUubz0odCxpKT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsaSksZS5yPXQ9PntcInVuZGVmaW5lZFwiIT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sZSg2MTIpfSkoKX0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdnbHQuanMubWFwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcImdlb3RpY1wiXHJcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gXCJ3Z2x0XCJcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQWxseSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcclxuICAgIH07XHJcbn1cclxuLy9kZWNsYXJpbmcgY29tcG9uZW50c1xyXG4vL2NoYXIgPSBkaXNwbGF5ZWQgY2hhcmFjdGVyLCBjb2xvciA9IGRpc3BsYXllZCBjb2xvclxyXG5leHBvcnQgY2xhc3MgQXBwZWFyYW5jZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcclxuICAgICAgICBjaGFyOiBcIkBcIixcclxuICAgICAgICBjb2xvcjogQ29sb3JzLldISVRFXHJcbiAgICB9XHJcbn1cclxuLy90YXJnZXQgPSBjdXJyZW50IHByaW1hcnkgdGFyZ2V0XHJcbmV4cG9ydCBjbGFzcyBDb21iYXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgdGFyZ2V0OiBcIlwiLFxyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICBkaXN0YW5jZTogMFxyXG4gICAgfVxyXG59XHJcbi8vbmFtZSA9IG5hbWUgb2Ygb2JqZWN0LCBkZXNjID0gZGVzY3JpcHRpb24gb2Ygb2JqZWN0XHJcbmV4cG9ydCBjbGFzcyBEZXNjcmlwdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcclxuICAgICAgICBkZXNjOiBcIlwiXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEVuZW15IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xyXG4gICAgfTtcclxufVxyXG4vL2hwID0gY3VycmVudCBoZWFsdGgsIG1heEhwID0gbWF4aW11bSBoZWFsdGggYWxsb3dlZFxyXG5leHBvcnQgY2xhc3MgaGFzTW92ZWQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBIZWFsdGggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgaHA6IDEsXHJcbiAgICAgICAgbWF4SHA6IDEsXHJcbiAgICAgICAgbWluSHA6IDBcclxuICAgIH1cclxuICAgIHJlZHVjZShhbW91bnQpIHtcclxuICAgICAgICB0aGlzLmhwID0gTWF0aC5tYXgodGhpcy5ocC1hbW91bnQsIHRoaXMubWluSHApXHJcbiAgICB9XHJcbiAgICBoZWFsKGFtb3VudCkge1xyXG4gICAgICAgIHRoaXMuaHAgPSBNYXRoLm1pbih0aGlzLmhwK2Ftb3VudCwgdGhpcy5tYXhIcClcclxuICAgIH1cclxuICAgIG9uRGFtYWdlVGFrZW4oZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5kYXRhLmRhbWFnZSA+IDApIHtcclxuICAgICAgICB0aGlzLnJlZHVjZShldmVudC5kYXRhLmRhbWFnZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5oZWFsKGV2ZW50LmRhdGEuZGFtYWdlKVxyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLy94LHkgPSB4LHkgY29vcmRpbmF0ZSBwb3NpdGlvbiBvbiBkaXNwbGF5XHJcbmV4cG9ydCBjbGFzcyBQb3NpdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDBcclxuICAgIH07XHJcbn1cclxuLy9hY3Rpb24gPSBhY3Rpb24gc3BlZWQgaW4gbWlsbGlzZWNvbmRzIGkuZS4gaG93IGZhc3QgYWxsIGFjdGlvbnMgc3VjaCBhcyBtb3ZpbmcgYW5kIGF0dGFja2luZyBhcmUgZG9uZVxyXG5leHBvcnQgY2xhc3MgQWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgICAgIGxhc3Q6IDAsXHJcbiAgICAgICAgYWRqdXN0ZWQ6IDEwMDBcclxuICAgIH1cclxufVxyXG4vL3ggPSBob3Jpem9udGFsIG1vdmVtZW50IHNwZWVkLCB5ID0gdmVydGljYWwgbW92ZW1lbnQgc3BlZWQuIGkuZS4gcGVyIG1vdmVtZW50IGFjdGlvbiBtb3ZlIHVwIHRvIHgveSB2ZWxvY2l0eS5cclxuZXhwb3J0IGNsYXNzIE1vdmVtZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIHZlbG9jaXR5OiAxLFxyXG4gICAgICAgIHg6IDAsXHJcbiAgICAgICAgeTogMCxcclxuICAgICAgICBjYXJkaW5hbDogMFxyXG4gICAgfTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHtFbmdpbmV9IGZyb20gXCJnZW90aWNcIjtcclxuaW1wb3J0IHtBbGx5LCBBcHBlYXJhbmNlLCBDb21iYXQsIERlc2NyaXB0aW9uLCBFbmVteSwgaGFzTW92ZWQsIEhlYWx0aCwgUG9zaXRpb24sIEFjdGlvbiwgTW92ZW1lbnR9IGZyb20gXCIuL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQge0JlaW5nLCBIdW1hbiwgU3RydWN0dXJlLCBab21iaWV9IGZyb20gXCIuL2VudGl0aWVzXCJcclxuXHJcbi8vY3JlYXRpbmcgZ2VvdGljIGVuZ2luZVxyXG5jb25zdCBlbmdpbmUgPSBuZXcgRW5naW5lKCk7XHJcbi8vYXNzb2NpYXRpbmcgY29tcG9uZW50c1xyXG5lbmdpbmUucmVnaXN0ZXJDb21wb25lbnQoQWxseSlcclxuZW5naW5lLnJlZ2lzdGVyQ29tcG9uZW50KEFwcGVhcmFuY2UpXHJcbmVuZ2luZS5yZWdpc3RlckNvbXBvbmVudChDb21iYXQpXHJcbmVuZ2luZS5yZWdpc3RlckNvbXBvbmVudChEZXNjcmlwdGlvbilcclxuZW5naW5lLnJlZ2lzdGVyQ29tcG9uZW50KEVuZW15KVxyXG5lbmdpbmUucmVnaXN0ZXJDb21wb25lbnQoaGFzTW92ZWQpXHJcbmVuZ2luZS5yZWdpc3RlckNvbXBvbmVudChIZWFsdGgpXHJcbmVuZ2luZS5yZWdpc3RlckNvbXBvbmVudChQb3NpdGlvbilcclxuZW5naW5lLnJlZ2lzdGVyQ29tcG9uZW50KEFjdGlvbilcclxuZW5naW5lLnJlZ2lzdGVyQ29tcG9uZW50KE1vdmVtZW50KVxyXG4vL2Fzc29jaWF0aW5nIHByZWZhYnNcclxuZW5naW5lLnJlZ2lzdGVyUHJlZmFiKEJlaW5nKVxyXG5lbmdpbmUucmVnaXN0ZXJQcmVmYWIoSHVtYW4pXHJcbmVuZ2luZS5yZWdpc3RlclByZWZhYihTdHJ1Y3R1cmUpXHJcbmVuZ2luZS5yZWdpc3RlclByZWZhYihab21iaWUpXHJcbmV4cG9ydCBkZWZhdWx0IGVuZ2luZTsiLCJpbXBvcnQgeyBDb2xvcnMgfSBmcm9tIFwid2dsdFwiXHJcbi8vZGVmYXVsdCBcIkJlaW5nXCJtb2Igd2l0aCByZWxhdGVkIGNvbXBvbmVudHNcclxuZXhwb3J0IGxldCBCZWluZyA9IHtcclxuICAgIG5hbWU6IFwiQmVpbmdcIixcclxuICAgIGNvbXBvbmVudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiQXBwZWFyYW5jZVwiLFxyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJDb21iYXRcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJlaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjOiBcIk5vbmRlc2NyaXB0IGJlaW5nLlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJIZWFsdGhcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJQb3NpdGlvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkFjdGlvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIk1vdmVtZW50XCIsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICBdLFxyXG59O1xyXG4vL2RlZmF1bHQgXCJIdW1hblwiIHN1YnR5cGUgb2YgXCJCZWluZ1wiXHJcbmV4cG9ydCBsZXQgSHVtYW4gPSB7XHJcbiAgIG5hbWU6IFwiSHVtYW5cIixcclxuICAgaW5oZXJpdDogXCJCZWluZ1wiLFxyXG4gICBjb21wb25lbnRzOiBbXHJcbiAgICB7IHR5cGU6IFwiQWN0aW9uXCIsXHJcbiAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICBzcGVlZDogMTAwMFxyXG4gICAgICAgIH0gICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwiQWxseVwiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7fSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJBcHBlYXJhbmNlXCIsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIGNoYXI6IFwiQFwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IENvbG9ycy5MSUdIVF9NQUdFTlRBXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiSHVtYW5cIixcclxuICAgICAgICAgICAgZGVzYzogXCJBIGh1bWFuIGJlaW5nLlwiXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiBcIkhlYWx0aFwiLFxyXG4gICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgaHA6IDEwLFxyXG4gICAgICAgICAgICBtYXhIcDogMTBcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0eXBlOiBcIk1vdmVtZW50XCIsXHJcbiAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICB2ZWxvY2l0eTogMSxcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG4gICBdIFxyXG59O1xyXG4vL2RlZmF1bHQgXCJab21iaWVcIiBzdWJ0eXBlIG9mIFwiQmVpbmdcIlxyXG5leHBvcnQgbGV0IFpvbWJpZSA9IHtcclxuICAgIG5hbWU6IFwiWm9tYmllXCIsXHJcbiAgICBpbmhlcml0OiBcIkJlaW5nXCIsXHJcbiAgICBjb21wb25lbnRzOiBbXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJBcHBlYXJhbmNlXCIsXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIGNoYXI6IFwiWlwiLFxyXG4gICAgICAgICAgICBjb2xvcjogQ29sb3JzLkRBUktfR1JFRU5cclxuICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgIHR5cGU6IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgbmFtZTogXCJab21iaWVcIixcclxuICAgICAgICAgICAgIGRlc2M6IFwiQSB6b21iaWUuXCJcclxuICAgICAgICAgfVxyXG4gICAgIH0sXHJcbiAgICAge1xyXG4gICAgICAgIHR5cGU6IFwiRW5lbXlcIixcclxuICAgICAgICBwcm9wZXJ0aWVzOiB7fVxyXG4gICAgIH0sICAgICBcclxuICAgICB7XHJcbiAgICAgICAgIHR5cGU6IFwiSGVhbHRoXCIsXHJcbiAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgIGhwOiAxMCxcclxuICAgICAgICAgICAgIG1heEhwOiAxMFxyXG4gICAgICAgICB9LFxyXG4gICAgIH0sXHJcbiBcclxuICAgICB7XHJcbiAgICAgICAgIHR5cGU6IFwiTW92ZW1lbnRcIixcclxuICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgdmVsb2NpdHk6IDUwLFxyXG4gICAgICAgICB9LFxyXG4gICAgIH0sXHJcbiAgICBdIFxyXG59O1xyXG5cclxuZXhwb3J0IGxldCBTdHJ1Y3R1cmUgPSB7XHJcbiAgICBuYW1lOiBcIlN0cnVjdHVyZVwiLFxyXG4gICAgY29tcG9uZW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJBcHBlYXJhbmNlXCIsXHJcbiAgICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXI6IFwiWFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBDb2xvcnMuV0hJVEVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiU3RydWN0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjOiBcIk5vbmRlc2NyaXB0IHN0cnVjdHVyZS5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUG9zaXRpb25cIixcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG5cclxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5jb25zdCBwcmVzZXJ2ZUNhbWVsQ2FzZSA9IHN0cmluZyA9PiB7XG4gIGxldCBpc0xhc3RDaGFyTG93ZXIgPSBmYWxzZTtcbiAgbGV0IGlzTGFzdENoYXJVcHBlciA9IGZhbHNlO1xuICBsZXQgaXNMYXN0TGFzdENoYXJVcHBlciA9IGZhbHNlO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2hhcmFjdGVyID0gc3RyaW5nW2ldO1xuXG4gICAgaWYgKGlzTGFzdENoYXJMb3dlciAmJiAvW1xccHtMdX1dL3UudGVzdChjaGFyYWN0ZXIpKSB7XG4gICAgICBzdHJpbmcgPSBzdHJpbmcuc2xpY2UoMCwgaSkgKyAnLScgKyBzdHJpbmcuc2xpY2UoaSk7XG4gICAgICBpc0xhc3RDaGFyTG93ZXIgPSBmYWxzZTtcbiAgICAgIGlzTGFzdExhc3RDaGFyVXBwZXIgPSBpc0xhc3RDaGFyVXBwZXI7XG4gICAgICBpc0xhc3RDaGFyVXBwZXIgPSB0cnVlO1xuICAgICAgaSsrO1xuICAgIH0gZWxzZSBpZiAoaXNMYXN0Q2hhclVwcGVyICYmIGlzTGFzdExhc3RDaGFyVXBwZXIgJiYgL1tcXHB7TGx9XS91LnRlc3QoY2hhcmFjdGVyKSkge1xuICAgICAgc3RyaW5nID0gc3RyaW5nLnNsaWNlKDAsIGkgLSAxKSArICctJyArIHN0cmluZy5zbGljZShpIC0gMSk7XG4gICAgICBpc0xhc3RMYXN0Q2hhclVwcGVyID0gaXNMYXN0Q2hhclVwcGVyO1xuICAgICAgaXNMYXN0Q2hhclVwcGVyID0gZmFsc2U7XG4gICAgICBpc0xhc3RDaGFyTG93ZXIgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc0xhc3RDaGFyTG93ZXIgPSBjaGFyYWN0ZXIudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gY2hhcmFjdGVyICYmIGNoYXJhY3Rlci50b0xvY2FsZVVwcGVyQ2FzZSgpICE9PSBjaGFyYWN0ZXI7XG4gICAgICBpc0xhc3RMYXN0Q2hhclVwcGVyID0gaXNMYXN0Q2hhclVwcGVyO1xuICAgICAgaXNMYXN0Q2hhclVwcGVyID0gY2hhcmFjdGVyLnRvTG9jYWxlVXBwZXJDYXNlKCkgPT09IGNoYXJhY3RlciAmJiBjaGFyYWN0ZXIudG9Mb2NhbGVMb3dlckNhc2UoKSAhPT0gY2hhcmFjdGVyO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59O1xuXG5jb25zdCBjYW1lbENhc2UgPSAoaW5wdXQsIG9wdGlvbnMpID0+IHtcbiAgaWYgKCEodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KGlucHV0KSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgaW5wdXQgdG8gYmUgYHN0cmluZyB8IHN0cmluZ1tdYCcpO1xuICB9XG5cbiAgb3B0aW9ucyA9IHsgLi4ue1xuICAgICAgcGFzY2FsQ2FzZTogZmFsc2VcbiAgICB9LFxuICAgIC4uLm9wdGlvbnNcbiAgfTtcblxuICBjb25zdCBwb3N0UHJvY2VzcyA9IHggPT4gb3B0aW9ucy5wYXNjYWxDYXNlID8geC5jaGFyQXQoMCkudG9Mb2NhbGVVcHBlckNhc2UoKSArIHguc2xpY2UoMSkgOiB4O1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xuICAgIGlucHV0ID0gaW5wdXQubWFwKHggPT4geC50cmltKCkpLmZpbHRlcih4ID0+IHgubGVuZ3RoKS5qb2luKCctJyk7XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQgPSBpbnB1dC50cmltKCk7XG4gIH1cblxuICBpZiAoaW5wdXQubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBvcHRpb25zLnBhc2NhbENhc2UgPyBpbnB1dC50b0xvY2FsZVVwcGVyQ2FzZSgpIDogaW5wdXQudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgfVxuXG4gIGNvbnN0IGhhc1VwcGVyQ2FzZSA9IGlucHV0ICE9PSBpbnB1dC50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG4gIGlmIChoYXNVcHBlckNhc2UpIHtcbiAgICBpbnB1dCA9IHByZXNlcnZlQ2FtZWxDYXNlKGlucHV0KTtcbiAgfVxuXG4gIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvXltfLlxcLSBdKy8sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpLnJlcGxhY2UoL1tfLlxcLSBdKyhbXFxwe0FscGhhfVxccHtOfV9dfCQpL2d1LCAoXywgcDEpID0+IHAxLnRvTG9jYWxlVXBwZXJDYXNlKCkpLnJlcGxhY2UoL1xcZCsoW1xccHtBbHBoYX1cXHB7Tn1fXXwkKS9ndSwgbSA9PiBtLnRvTG9jYWxlVXBwZXJDYXNlKCkpO1xuICByZXR1cm4gcG9zdFByb2Nlc3MoaW5wdXQpO1xufTtcblxudmFyIGNhbWVsY2FzZSA9IGNhbWVsQ2FzZTsgLy8gVE9ETzogUmVtb3ZlIHRoaXMgZm9yIHRoZSBuZXh0IG1ham9yIHJlbGVhc2VcblxudmFyIF9kZWZhdWx0ID0gY2FtZWxDYXNlO1xuY2FtZWxjYXNlLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuY29uc3QgY2FtZWxDYWNoZSA9IHt9O1xuY29uc3QgY2FtZWxTdHJpbmcgPSB2YWx1ZSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGNhbWVsQ2FjaGVbdmFsdWVdO1xuXG4gIGlmICghcmVzdWx0KSB7XG4gICAgY2FtZWxDYWNoZVt2YWx1ZV0gPSBjYW1lbGNhc2UodmFsdWUpO1xuICAgIHJldHVybiBjYW1lbENhY2hlW3ZhbHVlXTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jbGFzcyBDb21wb25lbnRSZWdpc3RyeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9jYml0XCIsIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX21hcFwiLCB7fSk7XG4gIH1cblxuICByZWdpc3RlcihjbGF6eikge1xuICAgIGNvbnN0IGtleSA9IGNhbWVsU3RyaW5nKGNsYXp6Lm5hbWUpO1xuICAgIGNsYXp6LnByb3RvdHlwZS5fY2tleSA9IGtleTtcbiAgICBjbGF6ei5wcm90b3R5cGUuX2NiaXQgPSBCaWdJbnQoKyt0aGlzLl9jYml0KTtcbiAgICB0aGlzLl9tYXBba2V5XSA9IGNsYXp6O1xuICB9XG5cbiAgZ2V0KGtleSkge1xuICAgIHJldHVybiB0aGlzLl9tYXBba2V5XTtcbiAgfVxuXG59XG5cbnZhciBpc01lcmdlYWJsZU9iamVjdCA9IGZ1bmN0aW9uIGlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc05vbk51bGxPYmplY3QodmFsdWUpICYmICFpc1NwZWNpYWwodmFsdWUpO1xufTtcblxuZnVuY3Rpb24gaXNOb25OdWxsT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzU3BlY2lhbCh2YWx1ZSkge1xuICB2YXIgc3RyaW5nVmFsdWUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICByZXR1cm4gc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IFJlZ0V4cF0nIHx8IHN0cmluZ1ZhbHVlID09PSAnW29iamVjdCBEYXRlXScgfHwgaXNSZWFjdEVsZW1lbnQodmFsdWUpO1xufSAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYjVhYzk2M2ZiNzkxZDEyOThlN2YzOTYyMzYzODNiYzk1NWY5MTZjMS9zcmMvaXNvbW9ycGhpYy9jbGFzc2ljL2VsZW1lbnQvUmVhY3RFbGVtZW50LmpzI0wyMS1MMjVcblxuXG52YXIgY2FuVXNlU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGNhblVzZVN5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcblxuZnVuY3Rpb24gaXNSZWFjdEVsZW1lbnQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5cbmZ1bmN0aW9uIGVtcHR5VGFyZ2V0KHZhbCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fTtcbn1cblxuZnVuY3Rpb24gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodmFsdWUsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG9wdGlvbnMuY2xvbmUgIT09IGZhbHNlICYmIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodmFsdWUpID8gZGVlcG1lcmdlKGVtcHR5VGFyZ2V0KHZhbHVlKSwgdmFsdWUsIG9wdGlvbnMpIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRBcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG4gIHJldHVybiB0YXJnZXQuY29uY2F0KHNvdXJjZSkubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0TWVyZ2VGdW5jdGlvbihrZXksIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zLmN1c3RvbU1lcmdlKSB7XG4gICAgcmV0dXJuIGRlZXBtZXJnZTtcbiAgfVxuXG4gIHZhciBjdXN0b21NZXJnZSA9IG9wdGlvbnMuY3VzdG9tTWVyZ2Uoa2V5KTtcbiAgcmV0dXJuIHR5cGVvZiBjdXN0b21NZXJnZSA9PT0gJ2Z1bmN0aW9uJyA/IGN1c3RvbU1lcmdlIDogZGVlcG1lcmdlO1xufVxuXG5mdW5jdGlvbiBnZXRFbnVtZXJhYmxlT3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkge1xuICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KS5maWx0ZXIoZnVuY3Rpb24gKHN5bWJvbCkge1xuICAgIHJldHVybiB0YXJnZXQucHJvcGVydHlJc0VudW1lcmFibGUoc3ltYm9sKTtcbiAgfSkgOiBbXTtcbn1cblxuZnVuY3Rpb24gZ2V0S2V5cyh0YXJnZXQpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRhcmdldCkuY29uY2F0KGdldEVudW1lcmFibGVPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5SXNPbk9iamVjdChvYmplY3QsIHByb3BlcnR5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHByb3BlcnR5IGluIG9iamVjdDtcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSAvLyBQcm90ZWN0cyBmcm9tIHByb3RvdHlwZSBwb2lzb25pbmcgYW5kIHVuZXhwZWN0ZWQgbWVyZ2luZyB1cCB0aGUgcHJvdG90eXBlIGNoYWluLlxuXG5cbmZ1bmN0aW9uIHByb3BlcnR5SXNVbnNhZmUodGFyZ2V0LCBrZXkpIHtcbiAgcmV0dXJuIHByb3BlcnR5SXNPbk9iamVjdCh0YXJnZXQsIGtleSkgLy8gUHJvcGVydGllcyBhcmUgc2FmZSB0byBtZXJnZSBpZiB0aGV5IGRvbid0IGV4aXN0IGluIHRoZSB0YXJnZXQgeWV0LFxuICAmJiAhKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwga2V5KSAvLyB1bnNhZmUgaWYgdGhleSBleGlzdCB1cCB0aGUgcHJvdG90eXBlIGNoYWluLFxuICAmJiBPYmplY3QucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh0YXJnZXQsIGtleSkpOyAvLyBhbmQgYWxzbyB1bnNhZmUgaWYgdGhleSdyZSBub25lbnVtZXJhYmxlLlxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuICB2YXIgZGVzdGluYXRpb24gPSB7fTtcblxuICBpZiAob3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG4gICAgZ2V0S2V5cyh0YXJnZXQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHRhcmdldFtrZXldLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAocHJvcGVydHlJc1Vuc2FmZSh0YXJnZXQsIGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlJc09uT2JqZWN0KHRhcmdldCwga2V5KSAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHNvdXJjZVtrZXldKSkge1xuICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGdldE1lcmdlRnVuY3Rpb24oa2V5LCBvcHRpb25zKSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0sIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlW2tleV0sIG9wdGlvbnMpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkZXN0aW5hdGlvbjtcbn1cblxuZnVuY3Rpb24gZGVlcG1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG4gIG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QgPSBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0IHx8IGlzTWVyZ2VhYmxlT2JqZWN0OyAvLyBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCBpcyBhZGRlZCB0byBgb3B0aW9uc2Agc28gdGhhdCBjdXN0b20gYXJyYXlNZXJnZSgpXG4gIC8vIGltcGxlbWVudGF0aW9ucyBjYW4gdXNlIGl0LiBUaGUgY2FsbGVyIG1heSBub3QgcmVwbGFjZSBpdC5cblxuICBvcHRpb25zLmNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQ7XG4gIHZhciBzb3VyY2VJc0FycmF5ID0gQXJyYXkuaXNBcnJheShzb3VyY2UpO1xuICB2YXIgdGFyZ2V0SXNBcnJheSA9IEFycmF5LmlzQXJyYXkodGFyZ2V0KTtcbiAgdmFyIHNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2ggPSBzb3VyY2VJc0FycmF5ID09PSB0YXJnZXRJc0FycmF5O1xuXG4gIGlmICghc291cmNlQW5kVGFyZ2V0VHlwZXNNYXRjaCkge1xuICAgIHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChzb3VyY2UsIG9wdGlvbnMpO1xuICB9IGVsc2UgaWYgKHNvdXJjZUlzQXJyYXkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5hcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpO1xuICB9XG59XG5cbmRlZXBtZXJnZS5hbGwgPSBmdW5jdGlvbiBkZWVwbWVyZ2VBbGwoYXJyYXksIG9wdGlvbnMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgIHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5Jyk7XG4gIH1cblxuICByZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBuZXh0KSB7XG4gICAgcmV0dXJuIGRlZXBtZXJnZShwcmV2LCBuZXh0LCBvcHRpb25zKTtcbiAgfSwge30pO1xufTtcblxudmFyIGRlZXBtZXJnZV8xID0gZGVlcG1lcmdlO1xudmFyIGNqcyA9IGRlZXBtZXJnZV8xO1xuXG5jbGFzcyBQcmVmYWJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihjbGF6eiwgcHJvcGVydGllcyA9IHt9LCBvdmVyd3JpdGUgPSB0cnVlKSB7XG4gICAgdGhpcy5jbGF6eiA9IGNsYXp6O1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5vdmVyd3JpdGUgPSBvdmVyd3JpdGU7XG4gIH1cblxuICBhcHBseVRvRW50aXR5KGVudGl0eSwgaW5pdGlhbFByb3BzID0ge30pIHtcbiAgICBpZiAoIXRoaXMuY2xhenouYWxsb3dNdWx0aXBsZSAmJiBlbnRpdHkuaGFzKHRoaXMuY2xhenopKSB7XG4gICAgICBpZiAoIXRoaXMub3ZlcndyaXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcCA9IGVudGl0eVt0aGlzLmNsYXp6LnByb3RvdHlwZS5fY2tleV07XG4gICAgICBlbnRpdHkucmVtb3ZlKGNvbXApO1xuICAgIH1cblxuICAgIGNvbnN0IHByb3BzID0gY2pzKHRoaXMucHJvcGVydGllcywgaW5pdGlhbFByb3BzKTtcbiAgICBlbnRpdHkuYWRkKHRoaXMuY2xhenosIHByb3BzKTtcbiAgfVxuXG59XG5cbmNsYXNzIFByZWZhYiB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJuYW1lXCIsICcnKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImluaGVyaXRcIiwgW10pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiY29tcG9uZW50c1wiLCBbXSk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgYWRkQ29tcG9uZW50KHByZWZhYkNvbXBvbmVudCkge1xuICAgIHRoaXMuY29tcG9uZW50cy5wdXNoKHByZWZhYkNvbXBvbmVudCk7XG4gIH1cblxuICBhcHBseVRvRW50aXR5KGVudGl0eSwgcHJlZmFiUHJvcHMgPSB7fSkge1xuICAgIHRoaXMuaW5oZXJpdC5mb3JFYWNoKHBhcmVudCA9PiB7XG4gICAgICBwYXJlbnQuYXBwbHlUb0VudGl0eShlbnRpdHksIHByZWZhYlByb3BzKTtcbiAgICB9KTtcbiAgICBjb25zdCBhcnJDb21wcyA9IHt9O1xuICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XG4gICAgICBjb25zdCBjbGF6eiA9IGNvbXBvbmVudC5jbGF6ejtcbiAgICAgIGNvbnN0IGNrZXkgPSBjbGF6ei5wcm90b3R5cGUuX2NrZXk7XG4gICAgICBsZXQgaW5pdGlhbENvbXBQcm9wcyA9IHt9O1xuXG4gICAgICBpZiAoY2xhenouYWxsb3dNdWx0aXBsZSkge1xuICAgICAgICBpZiAoY2xhenoua2V5UHJvcGVydHkpIHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBjb21wb25lbnQucHJvcGVydGllc1tjbGF6ei5rZXlQcm9wZXJ0eV07XG5cbiAgICAgICAgICBpZiAocHJlZmFiUHJvcHNbY2tleV0gJiYgcHJlZmFiUHJvcHNbY2tleV1ba2V5XSkge1xuICAgICAgICAgICAgaW5pdGlhbENvbXBQcm9wcyA9IHByZWZhYlByb3BzW2NrZXldW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghYXJyQ29tcHNbY2tleV0pIHtcbiAgICAgICAgICAgIGFyckNvbXBzW2NrZXldID0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocHJlZmFiUHJvcHNbY2tleV0gJiYgcHJlZmFiUHJvcHNbY2tleV1bYXJyQ29tcHNbY2tleV1dKSB7XG4gICAgICAgICAgICBpbml0aWFsQ29tcFByb3BzID0gcHJlZmFiUHJvcHNbY2tleV1bYXJyQ29tcHNbY2tleV1dO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFyckNvbXBzW2NrZXldKys7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluaXRpYWxDb21wUHJvcHMgPSBwcmVmYWJQcm9wc1tja2V5XTtcbiAgICAgIH1cblxuICAgICAgY29tcG9uZW50LmFwcGx5VG9FbnRpdHkoZW50aXR5LCBpbml0aWFsQ29tcFByb3BzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZW50aXR5O1xuICB9XG5cbn1cblxuY2xhc3MgUHJlZmFiUmVnaXN0cnkge1xuICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfcHJlZmFic1wiLCB7fSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfZW5naW5lXCIsIG51bGwpO1xuXG4gICAgdGhpcy5fZW5naW5lID0gZW5naW5lO1xuICB9XG5cbiAgZGVzZXJpYWxpemUoZGF0YSkge1xuICAgIGNvbnN0IHJlZ2lzdGVyZWQgPSB0aGlzLmdldChkYXRhLm5hbWUpO1xuXG4gICAgaWYgKHJlZ2lzdGVyZWQpIHtcbiAgICAgIHJldHVybiByZWdpc3RlcmVkO1xuICAgIH1cblxuICAgIGNvbnN0IHByZWZhYiA9IG5ldyBQcmVmYWIoZGF0YS5uYW1lKTtcbiAgICBsZXQgaW5oZXJpdDtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaW5oZXJpdCkpIHtcbiAgICAgIGluaGVyaXQgPSBkYXRhLmluaGVyaXQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YS5pbmhlcml0ID09PSAnc3RyaW5nJykge1xuICAgICAgaW5oZXJpdCA9IFtkYXRhLmluaGVyaXRdO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmhlcml0ID0gW107XG4gICAgfVxuXG4gICAgcHJlZmFiLmluaGVyaXQgPSBpbmhlcml0Lm1hcChwYXJlbnQgPT4ge1xuICAgICAgY29uc3QgcmVmID0gdGhpcy5nZXQocGFyZW50KTtcblxuICAgICAgaWYgKCFyZWYpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBQcmVmYWIgXCIke2RhdGEubmFtZX1cIiBjYW5ub3QgaW5oZXJpdCBmcm9tIFByZWZhYiBcIiR7cGFyZW50fVwiIGJlY2F1c2UgaXMgbm90IHJlZ2lzdGVyZWQgeWV0ISBQcmVmYWJzIG11c3QgYmUgcmVnaXN0ZXJlZCBpbiB0aGUgcmlnaHQgb3JkZXIuYCk7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZWY7XG4gICAgfSk7XG4gICAgY29uc3QgY29tcHMgPSBkYXRhLmNvbXBvbmVudHMgfHwgW107XG4gICAgY29tcHMuZm9yRWFjaChjb21wb25lbnREYXRhID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50RGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgY2tleSA9IGNhbWVsU3RyaW5nKGNvbXBvbmVudERhdGEpO1xuXG4gICAgICAgIGNvbnN0IGNsYXp6ID0gdGhpcy5fZW5naW5lLl9jb21wb25lbnRzLmdldChja2V5KTtcblxuICAgICAgICBpZiAoY2xhenopIHtcbiAgICAgICAgICBwcmVmYWIuYWRkQ29tcG9uZW50KG5ldyBQcmVmYWJDb21wb25lbnQoY2xhenopKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBjb21wb25lbnREYXRhID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBja2V5ID0gY2FtZWxTdHJpbmcoY29tcG9uZW50RGF0YS50eXBlKTtcblxuICAgICAgICBjb25zdCBjbGF6eiA9IHRoaXMuX2VuZ2luZS5fY29tcG9uZW50cy5nZXQoY2tleSk7XG5cbiAgICAgICAgaWYgKGNsYXp6KSB7XG4gICAgICAgICAgcHJlZmFiLmFkZENvbXBvbmVudChuZXcgUHJlZmFiQ29tcG9uZW50KGNsYXp6LCBjb21wb25lbnREYXRhLnByb3BlcnRpZXMsIGNvbXBvbmVudERhdGEub3ZlcndyaXRlKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUud2FybihgVW5yZWNvZ25pemVkIGNvbXBvbmVudCByZWZlcmVuY2UgXCIke2NvbXBvbmVudERhdGF9XCIgaW4gcHJlZmFiIFwiJHtkYXRhLm5hbWV9XCIuIEVuc3VyZSB0aGUgY29tcG9uZW50IGlzIHJlZ2lzdGVyZWQgYmVmb3JlIHRoZSBwcmVmYWIuYCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByZWZhYjtcbiAgfVxuXG4gIHJlZ2lzdGVyKGRhdGEpIHtcbiAgICBjb25zdCBwcmVmYWIgPSB0aGlzLmRlc2VyaWFsaXplKGRhdGEpO1xuICAgIHRoaXMuX3ByZWZhYnNbcHJlZmFiLm5hbWVdID0gcHJlZmFiO1xuICB9XG5cbiAgZ2V0KG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fcHJlZmFic1tuYW1lXTtcbiAgfVxuXG4gIGNyZWF0ZSh3b3JsZCwgbmFtZSwgcHJvcGVydGllcyA9IHt9KSB7XG4gICAgY29uc3QgcHJlZmFiID0gdGhpcy5nZXQobmFtZSk7XG5cbiAgICBpZiAoIXByZWZhYikge1xuICAgICAgY29uc29sZS53YXJuKGBDb3VsZCBub3QgaW5zdGFudGlhdGUgcHJlZmFiIFwiJHtuYW1lfVwiIHNpbmNlIGl0IGlzIG5vdCByZWdpc3RlcmVkYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZW50aXR5ID0gd29ybGQuY3JlYXRlRW50aXR5KCk7XG4gICAgZW50aXR5Ll9xZWxpZ2libGUgPSBmYWxzZTtcbiAgICBwcmVmYWIuYXBwbHlUb0VudGl0eShlbnRpdHksIHByb3BlcnRpZXMpO1xuICAgIGVudGl0eS5fcWVsaWdpYmxlID0gdHJ1ZTtcblxuICAgIGVudGl0eS5fY2FuZGlkYWN5KCk7XG5cbiAgICByZXR1cm4gZW50aXR5O1xuICB9XG5cbn1cblxuY2xhc3MgQ29tcG9uZW50IHtcbiAgZ2V0IHdvcmxkKCkge1xuICAgIHJldHVybiB0aGlzLmVudGl0eS53b3JsZDtcbiAgfVxuXG4gIGdldCBhbGxvd011bHRpcGxlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmFsbG93TXVsdGlwbGU7XG4gIH1cblxuICBnZXQga2V5UHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3Iua2V5UHJvcGVydHk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuY29uc3RydWN0b3IucHJvcGVydGllcywgcHJvcGVydGllcyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZW50aXR5LnJlbW92ZSh0aGlzKTtcbiAgfVxuXG4gIF9vbkRlc3Ryb3llZCgpIHtcbiAgICB0aGlzLm9uRGVzdHJveWVkKCk7XG4gICAgZGVsZXRlIHRoaXMuZW50aXR5O1xuICB9XG5cbiAgX29uRXZlbnQoZXZ0KSB7XG4gICAgdGhpcy5vbkV2ZW50KGV2dCk7XG5cbiAgICBpZiAodHlwZW9mIHRoaXNbZXZ0LmhhbmRsZXJOYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1tldnQuaGFuZGxlck5hbWVdKGV2dCk7XG4gICAgfVxuICB9XG5cbiAgX29uQXR0YWNoZWQoZW50aXR5KSB7XG4gICAgdGhpcy5lbnRpdHkgPSBlbnRpdHk7XG4gICAgdGhpcy5vbkF0dGFjaGVkKGVudGl0eSk7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgY29uc3Qgb2IgPSB7fTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29uc3RydWN0b3IucHJvcGVydGllcykge1xuICAgICAgb2Jba2V5XSA9IHRoaXNba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2I7XG4gIH1cblxuICBvbkF0dGFjaGVkKGVudGl0eSkge31cblxuICBvbkRlc3Ryb3llZCgpIHt9XG5cbiAgb25FdmVudChldnQpIHt9XG5cbn1cblxuX2RlZmluZVByb3BlcnR5KENvbXBvbmVudCwgXCJhbGxvd011bHRpcGxlXCIsIGZhbHNlKTtcblxuX2RlZmluZVByb3BlcnR5KENvbXBvbmVudCwgXCJrZXlQcm9wZXJ0eVwiLCBudWxsKTtcblxuX2RlZmluZVByb3BlcnR5KENvbXBvbmVudCwgXCJwcm9wZXJ0aWVzXCIsIHt9KTtcblxuY2xhc3MgRW50aXR5RXZlbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRhID0ge30pIHtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJkYXRhXCIsIHt9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInByZXZlbnRlZFwiLCBmYWxzZSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJoYW5kbGVkXCIsIGZhbHNlKTtcblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmhhbmRsZXJOYW1lID0gY2FtZWxTdHJpbmcoYG9uICR7dGhpcy5uYW1lfWApO1xuICB9XG5cbiAgaXMobmFtZSkge1xuICAgIHJldHVybiB0aGlzLm5hbWUgPT09IG5hbWU7XG4gIH1cblxuICBoYW5kbGUoKSB7XG4gICAgdGhpcy5oYW5kbGVkID0gdHJ1ZTtcbiAgICB0aGlzLnByZXZlbnRlZCA9IHRydWU7XG4gIH1cblxuICBwcmV2ZW50KCkge1xuICAgIHRoaXMucHJldmVudGVkID0gdHJ1ZTtcbiAgfVxuXG59XG5cbmNvbnN0IE9ORSA9IDFuO1xuY29uc3Qgc3VidHJhY3RCaXQgPSAobnVtLCBiaXQpID0+IHtcbiAgcmV0dXJuIG51bSAmIH4oMW4gPDwgYml0KTtcbn07XG5jb25zdCBhZGRCaXQgPSAobnVtLCBiaXQpID0+IHtcbiAgcmV0dXJuIG51bSB8IE9ORSA8PCBiaXQ7XG59O1xuY29uc3QgaGFzQml0ID0gKG51bSwgYml0KSA9PiB7XG4gIHJldHVybiAobnVtID4+IGJpdCkgJSAybiAhPT0gMG47XG59O1xuY29uc3QgYml0SW50ZXJzZWN0aW9uID0gKG4xLCBuMikgPT4ge1xuICByZXR1cm4gbjEgJiBuMjtcbn07XG5cbmNvbnN0IGF0dGFjaENvbXBvbmVudCA9IChlbnRpdHksIGNvbXBvbmVudCkgPT4ge1xuICBjb25zdCBrZXkgPSBjb21wb25lbnQuX2NrZXk7XG4gIGVudGl0eVtrZXldID0gY29tcG9uZW50O1xuICBlbnRpdHkuY29tcG9uZW50c1trZXldID0gY29tcG9uZW50O1xufTtcblxuY29uc3QgYXR0YWNoQ29tcG9uZW50S2V5ZWQgPSAoZW50aXR5LCBjb21wb25lbnQpID0+IHtcbiAgY29uc3Qga2V5ID0gY29tcG9uZW50Ll9ja2V5O1xuXG4gIGlmICghZW50aXR5LmNvbXBvbmVudHNba2V5XSkge1xuICAgIGVudGl0eVtrZXldID0ge307XG4gICAgZW50aXR5LmNvbXBvbmVudHNba2V5XSA9IHt9O1xuICB9XG5cbiAgZW50aXR5W2tleV1bY29tcG9uZW50W2NvbXBvbmVudC5rZXlQcm9wZXJ0eV1dID0gY29tcG9uZW50O1xuICBlbnRpdHkuY29tcG9uZW50c1trZXldW2NvbXBvbmVudFtjb21wb25lbnQua2V5UHJvcGVydHldXSA9IGNvbXBvbmVudDtcbn07XG5cbmNvbnN0IGF0dGFjaENvbXBvbmVudEFycmF5ID0gKGVudGl0eSwgY29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IGtleSA9IGNvbXBvbmVudC5fY2tleTtcblxuICBpZiAoIWVudGl0eS5jb21wb25lbnRzW2tleV0pIHtcbiAgICBlbnRpdHlba2V5XSA9IFtdO1xuICAgIGVudGl0eS5jb21wb25lbnRzW2tleV0gPSBbXTtcbiAgfVxuXG4gIGVudGl0eVtrZXldLnB1c2goY29tcG9uZW50KTtcbiAgZW50aXR5LmNvbXBvbmVudHNba2V5XS5wdXNoKGNvbXBvbmVudCk7XG59O1xuXG5jb25zdCByZW1vdmVDb21wb25lbnQgPSAoZW50aXR5LCBjb21wb25lbnQpID0+IHtcbiAgY29uc3Qga2V5ID0gY29tcG9uZW50Ll9ja2V5O1xuICBkZWxldGUgZW50aXR5W2tleV07XG4gIGRlbGV0ZSBlbnRpdHkuY29tcG9uZW50c1trZXldO1xuICBlbnRpdHkuX2NiaXRzID0gc3VidHJhY3RCaXQoZW50aXR5Ll9jYml0cywgY29tcG9uZW50Ll9jYml0KTtcblxuICBlbnRpdHkuX2NhbmRpZGFjeSgpO1xufTtcblxuY29uc3QgcmVtb3ZlQ29tcG9uZW50S2V5ZWQgPSAoZW50aXR5LCBjb21wb25lbnQpID0+IHtcbiAgY29uc3Qga2V5ID0gY29tcG9uZW50Ll9ja2V5O1xuICBjb25zdCBrZXlQcm9wID0gY29tcG9uZW50W2NvbXBvbmVudC5rZXlQcm9wZXJ0eV07XG4gIGRlbGV0ZSBlbnRpdHlba2V5XVtrZXlQcm9wXTtcbiAgZGVsZXRlIGVudGl0eS5jb21wb25lbnRzW2tleV1ba2V5UHJvcF07XG5cbiAgaWYgKE9iamVjdC5rZXlzKGVudGl0eVtrZXldKS5sZW5ndGggPD0gMCkge1xuICAgIGRlbGV0ZSBlbnRpdHlba2V5XTtcbiAgICBkZWxldGUgZW50aXR5LmNvbXBvbmVudHNba2V5XTtcbiAgICBlbnRpdHkuX2NiaXRzID0gc3VidHJhY3RCaXQoZW50aXR5Ll9jYml0cywgY29tcG9uZW50Ll9jYml0KTtcblxuICAgIGVudGl0eS5fY2FuZGlkYWN5KCk7XG4gIH1cbn07XG5cbmNvbnN0IHJlbW92ZUNvbXBvbmVudEFycmF5ID0gKGVudGl0eSwgY29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IGtleSA9IGNvbXBvbmVudC5fY2tleTtcbiAgY29uc3QgaWR4ID0gZW50aXR5W2tleV0uaW5kZXhPZihjb21wb25lbnQpO1xuICBlbnRpdHlba2V5XS5zcGxpY2UoaWR4LCAxKTtcbiAgZW50aXR5LmNvbXBvbmVudHNba2V5XS5zcGxpY2UoaWR4LCAxKTtcblxuICBpZiAoZW50aXR5W2tleV0ubGVuZ3RoIDw9IDApIHtcbiAgICBkZWxldGUgZW50aXR5W2tleV07XG4gICAgZGVsZXRlIGVudGl0eS5jb21wb25lbnRzW2tleV07XG4gICAgZW50aXR5Ll9jYml0cyA9IHN1YnRyYWN0Qml0KGVudGl0eS5fY2JpdHMsIGNvbXBvbmVudC5fY2JpdCk7XG5cbiAgICBlbnRpdHkuX2NhbmRpZGFjeSgpO1xuICB9XG59O1xuXG5jb25zdCBzZXJpYWxpemVDb21wb25lbnQgPSBjb21wb25lbnQgPT4ge1xuICByZXR1cm4gY29tcG9uZW50LnNlcmlhbGl6ZSgpO1xufTtcblxuY29uc3Qgc2VyaWFsaXplQ29tcG9uZW50QXJyYXkgPSBhcnIgPT4ge1xuICByZXR1cm4gYXJyLm1hcChzZXJpYWxpemVDb21wb25lbnQpO1xufTtcblxuY29uc3Qgc2VyaWFsaXplQ29tcG9uZW50S2V5ZWQgPSBvYiA9PiB7XG4gIGNvbnN0IHNlciA9IHt9O1xuXG4gIGZvciAoY29uc3QgayBpbiBvYikge1xuICAgIHNlcltrXSA9IHNlcmlhbGl6ZUNvbXBvbmVudChvYltrXSk7XG4gIH1cblxuICByZXR1cm4gc2VyO1xufTtcblxuY2xhc3MgRW50aXR5IHtcbiAgY29uc3RydWN0b3Iod29ybGQsIGlkKSB7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2NiaXRzXCIsIDBuKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9xZWxpZ2libGVcIiwgdHJ1ZSk7XG5cbiAgICB0aGlzLndvcmxkID0gd29ybGQ7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgIHRoaXMuaXNEZXN0cm95ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIF9jYW5kaWRhY3koKSB7XG4gICAgaWYgKHRoaXMuX3FlbGlnaWJsZSkge1xuICAgICAgdGhpcy53b3JsZC5fY2FuZGlkYXRlKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGFkZChjbGF6eiwgcHJvcGVydGllcykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBjbGF6eihwcm9wZXJ0aWVzKTtcblxuICAgIGlmIChjb21wb25lbnQua2V5UHJvcGVydHkpIHtcbiAgICAgIGF0dGFjaENvbXBvbmVudEtleWVkKHRoaXMsIGNvbXBvbmVudCk7XG4gICAgfSBlbHNlIGlmIChjb21wb25lbnQuYWxsb3dNdWx0aXBsZSkge1xuICAgICAgYXR0YWNoQ29tcG9uZW50QXJyYXkodGhpcywgY29tcG9uZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0YWNoQ29tcG9uZW50KHRoaXMsIGNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY2JpdHMgPSBhZGRCaXQodGhpcy5fY2JpdHMsIGNvbXBvbmVudC5fY2JpdCk7XG5cbiAgICBjb21wb25lbnQuX29uQXR0YWNoZWQodGhpcyk7XG5cbiAgICB0aGlzLl9jYW5kaWRhY3koKTtcbiAgfVxuXG4gIGhhcyhjbGF6eikge1xuICAgIHJldHVybiBoYXNCaXQodGhpcy5fY2JpdHMsIGNsYXp6LnByb3RvdHlwZS5fY2JpdCk7XG4gIH1cblxuICByZW1vdmUoY29tcG9uZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudC5rZXlQcm9wZXJ0eSkge1xuICAgICAgcmVtb3ZlQ29tcG9uZW50S2V5ZWQodGhpcywgY29tcG9uZW50KTtcbiAgICB9IGVsc2UgaWYgKGNvbXBvbmVudC5hbGxvd011bHRpcGxlKSB7XG4gICAgICByZW1vdmVDb21wb25lbnRBcnJheSh0aGlzLCBjb21wb25lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVDb21wb25lbnQodGhpcywgY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnQuX29uRGVzdHJveWVkKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGZvciAoY29uc3QgayBpbiB0aGlzLmNvbXBvbmVudHMpIHtcbiAgICAgIGNvbnN0IHYgPSB0aGlzLmNvbXBvbmVudHNba107XG5cbiAgICAgIGlmICh2IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMuX2NiaXRzID0gc3VidHJhY3RCaXQodGhpcy5fY2JpdHMsIHYuX2NiaXQpO1xuXG4gICAgICAgIHYuX29uRGVzdHJveWVkKCk7XG4gICAgICB9IGVsc2UgaWYgKHYgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiB2KSB7XG4gICAgICAgICAgdGhpcy5fY2JpdHMgPSBzdWJ0cmFjdEJpdCh0aGlzLl9jYml0cywgY29tcG9uZW50Ll9jYml0KTtcblxuICAgICAgICAgIGNvbXBvbmVudC5fb25EZXN0cm95ZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgT2JqZWN0LnZhbHVlcyh2KSkge1xuICAgICAgICAgIHRoaXMuX2NiaXRzID0gc3VidHJhY3RCaXQodGhpcy5fY2JpdHMsIGNvbXBvbmVudC5fY2JpdCk7XG5cbiAgICAgICAgICBjb21wb25lbnQuX29uRGVzdHJveWVkKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXNba107XG4gICAgICBkZWxldGUgdGhpcy5jb21wb25lbnRzW2tdO1xuICAgIH1cblxuICAgIHRoaXMuX2NhbmRpZGFjeSgpO1xuXG4gICAgdGhpcy53b3JsZC5fZGVzdHJveWVkKHRoaXMuaWQpO1xuXG4gICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBrIGluIHRoaXMuY29tcG9uZW50cykge1xuICAgICAgY29uc3QgdiA9IHRoaXMuY29tcG9uZW50c1trXTtcblxuICAgICAgaWYgKHYgaW5zdGFuY2VvZiBDb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50c1trXSA9IHNlcmlhbGl6ZUNvbXBvbmVudCh2KTtcbiAgICAgIH0gZWxzZSBpZiAodiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGNvbXBvbmVudHNba10gPSBzZXJpYWxpemVDb21wb25lbnRBcnJheSh2KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudHNba10gPSBzZXJpYWxpemVDb21wb25lbnRLZXllZCh2KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAuLi5jb21wb25lbnRzXG4gICAgfTtcbiAgfVxuXG4gIGZpcmVFdmVudChuYW1lLCBkYXRhKSB7XG4gICAgY29uc3QgZXZ0ID0gbmV3IEVudGl0eUV2ZW50KG5hbWUsIGRhdGEpO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb21wb25lbnRzKSB7XG4gICAgICBjb25zdCB2ID0gdGhpcy5jb21wb25lbnRzW2tleV07XG5cbiAgICAgIGlmICh2IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICAgIHYuX29uRXZlbnQoZXZ0KTtcblxuICAgICAgICBpZiAoZXZ0LnByZXZlbnRlZCkge1xuICAgICAgICAgIHJldHVybiBldnQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZbaV0uX29uRXZlbnQoZXZ0KTtcblxuICAgICAgICAgIGlmIChldnQucHJldmVudGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZXZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgT2JqZWN0LnZhbHVlcyh2KSkge1xuICAgICAgICAgIGNvbXBvbmVudC5fb25FdmVudChldnQpO1xuXG4gICAgICAgICAgaWYgKGV2dC5wcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBldnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGV2dDtcbiAgfVxuXG59XG5cbmNsYXNzIFF1ZXJ5IHtcbiAgY29uc3RydWN0b3Iod29ybGQsIGZpbHRlcnMpIHtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfY2FjaGVcIiwgW10pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX29uQWRkTGlzdGVuZXJzXCIsIFtdKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9vblJlbW92ZUxpc3RlbmVyc1wiLCBbXSk7XG5cbiAgICB0aGlzLl93b3JsZCA9IHdvcmxkO1xuICAgIGNvbnN0IGFueSA9IGZpbHRlcnMuYW55IHx8IFtdO1xuICAgIGNvbnN0IGFsbCA9IGZpbHRlcnMuYWxsIHx8IFtdO1xuICAgIGNvbnN0IG5vbmUgPSBmaWx0ZXJzLm5vbmUgfHwgW107XG4gICAgdGhpcy5fYW55ID0gYW55LnJlZHVjZSgocywgYykgPT4ge1xuICAgICAgcmV0dXJuIGFkZEJpdChzLCBjLnByb3RvdHlwZS5fY2JpdCk7XG4gICAgfSwgMG4pO1xuICAgIHRoaXMuX2FsbCA9IGFsbC5yZWR1Y2UoKHMsIGMpID0+IHtcbiAgICAgIHJldHVybiBhZGRCaXQocywgYy5wcm90b3R5cGUuX2NiaXQpO1xuICAgIH0sIDBuKTtcbiAgICB0aGlzLl9ub25lID0gbm9uZS5yZWR1Y2UoKHMsIGMpID0+IHtcbiAgICAgIHJldHVybiBhZGRCaXQocywgYy5wcm90b3R5cGUuX2NiaXQpO1xuICAgIH0sIDBuKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIG9uRW50aXR5QWRkZWQoZm4pIHtcbiAgICB0aGlzLl9vbkFkZExpc3RlbmVycy5wdXNoKGZuKTtcbiAgfVxuXG4gIG9uRW50aXR5UmVtb3ZlZChmbikge1xuICAgIHRoaXMuX29uUmVtb3ZlTGlzdGVuZXJzLnB1c2goZm4pO1xuICB9XG5cbiAgaGFzKGVudGl0eSkge1xuICAgIHJldHVybiB0aGlzLmlkeChlbnRpdHkpID49IDA7XG4gIH1cblxuICBpZHgoZW50aXR5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlLmluZGV4T2YoZW50aXR5KTtcbiAgfVxuXG4gIG1hdGNoZXMoZW50aXR5KSB7XG4gICAgY29uc3QgYml0cyA9IGVudGl0eS5fY2JpdHM7XG4gICAgY29uc3QgYW55ID0gdGhpcy5fYW55ID09PSAwbiB8fCBiaXRJbnRlcnNlY3Rpb24oYml0cywgdGhpcy5fYW55KSA+IDA7XG5cbiAgICBjb25zdCBhbGwgPSBiaXRJbnRlcnNlY3Rpb24oYml0cywgdGhpcy5fYWxsKSA9PT0gdGhpcy5fYWxsO1xuXG4gICAgY29uc3Qgbm9uZSA9IGJpdEludGVyc2VjdGlvbihiaXRzLCB0aGlzLl9ub25lKSA9PT0gMG47XG4gICAgcmV0dXJuIGFueSAmJiBhbGwgJiYgbm9uZTtcbiAgfVxuXG4gIGNhbmRpZGF0ZShlbnRpdHkpIHtcbiAgICBjb25zdCBpZHggPSB0aGlzLmlkeChlbnRpdHkpO1xuICAgIGNvbnN0IGlzVHJhY2tpbmcgPSBpZHggPj0gMDtcblxuICAgIGlmICghZW50aXR5LmlzRGVzdHJveWVkICYmIHRoaXMubWF0Y2hlcyhlbnRpdHkpKSB7XG4gICAgICBpZiAoIWlzVHJhY2tpbmcpIHtcbiAgICAgICAgdGhpcy5fY2FjaGUucHVzaChlbnRpdHkpO1xuXG4gICAgICAgIHRoaXMuX29uQWRkTGlzdGVuZXJzLmZvckVhY2goY2IgPT4gY2IoZW50aXR5KSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpc1RyYWNraW5nKSB7XG4gICAgICB0aGlzLl9jYWNoZS5zcGxpY2UoaWR4LCAxKTtcblxuICAgICAgdGhpcy5fb25SZW1vdmVMaXN0ZW5lcnMuZm9yRWFjaChjYiA9PiBjYihlbnRpdHkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuX2NhY2hlID0gW107XG5cbiAgICB0aGlzLl93b3JsZC5fZW50aXRpZXMuZm9yRWFjaChlbnRpdHkgPT4ge1xuICAgICAgdGhpcy5jYW5kaWRhdGUoZW50aXR5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGU7XG4gIH1cblxufVxuXG5jbGFzcyBXb3JsZCB7XG4gIGNvbnN0cnVjdG9yKGVuZ2luZSkge1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9pZFwiLCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9xdWVyaWVzXCIsIFtdKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9lbnRpdGllc1wiLCBuZXcgTWFwKCkpO1xuXG4gICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gIH1cblxuICBjcmVhdGVJZCgpIHtcbiAgICByZXR1cm4gKyt0aGlzLl9pZCArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcbiAgfVxuXG4gIGdldEVudGl0eShpZCkge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdGllcy5nZXQoaWQpO1xuICB9XG5cbiAgZ2V0RW50aXRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VudGl0aWVzLnZhbHVlcygpO1xuICB9XG5cbiAgY3JlYXRlRW50aXR5KGlkID0gdGhpcy5jcmVhdGVJZCgpKSB7XG4gICAgY29uc3QgZW50aXR5ID0gbmV3IEVudGl0eSh0aGlzLCBpZCk7XG5cbiAgICB0aGlzLl9lbnRpdGllcy5zZXQoaWQsIGVudGl0eSk7XG5cbiAgICByZXR1cm4gZW50aXR5O1xuICB9XG5cbiAgZGVzdHJveUVudGl0eShpZCkge1xuICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuZ2V0RW50aXR5KGlkKTtcblxuICAgIGlmIChlbnRpdHkpIHtcbiAgICAgIGVudGl0eS5kZXN0cm95KCk7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveUVudGl0aWVzKCkge1xuICAgIHRoaXMuX2VudGl0aWVzLmZvckVhY2goZW50aXR5ID0+IHtcbiAgICAgIGVudGl0eS5kZXN0cm95KCk7XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZGVzdHJveUVudGl0aWVzKCk7XG4gICAgdGhpcy5faWQgPSAwO1xuICAgIHRoaXMuX3F1ZXJpZXMgPSBbXTtcbiAgICB0aGlzLl9lbnRpdGllcyA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIGNyZWF0ZVF1ZXJ5KGZpbHRlcnMpIHtcbiAgICBjb25zdCBxdWVyeSA9IG5ldyBRdWVyeSh0aGlzLCBmaWx0ZXJzKTtcblxuICAgIHRoaXMuX3F1ZXJpZXMucHVzaChxdWVyeSk7XG5cbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBjcmVhdGVQcmVmYWIobmFtZSwgcHJvcGVydGllcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuZW5naW5lLl9wcmVmYWJzLmNyZWF0ZSh0aGlzLCBuYW1lLCBwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZShlbnRpdGllcykge1xuICAgIGNvbnN0IGpzb24gPSBbXTtcbiAgICBjb25zdCBsaXN0ID0gZW50aXRpZXMgfHwgdGhpcy5fZW50aXRpZXM7XG4gICAgbGlzdC5mb3JFYWNoKGUgPT4ge1xuICAgICAganNvbi5wdXNoKGUuc2VyaWFsaXplKCkpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBlbnRpdGllczoganNvblxuICAgIH07XG4gIH1cblxuICBkZXNlcmlhbGl6ZShkYXRhKSB7XG4gICAgZm9yIChjb25zdCBlbnRpdHlEYXRhIG9mIGRhdGEuZW50aXRpZXMpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZU9yR2V0RW50aXR5QnlJZChlbnRpdHlEYXRhLmlkKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGVudGl0eURhdGEgb2YgZGF0YS5lbnRpdGllcykge1xuICAgICAgdGhpcy5fZGVzZXJpYWxpemVFbnRpdHkoZW50aXR5RGF0YSk7XG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZU9yR2V0RW50aXR5QnlJZChpZCkge1xuICAgIHJldHVybiB0aGlzLmdldEVudGl0eShpZCkgfHwgdGhpcy5jcmVhdGVFbnRpdHkoaWQpO1xuICB9XG5cbiAgX2Rlc2VyaWFsaXplRW50aXR5KGRhdGEpIHtcbiAgICBjb25zdCB7XG4gICAgICBpZCxcbiAgICAgIC4uLmNvbXBvbmVudHNcbiAgICB9ID0gZGF0YTtcblxuICAgIGNvbnN0IGVudGl0eSA9IHRoaXMuX2NyZWF0ZU9yR2V0RW50aXR5QnlJZChpZCk7XG5cbiAgICBlbnRpdHkuX3FlbGlnaWJsZSA9IGZhbHNlO1xuICAgIE9iamVjdC5lbnRyaWVzKGNvbXBvbmVudHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgY29uc3QgdHlwZSA9IGNhbWVsU3RyaW5nKGtleSk7XG5cbiAgICAgIGNvbnN0IGRlZiA9IHRoaXMuZW5naW5lLl9jb21wb25lbnRzLmdldCh0eXBlKTtcblxuICAgICAgaWYgKGRlZi5hbGxvd011bHRpcGxlKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXModmFsdWUpLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgZW50aXR5LmFkZChkZWYsIGQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVudGl0eS5hZGQoZGVmLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZW50aXR5Ll9xZWxpZ2libGUgPSB0cnVlO1xuXG4gICAgZW50aXR5Ll9jYW5kaWRhY3koKTtcbiAgfVxuXG4gIF9jYW5kaWRhdGUoZW50aXR5KSB7XG4gICAgdGhpcy5fcXVlcmllcy5mb3JFYWNoKHEgPT4gcS5jYW5kaWRhdGUoZW50aXR5KSk7XG4gIH1cblxuICBfZGVzdHJveWVkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VudGl0aWVzLmRlbGV0ZShpZCk7XG4gIH1cblxufVxuXG5jbGFzcyBFbmdpbmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfY29tcG9uZW50c1wiLCBuZXcgQ29tcG9uZW50UmVnaXN0cnkoKSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfcHJlZmFic1wiLCBuZXcgUHJlZmFiUmVnaXN0cnkodGhpcykpO1xuICB9XG5cbiAgcmVnaXN0ZXJDb21wb25lbnQoY2xhenopIHtcbiAgICB0aGlzLl9jb21wb25lbnRzLnJlZ2lzdGVyKGNsYXp6KTtcbiAgfVxuXG4gIHJlZ2lzdGVyUHJlZmFiKGRhdGEpIHtcbiAgICB0aGlzLl9wcmVmYWJzLnJlZ2lzdGVyKGRhdGEpO1xuICB9XG5cbiAgY3JlYXRlV29ybGQoKSB7XG4gICAgcmV0dXJuIG5ldyBXb3JsZCh0aGlzKTtcbiAgfVxuXG4gIGRlc3Ryb3lXb3JsZCh3b3JsZCkge1xuICAgIHdvcmxkLmRlc3Ryb3koKTtcbiAgfVxuXG59XG5cbmV4cG9ydCB7IENvbXBvbmVudCwgRW5naW5lIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyB3Z2x0IGZyb20gXCJ3Z2x0XCI7XHJcbmltcG9ydCBlbmdpbmUgZnJvbSAnLi9lY3MnO1xyXG5pbXBvcnQge0FsbHksIEFwcGVhcmFuY2UsIENvbWJhdCwgRGVzY3JpcHRpb24sIEVuZW15LCBoYXNNb3ZlZCwgSGVhbHRoLCBQb3NpdGlvbiwgQWN0aW9uLCBNb3ZlbWVudH0gZnJvbSBcIi4vY29tcG9uZW50c1wiXHJcblxyXG5cclxudmFyIGxvY2F0aW9uSWQgPSB7fVxyXG5jb25zdCB0ZXJtaW5hbHggPSA4MlxyXG5jb25zdCB0ZXJtaW5hbHkgPSA1MlxyXG4vL2NyZWF0aW5nIHRoZSBtYXAgaW4gXCJjYW52YXNcIiB3aWR0aCA9IDgwLCBoZWlnaHQgPSA1MFxyXG5jb25zdCB0ZXJtaW5hbCA9IG5ldyB3Z2x0LlRlcm1pbmFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpLCB0ZXJtaW5hbHgsIHRlcm1pbmFseSk7XHJcblxyXG4vL1dHTFQgbGVmdG92ZXJzLiBTZXR0aW5nIHRoZSB3aG9sZSBtYXAgYXMgZXhwbG9yZWQgYW5kIHZpc2libGUgdG8gdGhlIHBsYXllclxyXG5mb3IgKGxldCB5ID0gMDsgeSA8IHRlcm1pbmFsLmhlaWdodDsgeSsrKSB7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRlcm1pbmFsLndpZHRoOyB4KyspIHtcclxuICAgICAgICB0ZXJtaW5hbC5ncmlkW3ldW3hdLnZpc2libGUgPSB0cnVlXHJcbiAgICAgICAgdGVybWluYWwuZ3JpZFt5XVt4XS5leHBsb3JlZCA9IHRydWVcclxuICAgIH1cclxufVxyXG5cclxuLy9jcmVhdGluZyB3b3JsZCB0byBjb250YWluIGVudGl0aWVzIGluIG9yZGVyIHRvIGVuYWJsZSBxdWVyeVxyXG5jb25zdCB3b3JsZCA9IGVuZ2luZS5jcmVhdGVXb3JsZCgpO1xyXG5cclxuLy90ZXJtaW5hbCBib3JkZXJcclxuLy90b3BcclxuZm9yKCBsZXQgaSA9IDA7IGkgPHRlcm1pbmFseDsgaSsrKSB7XHJcbiAgICBsZXQgc3RydWN0dXJlID0gd29ybGQuY3JlYXRlUHJlZmFiKFwiU3RydWN0dXJlXCIpXHJcbiAgICBzdHJ1Y3R1cmUucG9zaXRpb24ueCA9IGlcclxuICAgIGxvY2F0aW9uSWRbc3RydWN0dXJlLnBvc2l0aW9uLnggKyBcIixcIiArIHN0cnVjdHVyZS5wb3NpdGlvbi55XSA9IHN0cnVjdHVyZS5pZFxyXG5cclxufVxyXG4vL2xlZnRcclxuZm9yKCBsZXQgaSA9IDA7IGkgPHRlcm1pbmFseTsgaSsrKSB7XHJcbiAgICBsZXQgc3RydWN0dXJlID0gd29ybGQuY3JlYXRlUHJlZmFiKFwiU3RydWN0dXJlXCIpXHJcbiAgICBzdHJ1Y3R1cmUucG9zaXRpb24ueSA9IGlcclxuICAgIGxvY2F0aW9uSWRbc3RydWN0dXJlLnBvc2l0aW9uLnggKyBcIixcIiArIHN0cnVjdHVyZS5wb3NpdGlvbi55XSA9IHN0cnVjdHVyZS5pZFxyXG59XHJcbi8vYm90dG9tXHJcbmZvciggbGV0IGkgPSAwOyBpIDx0ZXJtaW5hbHg7IGkrKykge1xyXG4gICAgbGV0IHN0cnVjdHVyZSA9IHdvcmxkLmNyZWF0ZVByZWZhYihcIlN0cnVjdHVyZVwiKVxyXG4gICAgc3RydWN0dXJlLnBvc2l0aW9uLnggPSBpXHJcbiAgICBzdHJ1Y3R1cmUucG9zaXRpb24ueSA9IHRlcm1pbmFseSAtIDFcclxuICAgIGxvY2F0aW9uSWRbc3RydWN0dXJlLnBvc2l0aW9uLnggKyBcIixcIiArIHN0cnVjdHVyZS5wb3NpdGlvbi55XSA9IHN0cnVjdHVyZS5pZFxyXG59XHJcbi8vcmlnaHRcclxuZm9yKCBsZXQgaSA9IDA7IGkgPHRlcm1pbmFseTsgaSsrKSB7XHJcbiAgICBsZXQgc3RydWN0dXJlID0gd29ybGQuY3JlYXRlUHJlZmFiKFwiU3RydWN0dXJlXCIpXHJcbiAgICBzdHJ1Y3R1cmUucG9zaXRpb24ueSA9IGlcclxuICAgIHN0cnVjdHVyZS5wb3NpdGlvbi54ID0gdGVybWluYWx4IC0gMVxyXG4gICAgbG9jYXRpb25JZFtzdHJ1Y3R1cmUucG9zaXRpb24ueCArIFwiLFwiICsgc3RydWN0dXJlLnBvc2l0aW9uLnldID0gc3RydWN0dXJlLmlkXHJcbn1cclxuLy9wbGF5ZXIgPSBodW1hbiB0ZXN0IHBpbG90XHJcbmNvbnN0IHBsYXllcnggPSA0MFxyXG5jb25zdCBwbGF5ZXJ5ID0gMlxyXG5mb3IgKGxldCBpID0gMDsgaSA8IHBsYXllcng7IGkrKykge1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXJ5OyBqKyspIHtcclxuICAgIGxldCBwbGF5ZXIgPSB3b3JsZC5jcmVhdGVQcmVmYWIoXCJIdW1hblwiKVxyXG4gICAgcGxheWVyLnBvc2l0aW9uLnggPSA4MC8yLXBsYXllcngvMitpKzFcclxuICAgIHBsYXllci5wb3NpdGlvbi55ID0gNDAralxyXG4gICAgbG9jYXRpb25JZFtwbGF5ZXIucG9zaXRpb24ueCArIFwiLFwiICsgcGxheWVyLnBvc2l0aW9uLnldID0gcGxheWVyLmlkXHJcbiAgICB9XHJcbn1cclxuLy96b21iaWUgPSB6b21iaWUgdGVzdCBwaWxvdFxyXG5jb25zdCB6b21iaWV4ID0gNjBcclxuY29uc3Qgem9tYmlleSA9IDEwXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgem9tYmlleDsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHpvbWJpZXk7IGorKykge1xyXG4gICAgICAgIGxldCB6b21iaWUgPSB3b3JsZC5jcmVhdGVQcmVmYWIoXCJab21iaWVcIilcclxuICAgICAgICB6b21iaWUucG9zaXRpb24ueCA9IDgwLzItem9tYmlleC8yK2krMVxyXG4gICAgICAgIHpvbWJpZS5wb3NpdGlvbi55ID0gMStqXHJcbiAgICAgICAgbG9jYXRpb25JZFt6b21iaWUucG9zaXRpb24ueCArIFwiLFwiICsgem9tYmllLnBvc2l0aW9uLnldID0gem9tYmllLmlkXHJcbiAgICB9ICBcclxufVxyXG4gLy9xdWVyeSBhcnJheVxyXG5jb25zdCBxdWVyeSA9IHtcclxuICAgIGFsbCA6IHdvcmxkLmNyZWF0ZVF1ZXJ5KHtcclxuICAgICAgICBhbGw6IFtdLFxyXG4gICAgfSksXHJcbiAgICBlbmVtaWVzIDogd29ybGQuY3JlYXRlUXVlcnkoe1xyXG4gICAgICAgIGFsbDogW0VuZW15XSxcclxuICAgIH0pLFxyXG4gICAgYWxsaWVzIDogd29ybGQuY3JlYXRlUXVlcnkoe1xyXG4gICAgICAgIGFsbDogW0FsbHldLFxyXG4gICAgfSksXHJcbiAgICBhY3Rpb24gOiB3b3JsZC5jcmVhdGVRdWVyeSh7XHJcbiAgICAgICAgYWxsOiBbQWN0aW9uXSxcclxuICAgIH0pXHJcbn07IFxyXG5cclxuLy9jYXJkaW5hbCBkaXJlY3Rpb24gZm9yIG1vdmVtZW50XHJcbmNvbnN0IGNhcmRpbmFscyA9IFtbMCwxXSxbMSwxXSxbMSwwXSxbMSwtMV0sWzAsLTFdLFstMSwtMV0sWy0xLDBdLFstMSwxXV1cclxuXHJcbmZ1bmN0aW9uIGtpbGxFbnRpdHkoZW50aXR5KXtcclxuZGVsZXRlIGxvY2F0aW9uSWRbZW50aXR5LnBvc2l0aW9uLnggKyBcIixcIiArIGVudGl0eS5wb3NpdGlvbi55XVxyXG5lbnRpdHkuZGVzdHJveSgpXHJcbn1cclxuXHJcbi8vQ29sbGVjdGl2ZSBvZiBhbGwgZW5lbXkgQUlcclxuLy9BSSBuZWVkcyB0byBoYXZlIHRhcmdldHRpbmcsIGF0dGFja2luZywgbW92aW5nXHJcbmZ1bmN0aW9uIGVuZW15QUkoZW50aXR5RW5lbXksIHRpbWUpIHtcclxuICAgIGlmIChlbnRpdHlFbmVteS5kZXNjcmlwdGlvbi5uYW1lID09IFwiWm9tYmllXCIpIHtcclxuICAgICAgICAvL2FjdGlvbiBhdmFpbGFibGVcclxuICAgICAgICBpZiAodGltZSAtIGVudGl0eUVuZW15LmFjdGlvbi5sYXN0ID49IGVudGl0eUVuZW15LmFjdGlvbi5hZGp1c3RlZCkge1xyXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSAwXHJcbiAgICAgICAgICAgIC8vRGV0ZXJtaW5lIGNsb3Nlc3QgcGxheWVyIGFsbHkgdG8gem9tYmllXHJcbiAgICAgICAgICAgIHF1ZXJ5LmFsbGllcy5nZXQoKS5mb3JFYWNoKChlbnRpdHlBbGx5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5oeXBvdCgoZW50aXR5RW5lbXkucG9zaXRpb24ueCAtIGVudGl0eUFsbHkucG9zaXRpb24ueCksKGVudGl0eUVuZW15LnBvc2l0aW9uLnkgLSBlbnRpdHlBbGx5LnBvc2l0aW9uLnkpKSA8IGRpc3RhbmNlIHx8IGRpc3RhbmNlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlFbmVteS5jb21iYXQueCA9IGVudGl0eUFsbHkucG9zaXRpb24ueFxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUVuZW15LmNvbWJhdC55ID0gZW50aXR5QWxseS5wb3NpdGlvbi55XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5RW5lbXkuY29tYmF0LnRhcmdldCA9IGVudGl0eUFsbHkuaWRcclxuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGguaHlwb3QoKGVudGl0eUVuZW15LnBvc2l0aW9uLnggLSBlbnRpdHlBbGx5LnBvc2l0aW9uLngpLChlbnRpdHlFbmVteS5wb3NpdGlvbi55IC0gZW50aXR5QWxseS5wb3NpdGlvbi55KSlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBlbnRpdHlFbmVteS5jb21iYXQuZGlzdGFuY2UgPSBkaXN0YW5jZVxyXG4gICAgICAgICAgICAvL2RldGVybWluZSBjYXJkaW5hbCBtb3ZlbWVudCB0byBuZWFyZXN0IGVuZW15XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKGVudGl0eUVuZW15LmNvbWJhdC54IC0gZW50aXR5RW5lbXkucG9zaXRpb24ueCwgZW50aXR5RW5lbXkuY29tYmF0LnkgLSBlbnRpdHlFbmVteS5wb3NpdGlvbi55KSogMTgwIC8gTWF0aC5QSVxyXG4gICAgICAgICAgICAgICAgbGV0IGxvd0FuZ2xlID0gaSAqIDQ1IC0gMjIuNVxyXG4gICAgICAgICAgICAgICAgbGV0IGhpZ2hBbmdsZSA9IGkgKiA0NSArIDIyLjVcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLnNpZ24obG93QW5nbGUpID09IC0xKSB7bG93QW5nbGUgKz0gMzYwfVxyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguc2lnbihhbmdsZSkgPT0gLTEpIHthbmdsZSArPSAzNjB9XHJcbiAgICAgICAgICAgICAgICBpZiAoKGkgPT0gMCAmJiAoYW5nbGUgPj0gMzM3LjUgfHwgYW5nbGUgPD0gMjIuNSkpIHx8IChsb3dBbmdsZSA8PSBhbmdsZSAmJiBhbmdsZSA8PSBoaWdoQW5nbGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5RW5lbXkubW92ZW1lbnQueCA9IGNhcmRpbmFsc1tpXVswXVxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUVuZW15Lm1vdmVtZW50LnkgPSBjYXJkaW5hbHNbaV1bMV1cclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlFbmVteS5tb3ZlbWVudC5jYXJkaW5hbCA9IGlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vdGFyZ2V0IGF2YWlsYWJsZVxyXG4gICAgICAgICAgICAgICAgaWYgKHdvcmxkLmdldEVudGl0eShlbnRpdHlFbmVteS5jb21iYXQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgYWRqYWNlbnQgdG8gdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGVudGl0eUVuZW15LmNvbWJhdC54IC0gZW50aXR5RW5lbXkucG9zaXRpb24ueCkgPD0gMSAmJiBNYXRoLmFicyhlbnRpdHlFbmVteS5jb21iYXQueSAtIGVudGl0eUVuZW15LnBvc2l0aW9uLnkpIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9hZGphY2VudFxyXG4gICAgICAgICAgICAgICAgICAgIC8vVE9ETzpWZWxvY2l0eVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbG9jYXRpb25JZFsoZW50aXR5RW5lbXkucG9zaXRpb24ueCArIGVudGl0eUVuZW15Lm1vdmVtZW50LngpICsgXCIsXCIgKyAoZW50aXR5RW5lbXkucG9zaXRpb24ueSArIGVudGl0eUVuZW15Lm1vdmVtZW50LnkpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9lbXB0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kZWNpZGUgd2hpY2ggZGlyZWN0aW9ucyBhcmUgdmlhYmxlIHRvIGdvIHRvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZG9tRGlyZWN0aW9uID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZnJvbnQgbGVmdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsb2NhdGlvbklkWyhlbnRpdHlFbmVteS5wb3NpdGlvbi54ICsgY2FyZGluYWxzLmF0KChlbnRpdHlFbmVteS5tb3ZlbWVudC5jYXJkaW5hbCArIDEpICUgOClbMF0pICsgXCIsXCIgKyAoZW50aXR5RW5lbXkucG9zaXRpb24ueSArIGNhcmRpbmFscy5hdCgoZW50aXR5RW5lbXkubW92ZW1lbnQuY2FyZGluYWwgKyAxKSAlIDgpWzFdKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21EaXJlY3Rpb24ucHVzaChcIkZyb250IExlZnRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZnJvbnQgcmlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gaWYgKCFsb2NhdGlvbklkWyhlbnRpdHlFbmVteS5wb3NpdGlvbi54ICsgY2FyZGluYWxzLmF0KChlbnRpdHlFbmVteS5tb3ZlbWVudC5jYXJkaW5hbCAtIDEpICUgOClbMF0pICsgXCIsXCIgKyAoZW50aXR5RW5lbXkucG9zaXRpb24ueSArIGNhcmRpbmFscy5hdCgoZW50aXR5RW5lbXkubW92ZW1lbnQuY2FyZGluYWwgLSAxKSAlIDgpWzFdKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21EaXJlY3Rpb24ucHVzaChcIkZyb250IFJpZ2h0XCIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zaWRlIGxlZnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gaWYgKCFsb2NhdGlvbklkWyhlbnRpdHlFbmVteS5wb3NpdGlvbi54ICsgY2FyZGluYWxzLmF0KChlbnRpdHlFbmVteS5tb3ZlbWVudC5jYXJkaW5hbCArIDIpICUgOClbMF0pICsgXCIsXCIgKyAoZW50aXR5RW5lbXkucG9zaXRpb24ueSArIGNhcmRpbmFscy5hdCgoZW50aXR5RW5lbXkubW92ZW1lbnQuY2FyZGluYWwgKyAyKSAlIDgpWzFdKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5kb21EaXJlY3Rpb24ucHVzaChcIlNpZGUgTGVmdFwiKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2lkZSByaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBpZiAoIWxvY2F0aW9uSWRbKGVudGl0eUVuZW15LnBvc2l0aW9uLnggKyBjYXJkaW5hbHMuYXQoKGVudGl0eUVuZW15Lm1vdmVtZW50LmNhcmRpbmFsIC0gMikgJSA4KVswXSkgKyBcIixcIiArIChlbnRpdHlFbmVteS5wb3NpdGlvbi55ICsgY2FyZGluYWxzLmF0KChlbnRpdHlFbmVteS5tb3ZlbWVudC5jYXJkaW5hbCAtIDIpICUgOClbMV0pXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbURpcmVjdGlvbi5wdXNoKFwiU2lkZSBSaWdodFwiKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZG9uJ3QgbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9yYW5kb21seSBwaWNrIGEgdmFsaWQgZGlyZWN0aW9uIHRvIG1vdmUgdG8sIG9yIG5vbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmFuZG9tRGlyZWN0aW9uW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmRvbURpcmVjdGlvbi5sZW5ndGgpXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdGcm9udCBMZWZ0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlFbmVteS5tb3ZlbWVudC54ID0gY2FyZGluYWxzLmF0KChlbnRpdHlFbmVteS5tb3ZlbWVudC5jYXJkaW5hbCArIDEpICUgOClbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlFbmVteS5tb3ZlbWVudC55ID0gY2FyZGluYWxzLmF0KChlbnRpdHlFbmVteS5tb3ZlbWVudC5jYXJkaW5hbCArIDEpICUgOClbMV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Zyb250IFJpZ2h0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlFbmVteS5tb3ZlbWVudC54ID0gY2FyZGluYWxzLmF0KChlbnRpdHlFbmVteS5tb3ZlbWVudC5jYXJkaW5hbCAtIDEpICUgOClbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlFbmVteS5tb3ZlbWVudC55ID0gY2FyZGluYWxzLmF0KChlbnRpdHlFbmVteS5tb3ZlbWVudC5jYXJkaW5hbCAtIDEpICUgOClbMV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1NpZGUgTGVmdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5RW5lbXkubW92ZW1lbnQueCA9IGNhcmRpbmFscy5hdCgoZW50aXR5RW5lbXkubW92ZW1lbnQuY2FyZGluYWwgKyAyKSAlIDgpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5RW5lbXkubW92ZW1lbnQueSA9IGNhcmRpbmFscy5hdCgoZW50aXR5RW5lbXkubW92ZW1lbnQuY2FyZGluYWwgKyAyKSAlIDgpWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdTaWRlIFJpZ2h0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlFbmVteS5tb3ZlbWVudC54ID0gY2FyZGluYWxzLmF0KChlbnRpdHlFbmVteS5tb3ZlbWVudC5jYXJkaW5hbCAtIDIpICUgOClbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlFbmVteS5tb3ZlbWVudC55ID0gY2FyZGluYWxzLmF0KChlbnRpdHlFbmVteS5tb3ZlbWVudC5jYXJkaW5hbCAtIDIpICUgOClbMV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ05vbmUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5RW5lbXkubW92ZW1lbnQueCA9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlFbmVteS5tb3ZlbWVudC55ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBsb2NhdGlvbklkW2VudGl0eUVuZW15LnBvc2l0aW9uLnggKyBcIixcIiArIGVudGl0eUVuZW15LnBvc2l0aW9uLnldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUVuZW15LnBvc2l0aW9uLnggKz0gZW50aXR5RW5lbXkubW92ZW1lbnQueFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlFbmVteS5wb3NpdGlvbi55ICs9IGVudGl0eUVuZW15Lm1vdmVtZW50LnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb25JZFtlbnRpdHlFbmVteS5wb3NpdGlvbi54ICsgXCIsXCIgKyBlbnRpdHlFbmVteS5wb3NpdGlvbi55XSA9IGVudGl0eUVuZW15LmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUVuZW15LmFkZChoYXNNb3ZlZClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL2FkanVzdGVkIGFjdGlvbiBzcGVlZCA9IGFjdGlvbiBzcGVlZCArIChhY3Rpb24gc3BlZWQgLSAodGltZSBzaW5jZSBsYXN0IGF0dGFjaykpXHJcbiAgICAgICAgICAgICAgICAvL0FueSBhY3Rpb24gYWJvdmUgb3IgYmVsb3cgdGhlIGFjdGlvbiBzcGVlZCB3aWxsIGFkanVzdCB0aGUgbmV4dCBhY3Rpb24gYWNjb3JkaW5nbHkgdG8ga2VlcCBhY3Rpb24gc3BlZWQgb24gYXZlcmFnZVxyXG4gICAgICAgICAgICAgICAgLy9pLmUuIDEyMDBtcyBzaW5jZSBsYXN0IGFjdGlvbiA9PSBuZXh0IGFjdGlvbiBpcyA4MDBtcyBpbnN0ZWFkIG9mIDEwMDBtc1xyXG4gICAgICAgICAgICAgICAgLy9tdWx0aXBsaWVyIGlzIGZvciBzcGVlZGluZyB1cCBhY3Rpb25zLiBpLmUuIHZlbG9jaXR5IG9mIDIgPSBtb3ZlIHR3aWNlIGFzIGZhc3QuIDEwMDBtcy8yPTUwMG1zIGNvb2xkb3duXHJcbiAgICAgICAgICAgICAgICBsZXQgbXVsdGlwbGllciA9IDFcclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHlFbmVteS5oYXMoaGFzTW92ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGllciA9IGVudGl0eUVuZW15Lm1vdmVtZW50LnZlbG9jaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5RW5lbXkucmVtb3ZlKGVudGl0eUVuZW15Lmhhc01vdmVkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUVuZW15LmFjdGlvbi5hZGp1c3RlZCA9IChlbnRpdHlFbmVteS5hY3Rpb24uc3BlZWQgKyBlbnRpdHlFbmVteS5hY3Rpb24uc3BlZWQgLSAodGltZSAtIGVudGl0eUVuZW15LmFjdGlvbi5sYXN0KSkvbXVsdGlwbGllclxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUVuZW15LmFjdGlvbi5sYXN0ID0gdGltZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuZnVuY3Rpb24gYWxseUFJKGVudGl0eUFsbHksIHRpbWUpIHtcclxuICAgIGlmIChlbnRpdHlBbGx5LmRlc2NyaXB0aW9uLm5hbWUgPT0gXCJIdW1hblwiKSB7XHJcbiAgICAgICAgLy9hY3Rpb24gYXZhaWxhYmxlXHJcbiAgICAgICAgaWYgKHRpbWUgLSBlbnRpdHlBbGx5LmFjdGlvbi5sYXN0ID49IGVudGl0eUFsbHkuYWN0aW9uLmFkanVzdGVkKSB7IFxyXG4gICAgICAgICAgICAvL2dldCBhIHRhcmdldFxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gd29ybGQuZ2V0RW50aXR5KGVudGl0eUFsbHkuY29tYmF0LnRhcmdldClcclxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIC8vRGV0ZXJtaW5lIHRhcmdldCBiYXNlZCBvbiBmaXJzdCB6b21iaWUgZm91bmQgd2l0aGluIHJhbmdlIDFcclxuICAgICAgICAgICAgICAgIGxldCByYW5kb21UYXJnZXQgPSBbXVxyXG4gICAgICAgICAgICAgICAgcXVlcnkuZW5lbWllcy5nZXQoKS5mb3JFYWNoKGVudGl0eUVuZW15ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZW50aXR5QWxseS5wb3NpdGlvbi54IC0gZW50aXR5RW5lbXkucG9zaXRpb24ueCkgPD0gMSAmJiBNYXRoLmFicyhlbnRpdHlBbGx5LnBvc2l0aW9uLnkgLSBlbnRpdHlFbmVteS5wb3NpdGlvbi55KSA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmRvbVRhcmdldC5wdXNoKFtlbnRpdHlFbmVteS5pZCwgZW50aXR5RW5lbXkucG9zaXRpb24ueCwgZW50aXR5RW5lbXkucG9zaXRpb24ueV0pXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmRvbVRhcmdldC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkVGFyZ2V0ID0gcmFuZG9tVGFyZ2V0W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmRvbVRhcmdldC5sZW5ndGgpXVxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUFsbHkuY29tYmF0LnRhcmdldCA9IHNlbGVjdGVkVGFyZ2V0WzBdXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5QWxseS5jb21iYXQueCA9IHNlbGVjdGVkVGFyZ2V0WzFdXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5QWxseS5jb21iYXQueSA9IHNlbGVjdGVkVGFyZ2V0WzJdXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgLy9oYXZlIGEgdGFyZ2V0XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuYXBwZWFyYW5jZS5jb2xvciA9IHdnbHQuQ29sb3JzLkxJR0hUX1JFRFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0LmZpcmVFdmVudChcImRhbWFnZS10YWtlblwiLCB7ZGFtYWdlOjF9KVxyXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5oZWFsdGguaHAgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGtpbGxFbnRpdHkodGFyZ2V0KVxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUFsbHkuY29tYmF0LnRhcmdldCA9IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlBbGx5LmNvbWJhdC54ID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUFsbHkuY29tYmF0LnkgPSAwXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL3RhcmdldCBhdmFpbGFibGVcclxuICAgICAgICAgICAgICAgIGlmICh3b3JsZC5nZXRFbnRpdHkoZW50aXR5QWxseS5jb21iYXQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgYWRqYWNlbnQgdG8gdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgLy9hZGp1c3RlZCBhY3Rpb24gc3BlZWQgPSBhY3Rpb24gc3BlZWQgKyAoYWN0aW9uIHNwZWVkIC0gKHRpbWUgc2luY2UgbGFzdCBhdHRhY2spKVxyXG4gICAgICAgICAgICAgICAgLy9BbnkgYWN0aW9uIGFib3ZlIG9yIGJlbG93IHRoZSBhY3Rpb24gc3BlZWQgd2lsbCBhZGp1c3QgdGhlIG5leHQgYWN0aW9uIGFjY29yZGluZ2x5IHRvIGtlZXAgYWN0aW9uIHNwZWVkIG9uIGF2ZXJhZ2VcclxuICAgICAgICAgICAgICAgIC8vaS5lLiAxMjAwbXMgc2luY2UgbGFzdCBhY3Rpb24gPT0gbmV4dCBhY3Rpb24gaXMgODAwbXMgaW5zdGVhZCBvZiAxMDAwbXNcclxuICAgICAgICAgICAgICAgIC8vbXVsdGlwbGllciBpcyBmb3Igc3BlZWRpbmcgdXAgYWN0aW9ucy4gaS5lLiB2ZWxvY2l0eSBvZiAyID0gbW92ZSB0d2ljZSBhcyBmYXN0LiAxMDAwbXMvMj01MDBtcyBjb29sZG93blxyXG4gICAgICAgICAgICAgICAgbGV0IG11bHRpcGxpZXIgPSAxXHJcbiAgICAgICAgICAgICAgICBpZiAoZW50aXR5QWxseS5oYXMoaGFzTW92ZWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGllciA9IGVudGl0eUFsbHkubW92ZW1lbnQudmVsb2NpdHlcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlBbGx5LnJlbW92ZShlbnRpdHlBbGx5Lmhhc01vdmVkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZW50aXR5QWxseS5hY3Rpb24uYWRqdXN0ZWQgPSAoZW50aXR5QWxseS5hY3Rpb24uc3BlZWQgKyBlbnRpdHlBbGx5LmFjdGlvbi5zcGVlZCAtICh0aW1lIC0gZW50aXR5QWxseS5hY3Rpb24ubGFzdCkpL211bHRpcGxpZXJcclxuICAgICAgICAgICAgICAgIGVudGl0eUFsbHkuYWN0aW9uLmxhc3QgPSB0aW1lXHJcbiAgICAgICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuLy9xdWVyeSBhbGwgYW5kIGRvIHRoZWlyIG5leHQgYWN0aW9uLiBBdHRhY2sgZWxzZSBtb3ZlXHJcbi8vVE9ETzogTW92ZW1lbnQgZm9yIHZlbG9jaXR5ID4gMS4gSW5jcmVtZW50IHRocm91Z2ggZWFjaCBzdGVwIHRvIGRldGVybWluZSBpZiBuZXh0IHN0ZXAgaXMgY2xlYXIvYWRqYWNlbnQgdG8gdGFyZ2V0XHJcbi8vVE9ETzogTWF5YmUgcmFuZG9taXplIHRoZSBkaXJlY3Rpb24gem9tYmllcyBkZWNpZGUgdG8gZ28gd2hlbiBibG9ja2VkLlxyXG5mdW5jdGlvbiBkb0FjdGlvbih0aW1lKSB7XHJcbiAgICBxdWVyeS5hY3Rpb24uZ2V0KCkuZm9yRWFjaCgoZW50aXR5KSA9PiB7XHJcbiAgICAgICAgaWYgKGVudGl0eS5oYXMoRW5lbXkpKSB7XHJcbiAgICAgICAgICAgIGVuZW15QUkoZW50aXR5LCB0aW1lKVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZW50aXR5LmhhcyhBbGx5KSkge1xyXG4gICAgICAgICAgICBhbGx5QUkoZW50aXR5LCB0aW1lKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pO1xyXG59XHJcbiAgICAvL3JlbmRlckxvb3AgPSB0aGluZ3MgdG8gZG8gZXZlcnkgbG9vcC5cclxudGVybWluYWwucmVuZGVyTG9vcCA9IGZ1bmN0aW9uKHRpbWUpIHtcclxuICAgIC8vZnBzIGRpc3BsYXlcclxuICAgIGlmICh0aGlzLmxhc3RSZW5kZXJUaW1lID09PSAwKSB7XHJcbiAgICAgIHRoaXMubGFzdFJlbmRlclRpbWUgPSB0aW1lO1xyXG4gICAgICB0aGlzLmZwcyA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlckRlbHRhID0gdGltZSAtIHRoaXMubGFzdFJlbmRlclRpbWU7XHJcbiAgICAgIHRoaXMubGFzdFJlbmRlclRpbWUgPSB0aW1lO1xyXG4gICAgICB0aGlzLmZwcyA9IE1hdGgucm91bmQoMTAwMC4wIC8gdGhpcy5yZW5kZXJEZWx0YSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgIHRoaXMuYXZlcmFnZUZwcyA9IDAuOTUgKiB0aGlzLmF2ZXJhZ2VGcHMgKyAwLjA1ICogdGhpcy5mcHM7XHJcblxyXG4gICAgfVxyXG4gICAgLy91cGRhdGVLZXlzKHRpbWUpIHdpbGwgc2VuZCB0aW1lc3RhbXAgZm9yIHRoZSBwdXJwb3NlIG9mIGxpbWl0aW5nIHJlcGVhdGVkL2hlbGQga2V5cHJlc3Nlc1xyXG4gICAgdGhpcy5rZXlzLnVwZGF0ZUtleXModGltZSk7XHJcbiAgICAvL3VwZGF0ZSh0aW1lKSB3aWxsIHNlbmQgdGltZXN0YW1wIGZvciB0aGUgcHVycG9zZSBvZiBsaW1pdGluZyByZXBlYXRlZC9oZWxkIG1vdXNlIGNsaWNrcy4gQWxzbyB0cmFja3MgY2hhbmdlIGluIG1vdXNlIGNvb3JkaW5hdGVzXHJcbiAgICB0aGlzLm1vdXNlLnVwZGF0ZSh0aW1lKTtcclxuICAgIGlmICh0aGlzLnVwZGF0ZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgZG9BY3Rpb24odGltZSlcclxuXHJcbiAgICAvL2NsZWFyIHNjcmVlblxyXG4gICAgdGhpcy5mbHVzaCgpO1xyXG4gICAgdGhpcy5jbGVhcigpO1xyXG4gICAgLy9kcmF3aW5nIFVJXHJcbiAgICAvL0RyYXdpbmcgdGVzdCBwaWxvdCBwbGF5ZXIgYW5kIHpvbWJpZVxyXG4gICAgcXVlcnkuYWxsLmdldCgpLmZvckVhY2goKGVudGl0eSkgPT4ge1xyXG4gICAgICAgIGlmICghZW50aXR5LmlzRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1N0cmluZyhlbnRpdHkucG9zaXRpb24ueCwgZW50aXR5LnBvc2l0aW9uLnksIGVudGl0eS5hcHBlYXJhbmNlLmNoYXIsIGVudGl0eS5hcHBlYXJhbmNlLmNvbG9yKTsgIFxyXG4gICAgfVxyXG4gICAgfSk7XHJcbiAgICAvL2RyYXdpbmcgRlBTXHJcbiAgICB0aGlzLmRyYXdTdHJpbmcoMCwxLCBTdHJpbmcodGVybWluYWwuZnBzKSlcclxuICAgIC8vcmVuZGVyIGFsbCBvZiB0aGUgYWJvdmVcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAvL3JlcXVlc3Qgd2ViR0wgdG8gZHJhdyB0byBicm93c2VyXHJcbiAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9