
import React, { useEffect, useRef, useState } from 'react'

function useSpeechToText(options) {
    const [isListening,setIsListening]=useState(false)
    const [transcript,setTranscript]=useState("")
    const [error, setError] = useState(null)
    const recognitionRef=useRef(null)

    useEffect(()=>{
        if(!('webkitSpeechRecognition' ) in window){
            console.log("Web Speech API Is Not Supported On This Browser!!!");
            return
        }
        recognitionRef.current=new window.webkitSpeechRecognition()
        const recognition=recognitionRef.current
        recognition.interimResults=options.interimResults || true
        recognition.lang=options.lang || 'en-US'
        recognition.continuous = options.continuous || true;


        if("webkitSpeechGrammarList" in window){
            const grammar="#JSGF V1.0; grammar punctuation; public <punc> = . | , | ? | ! | ; | : ;"
            const speechRecognitionList=new window.webkitSpeechGrammarList()
            speechRecognitionList.addFromString(grammar,1)
            recognition.grammars=speechRecognitionList
        }

        recognition.onresult=(event)=>{
            let text=""
            for(let i=0;i<event.results.length;i++){
                text+=event.results[i][0].transcript
            }
            setTranscript(text)
        }
        recognition.onerror=(event)=>{
            setError(event.error)
            console.log("Speech Recognition Error",event.error);
            
        }

        recognition.onend=(event)=>{
                setIsListening(false)
                setTranscript("")

        }
        return ()=>{
            recognition.stop()
        }
    },[])
    const startListening=()=>{
        if(recognitionRef.current && !isListening){
            recognitionRef.current.start()
            setIsListening(true)
        }
    }
    const stopListening=()=>{
        if(recognitionRef.current && isListening){
            recognitionRef.current.stop()
            setIsListening(false)
        }
    }
  return {
    isListening,
    transcript,
    startListening,
    stopListening
  }
}

export default useSpeechToText
