import Works from "@/components/pages/top/works/works";
import About from "./about/about";

export default function BodyContainer() {
  return (
    <div className='body-container px-[5vw] py-10'>
      <div className='works-inner max-w-276 mx-auto'>
        <Works />
        <About />
      </div>
    </div>
  );
}
