window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.register-button').style.display = 'block';
    } else {
        document.querySelector('.register-button').style.display = 'none';
    }
}
