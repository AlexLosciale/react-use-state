import { useState } from "react";
import ProductButton from "./ProductButton.jsx";

const Main = () => {
    const [selectedDescription, setSelectedDescription] = useState(
        "Clicca su un pulsante per vedere la descrizione"
    );

    return (
        <main>
            <ProductButton onSelect={setSelectedDescription} />
            <div className="content">
                <h2>Descrizione</h2>
                <p>{selectedDescription}</p>
            </div>
        </main>
    );
};

export default Main;