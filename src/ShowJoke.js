import React from 'react'

export default function ShowJoke(props){

  const {data, answer, SetAnswer}= props
  
 function provideAnswer(){
    SetAnswer(true)
  }

    return(
        <>
        {data.setup &&(
            <div className='Joke'>
              <p className='fade'>{data.setup}</p>
              <button type="button" class="btn btn-info fade" onClick={provideAnswer}>GIVE ME AN ANSWER</button>
                { answer &&(<p className='punchline fade'>{data.punchline}</p>)}
            </div>
          )}
        </>
    )
}