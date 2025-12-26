const questions = [

/* ===== TRUE / FALSE (20 سؤال) ===== */
{type:"tf",q:"Malnutrition includes both over nutrition and under nutrition.",a:true},
{type:"tf",q:"Starvation refers to severe under nutrition.",a:true},
{type:"tf",q:"Obesity results from a prolonged negative energy balance.",a:false},
{type:"tf",q:"Deficiency diseases usually present in pure form.",a:false},
{type:"tf",q:"Increased basal metabolic rate can lead to under nutrition.",a:true},
{type:"tf",q:"In Marasmus edema is common.",a:false},
{type:"tf",q:"Kwashiorkor is associated with low plasma albumin.",a:true},
{type:"tf",q:"Prevention of PEM includes breast-feeding.",a:true},
{type:"tf",q:"Iron deficiency anemia may be caused by hookworm infestation.",a:true},
{type:"tf",q:"Hemoglobin may drop to 3 gm/dl in severe iron deficiency anemia.",a:true},
{type:"tf",q:"Family planning helps prevent iron deficiency anemia.",a:true},
{type:"tf",q:"Vitamin B12 deficiency may result from tapeworm infestation.",a:true},
{type:"tf",q:"Large oval RBCs are seen in vitamin B12 deficiency.",a:true},
{type:"tf",q:"Rickets affects bones and skeletal muscles.",a:true},
{type:"tf",q:"Pigeon chest is a sign of rickets.",a:true},
{type:"tf",q:"Osteomalacia affects infants only.",a:false},
{type:"tf",q:"Osteomalacia is due to calcium and vitamin D deficiency.",a:true},
{type:"tf",q:"Waddling gait is a feature of osteomalacia.",a:true},
{type:"tf",q:"Sunlight exposure helps prevent osteomalacia.",a:true},
{type:"tf",q:"Cow’s milk contains enough vitamin D.",a:false},

/* ===== MCQ (20 سؤال) ===== */
{type:"mcq",q:"Marasmus is caused by deficiency of:",options:[
"Protein and calories","Iron and zinc","Vitamin D","Water"],a:0},

{type:"mcq",q:"Key feature of Marasmus:",options:[
"Edema","Body weight < 60%","Fatty liver","High albumin"],a:1},

{type:"mcq",q:"Kwashiorkor usually occurs in:",options:[
"First month","Second year","Adolescence","Old age"],a:1},

{type:"mcq",q:"Diet causing Kwashiorkor:",options:[
"High protein","Starchy low protein","High fat","Iron rich"],a:1},

{type:"mcq",q:"Clinical feature of Kwashiorkor:",options:[
"No edema","High energy","Edema & muscle wasting","Rapid growth"],a:2},

{type:"mcq",q:"Predisposing factor of PEM:",options:[
"High socioeconomic status","Maternal ignorance",
"Vaccination","Clean environment"],a:1},

{type:"mcq",q:"Nutritional anemia results from deficiency of:",options:[
"Vitamin C","Iron, B12 & folate","Sodium","Vitamin A"],a:1},

{type:"mcq",q:"Iron deficiency anemia is:",options:[
"Macrocytic","Microcytic hypochromic","Megaloblastic","Hemolytic"],a:1},

{type:"mcq",q:"Symptom of iron deficiency anemia:",options:[
"High energy","Brittle nails","Fatty liver","High Hb"],a:1},

{type:"mcq",q:"Vitamin B12 deficiency causes:",options:[
"Bow legs","Neuropathy","Edema","Obesity"],a:1},

{type:"mcq",q:"Megaloblastic anemia is due to:",options:[
"Iron","Vitamin B12 & folate","Vitamin D","Protein"],a:1},

{type:"mcq",q:"Rickets mainly affects:",options:[
"Adults","Infants & children","Elderly","Teenagers"],a:1},

{type:"mcq",q:"Predisposing factor for rickets:",options:[
"Sun exposure","Indoor life","Fish diet","Exercise"],a:1},

{type:"mcq",q:"Osteomalacia is deficiency of:",options:[
"Vitamin A","Calcium & vitamin D","Iron","Protein"],a:1},

{type:"mcq",q:"Feature of osteomalacia:",options:[
"Edema","Waddling gait","High Hb","Obesity"],a:1},

{type:"mcq",q:"Kwashiorkor occurs due to deficiency of:",options:[
"Calories","Protein","Vitamins","Minerals"],a:1},

{type:"mcq",q:"Marasmus usually occurs due to:",options:[
"Protein only","Calories only","Protein & calories","Vitamins"],a:2},

{type:"mcq",q:"Rachitic rosary is seen in:",options:[
"Osteomalacia","Rickets","Scurvy","Anemia"],a:1},

{type:"mcq",q:"Vitamin D deficiency leads to:",options:[
"Scurvy","Rickets","Beriberi","Pellagra"],a:1},

{type:"mcq",q:"PEM stands for:",options:[
"Protein Energy Malnutrition","Primary Energy Malnutrition",
"Protein Excess Malnutrition","Partial Energy Malnutrition"],a:0},
];
mcqQuestions.push(
  {
    q: 'According to the classification of malnutrition, "Over nutrition" includes the consumption of too much of:',
    options: [
      "Only calories and fats",
      "Specific vitamins, minerals, or dietary supplements",
      "Only protein and carbohydrates",
      "Water and fiber"
    ],
    answer: 1
  },
  {
    q: 'Which of the following describes the mechanism of "Starvation" in adults?',
    options: [
      "Acute excess of Vitamin D",
      "Severe under nutrition derived from prolonged inadequacy of food intake",
      "Prolonged positive energy balance",
      "Imbalance caused by high protein intake"
    ],
    answer: 1
  },
  {
    q: 'In PEM, "Cachexia" is specifically mentioned as a cause occurring in cases of:',
    options: [
      "Small intestine disease",
      "Thyrotoxicosis",
      "Cancer",
      "Faulty weaning practice"
    ],
    answer: 2
  },
  {
    q: 'Why is a child with Marasmus often described as "skin and bones"?',
    options: [
      "Due to high plasma albumin",
      "Because of subcutaneous fat loss and wasted muscles with no edema",
      "Due to symmetrical skin changes and fatty liver",
      "Because body weight is exactly 80% of normal"
    ],
    answer: 1
  },
  {
    q: 'Which laboratory finding specifically distinguishes Kwashiorkor?',
    options: [
      "Serum iron below 30 µg/dl",
      "Hemoglobin as low as 3 g/dl",
      "Low plasma albumin",
      "Large oval red cells"
    ],
    answer: 2
  },
  {
    q: 'Vitamin D hydroxylation is impaired specifically in:',
    options: [
      "Elderly patients with Osteomalacia",
      "Premature infants of low birth weight",
      "Adults with thyrotoxicosis",
      "Children with hookworm infestation"
    ],
    answer: 1
  },
  {
    q: 'What is a late sign (severe case) of Rickets?',
    options: [
      "Craniotabes",
      "Curvatures of the long bones (Bowlegs)",
      "Rachitic rosary",
      "Swelling of epiphyses at wrists"
    ],
    answer: 1
  },
  {
    q: 'Which of these is a community-level prevention strategy for PEM?',
    options: [
      "Administration of Vitamin B12",
      "Socioeconomic and community development",
      "Treatment of peptic ulcers",
      "Use of heat-retaining clothing"
    ],
    answer: 1
  }
  };
/* SHUFFLE */
questions.sort(()=>Math.random()-0.5);

let index=0;
let answers=Array(questions.length).fill(null);

/* ELEMENTS */
const qText=document.getElementById("questionText");
const optionsDiv=document.getElementById("options");
const counter=document.getElementById("counter");
const progress=document.getElementById("progressBar");
const nextBtn=document.getElementById("nextBtn");
const retryBtn=document.getElementById("retryBtn");
const qList=document.getElementById("questionsList");

/* MENU */
function toggleMenu(){
  const m=document.getElementById("sideMenu");
  const o=document.getElementById("overlay");
  if(m.style.right==="0px"){m.style.right="-250px";o.style.display="none";}
  else{m.style.right="0";o.style.display="block";}
}

/* DARK MODE */
function toggleDark(){
  document.body.classList.toggle("dark");
}

/* QUIZ */
function startQuiz(){
  index=0;
  answers.fill(null);
  document.getElementById("home").style.display="none";
  document.getElementById("quiz").style.display="block";
  loadQuestion();
}

function loadQuestion(){
  optionsDiv.innerHTML="";
  nextBtn.style.display="none";

  const q=questions[index];
  qText.innerText=q.q;
  counter.innerText=`Question ${index+1} / ${questions.length}`;
  progress.style.width=((index+1)/questions.length*100)+"%";

  if(q.type==="tf"){
    createOption("True",true);
    createOption("False",false);
  }else{
    q.options.forEach((o,i)=>createOption(o,i));
  }
}

function createOption(text,val){
  const b=document.createElement("button");
  b.innerText=text;
  b.onclick=()=>select(val,b);
  optionsDiv.appendChild(b);
}

function select(val,btn){
  if(answers[index]!==null)return;
  answers[index]=val;

  const q=questions[index];
  [...optionsDiv.children].forEach((b,i)=>{
    const correct=q.type==="tf"?((i===0)===q.a):(i===q.a);
    if(correct)b.style.background="#27ae60";
    else if(b===btn)b.style.background="#e74c3c";
    b.disabled=true;
  });
  nextBtn.style.display="inline-block";
}

function nextQuestion(){
  if(index<questions.length-1){
    index++;
    loadQuestion();
  }else finishQuiz();
}

function finishQuiz(){
  let score=0;
  questions.forEach((q,i)=>{if(answers[i]===q.a)score++;});
  qText.innerText=`✅ Finished\nScore ${score}/${questions.length}`;
  optionsDiv.innerHTML="";
  counter.innerText="";
  nextBtn.style.display="none";
  retryBtn.style.display="inline-block";
}

function retryQuiz(){
  location.reload();
}

function toggleQuestions(){
  qList.innerHTML="";
  qList.style.display=qList.style.display==="block"?"none":"block";

  answers.forEach((a,i)=>{
    const d=document.createElement("div");
    d.className="q-item "+(a===null?"unanswered":a===questions[i].a?"correct":"wrong");
    d.innerText=i+1;
    d.onclick=()=>{index=i;loadQuestion();qList.style.display="none";}
    qList.appendChild(d);
  });
}
