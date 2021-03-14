import React, { useState, ComponentType } from "react";
import type { THeaderProps } from "../Header";
import reactLogo from "./assets/react.svg";

const honda = new URL("./assets/honda.jpg", import.meta.url);

const App: React.FC = () => {
    const [Header, setHeader] = useState<ComponentType<THeaderProps>>(
        () => () => null
    );

    function loadHeader() {
        import("../Header").then(({ default: _Header }) => {
            setHeader(() => _Header);
        });
    }

    return (
        <>
            <Header name="Skycrazyk" />
            <h1>Hello!</h1>
            <button onClick={loadHeader}>Load Header</button>
            <br />
            <img src={reactLogo} width="500" />
            <img src={honda.toString()} width="500" />
        </>
    );
};

export default App;
