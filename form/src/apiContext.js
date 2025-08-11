import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";
import reducer from "./reducer";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";
const initialState = {
  isLoading: true,
  hits: [],
  query: "react",
  page: 0,
  nbPages: 0,
};

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("react");
  const timeoutRef = useRef(null);
  const fetchStories = useCallback(async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const handleResetStories = useCallback(
    (type) => {
      const searchQuery = type === "login" ? inputValue : "react";
      const pageValue = type === "login" ? state.page : 0;
      setInputValue(searchQuery);
      fetchStories(`${API_ENDPOINT}query=${searchQuery}&page=${pageValue}`);
    },
    [fetchStories, inputValue, state.page]
  );
  const handleSearch = useCallback((query) => {
    setInputValue(query);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      dispatch({ type: HANDLE_SEARCH, payload: query });
    }, 500);
  }, []);
  const removeStory = useCallback((id) => {
    dispatch({ type: REMOVE_STORY, payload: id });
  }, []);
  const handlePage = useCallback((value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  }, []);
  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page, fetchStories]);

  return (
    <ApiContext.Provider
      value={{
        ...state,
        dispatch,
        handleSearch,
        removeStory,
        inputValue,
        handlePage,
        handleResetStories,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApiContext = () => useContext(ApiContext);

export { ApiContext, ApiProvider };
