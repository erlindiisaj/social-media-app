import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { Typography, Divider } from "@mui/material";
import { deleteAccount } from "../../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/user.context";

export default function DeleteConfirmation() {
  const { user } = React.useContext(userContext);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      deleteAccount(user);
      setOpen(false);
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <Button
        style={{
          height: "40px",
          borderRadius: "12px",
        }}
        color="error"
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={handleClickOpen}
      >
        Delete Account
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography fontWeight={600} startIcon={<WarningRoundedIcon />}>
            Confirmation
          </Typography>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete your account?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="black" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleDelete}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
