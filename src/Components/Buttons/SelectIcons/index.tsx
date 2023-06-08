import { Button } from "./styles"
import { BsFillHouseFill } from 'react-icons/bs'
import { AiFillCar } from 'react-icons/ai'
import { GiReceiveMoney } from 'react-icons/gi'
import { IoPhonePortrait } from 'react-icons/io5'
import { useRef } from "react"

interface IconProps {
    icon: any
    name: string
}

interface Props {
    icon: IconProps
    active: boolean
    selectButton: (color: string, index: number) => void
    index: number
}

export function ButtonIcon({ icon, active, index, selectButton }: Props) {

    const buttonRef = useRef<HTMLButtonElement>(null);

    function handleSelectIcon() {
        if (buttonRef != null) {
            const icon = buttonRef!.current!.dataset.icon
            selectButton(icon!, index)
        }
    }

    return (
        <Button
            className="color--button"
            active={active}
            data-icon={icon.name}
            onClick={handleSelectIcon}
            type="button"
            ref={buttonRef}
        >
            {icon.icon}
        </Button>
    )
}
