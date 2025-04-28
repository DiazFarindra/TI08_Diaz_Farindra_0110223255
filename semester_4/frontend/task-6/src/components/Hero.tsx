
export const Hero = () => {
  return (
    <div className='margin-4 lg:max-w-7xl lg:my-12 lg:mx-auto'>
        <section className='flex flex-col text-center lg:m-[0 1rem] lg:flex-row lg:justify-between lg:items-center lg:text-left'>
            <div className='mb-4 lg:basis-[40%]'>
                <h2 className='text-primary mb-4 text-4xl'>Spiderman</h2>

                <h3 className='text-accent mb-4 text-2xl'>genre: aa, oo, pp</h3>

                <p className='text-secondary mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, consequatur!</p>

                <button className='py-3 px-8 border-none rounded-xl bg-primary text-white'>watch</button>
            </div>

            <div className='py-3 px-8 border-none rounded-xl bg-primary text-white lg:basis-[60%]'>
                <img className='max-w-full h-auto rounded-3xl' src="https://picsum.photos/200/300" alt="banner" />
            </div>
        </section>
    </div>
  )
}
