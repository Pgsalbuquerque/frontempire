import { DivCard } from '../../styles/list';
import {Name, Email, Cpf, Telephone, Indicator} from './_cardstyle';

function ClientCard(props) {
    return (
        <DivCard>
            <Name>{props.name}</Name>
            <Cpf>{props.cpf}</Cpf>
            <Email>{props.email}</Email>
            <Telephone>{props.telephone}</Telephone>
            {props.Telephone2 ? <Telephone>{props.Telephone2}</Telephone> : <></>}
            {props.Telephone3 ? <Telephone>{props.Telephone3}</Telephone> : <></>}
            {props.indicator ? <Indicator>{props.indicator}</Indicator>: <></>}
        </DivCard>
    )
}

export default ClientCard;