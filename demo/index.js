import { html } from 'lit-html';
import { ArcDemoPage } from '@advanced-rest-client/arc-demo-helper/ArcDemoPage.js';
import '@advanced-rest-client/arc-demo-helper/arc-demo-helper.js';
import '@polymer/iron-image/iron-image.js';
import '@anypoint-web-components/anypoint-item/anypoint-item.js';
import '@anypoint-web-components/anypoint-listbox/anypoint-listbox.js';
import './simple-dropdown.js';

class ComponentDemo extends ArcDemoPage {
  constructor() {
    super();
    this._componentName = 'anypoint-dropdown';
    this.items = [
      'allosaurus',
      'brontosaurus',
      'carcharodontosaurus',
      'diplodocus',
      'ekrixinatosaurus',
      'fukuiraptor',
      'gallimimus',
      'hadrosaurus',
      'iguanodon',
      'jainosaurus',
      'kritosaurus',
      'liaoceratops',
      'megalosaurus',
      'nemegtosaurus',
      'ornithomimus',
      'protoceratops',
      'quetecsaurus',
      'rajasaurus',
      'stegosaurus',
      'triceratops',
      'utahraptor',
      'vulcanodon',
      'wannanosaurus',
      'xenoceratops',
      'yandusaurus',
      'zephyrosaurus'
    ];
  }

  contentTemplate() {
    return html`
      <div class="card">
        <h3>Basic</h3>
        <arc-demo-helper>
          <template>
            <simple-dropdown>
              <button slot="dropdown-trigger">Basic</button>
              <div slot="dropdown-content" class="random-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </div>
            </simple-dropdown>

            <simple-dropdown disabled>
              <button slot="dropdown-trigger">Disabled</button>
              <div slot="dropdown-content" class="random-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </div>
            </simple-dropdown>

            <simple-dropdown noanimations>
              <button slot="dropdown-trigger">No animations</button>
              <div slot="dropdown-content" class="random-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </div>
            </simple-dropdown>
          </template>
        </arc-demo-helper>
      </div>

      <div class="card">
        <h3>Alignment</h3>
        <arc-demo-helper>
          <template>
            <simple-dropdown horizontalalign="left" verticalalign="bottom">
              <button slot="dropdown-trigger">Bottom-left Aligned</button>
              <div slot="dropdown-content" class="random-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </div>
            </simple-dropdown>
            <simple-dropdown horizontalalign="right" verticalalign="top">
              <button slot="dropdown-trigger">Top-right Aligned</button>
              <div slot="dropdown-content" class="random-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </div>
            </simple-dropdown>
          </template>
        </arc-demo-helper>
      </div>

      <div class="card">
        <h3>Scroll actions</h3>
        <arc-demo-helper>
          <template>
            <simple-dropdown scrollaction="refit">
              <button slot="dropdown-trigger">Refit on scroll</button>
              <div slot="dropdown-content" class="random-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </div>
            </simple-dropdown>
            <simple-dropdown scrollaction="cancel">
              <button slot="dropdown-trigger">Close on scroll</button>
              <div slot="dropdown-content" class="random-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </div>
            </simple-dropdown>
          </template>
        </arc-demo-helper>
      </div>

      <div class="card">
        <h3>Content</h3>

        <simple-dropdown horizontalalign="left" verticalalign="bottom">
          <button slot="dropdown-trigger">Content</button>
          <iron-image
            slot="dropdown-content"
            src="./mulesoft-icon.svg"
            sizing="cover"
            class="mulesoft-logo"
          ></iron-image>
        </simple-dropdown>

        <simple-dropdown horizontalalign="right" verticalalign="bottom">
          <button slot="dropdown-trigger">Unordered list</button>
          <ul slot="dropdown-content" tabindex="0">
          ${this.items.map((item) => html`<li><a href="javascript:void(0)">${item}</a></li>`)}
          </ul>
        </simple-dropdown>
      </div>

      <div class="card">
        <h3>Antypoint components</h3>

        <simple-dropdown horizontalalign="right" verticalalign="bottom">
          <button slot="dropdown-trigger">Anypoint items</button>
          <div slot="dropdown-content">
          ${this.items.map((item) => html`<anypoint-item>${item}</anypoint-item>`)}
          </div>
        </simple-dropdown>

        <simple-dropdown horizontalalign="right" verticalalign="bottom">
          <button slot="dropdown-trigger">Anypoint listbox</button>
          <anypoint-listbox slot="dropdown-content">
          ${this.items.map((item) => html`<anypoint-item>${item}</anypoint-item>`)}
          </anypoint-listbox>
        </simple-dropdown>
      </div>
    `;
  }
}
const instance = new ComponentDemo();
instance.render();
window.demo = instance;
