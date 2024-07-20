import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, Grid, LinearProgress, Modal, Radio } from '@mui/material';
import coverImage from '../images/cover.png';
import defaultImage from '../images/defaultImage.png';
import { styles } from '../styles/main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faCropSimple, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../components/cropImage';

const ProfileImage = () => {
    const [uploadModal, setUploadModal] = useState(false);
    const [cropModal, setCropModal] = useState(false);
    const [imageDetails, setImageDetails] = useState([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [selectedImageUrl, setSelectedImageUrl] = useState('');
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedImage, setCroppedImage] = useState('');

    const handleFileChange = (event) => {
        const files = event.target.files;
        const imageFiles = Array.from(files).filter(file => file.type.startsWith('image/'));

        if (imageFiles.length > 0) {
            const newImageDetails = imageFiles.map(file => {
                const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);

                if (file.size > 5 * 1024 * 1024) {
                    return {
                        url: URL.createObjectURL(file),
                        name: file.name,
                        size: sizeInMB,
                        progress: 0,
                        error: "This image is larger than 5MB. Please select a smaller image."
                    };
                } else if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
                    return {
                        url: URL.createObjectURL(file),
                        name: file.name,
                        size: sizeInMB,
                        progress: 0,
                        error: ` The file format of ${file.name} is not supported. Please upload an image in one of the following formats: JPG, PNG.`
                    };
                } else {
                    return {
                        url: URL.createObjectURL(file),
                        name: file.name,
                        size: sizeInMB,
                        progress: 0,
                        error: null
                    };
                }
            });

            setImageDetails(prevDetails => [...prevDetails, ...newImageDetails]);

            // Simulate upload progress for each file (excluding those with errors)
            newImageDetails.forEach((fileDetail, index) => {
                if (!fileDetail.error) {
                    simulateUploadProgress(index, fileDetail);
                }
            });
        }
    };


    const simulateUploadProgress = (index, fileDetail) => {
        const interval = setInterval(() => {
            setImageDetails(prevDetails => {
                const updatedDetails = [...prevDetails];
                const progress = updatedDetails[index].progress;

                if (progress < 100) {
                    updatedDetails[index] = { ...fileDetail, progress: Math.min(progress + 10, 100) };
                    return updatedDetails;
                } else {
                    clearInterval(interval);
                    return updatedDetails;
                }
            });
        }, 500);
    };

    const handleRemoveImage = (index) => {
        setImageDetails(prevDetails => prevDetails.filter((_, i) => i !== index));
        if (selectedImageIndex === index) {
            setSelectedImageIndex(null);
            setSelectedImageUrl('');
        }
    };

    const handleRadioChange = (event) => {
        const index = parseInt(event.target.value);
        setSelectedImageIndex(index);
        const selectedImage = imageDetails[index];
        setSelectedImageUrl(selectedImage.url);
        sessionStorage.setItem('selectedImage', JSON.stringify(selectedImage));
        console.log("imageDataset", sessionStorage.setItem('selectedImage', JSON.stringify(selectedImage)))
    };

    useEffect(() => {
        if (cropModal) {
            const imageData = sessionStorage.getItem('selectedImage');
            console.log("imageDataget", imageData)
            if (imageData) {
                const image = JSON.parse(imageData);
                setSelectedImageUrl(image.url);
            }
        }
    }, [cropModal]);

    const handleCropConfirm = async () => {
        sessionStorage.removeItem('selectedImage')
        setSelectedImageIndex(null);
        try {
            const croppedImage = await getCroppedImg(selectedImageUrl, crop, zoom, 1);
            setCroppedImage(croppedImage.url);
            setCropModal(false);
        } catch (error) {
            console.error('Error cropping image:', error);
        }
    };

    return (
        <>
            <Modal
                open={uploadModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles.modalBox} >
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={styles.modalTitle}>
                        <Grid container columnSpacing={1}>
                            <Grid item xs={11} sm={11} md={11} lg={11} xl={11} >
                                <Typography variant="h6" component="div" style={styles.primary}>
                                    <b>Upload image(s)</b>
                                </Typography>
                                <Typography variant="h6" component="div" style={styles.secondary}>
                                    You may upload up to 5 images
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}
                                onClick={() => setUploadModal(false)} style={{ cursor: 'pointer' }}>
                                x
                            </Grid>
                        </Grid>
                    </Typography>
                    <br />
                    <Typography id="modal-modal-description" sx={styles.modalBody} >
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={styles.modalGrid}>
                                {imageDetails.length > 5 ? (
                                    <>
                                        <Typography variant="h6" component="div" style={{ color: 'red', ...styles.primary }}>
                                            <b>You've reached the image limit</b>
                                        </Typography>
                                        <Typography variant="h6" component="div" style={styles.secondary}>
                                            Remove one or more to upload more images.
                                        </Typography>
                                    </>
                                ) : (
                                    <>
                                        <Typography variant="h6" component="div">
                                            <Button
                                                component="label"
                                                role={undefined}
                                                variant="contained"
                                                style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    borderRadius: '50%',
                                                    background: 'none',
                                                }}
                                            >
                                                <input
                                                    type="file"
                                                    style={{ display: 'none' }}
                                                    multiple
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                />
                                                <FontAwesomeIcon icon={faCloudArrowUp} style={styles.iconStyle} />
                                            </Button>
                                        </Typography>
                                        <Typography variant="h6" component="div" style={styles.primary}>
                                            <b>Click or drag and drop to upload</b>
                                        </Typography>
                                        <Typography variant="h6" component="div" style={styles.secondary}>
                                            PNG, or JPG (Max 5MB)
                                        </Typography>
                                    </>
                                )}
                            </Grid>
                        </Grid>
                        <br />
                        <>
                            <Grid container columnSpacing={1} sx={
                                imageDetails.length === 3
                                    ? styles.imageData
                                    : styles.imageDataMore
                            }>
                                {imageDetails.map((image, index) => (
                                    <React.Fragment key={index}  >
                                        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                                            <img src={image.url} alt={`preview-${index}`} style={{ width: '80px', height: '80px', borderRadius: '6px' }} />
                                        </Grid>
                                        <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                                            <Typography variant="body2" style={styles.primary}>
                                                {image.name}
                                            </Typography>
                                            <Typography variant="body2" style={styles.secondary}>
                                                {image.size} MB
                                            </Typography>
                                            {image.error ? (
                                                <Typography variant="body2" style={{ color: 'red' }}>
                                                    {image.error}
                                                </Typography>
                                            ) : image.progress < 100 ? (
                                                <Typography variant="body2">
                                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                                        <LinearProgress
                                                            variant="determinate"
                                                            value={image.progress}
                                                            style={styles.progressBar}
                                                        />
                                                        <span>{image.progress}%</span>
                                                    </div>
                                                </Typography>
                                            ) : (
                                                <>
                                                    <Button onClick={() => handleRemoveImage(index)}
                                                        style={styles.deleteButton}>
                                                        <FontAwesomeIcon icon={faCropSimple} />&ensp;Crop
                                                    </Button>   •
                                                    <Button onClick={() => handleRemoveImage(index)}
                                                        style={styles.deleteButton}>
                                                        <FontAwesomeIcon icon={faTrashCan} />&ensp;Delete
                                                    </Button>
                                                </>
                                            )}
                                        </Grid>
                                        <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
                                            {image.progress < 100 && image.error ? (
                                                <Button onClick={() => handleRemoveImage(index)} style={{ color: '#525252' }}>
                                                    x
                                                </Button>
                                            ) : (
                                                <Radio
                                                    checked={selectedImageIndex === index}
                                                    onChange={handleRadioChange}
                                                    value={index}
                                                    name="radio-buttons"
                                                    inputProps={{ 'aria-label': 'Select' }}
                                                    sx={{
                                                        color: '#4338CA',
                                                        '&.Mui-checked': {
                                                            color: '#4338CA',
                                                        },
                                                    }}
                                                />
                                            )}
                                        </Grid>
                                    </React.Fragment>
                                ))}

                            </Grid>
                            <br />
                            {imageDetails && imageDetails.length > 0 && (
                                <Grid container columnSpacing={2} sx={styles.modalFooter}>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{ paddingLeft: '0px' }}>
                                        <Button
                                            type="button"
                                            fullWidth
                                            variant="contained"
                                            sx={styles.buttonPrimary}
                                            onClick={() => {
                                                setUploadModal(false)
                                                setSelectedImageIndex(null)
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={styles.buttonSecondary}
                                            disabled={selectedImageIndex === null}
                                            onClick={() => {
                                                setCropModal(true);
                                                setUploadModal(false);
                                            }}
                                        >
                                            Select image
                                        </Button>
                                    </Grid>
                                </Grid>
                            )}
                        </>
                    </Typography>
                </Box>
            </Modal>
            <Modal
                open={cropModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles.modalCropBox} >
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={styles.modalTitle}>
                        <Grid container columnSpacing={1}>
                            <Grid item xs={11} sm={11} md={11} lg={11} xl={11} >
                                <Typography variant="h6" component="div" style={styles.primary}>
                                    <b>Crop your picture</b>
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sm={1} md={1} lg={1} xl={1}
                                onClick={() => setCropModal(false)} style={{ cursor: 'pointer' }}>
                                x
                            </Grid>
                        </Grid>
                    </Typography>
                    <Typography>
                        <Box id="modal-modal-description" sx={styles.modalCropBody} >
                            {selectedImageUrl && (
                                <Cropper
                                    image={selectedImageUrl}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={1} 
                                    onCropChange={setCrop}
                                    onZoomChange={setZoom}
                                    cropShape="round"
                                    showGrid={true}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            )}
                        </Box>
                    </Typography>
                    <br />
                    <Typography id="modal-modal-description" sx={styles.modalBody} >
                        <Grid container columnSpacing={1} sx={styles.modalFooter}>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    sx={styles.buttonPrimary}
                                    onClick={() => {
                                        setCropModal(false)
                                        setSelectedImageIndex(null)
                                    }}>
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={styles.buttonSecondary}
                                    onClick={handleCropConfirm}
                                >
                                    Confirm
                                </Button>
                            </Grid>
                        </Grid>
                    </Typography>
                </Box>
            </Modal >
            <Card sx={{ width: 768, maxHeight: 420 }}>
                <CardMedia
                    component="img"
                    height="100"
                    image={coverImage}
                    alt="background"
                />

                <CardContent >
                    <Grid container>
                        <Grid item xs={7} sm={6} md={9} lg={9} xl={9}  >
                            {/* <CardMedia
                                component="img"
                                // height="160"
                                image={croppedImage || defaultImage}
                                alt="profileImage"
                                style={styles.profileImage}
                            /> */}
                            <img
                                src={croppedImage || defaultImage}
                                alt={'profileImage'}
                                style={styles.profileImage} />
                            <br />
                        </Grid>
                        <Grid item xs={5} sm={6} md={3} lg={3} xl={3}>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                style={styles.buttonPrimary}
                                onClick={() => {
                                    setUploadModal(true);
                                    setImageDetails([]);

                                }}
                            >
                                Update Picture
                            </Button>
                        </Grid>
                    </Grid>

                    <Typography gutterBottom variant="h6" component="div">
                        <b>Navya M K</b>
                    </Typography>
                    <Typography variant="body2" color="#000000">
                        @Bangalore • Frontend Developer at Alten • She/Her
                    </Typography>
                </CardContent>
            </Card >
        </>
    );
};

export default ProfileImage;
