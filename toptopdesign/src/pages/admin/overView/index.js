import { useCallback, useState } from 'react';
import { adminbanner } from '../../../assets/config';
import BannerItem from './components/banner/bannerItem';
import { Styles } from './style';
import ProductsTable from './components/productsTable';
import UsersTable from './components/usersTable';
import { useEffect } from 'react';
import { getTopProducts, getSiteInfo } from '../../../api/admin/overview';

export default function OverView(){
    const [topProducts, setTopProducts] = useState([]);
    const [newUsers, setNewUsers] = useState([]);
    const [newProducts, setNewProducts] = useState([]);

    const [siteinfo, setSiteInfo] = useState({});

    const getInitialData = useCallback( async() => {
        const res = await getSiteInfo();
        setSiteInfo(res.data);
        // await getTopProducts()
        // .then((res) => {
        //     setTopProducts(res.products);
        // })
        // .catch((err) => console.log(err));

    }, [])

    useEffect(() => {
        getInitialData();
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
                        <BannerItem 
                            info={item} 
                            siteinfo={siteinfo} 
                            key={idx}
                        />
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