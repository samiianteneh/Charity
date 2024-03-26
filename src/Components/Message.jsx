/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { messageNull } from "../Store";
import Notification from "./Notification";

function Message(props) {
  const handleNotificationShow = (type, msg, detail) => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      {
        id: Date.now(),
        type: type,
        position: "top-left",
        title: msg,
        detail: detail,
      },
    ]);
  };
  const handleNotificationClose = () => {
    setNotifications([]);
  };

  const handleSingleNotificationClose = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  useEffect(() => {
    if (props.visible) {
      handleNotificationShow(props.type, props.msg, "");
    } else {
      handleNotificationClose();
    }
  }, [props.visible]);

  const [notifications, setNotifications] = useState([]);

  return (
    <>
      <Notification
        handleNotificationClose={handleSingleNotificationClose}
        notifications={notifications}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    visible: state.messageReducer.msgVisible,
    msg: state.messageReducer.msg,
    title: state.messageReducer.msgTitle,
    type: state.messageReducer.msgType,
    userType: state.messageReducer.msgUserType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    messageNull: () => dispatch(messageNull()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);
