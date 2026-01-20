import React from 'react';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

type ModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Modal({ setShowModal }: ModalProps) {
  
   
  
  
    return (
    <div
      style={{
        position: 'absolute',
        left: '45%',
        top: '40%',
        zIndex: '999',
        width: '300px',
        height: '200px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#d0cfcfff',
        padding: '0 10px 0 10px',
      }}
    >
      <CloseIcon
        style={{
          position: 'absolute',
          right: '-18',
          top: '-8',
          cursor: 'pointer',
        }}
        onClick={() => setShowModal(false)}
      />
      <Button style={{ height: '50px' }} variant="contained">
        Məhsulu sil
      </Button>
      <Button style={{ height: '50px' }} variant="outlined">
        Geri qayıt
      </Button>
    </div>
  );
}
