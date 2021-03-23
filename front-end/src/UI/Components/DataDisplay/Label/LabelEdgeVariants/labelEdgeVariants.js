import styled from "styled-components";
import LabelBase from "../LabelBase";

const LabelLeftEdgeCuted = styled(LabelBase)`
  clip-path: polygon(10px 0, 100% 0%, 100% 100%, 0 100%, 0 10px);
  padding-left: 15px;
`;

const LabelRightEdgeCuted = styled(LabelBase)`
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
`;

const LabelBothEdgeCuted = styled(LabelBase)`
  padding-left: 15px;
  clip-path: polygon(
    10px 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% 100%,
    0 100%,
    0 10px
  );
`;

export default {
  leftEdge: LabelLeftEdgeCuted,
  rightEdge: LabelRightEdgeCuted,
  bothEdge: LabelBothEdgeCuted,
};
