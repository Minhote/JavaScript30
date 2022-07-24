let keys = document.querySelectorAll('.key')
let audios = document.querySelectorAll('audio')

// Reproducir por tecla
window.addEventListener('keydown', (e) =>{
        for (const audio of audios) {
            if (audio.dataset.key == e.keyCode) {
                for (const key of keys) {
                    if(key.dataset.key == e.keyCode){
                        key.classList.add('playing');
                    }
                }
                audio.currentTime = 0
                audio.play()
            }
        }
    }
)

window.addEventListener('keyup', (e) =>{
        for (const audio of audios) {
            if (audio.dataset.key == e.keyCode) {
                for (const key of keys) {
                    if(key.dataset.key == e.keyCode){
                        key.classList.remove('playing');
                    }
                }

            }
        }
    }
)

// Reproducir por mouse
for (const key of keys) {
    key.addEventListener('mousedown', ()=>{
        for (const audio of audios) {
            if (audio.dataset.key == key.dataset.key) {
                audio.currentTime = 0
                audio.play()
                key.classList.add('playing')
            }
        }
    })
}

for (const key of keys) {
    key.addEventListener('mouseup', ()=>{
        for (const audio of audios) {
            if (audio.dataset.key == key.dataset.key) {
                key.classList.remove('playing')
            }
        }
    })
}
