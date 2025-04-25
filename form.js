const data = () => {
    let a = document.getElementById("f-id").value;
    let b = document.getElementById("f-email").value;
    let c = document.getElementById("f-phone").value;
    let d = document.getElementById("f-password-1").value;
    let e = document.getElementById("myInput").value;

    if (a === "" || b === "" || c === "" || d === "" || e === "") {
        alert("All Details Are Required To Be Filled Details...");
        return false;
    } else if (c.length !== 10) {
        alert("please enter a valid number !");
        return false;
    } else {
        alert("Your form has been submitted.");
        Datasave();
        return true;
    }
};

const Datasave = () => {
    const formData = {
        id: document.getElementById("f-id").value,
        email: document.getElementById("f-email").value,
        phone: document.getElementById("f-phone").value,
        password: document.getElementById("f-password-1").value,
        input: document.getElementById("myInput").value
    };
    localStorage.setItem('datasave', JSON.stringify(formData));
};

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
