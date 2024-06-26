import {  Box, Container, Grid, Typography, styled } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height:'100vh',
        display: "flex",
        alignItems: 'center',
    }))

    const StyledImage = styled("img")(({theme}) => ({
        width: '80%',
        borderRadius: '50%',
        border: `1px solid ${theme.palette.primary.contrastText}`

    }))
    

    return (
      <>
        <StyledHero>
            <Container maxWidth='lg'>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <Box position={"relative"}>
                        <Box position={'absolute'} width={'150%'} top={'-100'} right={0}>
                            <AnimatedBackground/>
                        </Box>
                        <Box position={'relative'} textAlign={'center'}>
                            <StyledImage src="https://avatars.githubusercontent.com/u/128489282?s=400&u=df9033428260d3ab9c1b0d04bac7d13b14af5a6f&v=4" alt="avatar de perfil"  />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md ={7}>
                    <Typography color={"primary.contrastText"} variant="h1" textAlign={'center'} pb={2}>Vinicius Krieger</Typography>
                    <Typography color={"primary.contrastText"} variant="h2" textAlign={'center'}>Estudante de Programação</Typography>
                    <Grid container display={'flex'} justifyContent={'center'} spacing={3} pt={3}>
                        <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'}>
                            <StyledButton>
                                <DownloadIcon/>
                                <Typography>
                                DOWNLOAD CV
                                </Typography>
                            </StyledButton>
                        </Grid>
                        <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'}>
                            <StyledButton>
                                <EmailIcon/>
                                <Typography>
                                CONTACT ME
                                </Typography>
                            </StyledButton>
                        </Grid>
                    </Grid>

                    
                </Grid>
            </Grid>

            </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero