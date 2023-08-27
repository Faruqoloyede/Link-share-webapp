let platforms = {
    "Github" : "Github",
    "linkedin" : "linkedin",
    "Youtube" : "Youtube",
    "Instagram" : "Instagram",
    "TikTok": "TikTok",
    "Snapchat" : "Snapchat",
    "Reddit" : "Reddit", 
    "Pinterest" : "LinkedIn",
    "Twitter" : "Twitter"
};

const drop_down = document.querySelectorAll(".form-select");
const add = document.querySelector("#btn");
const form = document.querySelector(".form-select");
const link_input = document.querySelector("#link");
const text = document.querySelector("#text");
const add_btn = document.querySelector("#add_btn");
const next_btn = document.querySelector("#next");
const profile = document.querySelector(".hero_section");
const link = document.querySelector(".link_section");
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");

let firstName_value;
let lastName_value;
let email_value;
let textValue;
let linkValue;
let user_data;


for(let i = 0; i < drop_down.length; i++) {
    let selected;
    
    for(plat in platforms) {
        if(i == 0) {
            selected = plat == "Github" ? "selected" : "";
        }
        // creating option tag
        let optionTag = ` <option value="${plat}">${plat}</option>`
        drop_down[i].insertAdjacentHTML("beforeend", optionTag);
    }
}
// adding an event listener to the next btn onclick on it add the hide class to profile and add show class to the link
next_btn.addEventListener("click", ()=>{
    firstName_value = firstName.value;
    lastName_value = lastName.value;
    email_value = email.value;
    if(firstName_value == "" && lastName_value == "" && email_value == "") {
        return
    } else {
        profile.classList.add("hide");
        link.classList.add("show")
    }
});

// onchange of the option list 
form.addEventListener("change", ()=>{
    let optionValue = form.options[form.selectedIndex].text;
    // when any value is picked from the options show in the input field
    link_input  .value = optionValue;
});

// adding an event listener to the add_btn onclick on it add show class to popup box
add_btn.addEventListener("click", ()=>{
    document.querySelector(".popup_box").classList.add("show");
});

// add event listener to the button
add.addEventListener("click", ()=>{
    textValue = text.value;
    linkValue = link_input.value;
    firstName_value = firstName.value;
    lastName_value = lastName.value;
    email_value = email.value;

    if(textValue || linkValue) {
        user_data = {
            name: textValue,
            link: linkValue,
            firstName : firstName_value,
            lastName : lastName_value,
            email : email_value
        }
        console.log(user_data);
        document.querySelector(".popup_box").classList.remove("show");
    };

});

// uploading of picture

const profilepic = document.getElementById("profilepic");
const inputfile = document.getElementById("input-file");

inputfile.onchange = function(){
    profilepic.src = URL.createObjectURL(inputfile.files[0]);
};
