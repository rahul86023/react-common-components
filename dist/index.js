import { jsx } from 'react/jsx-runtime';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".Header-module_header__63EAz {\r\n  padding: 1rem;\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n  color: #333;\r\n}\r\n";
var styles$2 = {"header":"Header-module_header__63EAz"};
styleInject(css_248z$2);

const Header = ({ title = 'Default Header', backgroundColor = '#f5f5f5', }) => {
    return (jsx("header", { className: styles$2.header, style: { backgroundColor }, children: jsx("h1", { children: title }) }));
};

var css_248z$1 = ".Footer-module_footer__i1qhV {\r\n  padding: 1rem;\r\n  text-align: center;\r\n  font-size: 1rem;\r\n  color: #555;\r\n}\r\n";
var styles$1 = {"footer":"Footer-module_footer__i1qhV"};
styleInject(css_248z$1);

const Footer = ({ text = 'Default Footer', backgroundColor = '#e0e0e0', }) => {
    return (jsx("footer", { className: styles$1.footer, style: { backgroundColor }, children: jsx("p", { children: text }) }));
};

var css_248z = ".Sidebar-module_sidebar__fN2fi {\r\n  padding: 1rem;\r\n  width: 200px;\r\n  background-color: #f0f0f0;\r\n}\r\n\r\n.Sidebar-module_sidebar__fN2fi ul {\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n.Sidebar-module_sidebar__fN2fi li {\r\n  padding: 0.5rem 0;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n";
var styles = {"sidebar":"Sidebar-module_sidebar__fN2fi"};
styleInject(css_248z);

const Sidebar = ({ items = ['Home', 'About'], backgroundColor = '#f0f0f0' }) => {
    return (jsx("aside", { className: styles.sidebar, style: { backgroundColor }, children: jsx("ul", { children: items.map((item, idx) => (jsx("li", { children: item }, idx))) }) }));
};

export { Footer, Header, Sidebar };
