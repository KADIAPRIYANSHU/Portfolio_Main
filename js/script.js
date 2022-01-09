


window.addEventListener("load",function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    },1000)
})


const nav=document.querySelector(".nav"),
    navlist=nav.querySelectorAll("li"),
    totalNavlist=navlist.length;
    allSection=document.querySelectorAll(".section");
    totalSection=allSection.length;

for(let i=0; i<totalNavlist; i++){
    const a=navlist[i].querySelector("a");
    a.addEventListener("click",function(){
//remove back section class
    removeBackSectionClass();

        for(let j=0; j<totalNavlist; j++){
            if(navlist[j].querySelector("a").classList.contains("active")){
//add back section class   
                addBackSectionclass(j)
            }
            navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSectionClass(){
    for(let i=0; i<totalSection;i++){
        allSection[i].classList.remove("back-section");
        }
}
function addBackSectionclass(num){
     allSection[num].classList.add("back-section");
}
function showSection(element){
     for(let i=0; i<totalSection;i++){
         allSection[i].classList.remove("active");
     }
    const target=element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active")
}
 
function updateNav(element){
    for(let i=0; i<totalNavlist; i++){
        navlist[i].querySelector("a").classList.remove("active");
        const target=element.getAttribute("href").split("#")[1];
        if(target === navlist[i].querySelector("a").getAttribute("href").split("#")[1]){
            navlist[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click",function(){
    const sectionIndex=this.getAttribute("data-section-index");
   // console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBackSectionClass();
    addBackSectionclass(sectionIndex);
})
const navTogglerBtn=document.querySelector(".nav-toggler"),
    aside=document.querySelector(".aside");

    navTogglerBtn.addEventListener("click",asideSectionTogglerBtn)

    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.toggle("open");
        }
    }