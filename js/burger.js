document.getElementById('burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('navList').classList.toggle('active');
});