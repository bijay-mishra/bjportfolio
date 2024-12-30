"use client";
const type = {
  MODE: "MODE",
  BANNER_TYPE: "BANNER_TYPE",
  BANNER_IMAGE: "BANNER_IMAGE",
  PAGE_INFO: "PAGE_INFO",
};
const { MODE, BANNER_TYPE, PAGE_INFO, BANNER_IMAGE } = type;

import { createContext, useCallback, useReducer, ReactNode } from "react";

interface State {
  mode: boolean;
  banner_image: string;
  banner_type: string;
  page_info: {
    pageTitle: string;
    subTitle: string;
    pageName: string;
    scroll_down: boolean;
  };
}

interface Action {
  type: string;
  payload: any;
}

const context = createContext<any>(null);

const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case MODE:
      return {
        ...state,
        mode: payload,
      };
    case BANNER_TYPE:
      return {
        ...state,
        banner_type: payload,
      };
    case BANNER_IMAGE:
      return {
        ...state,
        banner_image: payload,
      };
    case PAGE_INFO:
      return {
        ...state,
        page_info: payload,
      };
    default:
      return state;
  }
};

const StateProvider = (props: { children: ReactNode }) => {
  const initialState: State = {
    mode: false,
    banner_image: "/img/banner.jpg",
    banner_type: "",
    page_info: { pageTitle: "", subTitle: "", pageName: "", scroll_down: true },
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const modeChange = useCallback((value: boolean) => {
    console.log("modeChange -> value", value);
    
    dispatch({
      type: MODE,
      payload: value,
    });
  }, []);

  const banner_type_function = useCallback((value: string) => {
    dispatch({
      type: BANNER_TYPE,
      payload: value,
    });
  }, []);

  const banner_image_function = useCallback((value: string) => {
    dispatch({
      type: BANNER_IMAGE,
      payload: value,
    });
  }, []);

  const page_info_function = useCallback(
    (pageTitle: string, subTitle: string, pageName: string, scroll_down: boolean) => {
      dispatch({
        type: PAGE_INFO,
        payload: {
          pageTitle: pageTitle,
          subTitle: subTitle,
          pageName: pageName,
          scroll_down: scroll_down === false ? scroll_down : true,
        },
      });
    },
    []
  );

  const { mode, banner_type, banner_image, page_info } = state;
  return (
    <context.Provider
      value={{
        mode,
        modeChange,
        banner_type,
        banner_type_function,
        banner_image,
        banner_image_function,
        page_info,
        page_info_function,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default StateProvider;

export { context };