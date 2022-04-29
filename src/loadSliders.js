const loadSlider = (callback) => {
    const existingScript = document.getElementById('astaEDemoNebun');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = './assets/js/demo.min.js';
      script.id = 'astaEDemoNebun';
      document.body.appendChild(script);
      script.onload = () => { 
        if (callback) callback();
      };
    }
    if (existingScript && callback) callback();
  };
  export default loadSlider;