import { Box, Typography } from '@mui/material'
import Image from 'next/image'

export const Section1 = () => {
  return (
    <Box
      sx={{
        padding: {
          xs: '2.5rem 1.5rem 1rem 1.5rem',
          sm: '2.5rem 3rem 1rem 3rem',
          md: '2.5rem 6rem 1rem 6rem',
        },
      }}
    >
      <Box textAlign="center">
        <Typography
          variant="subtitle1"
          fontFamily="Inter"
          fontWeight="600"
          color="#002E5F"
        >
          Published 20 Jun 2022
        </Typography>
        <Typography
          variant="h4"
          fontFamily="Inter"
          fontWeight="600"
          marginTop="1rem"
        >
          UX review presentations
        </Typography>
        <Typography
          variant="body1"
          fontFamily="Inter"
          fontWeight="400"
          color="#667085"
          marginTop="1rem"
        >
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </Typography>
      </Box>
      <Box marginTop="3rem">
        <Image
          src={require('../../../assets/Office1.png')}
          alt=""
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </Box>
      <Typography
        variant="h5"
        fontWeight="600"
        fontFamily="Inter"
        marginTop="5rem"
      >
        Introduction
      </Typography>
      <Typography
        variant="body1"
        fontFamily="Manrope"
        fontWeight="400"
        color="#667085"
        marginTop="1rem"
      >
        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
        suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
        montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
        vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
        varius id.
      </Typography>
      <Typography
        variant="body1"
        fontFamily="Manrope"
        fontWeight="400"
        color="#667085"
        marginTop="1rem"
      >
        Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis
        at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce
        augue enim. Quis at habitant diam at. Suscipit tristique risus, at
        donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales
        id est ac volutpat.
      </Typography>
      <Box marginTop="3rem">
        <Image
          src={require('../../../assets/Office2.png')}
          alt=""
          style={{ width: '100%', height: 'auto' }}
          loading="lazy"
        />
      </Box>
      <Box marginTop="3rem" borderLeft="3px solid #6941C6">
        <Box marginLeft="1rem">
          <Typography
            variant="h6"
            fontFamily="Inter"
            fontWeight="600"
            fontStyle="italic"
          >
            “In a world older and more complete than ours they move finished and
            complete, gifted with extensions of the senses we have lost or never
            attained, living by voices we shall never hear.”
          </Typography>
          <Typography
            variant="subtitle2"
            fontFamily="Inter"
            fontWeight="500"
            color="#667085"
            marginTop="2rem"
          >
            — Olivia Rhye, Product Designer
          </Typography>
        </Box>
      </Box>
      <Typography
        variant="body1"
        fontFamily="Manrope"
        fontWeight="400"
        color="#667085"
        marginTop="3rem"
      >
        Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio
        nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi
        bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
      </Typography>
      <Typography
        variant="body1"
        fontFamily="Manrope"
        fontWeight="400"
        color="#667085"
        marginTop="1rem"
      >
        Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
        commodo consectetur convallis risus. Sed condimentum enim dignissim
        adipiscing faucibus consequat, urna. Viverra purus et erat auctor
        aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
        aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque
        ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc
        lectus in tellus, pharetra, porttitor.
      </Typography>
      <Typography
        variant="body1"
        fontFamily="Manrope"
        fontWeight="400"
        color="#667085"
        marginTop="1rem"
      >
        Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id.
        Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie
        sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut
        tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
      </Typography>
      <Typography
        variant="h6"
        fontWeight="600"
        fontFamily="Inter"
        marginTop="3rem"
      >
        Software and tools
      </Typography>
      <Typography
        variant="body1"
        fontFamily="Manrope"
        fontWeight="400"
        color="#667085"
        marginTop="1rem"
      >
        Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis
        aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget
        a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.
      </Typography>
      <Typography
        variant="h6"
        fontWeight="600"
        fontFamily="Inter"
        marginTop="3rem"
      >
        Other resources
      </Typography>
      <Typography
        variant="body1"
        fontFamily="Manrope"
        fontWeight="400"
        color="#667085"
        marginTop="1rem"
      >
        Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas
        sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum
        lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at
        diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus
        vulputate gravida id. Sed quis auctor vulputate hac elementum gravida
        cursus dis.
      </Typography>
      <Typography
        variant="body1"
        fontFamily="Manrope"
        fontWeight="400"
        color="#667085"
        marginTop="1rem"
      >
        1. Lectus id duis vitae porttitor enim gravida morbi.
      </Typography>
      <Typography
        variant="body1"
        fontFamily="Manrope"
        fontWeight="400"
        color="#667085"
      >
        2. Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse.
        Auctor vel in vitae placerat.
      </Typography>
      <Typography
        variant="body1"
        fontFamily="Manrope"
        fontWeight="400"
        color="#667085"
      >
        3. Suspendisse maecenas ac donec scelerisque diam sed est duis purus.
      </Typography>
      <Box marginTop="3rem">
        <Image
          src={require('../../../assets/Office3.png')}
          alt=""
          style={{ width: '100%', height: 'auto' }}
          loading="lazy"
        />
      </Box>
      <Typography
        variant="body1"
        fontFamily="Manrope"
        fontWeight="400"
        color="#667085"
        marginTop="3rem"
      >
        Lectus leo massa amet posuere. Malesuada mattis non convallis quisque.
        Libero sit et imperdiet bibendum quisque dictum vestibulum in non.
        Pretium ultricies tempor non est diam. Enim ut enim amet amet integer
        cursus. Sit ac commodo pretium sed etiam turpis suspendisse at.
      </Typography>
      <Box borderBottom="2px solid #EAECF0">
        <Typography
          variant="body1"
          fontFamily="Manrope"
          fontWeight="400"
          color="#667085"
          marginTop="1rem"
          marginBottom="3rem"
        >
          Tristique odio senectus nam posuere ornare leo metus, ultricies.
          Blandit duis ultricies vulputate morbi feugiat cras placerat elit.
          Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit
          accumsan. Cursus viverra aenean magna risus elementum faucibus
          molestie pellentesque. Arcu ultricies sed mauris vestibulum.
        </Typography>
      </Box>
    </Box>
  )
}

export default Section1
