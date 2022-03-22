import { useCallback, useState } from 'react';
import { adminbanner } from '../../../assets/config';
import BannerItem from './components/banner/bannerItem';
import { Styles } from './style';
import ProductsTable from './components/productsTable';
import UsersTable from './components/usersTable';
import { useEffect } from 'react';
import { getTopProducts } from '../../../api/admin/overview';

export default function OverView(){
    const [topProducts, setTopProducts] = useState([]);
    const [newUsers, setNewUsers] = useState([]);
    const [newProducts, setNewProducts] = useState([]);

    const getInitialData = useCallback( async() => {
        await getTopProducts()
        .then((res) => {
            setTopProducts(res.products);
        })
        .catch((err) => console.log(err));
    }, [])

    useEffect(() => {
        
    }, [])
    return (
        <Styles>
            <div className='header'>
                <div className='welcom'>
                    Welcome back, Max
                </div>
                <div className='sort'>

                </div>
            </div>
            <div className='banner'>
                {adminbanner.map((item, idx) => {
                    return (
                        <BannerItem info={item} key={idx}/>
                    )
                })}
            </div>
            <div className='tables'>
                <ProductsTable topProducts={topProducts}/>
                <UsersTable />
                {/* <ProductsTable /> */}
            </div>
            
        </Styles>
    )
}