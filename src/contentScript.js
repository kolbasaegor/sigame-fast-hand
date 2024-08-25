var IS_TRIGGER_ACTIVE = false

const setTriggerButton = (status) => {
    IS_TRIGGER_ACTIVE = status

    document.body.querySelector('.__trigger-button')
    .textContent = status ? '😈 Заряжена 😈' : '😮‍💨 На пассивке 😮‍💨'
}

const triggerButton = document.createElement('button')
triggerButton.className = '__trigger-button'
triggerButton.textContent = '😮‍💨 На пассивке 😮‍💨'
triggerButton.onclick = () => { setTriggerButton(!IS_TRIGGER_ACTIVE) }
document.body.appendChild(triggerButton)


document.body.arrive('#table', ($tableElem) => {
    $tableElem.querySelector('.tableContent').arrive('.topBorder', () => {
        if (!IS_TRIGGER_ACTIVE) return

        document.body.querySelector('#reactHost button.playerButton').click()
    })

    $tableElem.querySelector('.tableContent').leave('.topBorder', () => {
        setTriggerButton(false)
    })
})

