const animation = () => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('herodescshow');
                entry.target.classList.add('heroimgshow');
                entry.target.classList.add('aboutimgshow');
                entry.target.classList.add('aboutdescshow');
                entry.target.classList.add('menushow');
                entry.target.classList.add('contactimgshow');
                entry.target.classList.add('contactdescshow');
                entry.target.classList.add('menudescshow');
                entry.target.classList.add('tleftshow');
                entry.target.classList.add('trightshow');
                
            }else{
                entry.target.classList.remove('herodescshow');
                entry.target.classList.remove('heroimgshow');
                entry.target.classList.remove('aboutimgshow');
                entry.target.classList.remove('aboutdescshow');
                entry.target.classList.remove('menushow');
                entry.target.classList.remove('contactimgshow');
                entry.target.classList.remove('contactdescshow');
                entry.target.classList.remove('menudescshow');
                entry.target.classList.remove('tleftshow');
                entry.target.classList.remove('trightshow');
                
            }
        })
    })

   const heroDescription =  document.querySelectorAll('.hero-description-container');
   heroDescription.forEach((entry) => observer.observe(entry));
   const heroImg =  document.querySelectorAll('.hero-img-container');
   heroImg.forEach((entry) => observer.observe(entry));
   const aboutImg =  document.querySelectorAll('.about-img-container');
   aboutImg.forEach((entry) => observer.observe(entry));
   const aboutdesc =  document.querySelectorAll('.about-description-container');
   aboutdesc.forEach((entry) => observer.observe(entry));
   const menu =  document.querySelectorAll('.menu-img-container');
   menu.forEach((entry) => observer.observe(entry));
   const menudesc =  document.querySelectorAll('.menu-description');
   menudesc.forEach((entry) => observer.observe(entry));
   const contactimg =  document.querySelectorAll('.contact-img-container');
   contactimg.forEach((entry) => observer.observe(entry));
   const contactdesc =  document.querySelectorAll('.contact-details-container');
   contactdesc.forEach((entry) => observer.observe(entry));
   const tleft =  document.querySelectorAll('.tleft');
   tleft.forEach((entry) => observer.observe(entry));
   const tright =  document.querySelectorAll('.tright');
   tright.forEach((entry) => observer.observe(entry));


}   

export default animation;