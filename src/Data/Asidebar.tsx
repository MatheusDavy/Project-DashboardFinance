import { HiHome } from 'react-icons/hi'
import {BsFillCreditCard2BackFill} from 'react-icons/bs'
import {GiCash} from 'react-icons/gi'
import {SiBitcoincash} from 'react-icons/si'


export const linksNav = [
    {
        name: 'Dashboard',
        link: '/',
        icone: <HiHome size={20} />
    },

    {
        name: 'Wallet',
        link: '/wallet',
        icone: <BsFillCreditCard2BackFill size={20} />
    },

    {
        name: 'Goals',
        link: '/goals',
        icone: <GiCash size={20} />
    },

    {
        name: 'Stock Market',
        link: '/tes',
        icone: <SiBitcoincash size={20} />
    },
]