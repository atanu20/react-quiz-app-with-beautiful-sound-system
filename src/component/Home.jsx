import React  from 'react'
// import { NavLink } from 'react-router-dom'
import {Howl} from 'howler';
import KbcBackground from '../music/KbcBackground.mp3'
import { useHistory } from 'react-router-dom';

const Home = () => {
    const his=useHistory()
    const startQuiz=()=>{
        his.push("/quiz")
        play();

    }
    const play=()=>{
        var sound = new Howl({
            src: [KbcBackground],
            autoplay: true,
            
           
            onend: function() {
              console.log('Finished!');
            }

          
          });
          
          sound.play();
    }
    // useEffect(() => {
    //   play()
    // }, [])
    

    return (
        <>
            <div className="home">

                {/* <NavLink to="/quiz" className="btn btn-primary">Start Quiz</NavLink> */}
                <button className="btn btn-primary" onClick={startQuiz}>Start Quiz</button>

            </div>
            
        </>
    )
}

export default Home
