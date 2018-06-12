/*
 * Typography component is needed to provide global CSS such as
 * font and styles to use across all the other components.
 * As other components, it consists of a React commponent, styled
 * component and a story (documentation). But unlike others this
 * React component is not supposed to be re-used. The code below
 * is only needed to render the texts with specific styles. Other
 * components that need typography styles can directly use
 * the Typography styled component. You can see an example of that
 * in TeamMember component.
         <ts.Lato>Title XL</ts.Lato>
 */


import React from 'react';

import * as ts from './styles.js';

const Inverted = () => {

  return (
    <div>
      <div>
        <ts.Header1 inverted>Title Extra Large</ts.Header1>
        <pre><code>{`import * as ts from '../Typography/styles.js
<ts.Header1>I am Header1</ts.Header1>
`}</code></pre>
      </div>
      <div>
        <ts.Header2 inverted>Title Large</ts.Header2>
        <pre><code>{`import * as ts from '../Typography/styles.js
<ts.Header2>I am Header2</ts.Header2>
`}</code></pre>
      </div>
      <div>
        <ts.Header3 inverted>Title Medium</ts.Header3>
        <pre><code>{`import * as ts from '../Typography/styles.js
<ts.Header3>I am Header3</ts.Header3>
`}</code></pre>
      </div>
      <div>
        <ts.Header4 inverted>Title Small</ts.Header4>
        <pre><code>{`import * as ts from '../Typography/styles.js
<ts.Header4>I am Header4</ts.Header4>
`}</code></pre>
      </div>
      <div>
        <ts.Header5 inverted>Subtitle Xtrasmall</ts.Header5>
        <pre><code>{`import * as ts from '../Typography/styles.js
<ts.Header5>I am Header5</ts.Header5>
`}</code></pre>
      </div>
      <div>
        <ts.P inverted>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ts.P>
        <pre><code>{`import * as ts from '../Typography/styles.js
<ts.P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ts.P>
`}</code></pre>
      </div>

      <div>
        <ts.Body inverted>Body</ts.Body>
        <pre><code>{`import * as ts from '../Typography/styles.js
<ts.Body>I am Header5</ts.Body>
`}</code></pre>
      </div>
      <div>
        <ts.BodyLarge inverted>Body Large</ts.BodyLarge>
        <pre><code>{`import * as ts from '../Typography/styles.js
<ts.BodyLarge>I am BodyLarge</ts.BodyLarge>
`}</code></pre>
      </div>

      <div>
        <ts.Disclamer inverted>Disclamer</ts.Disclamer>
        <pre><code>{`import * as ts from '../Typography/styles.js
<ts.Disclamer>I am Disclamer</ts.Disclamer>
`}</code></pre>
      </div>

    </div>
  );
};

export default Inverted;
