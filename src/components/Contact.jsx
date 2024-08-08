import Divider from "./Divider";

export function Contact(){

    return(
        <>
        
        <section className="py-20">
            <div className="container m-auto">
                <div className="content text-center my-4">
                    <h2 className="text-4xl pt-10 font-bold text-[#2c3e50]">CONTACT SECTION</h2>
                </div>
                <Divider/>

            </div>
            <div className="form w-4/5 lg:w-1/2 m-auto">
                <input type="text" className="w-full border-none py-4 my-3 ps-2 placeholder:text-xl focus:outline-none shadow-sm " placeholder="userName" />
                <input type="text" className="w-full border-none py-4 my-3 ps-2 placeholder:text-xl focus:outline-none shadow-sm " placeholder="userAge" />
                <input type="text" className="w-full border-none py-4 my-3 ps-2 placeholder:text-xl focus:outline-none shadow-sm" placeholder="userEmail" />
                <input type="text" className="w-full border-none py-4 my-3 ps-2 placeholder:text-xl focus:outline-none shadow-sm" placeholder="userPassword" />
                <button className="bg-[#1abc9c] py-2 px-4 rounded-lg text-white font-bold hover:bg-[#1abc9ca2] transition duration-150 mb-3 mt-16 ">Send message</button>
            </div>

            
        </section> 
        </>
    )
}