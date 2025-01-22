import { useSelector } from "react-redux";

import { update } from "../../utils/utils";

import { ButtonUpdate, Main, Text } from "./styled"

export const OfflinePage = () => {
    const themeState = useSelector((state) => state.persistedReducer.themes.themes);

    const styled = {
        colorLight: themeState.light
    }
    return(
        <Main>
            <Text color={styled.colorLight}>Please check your internet connection and try again</Text>
            <ButtonUpdate onClick={update} sx={{color: styled.colorLight}} >Try again</ButtonUpdate>
        </Main>
    )
}