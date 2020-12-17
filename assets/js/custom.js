

// counterUp js 
$('.counter-count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

//dropdown menu

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
    function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
    },
    function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
    }
    );
} else {
    $dropdown.off("mouseenter mouseleave");
}
});


//OurProcess-wrapper
    let curOpen;
    $(document).ready(function() {
    curOpen = $('.step')[0];
    
    $('.next-btn').on('click', function() {
        let cur = $(this).closest('.step');
        let next = $(cur).next();
        $(cur).addClass('minimized');
        setTimeout(function() {
        $(next).removeClass('minimized');
        curOpen = $(next);
        }, 400);
    });
    
    $('.close-btn').on('click', function() {
        let cur = $(this).closest('.step');
        $(cur).addClass('minimized');
        curOpen = null;
    });
    
    $('.step .step-content').on('click' ,function(e) {
        e.stopPropagation();
    });
    
    $('.step').on('click', function() {
        if (!$(this).hasClass("minimized")) {
        curOpen = null;
        $(this).addClass('minimized');
        }
        else {
        let next = $(this);
        if (curOpen === null) {
            curOpen = next;
            $(curOpen).removeClass('minimized');
        }
        else {
            $(curOpen).addClass('minimized');
            setTimeout(function() {
            $(next).removeClass('minimized');
            curOpen = $(next);
            }, 300);
        }
        }
    });
})