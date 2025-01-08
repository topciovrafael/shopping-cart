import { Link } from "react-router-dom";

export default function HomepageSecond() {
  return (
    <>
      <div
        id="homepage-secund"
        className="flex min-h-[180vh] w-full flex-col font-montserrat"
      >
        <div
          className="flex w-full max-[1000px]:mt-[1%] max-[1000px]:flex-col-reverse"
          id="container-poze"
        >
          <div className="flex-col!items-end max-[1500px]: xl:w-[45% !m-[5%] flex w-1/2 justify-center max-[1500px]:items-center max-[1000px]:!m-0 max-[1000px]:w-full xl:!mx-0">
            <div
              className="flex flex-col items-center max-[1000px]:mb-[15%]"
              id="wrap-imagine"
            >
              <img
                src="/iphone2.png"
                alt="iPhone Presentation Image"
                className=""
                id="poza-iphone"
              />

              <Link
                to="/shop"
                className="button-90 m-[10%] block flex h-full w-full min-w-[200px] items-center justify-center max-[1000px]:mb-0"
              >
                Start Shopping
              </Link>
            </div>
          </div>

          <div className="max-[1500px]: m-[5%] flex w-1/2 flex-col justify-center text-center max-[1000px]:ml-0 max-[1000px]:mt-[10%] max-[1000px]:w-full xl:!m-0 xl:w-[40%]">
            <div className="flex items-center justify-center text-4xl font-medium max-[600px]:text-[7vw]">
              Tech is <div className="ml-[2%] font-bold">the new age</div>
            </div>
            <div className="m-[5%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              alias obcaecati illo at odio iusto quia vero dignissimos expedita
              molestiae eaque accusamus asperiores, vitae laudantium placeat
              debitis. Optio, cupiditate sunt? Repellendus recusandae quam nobis
              commodi aut nostrum omnis labore inventore et architecto numquam
              saepe voluptas iusto, odio adipisci at natus similique quia unde!
              Eligendi saepe illo commodi ad nisi explicabo.
            </div>
          </div>
        </div>

        <div>
          <div className="mb-[3.5%] flex items-center justify-center max-[1100px]:flex-col">
            <div className="w-[40%] border-b-4 border-black text-4xl font-bold max-[1100px]:border-0 max-[1100px]:text-center max-[1000px]:text-xl max-[600px]:w-full max-[600px]:text-[6vw]">
              <div className="text-lg font-normal">
                Unleash their power. Unleash yours.
              </div>
              BEST GAMING DESKTOPS
            </div>
            <div
              className="flex aspect-square w-[25%] items-center justify-center rounded-2xl bg-black max-[1100px]:my-[5%] max-[1000px]:w-4/6"
              id="desktop-container"
            >
              <Link to="/shop">
                <img
                  src="/pc.png"
                  alt="Gaming Desktop Image"
                  className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                  id=""
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-[5%] mt-[4%] flex h-[100%] flex-col items-center justify-center max-[1000px]:mb-[5%] max-[1000px]:mt-[10%] max-[1000px]:text-center">
          <div className="text-4xl font-semibold">
            World-class composable businesses.
          </div>
          <div className="mt-[2%] flex items-start justify-center text-start max-[1000px]:flex-col">
            <div className="m-[3%] max-w-[50ch]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              corrupti, molestiae magnam laboriosam debitis eveniet aut impedit
              temporibus praesentium quos, alias dolore dignissimos distinctio
              expedita, vero deleniti assumenda accusamus neque. Sit, quia
              libero distinctio obcaecati tempora a ipsum velit molestias
              laudantium animi est sint incidunt accusamus dolores nam ad vitae
              autem ab eum soluta sed repellat? Minima doloremque distinctio
              illo. Cupiditate, accusantium exercitationem! Sequi quam ullam
              delectus ut cum magnam non commodi culpa in tenetur dolores
              explicabo aliquid nostrum molestiae quaerat possimus nobis
              sapiente obcaecati, similique ducimus velit hic itaque!
            </div>
            <div className="m-[3%] max-w-[50ch]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              debitis provident similique, suscipit optio illum maiores
              repudiandae aperiam, minus nihil nam! Debitis animi ad sequi
              labore corporis? Aliquid, itaque ipsam. Necessitatibus dolor est,
              officia animi aut quas repellendus quos quo, ipsa delectus
              asperiores perferendis soluta eius doloremque! Corporis qui
              debitis ipsum aliquam fuga velit minus placeat natus. Praesentium,
              laboriosam molestias?
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
