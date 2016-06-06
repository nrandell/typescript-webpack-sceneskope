import * as Mustache from "mustache";
import "./Header.scss";
import {Velocity} from "../velocity";

const template = require<string>("./Header.html");

export default class Header {
    render(node: HTMLElement) {
        const text = node.textContent;
        node.innerHTML = Mustache.render(template, {text});
        Velocity.animate(node, { scaleX: 0, scaleY: 0 }, {duration: 10000});
    }
}