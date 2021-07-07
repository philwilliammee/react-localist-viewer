import React from "react";
import { useTransition, animated, config } from "react-spring/web.cjs";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import PropTypes from "prop-types";
import "@reach/dialog/styles.css";
import "./ModalDialog.scss";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";

let AnimatedDialogOverlay = animated(DialogOverlay);
let AnimatedDialogContent = animated(DialogContent);

const transitionKeys = {
  from: { opacity: 0, y: -10 },
  enter: { opacity: 1, y: 0 },
  leave: { opacity: 0, y: 10 },
  config: config.stiff,
};

interface Props {
  showDialog: boolean;
  setShowDialog: (state: boolean) => void;
  children?: React.ReactNode;
}
function ModalDialog(props: Props) {
  // const [showDialog, setShowDialog] = useState(false);
  const transitions = useTransition(props.showDialog, null, transitionKeys);
  return (
    <div className="cwd-events-modal-dialog">
      {transitions.map(
        ({ item, props: styles, key }) =>
          item && (
            // @todo fix this https://github.com/pmndrs/react-spring/issues/1283
            // @ts-ignore: next line
            <AnimatedDialogOverlay
              key={key}
              style={{ opacity: styles.opacity }}
              onDismiss={() => props.setShowDialog(false)}
            >
              {
                // @ts-ignore: next line
                <AnimatedDialogContent
                  aria-label="The selected event dialog"
                  style={{
                    // @ts-ignore: next line
                    // transform: styles.y.interpolate(
                    //   (value: string) => `translate3d(0px, ${value}px, 0px)`
                    // ),
                    border: "4px solid hsla(0, 0%, 0%, 0.5)",
                    borderRadius: 10,
                    minHeight: 300,
                  }}
                >
                  {/* <button
                    className="close"
                    style={{ float: "right", padding: "2px 5px" }}
                    onClick={() => props.setShowDialog(false)}
                    aria-label="close dialog"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                    >
                      <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                    </svg>
                  </button> */}
                  <IconButton
                    style={{ float: "right" }}
                    onClick={() => props.setShowDialog(false)}
                    aria-label="close dialog"
                  >
                    <CloseIcon />
                  </IconButton>
                  {props.children}
                </AnimatedDialogContent>
              }
            </AnimatedDialogOverlay>
          )
      )}
    </div>
  );
}

ModalDialog.propTypes = {
  showDialog: PropTypes.bool.isRequired,
  setShowDialog: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default ModalDialog;
