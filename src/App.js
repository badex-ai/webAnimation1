import logo from './logo.svg';
import './App.css';
import Headphone from './assets/Headphone.jsx';
import Sun from './assets/Sun.jsx';
import CreditIcon from './assets/Creditcard.jsx';
import { Link } from "react-router" ;
import QuoteForm from "./component/form"
import { useRef,useEffect, useState } from 'react';
import TextLogo from './component/text';
import Star from './assets/Star.jsx'
import Ribbon from './assets/Ribbon.jsx';
import Shield from './assets/Shield.jsx'
import Payment from './assets/Payment.jsx';
import RightArr from './assets/Rightarr.jsx';
import LeftArr from './assets/Leftarr.jsx';
import Dropdown from './component/Dropdown.jsx';
import Rooftop from './assets/Rooftop.jsx';
import homeNight from './assets/homeNight.jpg';
import homeDay from './assets/homeDay.jpg';
import suit from './assets/suit.jpg'
import factory from './assets/factory.jpg'
import solarEarn from './assets/earnings.jpg'
import staffing from './assets/staffing.jpg'
import solarBox from './assets/solarBox.jpg'
import heart from './assets/heart.jpg'

function App() {
  
  const myRef= useRef()
  const tileRef= useRef()
  const easyRef= useRef()
  const btn1 = useRef()
  const btn2 = useRef()
  const listItemRefs = useRef([])
  const customRef= useRef()
  const [xySectionScroll,setxySectionScroll] = useState(null)
  const sectionsRef = useRef([]);
  const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });
  const numberOfSections = 8
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [slide, setSlide] = useState(0)
  const scrollTimeout = useRef(null);
  const [xTilePosition, setxTilePosition] = useState(0);
  const [rightArrColor, setRightArrColor] = useState('black');
  const [LeftArrColor, setLeftArrColor] = useState('black');


 

  useEffect(() => {


     const handleScroll = () => {
        // Get the current scroll position
        const scrollPosition = window.scrollY;
        
        // Calculate the section in view
        sectionsRef.current.forEach((section, index) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
  
          if (scrollPosition >= sectionTop - sectionHeight / 2 && scrollPosition < sectionTop + sectionHeight / 2) {
            setCurrentSection(index);
          }
        });
      };// Add smooth scroll CSS for the body
    
    if(sectionsRef.current){
      document.documentElement.style.scrollBehavior = 'smooth';
    }
    
   

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  
  // useEffect(() => {
  //   // Add the wheel event listener for auto-scrolling
  //   // window.addEventListener('wheel', handleWheel);
  //   window.addEventListener('wheel', handleWheel, { passive: false });
  // return () => {
  //   window.removeEventListener('wheel', handleWheel, { passive: false });
  // };
  // }, [currentSection]);

  useEffect(() => {
    // Access the current ref after the component has mounted
    
    const container = easyRef.current;
    const rect = container.getBoundingClientRect();

    if (container && xySectionScroll) {
      const {x,y} = xySectionScroll

     
      const xPercent = (x - rect.left) / rect.width;  // Values between 0 and 1
      const yPercent = (y - rect.top) / rect.height; 
      const xOffset = (xPercent - 0.5) * 30; // Adjust multiplier for sensitivity
      const yOffset = (yPercent - 0.5) * 30      
      container.style.backgroundPosition = `${50 + xOffset}% ${50 + yOffset}%`;
      
    }
  }, [xySectionScroll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {

          // Check if the section is in view
          if (entry.isIntersecting) {
            // Add the animation class to the section

            const solarPanels = Array.from(entry.target.querySelectorAll('[id^="panel-"]'))
            .filter(el => /^panel-\d+-\d+$/.test(el.id))

            const connector = entry.target.querySelector('.connector')
            const connect = entry.target.querySelector('.connect')


            
            if(solarPanels.length > 0 && connector ){


              setTimeout(() => {

                solarPanels.forEach((solarPanel,index)=> {
                   
                  setTimeout(() => {
                    solarPanel.classList.add('solarPanelFadeIn');
                    const grid = solarPanel.querySelector('[id$="-grid"]');
                    if (grid) {
                      grid.classList.add('solarPanelFadeIn');
                    }
                  }, index* 55);
                 
                })

                setTimeout(() => {
                  connector.classList.add('connectorSlideIn');
                }, solarPanels.length * 55 + 200);

                setTimeout(() => {
                  connect.classList.add('animateStroke');
                }, solarPanels.length * 55 + 200 + 500);

              }, 700);
            
          }
            
            // Trigger animation only once
            const elements = entry.target.querySelectorAll('.hp');

            if(entry.target.querySelectorAll){

              
              elements.forEach((el, index) => {
               
                // Add a delay of 4 seconds multiplied by the index
                setTimeout(() => {
                  el.classList.add('textrise');
                }, index * 55); // 4000 milliseconds = 4 seconds
              });

              
            }else{
              const elements = entry.target.querySelector('.hp').classList.add('textrise')
            }
            
            
          }
        });
      },
      { threshold: 0.3 } // Adjust the percentage of the section visible before triggering the animation
    );

    //Observe all sections
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup on unmount
    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  
  

  useEffect(() => {

    
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel, { passive: false });
    };
  }, [currentSection, isScrolling]);

  const scrollToTop=()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

 
  const handleWheel = (event) => {
    
    const lastSectionRect = sectionsRef.current[sectionsRef.current.length - 1] 
    const firstSectionTop = sectionsRef.current[0].getBoundingClientRect().top;
    const lastSectionBottom = sectionsRef.current[sectionsRef.current.length - 1].getBoundingClientRect().bottom;
    
 
    const isWithinSections = firstSectionTop <= 0 && lastSectionBottom > 0;

    const isAtEndOfSections = 
    currentSection === sectionsRef.current.length - 1  && event.deltaY > 0;

    if (currentSection === 0 && event.deltaY < 0) {
      // Allow normal scrolling by NOT preventing default
      console.log('yes')
      return;
    }
  
    if (isAtEndOfSections) {
      // Allow natural scrolling by NOT calling preventDefault()
      
      return; 
    }
    
    // If we're not within the sections area, let normal scrolling happen
    if (!isWithinSections) {
      return; // Exit function, allowing default scroll behavior
    }

    
    
    // If we are within sections, prevent default scrolling and use our custom scrolling
    event.preventDefault();
    
    if (isScrolling) return;
    
    
    // Handle section 0 differently
    const target = sectionsRef.current[0].offsetHeight - window.innerHeight + sectionsRef.current[0].offsetTop
    
    if (currentSection === 0 && event.deltaY > 0 && window.scrollY < target) {
      setIsScrolling(true);
      // setCurrentSection(index);
      const section = sectionsRef.current[0];
      
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });

      // section.style.backgroundImage = `url(${homeNight})`
     
      const night = section.children[0]
      const day = section.children[1]
      day.style.animation = 'leave .4s ease-out forwards' 
      night.style.animation= 'enter .4s ease-in forwards' 

      

      
      // section.transition = 'backgroundImage 1.2s ease'
      
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1200);

      return 
    }

    
    let targetSection = currentSection;
  
    // Handle scrolling between sections - only move one section at a time
    if (event.deltaY > 0 && currentSection < numberOfSections - 1) {
      // Scroll down to next section
      
      targetSection = currentSection + 1;
    
    } else if (event.deltaY < 0 && currentSection > 0) {
    // Scroll up to previous section
  
    targetSection = currentSection - 1;
    
    } else {
    // No section change needed
    setIsScrolling(false);
    return;
    }
 
    // Only scroll if the target section is different
    if (targetSection !== currentSection) {
      // Perform the scroll
      scrollToSection(targetSection);
      
      // Set a timeout that matches the duration of your smooth scroll
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
        }, 1400); // Adjust this time to match your scroll animation duration
      } else {
      setIsScrolling(false);
      }
  };

 
  


  

  
  
   
  const scrollToSection = (index) => {
    const section = sectionsRef.current[index];
    if (section) {
      setIsScrolling(true);
      setCurrentSection(index);
      
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
      
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1200);
    }
  };

  const handleMouseEnter = () => {

    const svgElement = myRef.current;
    const circleElement = svgElement.querySelector('circle');

    const pathElements = svgElement.querySelectorAll('path');
    circleElement.setAttribute('fill', '#fee71d');

  
   svgElement.style.animation = 'rotateAnimation 1s ease .3s';

    pathElements.forEach(path => {
      
      path.style.transition= 'transform 0.2s ease-out';
      path.style.transform = 'scale3d(1.2, 1.2, 1)'; 
  
      path.style.transformOrigin = 'center';

      
    });

    
  }
  
  const handleMouseLeave = () => {

    const svgElement = myRef.current;
    if (!svgElement) return;
  
    const circleElement = svgElement.querySelector('circle');
    const pathElements = svgElement.querySelectorAll('path');
  
  
    circleElement.setAttribute('fill', 'white'); 
  
    
    pathElements.forEach(path => {
      path.style.transform = 'none';
    });
  
    svgElement.style.animation = 'none';
  }

  const moveBg = (e) =>{
    
 
   
    

    const container = easyRef.current
    
  

    if (container) {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      

      setxySectionScroll({x,y})
     
    }
  
  }

  const resetBg= ()=>{
    const container = easyRef.current

    container.style.transform='none'
  }

  

 

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMaskPosition({ x, y });
  };


  

  useEffect(() => {
    let tile = tileRef.current

 

    if(tileRef.current){
      tile.style.transform = `translateX(${slide}rem)`
      tile.style.transition = 'transform 0.2s ease-out '
    }

    // if(tileRef.current){
      


    //   let xim =  tile.getBoundingClientRect().x
    //      let yim = tile.getBoundingClientRect().right 
    //      let width = tile.getBoundingClientRect().width - 6
  
  
      // if(tile.getBoundingClientRect().x === 0){
      //   btn1.current.classList.add('border-red-500');
      //   btn2.current.classList.remove('border-red-500');
      //   console.log('left is' , true)
       
      // }
  

      // console.log(window.innerWidth + Math.abs(xim), 'value of addition' )
      // if (window.innerWidth + Math.abs(xim) === width) {
       
  
      //   btn2.current.classList.add('border-red-500');
      //   btn1.current.classList.remove('border-red-500');
      //   console.log('right is' , true)
  
      // }
    
    // }

    // console.log(slide, value)

   
   

      
  }, [slide])

  // useEffect(() => {

  //   let tile = tileRef.current
      
  //        let width = tile.getBoundingClientRect().width - 6
  //   if(xTilePosition===0){
  //       btn1.current.classList.add('border-gray-400');
  //     //  console.log(btn1.current,'this is btn1')
  //      setLeftArrColor('gray')
  //      setRightArrColor('black')

  //       btn2.current.classList.remove('border-gray-400');
  //   }

  //   if (window.innerWidth + Math.abs(xTilePosition) === width) {
  //       btn2.current.classList.add('border-gray-400');
  //       btn1.current.classList.remove('border-gray-400');
  //       setRightArrColor('gray')
  //       setLeftArrColor('black')
  //   }
  // }, [xTilePosition])
  
 

  // useEffect(() => {
    
  // }, [listItem.current])
  



  // const onMoveTile = (value)=>{
     
  //   let tile = tileRef.current

  //   if(!tile)return

   

  //     let position;
     

  //     if (value == 'right') {
  //      let xim =  tile.getBoundingClientRect().x
  //      let yim = tile.getBoundingClientRect().right 
  //      let width = tile.getBoundingClientRect().width - 6
       
  //       if(window.innerWidth + Math.abs(xim) < width   ){
         
  //         position = slide - 29
  //         setSlide(position)
  //         setxTilePosition(xTilePosition - 464)



  //       }else{
  //         return
  //       }
  //     }
        
      
  //     if (value == 'left') {

  //       if(tile.getBoundingClientRect().x < 0){
  //         position = slide + 29
  //         setSlide(position)
  //         setxTilePosition(xTilePosition + 464)




  
  //       }else{
  //         return
  //       }
  //     }
  //     // && tile.getBoundingClientRect().right + Math.abs(tile.getBoundingClientRect().x) < tile.getBoundingClientRect().width
      
      
    

      

  
  // }

  useEffect(() => {
    let tile = tileRef.current;
    if (!tile) return;
    
    const tileWidth = tile.getBoundingClientRect().width;
    const maxRightPosition = -(tileWidth - window.innerWidth);
    
    // Check left boundary
    if (xTilePosition === 0) {
      btn1.current.classList.add('border-gray-400');
      setLeftArrColor('gray');
      setRightArrColor('black');
      btn2.current.classList.remove('border-gray-400');
    }
    
    // Check right boundary - using approximate equality for floating point comparison
    if (Math.abs(xTilePosition - maxRightPosition) < 10) {
      btn2.current.classList.add('border-gray-400');
      btn1.current.classList.remove('border-gray-400');
      setRightArrColor('gray');
      setLeftArrColor('black');
    }
  }, [xTilePosition]);

  const onMoveTile = (value) => {
    let tile = tileRef.current;
    if (!tile) return;
    
    const tileWidth = tile.getBoundingClientRect().width;
    const tileLeft = tile.getBoundingClientRect().x;
    const viewportWidth = window.innerWidth;
    
    // Calculate maximum allowed slide distance
    const maxRightSlide = -(tileWidth - viewportWidth);
    
    let newSlide = slide;
    let newXPosition = xTilePosition;
    const slideIncrement = 29;  //each tile is 29rem
    const xPositionIncrement = 464;
    
    if (value === 'right') {
      // Check if moving right wouldn't exceed the right boundary
      if (xTilePosition - xPositionIncrement >= maxRightSlide) {
        newSlide = slide - slideIncrement;
        newXPosition = xTilePosition - xPositionIncrement;
      } else {
        // Snap to boundary if the movement would exceed
        newSlide = maxRightSlide / (xPositionIncrement / slideIncrement);
        newXPosition = maxRightSlide;
      }
    }
    
    if (value === 'left') {
      // Check if moving left wouldn't exceed the left boundary
      if (xTilePosition + xPositionIncrement <= 0) {
        newSlide = slide + slideIncrement;
        newXPosition = xTilePosition + xPositionIncrement;
      } else {
        // Snap to boundary if the movement would exceed
        newSlide = 0;
        newXPosition = 0;
      }
    }
    
    // Only update if the values actually changed
    if (newSlide !== slide) setSlide(newSlide);
    if (newXPosition !== xTilePosition) setxTilePosition(newXPosition);
  }
  

  let arr= [{main: 'What happens if I decide to move?',ext: 'You can very easily take care of it. You can even place a call, we would help with the transportation for a small fee'},{main:'How long do solar panels really last?',ext:'2'},{main:'How much can I expect to save when I go solar?',ext:'3'},{main:'Does my state offer incentives to go solar?',ext:'4'},{main:'How many solar panels will my home need?',ext: '5'},{main:'Is my home good for solar?',ext:'6'}]


  if (listItemRefs.current.length !== arr.length) {
    listItemRefs.current = Array(arr.length).fill().map((_, i) => listItemRefs.current[i] );
  }

  const dropDownList = arr.map((faq,index)=>{
    return  <Dropdown faq={faq} key={index} index={index}/>
  })
  


  return (
  
      <div  className='cont relative'>
      <header ref={customRef} className="px-10 h-[65%] w-full">
       

          <nav className=' flex h-8 justify-between'>
          <div>
           <Link href='#'>
            SOLARFLARE
            </Link>

           </div>
           

            <ul className=' flex w-[40rem] justify-evenly'>
            
            <li><Link>Product</Link></li>
            <li><Link>Plans and Pricing</Link></li>
            <li><Link>Learn</Link></li>
            <li><Link>Company</Link></li>
            
            </ul>

            <div><Link>Get a Quote</Link></div>
          </nav>

          <div className='flex mt-[22rem] w-[40rem] justify-between'>
            <div>10034 intallments</div>
            <div className='w-[20rem]'>Step Into Tomorrow Like Never Before. <span>Exprience Advanced Solar Power</span></div>
          </div>
          <div className='flex justify-between mt-10 mb-10 items-end '>
            <div className='bg-black items-center justify-between flex rounded-full w-[15rem] h-10 text-white px-8 '>
              <div>Get a quote</div>
              <div><RightArr color={'white'}/></div>
            </div>
            <div className=' w-[14rem]  relative'>
              <TextLogo/>
            </div>
           
            
          </div>
           
      </header>
      {/* backgroundImage: "url('/image1.jpg')" */}
      <section ref={(el) => (sectionsRef.current[0] = el)}  style={{height: "calc(100vh + 28rem)"} } className='relative sec  p-[10rem]'>
        
          <img className='absolute z-[-10] top-0 left-0 w-full h-full opacity-0'  src={homeNight}/>
          <img className='absolute z-[-20] top-0 left-0 w-full h-full opacity-100'  src={homeDay}/>
        
          <div style={{height: "calc(100vh + 28rem - 20rem)"}} className='flex '>
            <div  className="w-[50%] text-3xl">
              <p className='w-[18rem] text-white'>America's Top Pick For Home Solar and Energy Storage</p>
              </div>
            <div className="w-[50%] ">
              <div className="flex h-[100%] justify-between items-center flex-col text-center">
              
                <div onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} className=" p-8 bg-white h-[18rem] w-[14rem] flex flex-col items-center justify-between">
                  <div className="mt-6">
                  <Sun ref={myRef} w={42} h={42} />
                  </div>
              
                  <p className="text-lg text-center ">Exceptional Solar and Battery Performance</p>
                </div>
              <div className=" p-8 bg-white h-[18rem] w-[14rem] flex flex-col items-center justify-between ">
              <div  >
              <div className="mt-6">
              <CreditIcon w={50} h={50}/>
              </div>
                
                </div >
                <p>Customized Payment Solution For Your Home</p>
              </div>
              <div className=" p-8 bg-white h-[18rem] w-[14rem] flex flex-col items-center justify-between">
              <div className="mt-6" >
                <Headphone w={50} h={50}/>
                </div>
                <p>The Solarflare Assurance</p>
                </div>
              </div>
             
            </div>
          </div>
          
        </section>
       
        <section ref={(el) => (sectionsRef.current[1] = el)} className='sec bg-pink-100 h-screen flex w-full parent'>
          <div  className='w-[50%] p-10  bg-no-repeat elect1'>
            <h2  className='text-4xl text-white ' >Solar for your <span className='block'>home</span></h2>
            <div  className='bg-white items-center justify-between flex rounded-full w-[15rem]  l1  h-10 px-8 mt-5 '>
            <div>Residence</div>
            <div><RightArr color={'black'}/></div>
            </div>
          </div>
          <div  className='w-[50%] elect2 bg-no-repeat bg-right bg-cover p-10'>
            <h2 className='text-4xl text-white '> Solar for your <span className='block'>business</span></h2>
            <div className='bg-white items-center justify-between flex rounded-full w-[15rem] l2 h-10 px-8 mt-5'>
            <div>Commercial</div>
              <div><RightArr color={'black'}/></div>
            </div>
          
         

          </div>
        </section>

        <section ref={(el) => (sectionsRef.current[2] = el)}  id="section3" className='sec px-10 h-[100vh] text-center py-[5rem] flex flex-col items-center'>
         
            <h2 className='text-4xl w-[30rem] hp '>Shatter the boundaries of <span className='block'>Traditional Energy</span></h2>
           
            {/* bg-red-400 */}
            <div className='h-[18rem] mt-[3rem]  w-[60rem]'>
              <Rooftop/>
            </div>
           
          <p className='mt-[3rem] w-[16rem] mx-0 my-auto me'>Upgrade to Affordable Dependable Solar and Battery Power

          </p>
          <div className='textrise mt-[1rem] w-[15rem] h-[4rem] px-8 border rounded-full justify-between flex items-center'>
            <div>Get a Quote</div>
           <div><RightArr color={'black'}/></div>
            </div>
        </section>

        <section ref={(el) => (sectionsRef.current[3] = el)} id="section4" className='sec flex '>
          <div className='w-[50%] h-[100vh] pl-[12rem] py-[6rem] '>
            <div className='w-[22rem] h-[70%]'>
            <div className='hp'>PLAN & PRICING</div>
            <div className='hp text-5xl'>
              <p className=''>Smart Savings.<span>  Easy Living</span></p>
            </div>
            <div>
              <p className='hp mt-[5rem]'>From installation to maintenance, enjoy an effortless and affordable solar experience with the Sunrun Plan Solar lease
              </p>
            </div>


            <ul>
              <li className='hp flex mt-2'>
                <div><Ribbon/></div>
                <p className='ml-4'>
                  Best-in-class solar panels and battery Storage
                </p>
              </li>
              <li className='hp flex mt-2'>
                <div><Shield/></div>
                <p className='ml-4' >
                  25-year equipment guarantee
                </p>
              </li>
              <li className='hp flex mt-2'>
                <div><Payment/></div>
                <p className='ml-4'>
                  Predictable montly payments with locked-in rates
                </p>
              </li>
              </ul>
           
             
           
            </div>
            <div  className='mt-[5rem] w-[15rem] h-[3rem] px-8 border rounded-full justify-between flex items-center'>
              
              <p>Get a Quote</p>
              <div><RightArr color={'black'}/></div>
            </div>
          </div>
          <div onMouseMove={(e)=>moveBg(e)} onMouseLeave={()=>resetBg()} ref={easyRef} style={{backgroundImage: "url('/cell.png')"}} className='w-[50%] h-[100vh] bg-no-repeat bg-cover cell'>
           
          </div>

        </section>

        <section ref={(el) => (sectionsRef.current[4] = el)} id="section5" className='sec flex h-[100vh]'>
          <div style={{backgroundImage: "Url(fam.png)"}} className='w-[50%] h-[100vh] bg-cover bg-no-repeat'> </div>
          <div className='w-[50%] relative overflow-hidden'>
          <div className=' bg-black text-white  h-[100vh] px-[4rem] py-[8rem] ' >
            
            <div className='w-[80%]'>
            <ul className='flex w-10rem'>
            <li><Star/></li>
            <li><Star/></li>
            <li><Star/></li>
            <li><Star/></li>
            <li><Star/></li>
            </ul>
            <div className='text-4xl mt-8 hp'>
              it's convenient, we don't have to worry about it. SolarFlare monitor it for us. if anythig happens they will come out and fix it so we like that part.
            
            </div>
            <div className='text-lg mt-10'>Harly - Litchfield Park, AZ</div>
            </div>
            
            
          </div>
          <div className="text-6xl text-gray-400 absolute bottom-0 z-2 overflow-hidden whitespace-nowrap ">
            <p className='banner'>3000 Homes and Counting +900 Estimated Net Metering</p>
          </div>
          </div>
         
        </section>

        <section id="section6" ref={(el) => (sectionsRef.current[5] = el)} className='sec bg-yellow-300 p-[6rem]' >
        <div className='text-5xl w-[40%]'>
              Your Questions, Answered
            </div>
         
            
            <div className='flex'>
              <div className='w-[50%] text-md'>Have a different question? </div>
              <ul className='w-[50%] h-[35rem]'>
                {dropDownList}
              </ul>
            </div>
            <div className='bg-white text-black items-center justify-between flex rounded-full w-[15rem] h-10 px-8 '>
              <div className=''>Browse all questions</div>
              <div><RightArr color={'black'}/></div>
              </div>
          
        </section>
        
        <section ref={(el) => (sectionsRef.current[6] = el)} id="section7" className='sec w-full bg-gradient-to-b from-yellow-300 via-yellow-200 to-white  h-[100vh] '>
          <div className='   p-[4rem] hp' >
          <QuoteForm/>

          </div>
        </section>

        <section ref={(el) => (sectionsRef.current[7] = el)} className='sec w-full h-[100vh] bg-green-50 py-[5rem] '>
          
            <div className=' flex justify-between  w-[80%] items-end  '>
            <div className='px-[10rem] text-[3rem] '>
              <p className='w-[30rem]'>Transform Your Living with Solar Power</p>
            </div>
            <div  className='w-[7rem] flex justify-between'>
              <button ref={btn1} onClick={()=>onMoveTile('left')} className=" w-12 h-12 rounded-full border-black border border-2 flex items-center justify-center"><LeftArr  color={LeftArrColor}/></button>
              <button ref={btn2} onClick={()=>onMoveTile('right')} className=" w-12 h-12 rounded-full border-black border  border-2 flex items-center justify-center"><RightArr color={rightArrColor}/></button>
            </div>
            </div>
            <div  className='overflow-x-scroll mt-10 transform'>
            <div ref={tileRef}  className='flex w-[180rem] h-[29rem] border justify-between px-3 py-4 items-center'>
              <div>
              <div style={{backgroundImage:`url(${solarBox})`}} className='w-[25rem] h-[25rem] bg-no-repeat bg-cover '></div>
              <p>
                Product
              </p>
              <p>State of the art solar and battery solution</p>
              </div>
            
            <div>
              <div style={{backgroundImage: `url(${staffing})`}} className='w-[25rem] h-[25rem]  bg-no-repeat bg-cover'>
             </div>
             <p>
                Staffing
              </p>
              <p>People at Solarflare</p>
            </div>
            <div>
              <div style={{backgroundImage: `url(${solarEarn})`}} className='w-[25rem] bg-no-repeat h-[25rem] bg-cover'>
             
              </div>
              <p>
                Earn
              </p>
              <p>NEM 3.0 What is it and how it affects carlifornia</p>
            </div>
            <div>
              <div style={{backgroundImage:" url('/two.png')"}} className='w-[25rem] bg-no-repeat h-[25rem] bg-cover'>
              
              </div>
              <p>
                Learn
              </p>
              <p>Understand the basics of solar energy</p>
            </div>
            <div>
              <div style={{backgroundImage:` url(${factory})`}} className='w-[25rem] bg-no-repeat h-[25rem] bg-cover'>
             
              </div>
              <p>
                Factory
              </p>
              <p>Factory facilities and credetials</p>
            </div>
            <div>
              <div style={{backgroundImage: `url(${suit})`}} className='w-[25rem] bg-no-repeat h-[25rem] bg-cover'>
             
              </div>
              <p>
                Careers
              </p>
              <p>Work with us</p>
            </div>
            <div>
              <div style={{backgroundImage: `url(${heart})`}} className='w-[25rem] bg-no-repeat h-[25rem] bg-cover'>
              
              </div>
              <p>
                Non profit
              </p>
              <p>Some of the social initiative we partake in</p>
            </div>
          </div>

            </div>
          
          
        </section>
      
       
        <footer className='bg-black p-[4rem] text-white h-[100vh] flex flex-col'>
        <div className='flex w-full'>
          <div className='w-[50%] mt-[4rem] ml-[4rem]'>
            <h1 className='text-2xl'>SOLARFLARE</h1>
            <ul>
              <li className='mt-4'>Pricing</li>
              <li className='mt-2'>Learn</li>
              <li className='mt-2'>Products</li>
              <li className='mt-2'>Company</li>
              <li className='mt-2'>Investor</li>
            </ul>
            <div className='mt-[5rem]'>
              socials
            </div>
          </div>
          <div className=' p-[4rem] flex justify-between w-[50%]'>
            <div>
              <h1>Meet Solarflare</h1>
              <ul>
                <h1 className='mt-5'>Why Sunpuls</h1>
                <li className='mt-2'>Our Guarantee</li>
                <li className='mt-2'> Surun Impact</li>
                <li className='mt-2'>Customer Stories </li>
                <li className='mt-2'>Leadership Team</li>
                <li className='mt-2'>Careers</li>
                <li className='mt-2'>Partnerships</li>
              </ul>
            </div>
            <div>
            <h1>Customers</h1>
              <ul>
                <li className='mt-5'>Home Builders</li>
                <li className='mt-2'>Refer a Friend</li>
                <li className='mt-2'>Account Login</li>
                
                </ul>
                </div>
            <div>
            <h1>Need Help?</h1>
            <ul>
                <li className='mt-5'>FAQs</li>
                <li className='mt-2'>Login</li>
                <li className='mt-2'>Contact Us</li>
                <li className='mt-2'>Blog</li>
                
              </ul>
            </div>
            <div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      
          <div className='flex mt-auto ml-[4rem] justify-between'>

            <div className='flex w-[42%] justify-between '>
              
              <div> <span className='mr-4'>ar </span>State of Luosianna</div>
              <p>&copy; {new Date().getFullYear()} YourCompanyName. All Rights Reserved.</p>
            </div>

            <div className='flex w-[30%] justify-between'>
              <p>Lincenses</p>
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div></div>
       
      </footer>
      <button onClick={scrollToTop} className='fixed bg-white rounded-full w-[50px] h-[50px] right-[20px] bottom-10 flex items-center rotate-90 justify-center shadow-[rgba(0,0,0,0.35)_0px_5px_15px]'>
        <LeftArr color={'black'}/>

      </button>
      </div>
     
    
  );
}

export default App;





