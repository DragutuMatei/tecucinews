/* eslint-disable no-sequences */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

function jegosenie(){
    "use strict";
      const e = (e, t = !1) => (
        (e = e.trim()),
        t ? [...document.querySelectorAll(e)] : document.querySelector(e)
      );
      // eslint-disable-next-line no-undef
      GLightbox({ selector: ".glightbox" });
      window.addEventListener("load", () => {
        let t = e(".portfolio-container");
        if (t) {
          let o = new Isotope(t, {
              itemSelector: ".portfolio-item",
              layoutMode: "fitRows",
            }),
            i = e("#portfolio-flters li", !0);
          ((t, o, i, l = !1) => {
            let r = e(o, l);
            r &&
              (l
                ? r.forEach((e) => e.addEventListener(t, i))
                : r.addEventListener(t, i));
          })(
            "click",
            "#portfolio-flters li",
            function (e) {
              e.preventDefault(),
                i.forEach(function (e) {
                  e.classList.remove("filter-active");
                }),
                this.classList.add("filter-active"),
                o.arrange({ filter: this.getAttribute("data-filter") }),
                o.on("arrangeComplete", function () {
                  AOS.refresh();
                });
            },
            !0
          );
        }
      });
      GLightbox({ selector: ".portfolio-lightbox" });
      new Swiper(".portfolio-details-slider", {
        speed: 400,
        loop: !0,
        autoplay: { delay: 5e3, disableOnInteraction: !1 },
        pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 },
      });
  }
