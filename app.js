const questions = [
  {id:"situation",k:"VOTRE SITUATION",t:"Où en êtes-vous aujourd'hui ?",h:"Plusieurs réponses sont possibles si votre situation est mixte.",type:"multi",max:2,options:[
    ["student","Études ou formation"],["employee","En emploi, avec envie d'évoluer"],["change","En reconversion ou réflexion de changement"],["jobseek","En recherche d'emploi"],["independent","Indépendant(e) ou entrepreneur(e)"],["explore","En exploration, sans projet précis"]
  ]},
  {id:"environment",k:"ENVIRONNEMENT",t:"Dans quels environnements pourriez-vous vous épanouir ?",h:"Choisissez jusqu'à 3 environnements et classez-les du plus attirant au moins attirant.",type:"ranked",max:3,options:[
    ["team","Une équipe collaborative"],["autonomy","Beaucoup d'autonomie"],["field","Du terrain et de l'action"],["creative","Un cadre créatif et changeant"],["structured","Un environnement structuré"],["remote","Un cadre flexible ou hybride"],["people","Un contact fréquent avec le public"]
  ]},
  {id:"motivation",k:"MOTIVATIONS",t:"Qu'est-ce qui vous donne envie de vous investir ?",h:"Sélectionnez jusqu'à 3 moteurs, puis placez le plus important en premier.",type:"ranked",max:3,options:[
    ["help","Aider, accompagner ou transmettre"],["solve","Résoudre des problèmes et comprendre"],["create","Créer, imaginer ou concevoir"],["lead","Organiser, décider et faire avancer"],["make","Construire, réparer ou produire"],["learn","Apprendre et découvrir"],["compete","Relever des défis et atteindre des objectifs"]
  ]},
  {id:"behavior",k:"COMPORTEMENTS",t:"Face à un problème inattendu, que faites-vous spontanément ?",h:"Choisissez jusqu'à 2 réactions qui vous ressemblent. Classez-les si l'une vient avant l'autre.",type:"ranked",max:2,options:[
    ["analyze","Je prends du recul et j'analyse"],["act","Je teste rapidement une solution"],["ask","Je demande des avis et échange"],["organize","Je structure un plan d'action"],["adapt","Je m'adapte au fur et à mesure"]
  ]},
  {id:"values",k:"VALEURS",t:"Quelles valeurs doivent être présentes dans votre travail ?",h:"Choisissez jusqu'à 4 valeurs. L'ordre indique leur importance actuelle.",type:"ranked",max:4,options:[
    ["useful","Utilité et contribution"],["freedom","Liberté et indépendance"],["security","Sécurité et stabilité"],["recognition","Reconnaissance"],["mastery","Maîtrise et expertise"],["solidarity","Solidarité et coopération"],["innovation","Innovation et progrès"],["fairness","Justice et équité"]
  ]},
  {id:"lifestyle",k:"MODE DE VIE",t:"Quelles conditions de vie professionnelle compte le plus ?",h:"Sélectionnez jusqu'à 3 critères et classez-les par priorité.",type:"ranked",max:3,options:[
    ["balance","Équilibre vie pro / vie perso"],["income","Rémunération et progression"],["flexibility","Horaires flexibles"],["location","Proximité géographique / peu de trajets"],["security","Stabilité de l'emploi"],["meaning","Sens et utilité du travail"],["variety","Variété des journées"]
  ]},
  {id:"strengths",k:"APTITUDES ET ATOUTS",t:"Dans quels domaines vous sentez-vous naturellement à l'aise ?",h:"Choisissez plusieurs domaines. Vous pourrez préciser votre niveau lors d'exercices dédiés.",type:"multi",max:5,options:[
    ["communication","Expliquer, écouter, convaincre"],["logic","Analyser et résoudre"],["organization","Organiser et planifier"],["creativity","Imaginer et créer"],["manual","Manipuler, réparer, fabriquer"],["digital","Utiliser les outils numériques"],["care","Accompagner et prendre soin"],["leadership","Fédérer et coordonner"],["writing","Écrire et synthétiser"]
  ]},
  {id:"learning",k:"APPRENTISSAGE",t:"Comment préférez-vous apprendre quelque chose de nouveau ?",h:"Choisissez jusqu'à 2 façons d'apprendre qui vous conviennent le mieux.",type:"ranked",max:2,options:[
    ["practice","En pratiquant directement"],["watch","En observant une démonstration"],["read","En lisant et en étudiant"],["discuss","En échangeant avec quelqu'un"],["experiment","En expérimentant librement"]
  ]},
  {id:"constraints",k:"CONTRAINTES",t:"Quelles contraintes faut-il prendre en compte ?",h:"Plusieurs réponses possibles. Ces éléments servent à rendre les pistes réalistes, pas à vous limiter.",type:"multi",max:5,options:[
    ["mobility","Mobilité géographique limitée"],["schedule","Horaires à respecter"],["family","Responsabilités familiales"],["health","Besoin d'un rythme ou cadre adapté"],["finance","Revenus à maintenir pendant une transition"],["qualification","Formation longue difficile actuellement"],["none","Aucune contrainte particulière identifiée"]
  ]},
  {id:"risk",k:"RAPPORT AU RISQUE",t:"Quelle place souhaitez-vous donner à la prise de risque ?",h:"Choisissez la réponse la plus proche de votre situation actuelle.",type:"single",options:[
    ["secure","Je privilégie la sécurité et la prévisibilité"],["measured","J'accepte un risque mesuré si le projet est préparé"],["bold","Je suis prêt(e) à prendre des risques pour un projet motivant"],["unsure","Je ne sais pas encore"]
  ]},
  {id:"projection",k:"PROJECTION",t:"Qu'aimeriez-vous avoir davantage dans votre prochaine étape professionnelle ?",h:"Choisissez jusqu'à 3 aspirations et classez-les.",type:"ranked",max:3,options:[
    ["impact","Avoir un impact concret"],["expertise","Devenir expert(e) dans un domaine"],["freedom","Gagner en liberté"],["teamlead","Encadrer ou transmettre"],["change","Changer complètement d'univers"],["build","Créer ou développer un projet"],["stability","Retrouver de la stabilité"]
  ]}
];

const careers = [
 {name:"Coordination et gestion de projet",desc:"Faire avancer des projets, organiser les ressources et faciliter la coopération.",tags:["lead","organize","organization","team","communication"],families:["coordination","management"]},
 {name:"Conseil et accompagnement",desc:"Écouter, comprendre une situation et aider des personnes à progresser.",tags:["help","ask","care","communication","useful","solidarity"],families:["relation","conseil"]},
 {name:"Création et communication",desc:"Imaginer des contenus, des idées ou des expériences et les rendre accessibles.",tags:["create","creative","creativity","writing","innovation","freedom"],families:["creation","communication"]},
 {name:"Expertise technique et numérique",desc:"Résoudre des problèmes, développer un savoir-faire et améliorer des outils.",tags:["solve","analyze","logic","digital","mastery","learn"],families:["technique","numerique"]},
 {name:"Métiers de terrain et réalisation",desc:"Agir concrètement, produire, installer, entretenir ou améliorer.",tags:["make","field","manual","practice","variety"],families:["terrain","production"]},
 {name:"Entrepreneuriat et activité indépendante",desc:"Construire une offre, prendre des initiatives et développer une activité.",tags:["act","freedom","build","bold","create","lead"],families:["entrepreneuriat","autonomie"]},
 {name:"Formation et transmission",desc:"Partager des connaissances, accompagner l'apprentissage et faire progresser.",tags:["help","learn","discuss","communication","teamlead","useful"],families:["formation","relation"]},
 {name:"Organisation et fonctions support",desc:"Structurer, fiabiliser et optimiser le fonctionnement d'une activité.",tags:["organize","structured","organization","security","analyze"],families:["organisation","support"]}
];

const state = {index:0, answers:{}, startedAt:null};
const $ = id => document.getElementById(id);
const STORAGE_KEY = "myway_guest_profile_v2";
function save(){ try{localStorage.setItem(STORAGE_KEY,JSON.stringify({answers:state.answers,index:state.index,updatedAt:new Date().toISOString()}));$("savedState").textContent="Progression enregistrée sur cet appareil";}catch(e){$("savedState").textContent="Session invitée";} }
function restore(){try{const x=JSON.parse(localStorage.getItem(STORAGE_KEY)||"null");if(x&&x.answers){state.answers=x.answers;state.index=Math.min(x.index||0,questions.length-1);}}catch(e){}}
function showPage(id){document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));$(id).classList.add("active");window.scrollTo({top:0,behavior:"smooth"});}
function answerValues(q){const a=state.answers[q.id];if(q.type==="single")return a===undefined?[]:[a];return Array.isArray(a)?a:[];}
function isAnswered(q){return answerValues(q).length>0;}
function renderQuestion(){
 const q=questions[state.index], values=answerValues(q);
 $("questionKicker").textContent=q.k;$("questionTitle").textContent=q.t;$("questionHelp").textContent=q.h;
 $("stepCounter").textContent=`ÉTAPE ${state.index+1} / ${questions.length}`;
 $("progressBar").style.width=`${(state.index+1)/questions.length*100}%`;
 $("answerHint").textContent=q.type==="single"?"Une seule réponse.":q.type==="multi"?`Jusqu'à ${q.max} choix possibles.`:`Jusqu'à ${q.max} choix. Le premier est votre priorité n°1.`;
 $("nextBtn").disabled=!isAnswered(q);
 $("nextBtn").innerHTML=state.index===questions.length-1?"Analyser mon profil ↗":"Continuer →";
 $("answerArea").innerHTML="";
 if(q.type==="ranked"&&values.length){
   const ordered=document.createElement("div");ordered.className="priority-summary";
   ordered.innerHTML=`<strong>Votre ordre de priorité</strong><small>Utilisez les flèches pour réorganiser vos choix.</small>`;
   values.forEach((v,i)=>{
     const opt=q.options.find(o=>o[0]===v);if(!opt)return;
     const line=document.createElement("div");line.className="priority-row";
     line.innerHTML=`<span class="priority-number">${i+1}</span><span class="priority-name">${opt[1]}</span><span class="priority-controls"><button type="button" aria-label="Monter" ${i===0?"disabled":""} data-move="-1" data-value="${v}">↑</button><button type="button" aria-label="Descendre" ${i===values.length-1?"disabled":""} data-move="1" data-value="${v}">↓</button></span>`;
     ordered.appendChild(line);
   });
   $("answerArea").appendChild(ordered);
 }
 const grid=document.createElement("div");grid.className="answer-options";
 q.options.forEach(([value,label])=>{
   const selected=values.includes(value);
   const btn=document.createElement("button");btn.type="button";btn.className="answer-option"+(selected?" selected":"");
   const rank=q.type==="ranked"&&selected?values.indexOf(value)+1:null;
   btn.innerHTML=`<span class="option-mark">${rank||""}</span><span>${label}</span><span class="option-check">${selected?"✓":""}</span>`;
   btn.addEventListener("click",()=>choose(q,value));
   grid.appendChild(btn);
 });
 $("answerArea").appendChild(grid);
 $("answerArea").querySelectorAll("[data-move]").forEach(btn=>btn.addEventListener("click",()=>{
   const list=answerValues(q),from=list.indexOf(btn.dataset.value),to=from+Number(btn.dataset.move);
   if(from<0||to<0||to>=list.length)return;
   [list[from],list[to]]=[list[to],list[from]];state.answers[q.id]=list;save();renderQuestion();
 }));
}
function choose(q,value){
 if(q.type==="single"){state.answers[q.id]=value;}
 else{
   let list=answerValues(q).slice(),at=list.indexOf(value);
   if(at>=0)list.splice(at,1);
   else if(list.length<(q.max||99))list.push(value);
   else{$("answerHint").textContent=`Vous avez atteint la limite de ${q.max} choix. Retirez-en un pour en ajouter un autre.`;return;}
   state.answers[q.id]=list;
 }
 save();renderQuestion();
}
function start(){state.index=0;state.startedAt=Date.now();renderQuestion();showPage("assessmentPage");}
function allSelected(){return questions.flatMap(q=>answerValues(q));}
function getPriorityValues(id){return answerValues(questions.find(q=>q.id===id));}
function scoreResults(){
 const selected=allSelected(), lookup=Object.fromEntries(questions.flatMap(q=>q.options.map(([id,label])=>[id,label])));
 const ranked = careers.map(c=>{
   let score=0, hits=[];
   c.tags.forEach(tag=>{const q=questions.find(x=>x.options.some(o=>o[0]===tag));if(!q)return;const vals=answerValues(q),idx=vals.indexOf(tag);if(idx>=0){const weight=q.type==="ranked"?Math.max(1,q.max-idx):1;score+=weight;hits.push({tag,weight});}});
   return {...c,score,hits};
 }).sort((a,b)=>b.score-a.score);
 const tags = ["environment","motivation","values","lifestyle","strengths"].flatMap(id=>getPriorityValues(id).slice(0,2)).slice(0,8);
 $("profileTags").innerHTML=tags.map(t=>`<span class="tag">${lookup[t]||t}</span>`).join("");
 const topMotives=getPriorityValues("motivation").slice(0,3).map(x=>lookup[x]);
 const topEnv=getPriorityValues("environment").slice(0,3).map(x=>lookup[x]);
 const topValues=getPriorityValues("values").slice(0,3).map(x=>lookup[x]);
 $("profileSummary").textContent=`Vos premières priorités semblent être ${topMotives.join(", ")||"à préciser"}. Les environnements qui vous attirent le plus : ${topEnv.join(", ")||"à préciser"}. Vos valeurs prioritaires : ${topValues.join(", ")||"à préciser"}. Ce portrait est exploratoire et devra être confronté à des situations réelles.`;
 const dimensions=[
  ["Moteurs","motivation"],["Environnements","environment"],["Valeurs","values"],["Mode de vie","lifestyle"],["Atouts déclarés","strengths"],["Contraintes","constraints"]
 ];
 $("dimensionList").innerHTML=dimensions.map(([label,id])=>`<div class="dimension-row"><strong>${label}</strong><span>${getPriorityValues(id).map(x=>lookup[x]).join(" · ")||"À approfondir"}</span></div>`).join("");
 $("careerList").innerHTML=ranked.slice(0,5).map((c,i)=>`<div class="career-item"><div><strong>${c.name}</strong><small>${c.desc}</small><small class="career-reasons">${c.hits.slice(0,3).map(h=>lookup[h.tag]).join(" · ")||"Piste à explorer"}</small></div><span>${i===0?"À investiguer":i===1?"Piste complémentaire":"Autre piste"}</span></div>`).join("");
 const constraints=getPriorityValues("constraints").filter(x=>x!=="none").map(x=>lookup[x]);
 $("constraintSummary").textContent=constraints.length?`À prendre en compte : ${constraints.join(", ")}.`:"Aucune contrainte particulière n'a été signalée dans cette première exploration.";
 $("profileDisclaimer").textContent="Les pistes présentées sont des hypothèses de travail issues de vos déclarations. Elles ne constituent ni un diagnostic, ni une mesure psychométrique validée, ni une probabilité de réussite. Les compatibilités chiffrées ne sont volontairement pas affichées à ce stade.";
 save();
}
$("startBtn").addEventListener("click",start);
$("backHome").addEventListener("click",()=>showPage("homePage"));
$("nextBtn").addEventListener("click",()=>{
 const q=questions[state.index];if(!isAnswered(q))return;
 if(state.index<questions.length-1){state.index++;save();renderQuestion();}
 else{scoreResults();showPage("resultsPage");}
});
$("restartBtn").addEventListener("click",start);
$("resetBtn").addEventListener("click",()=>{if(confirm("Effacer les réponses enregistrées sur cet appareil et revenir à l'accueil ?")){state.index=0;state.answers={};localStorage.removeItem(STORAGE_KEY);$("savedState").textContent="Session invitée";showPage("homePage");}});
document.querySelectorAll('[data-page="home"]').forEach(a=>a.addEventListener("click",()=>showPage("homePage")));
restore();
