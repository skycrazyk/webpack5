import React, { useState, ComponentType } from "react";
import type { THeaderProps } from "../Header";

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
        </>
    );
};

export default App;
