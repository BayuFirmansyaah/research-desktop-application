var TOC = /*#__PURE__*/function () {
  function TOC() {
    this.qnSetMainHeight = this.qnSetMainHeight.bind(this);
    this.init();
  }
  var _proto = TOC.prototype;
  _proto.qnSetMainHeight = function qnSetMainHeight() {
    var qnHeaderOffset = 0;
    var qnHeaders = document.querySelectorAll(".qn-header");
    qnHeaders.forEach(function (qnHeader) {
      qnHeaderOffset += qnHeader.offsetHeight;
    });
    var qnHeaderStickyOffset = 0;
    var qnHeaderStickies = document.querySelectorAll(".qn-header.sticky-top");
    qnHeaderStickies.forEach(function (qnHeaderSticky) {
      qnHeaderStickyOffset += qnHeaderSticky.offsetHeight;
    });
    var qnTocCollapses = document.querySelectorAll(".qn-toc-collapse");
    qnTocCollapses.forEach(function (qnTocCollapse) {
      document.querySelectorAll('.qn-toc').forEach(function (qnToc) {
        qnToc.style.setProperty('width', '');
        qnToc.style.setProperty('width', qnTocCollapse.offsetWidth - 1 + "px");
      });
    });
    document.body.style.setProperty('--qn-header-height', qnHeaderOffset + "px");
    document.body.style.setProperty('--qn-header-sticky-height', qnHeaderStickyOffset + "px");
  };
  _proto.init = function init() {
    this.qnSetMainHeight();
    document.addEventListener('DOMContentLoaded', this.qnSetMainHeight);
    window.addEventListener('resize', this.qnSetMainHeight);
  };
  return TOC;
}(); // Inisialisasi class setelah DOM siap
document.addEventListener('DOMContentLoaded', function () {
  new TOC();
});

var Breadcrumb = /*#__PURE__*/function () {
  function Breadcrumb() {
    this.qnSetStateFormBreadcrumb = this.qnSetStateFormBreadcrumb.bind(this);
    this.init();
  }
  var _proto = Breadcrumb.prototype;
  _proto.qnSetStateFormBreadcrumb = function qnSetStateFormBreadcrumb() {
    var qnFormBreadcrumbs = document.querySelectorAll('.qn-form-breadcrumb');
    qnFormBreadcrumbs.forEach(function (qnFormBreadcrumb) {
      var bsBreakpoint = parseInt(getComputedStyle(document.body).getPropertyValue('--bs-breakpoint-xl') || 0);
      if (window.innerWidth > bsBreakpoint) {
        var qnFormHeaderBreadcrumbOffset = parseInt(getComputedStyle(qnFormBreadcrumb).getPropertyValue('--qn-form-breadcrumb-tolerance') || 0);
        var qnHeaderHeight = parseInt(getComputedStyle(document.body).getPropertyValue('--qn-header-height') || 0);
        if (window.scrollY > qnHeaderHeight + qnFormHeaderBreadcrumbOffset) {
          qnFormBreadcrumb.classList.remove('opacity-0');
        } else {
          qnFormBreadcrumb.classList.add('opacity-0');
        }
      } else {
        qnFormBreadcrumb.classList.remove('opacity-0');
      }
    });
  };
  _proto.init = function init() {
    this.qnSetStateFormBreadcrumb();
    document.addEventListener('DOMContentLoaded', this.qnSetStateFormBreadcrumb);
    window.addEventListener('resize', this.qnSetStateFormBreadcrumb);
    window.addEventListener('scroll', this.qnSetStateFormBreadcrumb);
  };
  return Breadcrumb;
}(); // Initialize the class after DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  new Breadcrumb();
});

export { Breadcrumb, TOC };
//# sourceMappingURL=quantum.esm.js.map
