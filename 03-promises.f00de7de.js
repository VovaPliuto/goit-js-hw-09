!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("h6c0i"),i={formEl:document.querySelector(".form")},l=1;function a(e,o){var n=Math.random()>.3;return new Promise((function(t,r){setTimeout((function(){n?t({position:e,delay:o}):r({position:e,delay:o})}),o)}))}i.formEl.addEventListener("submit",(function(e){e.preventDefault();for(var o=Number(i.formEl.delay.value),n=Number(i.formEl.step.value),t=Number(i.formEl.amount.value),u=0;u<t;u+=1)a(l,o).then((function(e){var o=e.position,n=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;r.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))})),o+=n,l+=1;l=1}))}();
//# sourceMappingURL=03-promises.f00de7de.js.map