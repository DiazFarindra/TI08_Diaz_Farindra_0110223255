export default function HeroBanner({ headline }: { headline?: string }) {
    return (
        <div>
            <h1 className='text-9xl font-bold text-primary'>
                {headline ?? 'Monitoring'} <span className='text-tertiary'>COVID-19</span> Growth
            </h1>

            <p className='mt-12 text-xl'>
                This application provides real-time data on the growth of <span className='text-tertiary'>COVID-19</span> cases globally and in Indonesia.
                It includes statistics on total cases, recoveries, and deaths, helping users stay informed about the pandemic's status.
            </p>
        </div>
    )
}
