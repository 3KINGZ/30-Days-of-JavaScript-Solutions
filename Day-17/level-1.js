let profile = {
    firstName: "victor",
    lastName: "kenneth",
    age: 19,
    country: "nigeria",
    city: "lagos",
}

let txt = JSON.stringify(profile);
localStorage.setItem("user", "txt");

