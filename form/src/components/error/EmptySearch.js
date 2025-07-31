import { useApiContext } from "../../apiContext";
import "./EmptySearchStyle.css";
const EmptySearch = () => {
  const { handleResetStories } = useApiContext();

  return (
    <div className="empty-search-center">
      <p className="empty-title">검색 결과가 없습니다</p>
      <button className="reset-btn" onClick={handleResetStories}>
        새로고침
      </button>
    </div>
  );
};

export default EmptySearch;
