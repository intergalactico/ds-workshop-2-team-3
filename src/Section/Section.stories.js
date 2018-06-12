import React from 'react';
import { storiesOf } from '@storybook/react';
/*
 * withInfo is an addon which provides a block with
 * information about the component. It includes the
 * code samples and properties documentation.
 */
import { withInfo } from '@storybook/addon-info';

/*
 * This story (documentation) shows how to use the Section component and its
 * helping sub-components for the texts. The subcomponents are imported
 * as one object and are renamed to "t", this is shorter. Look below how
 * to wrap texts with them.
 */
import styled, { injectGlobal } from 'styled-components';
import Section, {SectionHeader, SectionText, invSection} from '.';
import * as ts from '../Typography/styles';

const container = styled.section`
  background: red;
`;


storiesOf('Section', module) // eslint-disable-line no-undef
  .add('index',
    withInfo(`Section component provides a container with paddings.`)(() => (
      <Section>
        <ts.Header2>Keynotes, talks and workshops from the forefront of Design Systems.</ts.Header2>
        <ts.BodyLarge>DSCONF has 4 long, and 6 shorter speeches during the conference day. We are aiming to bring abundance of tangible information to attendees with real cases and learnings. 
        The second day of DSCONF is dedicated to workshops. There is a total number of 5 workshops, and you can purchase them separately.
        The workshops are either half-day or full-day.
		</ts.BodyLarge>
      </Section>
  ))).add('inverted',
    withInfo(`Section component provides an inverted container with paddings.`)(() => (
      <Section>
        <ts.Header2 inverted>Keynotes, talks and workshops from the forefront of Design Systems.</ts.Header2>
        <ts.BodyLarge inverted>DSCONF has 4 long, and 6 shorter speeches during the conference day. We are aiming to bring abundance of tangible information to attendees with real cases and learnings. 
        The second day of DSCONF is dedicated to workshops. There is a total number of 5 workshops, and you can purchase them separately.
        The workshops are either half-day or full-day.
		</ts.BodyLarge>
      </Section>
  )));
