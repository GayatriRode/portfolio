import React, { useState } from 'react';
import Image from './Profile Image.jpeg';
import './index.css';

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded">
      <button
        className="w-full py-2 px-4 text-left font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && (
        <div className="overflow-hidden">
          <div className="px-4 py-2">{children}</div>
        </div>
      )}
    </div>
  );
}

class Navbar extends React.Component {
  render() {
    return (
      <div className='p-6'>
        <nav className='flex justify-center'>
          <ul className="flex flex-wrap justify-center md:justify-start">
            <li className="mr-6 mb-2">
              <a href="#home" className="text-white hover:bg-white hover:text-black px-3 py-2 block">Home</a>
            </li>
            <li className="mr-6 mb-2">
              <a href="#about" className="text-white hover:bg-white hover:text-black px-3 py-2 block">About</a>
            </li>
            <li className="mr-6 mb-2">
              <a href="#skills" className="text-white hover:bg-white hover:text-black px-3 py-2 block">Skills</a>
            </li>
            <li className="mr-6 mb-2">
              <a href="#education" className="text-white hover:bg-white hover:text-black px-3 py-2 block">Education</a>
            </li>
            <li className="mr-6 mb-2">
              <a href="#experience" className="text-white hover:bg-white hover:text-black px-3 py-2 block">Experience</a>
            </li>
            <li className="mr-6 mb-2">
              <a href="#contact" className="text-white hover:bg-white hover:text-black px-3 py-2 block">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container bg-black">
        <Navbar />
        <div className="text-white grid grid-cols-1 md:grid-cols-2" id='home'>
          <div>
            <img src={Image} alt="Profile" className='profile-img'/>
          </div>
          <div className="profile text-center">
            <h2 className="text-4xl">I am a Software Developer who loves challenging tasks and enjoys the phase of learning!</h2>
          </div>
        </div><br />

        <div className='about py-8 text-center text-white' id='about'>
          <p className='text-sm slide-In'>ABOUT ME</p>
          <p className="text-2xl slide-In">WHO AM I?</p><br /><br />
          <h6 className='aboutme slide-In'>Since beginning my journey as an Intern 2 years ago, I've done remote work for startups, and collaborated with talented people. I'm quietly confident, naturally curious, and perpetually working on improving my chops. I am enthusiastic person in search of new opportunities.</h6><br />
          <div className='cards'>
            <div className='card'>
              <div className='card-img p-2'>
                <img src="https://tse2.mm.bing.net/th?id=OIP.iMgM1FZhq4SBWSARtzOlsQHaHa&pid=Api&P=0&h=220" alt='img1' height={80} width={80}/>
              </div>
          
              <div>
                <div className="font-bold text-xl mb-2">Web Development</div>
              </div>
            </div>

            <div className='card'>
              <div className='card-img p-2'>
                <img src="https://tse3.mm.bing.net/th?id=OIP.O-cCr6HfDLOzyRhRQ6KDcwHaHa&pid=Api&P=0&h=220" alt='img2' height={80} width={80}/>
              </div>
          
              <div>
                <div className="font-bold text-xl mb-2">Software</div>
              </div>
            </div>

            <div className='card'>
              <div className='card-img p-2'>
                <img src="https://tse4.mm.bing.net/th?id=OIP.l94Aqt0tTBFYbiaviXhC4gHaHa&pid=Api&P=0&h=220" alt='img2' height={80} width={80}/>
              </div>
          
              <div>
                <div className="font-bold text-xl mb-2">Application</div>
              </div>
            </div>
            
          </div>
        </div>

        <div className='skills py-8 text-center text-white slide-In' id='skills'>
          <p className='text-sm'>MY SPECIALITY</p>
          <p className="text-2xl">MY SKILLS</p><br /><br />

          <div className='progress-bars'>
            <div>
              <p>HTML5</p>
              <div className="h-4 w-full bg-gray-200 rounded-full">
                <div className="h-full bg-green-500 rounded-full bar1"></div>
              </div>
            </div>
            
            <div>
              <p>CSS3</p>
              <div className="h-4 w-full bg-gray-200 rounded-full">
                <div className="h-full bg-blue-500 rounded-full bar2"></div>
              </div>
            </div>

            <div>
               <p>JS</p>
               <div className="h-4 w-full bg-gray-200 rounded-full">
                <div className="h-full bg-yellow-500 rounded-full bar3"></div>
               </div>
            </div>

            <div>
              <p>PHP</p>
              <div className="h-4 w-full bg-gray-200 rounded-full">
                <div className="h-full bg-purple-500 rounded-full bar4"></div>
              </div>
            </div>

            <div>
              <p>mySQL</p>
              <div className="h-4 w-full bg-gray-200 rounded-full">
                <div className="h-full bg-red-500 rounded-full bar5"></div>
              </div>
            </div>

            <div>
               <p>Python</p>
               <div className="h-4 w-full bg-gray-200 rounded-full">
                <div className="h-full bg-orange-500 rounded-full bar6"></div>
              </div>
            </div>
          </div>
          
        </div>

      <section id="education" className='text-white p-5'>
        <p className='text-xl text-center'>EDUCATION</p><br />
        <div className='education border rounded'>
          <AccordionItem title="Master of Computer Application">
            Savitribai Phule Pune University: 2022-2024
          </AccordionItem>

          <AccordionItem title="Bachelor in Science (Computer Science)">
            Savitribai Phule Pune University: 2019-2022
          </AccordionItem>

        </div>
      </section>

      <section id="experience" className='p-8 text-white'>
        <p className='text-xl text-center'>EXPERIENCE</p><br />
         <div className='bg-gray-500 p-8'>
            <p className='xl'>Front End Intern</p>
            <p className='sm'>01/24-06/24</p>
            <p>I am currently working as an Intern in the Numetry Technologies, Pune. I am getting to learn a lot new concepts. recently we have done one front-end project for an Online School. Technologies used for this project are React, Tailwind and CSS3.</p>
         </div>
      </section>

      <section id='contact' className='p-8 text-white'>
        <p className='text-sm text-center'>GET IN TOUCH</p>
        <p className="text-2xl text-center">CONTACT</p><br /><br />
        <div className='contact grid grid-cols-1 md:grid-cols-3'>
          <div className='contact-info p-8'>
            <div>
              <img src='https://cdn-icons-png.flaticon.com/128/732/732200.png' alt="Mail" height={50} width={50}/>
            </div>
            <div>
              <p className='xl'>gayatrirode951@gmail.com</p>
            </div>
          </div>
          <div className='contact-info p-8'>
            <div>
              <img src='https://cdn-icons-png.flaticon.com/128/1865/1865269.png' alt="Location" height={50} width={50}/>
            </div>
            <div>
              <p className='xl'>Ambegaon Pathar, Pune</p>
            </div>
          </div>
          <div className='contact-info p-8'>
            <div>
              <img src='https://cdn-icons-png.flaticon.com/128/5585/5585856.png' alt="Call" height={50} width={50}/>
            </div>
            <div>
              <p className='xl'>9898989898</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Your Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email Address</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email address" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message"> Message </label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Enter your message" rows="4"></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
}

export default App;
