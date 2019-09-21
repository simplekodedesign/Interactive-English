  alert(numero_leccion + "master");
  const color = [
    "rgb(248, 206, 0)",
    "rgb(237, 112, 41)",
    "rgb(233, 79, 136)",
    "rgb(0, 184, 231)",
    "rgb(0, 123, 191)",
    "rgb(148, 145, 198)",
    "rgb(0, 172, 146)"
  ];

  let svgcolor = numero_leccion-1;
  if (svgcolor >= 7) {
    svgcolor%= 7;
  }

  document.documentElement.style.setProperty('--lesson', color[svgcolor]);
