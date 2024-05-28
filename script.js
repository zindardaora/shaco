document.getElementById('showTrick').addEventListener('click', function() {
    var trick = document.getElementById('secretTrick');
    if (trick.classList.contains('hidden')) {
        trick.classList.remove('hidden');
        this.textContent = 'Esconder truque secreto';
    } else {
        trick.classList.add('hidden');
        this.textContent = 'Clique para ver um truque secreto!';
    }
});
