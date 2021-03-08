import React from "react";
import { useTransition, animated, config } from "react-spring/web.cjs";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import PropTypes from "prop-types";
import "@reach/dialog/styles.css";
import "./ModalDialog.scss";

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
                  <button
                    className="close"
                    style={{ float: "right", padding: "2px 5px" }}
                    onClick={() => props.setShowDialog(false)}
                    aria-label="close dialog"
                  >
                    <span className="icon-close"></span>
                  </button>
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
