import { H1 } from './Header'
import { Devicon } from './Devicon'
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/github'
import 'react-social-icons/x'
import 'react-social-icons/youtube'
import 'react-social-icons/discord'

export function UI() {
    return (
        <>
            <div>
                <H1 title={'ivadsiuls'} posx={'3vw'} posy={'0vh'} color={'white'} fontSize={'1.2em'} />
                <H1 title={'game developer / software engineer'} posx={'47vw'} posy={'0vh'} color={'white'} fontSize={'1em'} className={'inter-normal'} />

                <H1 title={'crafting memorable'} posx={'47vw'} posy={'30vh'} color={'white'} fontSize={'2em'}  />
                <H1 title={'experiences'} posx={'47vw'} posy={'30vh'} color={'transparent'} fontSize={'6em'} />

                <H1 title={'one line of code at a time.'} posx={'47vw'} posy={'44vh'} color={'white'} fontSize={'1em'} className={'inter-normal'} />
                <ul>
                    <SocialIcon label={'GITHUB'} url={'https://github.com/ivadsiuls'} style={{
                        position: 'absolute',
                        zIndex: '2',
                        top: '92.5vh',
                        left: '2vw'
                    }}/>
                    <SocialIcon label={'YOUTUBE'} url={'https://youtube.com/@ivadsiuls'} style={{
                        position: 'absolute',
                        zIndex: '2',
                        top: '92.5vh',
                        left: '6vw'
                    }}/>
                    <SocialIcon label={'TWITTER'} url={'https://x.com/ivadsiuls_'} style={{
                        position: 'absolute',
                        zIndex: '2',
                        top: '92.5vh',
                        left: '10vw'
                    }}/>
                    <SocialIcon label={'DISCORD'} url={'https://discord.com/users/1221457893522669662'} style={{
                        position: 'absolute',
                        zIndex: '2',
                        top: '92.5vh',
                        left: '14vw'
                    }}/>
                </ul>
                <ul>
                    <Devicon posx='34vw' posy='94vh' className='devicon-kotlin-plain' title=' Kotlin' color='white'/>
                    <Devicon posx='44.5vw' posy='94vh' className='devicon-lua-plain' title=' Lua' color='white'/>
                    <Devicon posx='54vw' posy='94vh' className='devicon-typescript-plain' title=' Typescript'
                             color='white'/>
                </ul>
            </div>
        </>
    )
}