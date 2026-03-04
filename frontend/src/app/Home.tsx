import HeroSection from "../components/home/HeroSection";


export default function Home() {
  return (
      <div className="bg-rave-black">
        <HeroSection/>
        {/* rooted in community */}
        <section className="relative px-6 py-10 flex flex-col gap-y-5">
          <h2 className="font-horizon text-3xl md:text-8xl text-ara-white uppercase leading-none tracking-tight">
            FOR A SCENE <br/> ROOTED IN COMMUNITY.
          </h2>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col items-start">
              <h3 className="font-horizon text-sosyal-red text-lg">40+</h3>
              <p className="font-helvetica text-ara-white text-sm tracking-tight">ARTISTS</p>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="font-horizon text-sosyal-red text-lg">20+</h3>
              <p className="font-helvetica text-ara-white text-sm tracking-tight leading-none">VENUES & <br/>COLLECTIVES</p>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="font-horizon text-sosyal-red text-lg">2500+</h3>
              <p className="font-helvetica text-ara-white text-sm tracking-tight leading-none">SOSYALITES</p>
            </div>
          </div>
        </section>
      </div>
  )
}