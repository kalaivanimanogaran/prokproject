// import React from "react"
// import "./style.css"

// function Index() {
//   return (
//     <div className="container">
//       <header className="header">
//         <div className="left">
//           <span className="menu-text">Menu</span>
//         </div>
//         {/* <h1 className="logo">PROK</h1> */}
//         <h1 className="logo">
//           PRO<span className="highlight">K</span>
//         </h1>
//         <button className="btn-yellow">Get started</button>
//       </header>

//       <main className="side-title">
//         <h1 className="title">
//           Innovation <br /> at{" "}
//           <span>
//             <i>work.</i>
//           </span>
//         </h1>
//         <button className="btn-outline">View Projects</button>
//       </main>
//     </div>
//   )
// }

// export default Index
import React from "react"
import "./style.css"
import PatternGrid from "../../Components/PattenGrid"
function Index() {
  return (
    <div className="container">
      <header className="header">
        {/* Left side - Menu */}
        <div className="left">
          <div className="menu-icon"></div>
          <span className="menu-text">Menu</span>
        </div>

        {/* Center - Logo */}
        <h1 className="logo">
          PRO<span className="highlight">K</span>
        </h1>

        {/* Right side - Button */}
        <button className="btn-yellow">
          <div className="circle"></div>
          Get started
        </button>
      </header>

      {/* Middle Section */}
      <main className="side-title">
        <h1 className="title">
          Innovation <br /> at{" "}
          <span>
            <i>work.</i>
          </span>
        </h1>
        <button className="btn-outline">View Projects</button>
      </main>
      <PatternGrid />
    </div>
  )
}

export default Index
