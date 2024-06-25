import React from 'react'
import "./Widgets.css"
import InfoIcon from  '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle=(heading,subtitle)=>
        (
            <div className="widgets__article">
               <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
                
               </div>
               <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>

               </div>
            </div>
        )




  return (
    <div className='widgets'>
       <div className="widgets__header">
        <h2>Rgukt.in News</h2>
        <InfoIcon />

       </div>
       {newsArticle("Rgukt.in is back","Top news -we are trending")}
       {newsArticle("Rgukt is a top college","we are trending in the world")}
       {newsArticle("Rgukt addmissions are open ","Admissions are open from today")}
       {newsArticle("Rgukt is trending in telangana","Top news -we are trending")}
       {newsArticle("Rgukt puc results out","Results are live")}
      
    </div>
  )
}

export default Widgets
