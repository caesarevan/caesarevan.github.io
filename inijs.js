const COMMANDS={help:"Supported commands: <span class='code'>about</span>, <span class='code'>experience</span>, <span class='code'>skills</span>, <span class='code'>contact</span>, <span class='code'>secret</span>, <span class='code'>clear</span>.<br><br>",

about:
"Hello!<br><br>I'm Caesar Evan Santoso, i'm a <u><i>Penetration Tester</i></u> & <u><i>Part Time Bug Bounty Hunter</i></u><br><br>",

skills:
"Penetration Testing [Website/Mobile Application]<br><br>",

experience:
"View full at my <a href='https://www.linkedin.com/in/c3van/' class='success link'>LinkedIn profile</a>.<br><br>",

secret:
"/usr/bin/<span class='code'>whoami</span><br>"+
"/usr/bin/<span class='code'>hostname</span><br>"+
"/usr/sbin/<span class='code'>ifconfig</span><br>"+
"/etc/<span class='code'>passwd</span><br>"+
"/usr/bin/<span class='code'>uname</span><br></br>",

//Secret Command//
whoami:
"root<br><br>",
hostname:
"localhost<br><br>",
ifconfig:
"eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500 <br> inet 192.168.x.x  netmask 255.255.255.0  broadcast 192.168.x.x <br> inet6 x::20c:x:x:x  prefixlen 64  scopeid 0x20<link> <br> ether x:0c:x:2d:x:x  txqueuelen 1000  (Ethernet) <br> RX packets 23  bytes 3456 (3.3 KiB) <br> RX errors 0  dropped 0  overruns 0  frame 0 <br> TX packets 29  bytes 3558 (3.4 KiB) <br> TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0<br><br>",
passwd:
"root:x:0:0:root:/root:/usr/bin/zsh <br> daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin <br> bin:x:2:2:bin:/bin:/usr/sbin/nologin <br> sys:x:3:3:sys:/dev:/usr/sbin/nologin <br> sync:x:4:65534:sync:/bin:/bin/sync <br> games:x:5:60:games:/usr/games:/usr/sbin/nologin <br> man:x:6:12:man:/var/cache/man:/usr/sbin/nologin <br> lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin <br> mail:x:8:8:mail:/var/mail:/usr/sbin/nologin <br> news:x:9:9:news:/var/spool/news:/usr/sbin/nologin <br> proxy:x:13:13:proxy:/bin:/usr/sbin/nologin <br> www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin <br> backup:x:34:34:backup:/var/backups:/usr/sbin/nologin <br> irc:x:39:39:ircd:/run/ircd:/usr/sbin/nologin <br> gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin <br> nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin<br><br>",
uname:
"Linux kali 5.10.0-kali8-amd64 #1 SMP Debian 5.10.40-1kali1 (2021-05-31) x86_64 GNU/Linux<br><br>",


contact:
"My Email <span class='code'><a href='mailto:caesarevan23@gmail.com'>caesarevan23@gmail.com</a></span>.<br><br>",
};let userInput,terminalOutput;const app=()=>{userInput=document.getElementById("userInput");terminalOutput=document.getElementById("terminalOutput");document.getElementById("dummyKeyboard").focus();};const execute=function executeCommand(input){let output;input=input.toLowerCase();if(input.length===0)return;if(input=="clear"){$('.terminal-output > .terminal-line').not(':first').remove();return}

output=`<div class="terminal-line"><span class="success">
┌──(root💀v4n)-[/root/]<br>
└─#</span> <span class="directory"></span> ${input}</div>`;if(!COMMANDS.hasOwnProperty(input)){output+=`<div class="terminal-line">command not found : ${input}</div>`;}else{output+=COMMANDS[input];}
terminalOutput.innerHTML=`${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;terminalOutput.scrollTop=terminalOutput.scrollHeight;};const key=function keyEvent(e){const elm=$("#dummyKeyboard");const cmd=elm.val();elm.val(cmd.replace(/[^\w]+$/gi,""));if(e.key==="Enter"){execute(cmd);userInput.innerHTML="";elm.val("")}};const backspace=function backSpaceKeyEvent(e){if(e.keyCode!==8&&e.keyCode!==46)return;userInput.innerHTML=userInput.innerHTML.slice(0,userInput.innerHTML.length-1);};document.addEventListener("keydown",backspace);document.addEventListener("keypress",key);document.addEventListener("DOMContentLoaded",app);
