import ProductButton from "./ProductButton.jsx";

const Main = () => {
    return (
      <main>
        <ProductButton />
        <div className="content">
            <h2>HTML</h2>
            <p>HTM (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. 
                Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini.
            </p>
        </div>
      </main>
    );
};
export default Main;