let select = document.querySelector(".selector")
let select2 = document.querySelector(".selector2")
let from_box = document.querySelector(".from-text")
let to_box = document.querySelector(".to-text")
let btn = document.querySelector(".translate-btn")
let cpy1 = document.querySelector(".copy1")
let cpy2 = document.querySelector(".copy2")
let from_lang="";
let to_lang="";

for (const key in countries) {
   let opt = document.createElement("option")
   opt.innerText=countries[key];
   select.insertAdjacentElement("beforeend",opt)
   if(countries[key]=="English"){
    opt.selected=true;
    from_lang=key;
   }
}

for (const key in countries) {
let opt = document.createElement("option")
   opt.innerText=countries[key];
   select2.insertAdjacentElement("beforeend",opt)
   if(countries[key]=="Hindi"){
    opt.selected=true;
    to_lang=key;
   }
}

function language(obj){
for (const iterator of obj) {
    if(iterator.selected==true)
        return iterator.value;
}
}

select.addEventListener("change",()=>{
    from_lang=language(select);
})
select2.addEventListener("change",()=>{
    to_lang=language(select2)
})

btn.addEventListener("click", ()=>{
    text = from_box.value;
    fetch(`https://api.mymemory.translated.net/get?q=${text}!&langpair=${from_lang}|${to_lang}`).then(res => res.json()).then(data => {
       console.log(data);
       to_box.value=data.responseData.translatedText;
      console.log( data.responseData.translatedText);})
})


function copy(copyText) {
    
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Text Copied ");
  }
cpy1.addEventListener("click", ()=>{
copy(from_box)
})
cpy2.addEventListener("click", ()=>{
copy(to_box)
})


