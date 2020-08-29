import './styles/tabs.css'
class Tabs{
    constructor(element){
        this.element = element;
        this.tabs = element.querySelectorAll('.trigger');
        this.content = element.querySelectorAll('.content');
    }
    init(){
        this.tabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.addTabs(e);
                this.addContent(e);
            });
        });
    }
    addTabs(e){
        this.tabs.forEach(x => {
            x.classList.remove('active');
        });
        e.target.classList.add('active');
    }
    addContent(e){
        this.content.forEach(x => {
            x.classList.remove('active');
        });
        const tag = e.target.getAttribute('data-target');
        const data = this.element.querySelector(tag);
        data.classList.add('active');
    }
}

export {Tabs as default};