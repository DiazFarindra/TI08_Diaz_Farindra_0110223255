
export const Movies = () => {
  return (
    <div className='m-4'>
        <section className='my-20 mx-0 lg:max-w-7xl lg:my-12 lg:mx-auto'>
            <h2 className='mb-4 text-4xl text-primary'>Latest Movie</h2>

            <div className='flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-center'>
                {
                    Array.from({ length: 10 }).map((_, index) => (
                        <div key={index} className='mb-4 md:basis-1/2 lg:basis-1/4 lg:p-4'>
                            <img className='rounded-3xl max-w-full h-auto mb-4' src="" alt="" />

                            <h3 className='text-primary text-3xl mb-2'>Movie Title</h3>

                            <p className='text-secondary'>Movie Description</p>
                        </div>
                    ))
                }
            </div>
        </section>
    </div>
  )
}
