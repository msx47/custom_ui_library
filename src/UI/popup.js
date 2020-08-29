import './styles/popup.css'
class Popup{
    constructor(){
        this.popup = document.createElement('div');
    }
    init(message){
        document.querySelector('.btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.popup.textContent = message;
            this.popup.classList.add('popup');
            this.popup.classList.add('active');
            document.querySelector('body').appendChild(this.popup);
            setTimeout(() => {
                this.popup.classList.remove('active');
            },4000);
        });
    }
}
export {Popup as default};