import React from 'react';
import * as Styled from './styles';

export interface InfoTopo {
    Title: string;
}

const Topo: React.FC<InfoTopo> = ({Title}) => {

    return (
            <Styled.Topo>
                <Styled.Info>
                    <Styled.ContainerText>
                        <Styled.Text>
                            {Title}
                        </Styled.Text>
                    </Styled.ContainerText>
                </Styled.Info>
                <Styled.Logo>
                </Styled.Logo>
            </Styled.Topo>
    );
};

export default Topo;
