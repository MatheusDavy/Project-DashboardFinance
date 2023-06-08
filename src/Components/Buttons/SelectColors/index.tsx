import { Button } from "./styles"
import { BsCheckLg } from "react-icons/bs";

interface Props {
    bgColor: string
    active: boolean
    selectButton: (color: string, index: number)=> void
    index: number
}

export function ButtonColor({bgColor, active, index, selectButton}: Props) {

    function handleSelectColor(event: React.MouseEvent<HTMLButtonElement>){
        const buttonSelected = event.target as HTMLButtonElement
        const color = buttonSelected.dataset.bgcolor;
        selectButton(color!, index)
    }

    return (
        <Button
            className="color--button"
            active={active}
            bgColor={bgColor}
            data-bgcolor={bgColor}
            onClick={(e) => handleSelectColor(e)}
            type="button"
        >
            <BsCheckLg size={16} />
        </Button>
    )
}
