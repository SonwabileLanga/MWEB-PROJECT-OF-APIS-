
import React from 'react'
import { LogoImage } from '../../getImage'
import { Box, SimpleGrid, Image } from '@chakra-ui/react'
import'./style.css';


function Boxed({ selectedProducts }) {

    return (
        <> <SimpleGrid minChildWidth='300px' spacing='1rem' >{selectedProducts.map(prod => (
            <>
                <Box className="Card" maxW='sm' borderWidth='1px' overflow='hidden' shadow='sm'>

                    <Box p='6'>
                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'

                        >
                            {prod.productName}
                        </Box>
                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'

                        >
                            {prod.provider}
                        </Box>
                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h1'
                            lineHeight='tight'

                        >
                            R {prod.productRate}
                        </Box>
                        <button className='btn'>Check Coverage</button>

                        <div className="Pic">
                         <Image src={LogoImage(prod.provider)} />
                        </div>
                    </Box>
                </Box>
            </>
        ))
        }</SimpleGrid >
        </>
    );
}

export default Boxed;
