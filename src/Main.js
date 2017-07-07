import React from 'react'

import './Main.css'
import Advert1 from './Advert1'
import Advert2 from './Advert2'
import Advert3 from './Advert3'
import Advert4 from './Advert4'
import SideAd from './SideAd'
import Article from './Article'

const Main = () => {
    return (
        <main className="expanded row">
          <Article />
          <SideAd />

          <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            <Advert1 />
            <Advert2 />
            <Advert3 />
            <Advert4 />
          </div>
        </main>
    )
}

export default Main
