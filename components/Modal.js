import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

const useStyles = makeStyles((theme) => ({
    // root: {
    //     margin: 0,
    //     padding: theme.spacing(2),
    // },
    // closeButton: {
    //     position: "absolute",
    //     right: theme.spacing(1),
    //     top: theme.spacing(1),
    //     color: theme.palette.grey[500],
    // },
    btn: {
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
    textBtn: {
        fontFamily: "Bodoni Moda",
        fontSize: 12,
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    item: {
        margin: "5%",
    },
}));

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant='h6'>{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label='close'
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function CustomizedDialogs({ title, style }) {
    console.log(title);
    const [open, setOpen] = React.useState(false);

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");

    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    let data = {
        name,
        email,
        phone,
    };
    const handleClose = () => {
        setOpen(false);
        init("user_oHsSoeZSR0bCDigKvVYe7");

        emailjs.send("service_z3c98r8", "template_6mhrn4n", data).then(
            function (response) {
                console.log(response.status, response.text);
            },
            function (err) {
                console.log(err);
            }
        );
    };

    return (
        <div>
            <Button
                // variant='outlined'
                // color='primary'
                onClick={handleClickOpen}
                className={classes.btn}
                style={style}
            >
                <Typography className={classes.textBtn} variant='subtitle2'>
                    {title}
                </Typography>
            </Button>
            <Dialog
                onClose={handleClose}
                aria-labelledby='customized-dialog-title'
                open={open}
                // style={{ margin: "5%" }}
            >
                <DialogTitle
                    id='customized-dialog-title'
                    onClose={handleClose}
                    style={{ margin: "7% 0% 0% 0%" }}
                >
                    Получить консультацию специалиста
                </DialogTitle>
                <form className={classes.form} autoComplete='off'>
                    <TextField
                        id='outlined-basic'
                        label='Имя'
                        variant='outlined'
                        className={classes.item}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <TextField
                        id='outlined-basic'
                        label='Почта'
                        variant='outlined'
                        className={classes.item}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />{" "}
                    <TextField
                        id='outlined-basic'
                        label='Номер телефона'
                        variant='outlined'
                        className={classes.item}
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                    />
                </form>
                <DialogActions>
                    <Button
                        autoFocus
                        onClick={handleClose}
                        color='primary'
                        style={{ color: "black" }}
                        type='submit'
                    >
                        Отправить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
