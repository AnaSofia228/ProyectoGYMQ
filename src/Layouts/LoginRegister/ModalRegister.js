import React from "react";
import styled from "styled-components";

const ModalLogin = ({children, estado, cambiarEstado}) => {
    return (
        <>
            {estado && 
                <Overlay>
                    <ContenedorModal>

                        <BotonCerrar onClick={() => cambiarEstado(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </BotonCerrar>
                        {children}
                    </ContenedorModal>
                </Overlay>
            }
        </>
    );
}

export default ModalLogin;

const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(154, 153, 153, 0.49);
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContenedorModal = styled.div`
    width: 500px;
    height: 35rem;
    background: #000;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    padding: 20px;
`;

const BotonCerrar = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3 ease all;
    border-radius: 5px;
    color: #1766DC;

    &:hover {
        background: #f2f2f2;
    }

    svg {
        width: 100%;
        height: 100%;
        margin-top: 0.2rem;
    }
`;