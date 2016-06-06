import ButtonType from "./Components/Button";
import HeaderType from "./Components/Header";
import "./styles.scss";

console.log("Starting");

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