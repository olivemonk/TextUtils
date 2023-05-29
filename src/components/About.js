import React from 'react'

function About(props) {

    // const [btnText, setbtnText] = useState("Enable Dark Mode") // for a button to toggle dark mode

    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
        // border: '2px solid',
        // borderColor: props.mode === 'dark'?'white':'#042743'
    }

    // const toggleMode = () => { // for a button to toggle dark mode
    //     if(myStyle.color === 'black'){
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setbtnText("Enable Light Mode");
    //     }
    //     else{
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtnText("Enable Dark Mode");
    //     }
    // }

   


  return (
    <div className='container'>
        <h3 className='my-2' style={{color: props.mode === 'dark'?'white':'#042743'}} >About Us</h3>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>About TextUtils</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body"  style={myStyle}>
                    TextUtils is a comprehensive online platform designed to cater to all your text manipulation needs. It serves as a versatile tool for users to effortlessly manipulate and transform text, making it an essential resource for writers, editors, students, professionals, and anyone working extensively with text-based content.

                    With an intuitive and user-friendly interface, TextUtils offers a wide range of features and functionalities to enhance and streamline your text editing experience. Whether you need to format, analyze, convert, or extract information from your text, TextUtils has got you covered.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to Use</strong>
                
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body"  style={myStyle}>
                    TextUtils is entirely free to use, ensuring that users from all walks of life can access its powerful text manipulation capabilities without any cost barriers. You can enjoy all the features and functionalities of TextUtils without requiring any subscription or payment. The goal is to make text manipulation accessible to everyone, empowering users to efficiently handle their textual content without any financial constraints.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body"  style={myStyle}>
                    TextUtils is built to be browser compatible, providing seamless accessibility across a wide range of web browsers. Whether you prefer using Chrome, Firefox, Safari, Edge, or any other popular browser, you can easily access TextUtils without the need for any additional installations or plugins.

                    The website's responsive design ensures that TextUtils adapts perfectly to different screen sizes, whether you're using a desktop computer, laptop, tablet, or smartphone. This allows you to utilize TextUtils's text manipulation capabilities wherever and whenever you need them, ensuring a consistent and hassle-free experience across various devices.

                    In summary, TextUtils is a feature-rich text manipulation utility available on the web. It offers an extensive set of tools and functionalities to cater to all your text-based needs. With its free-to-use model and browser compatibility, TextUtils ensures that users can conveniently manipulate their text in a hassle-free and accessible manner.
                    </div>
                </div>
            </div>
        </div>
        {/* <button type='button' onClick={toggleMode} className="btn btn-primary my-2">{btnText}</button> */}
    </div>
  )
}

export default About
