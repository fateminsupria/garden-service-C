import React from 'react';
import {useSpring, animated} from 'react-spring'

const Animation = () => {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      })
      return <animated.h1 style={props}>hello</animated.h1>
   
    
};

export default Animation;