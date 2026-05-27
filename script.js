function analyzeResume(){

    let skills = [

        "Python",
        "SQL",
        "Machine Learning",
        "Excel"

    ];

    let score = 80;

    let progressBar =
        document.getElementById("progressBar");

    progressBar.style.width = score + "%";

    progressBar.innerHTML = score + "%";

    let skillsList =
        document.getElementById("skills");

    skillsList.innerHTML = "";

    skills.forEach(skill => {

        let li = document.createElement("li");

        li.innerHTML = skill;

        skillsList.appendChild(li);

    });

}
