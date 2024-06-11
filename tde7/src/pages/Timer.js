/*Crie um componente chamado Timer. 
Use useState para criar um estado chamado seconds, 
inicializado em 0. 
Use useEffect para iniciar um temporizador que incrementa o valor de seconds a cada segundo. 

Dica: pesquisar pela função do JS setInterval (ela é similar ao setTimeout)*/
import React, { useState, useEffect } from "react";
import "./Timer.css";
export const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return <div className="seconds">{seconds}</div>
};
