import * as S from "./styles"
import { MdKeyboardArrowUp, MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import { useState } from "react";
import { Dates } from "../../../constant";
import Cd from "../../../components/Cd";
import CdPlayer from "../../../assets/img/cd_player.svg"

const CURRENT_YEAR = new Date().getFullYear()
const CURRENT_MONTH = new Date().getMonth()

const OffContainer = () => {
    const [year, setYear] = useState<number>(CURRENT_YEAR)
    const [month, setMonth] = useState<number>(CURRENT_MONTH + 1)

    return (
        <S.OffContainer>
            <S.SwitchContainer>
                <MdKeyboardArrowUp size={50} />
                <S.Text fontSize="23px">스위치를 키고 감정을 봐요</S.Text>
            </S.SwitchContainer>
            <S.Inner>
                <S.CdPlayer src={CdPlayer} alt="cd player" />
            </S.Inner>
            <S.Outer>
                <S.YearContainer>
                    <MdOutlineArrowLeft
                        size={100}
                        style={{ cursor: "pointer" }}
                        onClick={() => setYear(year => year - 1)} />
                    <S.Text fontSize="50px">{year}</S.Text>
                    <MdOutlineArrowRight
                        size={100}
                        style={{ cursor: "pointer" }}
                        onClick={() => year < CURRENT_YEAR && setYear(year => year + 1)} />
                </S.YearContainer>

                <S.MonthContainer>
                    <MdOutlineArrowLeft
                        size={100}
                        style={{ cursor: "pointer" }}
                        onClick={() => month > 1 && setMonth(month => month - 1)} />
                    <S.Text fontSize="50px">{month}</S.Text>
                    <MdOutlineArrowRight
                        size={100}
                        style={{ cursor: "pointer" }}
                        onClick={() => month < 12 && setMonth(month => month + 1)} />
                </S.MonthContainer>
            </S.Outer>
            <S.CdContainer>
                {Dates.map((date) => (
                    <Cd key={date.id} created_at={date.created_at} />
                ))}
            </S.CdContainer>
        </S.OffContainer>
    )
}

export default OffContainer