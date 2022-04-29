const loadFiltre = (callback) => {
    const existingScript = document.getElementById('hadeTatiii');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = './assets/js/Portfolio-with-Category-switcher.min.js';
      script.id = 'hadeTatiii';
      document.body.appendChild(script);
      script.onload = () => { 
        if (callback) callback();
      };
    }
    if (existingScript && callback) callback();
  };
  export default loadFiltre;