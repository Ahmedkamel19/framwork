import x from'../assets/images/x.png'
import Divider from './Divider'
export function Main(){
    return(
        <>
            <section className=" bg-[#1abc9c] pt-12 mt-12">
                <div className="content flex justify-center items-center flex-col">
                    <div className="img  flex justify-center items-center flex-col ">
                        <div className="hero-img w-52 pb-5 pt-20">
                            <img src={x} alt="" />
                        </div>
                        <h2 className=' text-5xl font-bold  text-white pb-4'>Start Framework</h2>
                    </div>
                    <div className="divider  pb-8 relative bg- text-center w-fit m-auto px-3 ">
                         <div className="line after:z-0  before:z-0 after:content-[''] after:absolute after:h-1 after:w-28 after:bg-[#ffffff]  before:content-[''] before:absolute before:h-1 before:w-28 before:bg-[#ffffff] before:-left-32 before:top-4 after:top-4 after:left-[65px] after:rounded-md before:rounded-md">
                             <i className="fa-solid fa-star fa-base text-[#ffffff]"></i>
                           </div>
                         </div>
                    <p className='text-lg text-white font-semibold py-1 pb-10'>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </section>
        </>
    )
}