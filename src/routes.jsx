import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChampionLeague from './pages/ChampionLeague'
import FaseDeGrupos from './pages/FaseDeGrupos'
import OitavasDeFinal from './pages/OitavasDeFinal'
import QuartasDeFinal from './pages/QuartasDeFinal'
import SemiFinal from './pages/SemiFinal'
import Final from './pages/Final'
import Page404 from './pages/Page404'

function TorneioChampions() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <ChampionLeague /> }>
                    <Route index element={ <FaseDeGrupos /> }></Route>
                    <Route path="/OitavasDeFinal" element={ <OitavasDeFinal /> }></Route>
                    <Route path="/QuartasDeFinal" element={ <QuartasDeFinal /> }></Route>
                    <Route path="/SemiFinal" element={ <SemiFinal /> }></Route>
                    <Route path="/Final" element={ <Final /> }></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default TorneioChampions
