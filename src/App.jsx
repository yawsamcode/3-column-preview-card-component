
export default function App() {

  return (
  <div className=" bg-VeryLightGray min-h-svh px-6 py-[5.5rem] lg:py-0">
    <main className="lg:w-[920px] mx-auto lg:translate-y-1/2">
      <div className="lg:flex rounded-lg">
      <section className="p-12 flex flex-col gap-[25px] justify-start items-start bg-BrightOrange lg:rounded-l-lg">
          <img src="images/icon-sedans.svg" alt="icon-sedans" />
            <h1 className="font-BigShouldDisplay text-[2.5rem] font-bold text-VeryLightGray 	text-transform: uppercase">Sedans</h1>
            <p className=" text-VeryLightGray font-normal text-base leading-6  font-LexendDeca">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
            <button className="bg-white text-BrightOrange px-8 py-3 rounded-full text-base font-normal leading-6 font-LexendDeca hover:bg-transparent hover:text-white hover:ring-2 ring-white transition-all">Learn More</button>
        </section>
        
        <section className="p-12 flex flex-col gap-[25px] justify-start items-start bg-DarkCyan ">
        <img src="images/icon-suvs.svg" alt="icon-suvs" />
            <h1 className="font-BigShouldDisplay text-[2.5rem] font-bold text-VeryLightGray 	text-transform: uppercase">SUVs</h1>
            <p className=" text-VeryLightGray font-normal text-base leading-6  font-LexendDeca">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
            <button className="bg-white text-DarkCyan px-8 py-3 rounded-full text-base font-normal leading-6 font-LexendDeca hover:bg-transparent hover:text-white hover:ring-2 ring-white transition-all">Learn More</button>
        </section>

        <section className="p-12 flex flex-col gap-[25px] justify-start items-start bg-VeryDarkCyan lg:rounded-r-lg">
        <img src="images/icon-luxury.svg" alt="icon-luxury" />
            <h1 className="font-BigShouldDisplay text-[2.5rem] font-bold text-VeryLightGray 	text-transform: uppercase">Luxury</h1>
            <p className=" text-VeryLightGray font-normal text-base leading-6  font-LexendDeca">Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. </p>
            <button className="bg-white text-VeryDarkCyan px-8 py-3 rounded-full text-base font-normal leading-6 font-LexendDeca hover:bg-transparent hover:text-white hover:ring-2 ring-white transition-all">Learn More</button>
        </section>
        </div>
      </main>
    </div>
  )
}