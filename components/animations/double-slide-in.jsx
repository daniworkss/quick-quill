// this animation is used properly on laptops and desktops
import {motion,} from 'framer-motion'
import { useInView } from 'react-intersection-observer' 
import { background, useMediaQuery } from '@chakra-ui/react'
export default function DoubleSlide({children, className}){
    const [ref, inView] = useInView({
        triggerOnce: false
     })
  
     const containerVariants = {
      hidden: { opacity: 0, x: '-100%' },
      visible: { opacity: 1, x:0, transition: { duration: 0.5, delay: 0.2 } },
    };
  
  return (
    < motion.div ref={ref} initial = 'hidden' animate={inView ? 'visible' : 'hidden'} variants={containerVariants}
    className={`${className}`}
    >
     {children}
    </motion.div>

  )
};
