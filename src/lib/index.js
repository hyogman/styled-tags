import * as React from "react";
import styled from "styled-components";
import parmaCase from "param-case";

export function mapPropsToStyles(props) {
  return Object.keys(props).map(key => {
    const parmaKey = parmaCase(key);
    switch (key) {
      case "pseudo":
      case "media":
        return `${props[key]};`;
      default:
        return `${parmaKey}: ${props[key]};`;
    }
  });
}

export const Div = styled.div`
  ${props => mapPropsToStyles(props)};
`;

export const H1 = styled.h1`
  ${props => mapPropsToStyles(props)};
`;

export const H2 = styled.h2`
  ${props => mapPropsToStyles(props)};
`;

export const H3 = styled.h3`
  ${props => mapPropsToStyles(props)};
`;

export const H4 = styled.h4`
  ${props => mapPropsToStyles(props)};
`;

export const H5 = styled.h5`
  ${props => mapPropsToStyles(props)};
`;

export const H6 = styled.h6`
  ${props => mapPropsToStyles(props)};
`;

export const P = styled.p`
  ${props => mapPropsToStyles(props)};
`;

export const Li = styled.li`
  ${props => mapPropsToStyles(props)};
`;

export const Ul = styled.ul`
  ${props => mapPropsToStyles(props)};
`;

export const Ol = styled.ol`
  ${props => mapPropsToStyles(props)};
`;

export const Body = styled.body`
  ${props => mapPropsToStyles(props)};
`;

export const Span = styled.span`
  ${props => mapPropsToStyles(props)};
`;

export const Header = styled.header`
  ${props => mapPropsToStyles(props)};
`;

export const Footer = styled.footer`
  ${props => mapPropsToStyles(props)};
`;

export const Img = styled.img`
  ${props => mapPropsToStyles(props)};
`;
