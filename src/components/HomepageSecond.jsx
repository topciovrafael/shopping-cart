import { Link } from "react-router-dom";

export default function HomepageSecond(){
    return(
        <>
            <div id="homepage-secund" className="min-h-[180vh] w-full flex flex-col font-montserrat">
                <div className="flex w-full max-[1000px]:flex-col-reverse max-[1000px]:mt-[1%]" id="container-poze">

                    <div className="flex justify-center flex-col!items-end !m-[5%] max-[1500px]: w-1/2 max-[1000px]:w-full xl:!mx-0 max-[1000px]:!m-0 max-[1500px]:items-center  xl:w-[45%">
                        <div className="flex flex-col items-center max-[1000px]:mb-[15%]" id="wrap-imagine">
                                <img
                                src="./src/assets/iphone2.png"
                                alt="iPhone Presentation Image"
                                className=""
                                id="poza-iphone"
                                />
                                
                                <Link
                                to="/shop"
                                className="button-90 m-[10%] min-w-[200px] max-[1000px]:mb-0 block w-full h-full flex items-center justify-center"
                                >
                                Start Shopping
                                </Link>
                        </div>
                    </div>
                    
                    

                    <div className="flex flex-col xl:w-[40%] justify-center text-center m-[5%] max-[1500px]: w-1/2 xl:!m-0 max-[1000px]:w-full max-[1000px]:mt-[10%] max-[1000px]:ml-0">
                        <div className="font-medium text-4xl flex items-center justify-center max-[600px]:text-[7vw]">Tech is <div className="font-bold ml-[2%]">the new age</div></div>
                        <div className="m-[5%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi alias obcaecati illo at odio iusto quia vero dignissimos expedita molestiae eaque accusamus asperiores, vitae laudantium placeat debitis. Optio, cupiditate sunt?
                        Repellendus recusandae quam nobis commodi aut nostrum omnis labore inventore et architecto numquam saepe voluptas iusto, odio adipisci at natus similique quia unde! Eligendi saepe illo commodi ad nisi explicabo.</div>
                    </div>

                </div>


                <div>
                    <div className="flex justify-center items-center mb-[3.5%] max-[1100px]:flex-col">
                        <div className="w-[40%] border-b-4 border-black text-4xl font-bold max-[600px]:w-full  max-[600px]:text-[6vw] max-[1100px]:text-center max-[1100px]:border-0 max-[1000px]:text-xl">
                            <div className="text-lg font-normal">Unleash their power. Unleash yours.</div>
                            BEST GAMING DESKTOPS</div>
                        <div className="bg-black rounded-2xl flex justify-center items-center aspect-square w-[25%] max-[1000px]:w-4/6 max-[1100px]:my-[5%]" id="desktop-container">
                            <Link to='/shop'><img
                            src="./src/assets/pc.png"
                            alt="Gaming Desktop Image"
                            className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                            id=""
                            /></Link>
                        </div>
                    </div>

                </div>


                <div className="h-[100%] mt-[4%] flex flex-col justify-center items-center mb-[5%] max-[1000px]:text-center max-[1000px]:mt-[10%] max-[1000px]:mb-[5%]">
                    <div className="text-4xl font-semibold">World-class composable businesses.</div>
                    <div className="flex justify-center items-start mt-[2%] text-start max-[1000px]:flex-col">
                        <div className="max-w-[50ch] m-[3%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti, molestiae magnam laboriosam debitis eveniet aut impedit temporibus praesentium quos, alias dolore dignissimos distinctio expedita, vero deleniti assumenda accusamus neque.
                        Sit, quia libero distinctio obcaecati tempora a ipsum velit molestias laudantium animi est sint incidunt accusamus dolores nam ad vitae autem ab eum soluta sed repellat? Minima doloremque distinctio illo.
                        Cupiditate, accusantium exercitationem! Sequi quam ullam delectus ut cum magnam non commodi culpa in tenetur dolores explicabo aliquid nostrum molestiae quaerat possimus nobis sapiente obcaecati, similique ducimus velit hic itaque!</div>
                        <div className="max-w-[50ch] m-[3%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos debitis provident similique, suscipit optio illum maiores repudiandae aperiam, minus nihil nam! Debitis animi ad sequi labore corporis? Aliquid, itaque ipsam.
                        Necessitatibus dolor est, officia animi aut quas repellendus quos quo, ipsa delectus asperiores perferendis soluta eius doloremque! Corporis qui debitis ipsum aliquam fuga velit minus placeat natus. Praesentium, laboriosam molestias?
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}