import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";

export const Container = styled.div`
  .MuiTab-wrapper {
    color: #ffffff;
  }
  .PrivateTabIndicator-root-1 {
    background-color: #63dafd;
    padding-bottom: 2px;
  }
  button {
    background-color: #2b2b2b;
  }
`;

export const StyledSwipeableViews = styled(SwipeableViews)`
  height: 100%;
  > .react-swipeable-view-container,
  > .react-swipeable-view-container > div,
  > .react-swipeable-view-container > div > div {
    height: 100%;
  }
`;
