import { useEffect,useState , useRef} from "react"
export default function Typewriter({text,speed}){
  const [currentText, setCurrentText] = useState('')
  const[ index, setIndex] = useState(0)
  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setCurrentText(prev => prev + text.charAt(index));
       setIndex(prevIndex => prevIndex + 1);
      }, speed);
      
      return () => clearTimeout(timer);
    }
  }, [text, speed, currentText, index])

  return (
     <p className="text-white">{currentText}</p>
  )
};
