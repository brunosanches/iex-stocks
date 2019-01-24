import styled from 'styled-components'

export const HeaderBox = styled.header`
  & .header {
    &__content {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #673ab7;
      width: 100%;
      color: #fff;
      height: 60px;

      & h1 {
        font-size: 36px;
        font-weight: 700;
      }
    }

    &__symbols {
      background: #fff;
      width: 100%;

      & ul {
        display: flex;
        align-items: center;
        list-style: none;
        height: 55px;

        li {
          display: flex;
          align-items: center;
          height: 100%;
        }
      }
    }
  }
`

export const Form = styled.form`
  display: flex;
  right: 16px;
  position: absolute;

  & input[type='search'] {
    background: #fff;
    border: none;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    height: 32px;
    padding: 0 15px;
    min-width: 280px;
  }

  & button {
    border: none;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    width: 64px;
    height: 32px;
    cursor: pointer;
    color: #b084f4;
    font-weight: 700;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAAmJLR0QA/4ePzL8AAADDSURBVBgZfcE9K0VxHADg3znqDvIZDDZRprPcEGWxMHjJYmAxCikTx+CWyaKYZKKkTD6PwcIgMd/OQ53Ovf6l+zzRkJmwYMpQ/MeOV7V3B/JIucaTDYVVdyoP8uizjb3osalyGA2ZF8+RcOtDK2rGsRIJs5iJmjkUkTCK9aiZxHIktDEfNbk3j5Fw5ctwNOxiK3os6TqNPpl7lRttYwqXujiPv+SOfKp9K52gEykt09YsGolfjtGJQezjIgZR4iwGUfIDZ6We77PvtTwAAAAASUVORK5CYII=')
      #b084f4 no-repeat center;
    text-indent: -9999px;
  }

  & button:hover {
    opacity: 0.9;
  }
`
