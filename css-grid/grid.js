var persons = document.querySelectorAll('.message');
var msgArea = document.querySelector('.messages-area');
var mainArea = document.querySelector('.main-area')
var backBtn = document.querySelector('.back')

persons.forEach((person) => {
    person.addEventListener('click', function(e) {

        msgArea.classList.remove('active-area')
        mainArea.classList.toggle('active-area');

        console.log(this.childNodes)

        let username = this.children[1].children[0].children[0].innerText;
        
        let nameSpan = document.querySelector('#header-username');
        nameSpan.innerText = username;

        let headerImg = document.querySelector('#header-img');

        console.log(headerImg.attributes.src);console.log(this.dataset.img)
    })
})

backBtn.addEventListener('click', function(e) {

    mainArea.classList.remove('active-area');
    msgArea.classList.toggle('active-area');

})