import './App.css';
import ProfileCard from './components/ProfileCard';
import ActivityCard from './components/ActivityCard';
import Data from './data.json';
import { useState } from 'react'

function App() {
  const [ tFrame ] = useState(Data.timeframes);
  console.log(tFrame);
  return (
    <div className="App">
      <ProfileCard /> 
      {
        Data.map((e, i)  => {          
          return(
            <>
              <ActivityCard 
                id={i}
                image={e.image} 
                title={e.title} 
                timeframe={e.timeframes.weekly.current} 
                currentTime="Weekly" 
                time={e.timeframes.weekly.previous}/>            
            </>
          )
        })
      }
    </div>
  )
}

export default App