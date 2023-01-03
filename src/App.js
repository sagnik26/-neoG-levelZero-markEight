import './App.css';
import './styles.css'
import { useState } from "react"

const emojiDictionary = {
  "😊" : "smiling",
  "😯" : "disbelief",
  "😞" : "sad",
  "😑" : "annoyance",
  "💕" : "love",
  "😄" : "happy"
}

var emojisWeKnow =  Object.keys(emojiDictionary)

function App() {
  const [meaning, setMeaning] = useState("")

  function emojiInputHandler(event) {
    var userInput = event.target.value
    var meaning = emojiDictionary[userInput]
    setMeaning(meaning)
    if(meaning === undefined) {
      meaning = "We don't know this"
    }
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji]
    setMeaning(meaning)
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiInputHandler}/>

      <h2>{meaning}</h2>

      <h3>emojis we know</h3>
      {
        emojisWeKnow.map(emoji => {
          return (
            <span 
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }} 
              key={emoji}
            > 
              {emoji} 
            </span>
          )
        })
      }
    </div>
  );
}

export default App;
