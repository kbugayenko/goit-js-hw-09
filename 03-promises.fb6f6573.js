!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("iU1Pc");function a(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}function u(e){var n=e.position,t=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))}function c(e){var n=e.position,t=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var n=Number(e.currentTarget.delay.value),t=Number(e.currentTarget.step.value),o=Number(e.currentTarget.amount.value);for(i=1;i<=o;i+=1)a(i,n).then(u).catch(c),n+=t}))}();
//# sourceMappingURL=03-promises.fb6f6573.js.map