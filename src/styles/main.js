

const styles = {

    primary: {
        fontSize: "16px"
    },
    secondary: {
        fontSize: "14px",
        color: '#525252'
    },
    iconStyle: {
        fontSize: "24px",
        color: "#4338CA"
    },

    // profilCard: {
    //     "@media (min-height: 769px)": {
    //         height: '420vh',
    //         overflowY: 'hidden'
    //     },
    //     "@media (max-height: 769px)": {
    //         height: '420vh',
    //         overflowY: 'hidden'
    //     },
    //     "@media (max-height: 769px)": {
    //         height: '420vh',
    //         overflowY: 'hidden'
    //     },
    //     // "@media (max-width: 1600px)": {
    //     //   height: '72vh',
    //     //   overflowY: 'hidden'
    //     // },
    //     minHeigth: 420,
    //     '& .MuiCardContent-root': {
    //         paddingBottom: 0
    //     },
    // },

    // profileCard: {
    //     height: '420px',
    //     width: '768px', // Default width

    //     // Desktop
    //     "@media (min-width: 1044px) and (min-height: 768px)": {
    //         width: '768vw'
    //     },

    //     // Tablet
    //     "@media (min-width: 768px) and (max-width: 1043px) and (min-height: 1024px)": {
    //         width: '60px'
    //     },

    //     // Mobile
    //     "@media (max-width: 767px) and (max-height: 812px)": {
    //         width: '320vw'
    //     }


    // },

    createAlert: {
        marginTop: '8px',
        marginRight: '30px',
        height: '34px',
        paddingTop: '0px',
        paddingBottom: '2px',
        '& .MuiAlert-message': {
            overflow: 'hidden',
        }
    },


    modalBox: {
        borderRadius: '10px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 576,
        bgcolor: 'background.paper',
        boxShadow: 24,
        '&:focus': { outline: 'none' },
        "@media only screen and (max-width: 450px)": {
            width: "90%",
            marginLeft: "0%",
            marginRight: "20%",
        },

    },

    profileCard:{
        width: '200px',  
        height: '200px', 
        // borderRadius: '50px', 
        clipPath: 'circle(40%)', 
        borderColor: 'white',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '-20%',
        // marginLeft: '-30%',
        "@media only screen and (max-width: 450px)": {
         width:'20%',
            backgroundColor:'black',
            marginTop: '-6%',
            marginLeft:'20%'
        },
    },
    modalCropBox: {
        borderRadius: '10px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 343,
        bgcolor: 'background.paper',
        boxShadow: 24,
        '&:focus': { outline: 'none' }
    },
    modalCropBody: {
        paddingTop: '0px',
        paddingBottom: '0px',
        paddingLeft: '31px',
        paddingRight: '27px',
        overflowY: 'hidden',
        marginTop: '0px !important',
        fontSize: "12px",
        // backgroundColor: '#000000',
        height: 290
    },






    modalTitle: {

        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '28px',
        paddingRight: '8px',

    },
    modalBody: {
        paddingTop: '0px',
        paddingBottom: '0px',
        paddingLeft: '31px',
        paddingRight: '27px',
        overflowY: 'hidden',
        marginTop: '0px !important',
        fontSize: "12px",

    },
    modalGrid: {
        background: "#FAFAFA",
        height: '192px',
        padding: '24px 0px 24px 0px',
        borderRadius: '4px',
        border: '1px solid  #E5E5E5',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    imageGrid: {
        maxHeight: "150px",
        overflowY: "scroll",
        overflowX: "hidden"
    },

    modalFooter: {
        paddingTop: '0px',
        paddingBottom: '25px',
        // paddingLeft: '0px',
        paddingRight: '0px',
        marginLeft: '0px',
        // marginRight:'0px',
        width: '100%',
    },

    modalTextField: {
        '&  .MuiOutlinedInput-root': {
            border: '6px',
        },
    },
    buttonPrimary: {
        backgroundColor: "#FFFFFF",
        color: 'black',
        textTransform: 'none',
        borderColor:'#E5E5E5',
        "&:hover": {
            backgroundColor: "#FAFAFA",
            outline: "none",
        },
        "&:focus": {
            outline: "none",
            backgroundColor: "#E5E5E5",
        }
    },
    buttonSecondary: {
        color: 'white',
        textTransform: 'none',
        backgroundColor: "#4338CA",
        "&:hover": {
            backgroundColor: "#3730A3",
            outline: "none",
        },
        "&:focus": {
            outline: "none",
            backgroundColor: "#3730A3",
        }
    },
    deleteButton:
    {
        color: '#525252',
        textTransform: 'none',
        marginRight: '2px',
        marginBottom: '10px',
        "&:hover": {
            textDecoration: 'none',
            backgroundColor: "none",
            outline: "none",
        },
    },
    progressBar: {
        flexGrow: 1,
        borderRadius: '2px',
        marginRight: '2px',
        backgroundColor: '#E0E0E0',
        '& .MuiLinearProgress-bar': { backgroundColor: '#4338CA' }
    },

    imgCircle: {
        maxWidth: '100%',
        height: 'auto',
    },
    imageData: {
        height: "150px",
        overflowX: 'hidden',
        // WebKit browsers
        scrollbarWidth: 'thin',
        scrollbarColor: '#888 transparent',
        // Firefox
    },
    imageDataMore: {
        maxHeight: "150px",
        overflowY: "auto",
        overflowX: 'hidden',
        // WebKit browsers
        scrollbarWidth: 'thin',
        scrollbarColor: '#888 transparent',
        // Firefox
    },
    webkitScrollbar: {
        '::-webkit-scrollbar': {
            width: '4px', /* Thin scrollbar width */
        },
        '::-webkit-scrollbar-track': {
            background: 'transparent', /* Track background */
        },
        '::-webkit-scrollbar-thumb': {
            background: '#888', /* Scrollbar thumb color */
            borderRadius: '2px', /* Rounded corners for the scrollbar */
        },
        '::-webkit-scrollbar-thumb:hover': {
            background: '#555', /* Darker color on hover */
        }
    }
}
export {
    styles
}
