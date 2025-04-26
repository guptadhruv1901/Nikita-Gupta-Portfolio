import React ,{useEffect, useState} from 'react'
import './Starter.css'
import { motion, spring, AnimatePresence } from "motion/react"
import Typed from 'typed.js';
import { assets } from '../../assets/assets.js';



export default function Starter() {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Automatically toggle the component's visibility after 5 seconds
        const timer = setTimeout(() => setIsVisible(false), 5000);
        return () => clearTimeout(timer); // Cleanup on unmount
      }, []);

    const variants = {
        initial1: { y:1000,opacity:0,scale:0.3 },
        animate1: {
            y:-200,
            opacity:1,
            scale:1,
            transition: {
                duration: 6,
                ease: "easeInOut",
                type: spring
            },
        },
        exit1: {
            y:-2000,
            scale:0.5,
            transition: {
                duration: 6, // Duration of the exit animation
                 // Delay before the exit animation starts
                ease: "easeInOut",
                type:spring
            },
        },
        initial2: { y:-1000,opacity:0,scale:0.3 },
        animate2: {
            y:-300,
            opacity:1,
            scale:1,
            transition: {
                duration: 6,
                ease: "easeInOut",
                type: spring
            },
        },
        animate3: {
            y:-100,
            opacity:1,
            scale:1,
            transition: {
                duration: 6,
                ease: "easeInOut",
                type: spring
            },
        },
        exit2: {
            y:2000,
            scale:0.5,
            transition: {
                duration: 6, // Duration of the exit animation
                 // Delay before the exit animation starts
                ease: "easeInOut",
                type:spring
            },
        },
      };
    

    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['<span>creating</span> Ideas','<span>creating</span> Visual Solutions', '<span>creating</span> Impactful Designs','<span>creating</span> Happiness','<span>to create</span> Art'],
        typeSpeed: 120,
        backSpeed: 10,
        backDelay: 2000,
        loop :true
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);  
  return (
  <div id='home'>
    <motion.div className='content'>   
        <h1 onScroll={()=>{}}>Hello! I'm Nikita.</h1>
        <div className="typer">
            <h1>A Graphic Designer, who loves <span ref={el} className='auto-type'></span></h1>
        </div>
    </motion.div>
    <motion.div className='main'>
        
        <AnimatePresence>
            {isVisible && (
                <motion.div variants={variants} initial="initial1" animate="animate1" exit="exit1" className="col">
                    <img src={assets.landing_img_1}  />
                    <img src={assets.landing_img_6}  />
                    <img src={assets.landing_img_3}  />
                </motion.div>
            )}
        </AnimatePresence>
        <AnimatePresence>
            {isVisible && (
                <motion.div variants={variants} initial="initial2" animate="animate2" exit="exit2" className="col1">
                    <img src={assets.landing_img_7}  />
                    <img src={assets.landing_img_8}  />
                    <img src={assets.landing_img_5}  />
                </motion.div>
            )}
        </AnimatePresence>
        <AnimatePresence>
            {isVisible && (
                <motion.div variants={variants} initial="initial1" animate="animate3" exit="exit1"  className="col">
                    <img src={assets.landing_img_2}  />
                    <img src={assets.landing_img_1}  />
                    <img src={assets.landing_img_6}  />
                </motion.div>
            )}
        </AnimatePresence>
        <AnimatePresence>
            {isVisible && (
                <motion.div variants={variants} initial="initial2" animate="animate1" exit="exit2" className="col1">
                    <img src={assets.landing_img_3}  />
                    <img src={assets.landing_img_9}  />
                    <img src={assets.landing_img_5}  />
                </motion.div>
            )}
        </AnimatePresence>
        <AnimatePresence>
            {isVisible && (
                <motion.div variants={variants} initial="initial1" animate="animate2" exit="exit1"  className="col">
                    <img src={assets.landing_img_8}  />
                    <img src={assets.landing_img_4}  />
                    <img src={assets.landing_img_7}  />
                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
  </div>
  )
}
