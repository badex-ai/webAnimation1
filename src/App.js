import logo from './logo.svg';
import './App.css';
import Headphone from './Assets/headphone';
import Sun from './Assets/sun';
import CreditIcon from './Assets/creditcard';
import { Link } from "react-router" ;
import QuoteForm from "./component/form"
import { useRef } from 'react';

function App() {
  
  const myRef= useRef()
  // const hoverTab =()=>{
  //     console.log(myRef)
      
  // }

  const handleMouseEnter = () => {
    console.log('Hovering over tab',myRef.current);

    const svgElement = myRef.current;
    const circleElement = svgElement.querySelector('circle');

    const pathElements = svgElement.querySelectorAll('path');
    circleElement.setAttribute('fill', 'orange');

  //  svgElement.style.transition = 'transform 1s ease'
   svgElement.style.animation = 'rotateAnimation 1s ease';

    pathElements.forEach(path => {
      // Apply the transform
      path.style.transition= 'transform 0.2s ease-out';
      path.style.transform = 'scale3d(1.2, 1.2, 1)'; // Adjust these values as needed
       // Adjust these values as needed
      
      // Make sure the transform origin is at the center of the SVG
      path.style.transformOrigin = 'center';
    });

   

    // svgElement.addCl

    // Additional hover logic here
  }
  
  const handleMouseLeave = () => {
    console.log('No longer hovering');

    const svgElement = myRef.current;
    if (!svgElement) return;
  
    const circleElement = svgElement.querySelector('circle');
    const pathElements = svgElement.querySelectorAll('path');
  
    // Reset the fill of the circle to original
    circleElement.setAttribute('fill', 'white'); // The original fill color
  
    // Remove the scaling from the paths
    pathElements.forEach(path => {
      path.style.transform = 'none';
    });
  
    // Reset the animation to stop the rotation and prepare for the next hover
    svgElement.style.animation = 'none';
  }

  return (
  
      <div>
      <header className="px-10 h-65 w-full">
       

          <nav className=' flex h-8 justify-between'>
          <div>
           <Link href='#'>
            SUNPULSE
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
            <div>1042034 Joined</div>
            <div className='w-[20rem] bg-yellow-100'>Step Into Tomorrow Like Never Before. <span>Exprience Advanced Solar Power</span></div>
          </div>
          <div className='flex justify-between mt-10 align-bottom '>
            <div className='bg-black items-center justify-between flex rounded-full w-[15rem] h-10 text-white px-8 '>
              <div>Get a quote</div>
              <div>ar</div>
            </div>
            <p className='text-[3rem] font-bold'>BRIGHT <span className='block'>FUTURE</span></p>
          </div>
           
      </header>
        <section  style={{height: "calc(100vh + 28rem)" , backgroundImage: "url('/image1.jpg')" } } className=' p-[10rem] bg-yellow-100 bg-cover bg-no-repeat'>
          <div style={{height: "calc(100vh + 28rem - 20rem)"}} className='flex '>
            <div  className="w-[50%] text-3xl">
              <p className='w-[18rem] text-white'>America's Top Pick For Home Solar and Energy Storage</p>
              </div>
            <div className="w-[50%] ">
              <div className="flex h-[100%] justify-between items-center flex-col text-center">
              
                <div onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} className=" p-8 bg-white h-[18rem] w-[14rem] flex flex-col items-center justify-between">
                  <div className="mt-6">
                  <Sun ref={myRef} className='me' w={42} h={42} />
                  </div>
              
                  <p className="text-lg text-center ">Exceptional Solar and Battery Performance</p>
                </div>
              <div className=" p-8 bg-white h-[18rem] w-[14rem] flex flex-col items-center justify-between">
              <div  >
              <div className="mt-6">
              <CreditIcon w={50} h={50}/>
              </div>
                
                </div>
                <p>Customized Payment Solution For Your Home</p>
              </div>
              <div className=" p-8 bg-white h-[18rem] w-[14rem] flex flex-col items-center justify-between">
              <div className="mt-6" >
                <Headphone w={50} h={50}/>
                </div>
                <p>The Sunpulse Assurance</p>
                </div>
              </div>
             
            </div>
          </div>
          
        </section>
       
        <section  className='bg-pink-100 h-screen flex w-full parent'>
          <div  className='w-[50%] p-10  bg-no-repeat elect1'>
            <div  className='text-4xl text-white ' >Solar for your home</div>
            <div  className='bg-white items-center justify-between flex rounded-full w-[15rem]  l1  h-10 px-8 mt-5 '>
            <div>Residence</div>
            <div>ar</div>
            </div>
          </div>
          <div  className='w-[50%] elect2 bg-no-repeat bg-right bg-cover p-10'>
            <div className='text-2xl text-white '> solar for your buisness</div>
            <div className='bg-white items-center justify-between flex rounded-full w-[15rem] h-10 px-8 mt-5'>
            <div>Comercial</div>
              <div>ar</div>
            </div>
          
         

          </div>
        </section>
        <section className=' px-10 h-[100vh] text-center py-[5rem] flex flex-col items-center'>
         
            <p className='text-4xl w-[30rem]'>Shatter the boundaries of traditional Energy</p>
           
            <div className='h-[18rem] mt-[6rem] bg-red-400 w-[60rem]'></div>
           
          <p className='mt-[3rem] w-[16rem] mx-0 my-auto'>Upgrade to Affordable Dependable Solar and Battery Power

          </p>
          <div className='mt-[1rem] w-[15rem] h-[4rem] px-8 border rounded-full justify-between flex items-center'>
            <div>Get a Quote</div>
           <div>ar</div>
            </div>
        </section>
        <section className=' flex '>
          <div className='w-[50%] h-[100vh] pl-[12rem] py-[6rem] '>
            <div className='w-[22rem] h-[70%]'>
            <div className=''>PLAN & PRICING</div>
            <div className='text-5xl'>
              <p>Smart Savings.<span>  Easy Living</span></p>
            </div>
            <div>
              <p className='mt-[5rem]'>From installation to maintenance, enjoy an effortless and affordable solar experience with the Sunrun Plan Solar lease
              </p>
            </div>


            <ul>
              <li className='flex mt-2'>
                <div>r</div>
                <p className='ml-4'>
                  Best-in-class solar panels and battery Storage
                </p>
              </li>
              <li className='flex mt-2'>
                <div>r</div>
                <p className='ml-4' >
                  25-year equipment guarantee
                </p>
              </li>
              <li className='flex mt-2'>
                <div>r</div>
                <p className='ml-4'>
                  Predictable montly payments with locked-in rates
                </p>
              </li>
              </ul>
           
             
           
            </div>
            <div className='mt-[5rem] w-[15rem] h-[3rem] px-8 border rounded-full justify-between flex items-center'>
              
              <p>Get a Quote</p>
              <div>ar</div>
            </div>
          </div>
          <div style={{backgroundImage: "url('/cell.png')"}} className='w-[50%] h-[100vh] bg-no-repeat bg-cover'>
           
          </div>

        </section>
        <section className='flex h-[100vh]'>
          <div style={{backgroundImage: "Url(fam.png)"}} className='w-[50%] h-[100vh] bg-cover bg-no-repeat'> </div>
          <div className='w-[50%] relative overflow-hidden'>
          <div className=' bg-black text-white  h-[100vh] px-[4rem] py-[8rem] ' >
            
            <div className='w-[80%]'>
            <ul className='flex w-10rem'>
            <li>ar</li>
            <li>ar</li>
            <li>ar</li>
            <li>ar</li>
            <li>ar</li>
            </ul>
            <div className='text-4xl mt-8'>
              it's convenient, we don't have to worry about it. SunPulse monitor it for us. if anythig happens they will come out and fix it so we like that part.
            
            </div>
            <div className='text-lg mt-10'>Harly - Litchfield Park, AZ</div>
            </div>
            
            
          </div>
          <div className="text-6xl text-gray-400 absolute bottom-0 z-2 overflow-hidden whitespace-nowrap ">
            <p className='banner'>3000 Homes and Counting +900 Estimated Net Metering</p>
          </div>
          </div>
         
        </section>
        <section className='bg-yellow-400  p-[6rem]' >
        <div className='text-5xl w-[40%]'>
              Your Questions, Answered
            </div>
         
            
            <div className='flex'>
              <div className='w-[50%] text-md'>Have a different question? </div>
              <ul className='w-[50%] h-[40rem]'>
                <li className='w-[75%] px-4 py-3 text-xl bg-white flex mt-2 justify-between'>
                  <div>
                    <p>How long do solar panels really last?</p>
                  </div>
                  <div>ar</div>
                  </li>
                <li className='w-[75%] px-4 py-3 text-xl bg-white flex mt-2 justify-between'>
                  <div>What happens if I decide to move?</div>
                  <div>ar</div> 
                </li>
                <li className='w-[75%] px-4 py-3 text-xl bg-white flex mt-2 justify-between' >
                  <div>How much can I expect to save when I go solar?</div> 
                  <div>ar</div></li>
                <li className='w-[75%] px-4 py-3 text-xl bg-white flex mt-2 justify-between'>
                  <div>Does my state offer incentives to go solar? </div>
                  <div>ar</div>
                </li>
                <li className='w-[75%] px-4 py-3 text-xl bg-white flex mt-2 justify-between'>
                  <div>How many solar panels will my home need?</div>
                  <div>ar</div> </li>
                <li className='w-[75%] px-4 py-3 text-xl bg-white flex mt-2 justify-between'>
                  <div>Is my home good for solar?</div>
                  <div>ar</div>
                </li>
              </ul>
            </div>
            <div className='bg-white text-black items-center justify-between flex rounded-full w-[15rem] h-10 px-8 '>
              <div className=''>Browse all questions</div>
              <div>ar</div>
              </div>
          
        </section>
        <section>

        </section>
        <section className='w-full '>
          <div className='h-[100vh]  bg-yellow-200  p-[4rem]' >
          <QuoteForm/>

          </div>
        </section>
        <section className='w-full h-[100vh] bg-green-50 py-[5rem] '>
          <div >
            <div className=' flex justify-between  w-[80%] items-center  '>
            <div className='px-[10rem] text-[3rem] '>
              <p className='w-[30rem]'>Transform Your Living with Solar Power</p>
            </div>
            <div className='w-[5rem] '>
              <button>ar</button>
              <button>ar</button>
            </div>
            </div>
            <div className='overflow-x-scroll  mt-10 '>
            <div className='flex w-[180rem] h-[29rem] border justify-between'>
              <div>
              <div style={{backgroundImage: "url('one.png')"}} className='w-[25rem] h-[25rem] bg-no-repeat bg-cover '></div>
              <p>
                Product
              </p>
              <p>State of the art solar and battery solution</p>
              </div>
            
            <div>
              <div style={{backgroundImage: "url('/two.png')"}} className='w-[25rem] h-[25rem]  bg-no-repeat bg-cover'>
             </div>
             <p>
                Learn
              </p>
              <p>NEM 3.0 What is it and how it affects carlifornia</p>
            </div>
            <div>
              <div style={{backgroundImage: "url('/three.png')"}} className='w-[25rem] bg-no-repeat h-[25rem] bg-cover'>
             
              </div>
              <p>
                Learn
              </p>
              <p>NEM 3.0 What is it and how it affects carlifornia</p>
            </div>
            <div>
              <div style={{backgroundImage:" url('/two.png')"}} className='w-[25rem] bg-no-repeat h-[25rem] bg-cover'>
              
              </div>
              <p>
                Learn
              </p>
              <p>NEM 3.0 What is it and how it affects carlifornia</p>
            </div>
            <div>
              <div style={{backgroundImage:" url('/one.png')"}} className='w-[25rem] bg-no-repeat h-[25rem] bg-cover'>
             
              </div>
              <p>
                Learn
              </p>
              <p>NEM 3.0 What is it and how it affects carlifornia</p>
            </div>
            <div>
              <div style={{backgroundImage:" url('/three.png')"}} className='w-[25rem] bg-no-repeat h-[25rem] bg-cover'>
             
              </div>
              <p>
                Learn
              </p>
              <p>NEM 3.0 What is it and how it affects carlifornia</p>
            </div>
            <div>
              <div style={{backgroundImage:" url('/two.png')"}} className='w-[25rem] bg-no-repeat h-[25rem] bg-cover'>
              
              </div>
              <p>
                Learn
              </p>
              <p>NEM 3.0 What is it and how it affects carlifornia</p>
            </div>
          </div>

            </div>
          
          </div>
        </section>
        <footer className='bg-black p-[4rem] text-white h-[100vh] flex flex-col'>
        <div className='flex w-full'>
          <div className='w-[50%] mt-[4rem] ml-[4rem]'>
            <h1 className='text-2xl'>SUNPULSE</h1>
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
              <h1>Meet Sunpulse</h1>
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
      </div>
     
    
  );
}

export default App;
