import React, { useState, useRef } from 'react'
import BottomArr from '../assets/Bottomarr'

function Dropdown({ faq, index }) {
    const itemRef = useRef()
    const [boxState, setBoxState] = useState('close')

    const openBox = (index) => {

        // if(listItemRefs.current[index]){
        console.log(boxState, 'this is the boxstate')
        if (boxState === 'close') {
            const element = itemRef.current

            itemRef.current.style.height = element.scrollHeight + 'px'
            itemRef.current.style.transition = 'height 0.2s ease-in'
            // }
            setBoxState('open')
        } else {
            const element = itemRef.current

            itemRef.current.style.height = '60px'
            itemRef.current.style.transition = 'height 0.2s ease-in'
            setBoxState('close')
        }

        console.log('buttonclicked my boy', index)

    }

    // ref={(el) => listItemRefs.current[index] = el}
    return (
        <li ref={itemRef} key={index} className='hp w-[75%] bg-white px-4 py-3 h-[60px] mt-6'>
            <div className='text-xl flex mt-2 items-center justify-between'>
                <div><p>{faq.main}</p></div>
                <button onClick={() => openBox(index)}><BottomArr /></button>
            </div>
            <div className='w-[80%] mt-[10px]' >
                <p>{faq.ext}</p>
            </div>


        </li>
    )
}

export default Dropdown