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
const re = document.querySelector(".result");
const input = document.querySelector("#link");
const text = document.querySelector("#text");
const add_btn = document.querySelector("#add_btn");


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

add_btn.addEventListener("click", ()=>{
    document.querySelector(".popup_box").classList.add("show");
})

// add event listener to the button
add.addEventListener("click", ()=>{
    let textValue = text.value;
    let linkValue = input.value;
    console.log(textValue, linkValue);

});

form.addEventListener("change", ()=>{
    let re = form.options[form.selectedIndex].text;
    // when any value is picked from the options show in the input field
    input.value = re;
});


const image = document.querySelector("img"),
type = document.querySelector("input");

type.addEventListener("change", ()=>{
    image.src = URL.createObjectURL(type.files[0]);
})