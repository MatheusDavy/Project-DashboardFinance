export function callErrorMessage(id: string) {
    const errorMessageElement = document.getElementById(`message-error-${id}`) as HTMLInputElement
    gsap.to(errorMessageElement, {
        opacity: 1,
        duration: 1,
        onComplete: () => {
            gsap.to(errorMessageElement, {
                opacity: 0,
                duration: 1,
                delay: 4,
            })
        }
    })
}