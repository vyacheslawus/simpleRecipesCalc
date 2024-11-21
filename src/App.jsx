import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'

import { products } from './data'



const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

export default function App() {

  return (
    <>


      <Header />


      <main>

    

        <section className="products-list" style={{
          marginTop: "15px"
        }}>
          <Card />

        </section>
      </main>

    </>
  )
}

