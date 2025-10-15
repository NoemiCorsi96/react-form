import { useState } from 'react'
import titles from './data/titles'
/*Milestone 1
Creare una pagina che visualizzi una lista di articoli, mostrandone solo il titolo.
Milestone 2
Aggiungiamo in pagina un semplice form con un campo input in cui inserire il titolo di un 
nuovo articolo del blog. Al submit del form, mostrare la lista degli articoli aggiornati.

BONUS

Aggiungere la possibilità di cancellare ciascun articolo utilizzando un'icona.
Impostare il lavoro su più componenti. */
function App() {


  return (
    <>
      <ul>
        {titles.map((title, i) =>
          <li key={i}>
            {title}
          </li>
        )}

      </ul>
    </>
  )
}

export default App
