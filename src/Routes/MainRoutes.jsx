import { Route, Routes } from 'react-router-dom';

import { Products } from '../components/ProductsDashboard';
import { About } from "../components/About"
import { Home } from '../components/Home';
import { SingleProductList } from '../components/SingleProduct';

export const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path='/product/:id' element={<SingleProductList />} />
            </Routes>
        </>
    )
}