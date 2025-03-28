import React, { useState, useRef } from 'react'; 
 
const TextLogo = () => { 
    const [position, setPosition] = useState({ x: 0, y: 0 }); 
    const [isHovering, setIsHovering] = useState(false); 
    const containerRef = useRef(null); 
   
    const handleMouseMove = (e) => { 
      if (!containerRef.current) return; 
       
      const rect = containerRef.current.getBoundingClientRect(); 
      setPosition({ 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      }); 
    }; 
   
    return ( 
      <div  
        ref={containerRef} 
        className="relative w-50 h-40" 
        onMouseMove={handleMouseMove} 
        onMouseEnter={() => setIsHovering(true)} 
        onMouseLeave={() => setIsHovering(false)} 
      > 
        <svg width="100%" height="100%" className="absolute top-0 left-0"> 
          <defs> 
            <radialGradient id="gold-glow" cx="0.5" cy="0.5" r="0.5"> 
              <stop offset="0%" stopColor="#FFD700" stopOpacity="1" /> 
              <stop offset="70%" stopColor="#FFD700" stopOpacity="0.7" /> 
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0" /> 
            </radialGradient> 
             
            <filter id="blur-effect" x="-50%" y="-50%" width="200%" height="200%"> 
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" /> 
            </filter> 
             
            <clipPath id="text-clip"> 
              <text  
                x="0" y="50"  
                fontFamily="Arial"  
                fontSize="45"  
                fontWeight="750" 
              > 
                BRIGHT 
              </text> 
              <text  
                x="0" y="100"  
                fontFamily="Arial"  
                fontSize="45"  
                fontWeight="750" 
              > 
                FUTURE 
              </text> 
            </clipPath> 
          </defs> 
           
          {/* Black text (always visible) */} 
          <text  
            x="0" y="50"  
            fontFamily="Arial"  
            fontSize="45"  
            fontWeight="750"  
            fill="black" 
          > 
            BRIGHT 
          </text> 
          <text  
            x="0" y="100"  
            fontFamily="Arial"  
            fontSize="45"  
            fontWeight="750"  
            fill="black" 
          > 
            FUTURE 
          </text> 
           
          {/* Golden glow that follows the cursor and is clipped to text shape */} 
          {isHovering && ( 
            <circle  
              cx={position.x}  
              cy={position.y}  
              r="78"  
              fill="url(#gold-glow)"  
              filter="url(#blur-effect)" 
              clipPath="url(#text-clip)" 
            /> 
          )} 
        </svg> 
      </div> 
    ); 
}; 
 
export default TextLogo;