import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, useMediaQuery } from "@material-ui/core";
import { Link } from "react-scroll";
import Image from "next/image";

import Modal from "../components/Modal";

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
        [theme.breakpoints.down("lg")]: {
            width: "80%",
        },
        [theme.breakpoints.down("md")]: {
            width: "100%",
            height: "100%",
        },
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
        marginLeft: "5%",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    logoImgMob: {
        width: "25%",
    },
    mainImg: {
        height: "90vh",
        borderRadius: "5px",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    secondaryImg: {
        position: "absolute",
        marginLeft: "-27%",
        marginTop: "-12%",
        borderRadius: "5px",
        // marginLeft: "-25%",
        width: 450,
        height: 350,
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
        [theme.breakpoints.down("lg")]: {
            marginLeft: "-37%",
            marginTop: "-10%",
        },
    },
    secondaryImgContainer: {},
    logoText: {
        marginTop: "10%",
        marginLeft: "5%",
        [theme.breakpoints.down("md")]: {
            marginTop: 0,
        },
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
        width: "auto",
        position: "absolute",
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "1%",
        zIndex: 1,
        marginLeft: "17%",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    contactInfoMob: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    contact: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // width: "35%",
        // marginRight: "5%",
    },

    number: {
        color: "white",
    },
    numberMob: {
        color: "black",
        fontSize: 15,
    },
    btnWrapper: {
        display: "flex",
        alignItems: "center",

        // justifyContent: "space-between",
    },
    btnMain: {
        marginLeft: "5%",
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
        marginTop: "10px",
        // "&:hover": {
        //     backgroundColor: "transparent",
        //     color: "black",
        // },
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
        // "&:hover": {
        //     backgroundColor: "white",
        //     color: "black",
        // },
    },
    mainInfo: {
        height: 450,
        width: 500,
        background: "#B48D6E",
        position: "absolute",
        marginTop: "-15%",
        marginLeft: "-7%",
        borderRadius: "5px",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    btnWhite: {
        color: "white",
        // "&:hover": {
        //     backgroundColor: "white",
        //     color: "black",
        // },
    },
    info: {
        margin: "15% 20%",
    },
    textInfo: {
        fontFamily: "Bodoni Moda",
        fontStyle: "bold",
        fontSize: 25,
        opacity: 0.8,
    },
    // textInfoHeading: {
    //     opacity: 0.8,
    // },
    hr: {
        border: "1px solid #EEE8AA",
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.main}>
                <div className={classes.logo}>
                    <img
                        // width={"80px"}
                        // height={"200px"}
                        src='/../static/logo_transparent.png'
                        className={classes.logoImg}
                    />
                    <div className={classes.contactInfoMob}>
                        <div className={classes.logoImgMob}>
                            <Image
                                width={"100px"}
                                height={"100px"}
                                src='/static/logo_transparent.png'
                            />
                        </div>

                        <div className={classes.contact}>
                            <Typography
                                variant='h5'
                                className={classes.numberMob}
                            >
                                8 (903) 898-09-06
                            </Typography>
                            {/* <Button className={classes.btnMain}>
                                <Typography
                                    className={classes.textBtn}
                                    variant='subtitle2'
                                >
                                    Связаться с нами
                                </Typography>
                                {/* Связаться с нами */}
                            {/* </Button> */}
                        </div>
                    </div>
                    <div className={classes.logoText}>
                        <Typography className={classes.text} variant='h3'>
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
                            <Modal
                                title={"Получить консультацию"}
                                style={{
                                    backgroundColor: "#B66D31",
                                }}
                            />
                            <Link
                                to='portfolio'
                                smooth={true}
                                duration={1000}
                                className={classes.btnMain}
                            >
                                <Button className={classes.btnWhite}>
                                    <Typography
                                        className={classes.textBtn}
                                        variant='subtitle2'
                                    >
                                        Портфолио
                                    </Typography>
                                    {/* Связаться с нами */}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={classes.contactInfo}>
                        <div className={classes.contact}>
                            <Typography variant='h5' className={classes.number}>
                                8 (903) 898-09-06
                            </Typography>
                            <Modal
                                title={"Связаться с нами"}
                                style={{
                                    backgroundColor: "black",
                                    border: "1px solid black",
                                }}
                            />
                        </div>
                    </div>
                    <div className={classes.mainImg}>
                        <Image
                            src='/static/mainIMG.jpeg'
                            width={"1100px"}
                            height={"1600px"}
                        />
                    </div>
                    <div className={classes.mainInfo}>
                        <div className={classes.info}>
                            <Typography style={{ opacity: 0.8 }} variant='h4'>
                                Поможем воплотить идеи в реальность
                            </Typography>
                            <hr className={classes.hr} />
                            <Typography
                                className={classes.textInfo}
                                variant='subtitle2'
                            >
                                Полный цикл производства и услуг.
                            </Typography>
                            <Typography
                                className={classes.textInfo}
                                variant='subtitle2'
                            >
                                Более 20 лет на рынке!
                            </Typography>
                            <Typography
                                className={classes.textInfo}
                                variant='subtitle2'
                            >
                                Гарантия год!
                            </Typography>
                        </div>
                    </div>
                    <div className={classes.secondaryImgContainer}>
                        <div className={classes.secondaryImg}>
                            <Image
                                width={"500px"}
                                height={"400px"}
                                src='/static/mainTable.jpeg'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
