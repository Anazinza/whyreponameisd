import * as S from "./styles"
import { Jungs } from "../../../constant";
import Jung from "../../../components/Jung";

const OnContainer = () => {
    return (
        <S.OnContainer>
            <S.JungsContainer>
                {Jungs.map((jung) => (
                    <Jung
                        key={jung.id}
                        id={jung.id}
                        title={jung.title}
                        emotion={jung.emotion}
                        content={jung.content} />
                ))}
            </S.JungsContainer>
            <S.ButtonContainer>
                <S.WriteBtn>융 쓰러가기</S.WriteBtn>
            </S.ButtonContainer>
        </S.OnContainer>
    )
}

export default OnContainer