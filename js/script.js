$(function(){
    // Set Settings From Local Storage When Page Is Loaded
    // Set Choosen Background
    document.body.style.backgroundColor = localStorage.getItem('background');
    document.body.style.backgroundImage = localStorage.getItem('backgroundImage');
    // Set Titles Font Size
    $('.title').each(function(){
        $(this).removeClass('f16 f18 f20 f25 f30');
        $(this).addClass(`f${localStorage.getItem('titleFontSize')}`);
    });
    // Set Contents Font Size
    $('.content').each(function(){
        $(this).removeClass('f16 f18 f20 f25 f30');
        $(this).addClass(`f${localStorage.getItem('contentFontSize')}`);
    });

    // Main Page 'index'
    $('.sch').on('click', function(){
        $('.search-form').slideToggle();
    });

    // Account & Settings Pages
    // Show The From When Change Button Is Clicked
    $('.chg').on('click', function(){
        let thisdata = $(this).data('change');
        $(`#${thisdata}`).slideToggle();
        $(this).hide();
    });
    // Hide The Form When The Cancel Or OK Button Is Clicked
    $('.cnl').on('click', function(){
        let thisdata = $(this).data('change');
        $(`#${thisdata}`).slideToggle();
        $(`.chg[data-change="${thisdata}"]`).show();
    });

    // Settings Page
    // Show The Section Depending On The Clicked Icon 
    // this function is shared with Register Page
    $('.icon').on('click', function(){
        let thisdata = $(this).data('section');
        $('.section').each(function(){
            $(this).hide();
        });
        $(`#${thisdata}`).show();
        $('.icon').each(function(){
            $(this).removeClass('hovered-icon');
        });
        $(`.icon[data-section="${thisdata}"]`).addClass('hovered-icon');
    });
    // Set The Clicked Background Color, Save It In The Local Storage & Remove The Background Image If It's Exist
    $('.bg-choice').on('click', function(){
        let thisdata = $(this).data('bg');
        localStorage.setItem('background',`#${thisdata}`);
        localStorage.removeItem('backgroundImage');
        document.body.style.backgroundImage = 'none';
        document.body.style.backgroundColor = `#${thisdata}`;
    });
    // Set The Clicked Background Image & Save It To The Local Storage
    $('.bg-choice-img').on('click', function(){
        let thisdata = $(this).data('bg');
        localStorage.setItem('backgroundImage',`url('${thisdata}')`);
        document.body.style.backgroundImage = `url('${thisdata}')`;
    });
    // Set The Clicked Font Size For Elements Which Have Title Class
    $('.ft-choice').on('click', function(){
        let thisdata = $(this).data('font');
        localStorage.setItem('titleFontSize',thisdata);
        $('.title').each(function(){
            $(this).removeClass('f16 f18 f20 f25 f30');
            $(this).addClass(`f${thisdata}`);
        });
    });
    // Set The Clicked Font Size For Elements Which Have Content Class
    $('.fc-choice').on('click', function(){
        let thisdata = $(this).data('font');
        localStorage.setItem('contentFontSize',thisdata);
        $('.content').each(function(){
            $(this).removeClass('f16 f18 f20 f25 f30');
            $(this).addClass(`f${thisdata}`);
        });
    });
});