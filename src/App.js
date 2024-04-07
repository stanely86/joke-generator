import './CSS/App.css';
import React, {useState} from 'react';
import ShowJoke from './ShowJoke';


function App() {

  const [data, SetData] = useState({})
  const [answer, SetAnswer] = useState(false)

  function fetchJoke(){
    SetAnswer(false)
    fetch('https://official-joke-api.appspot.com/jokes/random')
      .then(response=>response.json())
      .then(data=> SetData(data))
      .catch(error => console.error('Error fetching joke:', error));
    }

  return (
    
      <div className="App">
      <h1>Joke Generator</h1>
      <div><iframe src="https://giphy.com/embed/d9P5HfhXRNRj9JDPe9/video"></iframe></div>
    
        <button type="button" class="btn btn-primary" onClick={fetchJoke}>GIVE ME A NEW JOKE</button>
        <ShowJoke answer={answer}
                  SetAnswer={SetAnswer}
                  data={data}/>
      </div>
  );
}

export default App;
