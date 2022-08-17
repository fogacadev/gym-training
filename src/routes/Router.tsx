import {
    Routes,
    Route
} from "react-router-dom";
import { Division } from "../pages/Division";
import { CreateDivision } from "../pages/Division/Create";
import { Evolutions } from "../pages/Evolution";
import { CreateEvolution } from "../pages/Evolution/Create";
import { Exercicies } from "../pages/Exercicies";
import { CreateExercicie } from "../pages/Exercicies/Create";
import { Home } from "../pages/Home";
import { CreateTraining } from "../pages/Home/Create";

export function Router() {
    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/create" element={<CreateTraining />} />
            <Route path="/divisions/:id" element={<Division/>}/>
            <Route path="/divisions/create/:id" element={<CreateDivision/>}/>
            <Route path="/exercicies/:id" element={<Exercicies/>}/>
            <Route path="/exercicies/create/:id" element={<CreateExercicie/>}/>            
            <Route path="/evolutions/:id" element={<Evolutions/>}/>     
            <Route path="/evolutions/create/:id" element={<CreateEvolution/>}/>     
                   
        </Routes>
    )
}