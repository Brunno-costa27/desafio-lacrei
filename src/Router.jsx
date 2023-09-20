import { Routes, Route} from 'react-router-dom'
import { Home } from './components/Home'
import { User } from './components/User'
import { Vocational } from './components/Vocational'


export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pessoa-usuaria" element={<User/>}/>
            <Route path="/profissional" element={<Vocational/>}/>
        </Routes>
    )
}