import styled from 'styled-components';

export const ActionMenuWrapper = styled.div<{ isOpen: boolean }>`
  position: relative;

  .menu-icon {
    cursor: pointer;
    font-size: 24px;
  }

  .menu-list {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    right: 40px;
    top: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 100;

    .menu-item {
      padding: 10px;
      cursor: pointer;
      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    max-width: 700px;
    width: 90%;
    position: relative;

    h2 {
      margin-top: 0;
    }

    p {
      margin: 10px 0;
    }

    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background: transparent;
      border: none;
      font-size: 20px;
      cursor: pointer;
    }
  }
`;

// Additional global style to prevent background scrolling
export const disableBodyScroll = () => {
  document.body.style.overflow = 'hidden';
};

export const enableBodyScroll = () => {
  document.body.style.overflow = '';
};
