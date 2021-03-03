import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

export type CardBodyProps = SpaceProps

const CardBody = styled.div<CardBodyProps>`
  ${space}
`

CardBody.defaultProps = {
  p: '24px 24px 36px 24px',
}

export default CardBody
