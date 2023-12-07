const mobileNav = () => {
    const headerBar = document.querySelector('.header-bars');
    const mobilenav = document.querySelector('.mobile-nav')
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    let isMobileNavOpen;
    headerBar.addEventListener('click', ()=>{
        isMobileNavOpen = !isMobileNavOpen;
        if(isMobileNavOpen){
            mobilenav.style.display = 'flex';
            document.body.style.overflowY = 'hidden';
        }else{
            mobilenav.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }

        mobileNavLinks.forEach((Links) => {
            Links.addEventListener('click', () => {
                isMobileNavOpen = false;
                mobilenav.style.display = 'none';
                document.body.style.overflowY = 'auto';
            })
        })
    })
}

export default mobileNav;