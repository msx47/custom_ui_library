import Tooltip from './UI/tooltip';
import Dropdown from './UI/dropdown';
import Tabs from './UI/tabs';
import Popup from './UI/popup';

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

const containers = document.querySelectorAll('.dropdown');

containers.forEach(container => {
    const instance = new Dropdown(container);
    instance.init();
});

const tabs = document.querySelector('.tabs');
const tabbed = new Tabs(tabs);
tabbed.init();

const popup = new Popup();
popup.init('Hello world!!');