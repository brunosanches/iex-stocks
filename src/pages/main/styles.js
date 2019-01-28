import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  max-width: 1334px;
  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;
  background: #fff;
  display: flex;

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
    padding-right: 0;
    padding-left: 0;
  }
`
