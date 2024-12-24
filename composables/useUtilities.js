export function useUtilities() {
  const getElById = (id) => {
    return id ? document.getElementById(id) : "";
  };
  const scrollInOutAnimation = (id, plus) => {
    // const controller = new ScrollMagic.Controller();
    // const targetHeight = getElById(id).clientHeight + plus;

    // new ScrollMagic.Scene({
    //   triggerElement: "#" + id,
    //   duration: targetHeight,
    // })
    //   .setClassToggle("#" + id, "fade-in")
    //   .addTo(controller);
  };
  return {
    getElById,
    scrollInOutAnimation,
  };
}
