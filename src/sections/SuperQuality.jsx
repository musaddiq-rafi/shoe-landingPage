import { shoe8 } from "../assets/images"
import Button from "../components/Button"
const SuperQuality = () => {
  return (
    <section
    id="about-us"
    className="flex justify-between items center max-lg:flex-col
    gap-10 w-full max-container "
    >
      <div className="flex flex-1 flex-col">
        <h2 className='font-palanquin text-4xl font-bold capitalize lg:max-w-lg'>
        We provide you   <span className='text-coral-red inline-block mt-3'>
             Super</span> 
          
          <span className='text-coral-red inline-block mt-3'>Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort, quality, and style, our shoes are designed to elevate your 
          active lifestyle. Also, we offer a wide range of sizes and styles for your unique needs.
          We are committed to providing you with the best quality shoes that will last you a lifetime.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Our dedication to quality is what sets us apart from other shoe brands.
        </p>
        <div className="mt-11 ">
          <Button label='View Details'  />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center ">
        <img 
        src={shoe8}
        alt="shoe 8"
        width={570}
        height={522}
        className="object-contain"
        />
      </div>

    </section>
  )
}

export default SuperQuality