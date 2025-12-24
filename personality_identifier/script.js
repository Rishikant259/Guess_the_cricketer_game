const personalities = [
  { name: "Sachin Tendulkar", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Sachin_Tendulkar.jpg?width=300" },
  { name: "Virat Kohli", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Virat_Kohli.jpg?width=300" },
  { name: "MS Dhoni", img: "https://commons.wikimedia.org/wiki/Special:FilePath/MS_Dhoni_2011.jpg?width=300" },
  { name: "Rohit Sharma", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Rohit_Sharma.jpg?width=300" },
  { name: "Kapil Dev", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Kapil_Dev_1983.jpg?width=300" },
  { name: "Sunil Gavaskar", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Sunil_Gavaskar.jpg?width=300" },
  { name: "Rahul Dravid", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Rahul_Dravid.jpg?width=300" },
  { name: "Sourav Ganguly", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Sourav_Ganguly.jpg?width=300" },
  { name: "Anil Kumble", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Anil_Kumble.jpg?width=300" },
  { name: "Yuvraj Singh", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Yuvraj_Singh.jpg?width=300" },
  { name: "Virender Sehwag", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Virender_Sehwag.jpg?width=300" },
  { name: "Harbhajan Singh", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Harbhajan_Singh.jpg?width=300" },
  { name: "Jasprit Bumrah", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Jasprit_Bumrah.jpg?width=300" },
  { name: "Ravindra Jadeja", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Ravindra_Jadeja.jpg?width=300" },
  { name: "Hardik Pandya", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Hardik_Pandya.jpg?width=300" },
  { name: "Shikhar Dhawan", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Shikhar_Dhawan.jpg?width=300" },
  { name: "KL Rahul", img: "https://commons.wikimedia.org/wiki/Special:FilePath/KL_Rahul.jpg?width=300" },
  { name: "Rishabh Pant", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Rishabh_Pant.jpg?width=300" },
  { name: "Mohammed Shami", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Mohammed_Shami.jpg?width=300" },
  { name: "Zaheer Khan", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Zaheer_Khan.jpg?width=300" },
  { name: "Irfan Pathan", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Irfan_Pathan.jpg?width=300" },
  { name: "VVS Laxman", img: "https://commons.wikimedia.org/wiki/Special:FilePath/VVS_Laxman.jpg?width=300" },
  { name: "Gautam Gambhir", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Gautam_Gambhir.jpg?width=300" },
  { name: "Ajinkya Rahane", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Ajinkya_Rahane.jpg?width=300" },
  { name: "Cheteshwar Pujara", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Cheteshwar_Pujara.jpg?width=300" }
];


let current = 0;
let score = 0;

const quiz = personalities.sort(() => Math.random() - 0.5);

function loadQuestion() {
    if (current === 20) return showResult();

    const correct = quiz[current];
    document.getElementById("personImage").src = correct.img;

    let options = [correct.name];
    while (options.length < 4) {
        const random = personalities[Math.floor(Math.random() * personalities.length)].name;
        if (!options.includes(random)) options.push(random);
    }

    options.sort(() => Math.random() - 0.5);

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option";
        btn.textContent = opt;
        btn.onclick = () => {
            if (opt === correct.name) score++;
            current++;
            loadQuestion();
        };
        optionsDiv.appendChild(btn);
    });

    document.getElementById("progress").textContent =
        `Question ${current + 1} of 20`;
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    const result = document.getElementById("result");
    result.classList.remove("hidden");
    result.innerHTML = `
        <strong>Final Score:</strong> ${score} / 20
    `;
}

loadQuestion();
