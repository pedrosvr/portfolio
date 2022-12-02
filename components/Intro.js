import {useEffect, useState} from "react";

export default function Intro() {
  const [classes,setClasses] = useState('');

  useEffect(() => {
    setClasses('visible');
  }, []);

  return (
    <section id="intro" className={classes}>
      <div>
        <p>Olá, me chamo João Pedro Saraiva,<br />sou <span>Desenvolvedor Front-end</span><br />apaixonado por tecnologia.</p>
        <a href="">Currículo</a>
      </div>
      <div>
        <img src="/img/me.jpg" alt=""/>
      </div>
    </section>
  );
}