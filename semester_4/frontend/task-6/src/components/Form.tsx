
export const Form = () => {
  return (
    <div id='form' className='m-4'>
        <div className='flex justify-center items-center gap-12'>
            <div className='w-fit bg-primary rounded-3xl p-4'>
                <img className='max-w-full h-auto rounded-4xl' src="https://picsum.photos/200/300" alt="" />
            </div>

            <div className='w-fit flex flex-col gap-4'>
                <div className='text-center'>
                    <h2 className='text-primary text-4xl'>Add Movie</h2>
                </div>

                <div className='w-full flex flex-col'>
                    <label className='text-secondary'>title</label>
                    <input type="text" className='w-full px-2 py-1 border border-primary rounded-lg' />
                </div>

                <div className='w-full flex flex-col'>
                    <label className='text-secondary'>year</label>
                    <input type="text" className='w-full px-2 py-1 border border-primary rounded-lg' />
                </div>

                <button className='w-full bg-primary py-2 text-white rounded-xl'>submit</button>
            </div>
        </div>
    </div>
  )
}
