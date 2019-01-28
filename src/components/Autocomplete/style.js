import styled from 'styled-components'

export const AutocompleteBox = styled.div`
  .no-suggestions {
    color: #673ab7;
    padding: 0.5rem;
    position: absolute;
    top: 33px;
    z-index: 1;
    background: #fff;
    width: 357px;
    border: 1px solid #673ab7;
    font-weight: 700;
  }

  .suggestions {
    border: 1px solid #673ab7;
    border-top-width: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    list-style: none;
    margin-top: 0;
    width: 100%;
    max-height: 240px;
    overflow-y: auto;
    padding-left: 0;
    position: absolute;
    z-index: 1;
    background: #f5f5f5;
    top: 33px;
    font-size: 14px;
  }

  .suggestions li {
    padding: 0.5rem;
    color: #000;
  }

  .suggestion-active,
  .suggestions li:hover {
    background-color: #673ab7;
    color: #fff !important;
    cursor: pointer;
    font-weight: 700;
  }

  .suggestions li:not(:last-of-type) {
    border-bottom: 1px solid #673ab7;
  }
`

export const Form = styled.form`
  display: flex;
  right: 16px;
  position: absolute;

  & input[type='text'] {
    background: #fff;
    border: none;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    height: 32px;
    padding: 0 15px;
    min-width: 280px;
    outline: none;

    @media (max-width: 1024px) {
      min-width: 180px;
    }
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
