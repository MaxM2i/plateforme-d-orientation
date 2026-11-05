const questions = [
 {k:"VOTRE SITUATION",t:"Pour commencer, où en êtes-vous aujourd'hui ?",h:"Cela nous aide à contextualiser les pistes professionnelles.",a:["Je suis étudiant(e) ou en formation","Je travaille et souhaite évoluer","Je souhaite changer de métier","Je recherche un emploi","Je souhaite créer mon activité","Je suis en réflexion, sans projet précis"],d:["Études","Évolution","Reconversion","Recherche d'emploi","Entrepreneuriat","Exploration"]},
 {k:"VOTRE ENVIRONNEMENT",t:"Dans quel environnement vous sentez-vous le mieux ?",h:"Choisissez l'environnement qui vous attire le plus spontanément.",a:["Avec une équipe et beaucoup d'échanges","En autonomie, avec des objectifs clairs","Sur le terrain, dans l'action","Dans un environnement créatif et changeant","Dans un cadre structuré et prévisible"],d:["Collectif","Autonomie","Terrain","Créativité","Structure"]},
 {k:"VOS MOTIVATIONS",t:"Qu'est-ce qui vous donne le plus envie de vous investir ?",h:"Pensez à ce qui vous donne de l'énergie, pas à ce qui semble le plus valorisé.",a:["Aider, accompagner ou transmettre","Résoudre des problèmes et comprendre","Créer, imaginer ou concevoir","Organiser, décider et faire avancer","Construire, réparer ou produire concrètement"],d:["Utilité humaine","Analyse","Création","Pilotage","Réalisation"]},
 {k:"VOTRE RAPPORT AU CHANGEMENT",t:"Face à une situation nouvelle, votre réflexe est plutôt…",h:"Il n'y a pas de profil meilleur qu'un autre : les contextes adaptés diffèrent.",a:["Explorer et essayer rapidement","Observer et analyser avant d'agir","Échanger pour construire une solution","Suivre une méthode éprouvée","Prendre l'initiative et décider"],d:["Exploration","Analyse","Coopération","Méthode","Initiative"]},
 {k:"VOTRE MODE DE VIE",t:"Quelles conditions comptent le plus dans votre futur travail ?",h:"Vous pouvez choisir la priorité qui compte le plus aujourd'hui.",a:["Liberté et flexibilité des horaires","Stabilité et sécurité","Bon équilibre vie professionnelle / personnelle","Revenus et progression financière","Sens, utilité et contribution"],d:["Liberté","Stabilité","Équilibre","Rémunération","Sens"]},
 {k:"VOTRE PROJECTION",t:"Quel type de défi aimeriez-vous relever ?",h:"Projetez-vous dans une activité qui vous donnerait envie d'apprendre.",a:["Développer un projet ou une activité","Devenir expert(e) dans un domaine","Accompagner des personnes ou une équipe","Imaginer et lancer de nouvelles idées","Maîtriser un savoir-faire concret"],d:["Projet","Expertise","Accompagnement","Innovation","Savoir-faire"]}
];
const state={index:0,answers:[]};
const $=id=>document.getElementById(id);
function showPage(id){document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));$(id).classList.add("active");window.scrollTo({top:0,behavior:"smooth"});}
function renderQuestion(){
 const q=questions[state.index];$("questionKicker").textContent=q.k;$("questionTitle").textContent=q.t;$("questionHelp").textContent=q.h;
 $("stepCounter").textContent=`ÉTAPE ${state.index+1} / ${questions.length}`;$("progressBar").style.width=`${(state.index+1)/questions.length*100}%`;
 $("answerHint").textContent="Sélectionnez la réponse qui vous correspond le mieux.";$("nextBtn").disabled=state.answers[state.index]===undefined;
 $("nextBtn").innerHTML=state.index===questions.length-1?"Voir ma synthèse ↗":"Continuer →";
 $("answerArea").innerHTML=q.a.map((a,i)=>`<button class="answer-option ${state.answers[state.index]===i?"selected":""}" data-index="${i}"><span class="option-dot"></span><span>${a}</span></button>`).join("");
 document.querySelectorAll(".answer-option").forEach(b=>b.addEventListener("click",()=>{state.answers[state.index]=Number(b.dataset.index);renderQuestion();}));
}
function start(){state.index=0;state.answers=[];renderQuestion();showPage("assessmentPage");}
function scoreResults(){
 const selected=state.answers.map((a,i)=>questions[i].d[a]);
 const tags=[selected[1],selected[2],selected[4]].filter(Boolean);
 $("profileTags").innerHTML=tags.map(t=>`<span class="tag">${t}</span>`).join("");
 const summaries={
 "Autonomie":"Vos réponses suggèrent un attrait pour la marge de manœuvre et la responsabilité individuelle. Vérifiez dans vos expériences le niveau d'autonomie qui vous convient réellement.",
 "Collectif":"Vos réponses suggèrent que les échanges et la coopération peuvent compter dans votre épanouissement. Explorez les rôles où le travail d'équipe a un objectif clair.",
 "Terrain":"Vous semblez attiré(e) par l'action et le concret. Des environnements opérationnels ou de terrain pourraient mériter votre attention.",
 "Créativité":"La nouveauté et la conception semblent vous attirer. Il serait intéressant de tester des activités où vous pouvez proposer et expérimenter.",
 "Structure":"Un cadre lisible et des repères peuvent être importants pour vous. Cela peut être compatible avec de nombreux métiers spécialisés."
 };
 const env=selected[1];$("profileSummary").textContent=(summaries[env]||"Vos réponses dessinent plusieurs préférences à approfondir.")+" Cette première lecture reste partielle : un bilan complet vérifierait ces hypothèses avec davantage de questions et des exemples concrets.";
 const map=[
  {name:"Gestion de projet / coordination",desc:"Organiser des ressources, suivre des objectifs et faciliter la coopération.",keys:["Pilotage","Initiative","Projet","Collectif"]},
  {name:"Conseil / accompagnement",desc:"Écouter, analyser une situation et aider à construire des solutions.",keys:["Utilité humaine","Accompagnement","Collectif","Sens"]},
  {name:"Création / communication",desc:"Concevoir des contenus, des idées ou des expériences.",keys:["Création","Innovation","Exploration","Liberté"]},
  {name:"Expertise technique",desc:"Développer un savoir-faire et résoudre des problèmes spécialisés.",keys:["Analyse","Expertise","Savoir-faire","Structure"]},
  {name:"Entrepreneuriat / activité indépendante",desc:"Construire un projet, prendre des initiatives et tester une offre.",keys:["Projet","Initiative","Liberté","Innovation"]}
 ];
 const ranked=map.map(m=>({...m,score:m.keys.filter(k=>selected.includes(k)).length})).sort((a,b)=>b.score-a.score);
 $("careerList").innerHTML=ranked.slice(0,4).map((m,i)=>`<div class="career-item"><div><strong>${m.name}</strong><small>${m.desc}</small></div><span>${i===0?"À explorer en priorité":i===1?"Piste intéressante":"Autre piste"}</span></div>`).join("");
}
$("startBtn").addEventListener("click",start);$("backHome").addEventListener("click",()=>showPage("homePage"));
$("nextBtn").addEventListener("click",()=>{if(state.answers[state.index]===undefined)return;if(state.index<questions.length-1){state.index++;renderQuestion();}else{scoreResults();showPage("resultsPage");}});
$("restartBtn").addEventListener("click",start);
$("resetBtn").addEventListener("click",()=>{if(confirm("Effacer les réponses de cette démonstration et revenir à l'accueil ?")){state.index=0;state.answers=[];showPage("homePage");}});
document.querySelectorAll('[data-page="home"]').forEach(a=>a.addEventListener("click",()=>showPage("homePage")));
