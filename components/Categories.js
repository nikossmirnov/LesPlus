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
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return <div className={classes.root}></div>;
}
