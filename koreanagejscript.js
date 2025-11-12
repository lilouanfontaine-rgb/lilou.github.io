const day = document.getElementById("day").value;
const month = document.getElementById("month").value;
const year = document.getElementById("year").value;

const birthdate = new Date(`${year}-${month}-${day}`);


function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    if (!day || !month || !year) {
        document.getElementById("result").textContent = "Please enter a valid date!";
        return;
    }

    const today = new Date();
    const birthYear = year;

    // Traditional Korean age formula
    const koreanAge = (today.getFullYear() - birthYear) + 1;

    document.getElementById("result").textContent =
        `Your Korean age is ${koreanAge} 🎉`;
}
