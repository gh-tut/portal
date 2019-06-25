import React from 'react'

function Calender(){
    const vw = window.innerWidth * 0.25
    return(
        <div style={{marginLeft:"5vw",marginRight:"5vw",marginTop:"20px"}}>
            <div>
                <iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=MTg2OHV0bTQwbjFtNWd0YThwMm02YTdnMWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23616161" style="border-width:0" width={vw} height="400" frameborder="0" scrolling="no"></iframe>
                <iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=Y2dsbGNoMHU2cWY2MjI5bHIzYTNlbXYzdThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%239E69AF" 
                width={vw} height="400px"></iframe>
                <iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=MTg2OHV0bTQwbjFtNWd0YThwMm02YTdnMWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23616161"
                width={vw} height="400px"></iframe>
            </div>
            <div>
                <iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=MG5wdHE3dTFncGhvcTJjNDdpczR2cDU1dDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F09300" 
                width={vw} height="400px" ></iframe>
                <iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=aGczYms4czdzOW44dDF1Zmx0dmNldW45Z29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D50000" 
                width={vw} height="400px" 
                ></iframe>
                <iframe src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=ZXM1NDRtYTk2ZWx2OGs1ZjhwbTJmMnNndDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23F09300"
                width={vw} height="400px" 
                ></iframe>
            </div>
        </div>
    )
}

export default Calender
