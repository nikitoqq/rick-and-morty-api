import { useDispatch, useSelector } from "react-redux";

import { pageDecrement, pageIncrement, pageReset } from "../../features/page";

import { ThisPage, PaginationBox, PaginationButton } from "./styled";

export const AppFooter = ({ data }) => {
  const dispatch = useDispatch();
  const [themeState, pageState] = [
    useSelector((state) => state.persistedReducer.themes.themes),
    useSelector((state) => state.otherReducer.page.page),
  ];

  const styled = { bgcolor: themeState.main, color: themeState.contrastText };

  return (
    <PaginationBox>
      <PaginationButton
        sx={styled}
        disabled={pageState === 1 ? true : false}
        onClick={() => dispatch(pageDecrement())}
      >
        Prev
      </PaginationButton>
      <ThisPage sx={styled}>{pageState}</ThisPage>
      <PaginationButton
        sx={styled}
        onClick={() =>
          pageState === data.data.info.pages
            ? dispatch(pageReset())
            : dispatch(pageIncrement())
        }
      >
        Next
      </PaginationButton>
    </PaginationBox>
  );
};
