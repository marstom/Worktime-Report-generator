import { useRef } from "react";
import styles from "./side_menu.module.css";

export default () => {
  const sideMenuRef = useRef();
  const containerRef = useRef();

  const closeMenu = () => {
    sideMenuRef.current.style.width = 0;
    containerRef.current.style.marginLeft = 0;
  };
  const openMenu = () => {
    sideMenuRef.current.style.width = "250px";
    containerRef.current.style.marginLeft = "250px";
  };

  return (
    <div>
      <a onClick={() => openMenu()}> openMenu </a>
      <div className={styles.sideMenu} ref={sideMenuRef}>
        This is side menu
        <a href="#" onClick={() => closeMenu()} className={styles.closeButton}>
          &times;
        </a>
        <a href="#">One</a>
        <a href="#">One</a>
        <a href="#">One</a>
        <a href="#">One</a>
      </div>
      <div ref={containerRef} className={styles.containter}>
        <h1>This is page title</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tristique mattis nibh nec rutrum. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Aenean velit
          augue, commodo in tristique eu, fringilla nec elit. Aliquam ac urna
          consequat, faucibus velit nec, finibus justo. Fusce cursus elit sed
          pulvinar blandit. Aenean elementum a magna nec suscipit. Donec
          volutpat mollis turpis, nec hendrerit arcu molestie ac. Mauris
          interdum ante a sollicitudin euismod. Vestibulum euismod commodo
          dapibus. Fusce molestie tincidunt dolor, in rhoncus neque sagittis id.
          Nulla facilisi. Quisque euismod mollis congue. Pellentesque aliquet
          enim vel vehicula porta. Pellentesque et nunc ornare, suscipit ex ut,
          fermentum sem. Ut iaculis iaculis risus sit amet facilisis. Cras id
          erat ac tellus ultrices convallis eu dignissim mi. Cras ante urna,
          porttitor in dui vitae, imperdiet tempus mi. Aliquam molestie libero
          non accumsan vestibulum. Curabitur volutpat eget felis eget viverra.
          Sed commodo mollis ante non vehicula. Donec commodo, orci ac ultricies
          tristique, diam augue rutrum odio, sit amet blandit sem mi vel neque.
          Sed eu eleifend purus, mollis dictum mi. Etiam et cursus lacus, et
          suscipit nibh. Etiam at odio nisl. Nullam posuere molestie erat sit
          amet dignissim. Pellentesque a faucibus massa. Curabitur sit amet
          lorem pellentesque nibh scelerisque tempor. Pellentesque posuere ipsum
          dui, ac lacinia purus iaculis eget. Aliquam velit nibh, euismod sed
          auctor ut, blandit at odio. Vestibulum luctus, mauris non ultricies
          sagittis, ligula ligula imperdiet massa, ac pharetra ipsum neque vitae
          nisi. Nunc aliquet risus eget ex faucibus, et dictum enim laoreet.
          Duis aliquet hendrerit enim, a laoreet ligula tincidunt quis.{" "}
        </span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tristique mattis nibh nec rutrum. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Aenean velit
          augue, commodo in tristique eu, fringilla nec elit. Aliquam ac urna
          consequat, faucibus velit nec, finibus justo. Fusce cursus elit sed
          pulvinar blandit. Aenean elementum a magna nec suscipit. Donec
          volutpat mollis turpis, nec hendrerit arcu molestie ac. Mauris
          interdum ante a sollicitudin euismod. Vestibulum euismod commodo
          dapibus. Fusce molestie tincidunt dolor, in rhoncus neque sagittis id.
          Nulla facilisi. Quisque euismod mollis congue. Pellentesque aliquet
          enim vel vehicula porta. Pellentesque et nunc ornare, suscipit ex ut,
          fermentum sem. Ut iaculis iaculis risus sit amet facilisis. Cras id
          erat ac tellus ultrices convallis eu dignissim mi. Cras ante urna,
          porttitor in dui vitae, imperdiet tempus mi. Aliquam molestie libero
          non accumsan vestibulum. Curabitur volutpat eget felis eget viverra.
          Sed commodo mollis ante non vehicula. Donec commodo, orci ac ultricies
          tristique, diam augue rutrum odio, sit amet blandit sem mi vel neque.
          Sed eu eleifend purus, mollis dictum mi. Etiam et cursus lacus, et
          suscipit nibh. Etiam at odio nisl. Nullam posuere molestie erat sit
          amet dignissim. Pellentesque a faucibus massa. Curabitur sit amet
          lorem pellentesque nibh scelerisque tempor. Pellentesque posuere ipsum
          dui, ac lacinia purus iaculis eget. Aliquam velit nibh, euismod sed
          auctor ut, blandit at odio. Vestibulum luctus, mauris non ultricies
          sagittis, ligula ligula imperdiet massa, ac pharetra ipsum neque vitae
          nisi. Nunc aliquet risus eget ex faucibus, et dictum enim laoreet.
          Duis aliquet hendrerit enim, a laoreet ligula tincidunt quis.{" "}
        </span>
      </div>
      <button className="btn btn-primary">guzik</button>
    </div>
  );
};
