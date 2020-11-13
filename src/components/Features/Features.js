import React from 'react';
import Feature from './Feature';
import './Features.css';


const Features = () => {
  return (
    <div className="features">
      <div className="features__header">
      <h2>Professionally crafted shopping cart platform</h2>
      <p>For big & small businesses alike.</p>
      </div>
      <Feature left="left"/>
      <Feature />
      <Feature left="left"/>
    </div>
  )
};

export default Features;








































// makeSectionActive = function () {
//   var u, f, i;
//   if (Anzeixer.isDesktop()) {
//     var n = $(".stretchable-section.active"),
//       e = $(window).scrollTop() + $(window).height() / 1.5,
//       r = 1e3,
//       t;
//     $(".stretchable-section").each(function () {
//       $(this).offset().top <= e && (t = $(this));
//     });
//     t
//       ? (t.data("stretch") === n.data("stretch") && n) ||
//         ((i = t[0].style),
//         i.removeAttribute
//           ? i.removeAttribute("background-color")
//           : i.removeProperty("background-color"),
//         (u = t.css("background-color")),
//         n.removeClass("active"),
//         t.addClass("active"),
//         (f = t.css("background-color")),
//         t.attr("data-inactive", u),
//         t.attr("data-active", f),
//         n.css({ backgroundColor: n.attr("data-active") }),
//         t.css({ backgroundColor: u }),
//         n.animate({ backgroundColor: n.attr("data-inactive") }, r),
//         t.animate({ backgroundColor: f }, r))
//       : n &&
//         (n.removeClass("active"),
//         n.css({ backgroundColor: n.attr("data-active") }),
//         n.animate({ backgroundColor: n.attr("data-inactive") }, r));
//   }
// }