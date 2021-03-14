import React from "react";

export type THeaderProps = {
    name: string;
};

const Header: React.FC<THeaderProps> = ({ name }) => (
    <header>Hello {name}! I'm lazy header</header>
);

export default Header;
