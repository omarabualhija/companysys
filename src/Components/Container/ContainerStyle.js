import styled from 'styled-components'

export const ContainerStyled=styled.div `
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;

@media (min-width: 768px) {
  /* Small */
        width: 750px;
    }

@media (min-width: 992px) {
  /* Medium */
        width: 970px;
    }


@media (min-width: 1200px) {
    /* Large */
        width: 1170px;
    }
`