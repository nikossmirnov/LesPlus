import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
// import Heading from "../static/heading.png";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50vh",
        flexDirection: "column",
    },
    heading: {
        display: "flex",
        width: "60%",
        justifyContent: "space-around",
        alignItems: "center",
    },
    headingLogo: {
        width: "25%",
        height: "15%",
    },
    headingText: {
        fontFamily: "Bodoni Moda",
        fontStyle: "bold",
        fontSize: 25,
        display: "flex",
    },
    btnWrapper: {
        display: "flex",
        alignItems: "center",
        width: "50%",
        justifyContent: "center",
    },
    textBtn: {},
    btnMain: {
        backgroundColor: "white",
        borderColor: "#B66D31",
        border: "1px solid",
        color: "black",
        height: "70px",
        display: "flex",
        justifyContent: "space-around",
        fontFamily: "Bodoni Moda",
        borderRadius: 3,
        padding: "5% 10%",
        marginTop: "5%",
        "&:hover": {
            backgroundColor: "white",
            color: "black",
        },
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.heading}>
                <Typography className={classes.headingText}>
                    За 20 лет работы мы накопили бесценный багаж опыта и
                    научились делать мебель со смыслом
                </Typography>
                <img
                    src='../static/logo_transparent.png'
                    alt='heading'
                    className={classes.headingLogo}
                />
            </div>
            <div className={classes.btnWrapper}>
                <Button
                    className={classes.btnMain}
                    // style={{ marginRight: "5%" }}
                >
                    <Typography className={classes.textBtn} variant='subtitle2'>
                        Лестницы под заказ
                    </Typography>
                    {/* Связаться с нами */}
                </Button>
                <Button
                    className={classes.btnMain}
                    // style={{ marginRight: "5%" }}
                >
                    <Typography className={classes.textBtn} variant='subtitle2'>
                        Кухни
                    </Typography>
                    {/* Связаться с нами */}
                </Button>
                <Button className={classes.btnMain}>
                    <Typography className={classes.textBtn} variant='subtitle2'>
                        Столярные изделия
                    </Typography>
                </Button>
                <Button className={classes.btnMain}>
                    <Typography className={classes.textBtn} variant='subtitle2'>
                        Циклевка полов
                    </Typography>
                </Button>
            </div>
        </div>
    );
}
