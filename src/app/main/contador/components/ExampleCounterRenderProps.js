import React from "react";

//MATERIAL UI
import { Typography, Button } from "@material-ui/core";

//RENDER PROPS
import CounterRenderProps from "../renderprops/CounterRenderProps";

const ExampleCounterRenderProps = props => {
  const { initCounter } = props;

  return (
    <CounterRenderProps initCounter={initCounter}>
      {({ count, increase, decrease }) => (
        <div className="flex w-full  flex-col">
          <div className="flex justify-center">
            <Typography className="text-32">
              Contador (Render Props): {count}
            </Typography>
          </div>

          <div className="flex justify-center">
            <Button
              color="primary"
              variant="contained"
              onClick={increase}
              className="mx-16"
            >
              Incrementar
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={decrease}
              className="mx-16"
            >
              Decrementar
            </Button>
          </div>
        </div>
      )}
    </CounterRenderProps>
  );
};

export default ExampleCounterRenderProps;
