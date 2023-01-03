import { Route, Routes } from 'react-router-dom';

import { DashBoard } from '../pages/DashBoard';

import { List } from '../pages/List';

import { Layout } from '../components/Layout';

export default function AppRoutes(){
    return(
        <Layout>
            <Routes>
                <Route path="/"  element={<DashBoard/>}/>
                <Route path="/list/:type" element={<List/>}/> 
            </Routes>  
        </Layout>
    )
}
