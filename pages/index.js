import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import Slider from "../components/Slider";

const useStyles = makeStyles((theme) => ({
    root: {},
}));

export default function Index() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <Slider />
        </div>
    );
}
