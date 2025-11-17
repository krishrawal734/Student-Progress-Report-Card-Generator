document.getElementById("marks").oninput = function () {
    document.getElementById("marksValue").textContent = this.value;
};


document.getElementById("generateBtn").addEventListener("click", function () {

   
    document.querySelector(".card-container").style.display = "block";

   
    document.getElementById("cardName").textContent =
        document.getElementById("name").value;

    document.getElementById("cardRoll").textContent =
        document.getElementById("roll").value;

    document.getElementById("cardEmail").textContent =
        document.getElementById("email").value;

    document.getElementById("cardMarks").textContent =
        document.getElementById("marks").value;

    // Photo
    const imgFile = document.getElementById("photo").files[0];
    const img = document.getElementById("student-photo");

    if (imgFile) {
        img.src = URL.createObjectURL(imgFile);
    }
});






document.getElementById("generateBtn").onclick = function () {

    

    let name = document.getElementById("name").value;
    document.getElementById("cardname").textContent = "Student Name: " + name;

    let roll = document.getElementById("roll").value;
    document.getElementById("cardroll").textContent = "Roll No: " + roll;

    let email = document.getElementById("email").value;
    document.getElementById("cardemail").textContent = "Email: " + email;

    let age = document.getElementById("age").value;
    document.getElementById("cardage").textContent = "Age: " + age;

    let gender = document.querySelector('input[name="gender"]:checked');
    if (gender) {
        document.getElementById("cardGender").textContent = "Gender: " + gender.value;
    }

    let courseText = "";
    if (document.querySelector('input[value="Web"]').checked) {
        courseText += "Web ";
    }
    if (document.querySelector('input[value="DataScience"]').checked) {
        courseText += "DataScience";
    }
    document.getElementById("cardCourse").textContent = "Courses: " + courseText;

    let marks = document.getElementById("marks").value;
    let markEl = document.getElementById("cardMarks");
    markEl.textContent = "Marks: " + marks + "/100";

    if (marks > 75) {
        markEl.style.color = "lime";
    } else if (marks > 50) {
        markEl.style.color = "orange";
    } else {
        markEl.style.color = "red";
    }

    let file = document.getElementById("photo").files[0];
    let img = document.getElementById("student-photo");

    if (file) {
        img.src = URL.createObjectURL(file);
        img.style.background = "none";
    } else {
        img.src = "";
        img.style.background = "grey";
    }

    img.style.width = "120px";
    img.style.height = "120px";
    img.style.borderRadius = "50%";
    img.style.objectFit = "cover";


    document.getElementById("downloadCard").addEventListener("click", function () {
    const card = document.querySelector(".card-container");

    html2canvas(card).then(canvas => {
        const link = document.createElement("a");
        link.download = "student-card.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
});
};