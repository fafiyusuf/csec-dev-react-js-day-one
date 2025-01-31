import reactlogo from './assets/react.png';
import tailwindlogo from './assets/tailwind.png';
function Homepage(){
    return(
        <div className="Welcome">
            <div>
            <h1>Welcome 🌀</h1>
            <h3>This page is a demonstration of what I learned on my first day of the Full-Stack Development Bootcamp. It covers the basics of React.js for building interactive user interfaces and Tailwind CSS for efficient and responsive styling</h3>
            <div className='images'>
            <img className="react-img" src={reactlogo} alt="react logo"></img>
            <img className="tail-img" src={tailwindlogo} alt="tailwind logo"></img>
            </div>
            </div>
        </div>
    );
}

export  default Homepage