import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Homepage from './Homepage';

function App() {
  const styles ={
    display:"flex",
    justifyContent:"space-between",

  }
  const tail = {
    maxWidth:"50%",
    borderRadius:"5px",
    border:"5px solid  #98D8EF",
    padding:"10px",
    margin:"20px",
    fontSize:"20px",
  }
  return(
    <>
    <Header></Header>
    <Homepage></Homepage> 
    <div style={styles}>
    <div style={tail}><Content  title="Tail-Wind" description={`-Tailwind CSS is a utility-first CSS framework that makes styling web applications faster and more efficient.
    
    -Unlike traditional CSS frameworks, Tailwind provides low-level utility classes that allow developers to build custom designs directly in their HTML or JSX without writing additional CSS. 
      
      -This approach promotes flexibility, reusability, and a highly responsive design workflow. 
     
      -With features like responsive utilities, dark mode support, and an extensive set of pre-built classes, Tailwind simplifies styling while maintaining full customization. 
     
     -It also optimizes performance by removing unused styles in production, ensuring a lightweight and efficient application. Whether building simple layouts or complex designs, Tailwind CSS provides a streamlined approach to modern web styling. 🎨✨`}></Content></div>
    <div style={tail}><Content  title="React" description={`-React.js is a powerful JavaScript library for building fast, interactive, and scalable user interfaces.
     
     -Developed by Facebook, it follows a component-based architecture, allowing developers to create reusable UI elements efficiently. One of React’s key advantages is its declarative approach, making code more predictable and easier to debug. 
     
     -It leverages a Virtual DOM for optimized rendering, ensuring smooth performance. Core concepts include JSX, a syntax extension for writing HTML-like code within JavaScript, as well as components, props, and state for managing dynamic data. Additionally, React’s ecosystem supports features like hooks (useState, useEffect), enabling developers to build functional, maintainable applications without needing class components.
    
    -With its strong community and integration with tools like Tailwind CSS, Redux, and Next.js, React is widely used for developing everything from simple web pages to complex applications. 🚀`}></Content></div></div>
    <Footer></Footer>
  </>
    
  );


}

export default App;
