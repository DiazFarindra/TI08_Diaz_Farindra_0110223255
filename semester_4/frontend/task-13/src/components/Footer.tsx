import tw from 'tailwind-styled-components'

const FooterContainer = tw.div`
  flex flex-col items-center justify-center
`

export const Footer = () => {
  return (
    <FooterContainer>
        <footer>
            <h2 className='mb-4'>Movie App</h2>
            <p className='mb-4'>created by diazfarindra</p>
        </footer>
    </FooterContainer>
  )
}
