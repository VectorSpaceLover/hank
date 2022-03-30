import { useEffect, useRef, useState } from 'react';
import { Styles } from "./style";
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import CustomedInput from '../input';
import { Grid } from '@mui/material';
import SelectBox from './selectbox';
import { ReactComponent as PlusBlueIcon } from '../../../../../assets/img/admin/plus_blue.svg'
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import ImageTag from './imageTag';

const UploadButton = withStyles((theme) => ({
    root: {
        border: '1px dashed var(--ocean-blue-pearl)',
        color: `var(--ocean-blue-pearl) !important`,
        fontFamily: `var(--font-family-open_sans) !important`,
        fontSize: `var(--font-size-17) !important`,
        fontWeight: '600px !important',
        fontStyle: 'normal !important',
        height: '48px !important',
        width: '100% !important',
        marginBottom: '44px !important',
        display: 'flex !important',
        justifyContent: 'center !important',
        alignItems: 'center !important',
        borderRadius: '4px !important',
        cursor: 'pointer !important',
        backgroundColor: 'var(--white)',
        [`@media screen and (max-width: 650px)`]: {
            width: '150px !important',
            fontSize: `var(--font-size-16) !important`,
        },
       
        textTransform: 'none !important',
        transition: '.3s ease !important',
        '&:hover': {
            color: `var(--white) !important`,
            backgroundColor: `var(--purple) !important`,
        },
        '& .icon': {
            marginRight: 8,
        }
    },
}))(Button);



export default function ViewProduction({ setProductInfo, productInfo }){
    const [imageList, setImageList] = useState([]);
    const [productName, setProductName] = useState(productInfo?.productName);
    const [category, setCategory] = useState(productInfo?.category);
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');

    const uploadRef = useRef();

    const handleUpload = (file) => {
        setImageList([...imageList, file]);//URL.createObjectURL(file)
    }

    const deleteImage = (file) => {
        const newImages = imageList.filter(item => {
            if(file === item)
                return false;
            else
                return true;
        })
        setImageList(newImages);
    }

    const handleChange = (content) => {
        setDescription(content);
    }

    useEffect(() => {
        setProductInfo({ productName, year, category, description, imageList});
    }, [category, description, imageList, productName, setProductInfo, year])

    return (
        <Styles>
            <div className="view-production-container">
                <div className="production-body">
                    <div className='production-info'>Account Information</div>
                    <Grid container spacing={2} sx={{marginLeft: 0}} className='production-name'>
                        <Grid item xs={8} style={{paddingLeft: 0}}>
                            <CustomedInput
                                label='Product name*'
                                inputValue={productName}
                                inputHandler={setProductName}
                                placeholderName=""
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <div className='label'>Year</div>
                                <SelectBox setKeyword={setYear}/>
                            </div>
                        </Grid>
                    </Grid>
                    <CustomedInput
                        label='Category'
                        inputValue={category}
                        inputHandler={setCategory}
                        placeholderName=""
                    />
                    <div className='word'>
                        <div className='label'>Description</div>
                        <SunEditor 
                            height='128px'
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                <div className='image-upload'>
                    <UploadButton onClick={() => uploadRef.current.click()}>
                        <PlusBlueIcon className='icon'/>
                        Add New Images 
                    </UploadButton>
                    <input
                        ref={uploadRef}
                        type="file"
                        hidden
                        onChange={(event) => {
                            handleUpload(event.target.files[0]);
                        }}
                    />
                </div>
                {imageList && imageList.map((item, idx) => {
                    return (
                        <ImageTag 
                            image={item} 
                            deleteImage={deleteImage}
                            key={idx}
                        />
                    )
                }) }
            </div>
        </Styles>
    )
}