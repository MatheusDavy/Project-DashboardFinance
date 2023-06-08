import FlagBrazil from '../../Assets/Images/Flags/brazilFlag.svg'
import FlagEua from '../../Assets/Images/Flags/EUAFlag.svg'
import FlagSpanish from '../../Assets/Images/Flags/SpanishFlag.svg'

export interface LanguageProps {
    lngBrand: string
    flag: string
    code: string
    active: boolean
}[]

export const languages = [
    {
        lngBrand: 'ptBR',
        flag: FlagBrazil,
        code: 'PT - BR',
        active: false,
    },
    {
        lngBrand: 'es',
        flag: FlagSpanish,
        code: 'EN - EN',
        active: false,
    },
    {
        lngBrand: 'en',
        flag: FlagEua,
        code: 'EN - US',
        active: true,
    }
]