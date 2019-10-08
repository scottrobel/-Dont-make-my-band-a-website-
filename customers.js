socialLinks = Array.from(document.querySelectorAll('#nav>li>a'));
let giglocations = [{date: 'Saturday, September 19, 2020', location:'House Show'},{date: "Wednesday, September 25, 2019", location: "House Show"},{date: "Thursday, September 26, 2019", location: "The Soda Bar"}];
socialLinks.forEach(link => 
{
    link.setAttribute("target", "_blank");
});
let locationdiv;
let locationp;
giglocations.forEach(location=>{

})
let randomfives = document.createElement('p');
randomfives.textContent = '5';
let fivecontainer =  document.querySelector('#locations')
for(x=0;x<1000;x++)
{
    randomfives = document.createElement('p');
    randomfives.textContent = '5';
    fivecontainer.appendChild(randomfives);
}