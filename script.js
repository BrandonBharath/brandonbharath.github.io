document.addEventListener('scroll', function(e){
    // console.log(e)
    const body = document.body;
    const max_height = body.scrollHeight;
    const offset = window.innerHeight;
    const calc_height = window.scrollY + offset;
    const section_height = max_height/4;
    // console.log('max_height: ', max_height);
    // console.log('offset: ', offset);
    // console.log('calc_height: ',calc_height);
    // console.log('section_height: ',section_height);
    // console.log('calc_height-offset', calc_height-offset)
    // console.log('')
    const menu_1 = document.getElementById('menu_1');
    const menu_2 = document.getElementById('menu_2');
    const menu_3 = document.getElementById('menu_3');
    const menu_4 = document.getElementById('menu_4');

    if((calc_height-offset)<section_height){
        menu_1.classList.add('highlighted_menu');
        menu_2.classList.remove('highlighted_menu');
        menu_3.classList.remove('highlighted_menu');
        menu_4.classList.remove('highlighted_menu');
    }
    else if((calc_height-offset)>=section_height && (calc_height-offset)<(section_height*2)){
        menu_1.classList.remove('highlighted_menu');
        menu_2.classList.add('highlighted_menu');
        menu_3.classList.remove('highlighted_menu');
        menu_4.classList.remove('highlighted_menu');
    }
    else if((calc_height-offset)>=section_height*2 && (calc_height-offset)<section_height*3){
        menu_1.classList.remove('highlighted_menu');
        menu_2.classList.remove('highlighted_menu');
        menu_3.classList.add('highlighted_menu');
        menu_4.classList.remove('highlighted_menu');
    }
    else{
        menu_1.classList.remove('highlighted_menu');
        menu_2.classList.remove('highlighted_menu');
        menu_3.classList.remove('highlighted_menu');
        menu_4.classList.add('highlighted_menu');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const menu_1 = document.getElementById('menu_1');
    menu_1.classList.add('highlighted_menu');

    const pic = document.getElementById('picture-frame');
    pic.classList.remove('opacity-0', 'translate-x-8');
    pic.classList.add('opacity-100', 'translate-x-0');

    const text = document.getElementById('text-frame');
    text.classList.remove('opacity-0', 'translate-x-8');
    text.classList.add('opacity-100', 'translate-x-0');

    
    drawBackground(112);

    const gridSquares = document.querySelectorAll('.background-square > div');
    gridSquares.forEach((square) => {
        const delay = getRandomNum(2,30);
        const duration = getRandomNum(5,20);

        square.classList.add('change-color');
        square.style.animationDelay = `${delay}s`;
        square.style.animationDuration = `${duration}s`;
    })
})

function getRandomNum(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

function copyToClipboard(){
    var text = document.getElementById('email-text');
    navigator.clipboard.writeText(text.innerHTML);
}

function drawBackground(squares){
    const container = document.getElementById('bg-row-container');

    for(i=0; i<squares; i++){

        const div = document.createElement('div');
        div.classList.add('p-3');
        div.classList.add('rounded-xl');
        div.classList.add('bg-[#1c1b1b]');

        container.appendChild(div);
    }
}

function scroll_to_section(section){
    const body = document.body;
    const height = body.scrollHeight;
    const section_height = height/4;
    const menu_1 = document.getElementById('menu_1');
    const menu_2 = document.getElementById('menu_2');
    const menu_3 = document.getElementById('menu_3');
    const menu_4 = document.getElementById('menu_4');

    if(section == 1){
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }
    if(section == 2){
        window.scrollTo({top: 0 + section_height, left: 0, behavior: "smooth"});
    }
    if(section == 3){
        window.scrollTo({top: section_height + section_height, left: 0, behavior: "smooth"});
    }
    if(section == 4){
        window.scrollTo({top: height, left: 0, behavior: "smooth"});
    }
}

function scroll_to_section_mobile(section){
    scroll_to_section(section);
    toggle_menu();
}

function toggle_menu(){
    const menu_button = document.getElementById('menu-button');
    const button_style = window.getComputedStyle(menu_button);
    const button_opacity = button_style.getPropertyValue('opacity');
    const menu = document.getElementById('mobile-menu');

    if(button_opacity == 1){
        menu_button.style.cssText = 'opacity: 0';
        menu.classList.add('show');
    }
    else{
        menu_button.style.cssText = 'opacity: 1;';  
        menu.classList.remove('show');
    }
}
