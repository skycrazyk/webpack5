import React from "react";
import catImg from "./assets/cat.jpg";
import text from "./assets/plain.txt";

export type THeaderProps = {
    name: string;
};

const Header: React.FC<THeaderProps> = ({ name }) => (
    <header>
        <div>Hello {name}! I'm lazy header</div>
        <img src={catImg} />
        <h2>{text}</h2>
    </header>
);

export default Header;
