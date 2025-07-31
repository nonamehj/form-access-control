import "./ButtonStyle.css";
import { useApiContext } from "./../../apiContext";
const Button = () => {
  const { isLoading, page, nbPages, handlePage } = useApiContext();

  return (
    <div className="btn-container">
      <div className="btn-page-center">
        <button disabled={isLoading} onClick={() => handlePage("dec")}>
          이전
        </button>
        <p>
          {page + 1} of {nbPages}
        </p>
        <button disabled={isLoading} onClick={() => handlePage("inc")}>
          다음
        </button>
      </div>
    </div>
  );
};

export default Button;
