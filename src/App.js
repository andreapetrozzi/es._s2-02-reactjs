import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './components/BookList'
import fantasyBooks from './fantasyBooks.json'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        {/* <WarningSign text="Watch out again!" /> */}
        {/* <MyBadge text="NEW!!" color="info" /> */}
        {/* <SingleBook book={fantasyBooks[0]} /> */}
        <BookList books={fantasyBooks} />
      </header>

    </div>
  )
}

export default App



// npm i bootstrap@4.6.1
// npm i react - bootstrap@1.6.5


// TRACCIA: React Hooks
// Negli esercizi di oggi andremo ad applicare le conoscenze riguardo gli hook di React alla app StriveBooks.
// L’obiettivo è di convertire ogni componente a classe in un componente a funzione e usare gli hook per replicare le funzionalità presenti nelle classi con gli hook appropriati corrispondenti.

// Suggerimenti:
// Usa useState() e useEffect() per replicare le funzionalità di un Class Component.
// Ricorda che useEffect() può essere usato sia come componentDidMount sia come componentDidUpdate, in base a ciò che metterai nell’array di dipendenze.
// Cerca di mantenere i valori dei campi input nel componente AddComment in un singolo oggetto, usando un unico hook useState() per l’intero form.
