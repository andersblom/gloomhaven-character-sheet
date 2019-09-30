import React from 'react';

import { StyledPanel } from './Panel.styles'

interface Props {
  children: React.ReactNode;
}

const Panel: React.FunctionComponent<Props> = ({ children }) => (
  <StyledPanel>{children}</StyledPanel>
);

export default Panel;