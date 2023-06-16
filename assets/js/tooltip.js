const tooltipButton = document.querySelector('.tooltip');

if(typeof(tooltipButton) != 'undefined' && tooltipButton != null){
    const tooltip = document.querySelector('.tooltip__txt')
    
    const popperInstance = Popper.createPopper(tooltipButton, tooltip, {
        placement: 'top',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 8],
                },
            },
        ],
    })
    
    function show() {
        tooltip.setAttribute('data-show', '')
        
        popperInstance.setOptions((options) => ({
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: true },
            ],
        }))
        
        popperInstance.update()
    }
    
    function hide() {
        tooltip.removeAttribute('data-show')
        
        popperInstance.setOptions((options) => ({
            ...options,
            modifiers: [
                ...options.modifiers,
                { name: 'eventListeners', enabled: false },
            ],
        }))
    }
    
    const showEvents = ['mouseenter', 'focus']
    const hideEvents = ['mouseleave', 'blur']
    
    showEvents.forEach((event) => {
        tooltipButton.addEventListener(event, show);
    })
    
    hideEvents.forEach((event) => {
        tooltipButton.addEventListener(event, hide);
    })
}