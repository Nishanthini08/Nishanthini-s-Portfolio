function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

document.getElementById("year").textContent = new Date().getFullYear();

const skills = ["Java","HTML","CSS","JavaScript","MySQL","Web Technologies","OOPs","Data Structures","Algorithms","OS","DBMS","Computer Networks","VS Code","Eclipse","Figma","Logo Design"];
const projects = [
  { title: "Placement Cell Management System", desc:"A backend solution with secure authentication, student/company management, interview scheduling, bulk CSV uploads, and RESTful APIs for scalable, seamless placement operations", tech:["CSS","JavaScript","Node.js","Express.js","MongoDB",""], github:"#", demo:"#"},
  { title:"Interactive Birthday Celebration Web App", desc:"An animated, responsive platform with lights, music, confetti, balloons, cake, candle-lighting, photo gallery, puzzle-based gift unlock, and day/night theme for a personalized celebration experience.", tech:["HTML","CSS","JavaScript"], github:"https://github.com/Nishanthini08/Interactive-Birthday-Celebration-Website", demo:"https://nishanthini08.github.io/Interactive-Birthday-Celebration-Website/"},
  { title:"Tic Tac Toe Web Game", desc:"A responsive, interactive game with 2-player & vs-computer modes, reset/replay options, coin rewards via local storage, theme toggle, dynamic board rendering, and win detection logic.", tech:["HTML","CSS","JavaScript"], github:"https://github.com/Nishanthini08/Tic-Tac-Toe-Game", demo:"https://nishanthini08.github.io/Tic-Tac-Toe-Game/"}
];
const certifications = [
  { name:"Programming In Java", issuer:"NPTEL", date:"2025"},
  { name:"Problem Solving Through Programming In C", issuer:"NPTEL", date:"2023"},
  { name:"DBMS", issuer:"Infosys Sringboard", date:"2024"},
  { name:"Data Structure And Algorithm Using Java", issuer:"Infosys Sringboard", date:"2024"},
  { name:"Relational Databases & SQL: Complete Guide for Developers", issuer:"Udemy", date:"2025"},
  { name:"Web Design Course for Beginners to Intermediate", issuer:"Udemy", date:"2025"}
];

document.getElementById("skills-grid").innerHTML = skills.map(s => `<div>${s}</div>`).join("");
document.getElementById("projects-grid").innerHTML = projects.map(p => `
<div class="project-card">
  <h3>${p.title}</h3>
  <p>${p.desc}</p>
  <div>${p.tech.map(t=>`<small>${t}</small>`).join(" ")}</div>
  <div class="btn-group">
    <a href="${p.github}" class="btn outline">GitHub</a>
    <a href="${p.demo}" class="btn primary">Live Demo</a>
  </div>
</div>
`).join("");
document.getElementById("cert-grid").innerHTML = certifications.map(c => `
<div class="cert-card">
  <i data-lucide="award"></i>
  <h3>${c.name}</h3>
  <p>${c.issuer}</p>
  <small>${c.date}</small>
</div>
`).join("");
lucide.createIcons();
