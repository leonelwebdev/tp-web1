const boton = document.getElementById("botonTema");

boton.addEventListener("click", () => {
  // Si está en celeste, pasamos a rosa
  if (document.body.classList.contains("tema-celeste")) {
    document.body.classList.remove("tema-celeste");
    document.body.classList.add("tema-rosa");
  } else {
    // Si está en rosa, volvemos a celeste
    document.body.classList.remove("tema-rosa");
    document.body.classList.add("tema-celeste");
  }
});