import React from 'react'

export default function Myabout(props) {
    
    

    

   
    


    return (
        <>
            <div className="container" style={{backgroundColor:props.mode === 'dark'? props.whichHex :'white', color:props.mode === 'dark'? 'white':'black'}}>

                <h2 className='text-center font-italic' >ABOUT US</h2>
                <div className="accordion my-5" id="accordionFlushExample" >
                    <div className="accordion-item" style={{backgroundColor:props.mode === 'dark'? props.whichHex :'white', color:props.mode === 'dark'? 'white':'black'}}>
                        <h2 className="accordion-header font-monospace fw-bold" id="flush-headingOne" >
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{backgroundColor:props.mode === 'dark'? props.whichHex :'white', color:props.mode === 'dark'? 'white':'black'}}>
                                TextCraft
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body lh-base">TextCraft is a React website built by Jonathan Dabre. The website is derived from the course <strong>ReactJS Tutorial</strong> by YouTuber <span className='fw-bold fst-italic'>Code with Harry</span>. The website provides various features that can be used in day-to-day life. Further improvements to the website will be made over time.</div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{backgroundColor:props.mode === 'dark'? props.whichHex :'white', color:props.mode === 'dark'? 'white':'black'}}>
                        <h2 className="accordion-header font-monospace fw-bold" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{backgroundColor:props.mode === 'dark'? props.whichHex :'white', color:props.mode === 'dark'? 'white':'black'}}>
                                Developed By
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <code>Developer:</code> Jonathan Dabre 
                                <p><code>Special Mention: </code>Code with Harry</p>
                            
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{backgroundColor:props.mode === 'dark'? props.whichHex :'white', color:props.mode === 'dark'? 'white':'black'}}>
                        <h2 className="accordion-header font-monospace fw-bold" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{backgroundColor:props.mode === 'dark'? props.whichHex :'white', color:props.mode === 'dark'? 'white':'black'}}>
                                Technologies
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p><code>JS Framework: </code>React JS</p>
                                <p><code>CSS Framework: </code>Bootstrap</p>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    )
}
