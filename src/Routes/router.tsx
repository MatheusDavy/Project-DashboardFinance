// React Router Dom
import { Route, Routes, BrowserRouter } from 'react-router-dom'

// Components
import { DefaultLayout } from '../Layouts/DefaultLayout'
import { Home } from '../Pages/Home'
import { WalletPage } from '../Pages/Wallet'
import { Goals } from '../Pages/Goals'

export function Router() {
    return (
       <BrowserRouter>
         <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/wallet' element={<WalletPage />} />
                <Route path='/goals' element={<Goals />} />
            </Route>
        </Routes>
       </BrowserRouter>
    )
}