import './style.css'

console.log('wyd vro')

document.querySelector('#app').innerHTML = `
<div id="main" class="main-fade-in">
        <img class="pfp" src="https://raw.githubusercontent.com/ivadsiuls/ivadsiuls.github.io/refs/heads/main/public/pfp.png" alt="pfpImage"  width="256px" height="256px">
        <p class="name-header" >Hey, I'm</p>
        <p class="name" ><b>ivadsiuls</b></p>
        <p class="desc-header">programming for <b style="  background-image: linear-gradient(rgb(255, 255, 255), rgb(0, 0, 255)); color: transparent; background-clip: text;">6 years</b></p>
        <p class="paragraph desc" >i'm a self-taught game dev/programmer
          <br>
          who occasionally makes fun and high-quality.
          <br>
          I use platforms like Godot and Roblox to make my games,
          <br>
          but I've recently expanded my reach into different engines.
          <br><br><br><br>
          It's pronounced EvadSIuls</p>
      </div>
      <div id="dev-icons">
        <a target="_blank" href="https://luau.org" ><img class="fade-in" src="https://luau.org/assets/images/luau-88.png" alt="Luau" width="64px" height="64px" ></a>
        <a target="_blank" href="https://go.dev/" ><img class="fade-in" src="https://skillicons.dev/icons?i=go" alt="Golang" width="64px" height="64px" ></a>
        <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" ><img class="fade-in" src="https://skillicons.dev/icons?i=javascript" alt="Golang" width="64px" height="64px" ></a>
      </div>
      <div id="social-icons">
        <a target="_blank" href="https://github.com/ivadsiuls" class="github-icon" ><img class="fade-in" style="border-radius: 100%;" src="https://skillicons.dev/icons?i=github" alt="Github" width="64px" height="64px" ></a>
        <a target="_blank" href="https://youtube.com/@ivadsiuls" class="youtube-icon" ><img class="fade-in" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-512.png" alt="Youtube" width="64px" height="64px" ></a>
        <a target="_blank" href="https://roblox.com/users/5048508312/profile" class="roblox-icon" ><img class="fade-in" style="border-radius: 100%;" src="https://imgs.search.brave.com/YGjqu3vGpPDkI8DD1nKoVQZ0DxMIVzjI5ziicuYckk0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNmL2Q1/L2I0LzNmZDViNGI4/ZmIyYzNiNmE4NDcz/ZDcyODg3ZDM3ZWE5/LmpwZw" alt="Roblox" width="64px" height="64px" ></a>
      </div>
`