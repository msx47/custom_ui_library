import './styles/tooltip.css'
class Tooltip{
    constructor(element){
        this.element = element;
        this.message = element.getAttribute('data-message');
    }
    init(){
        let div = document.createElement('div');
        div.classList.add('tip');
        div.textContent = this.message;
        this.element.appendChild(div);

        document.querySelector('.tooltip').addEventListener('mouseenter', () => {
            div.classList.add('active');
        });
        document.querySelector('.tooltip').addEventListener('mouseleave', () => {
            div.classList.remove('active');
        });

    }
}
export {Tooltip as default};