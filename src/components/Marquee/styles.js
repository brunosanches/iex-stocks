import styled from 'styled-components'

export const MarqueeBox = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  margin: 0 auto;
  max-width: 1334px;
  height: 82px;

  @media (min-width: 1280px) and (max-width: 1365px) {
    max-width: 1248px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    max-width: 992px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 736px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
    margin-right: 0;
    margin-left: 0;
  }
`
export const MarqueeChild = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #fff;
  transform: translate3d(0, 0, 0);

  .marquee-child__box {
    display: inline-block;
    width: 140px;
    margin-right: 16px;
    padding-top: 16px;
    cursor: pointer;
  }
`
