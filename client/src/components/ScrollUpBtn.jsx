import { useState } from "react";

const ScrollUpBtn = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        if(window.scrollY > 300 ) {
            setVisible(true);
        }
        if(window.scrollY <= 300) {
            setVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    window.addEventListener("scroll", toggleVisible);

    return ( 
        <>      
            <button style={{display: visible ? "inline" : "none"}} 
            className="btn btn-outline-info text-light position-fixed bottom-0 end-0 m-2" 
            onClick={scrollToTop}>
                <i className="bi bi-caret-up-fill"></i>
            </button>
        </>
     );
}
 
export default ScrollUpBtn;