import * as Mustache from "mustache";
import "./Button.scss";
const template = require<string>("./Button.html");

export default class Button {
    link: string;
    constructor(link: string) {
        this.link = link;
    }

    onClick(event: MouseEvent) {
        event.preventDefault();
        alert(this.link);
    }

    render(node: HTMLElement) {
        const text = node.textContent;
        node.innerHTML = Mustache.render(template, {text});

        const buttons = document.getElementsByClassName("button");
        for (let i = 0; i < buttons.length; i++) {
            const button = <HTMLButtonElement>buttons[i];
            button.onclick = ev => this.onClick(ev);
        }
    }
}