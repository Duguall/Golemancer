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
player.position.x = 40
player.position.y = 40
locationId[player.position.x + "," + player.position.y] = player.id
//zombie = zombie test pilot
const zombiex = 60
const zombiey = 20
for (let i = 0; i < zombiex; i++) {
    for (let j = 0; j < zombiey; j++) {
        let zombie = world.createPrefab("Zombie")
        zombie.position.x = 80/2-zombiex/2+i
        zombie.position.y = 1+j
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0RBQXdELGNBQWMsZUFBZSxVQUFVO0FBQy9GLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7QUFDckM7O0FBRUE7QUFDQSxvREFBb0QsS0FBSztBQUN6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLDJDQUEyQzs7QUFFM0M7QUFDQSw2QkFBNkI7QUFDN0Isb0NBQW9DOztBQUVwQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLFVBQVU7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUix3QkFBd0IsY0FBYztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUU2QjtBQUM3Qjs7Ozs7OztVQzc5QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONkI7QUFDRjtBQUNrRjtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQ0FBYTtBQUNsQztBQUNBO0FBQ0EsZ0JBQWdCLHFCQUFxQjtBQUNyQyxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscURBQWtCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsYUFBYTtBQUM3QixvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGNBQWMsOENBQUs7QUFDbkIsS0FBSztBQUNMO0FBQ0EsY0FBYyw2Q0FBSTtBQUNsQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29sZW1hbmNlci8uL25vZGVfbW9kdWxlcy93Z2x0L2Rpc3Qvd2dsdC5qcyIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyLy4vc3JjL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci8uL3NyYy9lY3MuanMiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci8uL3NyYy9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyLy4vbm9kZV9tb2R1bGVzL2dlb3RpYy9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dvbGVtYW5jZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ29sZW1hbmNlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dvbGVtYW5jZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nb2xlbWFuY2VyLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKHQsaSl7XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1pKCk6XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10saSk6XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMud2dsdD1pKCk6dC53Z2x0PWkoKX0oZ2xvYmFsVGhpcywoZnVuY3Rpb24oKXtyZXR1cm4oKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgdD17NjEyOih0LGksZSk9PntsZXQgcztlLnIoaSksZS5kKGkse0JsZW5kTW9kZTooKT0+cyxDZWxsOigpPT5FLENoYXJzOigpPT5jLENvbG9yczooKT0+QSxDb25zb2xlOigpPT5LLERFRkFVTFRfRk9OVDooKT0+VixEZWZhdWx0RGlhbG9nUmVuZGVyZXI6KCk9PnYsRGlhbG9nOigpPT5iLERpYWxvZ1N0YXRlOigpPT5TLEZvbnQ6KCk9Pk8sRm92T2N0YW50czooKT0+ZyxGb3ZRdWFkcmFudHM6KCk9Pk4sR1VJOigpPT5JLEtleWJvYXJkOigpPT54LEtleXM6KCk9PlAsTWVzc2FnZURpYWxvZzooKT0+SCxNb3VzZTooKT0+WixQb2ludDooKT0+UixSTkc6KCk9Pmh0LFJlY3Q6KCk9PkMsU2VsZWN0RGlhbG9nOigpPT5NLFRlcm1pbmFsOigpPT5hdCxjb21wdXRlUGF0aDooKT0+aXQsZml4Qm94Q2VsbHM6KCk9Pl8sZnJvbUhzdjooKT0+ZCxmcm9tUmdiOigpPT5hLGdldEZvdlF1YWRyYW50OigpPT5MLGxvYWRJbWFnZTooKT0+WCxsb2FkSW1hZ2UyeDooKT0+WX0pLGZ1bmN0aW9uKHQpe3RbdC5Ob25lPTBdPVwiTm9uZVwiLHRbdC5CbGVuZD0xXT1cIkJsZW5kXCIsdFt0LkFkZD0yXT1cIkFkZFwifShzfHwocz17fSkpO2NvbnN0IHI9W1sxLDAsMSwwXSxbMSwwLDEsMV0sWzEsMCwxLDJdLFsyLDAsMiwxXSxbMCwwLDIsMV0sWzAsMCwxLDJdLFsyLDAsMiwyXSxbMiwwLDIsMF0sWzAsMCwyLDJdLFsyLDAsMCwyXSxbMiwwLDAsMV0sWzEsMCwwLDJdLFswLDAsMSwxXSxbMSwxLDAsMF0sWzEsMSwwLDFdLFswLDEsMSwxXSxbMSwxLDEsMF0sWzAsMSwwLDFdLFsxLDEsMSwxXSxbMSwyLDEsMF0sWzIsMSwyLDBdLFsyLDIsMCwwXSxbMCwyLDIsMF0sWzIsMiwwLDJdLFswLDIsMiwyXSxbMiwyLDIsMF0sWzAsMiwwLDJdLFsyLDIsMiwyXSxbMSwyLDAsMl0sWzIsMSwwLDFdLFswLDIsMSwyXSxbMCwxLDIsMV0sWzIsMSwwLDBdLFsxLDIsMCwwXSxbMCwyLDEsMF0sWzAsMSwyLDBdLFsyLDEsMiwxXSxbMSwyLDEsMl0sWzEsMCwwLDFdLFswLDEsMSwwXV07ZnVuY3Rpb24gaCh0LGksZSl7Y29uc3Qgcz10LmdldENoYXJDb2RlKGksZSk7cmV0dXJuIHZvaWQgMCE9PXMmJnM+PTE3OSYmczw9MjE4fWZ1bmN0aW9uIG8odCxpLGUscyl7aWYoaTwwfHxlPDB8fGk+PXQud2lkdGh8fGU+PXQuaGVpZ2h0KXJldHVybiAwO2NvbnN0IGg9dC5nZXRDaGFyQ29kZShpLGUpO3JldHVybiB2b2lkIDA9PT1ofHxoPDE3OXx8aD4yMTg/MDpyW2gtMTc5XVtzXX1mdW5jdGlvbiBuKHQsaSxlLHMpe2ZvcihsZXQgaD0wO2g8ci5sZW5ndGg7aCsrKXtjb25zdCBvPXJbaF07aWYob1swXT09PXQmJm9bMV09PT1pJiZvWzJdPT09ZSYmb1szXT09PXMpcmV0dXJuIDE3OStofXJldHVybiAwfWZ1bmN0aW9uIF8odCl7Zm9yKGxldCBpPTA7aTx0LmhlaWdodDtpKyspZm9yKGxldCBlPTA7ZTx0LndpZHRoO2UrKylpZihoKHQsZSxpKSl7bGV0IHM9byh0LGUsaS0xLDIpLHI9byh0LGUrMSxpLDMpLGg9byh0LGUsaSsxLDApLF89byh0LGUtMSxpLDEpO3M+MCYmMD09PXImJjA9PT1oJiYwPT09Xz9oPXM6MD09PXMmJnI+MCYmMD09PWgmJjA9PT1fP189cjowPT09cyYmMD09PXImJmg+MCYmMD09PV8/cz1oOjA9PT1zJiYwPT09ciYmMD09PWgmJl8+MCYmKHI9XyksXz4wJiZyPjAmJihfPXI9TWF0aC5tYXgoXyxyKSkscz4wJiZoPjAmJihzPWg9TWF0aC5tYXgocyxoKSk7Y29uc3QgYT1uKHMscixoLF8pO2lmKChzfHxyfHxofHxfKSYmIShhPj0xNzkmJmE8PTIxOCkpdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBjaGFyIGNvZGUhICh1cD1cIitzK1wiLCByaWdodD1cIityK1wiLCBkb3duPVwiK2grXCIsIGxlZnQ9XCIrXytcIilcIik7dC5kcmF3Q2hhcihlLGksYSl9fWZ1bmN0aW9uIGEodCxpLGUscyl7cmV0dXJuIHZvaWQgMD09PXMmJihzPTI1NSksKHQ8PDI0KSsoaTw8MTYpKyhlPDw4KStzfWZ1bmN0aW9uIGQodCxpLGUscyl7Y29uc3Qgcj02KnR8MCxoPTYqdC1yLG89ZSooMS1pKSxuPWUqKDEtaCppKSxfPWUqKDEtKDEtaCkqaSk7bGV0IGQsQSxsO3N3aXRjaChyJTYpe2Nhc2UgMDpkPWUsQT1fLGw9bzticmVhaztjYXNlIDE6ZD1uLEE9ZSxsPW87YnJlYWs7Y2FzZSAyOmQ9byxBPWUsbD1fO2JyZWFrO2Nhc2UgMzpkPW8sQT1uLGw9ZTticmVhaztjYXNlIDQ6ZD1fLEE9byxsPWU7YnJlYWs7Y2FzZSA1OmQ9ZSxBPW8sbD1uO2JyZWFrO2RlZmF1bHQ6ZD0wLEE9MCxsPTB9cmV0dXJuIHZvaWQgMD09PXMmJihzPTEpLGEoMjU1KmR8MCwyNTUqQXwwLDI1NSpsfDAsMjU1KnN8MCl9Y29uc3QgQT17QkxBQ0s6YSgwLDAsMCksV0hJVEU6YSgyNTUsMjU1LDI1NSksTElHSFRfR1JBWTphKDE3MCwxNzAsMTcwKSxEQVJLX0dSQVk6YSg4NSw4NSw4NSksWUVMTE9XOmEoMjU1LDI1NSw4NSksQlJPV046YSgxNzAsODUsMCksTElHSFRfUkVEOmEoMjU1LDg1LDg1KSxEQVJLX1JFRDphKDE3MCwwLDApLExJR0hUX0dSRUVOOmEoODUsMjU1LDg1KSxEQVJLX0dSRUVOOmEoMCwxNzAsMCksTElHSFRfQ1lBTjphKDg1LDI1NSwyNTUpLERBUktfQ1lBTjphKDAsMTcwLDE3MCksTElHSFRfQkxVRTphKDg1LDg1LDI1NSksREFSS19CTFVFOmEoMCwwLDE3MCksTElHSFRfTUFHRU5UQTphKDI1NSw4NSwyNTUpLERBUktfTUFHRU5UQTphKDE3MCwwLDE3MCksT1JBTkdFOmEoMjU1LDEzNiwwKX07ZnVuY3Rpb24gbCh0LGksZSl7cmV0dXJuIGkgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxpLHt2YWx1ZTplLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtpXT1lLHR9Y2xhc3MgRXtjb25zdHJ1Y3Rvcih0LGksZSxzLHIpe2wodGhpcyxcInhcIix2b2lkIDApLGwodGhpcyxcInlcIix2b2lkIDApLGwodGhpcyxcImNoYXJDb2RlXCIsdm9pZCAwKSxsKHRoaXMsXCJmZ1wiLHZvaWQgMCksbCh0aGlzLFwiYmdcIix2b2lkIDApLGwodGhpcyxcImRpcnR5XCIsdm9pZCAwKSxsKHRoaXMsXCJibG9ja2VkXCIsdm9pZCAwKSxsKHRoaXMsXCJibG9ja2VkU2lnaHRcIix2b2lkIDApLGwodGhpcyxcImV4cGxvcmVkXCIsdm9pZCAwKSxsKHRoaXMsXCJ2aXNpYmxlXCIsdm9pZCAwKSxsKHRoaXMsXCJwYXRoSWRcIix2b2lkIDApLGwodGhpcyxcImdcIix2b2lkIDApLGwodGhpcyxcImhcIix2b2lkIDApLGwodGhpcyxcInByZXZcIix2b2lkIDApLHRoaXMueD10LHRoaXMueT1pLHRoaXMuY2hhckNvZGU9dm9pZCAwIT09ZT9mdW5jdGlvbih0KXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIHQmJnQubGVuZ3RoPjA/dC5jaGFyQ29kZUF0KDApOnR9KGUpOlwiIFwiLmNoYXJDb2RlQXQoMCksdGhpcy5mZz12b2lkIDAhPT1zP3M6QS5XSElURSx0aGlzLmJnPXZvaWQgMCE9PXI/cjpBLkJMQUNLLHRoaXMuZGlydHk9ITAsdGhpcy5ibG9ja2VkPSExLHRoaXMuYmxvY2tlZFNpZ2h0PSExLHRoaXMuZXhwbG9yZWQ9ITEsdGhpcy52aXNpYmxlPSExLHRoaXMucGF0aElkPS0xLHRoaXMuZz0wLHRoaXMuaD0wLHRoaXMucHJldj1udWxsfXNldENoYXJDb2RlKHQpe3RoaXMuY2hhckNvZGUhPT10JiYodGhpcy5jaGFyQ29kZT10LHRoaXMuZGlydHk9ITApfXNldEZvcmVncm91bmQodCl7dm9pZCAwIT09dCYmbnVsbCE9PXQmJnQhPT10aGlzLmZnJiYodGhpcy5mZz10LHRoaXMuZGlydHk9ITApfXNldEJhY2tncm91bmQodCl7dm9pZCAwIT09dCYmbnVsbCE9PXQmJnQhPT10aGlzLmJnJiYodGhpcy5iZz10LHRoaXMuZGlydHk9ITApfXNldFZhbHVlKHQsaSxlKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIHQmJih0PXQuY2hhckNvZGVBdCgwKSksXCJudW1iZXJcIj09PXR5cGVvZiB0Pyh0aGlzLnNldENoYXJDb2RlKHQpLHZvaWQgMCE9PWkmJnRoaXMuc2V0Rm9yZWdyb3VuZChpKSx2b2lkIDAhPT1lJiZ0aGlzLnNldEJhY2tncm91bmQoZSkpOnRoaXMuZHJhd0NlbGwodCxzLk5vbmUpLHRoaXMuZGlydHl9ZHJhd0NlbGwodCxpKXtjb25zdCBlPTI1NSZ0LmJnO2k9PT1zLk5vbmV8fHQuY2hhckNvZGU+MD8odGhpcy5zZXRDaGFyQ29kZSh0LmNoYXJDb2RlKSx0aGlzLnNldEZvcmVncm91bmQodC5mZykpOmU+MCYmZTwyNTUmJnRoaXMuc2V0Rm9yZWdyb3VuZCh0aGlzLmJsZW5kQ29sb3JzKHRoaXMuZmcsdC5iZyxpKSksaT09PXMuTm9uZXx8MjU1PT09ZT90aGlzLnNldEJhY2tncm91bmQodC5iZyk6ZT4wJiZ0aGlzLnNldEJhY2tncm91bmQodGhpcy5ibGVuZENvbG9ycyh0aGlzLmJnLHQuYmcsaSkpfWJsZW5kQ29sb3JzKHQsaSxlKXtjb25zdCByPSgyNTUtKDI1NSZpKSkvMjU1LGg9MS1yLG89dD4+MjQmMjU1LG49dD4+MTYmMjU1LF89dD4+OCYyNTUsZD1pPj4yNCYyNTUsQT1pPj4xNiYyNTUsbD1pPj44JjI1NTtzd2l0Y2goZSl7Y2FzZSBzLkJsZW5kOnJldHVybiBhKHIqbytoKmR8MCxyKm4raCpBfDAscipfK2gqbHwwKTtjYXNlIHMuQWRkOnJldHVybiBhKHRoaXMuY2xhbXAobytoKmR8MCksdGhpcy5jbGFtcChuK2gqQXwwKSx0aGlzLmNsYW1wKF8raCpsfDApKTtkZWZhdWx0OnJldHVybiBpfX1jbGFtcCh0KXtyZXR1cm4gTWF0aC5taW4oMjU1LHQpfX1sZXQgYztmdW5jdGlvbiB1KHQsaSxlKXtyZXR1cm4gaSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse3ZhbHVlOmUsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2ldPWUsdH0hZnVuY3Rpb24odCl7dFt0LlNNSUxFWT0xXT1cIlNNSUxFWVwiLHRbdC5JTlZFUlNFX1NNSUxFWT0yXT1cIklOVkVSU0VfU01JTEVZXCIsdFt0LkhFQVJUPTNdPVwiSEVBUlRcIix0W3QuRElBTU9ORD00XT1cIkRJQU1PTkRcIix0W3QuQ0xVQj01XT1cIkNMVUJcIix0W3QuU1BBREU9Nl09XCJTUEFERVwiLHRbdC5CVUxMRVQ9N109XCJCVUxMRVRcIix0W3QuSU5WRVJTRV9CVUxMRVQ9OF09XCJJTlZFUlNFX0JVTExFVFwiLHRbdC5MSUdIVF9TSEFERT0xNzZdPVwiTElHSFRfU0hBREVcIix0W3QuTUVESVVNX1NIQURFPTE3N109XCJNRURJVU1fU0hBREVcIix0W3QuREFSS19TSEFERT0xNzhdPVwiREFSS19TSEFERVwiLHRbdC5CT1hfU0lOR0xFX1ZFUlRJQ0FMPTE3OV09XCJCT1hfU0lOR0xFX1ZFUlRJQ0FMXCIsdFt0LkJPWF9TSU5HTEVfVkVSVElDQUxfQU5EX1NJTkdMRV9MRUZUPTE4MF09XCJCT1hfU0lOR0xFX1ZFUlRJQ0FMX0FORF9TSU5HTEVfTEVGVFwiLHRbdC5CT1hfRE9VQkxFX1ZFUlRJQ0FMX0FORF9ET1VCTEVfTEVGVD0xODVdPVwiQk9YX0RPVUJMRV9WRVJUSUNBTF9BTkRfRE9VQkxFX0xFRlRcIix0W3QuQk9YX0RPVUJMRV9WRVJUSUNBTD0xODZdPVwiQk9YX0RPVUJMRV9WRVJUSUNBTFwiLHRbdC5CT1hfRE9VQkxFX0RPV05fQU5EX0RPVUJMRV9MRUZUPTE4N109XCJCT1hfRE9VQkxFX0RPV05fQU5EX0RPVUJMRV9MRUZUXCIsdFt0LkJPWF9ET1VCTEVfVVBfQU5EX0RPVUJMRV9MRUZUPTE4OF09XCJCT1hfRE9VQkxFX1VQX0FORF9ET1VCTEVfTEVGVFwiLHRbdC5CT1hfU0lOR0xFX0RPV05fQU5EX1NJTkdMRV9MRUZUPTE5MV09XCJCT1hfU0lOR0xFX0RPV05fQU5EX1NJTkdMRV9MRUZUXCIsdFt0LkJPWF9TSU5HTEVfVVBfQU5EX1NJTkdMRV9SSUdIVD0xOTJdPVwiQk9YX1NJTkdMRV9VUF9BTkRfU0lOR0xFX1JJR0hUXCIsdFt0LkJPWF9TSU5HTEVfSE9SSVpPTlRBTF9BTkRfU0lOR0xFX1VQPTE5M109XCJCT1hfU0lOR0xFX0hPUklaT05UQUxfQU5EX1NJTkdMRV9VUFwiLHRbdC5CT1hfU0lOR0xFX0hPUklaT05UQUxfQU5EX1NJTkdMRV9ET1dOPTE5NF09XCJCT1hfU0lOR0xFX0hPUklaT05UQUxfQU5EX1NJTkdMRV9ET1dOXCIsdFt0LkJPWF9TSU5HTEVfVkVSVElDQUxfQU5EX1NJTkdMRV9SSUdIVD0xOTVdPVwiQk9YX1NJTkdMRV9WRVJUSUNBTF9BTkRfU0lOR0xFX1JJR0hUXCIsdFt0LkJPWF9TSU5HTEVfSE9SSVpPTlRBTD0xOTZdPVwiQk9YX1NJTkdMRV9IT1JJWk9OVEFMXCIsdFt0LkJPWF9TSU5HTEVfVkVSVElDQUxfQU5EX1NJTkdMRV9IT1JJWk9OVEFMPTE5N109XCJCT1hfU0lOR0xFX1ZFUlRJQ0FMX0FORF9TSU5HTEVfSE9SSVpPTlRBTFwiLHRbdC5CT1hfRE9VQkxFX1VQX0FORF9ET1VCTEVfUklHSFQ9MjAwXT1cIkJPWF9ET1VCTEVfVVBfQU5EX0RPVUJMRV9SSUdIVFwiLHRbdC5CT1hfRE9VQkxFX0RPV05fQU5EX0RPVUJMRV9SSUdIVD0yMDFdPVwiQk9YX0RPVUJMRV9ET1dOX0FORF9ET1VCTEVfUklHSFRcIix0W3QuQk9YX0RPVUJMRV9IT1JJWk9OVEFMX0FORF9ET1VCTEVfVVA9MjAyXT1cIkJPWF9ET1VCTEVfSE9SSVpPTlRBTF9BTkRfRE9VQkxFX1VQXCIsdFt0LkJPWF9ET1VCTEVfSE9SSVpPTlRBTF9BTkRfRE9VQkxFX0RPV049MjAzXT1cIkJPWF9ET1VCTEVfSE9SSVpPTlRBTF9BTkRfRE9VQkxFX0RPV05cIix0W3QuQk9YX0RPVUJMRV9WRVJUSUNBTF9BTkRfRE9VQkxFX1JJR0hUPTIwNF09XCJCT1hfRE9VQkxFX1ZFUlRJQ0FMX0FORF9ET1VCTEVfUklHSFRcIix0W3QuQk9YX0RPVUJMRV9IT1JJWk9OVEFMPTIwNV09XCJCT1hfRE9VQkxFX0hPUklaT05UQUxcIix0W3QuQk9YX0RPVUJMRV9WRVJUSUNBTF9BTkRfRE9VQkxFX0hPUklaT05UQUw9MjA2XT1cIkJPWF9ET1VCTEVfVkVSVElDQUxfQU5EX0RPVUJMRV9IT1JJWk9OVEFMXCIsdFt0LkJPWF9TSU5HTEVfVVBfQU5EX1NJTkdMRV9MRUZUPTIxN109XCJCT1hfU0lOR0xFX1VQX0FORF9TSU5HTEVfTEVGVFwiLHRbdC5CT1hfU0lOR0xFX0RPV05fQU5EX1NJTkdMRV9SSUdIVD0yMThdPVwiQk9YX1NJTkdMRV9ET1dOX0FORF9TSU5HTEVfUklHSFRcIix0W3QuQkxPQ0tfRlVMTD0yMTldPVwiQkxPQ0tfRlVMTFwiLHRbdC5CTE9DS19CT1RUT01fSEFMRj0yMjBdPVwiQkxPQ0tfQk9UVE9NX0hBTEZcIix0W3QuQkxPQ0tfTEVGVF9IQUxGPTIyMV09XCJCTE9DS19MRUZUX0hBTEZcIix0W3QuQkxPQ0tfUklHSFRfSEFMRj0yMjJdPVwiQkxPQ0tfUklHSFRfSEFMRlwiLHRbdC5CTE9DS19UT1BfSEFMRj0yMjNdPVwiQkxPQ0tfVE9QX0hBTEZcIn0oY3x8KGM9e30pKTtjbGFzcyBLe2NvbnN0cnVjdG9yKHQsaSxlKXt1KHRoaXMsXCJ3aWR0aFwiLHZvaWQgMCksdSh0aGlzLFwiaGVpZ2h0XCIsdm9pZCAwKSx1KHRoaXMsXCJncmlkXCIsdm9pZCAwKSx1KHRoaXMsXCJvcmlnaW5YXCIsdm9pZCAwKSx1KHRoaXMsXCJvcmlnaW5ZXCIsdm9pZCAwKSx1KHRoaXMsXCJtaW5YXCIsdm9pZCAwKSx1KHRoaXMsXCJtYXhYXCIsdm9pZCAwKSx1KHRoaXMsXCJtaW5ZXCIsdm9pZCAwKSx1KHRoaXMsXCJtYXhZXCIsdm9pZCAwKSx1KHRoaXMsXCJyYWRpdXNcIix2b2lkIDApLHRoaXMud2lkdGg9dCx0aGlzLmhlaWdodD1pLHRoaXMuZ3JpZD1bXSx0aGlzLm9yaWdpblg9MCx0aGlzLm9yaWdpblk9MCx0aGlzLm1pblg9MCx0aGlzLm1heFg9MCx0aGlzLm1pblk9MCx0aGlzLm1heFk9MCx0aGlzLnJhZGl1cz0wO2ZvcihsZXQgZT0wO2U8aTtlKyspe2NvbnN0IGk9W107Zm9yKGxldCBzPTA7czx0O3MrKylpLnB1c2gobmV3IEUocyxlKSk7dGhpcy5ncmlkLnB1c2goaSl9aWYodGhpcy5jbGVhcigpLGUpZm9yKGxldCBzPTA7czxpO3MrKylmb3IobGV0IGk9MDtpPHQ7aSsrKXRoaXMuZ3JpZFtzXVtpXS5ibG9ja2VkPXRoaXMuZ3JpZFtzXVtpXS5ibG9ja2VkU2lnaHQ9ZShpLHMpfWNsZWFyKCl7Zm9yKGxldCB0PTA7dDx0aGlzLmhlaWdodDt0KyspZm9yKGxldCBpPTA7aTx0aGlzLndpZHRoO2krKyl0aGlzLmRyYXdDaGFyKGksdCwwKX1nZXRDZWxsKHQsaSl7aWYoISh0PDB8fGk8MHx8dD49dGhpcy53aWR0aHx8aT49dGhpcy5oZWlnaHQpKXJldHVybiB0aGlzLmdyaWRbaV1bdF19Z2V0Q2hhckNvZGUodCxpKXtpZighKHQ8MHx8aTwwfHx0Pj10aGlzLndpZHRofHxpPj10aGlzLmhlaWdodCkpcmV0dXJuIHRoaXMuZ3JpZFtpXVt0XS5jaGFyQ29kZX1kcmF3Q2hhcih0LGksZSxzLHIpe3Q+PTAmJnQ8dGhpcy53aWR0aCYmaT49MCYmaTx0aGlzLmhlaWdodCYmdGhpcy5ncmlkWzB8aV1bMHx0XS5zZXRWYWx1ZShlLHMscil9ZHJhd1N0cmluZyh0LGksZSxzLHIpe2NvbnN0IGg9ZS5zcGxpdChcIlxcblwiKTtmb3IobGV0IGU9MDtlPGgubGVuZ3RoO2UrKyl7Y29uc3Qgbz1oW2VdO2ZvcihsZXQgaD0wO2g8by5sZW5ndGg7aCsrKXRoaXMuZHJhd0NoYXIodCtoLGkrZSxvLmNoYXJDb2RlQXQoaCkscyxyKX19ZHJhd0NlbnRlcmVkU3RyaW5nKHQsaSxlLHMscil7dGhpcy5kcmF3U3RyaW5nKHQtTWF0aC5mbG9vcihlLmxlbmd0aC8yKSxpLGUscyxyKX1kcmF3SExpbmUodCxpLGUscyxyLGgpe2ZvcihsZXQgbz10O288dCtlO28rKyl0aGlzLmRyYXdDaGFyKG8saSxzLHIsaCl9ZHJhd1ZMaW5lKHQsaSxlLHMscixoKXtmb3IobGV0IG89aTtvPGkrZTtvKyspdGhpcy5kcmF3Q2hhcih0LG8scyxyLGgpfWRyYXdSZWN0KHQsaSxlLHMscixoLG8pe3RoaXMuZHJhd0hMaW5lKHQsaSxlLHIsaCxvKSx0aGlzLmRyYXdITGluZSh0LGkrcy0xLGUscixoLG8pLHRoaXMuZHJhd1ZMaW5lKHQsaSxzLHIsaCxvKSx0aGlzLmRyYXdWTGluZSh0K2UtMSxpLHMscixoLG8pfWRyYXdCb3godCxpLGUscyxyLGgsbyxuLF8sYSxkLEEsbCxFKXt0aGlzLmZpbGxSZWN0KHQsaSxlLHMsMCxsLEUpLHRoaXMuZHJhd0hMaW5lKHQsaSxlLHIpLHRoaXMuZHJhd0hMaW5lKHQsaStzLTEsZSxvKSx0aGlzLmRyYXdWTGluZSh0LGkscyxuKSx0aGlzLmRyYXdWTGluZSh0K2UtMSxpLHMsaCksdGhpcy5kcmF3Q2hhcih0LGksXyksdGhpcy5kcmF3Q2hhcih0K2UtMSxpLGEpLHRoaXMuZHJhd0NoYXIodCxpK3MtMSxBKSx0aGlzLmRyYXdDaGFyKHQrZS0xLGkrcy0xLGQpfWRyYXdTaW5nbGVCb3godCxpLGUscyxyLGgpe3RoaXMuZHJhd0JveCh0LGksZSxzLGMuQk9YX1NJTkdMRV9IT1JJWk9OVEFMLGMuQk9YX1NJTkdMRV9WRVJUSUNBTCxjLkJPWF9TSU5HTEVfSE9SSVpPTlRBTCxjLkJPWF9TSU5HTEVfVkVSVElDQUwsYy5CT1hfU0lOR0xFX0RPV05fQU5EX1NJTkdMRV9SSUdIVCxjLkJPWF9TSU5HTEVfRE9XTl9BTkRfU0lOR0xFX0xFRlQsYy5CT1hfU0lOR0xFX1VQX0FORF9TSU5HTEVfTEVGVCxjLkJPWF9TSU5HTEVfVVBfQU5EX1NJTkdMRV9SSUdIVCxyLGgpfWRyYXdEb3VibGVCb3godCxpLGUscyxyLGgpe3RoaXMuZHJhd0JveCh0LGksZSxzLGMuQk9YX0RPVUJMRV9IT1JJWk9OVEFMLGMuQk9YX0RPVUJMRV9WRVJUSUNBTCxjLkJPWF9ET1VCTEVfSE9SSVpPTlRBTCxjLkJPWF9ET1VCTEVfVkVSVElDQUwsYy5CT1hfRE9VQkxFX0RPV05fQU5EX0RPVUJMRV9SSUdIVCxjLkJPWF9ET1VCTEVfRE9XTl9BTkRfRE9VQkxFX0xFRlQsYy5CT1hfRE9VQkxFX1VQX0FORF9ET1VCTEVfTEVGVCxjLkJPWF9ET1VCTEVfVVBfQU5EX0RPVUJMRV9SSUdIVCxyLGgpfWZpbGxSZWN0KHQsaSxlLHMscixoLG8pe2ZvcihsZXQgbj1pO248aStzO24rKyl0aGlzLmRyYXdITGluZSh0LG4sZSxyLGgsbyl9ZHJhd0NvbnNvbGUodCxpLGUscixoLG8sbixfKXtfPV98fHMuTm9uZTtmb3IobGV0IHM9MDtzPG47cysrKWZvcihsZXQgbj0wO248bztuKyspe2NvbnN0IG89ZS5nZXRDZWxsKHIrbixoK3MpO28mJnRoaXMuZHJhd0NlbGwodCtuLGkrcyxvLF8pfX1kcmF3Q2VsbCh0LGksZSxzKXt0Pj0wJiZ0PHRoaXMud2lkdGgmJmk+PTAmJmk8dGhpcy5oZWlnaHQmJnRoaXMuZ3JpZFtpXVt0XS5kcmF3Q2VsbChlLHMpfXNldEJsb2NrZWQodCxpLGUpe3Q+PTAmJnQ8dGhpcy53aWR0aCYmaT49MCYmaTx0aGlzLmhlaWdodCYmKHRoaXMuZ3JpZFtpXVt0XS5ibG9ja2VkPWUpfXNldEJsb2NrZWRTaWdodCh0LGksZSl7dD49MCYmdDx0aGlzLndpZHRoJiZpPj0wJiZpPHRoaXMuaGVpZ2h0JiYodGhpcy5ncmlkW2ldW3RdLmJsb2NrZWRTaWdodD1lKX1pc1Zpc2libGUodCxpKXtyZXR1cm4hKHQ8dGhpcy5taW5YfHx0PnRoaXMubWF4WHx8aTx0aGlzLm1pbll8fGk+dGhpcy5tYXhZKSYmdGhpcy5ncmlkW2ldW3RdLnZpc2libGV9aXNCbG9ja2VkKHQsaSl7cmV0dXJuIHQ8MHx8dD50aGlzLndpZHRofHxpPDB8fGk+dGhpcy5oZWlnaHR8fHRoaXMuZ3JpZFtpXVt0XS5ibG9ja2VkfWlzQmxvY2tlZFNpZ2h0KHQsaSl7cmV0dXJuIHQ8MHx8dD50aGlzLndpZHRofHxpPDB8fGk+dGhpcy5oZWlnaHR8fHRoaXMuZ3JpZFtpXVt0XS5ibG9ja2VkU2lnaHR9Y29tcHV0ZU9jdGFudFkodCxpKXtjb25zdCBlPVtdLHM9W107bGV0IHIsaCxvLG4sXyxhLGQsQSxsLEUsYz0xLHU9MCxLPTAsVD0wO2ZvcihoPXRoaXMub3JpZ2luWStpO2g+PXRoaXMubWluWSYmaDw9dGhpcy5tYXhZO2grPWksSz11LCsrYylmb3Iobz0uNS9jLEU9LTEsbj1NYXRoLmZsb29yKFQqYysuNSkscj10aGlzLm9yaWdpblgrbip0O248PWMmJnI+PXRoaXMubWluWCYmcjw9dGhpcy5tYXhYO3IrPXQsKytuLEU9bCl7aWYoXz0hMCxhPSExLGQ9bi9jLEE9RSxsPWQrbyxLPjApaWYodGhpcy5ncmlkW2gtaV1bcl0udmlzaWJsZSYmIXRoaXMuZ3JpZFtoLWldW3JdLmJsb2NrZWRTaWdodHx8dGhpcy5ncmlkW2gtaV1bci10XS52aXNpYmxlJiYhdGhpcy5ncmlkW2gtaV1bci10XS5ibG9ja2VkU2lnaHQpe2ZvcihsZXQgdD0wO3Q8SyYmXzsrK3QpaWYoQTw9c1t0XSYmbD49ZVt0XSlpZih0aGlzLmdyaWRbaF1bcl0uYmxvY2tlZFNpZ2h0KXtpZihBPj1lW3RdJiZsPD1zW3RdKXtfPSExO2JyZWFrfWVbdF09TWF0aC5taW4oZVt0XSxBKSxzW3RdPU1hdGgubWF4KHNbdF0sbCksYT0hMH1lbHNlIGlmKGQ+ZVt0XSYmZDxzW3RdKXtfPSExO2JyZWFrfX1lbHNlIF89ITE7XyYmKHRoaXMuZ3JpZFtoXVtyXS52aXNpYmxlPSEwLHRoaXMuZ3JpZFtoXVtyXS5ibG9ja2VkU2lnaHQmJihUPj1BP1Q9bDphfHwoZVt1XT1BLHNbdSsrXT1sKSkpfX1jb21wdXRlT2N0YW50WCh0LGkpe2NvbnN0IGU9W10scz1bXTtsZXQgcixoLG8sbixfLGEsZCxBLGwsRSxjPTEsdT0wLEs9MCxUPTA7Zm9yKHI9dGhpcy5vcmlnaW5YK3Q7cj49dGhpcy5taW5YJiZyPD10aGlzLm1heFg7cis9dCxLPXUsKytjKWZvcihvPS41L2MsRT0tMSxuPU1hdGguZmxvb3IoVCpjKy41KSxoPXRoaXMub3JpZ2luWStuKmk7bjw9YyYmaD49dGhpcy5taW5ZJiZoPD10aGlzLm1heFk7aCs9aSwrK24sRT1sKXtpZihfPSEwLGE9ITEsZD1uL2MsQT1FLGw9ZCtvLEs+MClpZih0aGlzLmdyaWRbaF1bci10XS52aXNpYmxlJiYhdGhpcy5ncmlkW2hdW3ItdF0uYmxvY2tlZFNpZ2h0fHx0aGlzLmdyaWRbaC1pXVtyLXRdLnZpc2libGUmJiF0aGlzLmdyaWRbaC1pXVtyLXRdLmJsb2NrZWRTaWdodCl7Zm9yKGxldCB0PTA7dDxLJiZfOysrdClpZihBPD1zW3RdJiZsPj1lW3RdKWlmKHRoaXMuZ3JpZFtoXVtyXS5ibG9ja2VkU2lnaHQpe2lmKEE+PWVbdF0mJmw8PXNbdF0pe189ITE7YnJlYWt9ZVt0XT1NYXRoLm1pbihlW3RdLEEpLHNbdF09TWF0aC5tYXgoc1t0XSxsKSxhPSEwfWVsc2UgaWYoZD5lW3RdJiZkPHNbdF0pe189ITE7YnJlYWt9fWVsc2UgXz0hMTtfJiYodGhpcy5ncmlkW2hdW3JdLnZpc2libGU9ITAsdGhpcy5ncmlkW2hdW3JdLmJsb2NrZWRTaWdodCYmKFQ+PUE/VD1sOmF8fChlW3VdPUEsc1t1KytdPWwpKSl9fWNvbXB1dGVGb3YodCxpLGUscyxyKXtpZih0aGlzLm9yaWdpblg9dCx0aGlzLm9yaWdpblk9aSx0aGlzLnJhZGl1cz1lLHMpdGhpcy5taW5YPU1hdGgubWluKHRoaXMubWluWCxNYXRoLm1heCgwLHQtZSkpLHRoaXMubWluWT1NYXRoLm1pbih0aGlzLm1pblksTWF0aC5tYXgoMCxpLWUpKSx0aGlzLm1heFg9TWF0aC5tYXgodGhpcy5tYXhYLE1hdGgubWluKHRoaXMud2lkdGgtMSx0K2UpKSx0aGlzLm1heFk9TWF0aC5tYXgodGhpcy5tYXhZLE1hdGgubWluKHRoaXMuaGVpZ2h0LTEsaStlKSk7ZWxzZXt0aGlzLm1pblg9TWF0aC5tYXgoMCx0LWUpLHRoaXMubWluWT1NYXRoLm1heCgwLGktZSksdGhpcy5tYXhYPU1hdGgubWluKHRoaXMud2lkdGgtMSx0K2UpLHRoaXMubWF4WT1NYXRoLm1pbih0aGlzLmhlaWdodC0xLGkrZSk7Zm9yKGxldCB0PXRoaXMubWluWTt0PD10aGlzLm1heFk7dCsrKWZvcihsZXQgaT10aGlzLm1pblg7aTw9dGhpcy5tYXhYO2krKyl0aGlzLmdyaWRbdF1baV0udmlzaWJsZT0hMX10aGlzLmdyaWRbaV1bdF0udmlzaWJsZT0hMCx2b2lkIDA9PT1yPyh0aGlzLmNvbXB1dGVPY3RhbnRZKDEsMSksdGhpcy5jb21wdXRlT2N0YW50WCgxLDEpLHRoaXMuY29tcHV0ZU9jdGFudFgoMSwtMSksdGhpcy5jb21wdXRlT2N0YW50WSgxLC0xKSx0aGlzLmNvbXB1dGVPY3RhbnRZKC0xLC0xKSx0aGlzLmNvbXB1dGVPY3RhbnRYKC0xLC0xKSx0aGlzLmNvbXB1dGVPY3RhbnRYKC0xLDEpLHRoaXMuY29tcHV0ZU9jdGFudFkoLTEsMSkpOigxJnImJnRoaXMuY29tcHV0ZU9jdGFudFkoMSwxKSwyJnImJnRoaXMuY29tcHV0ZU9jdGFudFgoMSwxKSw0JnImJnRoaXMuY29tcHV0ZU9jdGFudFgoMSwtMSksOCZyJiZ0aGlzLmNvbXB1dGVPY3RhbnRZKDEsLTEpLDE2JnImJnRoaXMuY29tcHV0ZU9jdGFudFkoLTEsLTEpLDMyJnImJnRoaXMuY29tcHV0ZU9jdGFudFgoLTEsLTEpLDY0JnImJnRoaXMuY29tcHV0ZU9jdGFudFgoLTEsMSksMTI4JnImJnRoaXMuY29tcHV0ZU9jdGFudFkoLTEsMSkpfXVwZGF0ZUV4cGxvcmVkKCl7Zm9yKGxldCB0PXRoaXMubWluWTt0PD10aGlzLm1heFk7dCsrKWZvcihsZXQgaT10aGlzLm1pblg7aTw9dGhpcy5tYXhYO2krKyl7Y29uc3QgZT10aGlzLmdyaWRbdF1baV07ZS5leHBsb3JlZD1lLmV4cGxvcmVkfHxlLnZpc2libGV9fX1mdW5jdGlvbiBUKHQsaSxlKXtyZXR1cm4gaSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse3ZhbHVlOmUsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2ldPWUsdH1jbGFzcyBPe2NvbnN0cnVjdG9yKHQsaSxlLHMscil7VCh0aGlzLFwidXJsXCIsdm9pZCAwKSxUKHRoaXMsXCJjaGFyV2lkdGhcIix2b2lkIDApLFQodGhpcyxcImNoYXJIZWlnaHRcIix2b2lkIDApLFQodGhpcyxcInNjYWxlXCIsdm9pZCAwKSxUKHRoaXMsXCJncmFwaGljYWxcIix2b2lkIDApLHRoaXMudXJsPXQsdGhpcy5jaGFyV2lkdGg9aSx0aGlzLmNoYXJIZWlnaHQ9ZSx0aGlzLnNjYWxlPXN8fDEsdGhpcy5ncmFwaGljYWw9ISFyfX1jb25zdCBWPW5ldyBPKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUNBQVFNQUFBRDU4UE9JQUFBQUJsQk1WRVVBQUFELy8vK2wyWi9kQUFBRWhrbEVRVlJJeDQyU3Y0b1VRUkRHQzRVemFkU3d3TVVEOFFFS2xiV0Q0UTU4Qi9OR3BUVm9jS08xd1hIVXpNQUgwQWN3TVRZVkdnNWFnMEl6RVhhUmpkWkVaS056a0tiSHF0bnpIeXBZMDlNOSs1dXZxcjdwYllDdUM2ZnRhUmhnT05YczMwZUFoME8xcllEbTRJUy9lSDBCOEd4UlcydnhvMzk2eXUvZmIwWkZyVzF6Y09YbFBVL1hQd0s4UEdqYldoVndNNEtuSDYxOTEyb0s0K3ptbUhKYVFvdHl0MWt2dEMyQXRkbzI0aW9oUERpRy92NGVJQ0pzWTNXeThZdnIwRFNJQk9keGdINnY4d3NyaVdoYzhzMEF0YUsvR3pTbDFqUjBuU2pRbndraTZGUXhORktqZ3pPMmE3QkJxdWNIN2RMNE05ejk2Q0loVDFGcy9BZ0tnY0E2ZEtDeEkyOURhSE53Uko0RUdBVTFzVTBPRzlybUU0U0ljM0E0RkNoQUNxcWhKUndweGtxaDl3eGFnNERTbUVKNUR0cEZ3QVA0R1VmNmxtS2NGRnRpMUJZdVFwNHhOOGt4TTJrTmhqZGtUT2lUVWVBS0d2aEExckxwTWJZQUNRekNJVGxURFJNYkxZb0VhMkpXUFNNUkZaSXVwY1N6TVZLY0VVa1grc09HK0NoTlgydkQ4ZXg2azdPRkhMMFAxNjU1SnVQZDUzV0FEK3lUdjNVckNRaXVIbVlCYmZJeHBrSW11dnBCUUJrVmI1ZzRYSHYzSmtOaXJlRzhBTzl6RGhCWnUyejJPTVoxMVM1L1JJbHlNZWZNTmFaNEdzQ3o1eGNqeU02aEhZRWpBWUVmTzhJZzFya2xBZTlzUkllWUFkd3lvSUJxNllJekNBS2lXb2lmQTNtM28yQXpXY2RZS09kWTQ3RUlmOFFBQkN1WWdJVVZtZFZNRVlFREEwSG1vLzNENktLSmJoNW14aFAzVXNXSUU5N3duRXlneWl6T2ZPTGkySk9KVzhDZU9ibFc5SUhlS1pndjR6eHV6RHJ5T21iKzRhUUgrTVhWNmUweXdkVWN4cUNqQldsNUdwYnpaZHVPRzFRRWlHWFA4NlQ3RWZpSmZrTVE0T080SDB5cXlOQzJ6bHppV0VON1l3dWMyZlE0cDVCTmtTNVFZWFAyaDVOdFJKaDB2Q0tRaWR0VkptQ0dBd0RTU1FwWWdnU3hpUkl5emV3c2dDaDR4eGlUUERNaDVhai8vbDdidHFrcjZyUXlJT3RMamk0bFZSUXdYZHp2dXM0MFk1M00zM2ZoNTBHWndGNEV4UWVNbHZ1VGdnTHpTaTRFbEtjelVPN3pWdHB3ZHlNS2RxWktPV2IybkRibGF3UHhQbXVNd0ZFV0JXK2psWlIxZVl0UzQ0MmtpQkdNV0NpL2gxLytHQVI2TllPSldpcU5KWEZ5Z0Z0cmt4NUMwTzNJZUZHczY3SGhFRWhtQnUvQlVPVCswNTUxcFh4WUlGK0VscGk1QUtSa0xsNUdVYkNDWmRkeU12NjIxdWpFQlBQNHZTeTJmb3RUeDNVK2QzV0JpRk9BNlZTR1NCNDl2L003R0JYOUZQckRhVDJjOXFyNFBDcHdaN3F6ODEzUjk0ZFZGSWUxOXYzM0dsTVpVZ2hRRmI4QnJmRTdRQm1nQk1icm4yQjNlbm4veTNCNStETDhVQkFkbmVqZFlkQnhlVjllandvWU5UZ1cwT2svZ0E3VUcyR0F6YW5oTDBERzdxNHN2eW53RjhVd0RQdTd1L3ZEMEl1ZHpTbHRNdFZiUCtKL2dVYlIyOW9KN0ZnOXM2VXkrRG5waVRDT1ljNGNYT2VYTVdmc3VzU3c3Rk9nOXg2NTVuYXg2QmxlY3dwT1FRNjhXQndwK0gyTE1RVHVPcTJSVWlnemgyUS9SM0NXQVJKSUpHMTk5RXdPVHlLQmxRTXpuc2hDUkdlUTVnSEFCQVFsNk00Z0xFZEF6VmFCV01DaUFOZHNheURDSEJBL2hhZ0tZZmllbHJKSWxpcEtLUUlBOU5mM3dCbG9USFQ2QnVBeDE1elJOYTFuQUFBQUFFbEZUa1N1UW1DQ1wiLDgsOCk7bGV0IGcsTjtmdW5jdGlvbiBMKHQsaSl7cmV0dXJuIHQ+MD9pPjA/Ti5RVUFEUkFOVF9TT1VUSEVBU1Q6MD09PWk/Ti5RVUFEUkFOVF9FQVNUOk4uUVVBRFJBTlRfTk9SVEhFQVNUOnQ8MD9pPjA/Ti5RVUFEUkFOVF9TT1VUSFdFU1Q6MD09PWk/Ti5RVUFEUkFOVF9XRVNUOk4uUVVBRFJBTlRfTk9SVEhXRVNUOmk+MD9OLlFVQURSQU5UX1NPVVRIOk4uUVVBRFJBTlRfTk9SVEh9ZnVuY3Rpb24gZih0LGksZSl7cmV0dXJuIGkgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxpLHt2YWx1ZTplLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtpXT1lLHR9IWZ1bmN0aW9uKHQpe3RbdC5PQ1RBTlRfU09VVEhfU09VVEhFQVNUPTFdPVwiT0NUQU5UX1NPVVRIX1NPVVRIRUFTVFwiLHRbdC5PQ1RBTlRfRUFTVF9TT1VUSEVBU1Q9Ml09XCJPQ1RBTlRfRUFTVF9TT1VUSEVBU1RcIix0W3QuT0NUQU5UX0VBU1RfTk9SVEhUSEVBU1Q9NF09XCJPQ1RBTlRfRUFTVF9OT1JUSFRIRUFTVFwiLHRbdC5PQ1RBTlRfTk9SVEhfTk9SVEhFQVNUPThdPVwiT0NUQU5UX05PUlRIX05PUlRIRUFTVFwiLHRbdC5PQ1RBTlRfTk9SVEhfTk9SVEhXRVNUPTE2XT1cIk9DVEFOVF9OT1JUSF9OT1JUSFdFU1RcIix0W3QuT0NUQU5UX1dFU1RfTk9SVEhFQVNUPTMyXT1cIk9DVEFOVF9XRVNUX05PUlRIRUFTVFwiLHRbdC5PQ1RBTlRfV0VTVF9TT1VUSFdFU1Q9NjRdPVwiT0NUQU5UX1dFU1RfU09VVEhXRVNUXCIsdFt0Lk9DVEFOVF9TT1VUSF9TT1VUSFdFU1Q9MTI4XT1cIk9DVEFOVF9TT1VUSF9TT1VUSFdFU1RcIn0oZ3x8KGc9e30pKSxmdW5jdGlvbih0KXt0W3QuUVVBRFJBTlRfU09VVEhFQVNUPTNdPVwiUVVBRFJBTlRfU09VVEhFQVNUXCIsdFt0LlFVQURSQU5UX0VBU1Q9Nl09XCJRVUFEUkFOVF9FQVNUXCIsdFt0LlFVQURSQU5UX05PUlRIRUFTVD0xMl09XCJRVUFEUkFOVF9OT1JUSEVBU1RcIix0W3QuUVVBRFJBTlRfTk9SVEg9MjRdPVwiUVVBRFJBTlRfTk9SVEhcIix0W3QuUVVBRFJBTlRfTk9SVEhXRVNUPTQ4XT1cIlFVQURSQU5UX05PUlRIV0VTVFwiLHRbdC5RVUFEUkFOVF9XRVNUPTk2XT1cIlFVQURSQU5UX1dFU1RcIix0W3QuUVVBRFJBTlRfU09VVEhXRVNUPTE5Ml09XCJRVUFEUkFOVF9TT1VUSFdFU1RcIix0W3QuUVVBRFJBTlRfU09VVEg9MTI5XT1cIlFVQURSQU5UX1NPVVRIXCJ9KE58fChOPXt9KSk7Y2xhc3MgUntjb25zdHJ1Y3Rvcih0LGkpe2YodGhpcyxcInhcIix2b2lkIDApLGYodGhpcyxcInlcIix2b2lkIDApLHRoaXMueD10LHRoaXMueT1pfX1mdW5jdGlvbiBEKHQsaSxlKXtyZXR1cm4gaSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse3ZhbHVlOmUsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2ldPWUsdH1jbGFzcyBDe2NvbnN0cnVjdG9yKHQsaSxlLHMpe0QodGhpcyxcInhcIix2b2lkIDApLEQodGhpcyxcInlcIix2b2lkIDApLEQodGhpcyxcIndpZHRoXCIsdm9pZCAwKSxEKHRoaXMsXCJoZWlnaHRcIix2b2lkIDApLEQodGhpcyxcImxlZnRcIix2b2lkIDApLEQodGhpcyxcInRvcFwiLHZvaWQgMCksRCh0aGlzLFwieDJcIix2b2lkIDApLEQodGhpcyxcInkyXCIsdm9pZCAwKSx0aGlzLng9dGhpcy5sZWZ0PXQsdGhpcy55PXRoaXMudG9wPWksdGhpcy53aWR0aD1lLHRoaXMuaGVpZ2h0PXMsdGhpcy54Mj10K2UsdGhpcy55Mj1pK3N9Z2V0Q2VudGVyKCl7cmV0dXJuIG5ldyBSKHRoaXMueCt0aGlzLndpZHRoLzJ8MCx0aGlzLnkrdGhpcy5oZWlnaHQvMnwwKX1pbnRlcnNlY3RzKHQpe3JldHVybiB0aGlzLng8PXQueDImJnRoaXMueDI+PXQueCYmdGhpcy55PD10LnkyJiZ0aGlzLnkyPj10Lnl9Y29udGFpbnModCl7cmV0dXJuIHQueD49dGhpcy54JiZ0Lng8dGhpcy54MiYmdC55Pj10aGlzLnkmJnQueTx0aGlzLnkyfX1mdW5jdGlvbiBVKHQsaSxlKXtyZXR1cm4gaSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse3ZhbHVlOmUsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2ldPWUsdH1jbGFzcyBTe2NvbnN0cnVjdG9yKHQsaSxlKXtVKHRoaXMsXCJkaWFsb2dcIix2b2lkIDApLFUodGhpcyxcInJlY3RcIix2b2lkIDApLFUodGhpcyxcImNvbnRlbnRzT2Zmc2V0XCIsdm9pZCAwKSxVKHRoaXMsXCJvcGVuXCIsdm9pZCAwKSxVKHRoaXMsXCJjb3VudFwiLHZvaWQgMCksVSh0aGlzLFwiYnVmZmVyXCIsdm9pZCAwKSx0aGlzLmRpYWxvZz10LHRoaXMucmVjdD1pLHRoaXMuY29udGVudHNPZmZzZXQ9ZSx0aGlzLm9wZW49ITEsdGhpcy5jb3VudD0wfX1jbGFzcyB2e2dldFN0YXRlKHQsaSl7Y29uc3QgZT1pLmNvbnRlbnRzUmVjdC53aWR0aCs0LHM9aS5jb250ZW50c1JlY3QuaGVpZ2h0KzQscj0odC53aWR0aC1lKS8yfDAsaD0odC5oZWlnaHQtcykvMnwwO3JldHVybiBuZXcgUyhpLG5ldyBDKHIsaCxlLHMpLG5ldyBSKHIrMixoKzIpKX1kcmF3KHQsaSl7Y29uc3QgZT1pLmRpYWxvZyx7eDpzLHk6cix3aWR0aDpoLGhlaWdodDpvfT1pLnJlY3Q7dC5maWxsUmVjdChzLHIsaCxvLDAsQS5XSElURSxBLkJMQUNLKSx0LmRyYXdTaW5nbGVCb3gocyxyLGgsbyksdC5kcmF3Q2VudGVyZWRTdHJpbmcocytoLzJ8MCxyLFwiIFwiK2UudGl0bGUrXCIgXCIpLGUuZHJhd0NvbnRlbnRzKHQsaS5jb250ZW50c09mZnNldCl9fWZ1bmN0aW9uIEIodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fWNsYXNzIEl7Y29uc3RydWN0b3IodCxpKXtCKHRoaXMsXCJ0ZXJtaW5hbFwiLHZvaWQgMCksQih0aGlzLFwicmVuZGVyZXJcIix2b2lkIDApLEIodGhpcyxcImRpYWxvZ3NcIix2b2lkIDApLHRoaXMudGVybWluYWw9dCx0aGlzLnJlbmRlcmVyPWl8fG5ldyB2LHRoaXMuZGlhbG9ncz1bXX1hZGQodCl7dGhpcy5kaWFsb2dzLnB1c2godGhpcy5yZW5kZXJlci5nZXRTdGF0ZSh0aGlzLnRlcm1pbmFsLHQpKX1oYW5kbGVJbnB1dCgpe2lmKDA9PT10aGlzLmRpYWxvZ3MubGVuZ3RoKXJldHVybiExO2NvbnN0IHQ9dGhpcy5kaWFsb2dzLmxlbmd0aC0xLGk9dGhpcy5kaWFsb2dzW3RoaXMuZGlhbG9ncy5sZW5ndGgtMV07cmV0dXJuIGkuZGlhbG9nLmhhbmRsZUlucHV0KHRoaXMudGVybWluYWwsaS5jb250ZW50c09mZnNldCkmJnRoaXMuZGlhbG9ncy5zcGxpY2UodCwxKSwhMH1kcmF3KCl7Zm9yKGxldCB0PTA7dDx0aGlzLmRpYWxvZ3MubGVuZ3RoO3QrKyl0aGlzLnJlbmRlcmVyLmRyYXcodGhpcy50ZXJtaW5hbCx0aGlzLmRpYWxvZ3NbdF0pfX1mdW5jdGlvbiBwKHQsaSxlKXtyZXR1cm4gaSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse3ZhbHVlOmUsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2ldPWUsdH1jbGFzcyBie2NvbnN0cnVjdG9yKHQsaSl7cCh0aGlzLFwiY29udGVudHNSZWN0XCIsdm9pZCAwKSxwKHRoaXMsXCJ0aXRsZVwiLHZvaWQgMCksdGhpcy5jb250ZW50c1JlY3Q9dCx0aGlzLnRpdGxlPWl9fWZ1bmN0aW9uIHcodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fWNsYXNzIHl7Y29uc3RydWN0b3IoKXt3KHRoaXMsXCJkb3duXCIsdm9pZCAwKSx3KHRoaXMsXCJkb3duVGltZVwiLHZvaWQgMCksdyh0aGlzLFwicmVwZWF0XCIsdm9pZCAwKSx3KHRoaXMsXCJyZXBlYXRUaW1lXCIsdm9pZCAwKSx3KHRoaXMsXCJkb3duQ291bnRcIix2b2lkIDApLHcodGhpcyxcInVwQ291bnRcIix2b2lkIDApLHRoaXMuZG93bj0hMSx0aGlzLmRvd25UaW1lPTAsdGhpcy5yZXBlYXQ9ITEsdGhpcy5yZXBlYXRUaW1lPTAsdGhpcy5kb3duQ291bnQ9MCx0aGlzLnVwQ291bnQ9MTAwfXNldERvd24odCl7dGhpcy5kb3duIT09dCYmKHRoaXMuZG93bj10LHRoaXMucmVwZWF0PSExLHRoaXMuZG93blRpbWU9dGhpcy5yZXBlYXRUaW1lPXBlcmZvcm1hbmNlLm5vdygpKX11cGRhdGUodCl7dGhpcy5yZXBlYXQ9ITEsdGhpcy5kb3duPyh0aGlzLmRvd25Db3VudCsrLHRoaXMudXBDb3VudD0wLHQtdGhpcy5kb3duVGltZT49MjAwJiZ0LXRoaXMucmVwZWF0VGltZT49NjYuNjY2NjY2NjY2NjY2NjcmJih0aGlzLnJlcGVhdD0hMCx0aGlzLnJlcGVhdFRpbWU9dCkpOih0aGlzLmRvd25Db3VudD0wLHRoaXMudXBDb3VudCsrKX1pc1ByZXNzZWQoKXtyZXR1cm4gMT09PXRoaXMuZG93bkNvdW50fHx0aGlzLnJlcGVhdH1pc0NsaWNrZWQoKXtyZXR1cm4gMT09PXRoaXMudXBDb3VudH19Y29uc3QgbT0yNTY7Y2xhc3MgeHtjb25zdHJ1Y3Rvcih0KXt2YXIgaSxlLHM7cz12b2lkIDAsKGU9XCJrZXlzXCIpaW4oaT10aGlzKT9PYmplY3QuZGVmaW5lUHJvcGVydHkoaSxlLHt2YWx1ZTpzLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6aVtlXT1zLHRoaXMua2V5cz1uZXcgQXJyYXkobSk7Zm9yKGxldCB0PTA7dDxtO3QrKyl0aGlzLmtleXNbdF09bmV3IHk7dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCh0PT50aGlzLnNldEtleSh0LCEwKSkpLHQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsKHQ9PnRoaXMuc2V0S2V5KHQsITEpKSl9c2V0S2V5KHQsaSl7Y29uc3QgZT10LmtleUNvZGU7ZSE9PVAuVktfRjExJiYodC5zdG9wUHJvcGFnYXRpb24oKSx0LnByZXZlbnREZWZhdWx0KCksZT49MCYmZTxtJiZ0aGlzLmtleXNbZV0uc2V0RG93bihpKSl9dXBkYXRlS2V5cyh0KXtmb3IobGV0IGk9MDtpPG07aSsrKXRoaXMua2V5c1tpXS51cGRhdGUodCl9Z2V0S2V5KHQpe3JldHVybiB0Pj0wJiZ0PG0/dGhpcy5rZXlzW3RdOm51bGx9fWxldCBQOyFmdW5jdGlvbih0KXt0W3QuVktfQ0FOQ0VMPTNdPVwiVktfQ0FOQ0VMXCIsdFt0LlZLX0hFTFA9Nl09XCJWS19IRUxQXCIsdFt0LlZLX0JBQ0tfU1BBQ0U9OF09XCJWS19CQUNLX1NQQUNFXCIsdFt0LlZLX1RBQj05XT1cIlZLX1RBQlwiLHRbdC5WS19DTEVBUj0xMl09XCJWS19DTEVBUlwiLHRbdC5WS19FTlRFUj0xM109XCJWS19FTlRFUlwiLHRbdC5WS19TSElGVD0xNl09XCJWS19TSElGVFwiLHRbdC5WS19DT05UUk9MPTE3XT1cIlZLX0NPTlRST0xcIix0W3QuVktfQUxUPTE4XT1cIlZLX0FMVFwiLHRbdC5WS19QQVVTRT0xOV09XCJWS19QQVVTRVwiLHRbdC5WS19DQVBTX0xPQ0s9MjBdPVwiVktfQ0FQU19MT0NLXCIsdFt0LlZLX0VTQ0FQRT0yN109XCJWS19FU0NBUEVcIix0W3QuVktfU1BBQ0U9MzJdPVwiVktfU1BBQ0VcIix0W3QuVktfUEFHRV9VUD0zM109XCJWS19QQUdFX1VQXCIsdFt0LlZLX1BBR0VfRE9XTj0zNF09XCJWS19QQUdFX0RPV05cIix0W3QuVktfRU5EPTM1XT1cIlZLX0VORFwiLHRbdC5WS19IT01FPTM2XT1cIlZLX0hPTUVcIix0W3QuVktfTEVGVD0zN109XCJWS19MRUZUXCIsdFt0LlZLX1VQPTM4XT1cIlZLX1VQXCIsdFt0LlZLX1JJR0hUPTM5XT1cIlZLX1JJR0hUXCIsdFt0LlZLX0RPV049NDBdPVwiVktfRE9XTlwiLHRbdC5WS19QUklOVFNDUkVFTj00NF09XCJWS19QUklOVFNDUkVFTlwiLHRbdC5WS19JTlNFUlQ9NDVdPVwiVktfSU5TRVJUXCIsdFt0LlZLX0RFTEVURT00Nl09XCJWS19ERUxFVEVcIix0W3QuVktfMD00OF09XCJWS18wXCIsdFt0LlZLXzE9NDldPVwiVktfMVwiLHRbdC5WS18yPTUwXT1cIlZLXzJcIix0W3QuVktfMz01MV09XCJWS18zXCIsdFt0LlZLXzQ9NTJdPVwiVktfNFwiLHRbdC5WS181PTUzXT1cIlZLXzVcIix0W3QuVktfNj01NF09XCJWS182XCIsdFt0LlZLXzc9NTVdPVwiVktfN1wiLHRbdC5WS184PTU2XT1cIlZLXzhcIix0W3QuVktfOT01N109XCJWS185XCIsdFt0LlZLX0NPTE9OPTU4XT1cIlZLX0NPTE9OXCIsdFt0LlZLX1NFTUlDT0xPTj01OV09XCJWS19TRU1JQ09MT05cIix0W3QuVktfTEVTU19USEFOPTYwXT1cIlZLX0xFU1NfVEhBTlwiLHRbdC5WS19FUVVBTFM9NjFdPVwiVktfRVFVQUxTXCIsdFt0LlZLX0dSRUFURVJfVEhBTj02Ml09XCJWS19HUkVBVEVSX1RIQU5cIix0W3QuVktfUVVFU1RJT05fTUFSSz02M109XCJWS19RVUVTVElPTl9NQVJLXCIsdFt0LlZLX0FUPTY0XT1cIlZLX0FUXCIsdFt0LlZLX0E9NjVdPVwiVktfQVwiLHRbdC5WS19CPTY2XT1cIlZLX0JcIix0W3QuVktfQz02N109XCJWS19DXCIsdFt0LlZLX0Q9NjhdPVwiVktfRFwiLHRbdC5WS19FPTY5XT1cIlZLX0VcIix0W3QuVktfRj03MF09XCJWS19GXCIsdFt0LlZLX0c9NzFdPVwiVktfR1wiLHRbdC5WS19IPTcyXT1cIlZLX0hcIix0W3QuVktfST03M109XCJWS19JXCIsdFt0LlZLX0o9NzRdPVwiVktfSlwiLHRbdC5WS19LPTc1XT1cIlZLX0tcIix0W3QuVktfTD03Nl09XCJWS19MXCIsdFt0LlZLX009NzddPVwiVktfTVwiLHRbdC5WS19OPTc4XT1cIlZLX05cIix0W3QuVktfTz03OV09XCJWS19PXCIsdFt0LlZLX1A9ODBdPVwiVktfUFwiLHRbdC5WS19RPTgxXT1cIlZLX1FcIix0W3QuVktfUj04Ml09XCJWS19SXCIsdFt0LlZLX1M9ODNdPVwiVktfU1wiLHRbdC5WS19UPTg0XT1cIlZLX1RcIix0W3QuVktfVT04NV09XCJWS19VXCIsdFt0LlZLX1Y9ODZdPVwiVktfVlwiLHRbdC5WS19XPTg3XT1cIlZLX1dcIix0W3QuVktfWD04OF09XCJWS19YXCIsdFt0LlZLX1k9ODldPVwiVktfWVwiLHRbdC5WS19aPTkwXT1cIlZLX1pcIix0W3QuVktfQ09OVEVYVF9NRU5VPTkzXT1cIlZLX0NPTlRFWFRfTUVOVVwiLHRbdC5WS19OVU1QQUQwPTk2XT1cIlZLX05VTVBBRDBcIix0W3QuVktfTlVNUEFEMT05N109XCJWS19OVU1QQUQxXCIsdFt0LlZLX05VTVBBRDI9OThdPVwiVktfTlVNUEFEMlwiLHRbdC5WS19OVU1QQUQzPTk5XT1cIlZLX05VTVBBRDNcIix0W3QuVktfTlVNUEFEND0xMDBdPVwiVktfTlVNUEFENFwiLHRbdC5WS19OVU1QQUQ1PTEwMV09XCJWS19OVU1QQUQ1XCIsdFt0LlZLX05VTVBBRDY9MTAyXT1cIlZLX05VTVBBRDZcIix0W3QuVktfTlVNUEFENz0xMDNdPVwiVktfTlVNUEFEN1wiLHRbdC5WS19OVU1QQUQ4PTEwNF09XCJWS19OVU1QQUQ4XCIsdFt0LlZLX05VTVBBRDk9MTA1XT1cIlZLX05VTVBBRDlcIix0W3QuVktfTVVMVElQTFk9MTA2XT1cIlZLX01VTFRJUExZXCIsdFt0LlZLX0FERD0xMDddPVwiVktfQUREXCIsdFt0LlZLX1NFUEFSQVRPUj0xMDhdPVwiVktfU0VQQVJBVE9SXCIsdFt0LlZLX1NVQlRSQUNUPTEwOV09XCJWS19TVUJUUkFDVFwiLHRbdC5WS19ERUNJTUFMPTExMF09XCJWS19ERUNJTUFMXCIsdFt0LlZLX0RJVklERT0xMTFdPVwiVktfRElWSURFXCIsdFt0LlZLX0YxPTExMl09XCJWS19GMVwiLHRbdC5WS19GMj0xMTNdPVwiVktfRjJcIix0W3QuVktfRjM9MTE0XT1cIlZLX0YzXCIsdFt0LlZLX0Y0PTExNV09XCJWS19GNFwiLHRbdC5WS19GNT0xMTZdPVwiVktfRjVcIix0W3QuVktfRjY9MTE3XT1cIlZLX0Y2XCIsdFt0LlZLX0Y3PTExOF09XCJWS19GN1wiLHRbdC5WS19GOD0xMTldPVwiVktfRjhcIix0W3QuVktfRjk9MTIwXT1cIlZLX0Y5XCIsdFt0LlZLX0YxMD0xMjFdPVwiVktfRjEwXCIsdFt0LlZLX0YxMT0xMjJdPVwiVktfRjExXCIsdFt0LlZLX0YxMj0xMjNdPVwiVktfRjEyXCIsdFt0LlZLX0YxMz0xMjRdPVwiVktfRjEzXCIsdFt0LlZLX0YxND0xMjVdPVwiVktfRjE0XCIsdFt0LlZLX0YxNT0xMjZdPVwiVktfRjE1XCIsdFt0LlZLX0YxNj0xMjddPVwiVktfRjE2XCIsdFt0LlZLX0YxNz0xMjhdPVwiVktfRjE3XCIsdFt0LlZLX0YxOD0xMjldPVwiVktfRjE4XCIsdFt0LlZLX0YxOT0xMzBdPVwiVktfRjE5XCIsdFt0LlZLX0YyMD0xMzFdPVwiVktfRjIwXCIsdFt0LlZLX0YyMT0xMzJdPVwiVktfRjIxXCIsdFt0LlZLX0YyMj0xMzNdPVwiVktfRjIyXCIsdFt0LlZLX0YyMz0xMzRdPVwiVktfRjIzXCIsdFt0LlZLX0YyND0xMzVdPVwiVktfRjI0XCIsdFt0LlZLX05VTV9MT0NLPTE0NF09XCJWS19OVU1fTE9DS1wiLHRbdC5WS19TQ1JPTExfTE9DSz0xNDVdPVwiVktfU0NST0xMX0xPQ0tcIix0W3QuVktfQ0lSQ1VNRkxFWD0xNjBdPVwiVktfQ0lSQ1VNRkxFWFwiLHRbdC5WS19FWENMQU1BVElPTj0xNjFdPVwiVktfRVhDTEFNQVRJT05cIix0W3QuVktfRE9VQkxFX1FVT1RFPTE2Ml09XCJWS19ET1VCTEVfUVVPVEVcIix0W3QuVktfSEFTSD0xNjNdPVwiVktfSEFTSFwiLHRbdC5WS19ET0xMQVI9MTY0XT1cIlZLX0RPTExBUlwiLHRbdC5WS19QRVJDRU5UPTE2NV09XCJWS19QRVJDRU5UXCIsdFt0LlZLX0FNUEVSU0FORD0xNjZdPVwiVktfQU1QRVJTQU5EXCIsdFt0LlZLX1VOREVSU0NPUkU9MTY3XT1cIlZLX1VOREVSU0NPUkVcIix0W3QuVktfT1BFTl9QQVJFTj0xNjhdPVwiVktfT1BFTl9QQVJFTlwiLHRbdC5WS19DTE9TRV9QQVJFTj0xNjldPVwiVktfQ0xPU0VfUEFSRU5cIix0W3QuVktfQVNURVJJU0s9MTcwXT1cIlZLX0FTVEVSSVNLXCIsdFt0LlZLX1BMVVM9MTcxXT1cIlZLX1BMVVNcIix0W3QuVktfUElQRT0xNzJdPVwiVktfUElQRVwiLHRbdC5WS19IWVBIRU5fTUlOVVM9MTczXT1cIlZLX0hZUEhFTl9NSU5VU1wiLHRbdC5WS19PUEVOX0NVUkxZX0JSQUNLRVQ9MTc0XT1cIlZLX09QRU5fQ1VSTFlfQlJBQ0tFVFwiLHRbdC5WS19DTE9TRV9DVVJMWV9CUkFDS0VUPTE3NV09XCJWS19DTE9TRV9DVVJMWV9CUkFDS0VUXCIsdFt0LlZLX1RJTERFPTE3Nl09XCJWS19USUxERVwiLHRbdC5WS19DT01NQT0xODhdPVwiVktfQ09NTUFcIix0W3QuVktfUEVSSU9EPTE5MF09XCJWS19QRVJJT0RcIix0W3QuVktfU0xBU0g9MTkxXT1cIlZLX1NMQVNIXCIsdFt0LlZLX0JBQ0tfUVVPVEU9MTkyXT1cIlZLX0JBQ0tfUVVPVEVcIix0W3QuVktfT1BFTl9CUkFDS0VUPTIxOV09XCJWS19PUEVOX0JSQUNLRVRcIix0W3QuVktfQkFDS19TTEFTSD0yMjBdPVwiVktfQkFDS19TTEFTSFwiLHRbdC5WS19DTE9TRV9CUkFDS0VUPTIyMV09XCJWS19DTE9TRV9CUkFDS0VUXCIsdFt0LlZLX1FVT1RFPTIyMl09XCJWS19RVU9URVwiLHRbdC5WS19NRVRBPTIyNF09XCJWS19NRVRBXCIsdFt0LlZLX0FMVEdSPTIyNV09XCJWS19BTFRHUlwiLHRbdC5WS19XSU49OTFdPVwiVktfV0lOXCIsdFt0LlZLX0tBTkE9MjFdPVwiVktfS0FOQVwiLHRbdC5WS19IQU5HVUw9MjFdPVwiVktfSEFOR1VMXCIsdFt0LlZLX0VJU1U9MjJdPVwiVktfRUlTVVwiLHRbdC5WS19KVU5KQT0yM109XCJWS19KVU5KQVwiLHRbdC5WS19GSU5BTD0yNF09XCJWS19GSU5BTFwiLHRbdC5WS19IQU5KQT0yNV09XCJWS19IQU5KQVwiLHRbdC5WS19LQU5KST0yNV09XCJWS19LQU5KSVwiLHRbdC5WS19DT05WRVJUPTI4XT1cIlZLX0NPTlZFUlRcIix0W3QuVktfTk9OQ09OVkVSVD0yOV09XCJWS19OT05DT05WRVJUXCIsdFt0LlZLX0FDQ0VQVD0zMF09XCJWS19BQ0NFUFRcIix0W3QuVktfTU9ERUNIQU5HRT0zMV09XCJWS19NT0RFQ0hBTkdFXCIsdFt0LlZLX1NFTEVDVD00MV09XCJWS19TRUxFQ1RcIix0W3QuVktfUFJJTlQ9NDJdPVwiVktfUFJJTlRcIix0W3QuVktfRVhFQ1VURT00M109XCJWS19FWEVDVVRFXCIsdFt0LlZLX1NMRUVQPTk1XT1cIlZLX1NMRUVQXCJ9KFB8fChQPXt9KSk7Y2xhc3MgSCBleHRlbmRzIGJ7Y29uc3RydWN0b3IodCxpKXtjb25zdCBlPWkuc3BsaXQoXCJcXG5cIik7bGV0IHM9dC5sZW5ndGg7Zm9yKGxldCB0PTA7dDxlLmxlbmd0aDt0Kyspcz1NYXRoLm1heChzLGVbdF0ubGVuZ3RoKTtjb25zdCByPWUubGVuZ3RoO3ZhciBoLG8sbjtzdXBlcihuZXcgQygwLDAscyxyKSx0KSxuPXZvaWQgMCwobz1cImxpbmVzXCIpaW4oaD10aGlzKT9PYmplY3QuZGVmaW5lUHJvcGVydHkoaCxvLHt2YWx1ZTpuLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6aFtvXT1uLHRoaXMubGluZXM9ZX1kcmF3Q29udGVudHModCxpKXtmb3IobGV0IGU9MDtlPHRoaXMubGluZXMubGVuZ3RoO2UrKyl0LmRyYXdTdHJpbmcoaS54LGkueStlLHRoaXMubGluZXNbZV0pfWhhbmRsZUlucHV0KHQsaSl7cmV0dXJuIHQuaXNLZXlQcmVzc2VkKFAuVktfRVNDQVBFKX19ZnVuY3Rpb24gRih0LGksZSl7cmV0dXJuIGkgaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxpLHt2YWx1ZTplLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtpXT1lLHR9Y2xhc3MgTSBleHRlbmRzIGJ7Y29uc3RydWN0b3IodCxpLGUpe2xldCBzPXQubGVuZ3RoO2ZvcihsZXQgdD0wO3Q8aS5sZW5ndGg7dCsrKXM9TWF0aC5tYXgocyxpW3RdLmxlbmd0aCs0KTtjb25zdCByPWkubGVuZ3RoO3N1cGVyKG5ldyBDKDAsMCxzLHIpLHQpLEYodGhpcyxcIm9wdGlvbnNcIix2b2lkIDApLEYodGhpcyxcImNhbGxiYWNrXCIsdm9pZCAwKSxGKHRoaXMsXCJob3ZlckluZGV4XCIsdm9pZCAwKSx0aGlzLm9wdGlvbnM9aSx0aGlzLmNhbGxiYWNrPWUsdGhpcy5ob3ZlckluZGV4PS0xfWRyYXdDb250ZW50cyh0LGkpe2ZvcihsZXQgZT0wO2U8dGhpcy5vcHRpb25zLmxlbmd0aDtlKyspe2NvbnN0IHM9U3RyaW5nLmZyb21DaGFyQ29kZSg2NStlKStcIiAtIFwiK3RoaXMub3B0aW9uc1tlXTtlPT09dGhpcy5ob3ZlckluZGV4P3QuZHJhd1N0cmluZyhpLngsaS55K2UscyxBLkJMQUNLLEEuV0hJVEUpOnQuZHJhd1N0cmluZyhpLngsaS55K2UscyxBLldISVRFLEEuQkxBQ0spfX1oYW5kbGVJbnB1dCh0LGkpe2lmKHRoaXMuaG92ZXJJbmRleD0tMSx0Lm1vdXNlLng+PWkueCYmdC5tb3VzZS54PGkueCt0aGlzLmNvbnRlbnRzUmVjdC53aWR0aCYmdC5tb3VzZS55Pj1pLnkmJnQubW91c2UueTxpLnkrdGhpcy5jb250ZW50c1JlY3QuaGVpZ2h0JiYodGhpcy5ob3ZlckluZGV4PXQubW91c2UueS1pLnksMT09PXQubW91c2UuYnV0dG9uc1swXS51cENvdW50KSlyZXR1cm4gdGhpcy5jYWxsYmFjayh0aGlzLmhvdmVySW5kZXgpLCEwO2ZvcihsZXQgaT0wO2k8dGhpcy5vcHRpb25zLmxlbmd0aDtpKyspaWYodC5pc0tleVByZXNzZWQoUC5WS19BK2kpKXJldHVybiB0aGlzLmNhbGxiYWNrKGkpLCEwO3JldHVybiB0LmlzS2V5UHJlc3NlZChQLlZLX0VTQ0FQRSl9aXNNb3VzZU92ZXJPcHRpb24odCxpLGUpe3JldHVybiB0Lm1vdXNlLng+PWkueCYmdC5tb3VzZS54PGkueCt0aGlzLmNvbnRlbnRzUmVjdC53aWR0aCYmdC5tb3VzZS55PT09aS55K2V9fWNvbnN0IEc9W3tjaGFyQ29kZTpjLkJMT0NLX1RPUF9IQUxGLGFjdGl2ZTpbMSwxLDAsMF19LHtjaGFyQ29kZTpjLkJMT0NLX1JJR0hUX0hBTEYsYWN0aXZlOlswLDEsMCwxXX1dO2Z1bmN0aW9uIFgodCxpKXtjb25zdCBlPW5ldyBJbWFnZTtlLm9ubG9hZD0oKT0+e2NvbnN0IHQ9ZS53aWR0aCxzPWUuaGVpZ2h0LHI9VyhlKSxoPW5ldyBLKHQscyk7bGV0IG89MDtmb3IobGV0IGk9MDtpPHM7aSsrKWZvcihsZXQgZT0wO2U8dDtlKyspe2guZ2V0Q2VsbChlLGkpLnNldEJhY2tncm91bmQoYShyW28rK10scltvKytdLHJbbysrXSxyW28rK10pKX1pKGgpfSxlLnNyYz10fWZ1bmN0aW9uIFkodCxpKXtjb25zdCBlPW5ldyBJbWFnZTtlLm9ubG9hZD0oKT0+e2NvbnN0IHQ9ZS53aWR0aCxzPWUuaGVpZ2h0LHI9VyhlKSxoPW5ldyBLKHQvMixzLzIpO2ZvcihsZXQgaT0wO2k8cztpKz0yKWZvcihsZXQgZT0wO2U8dDtlKz0yKWsoaCxyLGUsaSx0KTtpKGgpfSxlLnNyYz10fWZ1bmN0aW9uIFcodCl7Y29uc3QgaT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO2kud2lkdGg9dC53aWR0aCxpLmhlaWdodD10LmhlaWdodDtjb25zdCBlPWkuZ2V0Q29udGV4dChcIjJkXCIpO3JldHVybiBlLmRyYXdJbWFnZSh0LDAsMCksZS5nZXRJbWFnZURhdGEoMCwwLHQud2lkdGgsdC5oZWlnaHQpLmRhdGF9ZnVuY3Rpb24gayh0LGksZSxzLHIpe2NvbnN0IGg9NCoocypyK2UpLG89NCoocypyK2UrMSksbj00KigocysxKSpyK2UpLF89NCooKHMrMSkqcitlKzEpLGE9W1tpW2hdLGlbaCsxXSxpW2grMl1dLFtpW29dLGlbbysxXSxpW28rMl1dLFtpW25dLGlbbisxXSxpW24rMl1dLFtpW19dLGlbXysxXSxpW18rMl1dXTtsZXQgZD1OdW1iZXIuTUFYX1ZBTFVFLEE9MCxsPW51bGwsRT1udWxsO2ZvcihsZXQgdD0wO3Q8Ry5sZW5ndGg7dCsrKXtjb25zdCBpPUdbdF0sZT1RKGkuYWN0aXZlLGEpO2UuZXJyb3I8ZCYmKGQ9ZS5lcnJvcixBPWkuY2hhckNvZGUsbD1lLmJnLEU9ZS5mZyl9dC5kcmF3Q2hhcihlLzIscy8yLEEseihFKSx6KGwpKX1mdW5jdGlvbiBRKHQsaSl7Y29uc3QgZT1bWzAsMCwwXSxbMCwwLDBdXSxzPVtbMCwwLDBdLFswLDAsMF1dLHI9WzAsMF07Zm9yKGxldCBzPTA7czw0O3MrKyl7Zm9yKGxldCByPTA7cjwzO3IrKyllW3Rbc11dW3JdKz1pW3NdW3JdO3JbdFtzXV0rK31mb3IobGV0IHQ9MDt0PDI7dCsrKWZvcihsZXQgaT0wO2k8MztpKyspc1t0XVtpXT1lW3RdW2ldL3JbdF07bGV0IGg9MDtmb3IobGV0IGU9MDtlPDQ7ZSsrKXtsZXQgcj0wO2ZvcihsZXQgaD0wO2g8MztoKyspe2NvbnN0IG89aVtlXVtoXS1zW3RbZV1dW2hdO3IrPW8qb31oKz1NYXRoLnNxcnQocil9cmV0dXJue2JnOnNbMF0sZmc6c1sxXSxlcnJvcjpofX1mdW5jdGlvbiB6KHQpe3JldHVybiBhKHRbMF0sdFsxXSx0WzJdKX1mdW5jdGlvbiBqKHQsaSxlKXtyZXR1cm4gaSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse3ZhbHVlOmUsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2ldPWUsdH1jbGFzcyBae2NvbnN0cnVjdG9yKHQpe2oodGhpcyxcImVsXCIsdm9pZCAwKSxqKHRoaXMsXCJ3aWR0aFwiLHZvaWQgMCksaih0aGlzLFwiaGVpZ2h0XCIsdm9pZCAwKSxqKHRoaXMsXCJwcmV2WFwiLHZvaWQgMCksaih0aGlzLFwicHJldllcIix2b2lkIDApLGoodGhpcyxcInhcIix2b2lkIDApLGoodGhpcyxcInlcIix2b2lkIDApLGoodGhpcyxcImR4XCIsdm9pZCAwKSxqKHRoaXMsXCJkeVwiLHZvaWQgMCksaih0aGlzLFwiYnV0dG9uc1wiLHZvaWQgMCksdGhpcy5lbD10LmNhbnZhcyx0aGlzLndpZHRoPXQud2lkdGgsdGhpcy5oZWlnaHQ9dC5oZWlnaHQsdGhpcy5wcmV2WD0wLHRoaXMucHJldlk9MCx0aGlzLng9MCx0aGlzLnk9MCx0aGlzLmR4PTAsdGhpcy5keT0wLHRoaXMuYnV0dG9ucz1bbmV3IHksbmV3IHksbmV3IHldO2NvbnN0IGk9dGhpcy5lbDtpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwodD0+dGhpcy5oYW5kbGVFdmVudCh0KSkpLGkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwodD0+dGhpcy5oYW5kbGVFdmVudCh0KSkpLGkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCh0PT50aGlzLmhhbmRsZUV2ZW50KHQpKSksaS5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwodD0+dGhpcy5oYW5kbGVFdmVudCh0KSkpO2NvbnN0IGU9dGhpcy5oYW5kbGVUb3VjaEV2ZW50LmJpbmQodGhpcyk7aS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLGUpLGkuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsZSksaS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIixlKSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixlKX1oYW5kbGVUb3VjaEV2ZW50KHQpe2lmKHQuc3RvcFByb3BhZ2F0aW9uKCksdC5wcmV2ZW50RGVmYXVsdCgpLHQudG91Y2hlcy5sZW5ndGg+MCl7Y29uc3QgaT10LnRvdWNoZXNbMF07dGhpcy51cGRhdGVQb3NpdGlvbihpLmNsaWVudFgsaS5jbGllbnRZKSx0aGlzLmJ1dHRvbnNbMF0uc2V0RG93bighMCl9ZWxzZSB0aGlzLmJ1dHRvbnNbMF0uc2V0RG93bighMSl9aGFuZGxlRXZlbnQodCl7dC5zdG9wUHJvcGFnYXRpb24oKSx0LnByZXZlbnREZWZhdWx0KCksdGhpcy51cGRhdGVQb3NpdGlvbih0LmNsaWVudFgsdC5jbGllbnRZKSxcIm1vdXNlZG93blwiPT09dC50eXBlJiYodGhpcy5idXR0b25zW3QuYnV0dG9uXS5zZXREb3duKCEwKSx0aGlzLmVsLmZvY3VzKCkpLFwibW91c2V1cFwiPT09dC50eXBlJiZ0aGlzLmJ1dHRvbnNbdC5idXR0b25dLnNldERvd24oITEpfXVwZGF0ZVBvc2l0aW9uKHQsaSl7bGV0IGU9dGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtjb25zdCBzPXRoaXMud2lkdGgvdGhpcy5oZWlnaHQscj1lLndpZHRoL2UuaGVpZ2h0O2lmKHItcz4uMDEpe2NvbnN0IHQ9cyplLmhlaWdodCxpPWUud2lkdGgtdDtlPW5ldyBDKE1hdGguZmxvb3IoaS8yKSwwLHQsZS5oZWlnaHQpfWlmKHItczwtLjAxKXtjb25zdCB0PWUud2lkdGgvcyxpPWUuaGVpZ2h0LXQ7ZT1uZXcgQygwLE1hdGguZmxvb3IoaS8yKSxlLndpZHRoLHQpfXRoaXMueD10aGlzLndpZHRoKih0LWUubGVmdCkvZS53aWR0aHwwLHRoaXMueT10aGlzLmhlaWdodCooaS1lLnRvcCkvZS5oZWlnaHR8MH11cGRhdGUodCl7dGhpcy5keD10aGlzLngtdGhpcy5wcmV2WCx0aGlzLmR5PXRoaXMueS10aGlzLnByZXZZLHRoaXMucHJldlg9dGhpcy54LHRoaXMucHJldlk9dGhpcy55O2ZvcihsZXQgaT0wO2k8dGhpcy5idXR0b25zLmxlbmd0aDtpKyspdGhpcy5idXR0b25zW2ldLnVwZGF0ZSh0KX19Y29uc3QgSj1bLTEsMCwxLC0xLDEsLTEsMCwxXSxxPVstMSwtMSwtMSwwLDAsMSwxLDFdLCQ9WzEuNCwxLDEuNCwxLDEsMS40LDEsMS40XTtsZXQgdHQ9MDtmdW5jdGlvbiBpdCh0LGksZSxzKXt0dCsrO2NvbnN0IHI9dC5ncmlkW2kueV1baS54XTtyLnBhdGhJZD10dCxyLmc9MCxyLmg9TWF0aC5oeXBvdChpLngtZS54LGkueS1lLnkpLHIucHJldj1udWxsO2NvbnN0IGg9bmV3IHN0KFtyXSk7Zm9yKDtoLnNpemUoKT4wOyl7Y29uc3QgaT1oLnBvcCgpO2lmKGkueD09PWUueCYmaS55PT09ZS55KXJldHVybiBldChpKTtmb3IobGV0IHI9MDtyPEoubGVuZ3RoO3IrKyl7Y29uc3Qgbz1pLngrSltyXSxuPWkueStxW3JdO2lmKG8+PTAmJm88dC53aWR0aCYmbj49MCYmbjx0LmhlaWdodCl7Y29uc3QgXz10LmdyaWRbbl1bb107aWYoXy5ibG9ja2VkJiZfLmV4cGxvcmVkJiYobyE9PWUueHx8biE9PWUueSkpY29udGludWU7Xy5wYXRoSWQhPT10dCYmKF8ucGF0aElkPXR0LF8uZz0xLzAsXy5oPU1hdGguaHlwb3Qoby1lLngsbi1lLnkpLF8ucHJldj1udWxsKTtjb25zdCBhPWkuZyskW3JdO2E8Xy5nJiZhPD1zJiYoXy5nPWEsXy5wcmV2PWksaC5pbnNlcnQoXykpfX19fWZ1bmN0aW9uIGV0KHQpe2NvbnN0IGk9W107bGV0IGU9dDtmb3IoO2U7KWkucHVzaChlKSxlPWUucHJldjtyZXR1cm4gaS5yZXZlcnNlKCksaX1jbGFzcyBzdHtjb25zdHJ1Y3Rvcih0KXt2YXIgaSxlLHM7cz12b2lkIDAsKGU9XCJ2YWx1ZXNcIilpbihpPXRoaXMpP09iamVjdC5kZWZpbmVQcm9wZXJ0eShpLGUse3ZhbHVlOnMsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTppW2VdPXMsdGhpcy52YWx1ZXM9dH1pbnNlcnQodCl7Y29uc3QgaT10aGlzLnZhbHVlcztsZXQgZT0wLHM9aS5sZW5ndGgscj0wO2Zvcig7ZTxzOyl7Y29uc3QgaD1lK3M+Pj4xLG89aVtoXTtvLmcrby5oPnQuZyt0Lmg/KGU9aCsxLHI9ZSk6KHM9aCxyPXMpfWkuc3BsaWNlKHIsMCx0KX1wb3AoKXtyZXR1cm4gdGhpcy52YWx1ZXMucG9wKCl9c2l6ZSgpe3JldHVybiB0aGlzLnZhbHVlcy5sZW5ndGh9fWZ1bmN0aW9uIHJ0KHQsaSxlKXtyZXR1cm4gaSBpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGkse3ZhbHVlOmUsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2ldPWUsdH1jbGFzcyBodHtjb25zdHJ1Y3Rvcih0KXtydCh0aGlzLFwibVwiLHZvaWQgMCkscnQodGhpcyxcImFcIix2b2lkIDApLHJ0KHRoaXMsXCJjXCIsdm9pZCAwKSxydCh0aGlzLFwic3RhdGVcIix2b2lkIDApLHRoaXMubT0yMTQ3NDgzNjQ4LHRoaXMuYT0xMTAzNTE1MjQ1LHRoaXMuYz0xMjM0NSx0aGlzLnN0YXRlPXR8fDF9bmV4dEludCgpe3JldHVybiB0aGlzLnN0YXRlPSh0aGlzLmEqdGhpcy5zdGF0ZSt0aGlzLmMpJXRoaXMubSx0aGlzLnN0YXRlfW5leHRGbG9hdCgpe3JldHVybiB0aGlzLm5leHRJbnQoKS8odGhpcy5tLTEpfW5leHRSYW5nZSh0LGkpe2NvbnN0IGU9aS10LHM9dCsodGhpcy5uZXh0SW50KCkvdGhpcy5tKmV8MCk7aWYoaXNOYU4ocykpdGhyb3cgbmV3IEVycm9yKFwicmFuZCBuYW5cIik7cmV0dXJuIHN9Y2hvb3NlSW5kZXgodCl7Y29uc3QgaT10LnJlZHVjZSgoKHQsaSk9PnQraSkpLGU9dGhpcy5uZXh0UmFuZ2UoMSxpKzEpO2xldCBzPTA7Zm9yKGxldCBpPTA7aTx0Lmxlbmd0aDtpKyspaWYocys9dFtpXSxlPD1zKXJldHVybiBpO3JldHVybiB0Lmxlbmd0aC0xfWNob29zZUtleSh0KXtjb25zdCBpPU9iamVjdC5rZXlzKHQpLGU9aS5tYXAoKGk9PnRbaV0pKTtyZXR1cm4gaVt0aGlzLmNob29zZUluZGV4KGUpXX19ZnVuY3Rpb24gb3QodCxpLGUpe3JldHVybiBpIGluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsaSx7dmFsdWU6ZSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbaV09ZSx0fWZ1bmN0aW9uIG50KHQsaSl7cmV0dXJuIHQvaSoyLTF9Y29uc3QgX3Q9e2ZvbnQ6Vn07Y2xhc3MgYXQgZXh0ZW5kcyBLe2NvbnN0cnVjdG9yKHQsaSxlLHMpe3N1cGVyKGksZSksb3QodGhpcyxcImNhbnZhc1wiLHZvaWQgMCksb3QodGhpcyxcImZvbnRcIix2b2lkIDApLG90KHRoaXMsXCJwaXhlbFdpZHRoXCIsdm9pZCAwKSxvdCh0aGlzLFwicGl4ZWxIZWlnaHRcIix2b2lkIDApLG90KHRoaXMsXCJrZXlzXCIsdm9pZCAwKSxvdCh0aGlzLFwibW91c2VcIix2b2lkIDApLG90KHRoaXMsXCJnbFwiLHZvaWQgMCksb3QodGhpcyxcInByb2dyYW1cIix2b2lkIDApLG90KHRoaXMsXCJwb3NpdGlvbkF0dHJpYkxvY2F0aW9uXCIsdm9pZCAwKSxvdCh0aGlzLFwidGV4dHVyZUF0dHJpYkxvY2F0aW9uXCIsdm9pZCAwKSxvdCh0aGlzLFwiZmdDb2xvckF0dHJpYkxvY2F0aW9uXCIsdm9pZCAwKSxvdCh0aGlzLFwiYmdDb2xvckF0dHJpYkxvY2F0aW9uXCIsdm9pZCAwKSxvdCh0aGlzLFwicG9zaXRpb25zQXJyYXlcIix2b2lkIDApLG90KHRoaXMsXCJpbmRleEFycmF5XCIsdm9pZCAwKSxvdCh0aGlzLFwidGV4dHVyZUFycmF5XCIsdm9pZCAwKSxvdCh0aGlzLFwiZm9yZWdyb3VuZFVpbnQ4QXJyYXlcIix2b2lkIDApLG90KHRoaXMsXCJmb3JlZ3JvdW5kRGF0YVZpZXdcIix2b2lkIDApLG90KHRoaXMsXCJiYWNrZ3JvdW5kVWludDhBcnJheVwiLHZvaWQgMCksb3QodGhpcyxcImJhY2tncm91bmREYXRhVmlld1wiLHZvaWQgMCksb3QodGhpcyxcInBvc2l0aW9uQnVmZmVyXCIsdm9pZCAwKSxvdCh0aGlzLFwiaW5kZXhCdWZmZXJcIix2b2lkIDApLG90KHRoaXMsXCJ0ZXh0dXJlQnVmZmVyXCIsdm9pZCAwKSxvdCh0aGlzLFwiZm9yZWdyb3VuZEJ1ZmZlclwiLHZvaWQgMCksb3QodGhpcyxcImJhY2tncm91bmRCdWZmZXJcIix2b2lkIDApLG90KHRoaXMsXCJ0ZXh0dXJlXCIsdm9pZCAwKSxvdCh0aGlzLFwibGFzdFJlbmRlclRpbWVcIix2b2lkIDApLG90KHRoaXMsXCJyZW5kZXJEZWx0YVwiLHZvaWQgMCksb3QodGhpcyxcImZwc1wiLHZvaWQgMCksb3QodGhpcyxcImF2ZXJhZ2VGcHNcIix2b2lkIDApLG90KHRoaXMsXCJ1cGRhdGVcIix2b2lkIDApLHM9c3x8X3QsdGhpcy5jYW52YXM9dCx0aGlzLmZvbnQ9cy5mb250fHxWLHRoaXMucGl4ZWxXaWR0aD1pKnRoaXMuZm9udC5jaGFyV2lkdGgsdGhpcy5waXhlbEhlaWdodD1lKnRoaXMuZm9udC5jaGFySGVpZ2h0LHQud2lkdGg9dGhpcy5waXhlbFdpZHRoLHQuaGVpZ2h0PXRoaXMucGl4ZWxIZWlnaHQsdC5zdHlsZS5pbWFnZVJlbmRlcmluZz1cInBpeGVsYXRlZFwiLHQuc3R5bGUub3V0bGluZT1cIm5vbmVcIix0LnRhYkluZGV4PTAsdGhpcy5oYW5kbGVSZXNpemUoKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCgoKT0+dGhpcy5oYW5kbGVSZXNpemUoKSkpLHRoaXMua2V5cz1uZXcgeCh0KSx0aGlzLm1vdXNlPW5ldyBaKHRoaXMpO2NvbnN0IHI9dC5nZXRDb250ZXh0KFwid2ViZ2xcIix7YW50aWFsaWFzOiExfSk7aWYoIXIpdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGluaXRpYWxpemUgV2ViR0wuIFlvdXIgYnJvd3NlciBtYXkgbm90IHN1cHBvcnQgaXQuXCIpO2NvbnN0IGg9ci5jcmVhdGVQcm9ncmFtKCk7aWYoIWgpdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGluaXRpYWxpemUgV2ViR0wuIFlvdXIgYnJvd3NlciBtYXkgbm90IHN1cHBvcnQgaXQuXCIpO3RoaXMuZ2w9cix0aGlzLnByb2dyYW09aCxyLmF0dGFjaFNoYWRlcihoLHRoaXMuYnVpbGRTaGFkZXIoci5WRVJURVhfU0hBREVSLFwiYXR0cmlidXRlIHZlYzIgYTthdHRyaWJ1dGUgdmVjMiBiO2F0dHJpYnV0ZSB2ZWMzIGM7YXR0cmlidXRlIHZlYzMgZDt2YXJ5aW5nIGhpZ2hwIHZlYzIgZTt2YXJ5aW5nIGhpZ2hwIHZlYzQgZjt2YXJ5aW5nIGhpZ2hwIHZlYzQgZzt2b2lkIG1haW4odm9pZCl7Z2xfUG9zaXRpb249dmVjNChhLngsYS55LDAsMSk7ZT1iLzE2LjA7Zj12ZWM0KGMucixjLmcsYy5iLDEpO2c9dmVjNChkLnIsZC5nLGQuYiwxKTt9XCIpKSxyLmF0dGFjaFNoYWRlcihoLHRoaXMuYnVpbGRTaGFkZXIoci5GUkFHTUVOVF9TSEFERVIsXCJ2YXJ5aW5nIGhpZ2hwIHZlYzIgZTt2YXJ5aW5nIGhpZ2hwIHZlYzQgZjt2YXJ5aW5nIGhpZ2hwIHZlYzQgZzt1bmlmb3JtIGJvb2wgaDt1bmlmb3JtIHNhbXBsZXIyRCBzO3ZvaWQgbWFpbih2b2lkKXtnbF9GcmFnQ29sb3I9dGV4dHVyZTJEKHMsZSk7aWYoaCl7aWYoZ2xfRnJhZ0NvbG9yLmE8MC4xKXtnbF9GcmFnQ29sb3I9dGV4dHVyZTJEKHMsZy5yZyoxNi4wK2ZyYWN0KGUqMTYuMCkvMTYuMCk7fX1lbHNle2lmKGdsX0ZyYWdDb2xvci5yPDAuMSkge2dsX0ZyYWdDb2xvcj1nO30gZWxzZSB7Z2xfRnJhZ0NvbG9yPWY7fX19XCIpKSxyLmxpbmtQcm9ncmFtKGgpLHIudXNlUHJvZ3JhbShoKSx0aGlzLmZvbnQuZ3JhcGhpY2FsJiZyLnVuaWZvcm0xaShyLmdldFVuaWZvcm1Mb2NhdGlvbihoLFwiaFwiKSwxKSx0aGlzLnBvc2l0aW9uQXR0cmliTG9jYXRpb249dGhpcy5nZXRBdHRyaWJMb2NhdGlvbihcImFcIiksdGhpcy50ZXh0dXJlQXR0cmliTG9jYXRpb249dGhpcy5nZXRBdHRyaWJMb2NhdGlvbihcImJcIiksdGhpcy5mZ0NvbG9yQXR0cmliTG9jYXRpb249dGhpcy5nZXRBdHRyaWJMb2NhdGlvbihcImNcIiksdGhpcy5iZ0NvbG9yQXR0cmliTG9jYXRpb249dGhpcy5nZXRBdHRyaWJMb2NhdGlvbihcImRcIik7Y29uc3Qgbz1pKmU7dGhpcy5wb3NpdGlvbnNBcnJheT1uZXcgRmxvYXQzMkFycmF5KDMqbyo0KSx0aGlzLmluZGV4QXJyYXk9bmV3IFVpbnQxNkFycmF5KDYqbyksdGhpcy50ZXh0dXJlQXJyYXk9bmV3IEZsb2F0MzJBcnJheSgyKm8qNCksdGhpcy5mb3JlZ3JvdW5kVWludDhBcnJheT1uZXcgVWludDhBcnJheSg0Km8qNCksdGhpcy5mb3JlZ3JvdW5kRGF0YVZpZXc9bmV3IERhdGFWaWV3KHRoaXMuZm9yZWdyb3VuZFVpbnQ4QXJyYXkuYnVmZmVyKSx0aGlzLmJhY2tncm91bmRVaW50OEFycmF5PW5ldyBVaW50OEFycmF5KDQqbyo0KSx0aGlzLmJhY2tncm91bmREYXRhVmlldz1uZXcgRGF0YVZpZXcodGhpcy5iYWNrZ3JvdW5kVWludDhBcnJheS5idWZmZXIpO2xldCBuPTAsXz0wLGE9MDtmb3IobGV0IHQ9MDt0PGU7dCsrKWZvcihsZXQgcz0wO3M8aTtzKyspdGhpcy5wb3NpdGlvbnNBcnJheVtuKytdPW50KHMsaSksdGhpcy5wb3NpdGlvbnNBcnJheVtuKytdPS1udCh0LGUpLHRoaXMucG9zaXRpb25zQXJyYXlbbisrXT1udChzKzEsaSksdGhpcy5wb3NpdGlvbnNBcnJheVtuKytdPS1udCh0LGUpLHRoaXMucG9zaXRpb25zQXJyYXlbbisrXT1udChzKzEsaSksdGhpcy5wb3NpdGlvbnNBcnJheVtuKytdPS1udCh0KzEsZSksdGhpcy5wb3NpdGlvbnNBcnJheVtuKytdPW50KHMsaSksdGhpcy5wb3NpdGlvbnNBcnJheVtuKytdPS1udCh0KzEsZSksdGhpcy5pbmRleEFycmF5W18rK109YSswLHRoaXMuaW5kZXhBcnJheVtfKytdPWErMSx0aGlzLmluZGV4QXJyYXlbXysrXT1hKzIsdGhpcy5pbmRleEFycmF5W18rK109YSswLHRoaXMuaW5kZXhBcnJheVtfKytdPWErMix0aGlzLmluZGV4QXJyYXlbXysrXT1hKzMsYSs9NDt0aGlzLnBvc2l0aW9uQnVmZmVyPXIuY3JlYXRlQnVmZmVyKCksdGhpcy5pbmRleEJ1ZmZlcj1yLmNyZWF0ZUJ1ZmZlcigpLHRoaXMudGV4dHVyZUJ1ZmZlcj1yLmNyZWF0ZUJ1ZmZlcigpLHRoaXMuZm9yZWdyb3VuZEJ1ZmZlcj1yLmNyZWF0ZUJ1ZmZlcigpLHRoaXMuYmFja2dyb3VuZEJ1ZmZlcj1yLmNyZWF0ZUJ1ZmZlcigpLHIuYmluZEJ1ZmZlcihyLkFSUkFZX0JVRkZFUix0aGlzLnBvc2l0aW9uQnVmZmVyKSxyLmJ1ZmZlckRhdGEoci5BUlJBWV9CVUZGRVIsdGhpcy5wb3NpdGlvbnNBcnJheSxyLlNUQVRJQ19EUkFXKSxyLmJpbmRCdWZmZXIoci5FTEVNRU5UX0FSUkFZX0JVRkZFUix0aGlzLmluZGV4QnVmZmVyKSxyLmJ1ZmZlckRhdGEoci5FTEVNRU5UX0FSUkFZX0JVRkZFUix0aGlzLmluZGV4QXJyYXksci5TVEFUSUNfRFJBVyksdGhpcy50ZXh0dXJlPXRoaXMubG9hZFRleHR1cmUodGhpcy5mb250LnVybCksdGhpcy5sYXN0UmVuZGVyVGltZT0wLHRoaXMucmVuZGVyRGVsdGE9MCx0aGlzLmZwcz0wLHRoaXMuYXZlcmFnZUZwcz0wLHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCl9aGFuZGxlUmVzaXplKCl7Y29uc3QgdD10aGlzLmNhbnZhcy5wYXJlbnRFbGVtZW50O2lmKCF0KXJldHVybjtjb25zdCBpPXQub2Zmc2V0V2lkdGgvdGhpcy5waXhlbFdpZHRoLGU9dC5vZmZzZXRIZWlnaHQvdGhpcy5waXhlbEhlaWdodCxzPU1hdGgubWluKGksZSkscj1zKnRoaXMucGl4ZWxXaWR0aHwwLGg9cyp0aGlzLnBpeGVsSGVpZ2h0fDA7dGhpcy5jYW52YXMuc3R5bGUud2lkdGg9citcInB4XCIsdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0PWgrXCJweFwifWdldEF0dHJpYkxvY2F0aW9uKHQpe2NvbnN0IGk9dGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLnByb2dyYW0sdCk7cmV0dXJuIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoaSksaX1mbHVzaCgpe2xldCB0PTAsaT0wO2ZvcihsZXQgZT0wO2U8dGhpcy5oZWlnaHQ7ZSsrKWZvcihsZXQgcz0wO3M8dGhpcy53aWR0aDtzKyspe2NvbnN0IHI9dGhpcy5nZXRDZWxsKHMsZSk7aWYoIXIuZGlydHkpe3QrPTgsaSs9MTY7Y29udGludWV9Y29uc3QgaD1yLmNoYXJDb2RlJTE2LG89ci5jaGFyQ29kZS8xNnwwO3RoaXMudGV4dHVyZUFycmF5W3QrK109aCx0aGlzLnRleHR1cmVBcnJheVt0KytdPW8sdGhpcy50ZXh0dXJlQXJyYXlbdCsrXT1oKzEsdGhpcy50ZXh0dXJlQXJyYXlbdCsrXT1vLHRoaXMudGV4dHVyZUFycmF5W3QrK109aCsxLHRoaXMudGV4dHVyZUFycmF5W3QrK109bysxLHRoaXMudGV4dHVyZUFycmF5W3QrK109aCx0aGlzLnRleHR1cmVBcnJheVt0KytdPW8rMTtmb3IobGV0IHQ9MDt0PDQ7dCsrKXRoaXMuZm9yZWdyb3VuZERhdGFWaWV3LnNldFVpbnQzMihpLHIuZmcsITEpLHRoaXMuYmFja2dyb3VuZERhdGFWaWV3LnNldFVpbnQzMihpLHIuYmcsITEpLGkrPTQ7ci5kaXJ0eT0hMX19aXNLZXlEb3duKHQpe2NvbnN0IGk9dGhpcy5rZXlzLmdldEtleSh0KTtyZXR1cm4hIWkmJmkuZG93bn1pc0tleVByZXNzZWQodCl7Y29uc3QgaT10aGlzLmtleXMuZ2V0S2V5KHQpO3JldHVybiEhaSYmaS5pc1ByZXNzZWQoKX1nZXRLZXlEb3duQ291bnQodCl7Y29uc3QgaT10aGlzLmtleXMuZ2V0S2V5KHQpO3JldHVybiBpP2kuZG93bkNvdW50OjB9Z2V0TW92ZW1lbnRLZXkoKXtyZXR1cm4gdGhpcy5pc0tleVByZXNzZWQoUC5WS19OVU1QQUQxKXx8dGhpcy5pc0tleVByZXNzZWQoUC5WS19CKT9uZXcgUigtMSwxKTp0aGlzLmlzS2V5UHJlc3NlZChQLlZLX05VTVBBRDIpfHx0aGlzLmlzS2V5UHJlc3NlZChQLlZLX0opfHx0aGlzLmlzS2V5UHJlc3NlZChQLlZLX0RPV04pP25ldyBSKDAsMSk6dGhpcy5pc0tleVByZXNzZWQoUC5WS19OVU1QQUQzKXx8dGhpcy5pc0tleVByZXNzZWQoUC5WS19OKT9uZXcgUigxLDEpOnRoaXMuaXNLZXlQcmVzc2VkKFAuVktfTlVNUEFENCl8fHRoaXMuaXNLZXlQcmVzc2VkKFAuVktfSCl8fHRoaXMuaXNLZXlQcmVzc2VkKFAuVktfTEVGVCk/bmV3IFIoLTEsMCk6dGhpcy5pc0tleVByZXNzZWQoUC5WS19OVU1QQUQ1KXx8dGhpcy5pc0tleVByZXNzZWQoUC5WS19QRVJJT0QpP25ldyBSKDAsMCk6dGhpcy5pc0tleVByZXNzZWQoUC5WS19OVU1QQUQ2KXx8dGhpcy5pc0tleVByZXNzZWQoUC5WS19MKXx8dGhpcy5pc0tleVByZXNzZWQoUC5WS19SSUdIVCk/bmV3IFIoMSwwKTp0aGlzLmlzS2V5UHJlc3NlZChQLlZLX05VTVBBRDcpfHx0aGlzLmlzS2V5UHJlc3NlZChQLlZLX1kpP25ldyBSKC0xLC0xKTp0aGlzLmlzS2V5UHJlc3NlZChQLlZLX05VTVBBRDgpfHx0aGlzLmlzS2V5UHJlc3NlZChQLlZLX0spfHx0aGlzLmlzS2V5UHJlc3NlZChQLlZLX0RPV04pP25ldyBSKDAsLTEpOnRoaXMuaXNLZXlQcmVzc2VkKFAuVktfTlVNUEFEOSl8fHRoaXMuaXNLZXlQcmVzc2VkKFAuVktfVSk/bmV3IFIoMSwtMSk6dm9pZCAwfWJ1aWxkU2hhZGVyKHQsaSl7Y29uc3QgZT10aGlzLmdsLHM9ZS5jcmVhdGVTaGFkZXIodCk7aWYoIXMpdGhyb3cgbmV3IEVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQgY29tcGlsaW5nIHRoZSBzaGFkZXI6IFwiKTtpZihlLnNoYWRlclNvdXJjZShzLGkpLGUuY29tcGlsZVNoYWRlcihzKSwhZS5nZXRTaGFkZXJQYXJhbWV0ZXIocyxlLkNPTVBJTEVfU1RBVFVTKSl0aHJvdyBuZXcgRXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCBjb21waWxpbmcgdGhlIHNoYWRlcjogXCIrZS5nZXRTaGFkZXJJbmZvTG9nKHMpKTtyZXR1cm4gc31sb2FkVGV4dHVyZSh0KXtjb25zdCBpPXRoaXMuZ2wsZT1pLmNyZWF0ZVRleHR1cmUoKTtpLmJpbmRUZXh0dXJlKGkuVEVYVFVSRV8yRCxlKTtjb25zdCBzPWkuUkdCQSxyPWkuUkdCQSxoPWkuVU5TSUdORURfQllURSxvPW5ldyBVaW50OEFycmF5KFswLDAsMCwyNTVdKTtpLnRleEltYWdlMkQoaS5URVhUVVJFXzJELDAscywxLDEsMCxyLGgsbyk7Y29uc3Qgbj1uZXcgSW1hZ2U7cmV0dXJuIG4ub25sb2FkPSgpPT57aS5iaW5kVGV4dHVyZShpLlRFWFRVUkVfMkQsZSksaS50ZXhJbWFnZTJEKGkuVEVYVFVSRV8yRCwwLHMscixoLG4pLGkudGV4UGFyYW1ldGVyaShpLlRFWFRVUkVfMkQsaS5URVhUVVJFX1dSQVBfUyxpLkNMQU1QX1RPX0VER0UpLGkudGV4UGFyYW1ldGVyaShpLlRFWFRVUkVfMkQsaS5URVhUVVJFX1dSQVBfVCxpLkNMQU1QX1RPX0VER0UpLGkudGV4UGFyYW1ldGVyaShpLlRFWFRVUkVfMkQsaS5URVhUVVJFX01BR19GSUxURVIsaS5MSU5FQVIpLGkudGV4UGFyYW1ldGVyaShpLlRFWFRVUkVfMkQsaS5URVhUVVJFX01JTl9GSUxURVIsaS5MSU5FQVIpfSxuLnNyYz10LGV9cmVuZGVyKCl7Y29uc3QgdD10aGlzLmdsO3QuY2xlYXJDb2xvcigwLDAsMCwxKSx0LmNsZWFyRGVwdGgoMSksdC5jbGVhcih0LkNPTE9SX0JVRkZFUl9CSVR8dC5ERVBUSF9CVUZGRVJfQklUKSx0LnZpZXdwb3J0KDAsMCx0aGlzLnBpeGVsV2lkdGgsdGhpcy5waXhlbEhlaWdodCk7e2NvbnN0IGk9MixlPXQuRkxPQVQscz0hMSxyPTAsaD0wO3QuYmluZEJ1ZmZlcih0LkFSUkFZX0JVRkZFUix0aGlzLnBvc2l0aW9uQnVmZmVyKSx0LnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5wb3NpdGlvbkF0dHJpYkxvY2F0aW9uLGksZSxzLHIsaCl9e2NvbnN0IGk9MixlPXQuRkxPQVQscz0hMSxyPTAsaD0wO3QuYmluZEJ1ZmZlcih0LkFSUkFZX0JVRkZFUix0aGlzLnRleHR1cmVCdWZmZXIpLHQuYnVmZmVyRGF0YSh0LkFSUkFZX0JVRkZFUix0aGlzLnRleHR1cmVBcnJheSx0LkRZTkFNSUNfRFJBVyksdC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMudGV4dHVyZUF0dHJpYkxvY2F0aW9uLGksZSxzLHIsaCl9e2NvbnN0IGk9NCxlPXQuVU5TSUdORURfQllURSxzPSEwLHI9MCxoPTA7dC5iaW5kQnVmZmVyKHQuQVJSQVlfQlVGRkVSLHRoaXMuZm9yZWdyb3VuZEJ1ZmZlciksdC5idWZmZXJEYXRhKHQuQVJSQVlfQlVGRkVSLHRoaXMuZm9yZWdyb3VuZFVpbnQ4QXJyYXksdC5EWU5BTUlDX0RSQVcpLHQudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLmZnQ29sb3JBdHRyaWJMb2NhdGlvbixpLGUscyxyLGgpfXtjb25zdCBpPTQsZT10LlVOU0lHTkVEX0JZVEUscz0hMCxyPTAsaD0wO3QuYmluZEJ1ZmZlcih0LkFSUkFZX0JVRkZFUix0aGlzLmJhY2tncm91bmRCdWZmZXIpLHQuYnVmZmVyRGF0YSh0LkFSUkFZX0JVRkZFUix0aGlzLmJhY2tncm91bmRVaW50OEFycmF5LHQuRFlOQU1JQ19EUkFXKSx0LnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5iZ0NvbG9yQXR0cmliTG9jYXRpb24saSxlLHMscixoKX10LmJpbmRCdWZmZXIodC5FTEVNRU5UX0FSUkFZX0JVRkZFUix0aGlzLmluZGV4QnVmZmVyKSx0LnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKSx0LmFjdGl2ZVRleHR1cmUodC5URVhUVVJFMCksdC5iaW5kVGV4dHVyZSh0LlRFWFRVUkVfMkQsdGhpcy50ZXh0dXJlKTt7Y29uc3QgaT10aGlzLndpZHRoKnRoaXMuaGVpZ2h0KjYsZT10LlVOU0lHTkVEX1NIT1JULHM9MDt0LmRyYXdFbGVtZW50cyh0LlRSSUFOR0xFUyxpLGUscyl9fXJlcXVlc3RBbmltYXRpb25GcmFtZSgpe3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHQ9PnRoaXMucmVuZGVyTG9vcCh0KSkpfXJlbmRlckxvb3AodCl7MD09PXRoaXMubGFzdFJlbmRlclRpbWU/KHRoaXMubGFzdFJlbmRlclRpbWU9dCx0aGlzLmZwcz0wKToodGhpcy5yZW5kZXJEZWx0YT10LXRoaXMubGFzdFJlbmRlclRpbWUsdGhpcy5sYXN0UmVuZGVyVGltZT10LHRoaXMuZnBzPTFlMy90aGlzLnJlbmRlckRlbHRhLHRoaXMuYXZlcmFnZUZwcz0uOTUqdGhpcy5hdmVyYWdlRnBzKy4wNSp0aGlzLmZwcyksdGhpcy5rZXlzLnVwZGF0ZUtleXModCksdGhpcy5tb3VzZS51cGRhdGUodCksdGhpcy51cGRhdGUmJnRoaXMudXBkYXRlKCksdGhpcy5mbHVzaCgpLHRoaXMucmVuZGVyKCksdGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKX19fX0saT17fTtmdW5jdGlvbiBlKHMpe2lmKGlbc10pcmV0dXJuIGlbc10uZXhwb3J0czt2YXIgcj1pW3NdPXtleHBvcnRzOnt9fTtyZXR1cm4gdFtzXShyLHIuZXhwb3J0cyxlKSxyLmV4cG9ydHN9cmV0dXJuIGUuZD0odCxpKT0+e2Zvcih2YXIgcyBpbiBpKWUubyhpLHMpJiYhZS5vKHQscykmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LHMse2VudW1lcmFibGU6ITAsZ2V0Omlbc119KX0sZS5vPSh0LGkpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxpKSxlLnI9dD0+e1widW5kZWZpbmVkXCIhPT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxlKDYxMil9KSgpfSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2dsdC5qcy5tYXAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiZ2VvdGljXCJcclxuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSBcIndnbHRcIlxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBbGx5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xyXG4gICAgfTtcclxufVxyXG4vL2RlY2xhcmluZyBjb21wb25lbnRzXHJcbi8vY2hhciA9IGRpc3BsYXllZCBjaGFyYWN0ZXIsIGNvbG9yID0gZGlzcGxheWVkIGNvbG9yXHJcbmV4cG9ydCBjbGFzcyBBcHBlYXJhbmNlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIGNoYXI6IFwiQFwiLFxyXG4gICAgICAgIGNvbG9yOiBDb2xvcnMuV0hJVEVcclxuICAgIH1cclxufVxyXG4vL3RhcmdldCA9IGN1cnJlbnQgcHJpbWFyeSB0YXJnZXRcclxuZXhwb3J0IGNsYXNzIENvbWJhdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcclxuICAgICAgICB0YXJnZXQ6IFwiXCIsXHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwLFxyXG4gICAgICAgIGRpc3RhbmNlOiAwXHJcbiAgICB9XHJcbn1cclxuLy9uYW1lID0gbmFtZSBvZiBvYmplY3QsIGRlc2MgPSBkZXNjcmlwdGlvbiBvZiBvYmplY3RcclxuZXhwb3J0IGNsYXNzIERlc2NyaXB0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xyXG4gICAgICAgIGRlc2M6IFwiXCJcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XHJcbiAgICB9O1xyXG59XHJcbi8vaHAgPSBjdXJyZW50IGhlYWx0aCwgbWF4SHAgPSBtYXhpbXVtIGhlYWx0aCBhbGxvd2VkXHJcbmV4cG9ydCBjbGFzcyBIZWFsdGggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgaHA6IDEsXHJcbiAgICAgICAgbWF4SHA6IDFcclxuICAgIH0gIFxyXG59XHJcbi8veCx5ID0geCx5IGNvb3JkaW5hdGUgcG9zaXRpb24gb24gZGlzcGxheVxyXG5leHBvcnQgY2xhc3MgUG9zaXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XHJcbiAgICAgICAgeDogMCxcclxuICAgICAgICB5OiAwXHJcbiAgICB9O1xyXG59XHJcbi8vYWN0aW9uID0gYWN0aW9uIHNwZWVkIGluIG1pbGxpc2Vjb25kcyBpLmUuIGhvdyBmYXN0IGFsbCBhY3Rpb25zIHN1Y2ggYXMgbW92aW5nIGFuZCBhdHRhY2tpbmcgYXJlIGRvbmVcclxuZXhwb3J0IGNsYXNzIEFjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcclxuICAgICAgICBzcGVlZDogMTAwMCxcclxuICAgICAgICBsYXN0OiAwLFxyXG4gICAgICAgIGFkanVzdGVkOiAxMDAwXHJcbiAgICB9XHJcbn1cclxuLy94ID0gaG9yaXpvbnRhbCBtb3ZlbWVudCBzcGVlZCwgeSA9IHZlcnRpY2FsIG1vdmVtZW50IHNwZWVkLiBpLmUuIHBlciBtb3ZlbWVudCBhY3Rpb24gbW92ZSB1cCB0byB4L3kgdmVsb2NpdHkuXHJcbmV4cG9ydCBjbGFzcyBNb3ZlbWVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcclxuICAgICAgICB2ZWxvY2l0eTogMCxcclxuICAgICAgICB4OiAwLFxyXG4gICAgICAgIHk6IDAgXHJcbiAgICB9O1xyXG59XHJcblxyXG4iLCJpbXBvcnQge0VuZ2luZX0gZnJvbSBcImdlb3RpY1wiO1xyXG5pbXBvcnQge0FwcGVhcmFuY2UsIENvbWJhdCwgRGVzY3JpcHRpb24sIEhlYWx0aCwgUG9zaXRpb24sIEFjdGlvbiwgTW92ZW1lbnQsIEVuZW15LCBBbGx5fSBmcm9tIFwiLi9jb21wb25lbnRzXCJcclxuaW1wb3J0IHtCZWluZywgSHVtYW4sIFpvbWJpZX0gZnJvbSBcIi4vZW50aXRpZXNcIlxyXG5cclxuLy9jcmVhdGluZyBnZW90aWMgZW5naW5lXHJcbmNvbnN0IGVuZ2luZSA9IG5ldyBFbmdpbmUoKTtcclxuLy9hc3NvY2lhdGluZyBjb21wb25lbnRzXHJcbmVuZ2luZS5yZWdpc3RlckNvbXBvbmVudChBbGx5KVxyXG5lbmdpbmUucmVnaXN0ZXJDb21wb25lbnQoQXBwZWFyYW5jZSlcclxuZW5naW5lLnJlZ2lzdGVyQ29tcG9uZW50KENvbWJhdClcclxuZW5naW5lLnJlZ2lzdGVyQ29tcG9uZW50KERlc2NyaXB0aW9uKVxyXG5lbmdpbmUucmVnaXN0ZXJDb21wb25lbnQoRW5lbXkpXHJcbmVuZ2luZS5yZWdpc3RlckNvbXBvbmVudChIZWFsdGgpXHJcbmVuZ2luZS5yZWdpc3RlckNvbXBvbmVudChQb3NpdGlvbilcclxuZW5naW5lLnJlZ2lzdGVyQ29tcG9uZW50KEFjdGlvbilcclxuZW5naW5lLnJlZ2lzdGVyQ29tcG9uZW50KE1vdmVtZW50KVxyXG4vL2Fzc29jaWF0aW5nIHByZWZhYnNcclxuZW5naW5lLnJlZ2lzdGVyUHJlZmFiKEJlaW5nKVxyXG5lbmdpbmUucmVnaXN0ZXJQcmVmYWIoSHVtYW4pXHJcbmVuZ2luZS5yZWdpc3RlclByZWZhYihab21iaWUpXHJcbmV4cG9ydCBkZWZhdWx0IGVuZ2luZTsiLCJpbXBvcnQgeyBDb2xvcnMgfSBmcm9tIFwid2dsdFwiXHJcbi8vZGVmYXVsdCBcIkJlaW5nXCJtb2Igd2l0aCByZWxhdGVkIGNvbXBvbmVudHNcclxuZXhwb3J0IGxldCBCZWluZyA9IHtcclxuICAgIG5hbWU6IFwiQmVpbmdcIixcclxuICAgIGNvbXBvbmVudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiQXBwZWFyYW5jZVwiLFxyXG4gICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFyOiBcIkBcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogQ29sb3JzLldISVRFXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJDb21iYXRcIixcclxuICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJlaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjOiBcIk5vbmRlc2NyaXB0IGJlaW5nLlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJIZWFsdGhcIixcclxuICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICBocDogMSxcclxuICAgICAgICAgICAgICAgbWF4SHA6IDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJQb3NpdGlvblwiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIkFjdGlvblwiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICBzcGVlZDogMTAwMCxcclxuICAgICAgICAgICAgICAgIGxhc3Q6IDAsXHJcbiAgICAgICAgICAgICAgICBhZGp1c3RlZDogMTAwMCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcIk1vdmVtZW50XCIsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIHZlbG9jaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgICAgICAgICBjYXJkaW5hbDogMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgXSxcclxufTtcclxuLy9kZWZhdWx0IFwiSHVtYW5cIiBzdWJ0eXBlIG9mIFwiQmVpbmdcIlxyXG5leHBvcnQgbGV0IEh1bWFuID0ge1xyXG4gICBuYW1lOiBcIkh1bWFuXCIsXHJcbiAgIGluaGVyaXQ6IFwiQmVpbmdcIixcclxuICAgY29tcG9uZW50czogW1xyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwiQWxseVwiLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7fSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJBcHBlYXJhbmNlXCIsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIGNoYXI6IFwiQFwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IENvbG9ycy5ZRUxMT1dcclxuICAgICAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgbmFtZTogXCJIdW1hblwiLFxyXG4gICAgICAgICAgICBkZXNjOiBcIkEgaHVtYW4gYmVpbmcuXCJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwiSGVhbHRoXCIsXHJcbiAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICBocDogMTAsXHJcbiAgICAgICAgICAgIG1heEhwOiAxMFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwiTW92ZW1lbnRcIixcclxuICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIHZlbG9jaXR5OiAxLFxyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICBjYXJkaW5hbDogMFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbiAgIF0gXHJcbn07XHJcbi8vZGVmYXVsdCBcIlpvbWJpZVwiIHN1YnR5cGUgb2YgXCJCZWluZ1wiXHJcbmV4cG9ydCBsZXQgWm9tYmllID0ge1xyXG4gICAgbmFtZTogXCJab21iaWVcIixcclxuICAgIGluaGVyaXQ6IFwiQmVpbmdcIixcclxuICAgIGNvbXBvbmVudHM6IFtcclxuICAgIHtcclxuICAgICAgICB0eXBlOiBcIkFwcGVhcmFuY2VcIixcclxuICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgY2hhcjogXCJaXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBDb2xvcnMuREFSS19HUkVFTlxyXG4gICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAgdHlwZTogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICBuYW1lOiBcIlpvbWJpZVwiLFxyXG4gICAgICAgICAgICAgZGVzYzogXCJBIHpvbWJpZS5cIlxyXG4gICAgICAgICB9XHJcbiAgICAgfSxcclxuICAgICB7XHJcbiAgICAgICAgdHlwZTogXCJFbmVteVwiLFxyXG4gICAgICAgIHByb3BlcnRpZXM6IHt9XHJcbiAgICAgfSwgICAgIFxyXG4gICAgIHtcclxuICAgICAgICAgdHlwZTogXCJIZWFsdGhcIixcclxuICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgaHA6IDEwLFxyXG4gICAgICAgICAgICAgbWF4SHA6IDEwXHJcbiAgICAgICAgIH0sXHJcbiAgICAgfSxcclxuIFxyXG4gICAgIHtcclxuICAgICAgICAgdHlwZTogXCJNb3ZlbWVudFwiLFxyXG4gICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICB2ZWxvY2l0eTogMSxcclxuICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgY2FyZGluYWw6IDBcclxuICAgICAgICAgfSxcclxuICAgICB9LFxyXG4gICAgXSBcclxufTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuY29uc3QgcHJlc2VydmVDYW1lbENhc2UgPSBzdHJpbmcgPT4ge1xuICBsZXQgaXNMYXN0Q2hhckxvd2VyID0gZmFsc2U7XG4gIGxldCBpc0xhc3RDaGFyVXBwZXIgPSBmYWxzZTtcbiAgbGV0IGlzTGFzdExhc3RDaGFyVXBwZXIgPSBmYWxzZTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNoYXJhY3RlciA9IHN0cmluZ1tpXTtcblxuICAgIGlmIChpc0xhc3RDaGFyTG93ZXIgJiYgL1tcXHB7THV9XS91LnRlc3QoY2hhcmFjdGVyKSkge1xuICAgICAgc3RyaW5nID0gc3RyaW5nLnNsaWNlKDAsIGkpICsgJy0nICsgc3RyaW5nLnNsaWNlKGkpO1xuICAgICAgaXNMYXN0Q2hhckxvd2VyID0gZmFsc2U7XG4gICAgICBpc0xhc3RMYXN0Q2hhclVwcGVyID0gaXNMYXN0Q2hhclVwcGVyO1xuICAgICAgaXNMYXN0Q2hhclVwcGVyID0gdHJ1ZTtcbiAgICAgIGkrKztcbiAgICB9IGVsc2UgaWYgKGlzTGFzdENoYXJVcHBlciAmJiBpc0xhc3RMYXN0Q2hhclVwcGVyICYmIC9bXFxwe0xsfV0vdS50ZXN0KGNoYXJhY3RlcikpIHtcbiAgICAgIHN0cmluZyA9IHN0cmluZy5zbGljZSgwLCBpIC0gMSkgKyAnLScgKyBzdHJpbmcuc2xpY2UoaSAtIDEpO1xuICAgICAgaXNMYXN0TGFzdENoYXJVcHBlciA9IGlzTGFzdENoYXJVcHBlcjtcbiAgICAgIGlzTGFzdENoYXJVcHBlciA9IGZhbHNlO1xuICAgICAgaXNMYXN0Q2hhckxvd2VyID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNMYXN0Q2hhckxvd2VyID0gY2hhcmFjdGVyLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09IGNoYXJhY3RlciAmJiBjaGFyYWN0ZXIudG9Mb2NhbGVVcHBlckNhc2UoKSAhPT0gY2hhcmFjdGVyO1xuICAgICAgaXNMYXN0TGFzdENoYXJVcHBlciA9IGlzTGFzdENoYXJVcHBlcjtcbiAgICAgIGlzTGFzdENoYXJVcHBlciA9IGNoYXJhY3Rlci50b0xvY2FsZVVwcGVyQ2FzZSgpID09PSBjaGFyYWN0ZXIgJiYgY2hhcmFjdGVyLnRvTG9jYWxlTG93ZXJDYXNlKCkgIT09IGNoYXJhY3RlcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufTtcblxuY29uc3QgY2FtZWxDYXNlID0gKGlucHV0LCBvcHRpb25zKSA9PiB7XG4gIGlmICghKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgfHwgQXJyYXkuaXNBcnJheShpbnB1dCkpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIGlucHV0IHRvIGJlIGBzdHJpbmcgfCBzdHJpbmdbXWAnKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSB7IC4uLntcbiAgICAgIHBhc2NhbENhc2U6IGZhbHNlXG4gICAgfSxcbiAgICAuLi5vcHRpb25zXG4gIH07XG5cbiAgY29uc3QgcG9zdFByb2Nlc3MgPSB4ID0+IG9wdGlvbnMucGFzY2FsQ2FzZSA/IHguY2hhckF0KDApLnRvTG9jYWxlVXBwZXJDYXNlKCkgKyB4LnNsaWNlKDEpIDogeDtcblxuICBpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICBpbnB1dCA9IGlucHV0Lm1hcCh4ID0+IHgudHJpbSgpKS5maWx0ZXIoeCA9PiB4Lmxlbmd0aCkuam9pbignLScpO1xuICB9IGVsc2Uge1xuICAgIGlucHV0ID0gaW5wdXQudHJpbSgpO1xuICB9XG5cbiAgaWYgKGlucHV0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmIChpbnB1dC5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5wYXNjYWxDYXNlID8gaW5wdXQudG9Mb2NhbGVVcHBlckNhc2UoKSA6IGlucHV0LnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gIH1cblxuICBjb25zdCBoYXNVcHBlckNhc2UgPSBpbnB1dCAhPT0gaW5wdXQudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuICBpZiAoaGFzVXBwZXJDYXNlKSB7XG4gICAgaW5wdXQgPSBwcmVzZXJ2ZUNhbWVsQ2FzZShpbnB1dCk7XG4gIH1cblxuICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL15bXy5cXC0gXSsvLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC9bXy5cXC0gXSsoW1xccHtBbHBoYX1cXHB7Tn1fXXwkKS9ndSwgKF8sIHAxKSA9PiBwMS50b0xvY2FsZVVwcGVyQ2FzZSgpKS5yZXBsYWNlKC9cXGQrKFtcXHB7QWxwaGF9XFxwe059X118JCkvZ3UsIG0gPT4gbS50b0xvY2FsZVVwcGVyQ2FzZSgpKTtcbiAgcmV0dXJuIHBvc3RQcm9jZXNzKGlucHV0KTtcbn07XG5cbnZhciBjYW1lbGNhc2UgPSBjYW1lbENhc2U7IC8vIFRPRE86IFJlbW92ZSB0aGlzIGZvciB0aGUgbmV4dCBtYWpvciByZWxlYXNlXG5cbnZhciBfZGVmYXVsdCA9IGNhbWVsQ2FzZTtcbmNhbWVsY2FzZS5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbmNvbnN0IGNhbWVsQ2FjaGUgPSB7fTtcbmNvbnN0IGNhbWVsU3RyaW5nID0gdmFsdWUgPT4ge1xuICBjb25zdCByZXN1bHQgPSBjYW1lbENhY2hlW3ZhbHVlXTtcblxuICBpZiAoIXJlc3VsdCkge1xuICAgIGNhbWVsQ2FjaGVbdmFsdWVdID0gY2FtZWxjYXNlKHZhbHVlKTtcbiAgICByZXR1cm4gY2FtZWxDYWNoZVt2YWx1ZV07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuY2xhc3MgQ29tcG9uZW50UmVnaXN0cnkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfY2JpdFwiLCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9tYXBcIiwge30pO1xuICB9XG5cbiAgcmVnaXN0ZXIoY2xhenopIHtcbiAgICBjb25zdCBrZXkgPSBjYW1lbFN0cmluZyhjbGF6ei5uYW1lKTtcbiAgICBjbGF6ei5wcm90b3R5cGUuX2NrZXkgPSBrZXk7XG4gICAgY2xhenoucHJvdG90eXBlLl9jYml0ID0gQmlnSW50KCsrdGhpcy5fY2JpdCk7XG4gICAgdGhpcy5fbWFwW2tleV0gPSBjbGF6ejtcbiAgfVxuXG4gIGdldChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwW2tleV07XG4gIH1cblxufVxuXG52YXIgaXNNZXJnZWFibGVPYmplY3QgPSBmdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNOb25OdWxsT2JqZWN0KHZhbHVlKSAmJiAhaXNTcGVjaWFsKHZhbHVlKTtcbn07XG5cbmZ1bmN0aW9uIGlzTm9uTnVsbE9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBpc1NwZWNpYWwodmFsdWUpIHtcbiAgdmFyIHN0cmluZ1ZhbHVlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgcmV0dXJuIHN0cmluZ1ZhbHVlID09PSAnW29iamVjdCBSZWdFeHBdJyB8fCBzdHJpbmdWYWx1ZSA9PT0gJ1tvYmplY3QgRGF0ZV0nIHx8IGlzUmVhY3RFbGVtZW50KHZhbHVlKTtcbn0gLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL2I1YWM5NjNmYjc5MWQxMjk4ZTdmMzk2MjM2MzgzYmM5NTVmOTE2YzEvc3JjL2lzb21vcnBoaWMvY2xhc3NpYy9lbGVtZW50L1JlYWN0RWxlbWVudC5qcyNMMjEtTDI1XG5cblxudmFyIGNhblVzZVN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBjYW5Vc2VTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG5cbmZ1bmN0aW9uIGlzUmVhY3RFbGVtZW50KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge307XG59XG5cbmZ1bmN0aW9uIGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHZhbHVlLCBvcHRpb25zKSB7XG4gIHJldHVybiBvcHRpb25zLmNsb25lICE9PSBmYWxzZSAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSA/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zKSA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0QXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuICByZXR1cm4gdGFyZ2V0LmNvbmNhdChzb3VyY2UpLm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChlbGVtZW50LCBvcHRpb25zKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE1lcmdlRnVuY3Rpb24oa2V5LCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucy5jdXN0b21NZXJnZSkge1xuICAgIHJldHVybiBkZWVwbWVyZ2U7XG4gIH1cblxuICB2YXIgY3VzdG9tTWVyZ2UgPSBvcHRpb25zLmN1c3RvbU1lcmdlKGtleSk7XG4gIHJldHVybiB0eXBlb2YgY3VzdG9tTWVyZ2UgPT09ICdmdW5jdGlvbicgPyBjdXN0b21NZXJnZSA6IGRlZXBtZXJnZTtcbn1cblxuZnVuY3Rpb24gZ2V0RW51bWVyYWJsZU93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpIHtcbiAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkuZmlsdGVyKGZ1bmN0aW9uIChzeW1ib2wpIHtcbiAgICByZXR1cm4gdGFyZ2V0LnByb3BlcnR5SXNFbnVtZXJhYmxlKHN5bWJvbCk7XG4gIH0pIDogW107XG59XG5cbmZ1bmN0aW9uIGdldEtleXModGFyZ2V0KSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyh0YXJnZXQpLmNvbmNhdChnZXRFbnVtZXJhYmxlT3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eUlzT25PYmplY3Qob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB0cnkge1xuICAgIHJldHVybiBwcm9wZXJ0eSBpbiBvYmplY3Q7XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0gLy8gUHJvdGVjdHMgZnJvbSBwcm90b3R5cGUgcG9pc29uaW5nIGFuZCB1bmV4cGVjdGVkIG1lcmdpbmcgdXAgdGhlIHByb3RvdHlwZSBjaGFpbi5cblxuXG5mdW5jdGlvbiBwcm9wZXJ0eUlzVW5zYWZlKHRhcmdldCwga2V5KSB7XG4gIHJldHVybiBwcm9wZXJ0eUlzT25PYmplY3QodGFyZ2V0LCBrZXkpIC8vIFByb3BlcnRpZXMgYXJlIHNhZmUgdG8gbWVyZ2UgaWYgdGhleSBkb24ndCBleGlzdCBpbiB0aGUgdGFyZ2V0IHlldCxcbiAgJiYgIShPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIGtleSkgLy8gdW5zYWZlIGlmIHRoZXkgZXhpc3QgdXAgdGhlIHByb3RvdHlwZSBjaGFpbixcbiAgJiYgT2JqZWN0LnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodGFyZ2V0LCBrZXkpKTsgLy8gYW5kIGFsc28gdW5zYWZlIGlmIHRoZXkncmUgbm9uZW51bWVyYWJsZS5cbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcbiAgdmFyIGRlc3RpbmF0aW9uID0ge307XG5cbiAgaWYgKG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xuICAgIGdldEtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCh0YXJnZXRba2V5XSwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRLZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKHByb3BlcnR5SXNVbnNhZmUodGFyZ2V0LCBrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5SXNPbk9iamVjdCh0YXJnZXQsIGtleSkgJiYgb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSkpIHtcbiAgICAgIGRlc3RpbmF0aW9uW2tleV0gPSBnZXRNZXJnZUZ1bmN0aW9uKGtleSwgb3B0aW9ucykodGFyZ2V0W2tleV0sIHNvdXJjZVtrZXldLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHNvdXJjZVtrZXldLCBvcHRpb25zKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZGVzdGluYXRpb247XG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgb3B0aW9ucy5hcnJheU1lcmdlID0gb3B0aW9ucy5hcnJheU1lcmdlIHx8IGRlZmF1bHRBcnJheU1lcmdlO1xuICBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0ID0gb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCB8fCBpc01lcmdlYWJsZU9iamVjdDsgLy8gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQgaXMgYWRkZWQgdG8gYG9wdGlvbnNgIHNvIHRoYXQgY3VzdG9tIGFycmF5TWVyZ2UoKVxuICAvLyBpbXBsZW1lbnRhdGlvbnMgY2FuIHVzZSBpdC4gVGhlIGNhbGxlciBtYXkgbm90IHJlcGxhY2UgaXQuXG5cbiAgb3B0aW9ucy5jbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZCA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkO1xuICB2YXIgc291cmNlSXNBcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcbiAgdmFyIHRhcmdldElzQXJyYXkgPSBBcnJheS5pc0FycmF5KHRhcmdldCk7XG4gIHZhciBzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoID0gc291cmNlSXNBcnJheSA9PT0gdGFyZ2V0SXNBcnJheTtcblxuICBpZiAoIXNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2gpIHtcbiAgICByZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlLCBvcHRpb25zKTtcbiAgfSBlbHNlIGlmIChzb3VyY2VJc0FycmF5KSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuYXJyYXlNZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG1lcmdlT2JqZWN0KHRhcmdldCwgc291cmNlLCBvcHRpb25zKTtcbiAgfVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheScpO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbiAocHJldiwgbmV4dCkge1xuICAgIHJldHVybiBkZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9ucyk7XG4gIH0sIHt9KTtcbn07XG5cbnZhciBkZWVwbWVyZ2VfMSA9IGRlZXBtZXJnZTtcbnZhciBjanMgPSBkZWVwbWVyZ2VfMTtcblxuY2xhc3MgUHJlZmFiQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoY2xhenosIHByb3BlcnRpZXMgPSB7fSwgb3ZlcndyaXRlID0gdHJ1ZSkge1xuICAgIHRoaXMuY2xhenogPSBjbGF6ejtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIHRoaXMub3ZlcndyaXRlID0gb3ZlcndyaXRlO1xuICB9XG5cbiAgYXBwbHlUb0VudGl0eShlbnRpdHksIGluaXRpYWxQcm9wcyA9IHt9KSB7XG4gICAgaWYgKCF0aGlzLmNsYXp6LmFsbG93TXVsdGlwbGUgJiYgZW50aXR5Lmhhcyh0aGlzLmNsYXp6KSkge1xuICAgICAgaWYgKCF0aGlzLm92ZXJ3cml0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXAgPSBlbnRpdHlbdGhpcy5jbGF6ei5wcm90b3R5cGUuX2NrZXldO1xuICAgICAgZW50aXR5LnJlbW92ZShjb21wKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9wcyA9IGNqcyh0aGlzLnByb3BlcnRpZXMsIGluaXRpYWxQcm9wcyk7XG4gICAgZW50aXR5LmFkZCh0aGlzLmNsYXp6LCBwcm9wcyk7XG4gIH1cblxufVxuXG5jbGFzcyBQcmVmYWIge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibmFtZVwiLCAnJyk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJpbmhlcml0XCIsIFtdKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNvbXBvbmVudHNcIiwgW10pO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGFkZENvbXBvbmVudChwcmVmYWJDb21wb25lbnQpIHtcbiAgICB0aGlzLmNvbXBvbmVudHMucHVzaChwcmVmYWJDb21wb25lbnQpO1xuICB9XG5cbiAgYXBwbHlUb0VudGl0eShlbnRpdHksIHByZWZhYlByb3BzID0ge30pIHtcbiAgICB0aGlzLmluaGVyaXQuZm9yRWFjaChwYXJlbnQgPT4ge1xuICAgICAgcGFyZW50LmFwcGx5VG9FbnRpdHkoZW50aXR5LCBwcmVmYWJQcm9wcyk7XG4gICAgfSk7XG4gICAgY29uc3QgYXJyQ29tcHMgPSB7fTtcbiAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgY29uc3QgY2xhenogPSBjb21wb25lbnQuY2xheno7XG4gICAgICBjb25zdCBja2V5ID0gY2xhenoucHJvdG90eXBlLl9ja2V5O1xuICAgICAgbGV0IGluaXRpYWxDb21wUHJvcHMgPSB7fTtcblxuICAgICAgaWYgKGNsYXp6LmFsbG93TXVsdGlwbGUpIHtcbiAgICAgICAgaWYgKGNsYXp6LmtleVByb3BlcnR5KSB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gY29tcG9uZW50LnByb3BlcnRpZXNbY2xhenoua2V5UHJvcGVydHldO1xuXG4gICAgICAgICAgaWYgKHByZWZhYlByb3BzW2NrZXldICYmIHByZWZhYlByb3BzW2NrZXldW2tleV0pIHtcbiAgICAgICAgICAgIGluaXRpYWxDb21wUHJvcHMgPSBwcmVmYWJQcm9wc1tja2V5XVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIWFyckNvbXBzW2NrZXldKSB7XG4gICAgICAgICAgICBhcnJDb21wc1tja2V5XSA9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByZWZhYlByb3BzW2NrZXldICYmIHByZWZhYlByb3BzW2NrZXldW2FyckNvbXBzW2NrZXldXSkge1xuICAgICAgICAgICAgaW5pdGlhbENvbXBQcm9wcyA9IHByZWZhYlByb3BzW2NrZXldW2FyckNvbXBzW2NrZXldXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhcnJDb21wc1tja2V5XSsrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0aWFsQ29tcFByb3BzID0gcHJlZmFiUHJvcHNbY2tleV07XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudC5hcHBseVRvRW50aXR5KGVudGl0eSwgaW5pdGlhbENvbXBQcm9wcyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVudGl0eTtcbiAgfVxuXG59XG5cbmNsYXNzIFByZWZhYlJlZ2lzdHJ5IHtcbiAgY29uc3RydWN0b3IoZW5naW5lKSB7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3ByZWZhYnNcIiwge30pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2VuZ2luZVwiLCBudWxsKTtcblxuICAgIHRoaXMuX2VuZ2luZSA9IGVuZ2luZTtcbiAgfVxuXG4gIGRlc2VyaWFsaXplKGRhdGEpIHtcbiAgICBjb25zdCByZWdpc3RlcmVkID0gdGhpcy5nZXQoZGF0YS5uYW1lKTtcblxuICAgIGlmIChyZWdpc3RlcmVkKSB7XG4gICAgICByZXR1cm4gcmVnaXN0ZXJlZDtcbiAgICB9XG5cbiAgICBjb25zdCBwcmVmYWIgPSBuZXcgUHJlZmFiKGRhdGEubmFtZSk7XG4gICAgbGV0IGluaGVyaXQ7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmluaGVyaXQpKSB7XG4gICAgICBpbmhlcml0ID0gZGF0YS5pbmhlcml0O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEuaW5oZXJpdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGluaGVyaXQgPSBbZGF0YS5pbmhlcml0XTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5oZXJpdCA9IFtdO1xuICAgIH1cblxuICAgIHByZWZhYi5pbmhlcml0ID0gaW5oZXJpdC5tYXAocGFyZW50ID0+IHtcbiAgICAgIGNvbnN0IHJlZiA9IHRoaXMuZ2V0KHBhcmVudCk7XG5cbiAgICAgIGlmICghcmVmKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgUHJlZmFiIFwiJHtkYXRhLm5hbWV9XCIgY2Fubm90IGluaGVyaXQgZnJvbSBQcmVmYWIgXCIke3BhcmVudH1cIiBiZWNhdXNlIGlzIG5vdCByZWdpc3RlcmVkIHlldCEgUHJlZmFicyBtdXN0IGJlIHJlZ2lzdGVyZWQgaW4gdGhlIHJpZ2h0IG9yZGVyLmApO1xuICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVmO1xuICAgIH0pO1xuICAgIGNvbnN0IGNvbXBzID0gZGF0YS5jb21wb25lbnRzIHx8IFtdO1xuICAgIGNvbXBzLmZvckVhY2goY29tcG9uZW50RGF0YSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGNvbXBvbmVudERhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IGNrZXkgPSBjYW1lbFN0cmluZyhjb21wb25lbnREYXRhKTtcblxuICAgICAgICBjb25zdCBjbGF6eiA9IHRoaXMuX2VuZ2luZS5fY29tcG9uZW50cy5nZXQoY2tleSk7XG5cbiAgICAgICAgaWYgKGNsYXp6KSB7XG4gICAgICAgICAgcHJlZmFiLmFkZENvbXBvbmVudChuZXcgUHJlZmFiQ29tcG9uZW50KGNsYXp6KSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50RGF0YSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgY2tleSA9IGNhbWVsU3RyaW5nKGNvbXBvbmVudERhdGEudHlwZSk7XG5cbiAgICAgICAgY29uc3QgY2xhenogPSB0aGlzLl9lbmdpbmUuX2NvbXBvbmVudHMuZ2V0KGNrZXkpO1xuXG4gICAgICAgIGlmIChjbGF6eikge1xuICAgICAgICAgIHByZWZhYi5hZGRDb21wb25lbnQobmV3IFByZWZhYkNvbXBvbmVudChjbGF6eiwgY29tcG9uZW50RGF0YS5wcm9wZXJ0aWVzLCBjb21wb25lbnREYXRhLm92ZXJ3cml0ZSkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zb2xlLndhcm4oYFVucmVjb2duaXplZCBjb21wb25lbnQgcmVmZXJlbmNlIFwiJHtjb21wb25lbnREYXRhfVwiIGluIHByZWZhYiBcIiR7ZGF0YS5uYW1lfVwiLiBFbnN1cmUgdGhlIGNvbXBvbmVudCBpcyByZWdpc3RlcmVkIGJlZm9yZSB0aGUgcHJlZmFiLmApO1xuICAgIH0pO1xuICAgIHJldHVybiBwcmVmYWI7XG4gIH1cblxuICByZWdpc3RlcihkYXRhKSB7XG4gICAgY29uc3QgcHJlZmFiID0gdGhpcy5kZXNlcmlhbGl6ZShkYXRhKTtcbiAgICB0aGlzLl9wcmVmYWJzW3ByZWZhYi5uYW1lXSA9IHByZWZhYjtcbiAgfVxuXG4gIGdldChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ByZWZhYnNbbmFtZV07XG4gIH1cblxuICBjcmVhdGUod29ybGQsIG5hbWUsIHByb3BlcnRpZXMgPSB7fSkge1xuICAgIGNvbnN0IHByZWZhYiA9IHRoaXMuZ2V0KG5hbWUpO1xuXG4gICAgaWYgKCFwcmVmYWIpIHtcbiAgICAgIGNvbnNvbGUud2FybihgQ291bGQgbm90IGluc3RhbnRpYXRlIHByZWZhYiBcIiR7bmFtZX1cIiBzaW5jZSBpdCBpcyBub3QgcmVnaXN0ZXJlZGApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVudGl0eSA9IHdvcmxkLmNyZWF0ZUVudGl0eSgpO1xuICAgIGVudGl0eS5fcWVsaWdpYmxlID0gZmFsc2U7XG4gICAgcHJlZmFiLmFwcGx5VG9FbnRpdHkoZW50aXR5LCBwcm9wZXJ0aWVzKTtcbiAgICBlbnRpdHkuX3FlbGlnaWJsZSA9IHRydWU7XG5cbiAgICBlbnRpdHkuX2NhbmRpZGFjeSgpO1xuXG4gICAgcmV0dXJuIGVudGl0eTtcbiAgfVxuXG59XG5cbmNsYXNzIENvbXBvbmVudCB7XG4gIGdldCB3b3JsZCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbnRpdHkud29ybGQ7XG4gIH1cblxuICBnZXQgYWxsb3dNdWx0aXBsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5hbGxvd011bHRpcGxlO1xuICB9XG5cbiAgZ2V0IGtleVByb3BlcnR5KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmtleVByb3BlcnR5O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllcyA9IHt9KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLmNvbnN0cnVjdG9yLnByb3BlcnRpZXMsIHByb3BlcnRpZXMpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVudGl0eS5yZW1vdmUodGhpcyk7XG4gIH1cblxuICBfb25EZXN0cm95ZWQoKSB7XG4gICAgdGhpcy5vbkRlc3Ryb3llZCgpO1xuICAgIGRlbGV0ZSB0aGlzLmVudGl0eTtcbiAgfVxuXG4gIF9vbkV2ZW50KGV2dCkge1xuICAgIHRoaXMub25FdmVudChldnQpO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzW2V2dC5oYW5kbGVyTmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXNbZXZ0LmhhbmRsZXJOYW1lXShldnQpO1xuICAgIH1cbiAgfVxuXG4gIF9vbkF0dGFjaGVkKGVudGl0eSkge1xuICAgIHRoaXMuZW50aXR5ID0gZW50aXR5O1xuICAgIHRoaXMub25BdHRhY2hlZChlbnRpdHkpO1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIGNvbnN0IG9iID0ge307XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmNvbnN0cnVjdG9yLnByb3BlcnRpZXMpIHtcbiAgICAgIG9iW2tleV0gPSB0aGlzW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iO1xuICB9XG5cbiAgb25BdHRhY2hlZChlbnRpdHkpIHt9XG5cbiAgb25EZXN0cm95ZWQoKSB7fVxuXG4gIG9uRXZlbnQoZXZ0KSB7fVxuXG59XG5cbl9kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQsIFwiYWxsb3dNdWx0aXBsZVwiLCBmYWxzZSk7XG5cbl9kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQsIFwia2V5UHJvcGVydHlcIiwgbnVsbCk7XG5cbl9kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQsIFwicHJvcGVydGllc1wiLCB7fSk7XG5cbmNsYXNzIEVudGl0eUV2ZW50IHtcbiAgY29uc3RydWN0b3IobmFtZSwgZGF0YSA9IHt9KSB7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZGF0YVwiLCB7fSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwcmV2ZW50ZWRcIiwgZmFsc2UpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaGFuZGxlZFwiLCBmYWxzZSk7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5oYW5kbGVyTmFtZSA9IGNhbWVsU3RyaW5nKGBvbiAke3RoaXMubmFtZX1gKTtcbiAgfVxuXG4gIGlzKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lID09PSBuYW1lO1xuICB9XG5cbiAgaGFuZGxlKCkge1xuICAgIHRoaXMuaGFuZGxlZCA9IHRydWU7XG4gICAgdGhpcy5wcmV2ZW50ZWQgPSB0cnVlO1xuICB9XG5cbiAgcHJldmVudCgpIHtcbiAgICB0aGlzLnByZXZlbnRlZCA9IHRydWU7XG4gIH1cblxufVxuXG5jb25zdCBPTkUgPSAxbjtcbmNvbnN0IHN1YnRyYWN0Qml0ID0gKG51bSwgYml0KSA9PiB7XG4gIHJldHVybiBudW0gJiB+KDFuIDw8IGJpdCk7XG59O1xuY29uc3QgYWRkQml0ID0gKG51bSwgYml0KSA9PiB7XG4gIHJldHVybiBudW0gfCBPTkUgPDwgYml0O1xufTtcbmNvbnN0IGhhc0JpdCA9IChudW0sIGJpdCkgPT4ge1xuICByZXR1cm4gKG51bSA+PiBiaXQpICUgMm4gIT09IDBuO1xufTtcbmNvbnN0IGJpdEludGVyc2VjdGlvbiA9IChuMSwgbjIpID0+IHtcbiAgcmV0dXJuIG4xICYgbjI7XG59O1xuXG5jb25zdCBhdHRhY2hDb21wb25lbnQgPSAoZW50aXR5LCBjb21wb25lbnQpID0+IHtcbiAgY29uc3Qga2V5ID0gY29tcG9uZW50Ll9ja2V5O1xuICBlbnRpdHlba2V5XSA9IGNvbXBvbmVudDtcbiAgZW50aXR5LmNvbXBvbmVudHNba2V5XSA9IGNvbXBvbmVudDtcbn07XG5cbmNvbnN0IGF0dGFjaENvbXBvbmVudEtleWVkID0gKGVudGl0eSwgY29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IGtleSA9IGNvbXBvbmVudC5fY2tleTtcblxuICBpZiAoIWVudGl0eS5jb21wb25lbnRzW2tleV0pIHtcbiAgICBlbnRpdHlba2V5XSA9IHt9O1xuICAgIGVudGl0eS5jb21wb25lbnRzW2tleV0gPSB7fTtcbiAgfVxuXG4gIGVudGl0eVtrZXldW2NvbXBvbmVudFtjb21wb25lbnQua2V5UHJvcGVydHldXSA9IGNvbXBvbmVudDtcbiAgZW50aXR5LmNvbXBvbmVudHNba2V5XVtjb21wb25lbnRbY29tcG9uZW50LmtleVByb3BlcnR5XV0gPSBjb21wb25lbnQ7XG59O1xuXG5jb25zdCBhdHRhY2hDb21wb25lbnRBcnJheSA9IChlbnRpdHksIGNvbXBvbmVudCkgPT4ge1xuICBjb25zdCBrZXkgPSBjb21wb25lbnQuX2NrZXk7XG5cbiAgaWYgKCFlbnRpdHkuY29tcG9uZW50c1trZXldKSB7XG4gICAgZW50aXR5W2tleV0gPSBbXTtcbiAgICBlbnRpdHkuY29tcG9uZW50c1trZXldID0gW107XG4gIH1cblxuICBlbnRpdHlba2V5XS5wdXNoKGNvbXBvbmVudCk7XG4gIGVudGl0eS5jb21wb25lbnRzW2tleV0ucHVzaChjb21wb25lbnQpO1xufTtcblxuY29uc3QgcmVtb3ZlQ29tcG9uZW50ID0gKGVudGl0eSwgY29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IGtleSA9IGNvbXBvbmVudC5fY2tleTtcbiAgZGVsZXRlIGVudGl0eVtrZXldO1xuICBkZWxldGUgZW50aXR5LmNvbXBvbmVudHNba2V5XTtcbiAgZW50aXR5Ll9jYml0cyA9IHN1YnRyYWN0Qml0KGVudGl0eS5fY2JpdHMsIGNvbXBvbmVudC5fY2JpdCk7XG5cbiAgZW50aXR5Ll9jYW5kaWRhY3koKTtcbn07XG5cbmNvbnN0IHJlbW92ZUNvbXBvbmVudEtleWVkID0gKGVudGl0eSwgY29tcG9uZW50KSA9PiB7XG4gIGNvbnN0IGtleSA9IGNvbXBvbmVudC5fY2tleTtcbiAgY29uc3Qga2V5UHJvcCA9IGNvbXBvbmVudFtjb21wb25lbnQua2V5UHJvcGVydHldO1xuICBkZWxldGUgZW50aXR5W2tleV1ba2V5UHJvcF07XG4gIGRlbGV0ZSBlbnRpdHkuY29tcG9uZW50c1trZXldW2tleVByb3BdO1xuXG4gIGlmIChPYmplY3Qua2V5cyhlbnRpdHlba2V5XSkubGVuZ3RoIDw9IDApIHtcbiAgICBkZWxldGUgZW50aXR5W2tleV07XG4gICAgZGVsZXRlIGVudGl0eS5jb21wb25lbnRzW2tleV07XG4gICAgZW50aXR5Ll9jYml0cyA9IHN1YnRyYWN0Qml0KGVudGl0eS5fY2JpdHMsIGNvbXBvbmVudC5fY2JpdCk7XG5cbiAgICBlbnRpdHkuX2NhbmRpZGFjeSgpO1xuICB9XG59O1xuXG5jb25zdCByZW1vdmVDb21wb25lbnRBcnJheSA9IChlbnRpdHksIGNvbXBvbmVudCkgPT4ge1xuICBjb25zdCBrZXkgPSBjb21wb25lbnQuX2NrZXk7XG4gIGNvbnN0IGlkeCA9IGVudGl0eVtrZXldLmluZGV4T2YoY29tcG9uZW50KTtcbiAgZW50aXR5W2tleV0uc3BsaWNlKGlkeCwgMSk7XG4gIGVudGl0eS5jb21wb25lbnRzW2tleV0uc3BsaWNlKGlkeCwgMSk7XG5cbiAgaWYgKGVudGl0eVtrZXldLmxlbmd0aCA8PSAwKSB7XG4gICAgZGVsZXRlIGVudGl0eVtrZXldO1xuICAgIGRlbGV0ZSBlbnRpdHkuY29tcG9uZW50c1trZXldO1xuICAgIGVudGl0eS5fY2JpdHMgPSBzdWJ0cmFjdEJpdChlbnRpdHkuX2NiaXRzLCBjb21wb25lbnQuX2NiaXQpO1xuXG4gICAgZW50aXR5Ll9jYW5kaWRhY3koKTtcbiAgfVxufTtcblxuY29uc3Qgc2VyaWFsaXplQ29tcG9uZW50ID0gY29tcG9uZW50ID0+IHtcbiAgcmV0dXJuIGNvbXBvbmVudC5zZXJpYWxpemUoKTtcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZUNvbXBvbmVudEFycmF5ID0gYXJyID0+IHtcbiAgcmV0dXJuIGFyci5tYXAoc2VyaWFsaXplQ29tcG9uZW50KTtcbn07XG5cbmNvbnN0IHNlcmlhbGl6ZUNvbXBvbmVudEtleWVkID0gb2IgPT4ge1xuICBjb25zdCBzZXIgPSB7fTtcblxuICBmb3IgKGNvbnN0IGsgaW4gb2IpIHtcbiAgICBzZXJba10gPSBzZXJpYWxpemVDb21wb25lbnQob2Jba10pO1xuICB9XG5cbiAgcmV0dXJuIHNlcjtcbn07XG5cbmNsYXNzIEVudGl0eSB7XG4gIGNvbnN0cnVjdG9yKHdvcmxkLCBpZCkge1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9jYml0c1wiLCAwbik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfcWVsaWdpYmxlXCIsIHRydWUpO1xuXG4gICAgdGhpcy53b3JsZCA9IHdvcmxkO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICB0aGlzLmlzRGVzdHJveWVkID0gZmFsc2U7XG4gIH1cblxuICBfY2FuZGlkYWN5KCkge1xuICAgIGlmICh0aGlzLl9xZWxpZ2libGUpIHtcbiAgICAgIHRoaXMud29ybGQuX2NhbmRpZGF0ZSh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBhZGQoY2xhenosIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgY2xhenoocHJvcGVydGllcyk7XG5cbiAgICBpZiAoY29tcG9uZW50LmtleVByb3BlcnR5KSB7XG4gICAgICBhdHRhY2hDb21wb25lbnRLZXllZCh0aGlzLCBjb21wb25lbnQpO1xuICAgIH0gZWxzZSBpZiAoY29tcG9uZW50LmFsbG93TXVsdGlwbGUpIHtcbiAgICAgIGF0dGFjaENvbXBvbmVudEFycmF5KHRoaXMsIGNvbXBvbmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF0dGFjaENvbXBvbmVudCh0aGlzLCBjb21wb25lbnQpO1xuICAgIH1cblxuICAgIHRoaXMuX2NiaXRzID0gYWRkQml0KHRoaXMuX2NiaXRzLCBjb21wb25lbnQuX2NiaXQpO1xuXG4gICAgY29tcG9uZW50Ll9vbkF0dGFjaGVkKHRoaXMpO1xuXG4gICAgdGhpcy5fY2FuZGlkYWN5KCk7XG4gIH1cblxuICBoYXMoY2xhenopIHtcbiAgICByZXR1cm4gaGFzQml0KHRoaXMuX2NiaXRzLCBjbGF6ei5wcm90b3R5cGUuX2NiaXQpO1xuICB9XG5cbiAgcmVtb3ZlKGNvbXBvbmVudCkge1xuICAgIGlmIChjb21wb25lbnQua2V5UHJvcGVydHkpIHtcbiAgICAgIHJlbW92ZUNvbXBvbmVudEtleWVkKHRoaXMsIGNvbXBvbmVudCk7XG4gICAgfSBlbHNlIGlmIChjb21wb25lbnQuYWxsb3dNdWx0aXBsZSkge1xuICAgICAgcmVtb3ZlQ29tcG9uZW50QXJyYXkodGhpcywgY29tcG9uZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlQ29tcG9uZW50KHRoaXMsIGNvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50Ll9vbkRlc3Ryb3llZCgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBmb3IgKGNvbnN0IGsgaW4gdGhpcy5jb21wb25lbnRzKSB7XG4gICAgICBjb25zdCB2ID0gdGhpcy5jb21wb25lbnRzW2tdO1xuXG4gICAgICBpZiAodiBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgICB0aGlzLl9jYml0cyA9IHN1YnRyYWN0Qml0KHRoaXMuX2NiaXRzLCB2Ll9jYml0KTtcblxuICAgICAgICB2Ll9vbkRlc3Ryb3llZCgpO1xuICAgICAgfSBlbHNlIGlmICh2IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2Ygdikge1xuICAgICAgICAgIHRoaXMuX2NiaXRzID0gc3VidHJhY3RCaXQodGhpcy5fY2JpdHMsIGNvbXBvbmVudC5fY2JpdCk7XG5cbiAgICAgICAgICBjb21wb25lbnQuX29uRGVzdHJveWVkKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIE9iamVjdC52YWx1ZXModikpIHtcbiAgICAgICAgICB0aGlzLl9jYml0cyA9IHN1YnRyYWN0Qml0KHRoaXMuX2NiaXRzLCBjb21wb25lbnQuX2NiaXQpO1xuXG4gICAgICAgICAgY29tcG9uZW50Ll9vbkRlc3Ryb3llZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0aGlzW2tdO1xuICAgICAgZGVsZXRlIHRoaXMuY29tcG9uZW50c1trXTtcbiAgICB9XG5cbiAgICB0aGlzLl9jYW5kaWRhY3koKTtcblxuICAgIHRoaXMud29ybGQuX2Rlc3Ryb3llZCh0aGlzLmlkKTtcblxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgIHRoaXMuaXNEZXN0cm95ZWQgPSB0cnVlO1xuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSB7fTtcblxuICAgIGZvciAoY29uc3QgayBpbiB0aGlzLmNvbXBvbmVudHMpIHtcbiAgICAgIGNvbnN0IHYgPSB0aGlzLmNvbXBvbmVudHNba107XG5cbiAgICAgIGlmICh2IGluc3RhbmNlb2YgQ29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudHNba10gPSBzZXJpYWxpemVDb21wb25lbnQodik7XG4gICAgICB9IGVsc2UgaWYgKHYgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBjb21wb25lbnRzW2tdID0gc2VyaWFsaXplQ29tcG9uZW50QXJyYXkodik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnRzW2tdID0gc2VyaWFsaXplQ29tcG9uZW50S2V5ZWQodik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgLi4uY29tcG9uZW50c1xuICAgIH07XG4gIH1cblxuICBmaXJlRXZlbnQobmFtZSwgZGF0YSkge1xuICAgIGNvbnN0IGV2dCA9IG5ldyBFbnRpdHlFdmVudChuYW1lLCBkYXRhKTtcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29tcG9uZW50cykge1xuICAgICAgY29uc3QgdiA9IHRoaXMuY29tcG9uZW50c1trZXldO1xuXG4gICAgICBpZiAodiBpbnN0YW5jZW9mIENvbXBvbmVudCkge1xuICAgICAgICB2Ll9vbkV2ZW50KGV2dCk7XG5cbiAgICAgICAgaWYgKGV2dC5wcmV2ZW50ZWQpIHtcbiAgICAgICAgICByZXR1cm4gZXZ0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHYgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2W2ldLl9vbkV2ZW50KGV2dCk7XG5cbiAgICAgICAgICBpZiAoZXZ0LnByZXZlbnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGV2dDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIE9iamVjdC52YWx1ZXModikpIHtcbiAgICAgICAgICBjb21wb25lbnQuX29uRXZlbnQoZXZ0KTtcblxuICAgICAgICAgIGlmIChldnQucHJldmVudGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZXZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBldnQ7XG4gIH1cblxufVxuXG5jbGFzcyBRdWVyeSB7XG4gIGNvbnN0cnVjdG9yKHdvcmxkLCBmaWx0ZXJzKSB7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2NhY2hlXCIsIFtdKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9vbkFkZExpc3RlbmVyc1wiLCBbXSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfb25SZW1vdmVMaXN0ZW5lcnNcIiwgW10pO1xuXG4gICAgdGhpcy5fd29ybGQgPSB3b3JsZDtcbiAgICBjb25zdCBhbnkgPSBmaWx0ZXJzLmFueSB8fCBbXTtcbiAgICBjb25zdCBhbGwgPSBmaWx0ZXJzLmFsbCB8fCBbXTtcbiAgICBjb25zdCBub25lID0gZmlsdGVycy5ub25lIHx8IFtdO1xuICAgIHRoaXMuX2FueSA9IGFueS5yZWR1Y2UoKHMsIGMpID0+IHtcbiAgICAgIHJldHVybiBhZGRCaXQocywgYy5wcm90b3R5cGUuX2NiaXQpO1xuICAgIH0sIDBuKTtcbiAgICB0aGlzLl9hbGwgPSBhbGwucmVkdWNlKChzLCBjKSA9PiB7XG4gICAgICByZXR1cm4gYWRkQml0KHMsIGMucHJvdG90eXBlLl9jYml0KTtcbiAgICB9LCAwbik7XG4gICAgdGhpcy5fbm9uZSA9IG5vbmUucmVkdWNlKChzLCBjKSA9PiB7XG4gICAgICByZXR1cm4gYWRkQml0KHMsIGMucHJvdG90eXBlLl9jYml0KTtcbiAgICB9LCAwbik7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBvbkVudGl0eUFkZGVkKGZuKSB7XG4gICAgdGhpcy5fb25BZGRMaXN0ZW5lcnMucHVzaChmbik7XG4gIH1cblxuICBvbkVudGl0eVJlbW92ZWQoZm4pIHtcbiAgICB0aGlzLl9vblJlbW92ZUxpc3RlbmVycy5wdXNoKGZuKTtcbiAgfVxuXG4gIGhhcyhlbnRpdHkpIHtcbiAgICByZXR1cm4gdGhpcy5pZHgoZW50aXR5KSA+PSAwO1xuICB9XG5cbiAgaWR4KGVudGl0eSkge1xuICAgIHJldHVybiB0aGlzLl9jYWNoZS5pbmRleE9mKGVudGl0eSk7XG4gIH1cblxuICBtYXRjaGVzKGVudGl0eSkge1xuICAgIGNvbnN0IGJpdHMgPSBlbnRpdHkuX2NiaXRzO1xuICAgIGNvbnN0IGFueSA9IHRoaXMuX2FueSA9PT0gMG4gfHwgYml0SW50ZXJzZWN0aW9uKGJpdHMsIHRoaXMuX2FueSkgPiAwO1xuXG4gICAgY29uc3QgYWxsID0gYml0SW50ZXJzZWN0aW9uKGJpdHMsIHRoaXMuX2FsbCkgPT09IHRoaXMuX2FsbDtcblxuICAgIGNvbnN0IG5vbmUgPSBiaXRJbnRlcnNlY3Rpb24oYml0cywgdGhpcy5fbm9uZSkgPT09IDBuO1xuICAgIHJldHVybiBhbnkgJiYgYWxsICYmIG5vbmU7XG4gIH1cblxuICBjYW5kaWRhdGUoZW50aXR5KSB7XG4gICAgY29uc3QgaWR4ID0gdGhpcy5pZHgoZW50aXR5KTtcbiAgICBjb25zdCBpc1RyYWNraW5nID0gaWR4ID49IDA7XG5cbiAgICBpZiAoIWVudGl0eS5pc0Rlc3Ryb3llZCAmJiB0aGlzLm1hdGNoZXMoZW50aXR5KSkge1xuICAgICAgaWYgKCFpc1RyYWNraW5nKSB7XG4gICAgICAgIHRoaXMuX2NhY2hlLnB1c2goZW50aXR5KTtcblxuICAgICAgICB0aGlzLl9vbkFkZExpc3RlbmVycy5mb3JFYWNoKGNiID0+IGNiKGVudGl0eSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNUcmFja2luZykge1xuICAgICAgdGhpcy5fY2FjaGUuc3BsaWNlKGlkeCwgMSk7XG5cbiAgICAgIHRoaXMuX29uUmVtb3ZlTGlzdGVuZXJzLmZvckVhY2goY2IgPT4gY2IoZW50aXR5KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLl9jYWNoZSA9IFtdO1xuXG4gICAgdGhpcy5fd29ybGQuX2VudGl0aWVzLmZvckVhY2goZW50aXR5ID0+IHtcbiAgICAgIHRoaXMuY2FuZGlkYXRlKGVudGl0eSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlO1xuICB9XG5cbn1cblxuY2xhc3MgV29ybGQge1xuICBjb25zdHJ1Y3RvcihlbmdpbmUpIHtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaWRcIiwgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfcXVlcmllc1wiLCBbXSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfZW50aXRpZXNcIiwgbmV3IE1hcCgpKTtcblxuICAgIHRoaXMuZW5naW5lID0gZW5naW5lO1xuICB9XG5cbiAgY3JlYXRlSWQoKSB7XG4gICAgcmV0dXJuICsrdGhpcy5faWQgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7XG4gIH1cblxuICBnZXRFbnRpdHkoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5fZW50aXRpZXMuZ2V0KGlkKTtcbiAgfVxuXG4gIGdldEVudGl0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdGllcy52YWx1ZXMoKTtcbiAgfVxuXG4gIGNyZWF0ZUVudGl0eShpZCA9IHRoaXMuY3JlYXRlSWQoKSkge1xuICAgIGNvbnN0IGVudGl0eSA9IG5ldyBFbnRpdHkodGhpcywgaWQpO1xuXG4gICAgdGhpcy5fZW50aXRpZXMuc2V0KGlkLCBlbnRpdHkpO1xuXG4gICAgcmV0dXJuIGVudGl0eTtcbiAgfVxuXG4gIGRlc3Ryb3lFbnRpdHkoaWQpIHtcbiAgICBjb25zdCBlbnRpdHkgPSB0aGlzLmdldEVudGl0eShpZCk7XG5cbiAgICBpZiAoZW50aXR5KSB7XG4gICAgICBlbnRpdHkuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3lFbnRpdGllcygpIHtcbiAgICB0aGlzLl9lbnRpdGllcy5mb3JFYWNoKGVudGl0eSA9PiB7XG4gICAgICBlbnRpdHkuZGVzdHJveSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3lFbnRpdGllcygpO1xuICAgIHRoaXMuX2lkID0gMDtcbiAgICB0aGlzLl9xdWVyaWVzID0gW107XG4gICAgdGhpcy5fZW50aXRpZXMgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBjcmVhdGVRdWVyeShmaWx0ZXJzKSB7XG4gICAgY29uc3QgcXVlcnkgPSBuZXcgUXVlcnkodGhpcywgZmlsdGVycyk7XG5cbiAgICB0aGlzLl9xdWVyaWVzLnB1c2gocXVlcnkpO1xuXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgY3JlYXRlUHJlZmFiKG5hbWUsIHByb3BlcnRpZXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmVuZ2luZS5fcHJlZmFicy5jcmVhdGUodGhpcywgbmFtZSwgcHJvcGVydGllcyk7XG4gIH1cblxuICBzZXJpYWxpemUoZW50aXRpZXMpIHtcbiAgICBjb25zdCBqc29uID0gW107XG4gICAgY29uc3QgbGlzdCA9IGVudGl0aWVzIHx8IHRoaXMuX2VudGl0aWVzO1xuICAgIGxpc3QuZm9yRWFjaChlID0+IHtcbiAgICAgIGpzb24ucHVzaChlLnNlcmlhbGl6ZSgpKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgZW50aXRpZXM6IGpzb25cbiAgICB9O1xuICB9XG5cbiAgZGVzZXJpYWxpemUoZGF0YSkge1xuICAgIGZvciAoY29uc3QgZW50aXR5RGF0YSBvZiBkYXRhLmVudGl0aWVzKSB7XG4gICAgICB0aGlzLl9jcmVhdGVPckdldEVudGl0eUJ5SWQoZW50aXR5RGF0YS5pZCk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBlbnRpdHlEYXRhIG9mIGRhdGEuZW50aXRpZXMpIHtcbiAgICAgIHRoaXMuX2Rlc2VyaWFsaXplRW50aXR5KGVudGl0eURhdGEpO1xuICAgIH1cbiAgfVxuXG4gIF9jcmVhdGVPckdldEVudGl0eUJ5SWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRFbnRpdHkoaWQpIHx8IHRoaXMuY3JlYXRlRW50aXR5KGlkKTtcbiAgfVxuXG4gIF9kZXNlcmlhbGl6ZUVudGl0eShkYXRhKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICAuLi5jb21wb25lbnRzXG4gICAgfSA9IGRhdGE7XG5cbiAgICBjb25zdCBlbnRpdHkgPSB0aGlzLl9jcmVhdGVPckdldEVudGl0eUJ5SWQoaWQpO1xuXG4gICAgZW50aXR5Ll9xZWxpZ2libGUgPSBmYWxzZTtcbiAgICBPYmplY3QuZW50cmllcyhjb21wb25lbnRzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGNvbnN0IHR5cGUgPSBjYW1lbFN0cmluZyhrZXkpO1xuXG4gICAgICBjb25zdCBkZWYgPSB0aGlzLmVuZ2luZS5fY29tcG9uZW50cy5nZXQodHlwZSk7XG5cbiAgICAgIGlmIChkZWYuYWxsb3dNdWx0aXBsZSkge1xuICAgICAgICBPYmplY3QudmFsdWVzKHZhbHVlKS5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgIGVudGl0eS5hZGQoZGVmLCBkKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbnRpdHkuYWRkKGRlZiwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGVudGl0eS5fcWVsaWdpYmxlID0gdHJ1ZTtcblxuICAgIGVudGl0eS5fY2FuZGlkYWN5KCk7XG4gIH1cblxuICBfY2FuZGlkYXRlKGVudGl0eSkge1xuICAgIHRoaXMuX3F1ZXJpZXMuZm9yRWFjaChxID0+IHEuY2FuZGlkYXRlKGVudGl0eSkpO1xuICB9XG5cbiAgX2Rlc3Ryb3llZChpZCkge1xuICAgIHJldHVybiB0aGlzLl9lbnRpdGllcy5kZWxldGUoaWQpO1xuICB9XG5cbn1cblxuY2xhc3MgRW5naW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX2NvbXBvbmVudHNcIiwgbmV3IENvbXBvbmVudFJlZ2lzdHJ5KCkpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiX3ByZWZhYnNcIiwgbmV3IFByZWZhYlJlZ2lzdHJ5KHRoaXMpKTtcbiAgfVxuXG4gIHJlZ2lzdGVyQ29tcG9uZW50KGNsYXp6KSB7XG4gICAgdGhpcy5fY29tcG9uZW50cy5yZWdpc3RlcihjbGF6eik7XG4gIH1cblxuICByZWdpc3RlclByZWZhYihkYXRhKSB7XG4gICAgdGhpcy5fcHJlZmFicy5yZWdpc3RlcihkYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVdvcmxkKCkge1xuICAgIHJldHVybiBuZXcgV29ybGQodGhpcyk7XG4gIH1cblxuICBkZXN0cm95V29ybGQod29ybGQpIHtcbiAgICB3b3JsZC5kZXN0cm95KCk7XG4gIH1cblxufVxuXG5leHBvcnQgeyBDb21wb25lbnQsIEVuZ2luZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgd2dsdCBmcm9tIFwid2dsdFwiO1xyXG5pbXBvcnQgZW5naW5lIGZyb20gJy4vZWNzJztcclxuaW1wb3J0IHtBcHBlYXJhbmNlLCBDb21iYXQsIERlc2NyaXB0aW9uLCBIZWFsdGgsIFBvc2l0aW9uLCBBY3Rpb24sIE1vdmVtZW50LCBFbmVteSwgQWxseX0gZnJvbSBcIi4vY29tcG9uZW50c1wiXHJcblxyXG5cclxudmFyIGxvY2F0aW9uSWQgPSB7fVxyXG4vL2NyZWF0aW5nIHRoZSBtYXAgaW4gXCJjYW52YXNcIiB3aWR0aCA9IDgwLCBoZWlnaHQgPSA1MFxyXG5jb25zdCB0ZXJtaW5hbCA9IG5ldyB3Z2x0LlRlcm1pbmFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpLCA4MCwgNTApO1xyXG5cclxuLy9XR0xUIGxlZnRvdmVycy4gU2V0dGluZyB0aGUgd2hvbGUgbWFwIGFzIGV4cGxvcmVkIGFuZCB2aXNpYmxlIHRvIHRoZSBwbGF5ZXJcclxuZm9yIChsZXQgeSA9IDA7IHkgPCB0ZXJtaW5hbC5oZWlnaHQ7IHkrKykge1xyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0ZXJtaW5hbC53aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgdGVybWluYWwuZ3JpZFt5XVt4XS52aXNpYmxlID0gdHJ1ZVxyXG4gICAgICAgIHRlcm1pbmFsLmdyaWRbeV1beF0uZXhwbG9yZWQgPSB0cnVlXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vY3JlYXRpbmcgd29ybGQgdG8gY29udGFpbiBlbnRpdGllcyBpbiBvcmRlciB0byBlbmFibGUgcXVlcnlcclxuY29uc3Qgd29ybGQgPSBlbmdpbmUuY3JlYXRlV29ybGQoKTtcclxuLy9wbGF5ZXIgPSBodW1hbiB0ZXN0IHBpbG90XHJcbmNvbnN0IHBsYXllciA9IHdvcmxkLmNyZWF0ZVByZWZhYihcIkh1bWFuXCIpXHJcbnBsYXllci5wb3NpdGlvbi54ID0gNDBcclxucGxheWVyLnBvc2l0aW9uLnkgPSA0MFxyXG5sb2NhdGlvbklkW3BsYXllci5wb3NpdGlvbi54ICsgXCIsXCIgKyBwbGF5ZXIucG9zaXRpb24ueV0gPSBwbGF5ZXIuaWRcclxuLy96b21iaWUgPSB6b21iaWUgdGVzdCBwaWxvdFxyXG5jb25zdCB6b21iaWV4ID0gNjBcclxuY29uc3Qgem9tYmlleSA9IDIwXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgem9tYmlleDsgaSsrKSB7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHpvbWJpZXk7IGorKykge1xyXG4gICAgICAgIGxldCB6b21iaWUgPSB3b3JsZC5jcmVhdGVQcmVmYWIoXCJab21iaWVcIilcclxuICAgICAgICB6b21iaWUucG9zaXRpb24ueCA9IDgwLzItem9tYmlleC8yK2lcclxuICAgICAgICB6b21iaWUucG9zaXRpb24ueSA9IDEralxyXG4gICAgICAgIGxvY2F0aW9uSWRbem9tYmllLnBvc2l0aW9uLnggKyBcIixcIiArIHpvbWJpZS5wb3NpdGlvbi55XSA9IHpvbWJpZS5pZFxyXG4gICAgfSAgXHJcbn1cclxuLyogIEZ1Y2sgaXQgY3VzdG9tIHpvbWJpZS1lc3F1ZSBwYXRoZmluZGluZy5cclxuICAgIERpbGVtbmE6IElmIGVhY2ggem9tYmllIG9ubHkgYXR0ZW1wdHMgdG8gbW92ZSBvbmNlLCB0aGVyZSB3aWxsIGJlIGEgdHJpY2tsZS9hY2NvcmRpYW4gZWZmZWN0IGZvciBtb3ZlbWVudC5cclxuICAgIFNvbHV0aW9uIDE6IElmIGEgem9tYmllIGRvZXNuJ3QgbW92ZSwgdGhleSBkb24ndCBjb25zdW1lIHRoZWlyIGFjdGlvbiBmb3IgdGhlIHNlY29uZCBhbmQgd2FpdCBmb3IgYW4gb3BlbmluZy5cclxuICAgICAgICBQcm9zOiBMZXNzIHByb2Nlc3MtaW50ZW5zaXZlLlxyXG4gICAgICAgIENvbnM6IFdvdWxkIGNhdXNlIHByb2JhYmx5IG1pbm9yIHN0dXR0ZXJzdGVwcGluZyB0byBzdGlsbCBvY2N1clxyXG4gICAgU29sdXRpb24gMjogRG9uJ3QgcmVuZGVyIGEgZnJhbWUgdW50aWwgYWxsIHpvbWJpZXMgaGF2ZSBmaWxsZWQgaW4gZXZlcnkgc3BvdCBwb3NzaWJsZSB0byB0aGVtLlxyXG4gICAgICAgIFByb3M6IFpvbWJpZXMgd2lsbCBtb3ZlIGFzIG9uZSBtYXNzaXZlIHdhdmVcclxuICAgICAgICBDb25zOiBQb3RlbnRpYWwgdG8gYmUgZGFuZ2Vyb3VzbHkgcHJvY2Vzcy1pbnRlbnNpdmVcclxuXHJcbiAgICBET05FIC0gRGV0ZXJtaW5lIGNhcmRpbmFsIG1vdmVtZW50LCBzYXZlIHZhcmlhYmxlIFxyXG4gICAgRE9ORSAtIFpvbWJpZSBtb3ZlcyB0b3dhcmRzIG5lYXJlc3QgdGFyZ2V0XHJcbiAgICBJZiB6b21iaWUgY2FuJ3QgbW92ZSBkaXJlY3RseSB0b3dhcmRzIHRhcmdldCwgcmFuZG9tbHkgbW92ZSBsZWZ0L3JpZ2h0IG9mIHRhcmdldFxyXG4gICAgICAgIC0gSGVhZGluZyBzb3V0aCwgbW92ZSBzb3V0aHdlc3Qvc291dGhlYXN0LiBFdGMuIGZvciBvdGhlciBkaXJlY3Rpb25zXHJcbiAgICBJZiB6b21iaWUgY2FuJ3QgbW92ZSBhcm91bmQgdGFyZ2V0LCByYW5kb21seSBtb3ZlIDkwZGVnIG9mZiB0YXJnZXRcclxuICAgICAgICAtSGVhZGluZyBzb3V0aCwgbW92ZSB3ZXN0IG9yIGVhc3QsIGV0Yy5cclxuICAgIElmIHpvbWJpZSBjYW4ndCBtYWtlIGxhdGVyYWwgcHJvZ3Jlc3MsIHpvbWJpZSBkb2Vzbid0IG1vdmUuXHJcbiAgICBcclxuICAgIFNvbHV0aW9uIDEgYnJlYWs6XHJcbiAgICAgICAgSWYgem9tYmllIG1vdmVkLCB0aGV5IGhhdmUgY29uc3VtZWQgdGhlaXIgYWN0aW9uIGZvciB0aGVpciBhY3Rpb24gc3BlZWQuIEZsYWcgY29vbGRvd25cclxuICAgIFNvbHV0aW9uIDIgYnJlYWs6XHJcbiAgICAgICAgSWYgem9tYmllIG1vdmVkLCBmbGFnIGl0LlxyXG4gICAgICAgICAgICBSZW1lbWJlciB0aGUgdmFjYXRlZCBzcG90J3MgY29vcmRpbmF0ZXNcclxuICAgICAgICBJZiB6b21iaWUgZGlkbid0IG1vdmUsIGZsYWcgaXRcclxuICAgICAgICBTdGFydGluZyB3aXRoIG9wcG9zaXRlIG9mIFNvdXRoIGFuZCB3b3JraW5nIG91dCwgbW92ZSB6b21iaWUgaW4uXHJcbiAgICAgICAgICAgIEV4OiBNb3ZlIGluIE4sIE5XL05FLCBFL1dcclxuICAgICAgICAgICAgVmVyaWZ5IFpvbWJpZSdzIHRhcmdldCBkaXJlY3Rpb24uIElmIG1vdmluZyBpbnRvIG1vdmVzIGF3YXkgZnJvbSB0YXJnZXQsIHNraXAgem9tYmllLlxyXG4gICAgICAgICAgICBJZiBubyB6b21iaWVzIG1vdmUsIHNraXAgdG8gbmV4dCB2YWNhdGVkIHNwb3QuXHJcbiAgICBcclxuICAgIElmIHpvbWJpZSBpcyBhYmxlIHRvIHN1Y2Nlc3NmdWxseSBtb3ZlIGFuZCBlbmQgYWRqYWNlbnQgdG8gdGhlaXIgdGFyZ2V0LCBmbGFnIGFzICdlbmdhZ2VkJ1xyXG4gICAgRW5nYWdlZCB6b21iaWVzIG5vIGxvbmdlciBzZWFyY2ggZm9yIG5lYXJieSB0YXJnZXRzIHVudGlsIHRhcmdldCBpcyBkZWFkIG9yIG1vdmVzIG91dCBvZiByYW5nZVxyXG4gICAgUmVzdWx0OiBab21iaWVzIHdpbGwgbW92ZSBhcyBhIGhvcmRlIHRvd2FyZHMgbmVhcmVzdCB0YXJnZXRzXHJcblxyXG4gICAgVE9ETzogICBUYXJnZXQgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgIEZyZXF1ZW5jeSBvZiB0YXJnZXQgc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBNYXliZSBPbmx5IHF1ZXJ5IGZvciB0YXJnZXRzIGluIHNpdHVhdGlvbnMgd2hlcmUgYSB0YXJnZXQgaXMgcmVxdWlyZWQ/XHJcbiAgICAgICAgICAgICAgICAgICAgZXguIG5lZWRpbmcgbW92ZW1lbnQsIG5lZWRpbmcgdG8gYXR0YWNrXHJcbiAgICAgICAgICAgICAgICBQYXJ0IG9mIGdlbmVyYWwgcXVlcnkgc3dlZXAgb2Ygem9tYmllcywgaWYgem9tYmllICE9IHRhcmdldCwgYWRkIHRvIG5lZWRUYXJnZXQgbGlzdD9cclxuICAgICAgICAgICAgICAgICAgICBEdXJpbmcgcXVlcnkgc3dlZXAgb2YgZ29sZW1zLCBhc3NpZ24gem9tYmllIHRvIG5lYXJlc3QgdGFyZ2V0P1xyXG5cclxuICAgIERvIHNvbHV0aW9uIDEgZmlyc3QgYXMgcHJvb2Ygb2YgY29uY2VwdCBkdWUgdG8gYmVpbmcgbXVjaCBzaW1wbGVyXHJcbiAgICBBdHRlbXB0IHNvbHV0aW9uIDEgYW5kIDIgd2l0aCB0aGVvcmV0aWNhbCBtYXhpbXVtIG9mIHpvbWJpZXMgdG8gc2VlIHByb2Nlc3Npbmcgc3RyYWluIGFuZCBjb21wYXJlXHJcbiAgICAqL1xyXG4gLy9xdWVyeSBhcnJheVxyXG5jb25zdCBxdWVyeSA9IHtcclxuICAgIGFsbCA6IHdvcmxkLmNyZWF0ZVF1ZXJ5KHtcclxuICAgICAgICBhbGw6IFtdLFxyXG4gICAgfSksXHJcbiAgICBlbmVtaWVzIDogd29ybGQuY3JlYXRlUXVlcnkoe1xyXG4gICAgICAgIGFsbDogW0VuZW15XSxcclxuICAgIH0pLFxyXG4gICAgYWxsaWVzIDogd29ybGQuY3JlYXRlUXVlcnkoe1xyXG4gICAgICAgIGFsbDogW0FsbHldLFxyXG4gICAgfSksXHJcbn07IFxyXG5cclxuLy9jYXJkaW5hbCBkaXJlY3Rpb24gZm9yIG1vdmVtZW50XHJcbmNvbnN0IGNhcmRpbmFscyA9IFtbMCwxXSxbMSwxXSxbMSwwXSxbMSwtMV0sWzAsLTFdLFstMSwtMV0sWy0xLDBdLFstMSwxXV1cclxuXHJcbi8vQ29sbGVjdGl2ZSBvZiBhbGwgZW5lbXkgQUlcclxuLy9BSSBuZWVkcyB0byBoYXZlIHRhcmdldHRpbmcsIGF0dGFja2luZywgbW92aW5nXHJcbmZ1bmN0aW9uIGVuZW15QUkodGltZSkge1xyXG5cclxuICAgIHF1ZXJ5LmVuZW1pZXMuZ2V0KCkuZm9yRWFjaCgoZW50aXR5RW5lbXkpID0+IHtcclxuICAgICAgICAvL3pvbWJpZSBBSVxyXG5cclxuICAgICAgICBpZiAoZW50aXR5RW5lbXkuZGVzY3JpcHRpb24ubmFtZSA9PSBcIlpvbWJpZVwiKSB7XHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IDBcclxuICAgICAgICAgICAgLy9EZXRlcm1pbmUgY2xvc2VzdCBwbGF5ZXIgYWxseSB0byB6b21iaWVcclxuICAgICAgICAgICAgcXVlcnkuYWxsaWVzLmdldCgpLmZvckVhY2goKGVudGl0eUFsbHkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmh5cG90KChlbnRpdHlFbmVteS5wb3NpdGlvbi54IC0gZW50aXR5QWxseS5wb3NpdGlvbi54KSwoZW50aXR5RW5lbXkucG9zaXRpb24ueSAtIGVudGl0eUFsbHkucG9zaXRpb24ueSkpIDwgZGlzdGFuY2UgfHwgZGlzdGFuY2UgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUVuZW15LmNvbWJhdC54ID0gZW50aXR5QWxseS5wb3NpdGlvbi54XHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5RW5lbXkuY29tYmF0LnkgPSBlbnRpdHlBbGx5LnBvc2l0aW9uLnlcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlFbmVteS5jb21iYXQudGFyZ2V0ID0gZW50aXR5QWxseS5pZFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5oeXBvdCgoZW50aXR5RW5lbXkucG9zaXRpb24ueCAtIGVudGl0eUFsbHkucG9zaXRpb24ueCksKGVudGl0eUVuZW15LnBvc2l0aW9uLnkgLSBlbnRpdHlBbGx5LnBvc2l0aW9uLnkpKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGVudGl0eUVuZW15LmNvbWJhdC5kaXN0YW5jZSA9IGRpc3RhbmNlXHJcbiAgICAgICAgICAgIC8vZGV0ZXJtaW5lIGNhcmRpbmFsIG1vdmVtZW50IHRvIG5lYXJlc3QgZW5lbXlcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoZW50aXR5RW5lbXkuY29tYmF0LnggLSBlbnRpdHlFbmVteS5wb3NpdGlvbi54LCBlbnRpdHlFbmVteS5jb21iYXQueSAtIGVudGl0eUVuZW15LnBvc2l0aW9uLnkpKiAxODAgLyBNYXRoLlBJXHJcbiAgICAgICAgICAgICAgICBsZXQgbG93QW5nbGUgPSBpICogNDUgLSAyMi41XHJcbiAgICAgICAgICAgICAgICBsZXQgaGlnaEFuZ2xlID0gaSAqIDQ1ICsgMjIuNVxyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguc2lnbihsb3dBbmdsZSkgPT0gLTEpIHtsb3dBbmdsZSArPSAzNjB9XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5zaWduKGFuZ2xlKSA9PSAtMSkge2FuZ2xlICs9IDM2MH1cclxuICAgICAgICAgICAgICAgIGlmICgoaSA9PSAwICYmIChhbmdsZSA+PSAzMzcuNSB8fCBhbmdsZSA8PSAyMi41KSkgfHwgKGxvd0FuZ2xlIDw9IGFuZ2xlICYmIGFuZ2xlIDw9IGhpZ2hBbmdsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlFbmVteS5tb3ZlbWVudC54ID0gY2FyZGluYWxzW2ldWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5RW5lbXkubW92ZW1lbnQueSA9IGNhcmRpbmFsc1tpXVsxXVxyXG4gICAgICAgICAgICAgICAgICAgIGVudGl0eUVuZW15Lm1vdmVtZW50LmNhcmRpbmFsID0gaVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn1cclxuLy9xdWVyeSBhbGwgYW5kIGRvIHRoZWlyIG5leHQgYWN0aW9uLiBBdHRhY2sgZWxzZSBtb3ZlXHJcbi8vVE9ETzogTW92ZW1lbnQgZm9yIHZlbG9jaXR5ID4gMS4gSW5jcmVtZW50IHRocm91Z2ggZWFjaCBzdGVwIHRvIGRldGVybWluZSBpZiBuZXh0IHN0ZXAgaXMgY2xlYXIvYWRqYWNlbnQgdG8gdGFyZ2V0XHJcbi8vVE9ETzogTWF5YmUgcmFuZG9taXplIHRoZSBkaXJlY3Rpb24gem9tYmllcyBkZWNpZGUgdG8gZ28gd2hlbiBibG9ja2VkLlxyXG5mdW5jdGlvbiBkb0FjdGlvbih0aW1lKSB7XHJcbiAgICBxdWVyeS5hbGwuZ2V0KCkuZm9yRWFjaCgoZW50aXR5KSA9PiB7XHJcbiAgICAgICAgLy9hY3Rpb24gYXZhaWxhYmxlXHJcbiAgICAgICAgaWYgKHRpbWUgLSBlbnRpdHkuYWN0aW9uLmxhc3QgPj0gZW50aXR5LmFjdGlvbi5hZGp1c3RlZCkge1xyXG4gICAgICAgICAgICAvL3RhcmdldCBhdmFpbGFibGVcclxuICAgICAgICAgICAgaWYgKHdvcmxkLmdldEVudGl0eShlbnRpdHkuY29tYmF0LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIC8vaWYgYWRqYWNlbnQgdG8gdGFyZ2V0XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZW50aXR5LmNvbWJhdC54IC0gZW50aXR5LnBvc2l0aW9uLngpIDw9IDEgJiYgTWF0aC5hYnMoZW50aXR5LmNvbWJhdC55IC0gZW50aXR5LnBvc2l0aW9uLnkpIDw9IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2FkamFjZW50XHJcbiAgICAgICAgICAgICAgICAvL1RPRE86VmVsb2NpdHlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFsb2NhdGlvbklkWyhlbnRpdHkucG9zaXRpb24ueCArIGVudGl0eS5tb3ZlbWVudC54KSArIFwiLFwiICsgKGVudGl0eS5wb3NpdGlvbi55ICsgZW50aXR5Lm1vdmVtZW50LnkpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2VtcHR5XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9mcm9udCBsZWZ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbG9jYXRpb25JZFsoZW50aXR5LnBvc2l0aW9uLnggKyBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCArIDEpICUgOClbMF0pICsgXCIsXCIgKyAoZW50aXR5LnBvc2l0aW9uLnkgKyBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCArIDEpICUgOClbMV0pXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVtZW50LnggPSBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCArIDEpICUgOClbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5tb3ZlbWVudC55ID0gY2FyZGluYWxzLmF0KChlbnRpdHkubW92ZW1lbnQuY2FyZGluYWwgKyAxKSAlIDgpWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZnJvbnQgcmlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghbG9jYXRpb25JZFsoZW50aXR5LnBvc2l0aW9uLnggKyBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCAtIDEpICUgOClbMF0pICsgXCIsXCIgKyAoZW50aXR5LnBvc2l0aW9uLnkgKyBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCAtIDEpICUgOClbMV0pXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVtZW50LnggPSBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCAtIDEpICUgOClbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5tb3ZlbWVudC55ID0gY2FyZGluYWxzLmF0KChlbnRpdHkubW92ZW1lbnQuY2FyZGluYWwgLSAxKSAlIDgpWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2lkZSBsZWZ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWxvY2F0aW9uSWRbKGVudGl0eS5wb3NpdGlvbi54ICsgY2FyZGluYWxzLmF0KChlbnRpdHkubW92ZW1lbnQuY2FyZGluYWwgKyAyKSAlIDgpWzBdKSArIFwiLFwiICsgKGVudGl0eS5wb3NpdGlvbi55ICsgY2FyZGluYWxzLmF0KChlbnRpdHkubW92ZW1lbnQuY2FyZGluYWwgKyAyKSAlIDgpWzFdKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5tb3ZlbWVudC54ID0gY2FyZGluYWxzLmF0KChlbnRpdHkubW92ZW1lbnQuY2FyZGluYWwgKyAyKSAlIDgpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkubW92ZW1lbnQueSA9IGNhcmRpbmFscy5hdCgoZW50aXR5Lm1vdmVtZW50LmNhcmRpbmFsICsgMikgJSA4KVsxXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3NpZGUgcmlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghbG9jYXRpb25JZFsoZW50aXR5LnBvc2l0aW9uLnggKyBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCAtIDIpICUgOClbMF0pICsgXCIsXCIgKyAoZW50aXR5LnBvc2l0aW9uLnkgKyBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCAtIDIpICUgOClbMV0pXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVtZW50LnggPSBjYXJkaW5hbHMuYXQoKGVudGl0eS5tb3ZlbWVudC5jYXJkaW5hbCAtIDIpICUgOClbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eS5tb3ZlbWVudC55ID0gY2FyZGluYWxzLmF0KChlbnRpdHkubW92ZW1lbnQuY2FyZGluYWwgLSAyKSAlIDgpWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZG9uJ3QgbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5Lm1vdmVtZW50LnggPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHkubW92ZW1lbnQueSA9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbG9jYXRpb25JZFtlbnRpdHkucG9zaXRpb24ueCArIFwiLFwiICsgZW50aXR5LnBvc2l0aW9uLnldXHJcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5LnBvc2l0aW9uLnggKz0gZW50aXR5Lm1vdmVtZW50LnhcclxuICAgICAgICAgICAgICAgICAgICBlbnRpdHkucG9zaXRpb24ueSArPSBlbnRpdHkubW92ZW1lbnQueVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uSWRbZW50aXR5LnBvc2l0aW9uLnggKyBcIixcIiArIGVudGl0eS5wb3NpdGlvbi55XSA9IGVudGl0eS5pZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vYWRqdXN0ZWQgYWN0aW9uIHNwZWVkID0gYWN0aW9uIHNwZWVkICsgKGFjdGlvbiBzcGVlZCAtICh0aW1lIHNpbmNlIGxhc3QgYXR0YWNrKSlcclxuICAgICAgICAgICAgLy9BbnkgYWN0aW9uIGFib3ZlIG9yIGJlbG93IHRoZSBhY3Rpb24gc3BlZWQgd2lsbCBhZGp1c3QgdGhlIG5leHQgYWN0aW9uIGFjY29yZGluZ2x5IHRvIGtlZXAgYWN0aW9uIHNwZWVkIG9uIGF2ZXJhZ2VcclxuICAgICAgICAgICAgLy9pLmUuIDEyMDBtcyBzaW5jZSBsYXN0IGFjdGlvbiA9PSBuZXh0IGFjdGlvbiBpcyA4MDBtcyBpbnN0ZWFkIG9mIDEwMDBtcyBcclxuICAgICAgICAgICAgZW50aXR5LmFjdGlvbi5hZGp1c3RlZCA9IGVudGl0eS5hY3Rpb24uc3BlZWQgKyBlbnRpdHkuYWN0aW9uLnNwZWVkIC0gKHRpbWUgLSBlbnRpdHkuYWN0aW9uLmxhc3QpXHJcbiAgICAgICAgICAgIGVudGl0eS5hY3Rpb24ubGFzdCA9IHRpbWVcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4gICAgLy9yZW5kZXJMb29wID0gdGhpbmdzIHRvIGRvIGV2ZXJ5IGxvb3AuXHJcbnRlcm1pbmFsLnJlbmRlckxvb3AgPSBmdW5jdGlvbih0aW1lKSB7XHJcbiAgICAvL2ZwcyBkaXNwbGF5XHJcbiAgICBpZiAodGhpcy5sYXN0UmVuZGVyVGltZSA9PT0gMCkge1xyXG4gICAgICB0aGlzLmxhc3RSZW5kZXJUaW1lID0gdGltZTtcclxuICAgICAgdGhpcy5mcHMgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJEZWx0YSA9IHRpbWUgLSB0aGlzLmxhc3RSZW5kZXJUaW1lO1xyXG4gICAgICB0aGlzLmxhc3RSZW5kZXJUaW1lID0gdGltZTtcclxuICAgICAgdGhpcy5mcHMgPSBNYXRoLnJvdW5kKDEwMDAuMCAvIHRoaXMucmVuZGVyRGVsdGEgKiAxMDApIC8gMTAwO1xyXG4gICAgICB0aGlzLmF2ZXJhZ2VGcHMgPSAwLjk1ICogdGhpcy5hdmVyYWdlRnBzICsgMC4wNSAqIHRoaXMuZnBzO1xyXG5cclxuICAgIH1cclxuICAgIC8vdXBkYXRlS2V5cyh0aW1lKSB3aWxsIHNlbmQgdGltZXN0YW1wIGZvciB0aGUgcHVycG9zZSBvZiBsaW1pdGluZyByZXBlYXRlZC9oZWxkIGtleXByZXNzZXNcclxuICAgIHRoaXMua2V5cy51cGRhdGVLZXlzKHRpbWUpO1xyXG4gICAgLy91cGRhdGUodGltZSkgd2lsbCBzZW5kIHRpbWVzdGFtcCBmb3IgdGhlIHB1cnBvc2Ugb2YgbGltaXRpbmcgcmVwZWF0ZWQvaGVsZCBtb3VzZSBjbGlja3MuIEFsc28gdHJhY2tzIGNoYW5nZSBpbiBtb3VzZSBjb29yZGluYXRlc1xyXG4gICAgdGhpcy5tb3VzZS51cGRhdGUodGltZSk7XHJcbiAgICBpZiAodGhpcy51cGRhdGUpIHtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuICAgIGVuZW15QUkodGltZSlcclxuICAgIGRvQWN0aW9uKHRpbWUpXHJcblxyXG4gICAgLy9jbGVhciBzY3JlZW5cclxuICAgIHRoaXMuZmx1c2goKTtcclxuICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIC8vZHJhd2luZyBVSVxyXG4gICAgLy9EcmF3aW5nIHRlc3QgcGlsb3QgcGxheWVyIGFuZCB6b21iaWVcclxuICAgIHF1ZXJ5LmFsbC5nZXQoKS5mb3JFYWNoKChlbnRpdHkpID0+IHtcclxuICAgIHRoaXMuZHJhd1N0cmluZyhlbnRpdHkucG9zaXRpb24ueCwgZW50aXR5LnBvc2l0aW9uLnksIGVudGl0eS5hcHBlYXJhbmNlLmNoYXIsIGVudGl0eS5hcHBlYXJhbmNlLmNvbG9yKTsgIFxyXG4gICAgfSk7XHJcbiAgICAvL2RyYXdpbmcgRlBTXHJcbiAgICB0aGlzLmRyYXdTdHJpbmcoMCwxLCBTdHJpbmcodGVybWluYWwuZnBzKSlcclxuICAgIC8vcmVuZGVyIGFsbCBvZiB0aGUgYWJvdmVcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAvL3JlcXVlc3Qgd2ViR0wgdG8gZHJhdyB0byBicm93c2VyXHJcbiAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9