import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    main: {
        width: "60%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "90vh",
    },
    logo: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        // width: "20%",
    },
    logoImg: {
        width: "25%",
        height: "15%",
    },
    mainImg: {
        height: "90vh",
        borderRadius: "5px",
    },
    secondaryImg: {
        position: "absolute",
        borderRadius: "5px",
        marginLeft: "-25%",
        width: 450,
        height: 350,
    },
    secondaryImgContainer: {},
    logoText: {
        marginTop: "10%",
        marginLeft: "5%",
    },
    text: {
        fontFamily: "Bodoni Moda",
        margin: "5% 0%",
    },
    textBtn: {
        fontFamily: "Bodoni Moda",
        fontSize: 12,
    },
    contactInfo: {
        fontFamily: "Bodoni Moda",
        width: "650px",
        position: "absolute",
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "1%",
    },
    contact: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "35%",
        marginRight: "5%",
    },

    number: {
        color: "white",
    },
    btnWrapper: {
        display: "flex",
        alignItems: "center",
    },
    btnMain: {
        backgroundColor: "black",
        borderColor: "black",
        border: "1px solid",
        color: "white",
        height: "40px",
        display: "flex",
        justifyContent: "space-around",
        fontFamily: "Bodoni Moda",
        borderRadius: "20px",
        padding: "0% 7%",
        marginTop: "5%",
        "&:hover": {
            backgroundColor: "transparent",
            color: "black",
        },
    },
    btnSecondary: {
        backgroundColor: "#B66D31",
        borderColor: "#B66D31",
        border: "1px solid",
        color: "white",
        height: "40px",
        display: "flex",
        justifyContent: "space-around",
        fontFamily: "Bodoni Moda",
        borderRadius: "20px",
        padding: "0% 7%",
        marginTop: "5%",
        "&:hover": {
            backgroundColor: "white",
            color: "black",
        },
    },
    mainInfo: {
        height: 500,
        width: 550,
        background: "#B48D6E",
        position: "absolute",
        marginTop: "-5%",
        marginLeft: "-5%",
        borderRadius: "5px",
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.main}>
                <div className={classes.logo}>
                    <img
                        src='../static/logo_transparent.png'
                        className={classes.logoImg}
                    />
                    <div className={classes.logoText}>
                        <Typography className={classes.text} variant='h2'>
                            СТОЛЯРНАЯ МАСТЕРСКАЯ ЛЕСТНИЦА ПЛЮС
                        </Typography>
                        <Typography
                            variant='h5'
                            className={classes.text}
                            style={{ width: "60%" }}
                        >
                            Качественные лестницы за честные деньги
                        </Typography>
                        <div className={classes.btnWrapper}>
                            <Button
                                className={classes.btnSecondary}
                                style={{ marginRight: "5%" }}
                            >
                                <Typography
                                    className={classes.textBtn}
                                    variant='subtitle2'
                                >
                                    Получить консультацию
                                </Typography>
                                {/* Связаться с нами */}
                            </Button>
                            <Button className={classes.btnMain}>
                                <Typography
                                    className={classes.textBtn}
                                    variant='subtitle2'
                                >
                                    Портфолио
                                </Typography>
                                {/* Связаться с нами */}
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={classes.contactInfo}>
                        <div className={classes.contact}>
                            <Typography variant='h5' className={classes.number}>
                                8 (903) 898-09-06
                            </Typography>
                            <Button className={classes.btnMain}>
                                <Typography
                                    className={classes.textBtn}
                                    variant='subtitle2'
                                >
                                    Связаться с нами
                                </Typography>
                                {/* Связаться с нами */}
                            </Button>
                        </div>
                    </div>
                    <img
                        src='../static/mainIMG.jpeg'
                        className={classes.mainImg}
                    />
                    <div className={classes.mainInfo}></div>
                    <div className={classes.secondaryImgContainer}>
                        <img
                            src='../static/mainTable.jpeg'
                            className={classes.secondaryImg}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
