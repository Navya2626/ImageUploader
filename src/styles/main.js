

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
    profileCard: {
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
            width: '20%',
            backgroundColor: 'black',
            marginTop: '-6%',
            marginLeft: '20%'
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
        height: 290,
        position: 'relative',
        width: '230px',
        height: '290px',
        left: '30px',
        gap: '0px',
        opacity: '1',
        overflow: 'hidden'
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
    profileImage: {
        width: '150px',
        height: '150px',
        clipPath: 'circle(50%)',
        borderColor: 'white',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '-18%',
        marginLeft:'2%',
        "@media only screen and (max-width: 450px)": {
            width: '100%',
            marginLeft: '0%',
            marginTop: '-28%',
        },
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
        borderColor: '#E5E5E5',
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
    imageData: {
        height: "150px",
        overflowX: 'hidden',
        scrollbarWidth: 'thin',
        scrollbarColor: '#888 transparent',
    },
    imageDataMore: {
        maxHeight: "150px",
        overflowY: "auto",
        overflowX: 'hidden',
        scrollbarWidth: 'thin',
        scrollbarColor: '#888 transparent',
    },
    webkitScrollbar: {
        '::-webkit-scrollbar': {
            width: '2px',
        },
        '::-webkit-scrollbar-track': {
            background: 'transparent',
        },
        '::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '2px',
        },
        '::-webkit-scrollbar-thumb:hover': {
            background: '#555',
        }
    }
}
export {
    styles
}
