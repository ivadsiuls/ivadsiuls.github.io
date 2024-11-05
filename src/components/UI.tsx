import { H1 } from './Header'
import { Devicon } from './Devicon'
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/github'
import 'react-social-icons/x'
import 'react-social-icons/youtube'
import 'react-social-icons/discord'

export function UI() {
    const isMobile = function() {
        console.log(navigator.userAgent)
        // didn't simplify this because I wanna test out the mobile UI without going on my phone
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true
        }
        else {
            return false // this helps
        }
    };

    return (
        <>
            <div>
                <H1 title={'ivadsiuls'} posx={isMobile() ? '15vw' : '3vw'} posy={'0'} color={'white'} fontSize={'1.2em'} className={'name-label'} />
                <H1 title={'game developer / software engineer'} posx={isMobile() ? '52vw' : '50vw'} posy={isMobile() ? '1vh' : '0vh'} color={'white'} fontSize={isMobile() ? '0.6em' : '1em'} className={'inter-normal'} />

                <H1 title={'crafting memorable'} posx={'50vw'} posy={'30vh'} color={'white'} fontSize={isMobile() ? '1em' : '2em'} className={'crafting-label'}/>
                <H1 title={'experiences'} posx={'50vw'} posy={'30vh'} color={'transparent'} fontSize={isMobile() ? '3em' : '6em'} className={'experiences-label'} />

                <H1 title={'one line of code at a time.'} posx={'50vw'} posy={isMobile() ? '40vh' : '44vh'} color={'white'} fontSize={isMobile() ? '0.7em' : '1em'} className={'line-label inter-normal'} />
                <ul>
                    <SocialIcon label={'GITHUB'} url={'https://github.com/ivadsiuls'} style={{
                        position: 'absolute',
                        zIndex: '2',
                        top: '92.5vh',
                        left: isMobile() ? '3vw' : '2vw'
                    }}/>
                    <SocialIcon label={'YOUTUBE'} url={'https://youtube.com/@ivadsiuls'} style={{
                        position: 'absolute',
                        zIndex: '2',
                        top: isMobile() ? '85vh' : '92.5vh',
                        left: isMobile() ? '3vw' : '6vw'
                    }}/>
                    <SocialIcon label={'TWITTER'} url={'https://x.com/ivadsiuls_'} style={{
                        position: 'absolute',
                        zIndex: '2',
                        top: isMobile() ? '77.5vh' : '92.5vh',
                        left: isMobile() ? '3vw' : '10vw'
                    }}/>
                    <SocialIcon label={'DISCORD'} url={'https://discord.com/users/1221457893522669662'} style={{
                        position: 'absolute',
                        zIndex: '2',
                        top: isMobile() ? '70vh' : '92.5vh',
                        left: isMobile() ? '3vw' : '14vw'
                    }}/>
                </ul>
                <ul>
                    <Devicon posx={isMobile() ? '60vw' : '59.5vw'} posy='94vh' className='devicon-kotlin-plain' title=' Kotlin' color='white'/>
                    <Devicon posx={isMobile() ? '60vw' : '37vw'} posy={isMobile() ? '90vh' : '94vh'} className='devicon-lua-plain' title=' Lua' color='white'/>
                    <Devicon posx={isMobile() ? '60vw' : '46vw'} posy={isMobile() ? '86vh' : '94vh'} className='devicon-typescript-plain' title=' Typescript' color='white'/>
                </ul>
            </div>
        </>
    )
}