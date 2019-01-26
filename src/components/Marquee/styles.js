import styled from 'styled-components'

export const MarqueeBox = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background: #fff;
  margin: 0 auto;
  max-width: 1334px;
  height: 55px;
`
export const MarqueeChild = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
  transform: translate3d(0, 0, 0);

  img {
    display: inline-block;
    width: 180px;
    height: auto;
    margin-right: 16px;
  }
`
