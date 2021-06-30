import React, { useState } from 'react'
import { QuizData } from './QuizData'
// import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Kbc from '../music/Kbc.mp3'
  import {Howl} from 'howler';

const Quiz = () => {
    const [number, setNumber] = useState(0);
    const [disable, setDisable] = useState(false);
   const [result,setResult] =useState(0)


    // useEffect(() => {
    //    console.log(QuizData[0].answer);
    // }, [])

    const changeQue = () => {
        let num = number;
      
        if (num < 4) {
            setNumber(num + 1)

        }
        else {
            setDisable(true)
          
        }
    }

    const notify = (val) => toast.dark(val, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });



        const playone=()=>{
            var sound = new Howl({
                src: [Kbc],
                autoplay: true,
                volume: 0.5,
               
                onend: function() {
                  console.log('Finished!');
                }
    
              
              });
              
              sound.play();
        }




    const checkAnswer=(check)=>{
        let num = number;
      
        if (num < 4) {
            setNumber(num + 1)

        }
        else {
            setDisable(true)
            
        }


        if(check===true)
        {
            setResult(result+1)
            playone()
            notify("Wow!! Your Answer Is Right")
        }
        else{
            playone()
            notify("Wrong Answer")
        }
        

    }
    const resetNow=()=>{
        setDisable(false)
        setNumber(0)
        setResult(0)
    }
    return (
        <>
            <div className="quiz">
           
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 col-12 mx-auto">
                            <div className="card">
                               {
                                   !disable ?(
                                       <>
                                        <div className="row">
                                    <div className="col-6 mx-auto">
                                        <div className="que">
                                            <h2>Questions &nbsp; {number+1} /5</h2>
                                            <h4>{QuizData[number].question}</h4>
                                        </div>

                                    </div>
                                    <div className="col-6 mx-auto">
                                        <h3>Answer</h3>
                                        {/* <button type="button" className="btn btn-outline-warning btn-block">{QuizData[number].answer[0].ans}</button>
                                        <button type="button" className="btn btn-outline-warning btn-block">{QuizData[number].answer[1].ans}</button>
                                        <button type="button" className="btn btn-outline-warning btn-block">{QuizData[number].answer[2].ans}</button>
                                        <button type="button" className="btn btn-outline-warning btn-block">{QuizData[number].answer[3].ans}</button> */}
                                        
                                        {
                                            QuizData[number].answer.map((val,ind)=>{
                                                return (
                                                    <>
                                                    <button type="button" key={ind} className="btn btn-outline-warning btn-block" onClick={()=>checkAnswer(val.isCorrect)} >{val.ans}</button>

                                                    </>
                                                )
                                            })
                                        }

                                        <br />
                                        <br />
                                        <div className="text-right">
                                            <button type="button" className="btn btn-success " onClick={changeQue}>Next <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                                        </div>

                                    </div>
                                </div>

                                       </>
                                   ) : (
                                       <>
                                       <div className="box">
                                           <h1>Thank You</h1>
                                           <h3>Your Scores {result}</h3>
                                           {/* <NavLink to="/" className="btn btn-success">Back To Home</NavLink> */}
                                           <button className="btn btn-success" onClick={resetNow}>Restart</button>
                                       </div>

                                       </>
                                   )
                               }
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>

        </>
    )
}

export default Quiz
