const COMMANDS={help:"Supported commands: <span class='code'>about</span>, <span class='code'>experience</span>, <span class='code'>skills</span>, <span class='code'>contact</span>, <span class='code'>secret</span>, <span class='code'>history</span>, <span class='code'>clear</span.<br><br>",

about:
"Hi!...I'm Caesar Evan Santoso, i'm a Penetration Tester & Part Time Bug Bounty Hunter<br><br>",

skills:
"Penetration Testing <br> [Web Application // Mobile Application // Network // Active Directory // API]<br><br>(Still learning ^-^)",

experience:
"View full at my <a href='https://www.linkedin.com/in/c3van/' class='success link'>LinkedIn profile</a>.<br><br>",

secret:
"<span class='code'>hostname</span><br>"+
"<span class='code'>ifconfig</span><br>"+
"<span class='code'>passwd</span><br>"+
"<span class='code'>shadow</span><br>"+
"<span class='code'>nmap</span><br>"+
"<span class='code'>sqlmap</span><br>"+
"<span class='code'>uname</span><br></br>",

//Secret Command//
nmap: "Nmap 7.98 ( https://nmap.org )<br>\
Usage: nmap [Scan Type(s)] [Options] {target specification}<br>\
TARGET SPECIFICATION:<br>\
  Can pass hostnames, IP addresses, networks, etc.<br>\
  Ex: scanme.nmap.org, microsoft.com/24, 192.168.0.1; 10.0.0-255.1-254<br>\
  -iL &lt;inputfilename&gt;: Input from list of hosts/networks<br>\
  -iR &lt;num hosts&gt;: Choose random targets<br>\
  --exclude &lt;host1[,host2]&gt;: Exclude hosts/networks<br>\
<br>\
SCAN TECHNIQUES:<br>\
  -sS/sT/sA/sW/sM: TCP scans<br>\
  -sU: UDP Scan<br>\
<br>\
EXAMPLES:<br>\
  nmap -v -A scanme.nmap.org<br>\
<br>\
SEE THE MAN PAGE (https://nmap.org/book/man.html)<br><br>",

sqlmap: "        ___<br>\
       __H__<br>\
 ___ ___[,]_____ ___ ___  {1.10.3#stable}<br>\
|_ -| . [.]     | .'| . |<br>\
|___|_  [(]_|_|_|__,|  _|<br>\
      |_|V...       |_|   https://sqlmap.org<br>\
<br>\
Usage: python3 sqlmap [options]<br>\
<br>\
sqlmap: error: missing a mandatory option (-d, -u, -l, -m, -r, -g, -c, --wizard, --shell, --update, --purge, --list-tampers or --dependencies). Use -h for basic and -hh for advanced help<br><br>",

pwd:"/root<br><br>",
sudo:"usage: sudo -h | -K | -k | -V<br><br>",
ls:".ssh<br>.config<br>.bashrc<br>.profile<br>.zshrc<br>flag<br><br>",
flag:"VAN{Acumalaka}<br><br>",
id:"uid=0(root) gid=0(root) groups=0(root)<br><br>",
whoami:"root<br><br>",
hostname:"localhost<br><br>",
ifconfig:"eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500 <br> inet 192.168.110.130  netmask 255.255.255.0  broadcast 192.168.110.130 <br> inet6 aa22::bb81:ccd7:11ee:36abc  prefixlen 64  scopeid 0x20<link> <br> ether 00:0a:12:3c:45:ab  txqueuelen 1000  (Ethernet) <br> RX packets 23  bytes 3456 (3.3 KiB) <br> RX errors 0  dropped 0  overruns 0  frame 0 <br> TX packets 29  bytes 3558 (3.4 KiB) <br> TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0<br><br>lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536<br>inet 127.0.0.1  netmask 255.0.0.0<br>inet6 ::1  prefixlen 128  scopeid 0x10<host><br>loop  txqueuelen 1000  (Local Loopback)<br>RX packets 1352949  bytes 1362486151 (1.2 GiB)<br>RX errors 0  dropped 0  overruns 0  frame 0<br>TX packets 1352949  bytes 1362486151 (1.2 GiB)<br>TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0<br><br>",
passwd:"root:x:0:0:root:/root:/usr/bin/zsh <br> daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin <br> ...<br><br>",
shadow:"root:$y$j9T$GgITSsYt4sPupR8L6teKg.$vb2SXsBJH5kO2.8OvBT0TtwnYrU/rnG6isHE3EXEu9A:20532:0:99999:7:::<br>daemon:*:20532:0:99999:7:::<br><br>",
uname:"Linux kali 6.18.12+kali-amd64 #1 SMP PREEMPT_DYNAMIC Kali 6.18.12-1kali1 (2026-02-25) x86_64 GNU/Linux<br><br>",
contact:"My Email <span class='code'><a href='mailto:caesarevan23@gmail.com'>**********[at]****.com</a></span>.<br><br>",
};

// HISTORY STORAGE
let HISTORY = [];

let userInput,terminalOutput;

const app=()=>{
  userInput=document.getElementById("userInput");
  terminalOutput=document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
};

const execute=function executeCommand(input){
let output;
input=input.toLowerCase();

if(input.length===0)return;

// SAVE HISTORY (kecuali history & clear)
if(input !== "history" && input !== "clear"){
  HISTORY.push(input);
}

if(input=="clear"){
  $('.terminal-output > .terminal-line').not(':first').remove();
  return;
}

output=`<div class="terminal-line"><span class="success">
┌──(root💀v4n)-[~/root/]<br>
└─#</span> ${input}</div>`;

// HISTORY COMMAND
if(input === "history"){
  let historyOutput = "<div class='terminal-line'>";
  HISTORY.forEach((cmd, index)=>{
    historyOutput += `${String(index+1).padStart(4," ")}  ${cmd}<br>`;
  });
  historyOutput += "</div>";

  output += historyOutput;

  terminalOutput.innerHTML += `<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
  return;
}

// NORMAL COMMAND
if(!COMMANDS.hasOwnProperty(input)){
  output+=`<div class="terminal-line">${input}: command not found<br><br></div>`;
}else{
  output+=COMMANDS[input];
}

terminalOutput.innerHTML+=`<div class="terminal-line">${output}</div>`;
terminalOutput.scrollTop=terminalOutput.scrollHeight;
};

const key=function keyEvent(e){
const elm=$("#dummyKeyboard");
const cmd=elm.val();
elm.val(cmd.replace(/[^\w]+$/gi,""));

if(e.key==="Enter"){
  execute(cmd);
  userInput.innerHTML="";
  elm.val("");
}
};

const backspace=function backSpaceKeyEvent(e){
if(e.keyCode!==8&&e.keyCode!==46)return;
userInput.innerHTML=userInput.innerHTML.slice(0,userInput.innerHTML.length-1);
};

document.addEventListener("keydown",backspace);
document.addEventListener("keypress",key);
document.addEventListener("DOMContentLoaded",app);
