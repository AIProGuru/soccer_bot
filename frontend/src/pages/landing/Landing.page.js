import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.page.scss";

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle toggle
  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the accordion if the current one is already active
    } else {
      setActiveIndex(index); // Open the clicked accordion
    }
  };

  const getStarted = () => {
    navigate("/entry"); // Navigate to the /entry route
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>AI-powered football coaching</title>
      <meta name="robots" content="max-image-preview:large" />
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <style
        dangerouslySetInnerHTML={{
          __html:
            'img:is([sizes="auto" i], [sizes^="auto," i]) { contain-intrinsic-size: 3000px 1500px }',
        }}
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="AI-powered football coaching » Feed"
        href="https://lawnwise.pllinvestmentsllc.com/feed/"
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="AI-powered football coaching » Comments Feed"
        href="https://lawnwise.pllinvestmentsllc.com/comments/feed/"
      />
      <link
        rel="stylesheet"
        id="elementor-frontend-css"
        href="https://lawnwise.pllinvestmentsllc.com/wp-content/plugins/elementor/assets/css/frontend.min.css?ver=3.28.0"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-11-css"
        href="https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/elementor/css/post-11.css?ver=1742934972"
        media="all"
      />
      <link
        rel="stylesheet"
        id="elementor-post-12-css"
        href="https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/elementor/css/post-12.css?ver=1742934972"
        media="all"
      />
      <style
        id="wp-emoji-styles-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            "\n\n\timg.wp-smiley, img.emoji {\n\t\tdisplay: inline !important;\n\t\tborder: none !important;\n\t\tbox-shadow: none !important;\n\t\theight: 1em !important;\n\t\twidth: 1em !important;\n\t\tmargin: 0 0.07em !important;\n\t\tvertical-align: -0.1em !important;\n\t\tbackground: none !important;\n\t\tpadding: 0 !important;\n\t}\n",
        }}
      />
      <style
        id="global-styles-inline-css"
        dangerouslySetInnerHTML={{
          __html:
            "\n:root{--wp--preset--aspect-ratio--square: 1;--wp--preset--aspect-ratio--4-3: 4/3;--wp--preset--aspect-ratio--3-4: 3/4;--wp--preset--aspect-ratio--3-2: 3/2;--wp--preset--aspect-ratio--2-3: 2/3;--wp--preset--aspect-ratio--16-9: 16/9;--wp--preset--aspect-ratio--9-16: 9/16;--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;--wp--preset--spacing--20: 0.44rem;--wp--preset--spacing--30: 0.67rem;--wp--preset--spacing--40: 1rem;--wp--preset--spacing--50: 1.5rem;--wp--preset--spacing--60: 2.25rem;--wp--preset--spacing--70: 3.38rem;--wp--preset--spacing--80: 5.06rem;--wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);--wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);--wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);--wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1);--wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);}:root { --wp--style--global--content-size: 800px;--wp--style--global--wide-size: 1200px; }:where(body) { margin: 0; }.wp-site-blocks > .alignleft { float: left; margin-right: 2em; }.wp-site-blocks > .alignright { float: right; margin-left: 2em; }.wp-site-blocks > .aligncenter { justify-content: center; margin-left: auto; margin-right: auto; }:where(.wp-site-blocks) > * { margin-block-start: 24px; margin-block-end: 0; }:where(.wp-site-blocks) > :first-child { margin-block-start: 0; }:where(.wp-site-blocks) > :last-child { margin-block-end: 0; }:root { --wp--style--block-gap: 24px; }:root :where(.is-layout-flow) > :first-child{margin-block-start: 0;}:root :where(.is-layout-flow) > :last-child{margin-block-end: 0;}:root :where(.is-layout-flow) > *{margin-block-start: 24px;margin-block-end: 0;}:root :where(.is-layout-constrained) > :first-child{margin-block-start: 0;}:root :where(.is-layout-constrained) > :last-child{margin-block-end: 0;}:root :where(.is-layout-constrained) > *{margin-block-start: 24px;margin-block-end: 0;}:root :where(.is-layout-flex){gap: 24px;}:root :where(.is-layout-grid){gap: 24px;}.is-layout-flow > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}.is-layout-flow > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}.is-layout-flow > .aligncenter{margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > .alignleft{float: left;margin-inline-start: 0;margin-inline-end: 2em;}.is-layout-constrained > .alignright{float: right;margin-inline-start: 2em;margin-inline-end: 0;}.is-layout-constrained > .aligncenter{margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > :where(:not(.alignleft):not(.alignright):not(.alignfull)){max-width: var(--wp--style--global--content-size);margin-left: auto !important;margin-right: auto !important;}.is-layout-constrained > .alignwide{max-width: var(--wp--style--global--wide-size);}body .is-layout-flex{display: flex;}.is-layout-flex{flex-wrap: wrap;align-items: center;}.is-layout-flex > :is(*, div){margin: 0;}body .is-layout-grid{display: grid;}.is-layout-grid > :is(*, div){margin: 0;}body{padding-top: 0px;padding-right: 0px;padding-bottom: 0px;padding-left: 0px;}a:where(:not(.wp-element-button)){text-decoration: underline;}:root :where(.wp-element-button, .wp-block-button__link){background-color: #32373c;border-width: 0;color: #fff;font-family: inherit;font-size: inherit;line-height: inherit;padding: calc(0.667em + 2px) calc(1.333em + 2px);text-decoration: none;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}\n:root :where(.wp-block-pullquote){font-size: 1.5em;line-height: 1.6;}\n",
        }}
      />
      
      <meta
        name="generator"
        content="Elementor 3.28.0; features: e_font_icon_svg, additional_custom_breakpoints, e_local_google_fonts, e_element_cache; settings: css_print_method-external, google_font-enabled, font_display-swap"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n\t\t\t\t.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload),\n\t\t\t\t.e-con.e-parent:nth-of-type(n+4):not(.e-lazyloaded):not(.e-no-lazyload) * {\n\t\t\t\t\tbackground-image: none !important;\n\t\t\t\t}\n\t\t\t\t@media screen and (max-height: 1024px) {\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload),\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+3):not(.e-lazyloaded):not(.e-no-lazyload) * {\n\t\t\t\t\t\tbackground-image: none !important;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t@media screen and (max-height: 640px) {\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload),\n\t\t\t\t\t.e-con.e-parent:nth-of-type(n+2):not(.e-lazyloaded):not(.e-no-lazyload) * {\n\t\t\t\t\t\tbackground-image: none !important;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t",
        }}
      />
      <div className="ekit-template-content-markup ekit-template-content-header ekit-template-content-theme-support">
        <div
          data-elementor-type="wp-post"
          data-elementor-id={11}
          className="elementor elementor-11"
          data-elementor-post-type="elementskit_template"
        >
          <div
            className="elementor-element elementor-element-ad84943 e-flex e-con-boxed e-con e-parent"
            data-id="ad84943"
            data-element_type="container"
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-859d42e e-con-full e-flex e-con e-child"
                data-id="859d42e"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-2ecd397 elementor-widget__width-initial elementor-widget elementor-widget-image"
                  data-id="2ecd397"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <img
                      fetchpriority="high"
                      width={398}
                      height={407}
                      src="https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/White-Black-Elegant-Concept-Football-Club-Logo-e1742489035652.png"
                      className="attachment-large size-large wp-image-34"
                      alt=""
                      srcSet="https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/White-Black-Elegant-Concept-Football-Club-Logo-e1742489035652.png 398w, https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/White-Black-Elegant-Concept-Football-Club-Logo-e1742489035652-293x300.png 293w"
                      sizes="(max-width: 398px) 100vw, 398px"
                    />{" "}
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-6e06608 e-con-full e-flex e-con e-child"
                data-id="6e06608"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-28c5ca3 elementor-widget elementor-widget-ekit-nav-menu"
                  data-id="28c5ca3"
                  data-element_type="widget"
                  data-widget_type="ekit-nav-menu.default"
                >
                  <div className="elementor-widget-container">
                    <nav
                      className="ekit-wid-con ekit_menu_responsive_tablet"
                      data-hamburger-icon=""
                      data-hamburger-icon-type="icon"
                      data-responsive-breakpoint={1024}
                    >
                      <button
                        className="elementskit-menu-hamburger elementskit-menu-toggler"
                        type="button"
                        aria-label="hamburger-icon"
                      >
                        <span className="elementskit-menu-hamburger-icon" />
                        <span className="elementskit-menu-hamburger-icon" />
                        <span className="elementskit-menu-hamburger-icon" />
                      </button>
                      <div
                        id="ekit-megamenu-main-menu"
                        className="elementskit-menu-container elementskit-menu-offcanvas-elements elementskit-navbar-nav-default ekit-nav-menu-one-page-no ekit-nav-dropdown-hover"
                      >
                        <ul
                          id="menu-main-menu"
                          className="elementskit-navbar-nav elementskit-menu-po-center submenu-click-on-icon"
                        >
                          <li
                            id="menu-item-13"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-9 current_page_item menu-item-13 nav-item elementskit-mobile-builder-content active"
                            data-vertical-menu="750px"
                          >
                            <a
                              href="https://lawnwise.pllinvestmentsllc.com/"
                              className="ekit-menu-nav-link active"
                            >
                              Home
                            </a>
                          </li>
                          <li
                            id="menu-item-14"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-14 nav-item elementskit-mobile-builder-content"
                            data-vertical-menu="750px"
                          >
                            <a href="#problem" className="ekit-menu-nav-link">
                              Problem
                            </a>
                          </li>
                          <li
                            id="menu-item-15"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-15 nav-item elementskit-mobile-builder-content"
                            data-vertical-menu="750px"
                          >
                            <a href="#advantage" className="ekit-menu-nav-link">
                              Advantage
                            </a>
                          </li>
                          <li
                            id="menu-item-17"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-17 nav-item elementskit-mobile-builder-content"
                            data-vertical-menu="750px"
                          >
                            <a href="#howworks" className="ekit-menu-nav-link">
                              How It Works
                            </a>
                          </li>
                          <li
                            id="menu-item-18"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-18 nav-item elementskit-mobile-builder-content"
                            data-vertical-menu="750px"
                          >
                            <a href="#faq" className="ekit-menu-nav-link">
                              FAQs
                            </a>
                          </li>
                        </ul>
                        <div className="elementskit-nav-identity-panel">
                          <a
                            className="elementskit-nav-logo"
                            href="https://lawnwise.pllinvestmentsllc.com"
                            target=""
                            rel=""
                          >
                            <img
                              src="https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/White-Black-Elegant-Concept-Football-Club-Logo-e1742489035652.png"
                              title="White Black Elegant Concept Football Club Logo"
                              alt="White Black Elegant Concept Football Club Logo"
                              decoding="async"
                            />
                          </a>
                          <button
                            className="elementskit-menu-close elementskit-menu-toggler"
                            type="button"
                          >
                            X
                          </button>
                        </div>
                      </div>
                      <div className="elementskit-menu-overlay elementskit-menu-offcanvas-elements elementskit-menu-toggler ekit-nav-menu--overlay" />{" "}
                    </nav>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-3b01a27 e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child"
                data-id="3b01a27"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-93f675d elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                  data-id="93f675d"
                  data-element_type="widget"
                  data-widget_type="icon-list.default"
                >
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-icon">
                          <i
                            aria-hidden="true"
                            className="icon icon-whatsapp-2"
                          />{" "}
                        </span>
                        <span className="elementor-icon-list-text">
                          +442012345678
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main
        id="content"
        className="site-main post-9 page type-page status-publish hentry"
      >
        <div className="page-content">
          <div
            data-elementor-type="wp-page"
            data-elementor-id={9}
            className="elementor elementor-9"
            data-elementor-post-type="page"
          >
            <div
              className="elementor-element elementor-element-c85ed03 e-flex e-con-boxed e-con e-parent"
              data-id="c85ed03"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-f0efa5d e-con-full e-flex e-con e-child"
                  data-id="f0efa5d"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-24791e5 elementor-widget__width-initial elementor-widget elementor-widget-heading"
                    data-id="24791e5"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h1 className="elementor-heading-title elementor-size-default">
                        Win More Matches with{" "}
                        <span style={{ color: "#00FFDA" }}>AI </span> – Your
                        Tactical Edge{" "}
                        <span style={{ color: "#00FFDA" }}>Starts Now!</span>
                      </h1>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-3acf2a9 e-con-full e-flex e-con e-child"
                    data-id="3acf2a9"
                    data-element_type="container"
                  >
                    <div
                      className="elementor-element elementor-element-d5572c1 e-con-full e-flex e-con e-child"
                      data-id="d5572c1"
                      data-element_type="container"
                    >
                      <div
                        className="elementor-element elementor-element-7363869 elementor-widget elementor-widget-heading"
                        data-id={7363869}
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h3 className="elementor-heading-title elementor-size-default">
                            Coaches Using AI Win More Games – Are You Next?
                          </h3>{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-37027f7 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="37027f7"
                        data-element_type="widget"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="icon icon-checked1"
                                />{" "}
                              </span>
                              <span className="elementor-icon-list-text">
                                Outsmart Opponents Faster — Real-time AI
                                insights on formation, tactics &amp; strategy
                                when it matters most.
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="icon icon-checked1"
                                />{" "}
                              </span>
                              <span className="elementor-icon-list-text">
                                Opponent Weakness Exploiter: AI analyzes rival
                                teams &amp; recommends strategy shifts.
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="icon icon-checked1"
                                />{" "}
                              </span>
                              <span className="elementor-icon-list-text">
                                Data-Driven Coaching: AI removes guesswork &amp;
                                gives tactical insights coaches can trust.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-221a971 elementor-mobile-align-center elementor-widget-mobile__width-initial elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="221a971"
                        data-element_type="widget"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li
                              className="elementor-icon-list-item"
                            >
                              <span className="elementor-icon-list-text">
                                [Get Tactical AI Now - Dominate Your League!]
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-81f8c70 elementor-mobile-align-center elementor-widget elementor-widget-button"
                        data-id="81f8c70"
                        data-element_type="widget"
                        data-widget_type="button.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <a
                              className="elementor-button elementor-button-link elementor-size-sm"
                              onClick={getStarted}
                            >
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-icon">
                                  <svg
                                    aria-hidden="true"
                                    className="e-font-icon-svg e-fas-arrow-right"
                                    viewBox="0 0 448 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                                  </svg>{" "}
                                </span>
                                <span className="elementor-button-text">
                                  UNLOCK YOUR SECRET
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-14b7839 e-con-full e-flex e-con e-child"
                      data-id="14b7839"
                      data-element_type="container"
                    >
                      <div
                        className="elementor-element elementor-element-fa8c141 elementor-widget elementor-widget-image"
                        data-id="fa8c141"
                        data-element_type="widget"
                        data-widget_type="image.default"
                      >
                        <div className="elementor-widget-container">
                          <img
                            decoding="async"
                            width={800}
                            height={800}
                            src="https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/ai.jpg"
                            className="attachment-large size-large wp-image-985"
                            alt=""
                            srcSet="https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/ai.jpg 800w, https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/ai-300x300.jpg 300w, https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/ai-150x150.jpg 150w, https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/ai-768x768.jpg 768w"
                            sizes="(max-width: 800px) 100vw, 800px"
                          />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-94266c6 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent"
              data-id="94266c6"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-1f0d53d e-con-full e-flex e-con e-child"
                  data-id="1f0d53d"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-a484796 elementor-widget elementor-widget-heading"
                    data-id="a484796"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h1 className="elementor-heading-title elementor-size-default">
                        AI is Revolutionizing Football Coaching – Are You Ready?
                      </h1>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-1a2c8c4 elementor-widget elementor-widget-heading"
                    data-id="1a2c8c4"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h3 className="elementor-heading-title elementor-size-default">
                        Your competition is already using AI. Don’t get left
                        behind.
                      </h3>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-3bc29ec elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="3bc29ec"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <i
                              aria-hidden="true"
                              className="icon icon-checked1"
                            />{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            Analyze opponents instantly
                          </span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <i
                              aria-hidden="true"
                              className="icon icon-checked1"
                            />{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            Train players smarter &amp; faster
                          </span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <i
                              aria-hidden="true"
                              className="icon icon-checked1"
                            />{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            Make real-time tactical adjustments
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-cd8939b elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="cd8939b"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-text">
                            [Get AI Now – Before Your Rivals Do]
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-2da2132 elementor-mobile-align-center elementor-widget elementor-widget-button"
                    data-id="2da2132"
                    data-element_type="widget"
                    data-widget_type="button.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <a
                          className="elementor-button elementor-button-link elementor-size-sm"
                          href="#"
                        >
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-icon">
                              <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-fas-arrow-right"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                              </svg>{" "}
                            </span>
                            <span className="elementor-button-text">
                              Urgency &amp; FOMO Play
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-0fe0ef0 e-con-full e-flex e-con e-child"
                  data-id="0fe0ef0"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-6f6ec35 elementor-widget elementor-widget-image"
                    data-id="6f6ec35"
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <img
                        decoding="async"
                        width={772}
                        height={1024}
                        src="https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/football-8727945_1920-1-1-772x1024.png"
                        className="attachment-large size-large wp-image-279"
                        alt=""
                        srcSet="https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/football-8727945_1920-1-1-772x1024.png 772w, https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/football-8727945_1920-1-1-226x300.png 226w, https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/football-8727945_1920-1-1-768x1018.png 768w, https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/football-8727945_1920-1-1.png 1000w"
                        sizes="(max-width: 772px) 100vw, 772px"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-8f8e319 e-flex e-con-boxed e-con e-parent"
              data-id="8f8e319"
              data-element_type="container"
              id="problem"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-35d3da4 e-con-full e-flex e-con e-child"
                  data-id="35d3da4"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-0d2c0e7 elementor-widget elementor-widget-heading"
                    data-id="0d2c0e7"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        Coaching Without AI? Here’s Why You’re Falling Behind
                      </h2>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-a89fb2a elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="a89fb2a"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-long-arrow-alt-right"
                              viewBox="0 0 448 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                            </svg>{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            Stop Wasting Hours on Film – AI Analyzes Matches in
                            Seconds
                          </span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-long-arrow-alt-right"
                              viewBox="0 0 448 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                            </svg>{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            Your Rivals Use AI – If You Don’t, You’re Playing
                            Catch-Up
                          </span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-long-arrow-alt-right"
                              viewBox="0 0 448 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                            </svg>{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            Training Mistakes Cost Wins &amp; Players – AI
                            Prevents That
                          </span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-long-arrow-alt-right"
                              viewBox="0 0 448 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                            </svg>{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            You’re Managing Players, Opponents &amp; Pressure —
                            Alone. AI becomes your tactical assistant, working
                            24/7 behind the scenes.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-4d96ffe e-con-full e-flex e-con e-child"
                  data-id="4d96ffe"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-2f1d5f7 elementor-widget elementor-widget-heading"
                    data-id="2f1d5f7"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h3 className="elementor-heading-title elementor-size-default">
                        Solution
                      </h3>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-2681519 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id={2681519}
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-mars"
                              viewBox="0 0 384 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M372 64h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-80.7 80.7c-22.2-14-48.5-22.1-76.7-22.1C64.5 160 0 224.5 0 304s64.5 144 144 144 144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l80.7-80.7 16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V76c0-6.6-5.4-12-12-12zM144 384c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" />
                            </svg>{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            AI Turns Your Decisions from Guesswork to
                            Game-Winning Strategy
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-90857a1 elementor-mobile-align-center elementor-widget-mobile__width-initial elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="90857a1"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-text">
                            [Get AI Insights Now - Win More Matches Instantly]
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-e3a3ba7 elementor-mobile-align-center elementor-widget elementor-widget-button"
                    data-id="e3a3ba7"
                    data-element_type="widget"
                    data-widget_type="button.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <a
                          className="elementor-button elementor-button-link elementor-size-sm"
                          onClick={getStarted}
                        >
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-icon">
                              <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-fas-arrow-right"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                              </svg>{" "}
                            </span>
                            <span className="elementor-button-text">
                              UNLOCK YOUR SECRET
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-a578af1 e-flex e-con-boxed e-con e-parent"
              data-id="a578af1"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-dbbfd71 e-con-full e-flex e-con e-child"
                  data-id="dbbfd71"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-7cb9e40 elementor-widget__width-initial elementor-widget elementor-widget-heading"
                    data-id="7cb9e40"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        How AI Can Change Your Coaching Strategy in Just One
                        Match
                      </h2>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-a570a13 e-con-full e-flex e-con e-child"
                    data-id="a570a13"
                    data-element_type="container"
                  >
                    <div
                      className="elementor-element elementor-element-5e3ad45 e-con-full e-flex e-con e-child"
                      data-id="5e3ad45"
                      data-element_type="container"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div
                        className="elementor-element elementor-element-82421c2 elementor-widget elementor-widget-heading"
                        data-id="82421c2"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h3 className="elementor-heading-title elementor-size-default">
                            Before AI Coaching
                          </h3>{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-12ec256 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="12ec256"
                        data-element_type="widget"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg
                                  aria-hidden="true"
                                  className="e-font-icon-svg e-fas-long-arrow-alt-right"
                                  viewBox="0 0 448 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                                </svg>{" "}
                              </span>
                              <span className="elementor-icon-list-text">
                                You miss key moments — late to react to tactical
                                changes.
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg
                                  aria-hidden="true"
                                  className="e-font-icon-svg e-fas-long-arrow-alt-right"
                                  viewBox="0 0 448 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                                </svg>{" "}
                              </span>
                              <span className="elementor-icon-list-text">
                                You’re guessing if your formation is even
                                working.
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg
                                  aria-hidden="true"
                                  className="e-font-icon-svg e-fas-long-arrow-alt-right"
                                  viewBox="0 0 448 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                                </svg>{" "}
                              </span>
                              <span className="elementor-icon-list-text">
                                You waste hours analyzing matches — still unsure
                                what to change
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-b7c7bae e-con-full e-flex e-con e-child"
                      data-id="b7c7bae"
                      data-element_type="container"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div
                        className="elementor-element elementor-element-ca922d5 elementor-widget elementor-widget-heading"
                        data-id="ca922d5"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h3 className="elementor-heading-title elementor-size-default">
                            After AI Coaching
                          </h3>{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-418ec7f elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="418ec7f"
                        data-element_type="widget"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg
                                  aria-hidden="true"
                                  className="e-font-icon-svg e-fas-long-arrow-alt-right"
                                  viewBox="0 0 448 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                                </svg>{" "}
                              </span>
                              <span className="elementor-icon-list-text">
                                AI tells you exactly when to shift formation or
                                tactics.
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg
                                  aria-hidden="true"
                                  className="e-font-icon-svg e-fas-long-arrow-alt-right"
                                  viewBox="0 0 448 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                                </svg>{" "}
                              </span>
                              <span className="elementor-icon-list-text">
                                AI exposes opponent weaknesses and suggests how
                                to exploit them.
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg
                                  aria-hidden="true"
                                  className="e-font-icon-svg e-fas-long-arrow-alt-right"
                                  viewBox="0 0 448 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                                </svg>{" "}
                              </span>
                              <span className="elementor-icon-list-text">
                                AI gives you crystal-clear tactical cues in
                                real-time
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-7508082 e-flex e-con-boxed e-con e-parent"
              data-id={7508082}
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-2fc5964 e-con-full e-flex e-con e-child"
                  data-id="2fc5964"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-1584618 elementor-widget elementor-widget-image"
                    data-id={1584618}
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <img
                        loading="lazy"
                        decoding="async"
                        width={800}
                        height={991}
                        src="https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/pexels-phxtosene-eneas-525081206-31216001-e1742533957194-827x1024.jpg"
                        className="attachment-large size-large wp-image-459"
                        alt=""
                        srcSet="https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/pexels-phxtosene-eneas-525081206-31216001-e1742533957194-827x1024.jpg 827w, https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/pexels-phxtosene-eneas-525081206-31216001-e1742533957194-242x300.jpg 242w, https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/pexels-phxtosene-eneas-525081206-31216001-e1742533957194-768x950.jpg 768w, https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/pexels-phxtosene-eneas-525081206-31216001-e1742533957194-1241x1536.jpg 1241w, https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/pexels-phxtosene-eneas-525081206-31216001-e1742533957194.jpg 1280w"
                        sizes="(max-width: 800px) 100vw, 800px"
                      />{" "}
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-d0e0791 e-con-full e-flex e-con e-child"
                  data-id="d0e0791"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-0eeac22 elementor-widget elementor-widget-heading"
                    data-id="0eeac22"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        How AI Gives You the Winning Edge Over Every Opponent
                      </h2>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-de558d0 elementor-widget elementor-widget-heading"
                    data-id="de558d0"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h3 className="elementor-heading-title elementor-size-default">
                        AI Turns Every Coach into an Elite Strategist
                      </h3>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-326de9f elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                    data-id="326de9f"
                    data-element_type="widget"
                    data-widget_type="icon-box.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-icon">
                          <span className="elementor-icon">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-check"
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                            </svg>{" "}
                          </span>
                        </div>
                        <div className="elementor-icon-box-content">
                          <h3 className="elementor-icon-box-title">
                            <span>Predict &amp; Counter Opponent Tactics </span>
                          </h3>
                          <p className="elementor-icon-box-description">
                            AI reveals your rival’s weaknesses before kickoff,
                            so you can strike first.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-7451a7b elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                    data-id="7451a7b"
                    data-element_type="widget"
                    data-widget_type="icon-box.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-icon">
                          <span className="elementor-icon">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-check"
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                            </svg>{" "}
                          </span>
                        </div>
                        <div className="elementor-icon-box-content">
                          <h3 className="elementor-icon-box-title">
                            <span>Train Smarter, Not Harder </span>
                          </h3>
                          <p className="elementor-icon-box-description">
                            AI customizes drills for every player, fixing
                            weaknesses &amp; maximizing performance.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-1b544ee elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                    data-id="1b544ee"
                    data-element_type="widget"
                    data-widget_type="icon-box.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-icon">
                          <span className="elementor-icon">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-check"
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
                            </svg>{" "}
                          </span>
                        </div>
                        <div className="elementor-icon-box-content">
                          <h3 className="elementor-icon-box-title">
                            <span>Adapt Tactics Instantly </span>
                          </h3>
                          <p className="elementor-icon-box-description">
                            AI gives real-time winning strategies so you always
                            stay ahead during matches.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-8d95215 elementor-mobile-align-center elementor-widget-mobile__width-initial elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="8d95215"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-text">
                            [Get AI Tactical Insights Now – Dominate Your
                            League!]
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-f36209c elementor-mobile-align-center elementor-widget elementor-widget-button"
                    data-id="f36209c"
                    data-element_type="widget"
                    data-widget_type="button.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <a
                          className="elementor-button elementor-button-link elementor-size-sm"
                          onClick={getStarted}
                        >
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-icon">
                              <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-fas-arrow-right"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                              </svg>{" "}
                            </span>
                            <span className="elementor-button-text">
                              UNLOCK YOUR SECRET
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-3133b52 e-flex e-con-boxed e-con e-parent"
              data-id="3133b52"
              data-element_type="container"
              id="howworks"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-54dc86f elementor-widget__width-initial elementor-widget elementor-widget-heading"
                  data-id="54dc86f"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      How AI Gives You the Tactical Edge in Every Match
                    </h2>{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-e5aafd7 e-flex e-con-boxed e-con e-child"
                  data-id="e5aafd7"
                  data-element_type="container"
                >
                  <div className="e-con-inner">
                    <div
                      className="elementor-element elementor-element-ec17a22 e-con-full e-flex e-con e-child"
                      data-id="ec17a22"
                      data-element_type="container"
                    >
                      <div
                        className="elementor-element elementor-element-1fd58e1 elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                        data-id="1fd58e1"
                        data-element_type="widget"
                        data-widget_type="icon-box.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-icon-box-wrapper">
                            <div className="elementor-icon-box-icon">
                              <span className="elementor-icon">
                                <i
                                  aria-hidden="true"
                                  className="icon icon-line-chart"
                                />{" "}
                              </span>
                            </div>
                            <div className="elementor-icon-box-content">
                              <h3 className="elementor-icon-box-title">
                                <span>
                                  AI Instantly Analyzes Your Opponents{" "}
                                </span>
                              </h3>
                              <p className="elementor-icon-box-description">
                                AI reveals your rival’s strengths &amp;
                                weaknesses in seconds, so you can exploit gaps
                                &amp; counter threats.{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-ce0b65e e-con-full e-flex e-con e-child"
                      data-id="ce0b65e"
                      data-element_type="container"
                    >
                      <div
                        className="elementor-element elementor-element-2e1ebed elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                        data-id="2e1ebed"
                        data-element_type="widget"
                        data-widget_type="icon-box.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-icon-box-wrapper">
                            <div className="elementor-icon-box-icon">
                              <span className="elementor-icon">
                                <i
                                  aria-hidden="true"
                                  className="icon icon-target-2"
                                />{" "}
                              </span>
                            </div>
                            <div className="elementor-icon-box-content">
                              <h3 className="elementor-icon-box-title">
                                <span>
                                  AI Recommends Winning Tactics in Real Time{" "}
                                </span>
                              </h3>
                              <p className="elementor-icon-box-description">
                                AI suggests formations, substitutions &amp;
                                adjustments mid-game – just like having an elite
                                analyst by your side.{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-8473d77 e-con-full e-flex e-con e-child"
                      data-id="8473d77"
                      data-element_type="container"
                    >
                      <div
                        className="elementor-element elementor-element-cdf898e elementor-view-default elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                        data-id="cdf898e"
                        data-element_type="widget"
                        data-widget_type="icon-box.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-icon-box-wrapper">
                            <div className="elementor-icon-box-icon">
                              <span className="elementor-icon">
                                <i
                                  aria-hidden="true"
                                  className="icon icon-trophy1"
                                />{" "}
                              </span>
                            </div>
                            <div className="elementor-icon-box-content">
                              <h3 className="elementor-icon-box-title">
                                <span>
                                  Execute AI-Powered Strategies &amp; Win More
                                  Matches{" "}
                                </span>
                              </h3>
                              <p className="elementor-icon-box-description">
                                With AI-driven insights, you make smarter,
                                faster decisions – turning close games into
                                victories.{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-e4c926c e-con-full e-flex e-con e-child"
                  data-id="e4c926c"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-a7fe5ac elementor-align-center elementor-mobile-align-center elementor-widget-mobile__width-initial elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="a7fe5ac"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-text">
                            [Try AI for Free – See the Tactical Advantage in
                            Action!]
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-979e7e1 elementor-align-center elementor-mobile-align-center elementor-widget elementor-widget-button"
                    data-id="979e7e1"
                    data-element_type="widget"
                    data-widget_type="button.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <a
                          className="elementor-button elementor-button-link elementor-size-sm"
                          onClick={getStarted}
                        >
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-icon">
                              <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-fas-arrow-right"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                              </svg>{" "}
                            </span>
                            <span className="elementor-button-text">
                              UNLOCK YOUR SECRET
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-d2eb467 e-flex e-con-boxed e-con e-parent"
              data-id="d2eb467"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-6bdd513 e-con-full e-flex e-con e-child"
                  data-id="6bdd513"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-62d3a42 elementor-widget__width-initial elementor-widget elementor-widget-heading"
                    data-id="62d3a42"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        Every Bad Decision Costs You Wins – Here’s How AI Fixes
                        That
                      </h2>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-eb83b5c elementor-widget elementor-widget-heading"
                    data-id="eb83b5c"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h3 className="elementor-heading-title elementor-size-default">
                        How Much Are Bad Decisions Costing You?
                      </h3>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-02d46a6 elementor-mobile-align-center elementor-widget-mobile__width-initial elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="02d46a6"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-text">
                            [Start Winning for Less – Get AI Now]
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-13ac6e7 elementor-mobile-align-center elementor-widget elementor-widget-button"
                    data-id="13ac6e7"
                    data-element_type="widget"
                    data-widget_type="button.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <a
                          className="elementor-button elementor-button-link elementor-size-sm"
                          onClick={getStarted}
                        >
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-icon">
                              <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-fas-arrow-right"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                              </svg>{" "}
                            </span>
                            <span className="elementor-button-text">
                              UNLOCK YOUR SECRET
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-ecd1f78 e-con-full e-flex e-con e-child"
                  data-id="ecd1f78"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-987040e e-con-full e-flex e-con e-child"
                    data-id="987040e"
                    data-element_type="container"
                  >
                    <div
                      className="elementor-element elementor-element-3bbc3be e-con-full e-flex e-con e-child"
                      data-id="3bbc3be"
                      data-element_type="container"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div
                        className="elementor-element elementor-element-a1fded6 elementor-widget elementor-widget-heading"
                        data-id="a1fded6"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h3 className="elementor-heading-title elementor-size-default">
                            Without AI
                          </h3>{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-dd230fc elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="dd230fc"
                        data-element_type="widget"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="icon icon-money-bag1"
                                />{" "}
                              </span>
                              <span className="elementor-icon-list-text">
                                Spending $50,000+ on an analyst? AI does the job
                                for a fraction of the cost!
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="icon icon-management"
                                />{" "}
                              </span>
                              <span className="elementor-icon-list-text">
                                A single bad decision can cost a match – AI
                                prevents costly mistakes.
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="icon icon-heart"
                                />{" "}
                              </span>
                              <span className="elementor-icon-list-text">
                                Overtraining &amp; injuries destroy seasons – AI
                                protects your squad.
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="icon icon-trophy"
                                />{" "}
                              </span>
                              <span className="elementor-icon-list-text">
                                Manually analyzing matches wastes time – AI
                                gives insights in seconds
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-7a79c17 e-con-full e-flex e-con e-child"
                      data-id="7a79c17"
                      data-element_type="container"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div
                        className="elementor-element elementor-element-d5db6ec elementor-widget elementor-widget-heading"
                        data-id="d5db6ec"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h3 className="elementor-heading-title elementor-size-default">
                            With AI: Smarter Coaching, More Wins, Less Cost
                          </h3>{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-85433af elementor-view-framed elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                        data-id="85433af"
                        data-element_type="widget"
                        data-widget_type="icon-box.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-icon-box-wrapper">
                            <div className="elementor-icon-box-icon">
                              <span className="elementor-icon">
                                <i
                                  aria-hidden="true"
                                  className="icon icon-money-bag3"
                                />{" "}
                              </span>
                            </div>
                            <div className="elementor-icon-box-content">
                              <h3 className="elementor-icon-box-title">
                                <span>
                                  The Real Reason Coaches Are Moving Faster Than
                                  You{" "}
                                </span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-5d85c1f e-flex e-con-boxed e-con e-parent"
              data-id="5d85c1f"
              data-element_type="container"
              id="advantage"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-b6afd30 elementor-widget__width-initial elementor-widget elementor-widget-heading"
                  data-id="b6afd30"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Why Smart Coaches Are Signing Up Today
                    </h2>{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-81ac61a e-con-full e-flex e-con e-child"
                  data-id="81ac61a"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-20be41c e-con-full e-flex e-con e-child"
                    data-id="20be41c"
                    data-element_type="container"
                    data-settings='{"background_background":"classic"}'
                  >
                    <div
                      className="elementor-element elementor-element-a8d0451 elementor-widget elementor-widget-heading"
                      data-id="a8d0451"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h3 className="elementor-heading-title elementor-size-default">
                          Disadvantages
                        </h3>{" "}
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-445db67 elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                      data-id="445db67"
                      data-element_type="widget"
                      data-widget_type="icon-box.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <span className="elementor-icon">
                              <i
                                aria-hidden="true"
                                className="icon icon-rocket-ship"
                              />{" "}
                            </span>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <span>
                                Their rivals are already using AI – and winning
                                more because of it.{" "}
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-082bc4c elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                      data-id="082bc4c"
                      data-element_type="widget"
                      data-widget_type="icon-box.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <span className="elementor-icon">
                              <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-far-chart-bar"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M396.8 352h22.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-192 0h22.4c6.4 0 12.8-6.4 12.8-12.8V140.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h22.4c6.4 0 12.8-6.4 12.8-12.8V204.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-387.2-48h22.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8z" />
                              </svg>{" "}
                            </span>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <span>
                                They’re done guessing. Now every decision is
                                backed by real data.{" "}
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-69794c2 elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                      data-id="69794c2"
                      data-element_type="widget"
                      data-widget_type="icon-box.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <span className="elementor-icon">
                              <i
                                aria-hidden="true"
                                className="icon icon-brain"
                              />{" "}
                            </span>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <span>
                                They use AI as their second brain – for smarter
                                training and better in-game calls.{" "}
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-a3f2b06 elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                      data-id="a3f2b06"
                      data-element_type="widget"
                      data-widget_type="icon-box.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <span className="elementor-icon">
                              <i
                                aria-hidden="true"
                                className="icon icon-energy-saving"
                              />{" "}
                            </span>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <span>
                                They’re winning more matches, with less stress
                                and more control.{" "}
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-511a6b6 e-con-full e-flex e-con e-child"
                    data-id="511a6b6"
                    data-element_type="container"
                  >
                    <div
                      className="elementor-element elementor-element-e730d8c elementor-widget elementor-widget-image"
                      data-id="e730d8c"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div className="elementor-widget-container">
                        <img
                          loading="lazy"
                          decoding="async"
                          width={800}
                          height={800}
                          src="https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/adven.jpg"
                          className="attachment-large size-large wp-image-1007"
                          alt=""
                          srcSet="https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/adven.jpg 800w, https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/adven-300x300.jpg 300w, https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/adven-150x150.jpg 150w, https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/adven-768x768.jpg 768w"
                          sizes="(max-width: 800px) 100vw, 800px"
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-73a4ef0 e-con-full e-flex e-con e-child"
                    data-id="73a4ef0"
                    data-element_type="container"
                    data-settings='{"background_background":"classic"}'
                  >
                    <div
                      className="elementor-element elementor-element-b302915 elementor-widget elementor-widget-heading"
                      data-id="b302915"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h3 className="elementor-heading-title elementor-size-default">
                          Game-Changing Advantages You Can’t Afford to Ignore
                        </h3>{" "}
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-1ec0e2d elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                      data-id="1ec0e2d"
                      data-element_type="widget"
                      data-widget_type="icon-box.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <span className="elementor-icon">
                              <i
                                aria-hidden="true"
                                className="icon icon-check"
                              />{" "}
                            </span>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <span>
                                Scout Opponents Instantly – Expose their
                                weaknesses before the first whistle.{" "}
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-317308b elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                      data-id="317308b"
                      data-element_type="widget"
                      data-widget_type="icon-box.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <span className="elementor-icon">
                              <i
                                aria-hidden="true"
                                className="icon icon-check"
                              />{" "}
                            </span>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <span>
                                Build Smarter Training Plans - Fix flaws, boost
                                form, and make good players{" "}
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-40c08a6 elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                      data-id="40c08a6"
                      data-element_type="widget"
                      data-widget_type="icon-box.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <span className="elementor-icon">
                              <i
                                aria-hidden="true"
                                className="icon icon-check"
                              />{" "}
                            </span>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <span>
                                Prevent Injuries Before They Happen - Keep your
                                best players fit, fresh, and match- ready.{" "}
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-72e0844 elementor-position-left elementor-vertical-align-middle elementor-view-default elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                      data-id="72e0844"
                      data-element_type="widget"
                      data-widget_type="icon-box.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-icon-box-wrapper">
                          <div className="elementor-icon-box-icon">
                            <span className="elementor-icon">
                              <i
                                aria-hidden="true"
                                className="icon icon-check"
                              />{" "}
                            </span>
                          </div>
                          <div className="elementor-icon-box-content">
                            <h3 className="elementor-icon-box-title">
                              <span>
                                AI Works 24/7 — So You Can Win More with Less
                                Effort – Get real-time insights anytime,
                                anywhere.{" "}
                              </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-33d1710 e-con-full e-flex e-con e-child"
                  data-id="33d1710"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-201255c elementor-mobile-align-center elementor-align-center elementor-widget elementor-widget-button"
                    data-id="201255c"
                    data-element_type="widget"
                    data-widget_type="button.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <a
                          className="elementor-button elementor-button-link elementor-size-sm"
                          href="#"
                        >
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-icon">
                              <svg
                                aria-hidden="true"
                                className="e-font-icon-svg e-fas-arrow-right"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                              </svg>{" "}
                            </span>
                            <span className="elementor-button-text">
                              UNLOCK YOUR SECRET
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-8d8ffa9 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent"
              data-id="8d8ffa9"
              data-element_type="container"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-d504cf7 e-con-full e-flex e-con e-child"
                  data-id="d504cf7"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-ceb16f2 elementor-widget__width-initial elementor-widget elementor-widget-heading"
                    data-id="ceb16f2"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        How AI Can Change Your Coaching Strategy in Just One
                        Match
                      </h2>{" "}
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-ef0819a e-con-full e-flex e-con e-child"
                  data-id="ef0819a"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-6f670c9 e-con-full e-flex e-con e-child"
                    data-id="6f670c9"
                    data-element_type="container"
                  >
                    <div
                      className="elementor-element elementor-element-a0e9fce e-con-full e-flex e-con e-child"
                      data-id="a0e9fce"
                      data-element_type="container"
                    >
                      <div
                        className="elementor-element elementor-element-bb46f93 elementor-widget elementor-widget-heading"
                        data-id="bb46f93"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h3 className="elementor-heading-title elementor-size-default">
                            Before AI Coaching
                          </h3>{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-e5492d8 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="e5492d8"
                        data-element_type="widget"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg
                                  aria-hidden="true"
                                  className="e-font-icon-svg e-fas-long-arrow-alt-right"
                                  viewBox="0 0 448 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                                </svg>{" "}
                              </span>
                              <span className="elementor-icon-list-text">
                                Your team is losing possession in midfield.
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg
                                  aria-hidden="true"
                                  className="e-font-icon-svg e-fas-long-arrow-alt-right"
                                  viewBox="0 0 448 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                                </svg>{" "}
                              </span>
                              <span className="elementor-icon-list-text">
                                Your opponent is pressing high, and you struggle
                                to break out
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg
                                  aria-hidden="true"
                                  className="e-font-icon-svg e-fas-long-arrow-alt-right"
                                  viewBox="0 0 448 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                                </svg>{" "}
                              </span>
                              <span className="elementor-icon-list-text">
                                You’re unsure whether to change formation or
                                tactics.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-b926ee9 e-con-full e-flex e-con e-child"
                      data-id="b926ee9"
                      data-element_type="container"
                    >
                      <div
                        className="elementor-element elementor-element-e44b790 elementor-widget elementor-widget-heading"
                        data-id="e44b790"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h3 className="elementor-heading-title elementor-size-default">
                            After AI Coaching
                          </h3>{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-79eab24 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                        data-id="79eab24"
                        data-element_type="widget"
                        data-widget_type="icon-list.default"
                      >
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg
                                  aria-hidden="true"
                                  className="e-font-icon-svg e-fas-long-arrow-alt-right"
                                  viewBox="0 0 448 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                                </svg>{" "}
                              </span>
                              <span className="elementor-icon-list-text">
                                AI detects possession issues &amp; suggests a
                                deeper midfielder drop.
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg
                                  aria-hidden="true"
                                  className="e-font-icon-svg e-fas-long-arrow-alt-right"
                                  viewBox="0 0 448 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                                </svg>{" "}
                              </span>
                              <span className="elementor-icon-list-text">
                                AI identifies opponent weaknesses &amp;
                                recommends a counter-pressing strategy.
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <svg
                                  aria-hidden="true"
                                  className="e-font-icon-svg e-fas-long-arrow-alt-right"
                                  viewBox="0 0 448 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                                </svg>{" "}
                              </span>
                              <span className="elementor-icon-list-text">
                                AI shows real-time heatmaps &amp; tactical
                                insights so you make the right decision
                                instantly.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-b49c376 e-flex e-con-boxed e-con e-parent"
              data-id="b49c376"
              data-element_type="container"
              data-settings='{"background_background":"classic"}'
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-ed174e7 elementor-widget elementor-widget-heading"
                  data-id="ed174e7"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Will You Lead or Be Left Behind?
                    </h2>{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-6a3a151 elementor-widget elementor-widget-heading"
                  data-id="6a3a151"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">
                      The smartest coaches are already using AI. The best teams
                      are winning with data.
                    </h3>{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-a07e47c elementor-view-framed elementor-shape-circle elementor-position-top elementor-mobile-position-top elementor-widget elementor-widget-icon-box"
                  data-id="a07e47c"
                  data-element_type="widget"
                  data-widget_type="icon-box.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-icon-box-wrapper">
                      <div className="elementor-icon-box-icon">
                        <span className="elementor-icon">
                          <i aria-hidden="true" className="icon icon-badge" />{" "}
                        </span>
                      </div>
                      <div className="elementor-icon-box-content">
                        <h3 className="elementor-icon-box-title">
                          <span>
                            Are you ready to join them—or will you fall behind?{" "}
                          </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-762e8dc elementor-align-center elementor-mobile-align-center elementor-widget-mobile__width-initial elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                  data-id="762e8dc"
                  data-element_type="widget"
                  data-widget_type="icon-list.default"
                >
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items">
                      <li className="elementor-icon-list-item">
                        <span className="elementor-icon-list-text">
                          [Join The Ai Coaching Revolution – Get Ai Today]
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-a1e1dff elementor-align-center elementor-mobile-align-center elementor-widget elementor-widget-button"
                  data-id="a1e1dff"
                  data-element_type="widget"
                  data-widget_type="button.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a
                        className="elementor-button elementor-button-link elementor-size-sm"
                        onClick={getStarted}
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-icon">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fas-arrow-right"
                              viewBox="0 0 448 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                            </svg>{" "}
                          </span>
                          <span className="elementor-button-text">
                            UNLOCK YOUR SECRET
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-278aadd e-flex e-con-boxed e-con e-parent"
              data-id="278aadd"
              data-element_type="container"
              id="faq"
            >
              <div className="e-con-inner">
                <div
                  className="elementor-element elementor-element-64354e1 e-con-full e-flex e-con e-child"
                  data-id="64354e1"
                  data-element_type="container"
                ></div>
                <div
                  className="elementor-element elementor-element-7cb4b67 e-con-full e-flex e-con e-child"
                  data-id="7cb4b67"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-fc7db7b elementor-widget elementor-widget-heading"
                    data-id="fc7db7b"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        FAQs
                      </h2>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-af01e71 elementor-widget elementor-widget-elementskit-accordion"
                    data-id="af01e71"
                    data-element_type="widget"
                    data-widget_type="elementskit-accordion.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="ekit-wid-con">
                        <div
                          className="elementskit-accordion accoedion-primary"
                          id="accordion-67e33afd1cf10"
                        >
                          {/* FAQ Item 1 */}
                          <div
                            className={`elementskit-card ${
                              activeIndex === 0 ? "active" : ""
                            }`}
                          >
                            <div
                              className="elementskit-card-header"
                              id="primaryHeading-0-af01e71"
                              onClick={() => handleToggle(0)}
                            >
                              <a
                                href="#collapse-82ca76967e33afd1cf10"
                                className={`ekit-accordion--toggler elementskit-btn-link ${
                                  activeIndex === 0 ? "" : "collapsed"
                                }`}
                                data-ekit-toggle="collapse"
                                aria-expanded={
                                  activeIndex === 0 ? "true" : "false"
                                }
                                aria-controls="Collapse-82ca76967e33afd1cf10"
                              >
                                <span className="ekit-accordion-title">
                                  Do I need tech skills?
                                </span>
                                <div className="ekit_accordion_icon_group">
                                  <div className="ekit_accordion_normal_icon">
                                    <i className="icon icon-down-arrow1" />
                                  </div>
                                  <div className="ekit_accordion_active_icon">
                                    <i className="icon icon-up-arrow1" />
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div
                              id="Collapse-82ca76967e33afd1cf10"
                              className={
                                activeIndex === 0 ? "show collapse" : "collapse"
                              }
                              aria-labelledby="primaryHeading-0-af01e71"
                              data-parent="#accordion-67e33afd1cf10"
                            >
                              <div className="elementskit-card-body ekit-accordion--content">
                                <p>No, AI is plug &amp; play.</p>
                              </div>
                            </div>
                          </div>

                          {/* FAQ Item 2 */}
                          <div
                            className={`elementskit-card ${
                              activeIndex === 1 ? "active" : ""
                            }`}
                          >
                            <div
                              className="elementskit-card-header"
                              id="primaryHeading-1-af01e71"
                              onClick={() => handleToggle(1)}
                            >
                              <a
                                href="#collapse-59cca4e67e33afd1cf10"
                                className={`ekit-accordion--toggler elementskit-btn-link ${
                                  activeIndex === 1 ? "" : "collapsed"
                                }`}
                                data-ekit-toggle="collapse"
                                aria-expanded={
                                  activeIndex === 1 ? "true" : "false"
                                }
                                aria-controls="Collapse-59cca4e67e33afd1cf10"
                              >
                                <span className="ekit-accordion-title">
                                  Is it expensive?
                                </span>
                                <div className="ekit_accordion_icon_group">
                                  <div className="ekit_accordion_normal_icon">
                                    <i className="icon icon-down-arrow1" />
                                  </div>
                                  <div className="ekit_accordion_active_icon">
                                    <i className="icon icon-up-arrow1" />
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div
                              id="Collapse-59cca4e67e33afd1cf10"
                              className={
                                activeIndex === 1 ? "show collapse" : "collapse"
                              }
                              aria-labelledby="primaryHeading-1-af01e71"
                              data-parent="#accordion-67e33afd1cf10"
                            >
                              <div className="elementskit-card-body ekit-accordion--content">
                                <p>No, it’s cheaper than hiring analysts.</p>
                              </div>
                            </div>
                          </div>

                          {/* FAQ Item 3 */}
                          <div
                            className={`elementskit-card ${
                              activeIndex === 2 ? "active" : ""
                            }`}
                          >
                            <div
                              className="elementskit-card-header"
                              id="primaryHeading-2-af01e71"
                              onClick={() => handleToggle(2)}
                            >
                              <a
                                href="#collapse-c11078367e33afd1cf10"
                                className={`ekit-accordion--toggler elementskit-btn-link ${
                                  activeIndex === 2 ? "" : "collapsed"
                                }`}
                                data-ekit-toggle="collapse"
                                aria-expanded={
                                  activeIndex === 2 ? "true" : "false"
                                }
                                aria-controls="Collapse-c11078367e33afd1cf10"
                              >
                                <span className="ekit-accordion-title">
                                  Will it work for my team?
                                </span>
                                <div className="ekit_accordion_icon_group">
                                  <div className="ekit_accordion_normal_icon">
                                    <i className="icon icon-down-arrow1" />
                                  </div>
                                  <div className="ekit_accordion_active_icon">
                                    <i className="icon icon-up-arrow1" />
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div
                              id="Collapse-c11078367e33afd1cf10"
                              className={
                                activeIndex === 2 ? "show collapse" : "collapse"
                              }
                              aria-labelledby="primaryHeading-2-af01e71"
                              data-parent="#accordion-67e33afd1cf10"
                            >
                              <div className="elementskit-card-body ekit-accordion--content">
                                <p>Yes, it adapts to all coaching levels.</p>
                              </div>
                            </div>
                          </div>

                          {/* FAQ Item 4 */}
                          <div
                            className={`elementskit-card ${
                              activeIndex === 3 ? "active" : ""
                            }`}
                          >
                            <div
                              className="elementskit-card-header"
                              id="primaryHeading-3-af01e71"
                              onClick={() => handleToggle(3)}
                            >
                              <a
                                href="#collapse-242375367e33afd1cf10"
                                className={`ekit-accordion--toggler elementskit-btn-link ${
                                  activeIndex === 3 ? "" : "collapsed"
                                }`}
                                data-ekit-toggle="collapse"
                                aria-expanded={
                                  activeIndex === 3 ? "true" : "false"
                                }
                                aria-controls="Collapse-242375367e33afd1cf10"
                              >
                                <span className="ekit-accordion-title">
                                  When will I see results?
                                </span>
                                <div className="ekit_accordion_icon_group">
                                  <div className="ekit_accordion_normal_icon">
                                    <i className="icon icon-down-arrow1" />
                                  </div>
                                  <div className="ekit_accordion_active_icon">
                                    <i className="icon icon-up-arrow1" />
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div
                              id="Collapse-242375367e33afd1cf10"
                              className={
                                activeIndex === 3 ? "show collapse" : "collapse"
                              }
                              aria-labelledby="primaryHeading-3-af01e71"
                              data-parent="#accordion-67e33afd1cf10"
                            >
                              <div className="elementskit-card-body ekit-accordion--content">
                                <p>
                                  Immediately—first game, first training
                                  session.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-668030f e-con-full e-flex e-con e-child"
                  data-id="668030f"
                  data-element_type="container"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="ekit-template-content-markup ekit-template-content-footer ekit-template-content-theme-support">
        <div
          data-elementor-type="wp-post"
          data-elementor-id={12}
          className="elementor elementor-12"
          data-elementor-post-type="elementskit_template"
        >
          <div
            className="elementor-element elementor-element-5695f6e6 e-flex e-con-boxed e-con e-parent"
            data-id="5695f6e6"
            data-element_type="container"
            id="xs_footer_8"
            data-settings='{"background_background":"classic"}'
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-7649c817 e-con-full e-flex e-con e-child"
                data-id="7649c817"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-6bec8b6b elementor-widget__width-initial elementor-widget elementor-widget-image"
                  data-id="6bec8b6b"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <a href="https://lawnwise.pllinvestmentsllc.com/">
                      <img
                        width={398}
                        height={407}
                        src="https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/White-Black-Elegant-Concept-Football-Club-Logo-e1742489035652.png"
                        className="attachment-full size-full wp-image-34"
                        alt=""
                        srcSet="https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/White-Black-Elegant-Concept-Football-Club-Logo-e1742489035652.png 398w, https://lawnwise.pllinvestmentsllc.com/wp-content/uploads/2025/03/White-Black-Elegant-Concept-Football-Club-Logo-e1742489035652-293x300.png 293w"
                        sizes="(max-width: 398px) 100vw, 398px"
                      />{" "}
                    </a>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-10dc8532 elementor-widget elementor-widget-text-editor"
                  data-id="10dc8532"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <p>
                      <strong data-start={0} data-end={21} data-is-only-node="">
                        AI Football Coach
                      </strong>{" "}
                      uses AI to analyze opponents, optimize training, and
                      enhance game strategies.
                    </p>{" "}
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-561973ec e-con-full e-flex e-con e-child"
                data-id="561973ec"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-71a92552 elementor-widget elementor-widget-heading"
                  data-id="71a92552"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Quick Links
                    </h2>{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-6827e74e e-con-full e-flex e-con e-child"
                  data-id="6827e74e"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-230af83a elementor-widget elementor-widget-elementskit-page-list"
                    data-id="230af83a"
                    data-element_type="widget"
                    data-widget_type="elementskit-page-list.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="ekit-wid-con">
                        {" "}
                        <div className="elementor-icon-list-items ">
                          <div className="elementor-icon-list-item   ">
                            <a
                              className="elementor-repeater-item-01d06f0 ekit_badge_left"
                              href="#home"
                            >
                              <div className="ekit_page_list_content">
                                <span className="elementor-icon-list-text">
                                  <span className="ekit_page_list_title_title">
                                    Home
                                  </span>
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="elementor-icon-list-item   ">
                            <a
                              className="elementor-repeater-item-324f54e ekit_badge_left"
                              href="#problem"
                            >
                              <div className="ekit_page_list_content">
                                <span className="elementor-icon-list-text">
                                  <span className="ekit_page_list_title_title">
                                    Problem
                                  </span>
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="elementor-icon-list-item   ">
                            <a
                              className="elementor-repeater-item-5245ae1 ekit_badge_left"
                              href="#advantage"
                            >
                              <div className="ekit_page_list_content">
                                <span className="elementor-icon-list-text">
                                  <span className="ekit_page_list_title_title">
                                    Advantage
                                  </span>
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="elementor-icon-list-item   ">
                            <a
                              className="elementor-repeater-item-4bdcfdb ekit_badge_left"
                              href="#howworks"
                            >
                              <div className="ekit_page_list_content">
                                <span className="elementor-icon-list-text">
                                  <span className="ekit_page_list_title_title">
                                    How It Works
                                  </span>
                                </span>
                              </div>
                            </a>
                          </div>
                          <div className="elementor-icon-list-item   ">
                            <a
                              className="elementor-repeater-item-644d196 ekit_badge_left"
                              href="#faq"
                            >
                              <div className="ekit_page_list_content">
                                <span className="elementor-icon-list-text">
                                  <span className="ekit_page_list_title_title">
                                    FAQs
                                  </span>
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-6e2501a e-con-full e-flex e-con e-child"
                data-id="6e2501a"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-6328d14 elementor-widget elementor-widget-heading"
                  data-id="6328d14"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Contact Us
                    </h2>{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-30ae947 e-con-full e-flex e-con e-child"
                  data-id="30ae947"
                  data-element_type="container"
                >
                  <div
                    className="elementor-element elementor-element-fa2c72c elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                    data-id="fa2c72c"
                    data-element_type="widget"
                    data-widget_type="icon-list.default"
                  >
                    <div className="elementor-widget-container">
                      <ul className="elementor-icon-list-items">
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <i
                              aria-hidden="true"
                              className="icon icon-map-marker1"
                            />{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            AI Football Coach Inc.1234 Sports Tech Avenue, Suite
                            500, London, UK
                          </span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <i
                              aria-hidden="true"
                              className="icon icon-phone-handset"
                            />{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            +44 20 1234 5678
                          </span>
                        </li>
                        <li className="elementor-icon-list-item">
                          <span className="elementor-icon-list-icon">
                            <i
                              aria-hidden="true"
                              className="icon icon-envelope3"
                            />{" "}
                          </span>
                          <span className="elementor-icon-list-text">
                            aifootball@coach.com
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-5d1e096d e-con-full e-flex e-con e-child"
                data-id="5d1e096d"
                data-element_type="container"
              >
                <div
                  className="elementor-element elementor-element-869433 elementor-widget elementor-widget-heading"
                  data-id={869433}
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">
                      Follow Us
                    </h2>{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-1660a85 elementor-widget elementor-widget-elementskit-social-media"
                  data-id="1660a85"
                  data-element_type="widget"
                  data-widget_type="elementskit-social-media.default"
                >
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con">
                      {" "}
                      <ul className="ekit_social_media">
                        <li className="elementor-repeater-item-da8f4de">
                          <a href="#" aria-label="Facebook" className="f">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fab-facebook-f"
                              viewBox="0 0 320 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                            </svg>
                          </a>
                        </li>
                        <li className="elementor-repeater-item-1399011">
                          <a href="#" aria-label="Twitter" className="twitter">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fab-twitter"
                              viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                            </svg>
                          </a>
                        </li>
                        <li className="elementor-repeater-item-8f886e8">
                          <a href="#" aria-label="LinkedIn" className="in">
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fab-linkedin-in"
                              viewBox="0 0 448 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                            </svg>
                          </a>
                        </li>
                        <li className="elementor-repeater-item-c8596be">
                          <a
                            href="#"
                            aria-label="Instagram"
                            className="instagram"
                          >
                            <svg
                              aria-hidden="true"
                              className="e-font-icon-svg e-fab-instagram"
                              viewBox="0 0 448 512"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-element elementor-element-1d9e780b e-flex e-con-boxed e-con e-parent"
            data-id="1d9e780b"
            data-element_type="container"
            data-settings='{"background_background":"classic"}'
          >
            <div className="e-con-inner">
              <div
                className="elementor-element elementor-element-327b824 elementor-widget elementor-widget-elementskit-heading"
                data-id="327b824"
                data-element_type="widget"
                data-widget_type="elementskit-heading.default"
              >
                <div className="elementor-widget-container">
                  <div className="ekit-wid-con">
                    <div className="ekit-heading elementskit-section-title-wraper text_left   ekit_heading_tablet-   ekit_heading_mobile-text_center">
                      <p className="ekit-heading--title elementskit-section-title ">
                        ©2025.AI Football Coach Inc All Rights Reserved.
                      </p>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
