import React, { useEffect, useState, useCallback } from 'react';
import { Styles } from './style';
import { useNavigate } from 'react-router-dom';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import { injectStyle } from "react-toastify/dist/inject-style";
import ViewProduction from './viewProduction';
import { ReactComponent as DeleteRed } from '../../../../assets/img/admin/delete_red.svg';
import { ReactComponent as PlusWhiteIcon } from '../../../../assets/img/admin/plus_white.svg';
import SearchBox from './searchBox';
import CustomedInput from './input';
import { uploadProductImage, createNewProduct } from '../../../../api/admin/productions';

const DeleteButton = withStyles((theme) => ({
    root: {
        padding: 0,
        color: `var(--white) !important`,
        background: 'rgba(252, 52, 0, 0.1)',
        borderRadius: 4,
        cursor: 'pointer !important',
        display: 'flex !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        height: '48px !important',
        minWidth: 42,
        width: '42px !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        '&:hover': {
            opacity: '.7 !important',
            backgroundColor: `var(--warnig) !important`,
        },
    },
}))(Button);


const SaveButton = withStyles((theme) => ({
    root: {
        marginLeft: '18px !important',
        marginRight: '18px !important',
        height: '48px !important',
        display: 'flex !important',
        padding: '0px 17px !important',
        alignItems: 'center !important',
        justifyContent: 'center !important',
        backgroundColor: `var(--ocean-blue-pearl) !important`,
        borderRadius: '4px !important',
        cursor: 'pointer !important',
        textAlign: 'center !important',
        width: '177px !important',
        textTransform: 'none !important',
        transition: '.3s ease !important',
        color: `var(--white) !important`,
        fontFamily: `var(--font-family-pp_telegraf-regular) !important`,
        fontSize: `var(--font-size-m) !important`,
        fontWeight: '400px !important',
        fontStyle: `normal !important`,
        '&:hover': {
            opacity: '.7 !important',
            backgroundColor: 'var(--blue-hover) !important',
        },
        '& .icon': {
            marginRight: 8,
        }
    },
  }))(Button);
export default function ProductionLayout(){
    const navigate = useNavigate();
    const [linkedCategory, setLinkedCategory] = useState(null);
    const [linkedYear, setLinkedYear] = useState(null);
    const [productInfo, setProductInfo] = useState(null);

    if (typeof window !== "undefined") {
        injectStyle();
    }
    const uploadImage = useCallback(async() => {
        const formData = new FormData()
        if(productInfo?.imageList.length > 0){
            productInfo.imageList.map(item => formData.append('images', item));
            return await uploadProductImage(formData);
        }
        
    }, [productInfo?.imageList])
    const goToMain = () => {
        navigate('/admin/productions/');
    }
    const saveProduct = async() => {
        if(productInfo && productInfo?.productName && productInfo?.year && productInfo?.description){
            const res = await uploadImage();
            if(res.status === 200){
                const result = await createNewProduct(
                    { ...productInfo, imageList: res?.data }
                );
                if(result.status === 200){
                    await toast.warn('production created!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    await setTimeout(goToMain, 3000);
                }else{
                    toast.warn('Failed!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            }else{
                toast.warn('image uploading failed!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }else{
            toast.warn('input all fields!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <Styles>
            <div className='productions-container'>
                <div 
                    style={{display: 'flex', alignItems: 'center', borderBottom: '1px solid #EBEAED'}}>
                    <div className='productions-header'>
                        <div className='first-line'>
                            <span style={{color: '#B6B4BA', cursor: 'pointer'}} onClick={() => navigate('/admin/productions/')}>Products </span>
                            <span>/ Add New</span>
                        </div>
                        <div className='second-line'>
                            Add New Product
                        </div>
                    </div>
                    <div style={{marginLeft: 'auto', display: 'flex'}}>
                        <DeleteButton>
                            <DeleteRed />
                        </DeleteButton>
                        <SaveButton onClick={saveProduct}>
                            <PlusWhiteIcon className='icon'/>
                            <span>Save Product</span>
                        </SaveButton>
                    </div>
                </div>
                <div className='productions-body'>
                    <div className='left-panel'>
                        <ViewProduction 
                            productInfo={productInfo}
                            setProductInfo={setProductInfo}
                        />
                    </div>
                    <div className='right-panel'>
                        <div className='right-panel-header'>
                            Link Product
                        </div>
                        <div className='label'>
                            Existing Product ID
                        </div>
                        <div className='form-group'>
                            <SearchBox placeholder='{Product ID} - {Product Name}'/>
                            <div style={{paddingTop: 32}}>
                                <CustomedInput
                                    label='Category'
                                    inputValue={linkedCategory}
                                    inputHandler={setLinkedCategory}
                                    placeholderName=""
                                />
                            </div>
                            <div style={{paddingTop: 32}}>
                                <CustomedInput
                                    label='Year Version'
                                    inputValue={linkedYear}
                                    inputHandler={setLinkedYear}
                                    placeholderName=""
                                />
                            </div>
                            <div style={{paddingTop: 32, display: 'flex', justifyContent: 'center'}}>
                                <SaveButton>
                                    Link Product
                                </SaveButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </Styles>
    )
}