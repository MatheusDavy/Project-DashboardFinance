export function callSuccessMessage(id: string) {
    const successMessageElement = document.getElementById(`message-success-${id}`) as HTMLInputElement
    gsap.to(successMessageElement, {
        opacity: 1,
        duration: 1,
        onComplete: () => {
            gsap.to(successMessageElement, {
                opacity: 0,
                duration: 1,
                delay: 4,
            })
        }
    })
}