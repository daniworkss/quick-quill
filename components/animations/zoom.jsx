import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
export default function Zoom({children, classname}){
   const [ref, inView]=useInView({
    triggerOnce: true
   })
   const variants ={
    small: {scale: 0, opacity: 0 },
    grow: {scale: 1, opacity: 1, transiton: {duration: 2 } }
   }
  
    return (
    <motion.div ref={ref} className={`${classname}`} initial = 'small' animate={ inView ? 'grow': 'small'} variants={variants}>
      {children}
    </motion.div>
  )
};
