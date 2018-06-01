import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Video from '../Video/Video';
import Grommet from '../Grommet/Grommet';

class SimpleVideo extends Component {
  render() {
    return (
      <Grommet>
        <Video>
          <source src='http://techslides.com/demos/sample-videos/small.webm' type='video/webm' />
          <source src='http://techslides.com/demos/sample-videos/small.ogv' type='video/ogg' />
          <source src='http://techslides.com/demos/sample-videos/small.mp4' type='video/mp4' />
          <source src='http://techslides.com/demos/sample-videos/small.3gp' type='video/3gp' />
        </Video>
      </Grommet>
    );
  }
}


storiesOf('Video', module)
  .add('Simple Video', () => <SimpleVideo />);