
export function About(){

    return(
        <>
        
        <section className="py-20 bg-[#1abc9c] text-white ">
            <div className="container m-auto py-32">
            <div className="content text-center my-4">
                <h2 className="text-4xl pt-10 font-bold  text-white">ABOUT COMPONENT</h2>
            </div>
            <div className="relative">
        <div className="divider  pb-8 relative bg- text-center w-fit m-auto px-3 ">
            <div className="line after:z-0  before:z-0 after:content-[''] after:absolute after:h-1 after:w-28 after:bg-[#ffffff]  before:content-[''] before:absolute before:h-1 before:w-28 before:bg-[#ffffff] before:-left-32 before:top-4 after:top-4 after:left-[70px] after:rounded-md before:rounded-md">
                <i className="fa-solid fa-star fa-lg text-[#ffffff]"></i>
            </div>
        </div>
        </div>
            <div className="paragraph  flex flex-col lg:flex-row justify-center w-10/12 text-white lg:w-5/6 m-auto gap-4">
                <div className="p1 text-lg font-light">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="p2 text-lg font-light">
                    <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
            </div>
            </div>
            
        </section> 
        </>
    )
}