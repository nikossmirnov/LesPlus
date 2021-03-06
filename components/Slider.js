import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import Heading from "../heading.png";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30vh",
        flexDirection: "column",
        [theme.breakpoints.down("md")]: {
            margin: "5%",
            width: "90%",
        },
    },
    heading: {
        display: "flex",
        width: "70%",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "-5%",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
    },
    headingLogo: {
        width: "22%",
        height: "15%",
    },
    headingText: {
        fontFamily: "Bodoni Moda",
        fontStyle: "bold",
        fontSize: 25,
        display: "flex",
        [theme.breakpoints.down("md")]: {
            fontSize: 15,
            fontFamily: "Bodoni Moda",
            fontStyle: "bold",
            display: "none",
        },
    },
    headingTextMob: {
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: 15,
            fontFamily: "Bodoni Moda",
            fontWeight: 500,
        },
    },
    btnWrapper: {
        display: "flex",
        alignItems: "center",
        width: "70%",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
    },
    textBtn: {},
    btnMain: {
        backgroundColor: "white",
        borderColor: "#B66D31",
        border: "1px solid",
        color: "black",
        height: "50px",
        display: "flex",
        justifyContent: "space-around",
        fontFamily: "Bodoni Moda",
        borderRadius: 3,
        padding: "4% 10%",
        marginTop: "5%",
        // "&:hover": {
        //     backgroundColor: "#B66D31",
        //     color: "black",
        // },
    },
    slider: {
        display: "flex",
        justifyContent: "space-around",
        width: "80vw",
        margin: "3% auto",
        [theme.breakpoints.down("md")]: {
            width: "100%",
            margin: 0,
        },
    },
    img: {
        // width: "20%",
        // height: "40%",
        margin: "1%",
        [theme.breakpoints.down("md")]: {
            // width: "30%",
        },
    },
    sliderItems: {
        display: "flex",
        justifyContent: "center",
        // alignItems: '',
        flexWrap: "wrap",

        height: "100%",
        width: "80vw",
        [theme.breakpoints.down("md")]: {
            width: "100vw",
        },
    },
    textBtn: {
        [theme.breakpoints.down("md")]: {
            fontSize: 10,
        },
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [les, setLes] = useState(true);
    const [kitchen, setKitchen] = useState(false);
    const [other, setOther] = useState(false);
    const [floor, setFloor] = useState(false);

    console.log(les);
    // useEffect(() => {
    //     setLes(!les);
    // }, []);
    const handleLes = () => {
        setLes(true);
        setKitchen(false);
        setOther(false);
        setFloor(false);
    };
    const handleKitchen = () => {
        setLes(false);
        setKitchen(true);
        setOther(false);
        setFloor(false);
    };
    const handleOther = () => {
        setLes(false);
        setKitchen(false);
        setOther(true);
        setFloor(false);
    };
    const handleFloor = () => {
        setLes(false);
        setKitchen(false);
        setOther(false);
        setFloor(true);
    };

    return (
        <div className={classes.root} id='portfolio'>
            <div className={classes.heading}>
                <Typography className={classes.headingText}>
                    За 20 лет работы мы накопили бесценный багаж опыта и
                    научились делать мебель со смыслом
                </Typography>
                <Typography className={classes.headingTextMob}>
                    Полный цикл производства и услуг. Более 20 лет на рынке!
                    Гарантия год!
                </Typography>
                <img
                    src='/logo_transparent.png'
                    alt='heading'
                    className={classes.headingLogo}
                />
            </div>
            <div className={classes.btnWrapper}>
                <Button
                    className={classes.btnMain}
                    // style={{ marginRight: "5%" }}
                    onClick={handleLes}
                    style={{ backgroundColor: les ? "#B66D31" : "white" }}
                >
                    <Typography className={classes.textBtn} variant='subtitle2'>
                        Лестницы под заказ
                    </Typography>
                    {/* Связаться с нами */}
                </Button>
                <Button
                    className={classes.btnMain}
                    // style={{ marginRight: "5%" }}
                    onClick={handleKitchen}
                    style={{ backgroundColor: kitchen ? "#B66D31" : "white" }}
                >
                    <Typography className={classes.textBtn} variant='subtitle2'>
                        Кухни
                    </Typography>
                    {/* Связаться с нами */}
                </Button>
                <Button
                    className={classes.btnMain}
                    onClick={handleOther}
                    style={{ backgroundColor: other ? "#B66D31" : "white" }}
                >
                    <Typography className={classes.textBtn} variant='subtitle2'>
                        Столярные изделия
                    </Typography>
                </Button>
                <Button
                    className={classes.btnMain}
                    onClick={handleFloor}
                    style={{ backgroundColor: floor ? "#B66D31" : "white" }}
                >
                    <Typography className={classes.textBtn} variant='subtitle2'>
                        Циклевка полов
                    </Typography>
                </Button>
            </div>
            <div className={classes.slider}>
                {/* <Button>
                    <ChevronLeftIcon />
                </Button> */}
                {les && (
                    <div className={classes.sliderItems}>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"450px"}
                                className={classes.img}
                                src='/mainIMG.jpeg'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"450px"}
                                className={classes.img}
                                src='/p1.jpeg'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"450px"}
                                className={classes.img}
                                src='/p2.jpeg'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"450px"}
                                className={classes.img}
                                src='/P1030999.JPG'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"450px"}
                                className={classes.img}
                                src='/p3.jpeg'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"450px"}
                                className={classes.img}
                                src='/p4.jpeg'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"450px"}
                                className={classes.img}
                                src='/DSC01270.JPG'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"450px"}
                                className={classes.img}
                                src='/DSC01222.JPG'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"450px"}
                                className={classes.img}
                                src='/DSC01248.JPG'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"450px"}
                                className={classes.img}
                                src='/p5.jpeg'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"450px"}
                                className={classes.img}
                                src='/p6.jpeg'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"450px"}
                                className={classes.img}
                                src='/p7.jpeg'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"450px"}
                                className={classes.img}
                                src='/p8.jpeg'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"450px"}
                                className={classes.img}
                                src='/p9.jpeg'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"300px"}
                                className={classes.img}
                                src='/p10.jpeg'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"500px"}
                                className={classes.img}
                                src='/buk.JPG'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"350px"}
                                className={classes.img}
                                src='/p11.jpeg'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"350px"}
                                className={classes.img}
                                src='/p12.jpeg'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"250px"}
                                className={classes.img}
                                src='/p13.jpeg'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"300px"}
                                className={classes.img}
                                src='/100_2119.JPG'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"250px"}
                                className={classes.img}
                                src='/100_2122.JPG'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"250px"}
                                className={classes.img}
                                src='/p14.jpeg'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"250px"}
                                className={classes.img}
                                src='/DSC00192.JPG'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"250px"}
                                className={classes.img}
                                src='/DSC00162.JPG'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"550px"}
                                className={classes.img}
                                src='/p15.jpeg'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"450px"}
                                className={classes.img}
                                src='/p16.jpeg'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"500px"}
                                className={classes.img}
                                src='/p17.jpeg'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"550px"}
                                className={classes.img}
                                src='/p21.jpeg'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"200px"}
                                className={classes.img}
                                src='/p19.jpeg'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"250px"}
                                className={classes.img}
                                src='/p20.jpeg'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"250px"}
                                className={classes.img}
                                src='/p18.jpeg'
                            />
                        </div>
                    </div>
                )}

                {kitchen && (
                    <div className={classes.sliderItems}>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"300px"}
                                className={classes.img}
                                src='/kitchen/4.jpg'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"300px"}
                                className={classes.img}
                                src='/kitchen/2.jpeg'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"300px"}
                                className={classes.img}
                                src='/kitchen/1.jpeg'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"300px"}
                                className={classes.img}
                                src='/kitchen/3.jpeg'
                            />
                        </div>
                    </div>
                )}

                {other && (
                    <div className={classes.sliderItems}>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"250px"}
                                className={classes.img}
                                src='/furniture/4.jpeg'
                            />
                        </div>

                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"250px"}
                                className={classes.img}
                                src='/furniture/5.jpeg'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"250px"}
                                className={classes.img}
                                src='/furniture/6.jpeg'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"250px"}
                                className={classes.img}
                                src='/furniture/1.jpg'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"350px"}
                                className={classes.img}
                                src='/furniture/2.jpg'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"350px"}
                                className={classes.img}
                                src='/furniture/3.jpg'
                            />
                        </div>
                    </div>
                )}

                {floor && (
                    <div className={classes.sliderItems}>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"250px"}
                                className={classes.img}
                                src='/floor/1.JPG'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"250px"}
                                className={classes.img}
                                src='/floor/2.JPG'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"250px"}
                                className={classes.img}
                                src='/floor/3.JPG'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"250px"}
                                className={classes.img}
                                src='/floor/4.JPG'
                            />
                        </div>
                        <div className={classes.img}>
                            <Image
                                width={"350px"}
                                height={"250px"}
                                className={classes.img}
                                src='/floor/5.JPG'
                            />
                        </div>
                    </div>
                )}

                {/* <Button>
                    <ChevronRightIcon />
                </Button> */}
            </div>
        </div>
    );
}
