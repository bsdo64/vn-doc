import React, { Component } from 'react';

const style = require('./index.css');

class Layout extends Component {

  render() {
    return (
      <div className={style.appRoot}>
        <header className={style.headerLayout}>
          <div className={style.header}>
            <a href="/" className="navigation__logo">
              <img className="logo" src="/cd0bb358c45b584743d8ce4991777c42.svg" />
            </a>

            <nav className="navigation__links">
              <a href="/concepts" className="navigation__link ">Concepts</a>
              <a href="/guides"
                                                                                                        className="navigation__link ">Guides</a><a
              href="/configuration" className="navigation__link ">Documentation</a><a href="///opencollective.com/webpack"
                                                                                  target="_blank"
                                                                                  className="navigation__link ">Donate</a><a
              href="///medium.com/webpack" target="_blank" className="navigation__link ">Blog</a></nav>
          </div>
        </header>

        <div className={style.container}>
          <div className={style.content}>content</div>

          <div className={style.right}>right side menu</div>
        </div>

        <div className={style.footer}>
          <div>footer</div>
        </div>

      </div>
    );
  }
}

export default Layout;