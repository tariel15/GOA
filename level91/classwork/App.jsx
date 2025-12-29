//3) შექმენით Player კომპონენტი რომელიც გამოიტანს h2-ში props-ით მიღებულ საყვარელ სიმეღას და p-ით props-ით მიღებულ საყვარელ არტისტს, დააექსპორტეთ ეს კომპონენტი და App.jsx-ში გამოიყენეთ, გადაეცით მას თქვენის სასურველი props, კომენტარებით დაწერეთ თუ რა არის props
import Player from './Player';

function App() {
    return (
        <div>
            {/* 
        აქ Player კომპონენტს ვაწვდით props-ებს:
        song და artist
      */}
            <Player song="Bohemian Rhapsody" artist="Queen" />
        </div>
    );
}

export default App;
