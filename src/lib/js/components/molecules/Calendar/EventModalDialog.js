import React from "react";
import { useTransition, animated, config } from "react-spring/web.cjs";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

let AnimatedDialogOverlay = animated(DialogOverlay);
let AnimatedDialogContent = animated(DialogContent);

function EventModal(props) {
  // const [showDialog, setShowDialog] = useState(false);
  const transitions = useTransition(props.showDialog, null, {
    from: { opacity: 0, y: -10 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 10 },
    config: config.stiff,
  });
  return (
    <div>
      {transitions.map(
        ({ item, props: styles }) =>
          item && (
            <AnimatedDialogOverlay
              key={item}
              style={{ opacity: styles.opacity }}
              onDismiss={() => props.setShowDialog(false)}
            >
              <AnimatedDialogContent
                aria-label="The selected event dialog"
                style={{
                  transform: styles.y.interpolate(
                    (value) => `translate3d(0px, ${value}px, 0px)`
                  ),
                  border: "4px solid hsla(0, 0%, 0%, 0.5)",
                  borderRadius: 10,
                  minHeight: 300,
                }}
              >
                <button
                  style={{ float: "right" }}
                  onClick={() => props.setShowDialog(false)}
                  aria-label="close dialog"
                >
                  X
                </button>
                {props.children}
              </AnimatedDialogContent>
            </AnimatedDialogOverlay>
          )
      )}
    </div>
  );
}

export default EventModal;
