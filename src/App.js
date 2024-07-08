import React from 'react'
import Gallery from "./Gallery.js";
import Header from "./Header.js";
import { Footer } from "./Header.js"; // brackets because not default function
import './App.css'; // imports style


const teamMembers = [ // Defines team members. Can update as team members change

  {
    id: 1,
    name: "Max Mustermann",
    role: "Associate Vice President of Sales",
    photoURL: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
  },

  {
    id: 2,
    name: "Steve Jobs",
    role: "President and CEO",
    photoURL: "https://st3.depositphotos.com/1017228/18878/i/450/depositphotos_188781580-stock-photo-handsome-cheerful-young-man-standing.jpg"
  },

  {
    id: 3,
    name: "Sam Smith",
    role: "Inspirational Speaker",
    photoURL: "https://st.depositphotos.com/1269204/1219/i/450/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg"
  },
]

function App() {  // runs header, footer and gallery for defined team members
  return (
    <>
      <Header />
      <div className="App">
        <Gallery teamMembers={teamMembers} />
      </div>
      <Footer />
    </>
  )
}

export default App  // Exports to show App function