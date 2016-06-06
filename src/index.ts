import ButtonType from "./Components/Button";
import HeaderType from "./Components/Header";
import {SceneSkopeExplicitMeasure, SceneSkopeWebSocketOptions} from "sceneskope-measure";


import "./styles.scss";

console.log("Starting");

const hostname = document.location.hostname;
const options: SceneSkopeWebSocketOptions = {
    venueId: "aa0b5de4-d8d3-4800-911e-786ad2407b7f",
    idleTimeout: 30,
    heartbeatInterval: 30,
    measureUrl: `${hostname}:3010`,
    host: hostname,
    clearOldSession: true
};
const skClient = new SceneSkopeExplicitMeasure(options);

skClient.startContent("content");
if (document.querySelectorAll("a").length > 0) {
    require.ensure([], require => {
        const Button = <typeof ButtonType>require<requiredModule>("./Components/Button").default;
        const button = new Button("google.com");
        button.render(document.getElementById("target"));
    }, "button");
}

if (document.querySelectorAll("h1").length > 0) {
    require.ensure([], require => {
        const Header = <typeof HeaderType>require<requiredModule>("./Components/Header").default;
        new Header().render(document.getElementById("header"));
    }, "header");
}