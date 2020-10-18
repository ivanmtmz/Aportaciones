import React from "react";

//MATERIAL UI
import { Typography, Button } from "@material-ui/core";

//HOOKS
import useCounter from "../hooks/useCounter";

const ExampleCounterHooks = props => {
  const { initCounter } = props;
  //DESTRUCTURING PARA ACCEDER A LOS DATOS QUE RETORNA EL HOOK
  const [count, increase, decrease] = useCounter(initCounter);

  //SE RETORNA EL UI CON LAS FUNCIONALIDADES Y VARIABLES DEL HOOK
  return (
    <div className="flex w-full  flex-col">
      <div className="flex justify-center">
        <Typography className="text-32">Contador (Hooks): {count}</Typography>
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
  );
};

export default ExampleCounterHooks;