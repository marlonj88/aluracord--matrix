import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';
import axios from 'axios';

function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
        `}</style>
        </>
    );
}

// Componente React
/* function HomePage() {
    // JSX
    return (
        <div>
            <GlobalStyle />
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <h2>Discord - Alura Matrix</h2>
        </div>
    )
}
export default HomePage */

export default function PaginaInicial() {
    //const username = 'marlonj88';
    const [username, setUsername] = React.useState('marlonj88');
    const roteamento = useRouter();
    const [img1, setImg1] = React.useState(0)
    const img = ['url(/637727.png)', 'url(/637709.jpg)', 'url(/637701.jpg)', 'url(/637689.jpg)', 'url(/637684.jpg)', 'url(/637679.jpg)', 'url(/401059.png)', 'url(/85327.png)']
    const randomImg = function () {
        return setImg1((prev) => (prev + [Math.floor(Math.random() * 8)]) % img.length)
    }
    /* async function github() {
        const api = axios.create({baseUrl: 'https://github.com'})
        await api.get(`https://github.com/${username}.png`)
    }
    try {
        github()
    } catch (error) {
        console.log(error)
    }
 */
    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundImage: img[img1],
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: 'rgba(33, 41, 49, 0.7)',
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function (infosDoEvento) {
                            infosDoEvento.preventDefault();
                            console.log('Alguém submeteu o form')
                            roteamento.push('/chat');
                            // window.location.href = '/chat'
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Titulo tag="h2">Olá, bem vindo de volta!</Titulo>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            {appConfig.name}
                        </Text>

                        {/* <input
                            type="text"
                            value={username}
                            onChange={function handler() {
                                console.log('usuario digitou', event.target.value);
                                const valor = event.target.value;
                                // trocar o valor da variavel atraves do React e avise quem precisa
                                setUsername(valor);
                            }}
                        /> */}
                        <TextField
                            value={username}
                            onChange={ (e) => setUsername(e.target.value) }
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                        <Button
                            label='Background'
                            onClick={randomImg}
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    {<Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        {function () {
                            if(username.length > 2) {
                                return (
                                    <>
                                        <Image
                                            styleSheet={{
                                                borderRadius: '50%',
                                                marginBottom: '16px',
                                            }}
                                            src={`https://github.com/${username}.png`}
                                        />
                                        <Text
                                            variant="body4"
                                            styleSheet={{
                                                color: appConfig.theme.colors.neutrals[200],
                                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                                padding: '3px 10px',
                                                borderRadius: '1000px'
                                            }}
                                        >
                                            {username}
                                        </Text>
                                    </>
                                );
                            }
                        }()}
                        
                    </Box>}
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}