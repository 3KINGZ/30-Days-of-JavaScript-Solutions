let ps = document.querySelectorAll('p');
for (let i = 0; i < ps.length; i++) {
    if (i % 2 == 0) {
        ps[i].style.color = 'green'
    } else {
        ps[i].style.color = 'red'
    }
}