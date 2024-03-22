// active tabpanel
const tab1 = document.querySelector('a[href="#tabpanel1"]');
const tab2 = document.querySelector('a[href="#tabpanel2"]');
const tab3 = document.querySelector('a[href="#tabpanel3"]');

tab1.classList.add('active');
tab1.parentElement.classList.add('active');


if(tab1){
    tab1.addEventListener('click', function(){
        tab1.parentElement.classList.add('active');
        tab2.classList.remove('active');
        tab2.parentElement.classList.remove('active');
        tab3.classList.remove('active');
        tab3.parentElement.remove('active');


    });
}

if(tab2){
    tab2.addEventListener('click', function(){
        tab2.parentElement.classList.add('active');
        tab1.classList.remove('active');
        tab1.parentElement.classList.remove('active');
        tab3.classList.remove('active');
        tab3.parentElement.remove('active');

    });
}

if(tab3){
    tab3.addEventListener('click', function(){
        tab3.parentElement.classList.add('active');
        tab2.classList.remove('active');
        tab2.parentElement.classList.remove('active');
        tab1.classList.remove('active');
        tab1.parentElement.remove('active');

    });
}

